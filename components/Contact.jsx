"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "mjamijami46@gmail.com";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const infoCards = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    color: "var(--accent)",
    icon: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Jamee21",
    href: "https://github.com/Jamee21",
    color: "var(--indigo)",
    icon: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.3c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    ),
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    color: "var(--accent)",
    icon: (
      <>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
  },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="bg-[var(--bg)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let&rsquo;s{" "}
              <span className="gradient-text">work together.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              I&rsquo;m open to junior roles, internships and freelance projects. Drop me a message
              and I&rsquo;ll reply as soon as I can.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">

          {/* ── Info + availability ── */}
          <Reveal>
            <div className="space-y-4">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="flex items-center gap-4 rounded-2xl border border-[color:var(--line)] bg-[var(--card)] p-4 transition hover:border-[color:var(--faint)] sm:p-5"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-[var(--raised)] sm:h-11 sm:w-11"
                    style={{ borderColor: card.color, color: card.color }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--faint)]">
                      {card.label}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`mt-0.5 block truncate text-sm font-medium text-[color:var(--text)] transition hover:text-[color:var(--accent)] ${focus}`}
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-[color:var(--text)]">
                        {card.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability */}
              <div className="rounded-2xl border border-[color:var(--accent)] bg-[var(--card)] p-4 sm:p-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  <p className="text-sm font-semibold text-[color:var(--accent)]">
                    Available for opportunities
                  </p>
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Open to junior full-stack, front-end & AI developer roles, and internships.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Form ── */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[var(--card)] p-5 sm:p-7"
            >
              {/* Top glow line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
              />

              <h3 className="text-lg font-bold tracking-tight sm:text-xl">Send a message</h3>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                Opens your email client with the message pre-filled.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[color:var(--text)]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`mt-1.5 w-full rounded-lg border border-[color:var(--line)] bg-[var(--raised)] px-3.5 py-2.5 text-sm text-[color:var(--text)] placeholder:text-[color:var(--faint)] transition focus:border-[color:var(--accent)] sm:px-4 sm:py-3 ${focus}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[color:var(--text)]"
                  >
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`mt-1.5 w-full rounded-lg border border-[color:var(--line)] bg-[var(--raised)] px-3.5 py-2.5 text-sm text-[color:var(--text)] placeholder:text-[color:var(--faint)] transition focus:border-[color:var(--accent)] sm:px-4 sm:py-3 ${focus}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[color:var(--text)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity…"
                    className={`mt-1.5 w-full resize-none rounded-lg border border-[color:var(--line)] bg-[var(--raised)] px-3.5 py-2.5 text-sm text-[color:var(--text)] placeholder:text-[color:var(--faint)] transition focus:border-[color:var(--accent)] sm:px-4 sm:py-3 ${focus}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`mt-5 w-full rounded-lg bg-[var(--accent)] py-3 text-sm font-bold text-[color:var(--accent-ink)] shadow-md shadow-[var(--accent-glow)] transition hover:brightness-110 hover:shadow-lg sm:py-3.5 ${focus}`}
              >
                {status === "sent" ? "✓ Message opened in email client" : "Send message →"}
              </button>

              {status === "sent" && (
                <p className="mt-3 text-center text-xs text-[color:var(--muted)] sm:text-sm">
                  Didn&rsquo;t open?{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[color:var(--accent)] underline underline-offset-4"
                  >
                    Email me directly
                  </a>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
