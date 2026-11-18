const navLinks = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Services",   href: "#expertise" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

const socialLinks = [
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
    <footer className="relative overflow-hidden border-t border-[color:var(--line)] bg-[var(--bg)] px-4 py-12 sm:px-6 sm:py-14">
      {/* Subtle bottom glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_auto] lg:gap-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-[color:var(--accent-ink)]">
                JR
              </span>
              <p className="text-base font-bold tracking-tight sm:text-lg">Jamee Raza</p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[color:var(--muted)]">
              Full-Stack Developer building web apps and AI assistants. Based in Karachi, Pakistan.
            </p>
            <a
              href="mailto:mjamijami46@gmail.com"
              className={`mt-4 inline-flex items-center gap-1.5 rounded text-sm font-medium text-[color:var(--accent)] underline underline-offset-4 transition hover:brightness-110 ${focus}`}
            >
              mjamijami46@gmail.com
            </a>

            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--line)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] ${focus}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {link.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--faint)]">
              Navigation
            </p>
            <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-col sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-fit rounded text-sm text-[color:var(--muted)] transition hover:text-[color:var(--text)] ${focus}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-row flex-wrap gap-3 sm:flex-col sm:items-start lg:items-end">
            <p className="w-full text-xs font-semibold uppercase tracking-widest text-[color:var(--faint)] lg:text-right">
              Quick actions
            </p>
            <a
              href="#contact"
              className={`rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-[color:var(--accent-ink)] shadow-md shadow-[var(--accent-glow)] transition hover:brightness-110 ${focus}`}
            >
              Let&rsquo;s talk
            </a>
            <a
              href="/Jamee_Resume.pdf"
              download="Jamee_Raza_Resume.pdf"
              className={`rounded-lg border border-[color:var(--line)] px-4 py-2.5 text-sm font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text)] ${focus}`}
            >
              Download Resume
            </a>
            <a
              href="#chat"
              className={`rounded-lg border border-[color:var(--line)] px-4 py-2.5 text-sm font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text)] ${focus}`}
            >
              Ask AI assistant
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Jamee Raza. All rights reserved.</p>
          <a
            href="#home"
            className={`w-fit rounded transition hover:text-[color:var(--text)] ${focus}`}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
