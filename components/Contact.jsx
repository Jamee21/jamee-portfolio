"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "mjamijami46@gmail.com";
const CONTACT_PHONE = "+92 310 300 1161";
const CONTACT_PHONE_RAW = "+923103001161";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzPVKOB-l0Tf806ZZuCernRmaj67Mhr9Cl6aGsSmvPEwqpPdIa4nuktLXni5d4VL2-LPw/exec";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

/* SVG icon paths for each contact method */
const ICONS = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  email: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.3c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  ),
  location: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

const infoItems = [
  {
    id: "phone",
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_RAW}`,
    iconColor: "var(--accent)",
  },
  {
    id: "email",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    iconColor: "var(--accent)",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Jamee21",
    href: "https://github.com/Jamee21",
    iconColor: "var(--accent)",
  },
  {
    id: "location",
    label: "Location",
    value: "Karachi, Pakistan",
    href: null,
    iconColor: "var(--accent)",
  },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "sending") setStatus("idle");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[var(--raised)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-[color:var(--faint)]">
              <span className="text-[color:var(--accent)]">// </span>GET IN TOUCH
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Contact Me
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              Open to junior roles, internships and freelance projects. Drop a message and I&rsquo;ll reply soon.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">

          <Reveal>
            <div className="space-y-3">
              <p className="text-base font-semibold text-[color:var(--text)]">Let&rsquo;s Connect</p>
              <p className="text-sm text-[color:var(--muted)]">
                Feel free to reach out for collaborations, opportunities, or just to say hi.
              </p>

              <div className="mt-5 space-y-3">
                {infoItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex items-center gap-4 rounded-xl border border-[color:var(--line)] bg-[var(--card)] px-4 py-3.5 transition-all duration-200 hover:border-[color:var(--accent)] hover:shadow-md hover:shadow-[var(--accent-glow)]"
                  >
                    {/* Icon box */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--line)] bg-[var(--raised)] transition group-hover:border-[color:var(--accent)]"
                      style={{ color: item.iconColor }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {ICONS[item.id]}
                      </svg>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--faint)]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`mt-0.5 block truncate text-sm font-medium text-[color:var(--text)] transition hover:text-[color:var(--accent)] ${focus}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-[color:var(--text)]">
                          {item.value}
                        </p>
                      )}
                    </div>

                    {/* Arrow for clickable items */}
                    {item.href && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 shrink-0 text-[color:var(--faint)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="mt-2 flex items-start gap-3 rounded-xl border border-[color:var(--accent)] bg-[var(--card)] px-4 py-4">
                <span className="relative mt-0.5 flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent)]" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[color:var(--accent)]">
                    Available for opportunities
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">
                    Open to junior full-stack, front-end &amp; AI roles and internships.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="relative border border-[color:var(--line)] bg-[var(--card)] p-5 sm:p-7"
            >
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-[var(--accent)]" />

              {/* Terminal title bar */}
              <div className="mb-5 flex items-center gap-3 border-b border-[color:var(--line)] pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-xs text-[color:var(--faint)]">send_message.sh</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs text-[color:var(--accent)]">
                    <span className="opacity-50">$ </span>name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full border border-[color:var(--line)] bg-[var(--raised)] px-4 py-2.5 font-mono text-sm text-[color:var(--text)] placeholder:text-[color:var(--faint)] transition focus:border-[color:var(--accent)] outline-none ${focus}`}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs text-[color:var(--accent)]">
                    <span className="opacity-50">$ </span>email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border border-[color:var(--line)] bg-[var(--raised)] px-4 py-2.5 font-mono text-sm text-[color:var(--text)] placeholder:text-[color:var(--faint)] transition focus:border-[color:var(--accent)] outline-none ${focus}`}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs text-[color:var(--accent)]">
                    <span className="opacity-50">$ </span>message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity…"
                    className={`w-full resize-none border border-[color:var(--line)] bg-[var(--raised)] px-4 py-2.5 font-mono text-sm text-[color:var(--text)] placeholder:text-[color:var(--faint)] transition focus:border-[color:var(--accent)] outline-none ${focus}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`mt-5 w-full bg-[var(--accent)] py-3 font-mono text-sm font-bold text-[color:var(--accent-ink)] transition hover:bg-[color:var(--accent-dim)] disabled:cursor-not-allowed disabled:opacity-70 ${focus}`}
              >
                {status === "sending" && "$ sending..."}
                {status === "sent"    && "$ message_sent ✓"}
                {status === "error"   && "$ error — retry"}
                {status === "idle"    && "$ send_message →"}
              </button>

              {status === "sent" && (
                <p role="status" className="mt-3 text-center font-mono text-xs text-[color:var(--accent)]">
                  Thank you! I&rsquo;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p role="alert" className="mt-3 text-center font-mono text-xs text-[color:var(--muted)]">
                  Failed. Email me at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[color:var(--accent)] underline">
                    {CONTACT_EMAIL}
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
