import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { sectionPresets } from "@/lib/templates";
import type { DocumentTemplate, LanguageMode, ProcessingOptions } from "@/lib/types";

const uploadsDir = path.join(process.cwd(), "storage", "uploads");

type ProcessInput = {
  inputText?: string;
  template: DocumentTemplate;
  mode: LanguageMode;
  options: ProcessingOptions;
  audioFile?: File | null;
  imageFile?: File | null;
};

function buildPrompt(transcript: string, template: DocumentTemplate, mode: LanguageMode, options: ProcessingOptions) {
  const sections = sectionPresets[template].join(", ");
  return `
Ты медицинский ассистент для врача. Преобразуй сырой текст в структурированный медицинский документ.

Требования:
- Язык ввода: ${mode}
- Шаблон документа: ${template}
- Разделы: ${sections}
- Исправить грамматику: ${options.fixGrammar ? "да" : "нет"}
- Медицинский стиль: ${options.medicalStyle ? "да" : "нет"}
- Сохранить смешанные термины: ${options.keepMixedTerms ? "да" : "нет"}
- Разбить по разделам: ${options.splitSections ? "да" : "нет"}
- Упростить текст: ${options.simplifyText ? "да" : "нет"}
- Формальный стиль: ${options.formalTone ? "да" : "нет"}

Верни только готовый документ без пояснений.

Сырой текст:
${transcript}
`.trim();
}

function fallbackStructuredText(transcript: string, template: DocumentTemplate) {
  const sections = sectionPresets[template];
  const sentences = transcript
    .split(/[.!?]\s+/)
    .map((item) => item.trim())
    .filter(Boolean);

  return sections
    .map((section, index) => `${section}: ${sentences[index] ?? sentences[0] ?? "Данные требуют уточнения."}`)
    .join("\n");
}

async function persistFile(file: File) {
  await mkdir(uploadsDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  const safeName = `${Date.now()}-${randomUUID()}-${file.name.replace(/\s+/g, "-")}`;
  const fullPath = path.join(uploadsDir, safeName);
  await writeFile(fullPath, buffer);
  return { fileName: safeName, fullPath };
}

async function transcribeAudio(file: File) {
  const openAiKey = process.env.OPENAI_API_KEY;
  if (!openAiKey) {
    return `Аудиофайл ${file.name} загружен. Для реальной расшифровки добавьте OPENAI_API_KEY в .env.local.`;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("model", "whisper-1");

  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openAiKey}`
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error(`Whisper transcription failed: ${response.status}`);
  }

  const data = (await response.json()) as { text: string };
  return data.text;
}

async function readImageText(file: File) {
  const openAiKey = process.env.OPENAI_API_KEY;
  const bytes = Buffer.from(await file.arrayBuffer());
  const base64 = bytes.toString("base64");
  const mimeType = file.type || "image/png";

  if (!openAiKey) {
    return `Изображение ${file.name} загружено. Для реального OCR добавьте OPENAI_API_KEY в .env.local.`;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openAiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: "Извлеки весь медицинский текст с изображения чата. Верни только текст без комментариев."
            },
            {
              type: "input_image",
              image_url: `data:${mimeType};base64,${base64}`
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`Image OCR failed: ${response.status}`);
  }

  const data = (await response.json()) as {
    output?: Array<{
      content?: Array<{ text?: string }>;
    }>;
  };

  return (
    data.output?.flatMap((item) => item.content ?? []).map((item) => item.text ?? "").join("\n").trim() ??
    ""
  );
}

async function structureText(transcript: string, template: DocumentTemplate, mode: LanguageMode, options: ProcessingOptions) {
  const provider = process.env.AI_PROVIDER ?? "openai";
  const openAiKey = process.env.OPENAI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  if (provider === "anthropic" && anthropicKey) {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": anthropicKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-latest",
        max_tokens: 1200,
        messages: [
          {
            role: "user",
            content: buildPrompt(transcript, template, mode, options)
          }
        ]
      })
    });

    if (response.ok) {
      const data = (await response.json()) as {
        content?: Array<{ text?: string }>;
      };
      return data.content?.map((item) => item.text ?? "").join("\n").trim() || fallbackStructuredText(transcript, template);
    }
  }

  if (openAiKey) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openAiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: "Ты медицинский ассистент. Возвращай только готовый документ без вводных слов."
          },
          {
            role: "user",
            content: buildPrompt(transcript, template, mode, options)
          }
        ]
      })
    });

    if (response.ok) {
      const data = (await response.json()) as {
        choices?: Array<{
          message?: {
            content?: string;
          };
        }>;
      };
      return data.choices?.[0]?.message?.content?.trim() || fallbackStructuredText(transcript, template);
    }
  }

  return fallbackStructuredText(transcript, template);
}

export async function processMedicalInput(input: ProcessInput) {
  let transcript = input.inputText?.trim() ?? "";
  let sourceType: "text" | "audio" | "image" = "text";
  let fileName: string | undefined;

  if (input.audioFile) {
    sourceType = "audio";
    const audioFile = input.audioFile;
    const stored = await persistFile(audioFile);
    fileName = stored.fileName;
    transcript = await transcribeAudio(audioFile);
  } else if (input.imageFile) {
    sourceType = "image";
    const imageFile = input.imageFile;
    const stored = await persistFile(imageFile);
    fileName = stored.fileName;
    transcript = await readImageText(imageFile);
  }

  const structuredText = await structureText(transcript, input.template, input.mode, input.options);

  return {
    transcript,
    structuredText,
    sourceType,
    fileName
  };
}
