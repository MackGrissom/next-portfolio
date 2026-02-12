import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message, page } = await request.json();

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Missing message" }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    const text = `💬 *New chat message*\nPage: \`${page}\`\n\n${message}`;
    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        }
      );
    } catch (err) {
      console.error("Telegram delivery failed:", err);
    }
  } else {
    console.log(`[Chat] ${page}: ${message}`);
  }

  return NextResponse.json({ ok: true });
}
