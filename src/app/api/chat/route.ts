import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message, page } = await request.json();

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Missing message" }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("[Chat] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return NextResponse.json({ ok: true });
  }

  const text = `New chat message\nPage: ${page}\n\n${message}`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("[Chat] Telegram API error:", err);
    }
  } catch (err) {
    console.error("[Chat] Telegram delivery failed:", err);
  }

  return NextResponse.json({ ok: true });
}
