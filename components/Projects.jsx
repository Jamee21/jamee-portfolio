import Reveal from "./Reveal";
import FlipCard from "./FlipCard";

const projects = [
  {
    kind: "AI Agent", color: "var(--accent)",
    title: "RecallMate-AI",
    description: "Chat assistant that saves and recalls notes with tool calling, per-session SQLite memory, Gemini fallback, and an automated eval suite.",
    highlights: ["Tool calling with a bounded agent loop", "Per-session memory in SQLite", "Retry, timeout and model fallback", "Guardrail + automated eval suite"],
    technologies: ["Node.js", "Express.js", "SQLite", "Gemini API"],
    github: "https://github.com/Jamee21/recallmate-ai",
    featured: true,
  },
  {
    kind: "AI Assistant", color: "var(--teal)",
    title: "Portfolio AI Assistant",
    description: "Chat assistant on this site — streams answers about my skills and projects from a fixed profile.",
    technologies: ["Next.js", "Gemini API", "Streaming"],
    github: "https://github.com/Jamee21/jamee-portfolio",
  },
  {
    kind: "Backend", color: "var(--accent)",
    title: "Auth & User Management API",
    description: "RESTful backend for user registration, auth, authorization and user management with hashed passwords and JWT.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/Jamee21/User-Authentication-User-Management-REST-API",
  },
  {
    kind: "Full-stack", color: "var(--teal)",
    title: "Skill Swap App",
    description: "Platform where users share skills, discover others and connect for skill exchange.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/Jamee21/skill-swap-app",
  },
  {
    kind: "Frontend", color: "var(--accent)",
    title: "Fitness Tracker",
    description: "Fitness tracking app for monitoring workouts, activities, goals and personal progress.",
    technologies: ["React", "JavaScript", "REST API"],
    github: "https://github.com/Jamee21/fitness-tracker-app",
  },
  {
    kind: "TV App", color: "var(--teal)",
    title: "Hotel Welcome Screen",
    description: "Hotel TV welcome system displaying guest info, services, billing and promotional content.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Android TV"],
    github: null,
  },
];

const ring = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

function GHLink({ href, title }) {
  if (!href) return <span className="text-xs text-[color:var(--faint)]">Private repository</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} on GitHub`}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--accent-lt)] transition hover:underline ${ring}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5" /></svg>
      View on GitHub →
    </a>
  );
}

function Tag({ label }) {
  return <span className="rounded-full border border-[color:var(--line2)] bg-[var(--raised)] px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--muted)]">{label}</span>;
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="bg-[var(--raised)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Projects</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Selected <span className="gradient-text">projects.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              Backend APIs, full-stack apps and AI assistants. Each one links to its code.
            </p>
          </div>
        </Reveal>

        {/* Featured */}
        <Reveal>
          <article className="relative mt-10 overflow-hidden rounded-2xl border border-[color:var(--accent)] bg-[var(--card)] p-6 shadow-xl shadow-[var(--accent-glow)] sm:mt-12 sm:p-9">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--teal)]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />

            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: `${featured.color}20`, color: featured.color }}>{featured.kind}</span>
              <span className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--teal)] px-3 py-1 text-xs font-bold text-white">Featured</span>
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">{featured.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">{featured.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.technologies.map(t => <Tag key={t} label={t} />)}
                </div>
                <div className="mt-6"><GHLink href={featured.github} title={featured.title} /></div>
              </div>

              <div className="border-t border-[color:var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[color:var(--muted)]">What it does</p>
                <ul className="space-y-3">
                  {featured.highlights.map(item => (
                    <li key={item} className="flex gap-2.5 text-sm leading-6 text-[color:var(--muted)]">
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Grid — flip cards */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(p => (
            <Reveal key={p.title} className="h-full">
              <FlipCard height="h-64 sm:h-68" className="w-full"
                front={
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--line2)] bg-[var(--card)] p-5 transition-all duration-300 hover:border-[color:var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)]">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-[0.07] blur-2xl" style={{ background: p.color }} />
                    <div>
                      <span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: `${p.color}18`, color: p.color }}>{p.kind}</span>
                      <h3 className="mt-3 text-base font-bold leading-snug sm:text-lg">{p.title}</h3>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-1.5">{p.technologies.map(t => <Tag key={t} label={t} />)}</div>
                      <p aria-hidden="true" className="mt-2 text-[10px] text-[color:var(--faint)]">Tap for details →</p>
                    </div>
                  </div>
                }
                back={
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--card)] p-5" style={{ borderColor: p.color }}>
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(to right, ${p.color}, transparent)` }} />
                    <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-[0.07] blur-2xl" style={{ background: p.color }} />
                    <div>
                      <span className="rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: `${p.color}18`, color: p.color }}>{p.kind}</span>
                      <p className="mt-3 text-xs leading-6 text-[color:var(--muted)] sm:text-sm sm:leading-7">{p.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">{p.technologies.map(t => <Tag key={t} label={t} />)}</div>
                      <div className="border-t border-[color:var(--line)] pt-3"><GHLink href={p.github} title={p.title} /></div>
                    </div>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
