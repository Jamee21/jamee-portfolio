const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const linkClass = `rounded transition hover:text-[color:var(--text)] ${focus}`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line)] bg-[var(--bg)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-tight">Jamee Raza</p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
              Full-Stack Developer building web apps and AI assistants. Based in Karachi, Pakistan.
            </p>
            <a
              href="mailto:mjamijami46@gmail.com"
              className={`mt-4 inline-block rounded text-sm font-medium text-[color:var(--accent)] underline underline-offset-4 transition hover:brightness-110 ${focus}`}
            >
              mjamijami46@gmail.com
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[color:var(--muted)]"
          >
            {links.map((link) => (
              <a key={link.name} href={link.href} className={linkClass}>
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/Jamee21"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Jamee Raza. All rights reserved.</p>
          <a href="#home" className={linkClass}>
            Back to top <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}