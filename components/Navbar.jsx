"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#expertise" },
  { label: "Skills",     href: "#skills" },
  { label: "Process",    href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const ring = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");

  const close = () => setOpen(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = ["home","about","expertise","skills","process","experience","projects","education","contact"];
    const map = new Map();
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => map.set(e.target.id, e.intersectionRatio));
      let best = "", ratio = 0;
      map.forEach((r, id) => { if (r > ratio) { ratio = r; best = id; } });
      if (best) setActive(`#${best}`);
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const fn = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#0d0f1a]/90 backdrop-blur-xl border-b border-[color:var(--line)] shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <a href="#home" onClick={close} className={`group flex items-center gap-2.5 ${ring}`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--teal)] text-xs font-bold text-white shadow-md shadow-[var(--accent-glow)]">
            JR
          </span>
          <span className="text-sm font-semibold text-[color:var(--text)] transition group-hover:text-[color:var(--accent-lt)]">
            Jamee Raza
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(item => {
            const on = active === item.href;
            return (
              <a key={item.href} href={item.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${ring} ${on ? "text-[color:var(--accent-lt)]" : "text-[color:var(--muted)] hover:text-[color:var(--text)]"}`}>
                {item.label}
                {on && <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[var(--accent)]" />}
              </a>
            );
          })}
          <div className="ml-3 flex items-center gap-2">
            <a href="#chat" className={`btn-outline py-2 px-4 text-sm ${ring}`}>Ask AI</a>
            <a href="#contact" className={`btn-primary py-2 px-4 text-sm ${ring}`}>Let's talk</a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-lt)] lg:hidden ${ring}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-[color:var(--line)] bg-[#0d0f1a]/98 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={close}
                className={`rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--muted)] transition hover:bg-[var(--raised)] hover:text-[color:var(--text)] ${ring}`}>
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              <a href="#chat" onClick={close} className={`flex-1 btn-outline justify-center text-sm ${ring}`}>Ask AI</a>
              <a href="#contact" onClick={close} className={`flex-1 btn-primary justify-center text-sm ${ring}`}>Let's talk</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
