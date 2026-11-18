"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Services",   href: "#expertise" },
  { name: "Skills",     href: "#skills" },
  { name: "Process",    href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("");

  const close = () => setOpen(false);

  /* Shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight active section via IntersectionObserver */
  useEffect(() => {
    const ids = ["home", "about", "expertise", "skills", "process", "experience", "projects", "education", "contact"];
    const map = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => map.set(e.target.id, e.intersectionRatio));
        let best = "";
        let bestRatio = 0;
        map.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = id; }
        });
        if (best) setActive(`#${best}`);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Close mobile menu on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--line)] bg-[#060d18]/90 backdrop-blur-xl shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={close}
          className={`group flex items-center gap-2 rounded font-semibold tracking-tight ${focus}`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent)] text-xs font-bold text-[color:var(--accent-ink)]">
            JR
          </span>
          <span className="text-[color:var(--text)] transition group-hover:text-[color:var(--accent)]">
            Jamee Raza
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${focus} ${
                  isActive
                    ? "text-[color:var(--accent)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute inset-x-3 bottom-0.5 h-px rounded-full bg-[var(--accent)]" />
                )}
              </a>
            );
          })}

          <div className="ml-3 flex items-center gap-2">
            <a
              href="#chat"
              className={`rounded-lg border border-[color:var(--line)] px-4 py-2 text-sm font-medium text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] ${focus}`}
            >
              Ask AI
            </a>
            <a
              href="#contact"
              className={`rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[color:var(--accent-ink)] transition hover:brightness-110 hover:shadow-lg hover:shadow-[var(--accent-glow)] ${focus}`}
            >
              Let&rsquo;s talk
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] text-[color:var(--text)] transition hover:border-[color:var(--accent)] lg:hidden ${focus}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open
              ? <path d="M6 6l12 12M18 6L6 18" />
              : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[color:var(--line)] bg-[var(--bg)]/95 px-4 py-4 backdrop-blur-xl lg:hidden sm:px-6"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={close}
                className={`rounded-lg px-4 py-3 text-[color:var(--muted)] transition hover:bg-[var(--raised)] hover:text-[color:var(--text)] ${focus}`}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              <a
                href="#chat"
                onClick={close}
                className={`flex-1 rounded-lg border border-[color:var(--line)] px-4 py-3 text-center text-sm font-medium transition hover:border-[color:var(--accent)] ${focus}`}
              >
                Ask AI
              </a>
              <a
                href="#contact"
                onClick={close}
                className={`flex-1 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-[color:var(--accent-ink)] ${focus}`}
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
