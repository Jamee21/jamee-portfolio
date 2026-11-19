const navLinks = [
  { name: "home",       href: "#home" },
  { name: "about",      href: "#about" },
  { name: "services",   href: "#expertise" },
  { name: "skills",     href: "#skills" },
  { name: "projects",   href: "#projects" },
  { name: "contact",    href: "#contact" },
];

const socialLinks = [
  {
    name: "Call",
    href: "tel:+923103001161",
    label: "+92 310 300 1161",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Jamee21",
    icon: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.3c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    ),
  },
  {
    name: "Email",
    href: "mailto:mjamijami46@gmail.com",
    icon: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line)] bg-[var(--bg)] px-4 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_auto] lg:gap-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 font-mono">
              <span className="text-[color:var(--accent)] opacity-60">&gt;_</span>
              <span className="ml-1 text-base font-bold text-[color:var(--text)]">jamee.dev</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[color:var(--muted)]">
              Full-Stack Developer building web apps and AI assistants. Based in Karachi, Pakistan.
            </p>
            <a
              href="mailto:mjamijami46@gmail.com"
              className={`mt-4 inline-flex items-center gap-1.5 text-sm text-[color:var(--accent)] transition hover:underline ${focus}`}
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              mjamijami46@gmail.com
            </a>
            <a
              href="tel:+923103001161"
              className={`mt-4 inline-flex items-center gap-1.5 text-sm text-[color:var(--muted)] transition hover:text-[color:var(--accent)] ${focus}`}
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              +92 310 300 1161
            </a>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                  className={`flex h-9 w-9 items-center justify-center border border-[color:var(--line)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] ${focus}`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {link.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs text-[color:var(--faint)]">
              <span className="text-[color:var(--accent)]">// </span>navigation
            </p>
            <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-col sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-fit font-mono text-sm text-[color:var(--muted)] transition hover:text-[color:var(--accent)] ${focus}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3 sm:flex-col sm:items-start lg:items-end">
            <p className="w-full font-mono text-xs text-[color:var(--faint)] lg:text-right">
              <span className="text-[color:var(--accent)]">// </span>quick_actions
            </p>
            <a href="#contact" className={`bg-[var(--accent)] px-4 py-2.5 font-mono text-sm font-bold text-[color:var(--accent-ink)] transition hover:bg-[color:var(--accent-dim)] ${focus}`}>
              hire_me()
            </a>
            <a href="/Jamee_Resume.pdf" download="Jamee_Raza_Resume.pdf" className={`border border-[color:var(--line)] px-4 py-2.5 font-mono text-sm text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] ${focus}`}>
              download_cv()
            </a>
            <a href="#chat" className={`border border-[color:var(--line)] px-4 py-2.5 font-mono text-sm text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] ${focus}`}>
              ask_ai()
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 font-mono text-xs text-[color:var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="text-[color:var(--accent)]">// </span>Created By JR-DEVELOPER © {year}
          </p>
          <a href="#home" className={`w-fit transition hover:text-[color:var(--accent)] ${focus}`}>
            scroll_to_top() ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
