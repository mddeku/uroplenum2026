import { NextResponse } from "next/server";

const registrationCloseAt = Date.parse("2026-07-03T00:00:00+05:00");

type RegistrationPayload = {
  fullName?: unknown;
  iin?: unknown;
  workplace?: unknown;
  phone?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  if (Date.now() >= registrationCloseAt) {
    return NextResponse.json({ error: "Registration is closed." }, { status: 403 });
  }

  let body: RegistrationPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = {
    fullName: clean(body.fullName),
    iin: clean(body.iin).replace(/\D/g, ""),
    workplace: clean(body.workplace),
    phone: clean(body.phone)
  };

  if (!payload.fullName || !payload.iin || !payload.workplace || !payload.phone) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!/^\d{12}$/.test(payload.iin)) {
    return NextResponse.json({ error: "IIN must contain 12 digits." }, { status: 400 });
  }

  const endpoint = process.env.GOOGLE_REGISTRATION_WEB_APP_URL;

  if (!endpoint) {
    return NextResponse.json(
      { error: "Registration endpoint is not configured." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        event: "UROPLENUM 2026"
      })
    });

    const responseText = await response.text();

    if (!response.ok) {
      return NextResponse.json({ error: "Google Sheets submission failed." }, { status: 502 });
    }

    try {
      const result = JSON.parse(responseText) as { ok?: unknown; error?: unknown };

      if (result.ok !== true) {
        return NextResponse.json(
          { error: typeof result.error === "string" ? result.error : "Google Sheets submission failed." },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Google Apps Script does not return a valid registration response." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json({ error: "Google Sheets submission failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
