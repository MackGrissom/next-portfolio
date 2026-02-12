"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  id: string;
  text: string;
  from: "bot" | "visitor";
};

function getPageMessage(pathname: string): string {
  if (pathname === "/") {
    return "Hey! I'm Mack — if you're looking for help with AI, web development, or automation, I'd love to chat.";
  }
  if (pathname === "/blog") {
    return "Looking for something specific? I can point you to the right article.";
  }
  if (pathname.startsWith("/blog/")) {
    return "Enjoying this article? Feel free to ask me anything about the topic.";
  }
  if (pathname.startsWith("/work/")) {
    return "Interested in this project? I can walk you through the details.";
  }
  return "Hey! Let me know if you have any questions.";
}

export function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initializedPath = useRef<string | null>(null);

  // Reset messages with page-specific greeting on navigation
  useEffect(() => {
    if (initializedPath.current === pathname) return;
    initializedPath.current = pathname;

    setMessages([
      {
        id: "welcome",
        text: getPageMessage(pathname),
        from: "bot",
      },
    ]);
  }, [pathname]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function handleSend() {
    const text = input.trim();
    if (!text || sending) return;

    const visitorMsg: Message = {
      id: Date.now().toString(),
      text,
      from: "visitor",
    };
    setMessages((prev) => [...prev, visitorMsg]);
    setInput("");
    setSending(true);

    try {
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, page: pathname }),
      });
    } catch {
      // Silently fail — message is still shown in chat
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `reply-${Date.now()}`,
        text: "Thanks for reaching out! I'll get back to you soon.",
        from: "bot",
      },
    ]);
    setSending(false);
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-4 z-[9998] flex w-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-medium text-text-primary">Mack</p>
              <p className="text-[11px] text-text-tertiary">
                Usually replies within a few hours
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-text-tertiary transition-colors hover:bg-surface-hover hover:text-text-primary"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex max-h-80 min-h-[200px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.from === "bot"
                    ? "self-start bg-background text-text-secondary"
                    : "self-end bg-accent text-background"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-border px-3 py-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-tertiary outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || sending}
              className="rounded-full bg-accent p-2 text-background transition-opacity disabled:opacity-30"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-[9998] flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background shadow-lg transition-transform hover:scale-105 active:scale-95 sm:right-6"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </>
  );
}
