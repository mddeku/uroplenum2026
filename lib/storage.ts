import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { AppUser, RecordItem, StoredDatabase } from "@/lib/types";

const STORAGE_DIR = path.join(process.cwd(), "storage");
const DB_PATH = path.join(STORAGE_DIR, "db.json");

const defaultUsers: StoredDatabase["users"] = [
  {
    id: "demo-doctor",
    email: process.env.DEMO_EMAIL ?? "doctor@qalammed.local",
    name: "Demo Doctor",
    role: "doctor",
    password: process.env.DEMO_PASSWORD ?? "demo12345"
  }
];

async function ensureDatabase() {
  await mkdir(STORAGE_DIR, { recursive: true });
  try {
    await readFile(DB_PATH, "utf8");
  } catch {
    const initialData: StoredDatabase = {
      users: defaultUsers,
      records: []
    };
    await writeFile(DB_PATH, JSON.stringify(initialData, null, 2), "utf8");
  }
}

async function readDatabase(): Promise<StoredDatabase> {
  await ensureDatabase();
  const raw = await readFile(DB_PATH, "utf8");
  return JSON.parse(raw) as StoredDatabase;
}

async function writeDatabase(data: StoredDatabase) {
  await ensureDatabase();
  await writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf8");
}

export async function findUserByCredentials(email: string, password: string): Promise<AppUser | null> {
  const db = await readDatabase();
  const user = db.users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password);
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };
}

export async function getUserById(id: string): Promise<AppUser | null> {
  const db = await readDatabase();
  const user = db.users.find((item) => item.id === id);
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };
}

export async function listRecords(): Promise<RecordItem[]> {
  const db = await readDatabase();
  return db.records.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export async function saveRecord(record: RecordItem): Promise<RecordItem> {
  const db = await readDatabase();
  const existingIndex = db.records.findIndex((item) => item.id === record.id);

  if (existingIndex >= 0) {
    db.records[existingIndex] = record;
  } else {
    db.records.push(record);
  }

  await writeDatabase(db);
  return record;
}
