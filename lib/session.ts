import { cookies } from "next/headers";
import { getUserById } from "@/lib/storage";

export const SESSION_COOKIE = "qalammed_session";

export async function getCurrentUser() {
  const store = await cookies();
  const session = store.get(SESSION_COOKIE)?.value;

  if (!session) {
    return null;
  }

  return getUserById(session);
}
