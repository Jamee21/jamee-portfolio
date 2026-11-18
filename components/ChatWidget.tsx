
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CONTACT_EMAIL = "mjamijami46@gmail.com";
const MAX_SENT = 10;

const GREETING =
  "Hi, I'm Jamee's assistant. Ask me about his skills, projects or experience, or how to get in touch.";

const SUGGESTIONS = [
  "What does Jamee work with?",
  "Tell me about his projects",
  "What has he built with AI?",
  "How can I contact Jamee?",
];

const PALETTES = {
  dark: {
    "--c-bg": "#101b2e",
    "--c-surface": "#16243b",
    "--c-border": "#1f2e47",
    "--c-text": "#e9eef6",
    "--c-muted": "#9baac1",
    "--c-accent": "#5ce0d0",
    "--c-accent-text": "#04201c",
    "--c-user-bg": "#17454a",
    "--c-user-text": "#e9fbf8",
  },

  light: {
    "--c-bg": "#ffffff",
    "--c-surface": "#f2f4f7",
    "--c-border": "#e1e5ea",
    "--c-text": "#15181d",
    "--c-muted": "#5b6573",
    "--c-accent": "#0a6c63",
    "--c-accent-text": "#ffffff",
    "--c-user-bg": "#0a6c63",
    "--c-user-text": "#ffffff",
  },
};

export default function ChatWidget({ theme = "dark" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const listRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);
  const sendRef = useRef(null);
  const loadingRef = useRef(false);
  const pendingAskRef = useRef(null);

  const ring =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--c-accent)]";

  const base =
    "max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm leading-relaxed";

  // Keep loading state synchronized for event listeners.
  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  // Open chat through #chat URL.
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#chat") {
        setOpen(true);
      }
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  // Handle questions from AskChips.
  useEffect(() => {
    const onAsk = (event) => {
      const question = event.detail;

      if (typeof question !== "string" || !question.trim()) {
        return;
      }

      setOpen(true);

      if (loadingRef.current) {
        pendingAskRef.current = question;
        return;
      }

      sendRef.current?.(question);
    };

    window.addEventListener("jamee-ask", onAsk);

    return () => {
      window.removeEventListener("jamee-ask", onAsk);
    };
  }, []);

  // Abort active request on unmount.
  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  // Focus input when chat opens.
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  // Auto-scroll to latest message.
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open]);

  const close = useCallback(() => {
    setOpen(false);

    if (window.location.hash === "#chat") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const replaceLast = (next) => {
    setMessages((prev) => [...prev.slice(0, -1), next]);
  };

  const send = useCallback(async (raw) => {
    const text = String(raw).trim();

    if (!text || loadingRef.current) return;

    loadingRef.current = true;
    setLoading(true);

    const payload = [
      ...messages,
      { role: "user", text },
    ]
      .filter((m) => m.role !== "error" && m.text !== "")
      .slice(-MAX_SENT);

    while (payload.length > 0 && payload[0].role === "model") {
      payload.shift();
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "model", text: "" },
    ]);

    setInput("");

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: payload,
        }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const busy = res.status === 429 || res.status === 503;

        replaceLast({
          role: "error",
          text:
            res.status === 429
              ? `Too many messages. Please wait a few minutes or email Jamee at ${CONTACT_EMAIL}.`
              : busy
                ? `The assistant is busy. Try again in a minute or email Jamee at ${CONTACT_EMAIL}.`
                : `Something went wrong. You can email Jamee at ${CONTACT_EMAIL}.`,
        });

        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let answer = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        answer += decoder.decode(value, {
          stream: true,
        });

        replaceLast({
          role: "model",
          text: answer,
        });
      }

      answer += decoder.decode();

      if (!answer.trim()) {
        replaceLast({
          role: "error",
          text: `No answer came back. Please rephrase or email Jamee at ${CONTACT_EMAIL}.`,
        });
      } else {
        replaceLast({
          role: "model",
          text: answer,
        });
      }
    } catch (err) {
      if (err?.name === "AbortError") return;

      replaceLast({
        role: "error",
        text: "Could not reach the assistant. Check your connection and try again.",
      });
    } finally {
      loadingRef.current = false;
      setLoading(false);
      abortRef.current = null;

      // Process a queued question after the current response.
      const pending = pendingAskRef.current;
      pendingAskRef.current = null;

      if (pending) {
        sendRef.current?.(pending);
      }
    }
  }, [messages]);

  // Keep latest send function available to event listeners.
  useEffect(() => {
    sendRef.current = send;
  }, [send]);

  function onSubmit(event) {
    event.preventDefault();
    send(input);
  }

  return (
    <div style={PALETTES[theme] || PALETTES.dark}>
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Jamee's assistant"
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
          className="
            fixed inset-x-3 bottom-20 z-50
            flex h-[min(34rem,calc(100dvh-7rem))]
            flex-col overflow-hidden
            rounded-2xl
            border border-[color:var(--c-border)]
            bg-[var(--c-bg)]
            text-[color:var(--c-text)]
            shadow-2xl
            sm:inset-x-auto sm:right-5 sm:w-[24rem]
          "
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-[color:var(--c-border)] px-4 py-3">
            <div>
              <p className="text-sm font-semibold leading-tight">
                Jamee&rsquo;s assistant
              </p>

              <p className="mt-0.5 text-xs leading-snug text-[color:var(--c-muted)]">
                Answers come from Jamee&rsquo;s resume and projects. AI can make mistakes.
              </p>
            </div>

            <button
              type="button"
              onClick={close}
              aria-label="Close chat"
              className={`-mr-1 rounded-md p-1 text-[color:var(--c-muted)] hover:text-[color:var(--c-text)] ${ring}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            aria-live="polite"
            aria-busy={loading}
            className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4"
          >
            <div className={`${base} self-start rounded-bl-md bg-[var(--c-surface)]`}>
              {GREETING}
            </div>

            {messages.map((m, i) => {
              if (m.role === "user") {
                return (
                  <div
                    key={i}
                    className={`${base} self-end rounded-br-md bg-[var(--c-user-bg)] text-[color:var(--c-user-text)]`}
                  >
                    {m.text}
                  </div>
                );
              }

              if (m.role === "error") {
                return (
                  <div
                    key={i}
                    className={`${base} self-start rounded-bl-md border border-[color:var(--c-border)] text-[color:var(--c-muted)]`}
                  >
                    {m.text}
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  className={`${base} self-start rounded-bl-md bg-[var(--c-surface)]`}
                >
                  {m.text || (
                    <span className="animate-pulse text-[color:var(--c-muted)] motion-reduce:animate-none">
                      Thinking&hellip;
                    </span>
                  )}
                </div>
              );
            })}

            {messages.length === 0 && (
              <div className="mt-1 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className={`rounded-full border border-[color:var(--c-border)] px-3 py-1.5 text-left text-xs text-[color:var(--c-text)] transition hover:border-[color:var(--c-accent)] ${ring}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className="flex gap-2 border-t border-[color:var(--c-border)] p-3"
          >
            <label htmlFor="jamee-chat-input" className="sr-only">
              Your question
            </label>

            <input
              id="jamee-chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder="Ask about skills, projects, contact"
              autoComplete="off"
              className={`min-w-0 flex-1 rounded-lg border border-[color:var(--c-border)] bg-[var(--c-surface)] px-3 py-2 text-base text-[color:var(--c-text)] placeholder:text-[color:var(--c-muted)] ${ring}`}
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className={`rounded-lg bg-[var(--c-accent)] px-4 py-2 text-sm font-semibold text-[color:var(--c-accent-text)] disabled:cursor-not-allowed disabled:opacity-50 ${ring}`}
            >
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}

      {/* Floating Chat Button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--c-accent)] px-4 py-3 text-sm font-semibold text-[color:var(--c-accent-text)] shadow-lg transition hover:scale-105 ${ring}`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>

          Ask about Jamee
        </button>
      )}
    </div>
  );
}
