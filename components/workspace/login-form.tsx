"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("doctor@qalammed.local");
  const [password, setPassword] = useState("demo12345");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    setIsLoading(false);

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Не удалось выполнить вход.");
      return;
    }

    router.push("/workspace");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Secure access</div>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">Вход в кабинет врача</h1>
      <p className="mt-3 text-sm leading-7 text-slate">
        Для MVP создан демо-аккаунт. Позже здесь можно подключить полноценную регистрацию, SSO и роли клиники.
      </p>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Email</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Пароль</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-brand-500"
          />
        </label>
      </div>

      {error ? <div className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Вход..." : "Войти"}
      </button>
    </form>
  );
}
