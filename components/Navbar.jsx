"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#expertise" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[color:var(--line)] bg-[#0a1220]/85 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={close}
          className={`rounded font-semibold tracking-tight text-[color:var(--text)] ${focus}`}
        >
          Jamee Raza
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`rounded text-sm text-[color:var(--muted)] transition hover:text-[color:var(--text)] ${focus}`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#chat"
            className={`rounded-lg border border-[color:var(--line)] px-4 py-2 text-sm font-medium text-[color:var(--text)] transition hover:border-[color:var(--accent)] ${focus}`}
          >
            Ask AI
          </a>
          <a
            href="#contact"
            className={`rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[color:var(--accent-ink)] transition hover:brightness-110 ${focus}`}
          >
            Let&rsquo;s talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--line)] text-[color:var(--text)] lg:hidden ${focus}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-[color:var(--line)] bg-[var(--bg)] px-6 py-4 lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={close}
                className={`rounded-lg px-3 py-3 text-[color:var(--muted)] transition hover:bg-[var(--raised)] hover:text-[color:var(--text)] ${focus}`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              <a
                href="#chat"
                onClick={close}
                className={`flex-1 rounded-lg border border-[color:var(--line)] px-4 py-3 text-center font-medium ${focus}`}
              >
                Ask AI
              </a>
              <a
                href="#contact"
                onClick={close}
                className={`flex-1 rounded-lg bg-[var(--accent)] px-4 py-3 text-center font-semibold text-[color:var(--accent-ink)] ${focus}`}
              >
                Let&rsquo;s talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}