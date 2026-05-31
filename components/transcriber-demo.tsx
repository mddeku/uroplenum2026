"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Copy,
  Download,
  FileDown,
  Languages,
  LoaderCircle,
  Mic,
  Save,
  Square,
  WandSparkles
} from "lucide-react";

type Locale = "ru" | "kz";
type Mode = "ru" | "kz" | "auto";

type DemoScenario = {
  label: string;
  rawSpeech: string;
  transcript: string;
  output: string;
};

const scenarios: Record<Mode, DemoScenario> = {
  ru: {
    label: "Русский",
    rawSpeech:
      "Пациентка 46 лет, жалобы на слабость, сухость во рту, учащенное мочеиспускание, в течение недели усилилась жажда.",
    transcript:
      "Пациентка 46 лет жалуется на слабость, сухость во рту, частое мочеиспускание, жажда усилилась за последнюю неделю.",
    output:
      "Жалобы: на слабость, сухость во рту, учащенное мочеиспускание, жажду.\nAnamnesis morbi: ухудшение самочувствия отмечает в течение последней недели.\nПредварительный диагноз: требуется исключить декомпенсацию углеводного обмена.\nПлан обследования: глюкоза крови, HbA1c, ОАМ, консультация эндокринолога."
  },
  kz: {
    label: "Қазақша",
    rawSpeech:
      "Науқас 58 жаста, ентігу бар, жөтелі құрғақ, түнде күшейеді, дене қызуы болмаған, тәбеті төмендеген.",
    transcript:
      "Науқас 58 жаста. Ентігу, құрғақ жөтел бар, симптомдар түнде күшейеді. Дене қызуы болмаған, тәбеті төмендеген.",
    output:
      "Шағымдары: ентігуге, құрғақ жөтелге, тәбеттің төмендеуіне.\nAnamnesis morbi: симптомдар түнде күшейеді, дене қызуы болмаған.\nОбъективті статус: тыныс алу жүйесін нақтылау қажет.\nЗерттеу жоспары: кеуде қуысының рентгенографиясы, ЖҚА, пульсоксиметрия."
  },
  auto: {
    label: "Auto / Mixed",
    rawSpeech:
      "Пациент 7 жаста, мама говорит что вчера с вечера температура 37.8 болды, жөтел бар, тамақ жұтынғанда ауырады, appetite снижен.",
    transcript:
      "Пациент 7 лет, со слов матери с вечера температура до 37.8, есть кашель, боль при глотании, appetite снижен.",
    output:
      "Жалобы: на повышение температуры тела до 37.8, кашель, боль в горле при глотании, снижение аппетита.\nАнамнез заболевания: симптомы появились накануне вечером, со слов матери.\nОбъективный статус: рекомендуется оценка ротоглотки и общего состояния.\nПлан лечения: симптоматическая терапия после очного осмотра, контроль температуры, питьевой режим."
  }
};

const templates = [
  "Амбулаторный прием",
  "История болезни",
  "Дневниковая запись",
  "Консультация специалиста",
  "Выписной эпикриз",
  "Осмотр приемного покоя"
];

const toggles = [
  "Исправить грамматику",
  "Сделать медицинский стиль",
  "Сохранить смешанные термины",
  "Разбить по разделам",
  "Упростить текст",
  "Формальный стиль"
];

export function TranscriberDemo({ locale }: { locale: Locale }) {
  const [mode, setMode] = useState<Mode>("auto");
  const [selectedTemplate, setSelectedTemplate] = useState("Амбулаторный прием");
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [rawSpeech, setRawSpeech] = useState(scenarios.auto.rawSpeech);
  const [transcript, setTranscript] = useState(scenarios.auto.transcript);
  const [output, setOutput] = useState(scenarios.auto.output);

  useEffect(() => {
    const scenario = scenarios[mode];
    setRawSpeech(scenario.rawSpeech);
    setTranscript(scenario.transcript);
    setOutput(scenario.output);
    setIsSuccess(true);
  }, [mode]);

  useEffect(() => {
    if (!isProcessing) {
      return;
    }

    const timer = window.setTimeout(() => {
      const scenario = scenarios[mode];
      setTranscript(scenario.transcript);
      setOutput(scenario.output);
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [isProcessing, mode]);

  const processLabel = locale === "kz" ? "Өңдеу" : "Обработать";

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
      <div className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
        <div className="rounded-[1.75rem] bg-[#0D1D31] p-5 text-white shadow-card sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm text-white/64">QalamMed workspace</div>
              <h3 className="mt-2 text-2xl font-semibold">Сырая речь врача</h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80">
              {scenarios[mode].label}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {([
              { value: "ru", label: "Русский" },
              { value: "kz", label: "Қазақша" },
              { value: "auto", label: "Auto detect" }
            ] as const).map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setMode(item.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  mode === item.value ? "bg-white text-ink" : "bg-white/8 text-white/74 hover:bg-white/12"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-white/8 bg-white/6 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Выбор шаблона</div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {templates.map((template) => (
                  <button
                    key={template}
                    type="button"
                    onClick={() => setSelectedTemplate(template)}
                    className={`rounded-2xl border px-3 py-3 text-left text-sm transition ${
                      selectedTemplate === template
                        ? "border-brand-500 bg-brand-500/14 text-white"
                        : "border-white/8 bg-white/5 text-white/70 hover:bg-white/9"
                    }`}
                  >
                    {template}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/6 p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Сырая речь врача</div>
                {isRecording ? (
                  <span className="flex items-center gap-2 text-xs text-brand-500">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-500" />
                    Recording
                  </span>
                ) : null}
              </div>
              <textarea
                value={rawSpeech}
                onChange={(event) => setRawSpeech(event.target.value)}
                className="mt-3 h-40 w-full resize-none rounded-3xl border border-white/10 bg-[#112740] p-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-brand-500"
                placeholder="Продиктуйте или вставьте текст..."
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIsRecording((value) => !value)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                    isRecording ? "bg-[#F26A6A] text-white" : "bg-white text-ink hover:bg-slate-100"
                  }`}
                >
                  {isRecording ? <Square className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  {isRecording ? "Остановить" : "Записать"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsProcessing(true);
                    setIsSuccess(false);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  {isProcessing ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <WandSparkles className="h-4 w-4" />}
                  {processLabel}
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/6 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                <Languages className="h-4 w-4" />
                Настройки обработки
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {toggles.map((item, index) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-3 py-3 text-sm text-white/80"
                  >
                    <input
                      defaultChecked={index < 4}
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/20 bg-transparent text-brand-500 focus:ring-brand-500"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-[#F8FBFD] p-5 shadow-inner sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm text-slate">Готово к вставке в историю болезни</div>
              <h3 className="mt-2 text-2xl font-semibold text-ink">{selectedTemplate}</h3>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm">
              {isProcessing ? "Processing..." : isSuccess ? "Success state" : "Waiting"}
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">Распознанный текст</div>
              <div className="mt-3 min-h-40 rounded-3xl bg-mist p-4 text-sm leading-7 text-slate">
                {isProcessing ? (
                  <div className="flex h-full min-h-32 items-center justify-center gap-2 text-brand-700">
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Система формирует расшифровку...
                  </div>
                ) : transcript ? (
                  transcript
                ) : (
                  <span className="text-slate/70">Здесь появится распознанный текст после обработки.</span>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                Структурированный медицинский документ
              </div>
              <div className="mt-3 min-h-40 whitespace-pre-line rounded-3xl bg-[#F2FBFA] p-4 text-sm leading-7 text-ink">
                {isProcessing ? (
                  <div className="flex h-full min-h-32 items-center justify-center gap-2 text-brand-700">
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Формируется итоговый документ...
                  </div>
                ) : output ? (
                  output
                ) : (
                  <span className="text-slate">После обработки здесь появится готовая запись.</span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-brand-100 bg-brand-50/60 px-4 py-3 text-sm text-brand-700">
            {isSuccess
              ? "Success state: документ структурирован и готов к копированию в историю болезни."
              : "После обработки здесь будет подтверждение успешного результата."}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: "Скопировать", icon: Copy },
              { label: "Очистить", icon: Check },
              { label: "Сохранить", icon: Save },
              { label: "Скачать", icon: Download },
              { label: "Экспорт в DOC", icon: FileDown },
              { label: "Экспорт в PDF", icon: FileDown }
            ].map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                type="button"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                  index === 0 ? "bg-ink text-white hover:bg-navy-900" : "border border-slate-200 bg-white text-ink hover:border-slate-300"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
