"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Download, FileImage, FileUp, LoaderCircle, LogOut, Mic, Save, WandSparkles } from "lucide-react";
import type { AppUser, DocumentTemplate, LanguageMode, ProcessingOptions, RecordItem } from "@/lib/types";
import { medicalTemplates } from "@/lib/templates";

const defaultOptions: ProcessingOptions = {
  fixGrammar: true,
  medicalStyle: true,
  keepMixedTerms: true,
  splitSections: true,
  simplifyText: false,
  formalTone: true
};

export function WorkspaceApp({ initialUser, initialRecords }: { initialUser: AppUser; initialRecords: RecordItem[] }) {
  const router = useRouter();
  const [records, setRecords] = useState<RecordItem[]>(initialRecords);
  const [template, setTemplate] = useState<DocumentTemplate>("Амбулаторный прием");
  const [mode, setMode] = useState<LanguageMode>("auto");
  const [inputText, setInputText] = useState("");
  const [transcript, setTranscript] = useState("");
  const [structuredText, setStructuredText] = useState("");
  const [options, setOptions] = useState<ProcessingOptions>(defaultOptions);
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [status, setStatus] = useState("Готов к обработке");
  const [isPending, startTransition] = useTransition();
  const audioRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (records[0]) {
      setTranscript(records[0].transcript);
      setStructuredText(records[0].structuredText);
    }
  }, [records]);

  async function handleProcess() {
    setStatus("Идет обработка...");

    const formData = new FormData();
    formData.set("template", template);
    formData.set("mode", mode);
    formData.set("inputText", inputText);
    formData.set("fixGrammar", String(options.fixGrammar));
    formData.set("medicalStyle", String(options.medicalStyle));
    formData.set("keepMixedTerms", String(options.keepMixedTerms));
    formData.set("splitSections", String(options.splitSections));
    formData.set("simplifyText", String(options.simplifyText));
    formData.set("formalTone", String(options.formalTone));

    if (selectedAudio) {
      formData.set("audio", selectedAudio);
    }

    if (selectedImage) {
      formData.set("image", selectedImage);
    }

    const response = await fetch("/api/process", {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setStatus(data.error ?? "Ошибка обработки");
      return;
    }

    const data = (await response.json()) as { record: RecordItem };
    setTranscript(data.record.transcript);
    setStructuredText(data.record.structuredText);
    setRecords((current) => [data.record, ...current]);
    setStatus("Документ готов");
  }

  function exportText(fileName: string, content: string) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    startTransition(() => {
      router.push("/login");
      router.refresh();
    });
  }

  return (
    <div className="min-h-screen bg-[#F6FAFC]">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <div>
            <div className="text-xl font-semibold tracking-tight text-ink">QalamMed Workspace</div>
            <div className="text-sm text-slate">
              {initialUser.name} · {initialUser.email}
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink transition hover:border-slate-300"
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </button>
        </div>
      </header>

      <div className="section-shell grid gap-6 py-8 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <section className="rounded-[2rem] bg-[#0D1D31] p-6 text-white shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm text-white/60">Input sources</div>
                <h1 className="mt-2 text-2xl font-semibold">Сырая речь врача / raw input</h1>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
                {status}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {([
                { value: "ru", label: "Русский" },
                { value: "kz", label: "Қазақша" },
                { value: "auto", label: "Auto detect" }
              ] as const).map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setMode(item.value)}
                  className={`rounded-full px-4 py-3 text-sm font-medium transition ${
                    mode === item.value ? "bg-white text-ink" : "bg-white/8 text-white/74 hover:bg-white/12"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-white/85">Тип документа</label>
              <select
                value={template}
                onChange={(event) => setTemplate(event.target.value as DocumentTemplate)}
                className="w-full rounded-2xl border border-white/10 bg-[#122540] px-4 py-3 text-sm text-white outline-none"
              >
                {medicalTemplates.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-white/85">Текст врача</label>
              <textarea
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                className="h-48 w-full resize-none rounded-3xl border border-white/10 bg-[#112740] p-4 text-sm leading-7 text-white outline-none"
                placeholder="Введите текст, вставьте расшифровку или загрузите аудио / скриншот..."
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => audioRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink"
              >
                <Mic className="h-4 w-4" />
                Загрузить аудио
              </button>
              <button
                type="button"
                onClick={() => imageRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-3 text-sm font-semibold text-white"
              >
                <FileImage className="h-4 w-4" />
                Скриншот чата
              </button>
              <button
                type="button"
                onClick={handleProcess}
                disabled={isPending}
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-60"
              >
                {isPending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <WandSparkles className="h-4 w-4" />}
                Обработать
              </button>
            </div>

            <input
              ref={audioRef}
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={(event) => setSelectedAudio(event.target.files?.[0] ?? null)}
            />
            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(event) => setSelectedImage(event.target.files?.[0] ?? null)}
            />

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                ["fixGrammar", "Исправить грамматику"],
                ["medicalStyle", "Сделать медицинский стиль"],
                ["keepMixedTerms", "Сохранить mixed terms"],
                ["splitSections", "Разбить по разделам"],
                ["simplifyText", "Упростить текст"],
                ["formalTone", "Формальный стиль"]
              ].map(([key, label]) => (
                <label key={key} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/80">
                  <input
                    type="checkbox"
                    checked={options[key as keyof ProcessingOptions]}
                    onChange={(event) =>
                      setOptions((current) => ({
                        ...current,
                        [key]: event.target.checked
                      }))
                    }
                  />
                  {label}
                </label>
              ))}
            </div>

            {(selectedAudio || selectedImage) && (
              <div className="mt-4 rounded-2xl bg-white/8 px-4 py-3 text-sm text-white/80">
                {selectedAudio ? `Аудио: ${selectedAudio.name}` : null}
                {selectedAudio && selectedImage ? " · " : null}
                {selectedImage ? `Изображение: ${selectedImage.name}` : null}
              </div>
            )}
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
            <div className="grid gap-4 xl:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Распознанный текст</div>
                <div className="mt-3 min-h-52 rounded-3xl bg-mist p-4 text-sm leading-7 text-slate">
                  {transcript || "После обработки здесь появится transcript."}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Структурированный документ</div>
                <div className="mt-3 min-h-52 whitespace-pre-line rounded-3xl bg-[#F2FBFA] p-4 text-sm leading-7 text-ink">
                  {structuredText || "Здесь появится готовый документ для истории болезни."}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(structuredText)}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white"
              >
                <Save className="h-4 w-4" />
                Скопировать
              </button>
              <button
                type="button"
                onClick={() => exportText("medical-note.doc", structuredText)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink"
              >
                <FileUp className="h-4 w-4" />
                Экспорт в DOC
              </button>
              <button
                type="button"
                onClick={() => exportText("medical-note.txt", structuredText)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink"
              >
                <Download className="h-4 w-4" />
                Скачать TXT
              </button>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-ink">История записей</div>
                <div className="mt-1 text-sm text-slate">Локально сохраняется в `storage/db.json`.</div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {records.length === 0 ? (
                <div className="rounded-2xl bg-mist px-4 py-4 text-sm text-slate">Записей пока нет.</div>
              ) : (
                records.slice(0, 8).map((record) => (
                  <button
                    key={record.id}
                    type="button"
                    onClick={() => {
                      setTranscript(record.transcript);
                      setStructuredText(record.structuredText);
                      setInputText(record.inputText);
                      setTemplate(record.template);
                      setMode(record.mode);
                    }}
                    className="block w-full rounded-2xl border border-slate-200 px-4 py-4 text-left transition hover:border-brand-300 hover:bg-brand-50/40"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-medium text-ink">{record.template}</div>
                      <div className="text-xs text-slate">{new Date(record.updatedAt).toLocaleString()}</div>
                    </div>
                    <div className="mt-2 line-clamp-2 text-sm leading-6 text-slate">{record.structuredText}</div>
                  </button>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
