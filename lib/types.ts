export type DocumentTemplate =
  | "Амбулаторный прием"
  | "Первичный осмотр"
  | "Повторный осмотр"
  | "История болезни"
  | "Консультация специалиста"
  | "Выписной эпикриз"
  | "Дневниковая запись"
  | "Осмотр в приемном покое"
  | "Протокол осмотра"
  | "Рекомендации пациенту";

export type LanguageMode = "ru" | "kz" | "auto";

export type ProcessingOptions = {
  fixGrammar: boolean;
  medicalStyle: boolean;
  keepMixedTerms: boolean;
  splitSections: boolean;
  simplifyText: boolean;
  formalTone: boolean;
};

export type RecordItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  template: DocumentTemplate;
  mode: LanguageMode;
  inputText: string;
  transcript: string;
  structuredText: string;
  sourceType: "text" | "audio" | "image";
  fileName?: string;
  notes?: string;
};

export type AppUser = {
  id: string;
  email: string;
  name: string;
  role: "doctor" | "admin";
};

export type StoredDatabase = {
  users: Array<
    AppUser & {
      password: string;
    }
  >;
  records: RecordItem[];
};
