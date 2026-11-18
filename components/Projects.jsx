import Reveal from "./Reveal";
import FlipCard from "./FlipCard";

const projects = [
  {
    kind: "AI agent",
    title: "RecallMate-AI",
    description:
      "A chat assistant that saves and recalls notes. The model decides when to call tools, and notes and chat history are stored per session in SQLite.",
    highlights: [
      "Tool calling with a bounded agent loop",
      "Per-session memory in SQLite",
      "Retry, timeout and model fallback for the Gemini API",
      "Guardrail against invented details, plus an automated eval suite",
    ],
    technologies: ["Node.js", "Express.js", "SQLite", "Gemini API"],
    github: "https://github.com/Jamee21/recallmate-ai",
    featured: true,
  },
  {
    kind: "AI assistant",
    title: "Portfolio AI Assistant",
    description:
      "The chat assistant on this site. It streams answers about my skills and projects from a fixed profile, and says so when it does not know.",
    technologies: ["Next.js", "Gemini API", "Streaming"],
    github: "https://github.com/Jamee21/jamee-portfolio",
    color: "var(--indigo)",
  },
  {
    kind: "Backend",
    title: "Auth & User Management API",
    description:
      "A RESTful backend for user registration, authentication, authorization and user management, with hashed passwords and token-based login.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/Jamee21/User-Authentication-User-Management-REST-API",
    color: "var(--accent)",
  },
  {
    kind: "Full-stack",
    title: "Skill Swap App",
    description:
      "A platform concept where users share skills, discover other skills and connect with people for skill exchange.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/Jamee21/skill-swap-app",
    color: "var(--indigo)",
  },
  {
    kind: "Frontend",
    title: "Fitness Tracker",
    description:
      "A fitness tracking application for monitoring workouts, activities, goals and personal progress.",
    technologies: ["React", "JavaScript", "REST API"],
    github: "https://github.com/Jamee21/fitness-tracker-app",
    color: "var(--accent)",
  },
  {
    kind: "TV app",
    title: "Hotel Welcome Screen",
    description:
      "A hotel TV welcome system displaying guest information, hotel services, billing details and promotional content.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Android TV"],
    github: null,
    color: "var(--indigo)",
  },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

function CodeLink({ href, title }) {
  if (!href) {
    return (
      <span className="flex items-center gap-1.5 text-xs text-[color:var(--faint)] sm:text-sm">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Private repository
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} on GitHub (opens in a new tab)`}
      className={`inline-flex items-center gap-1.5 rounded text-xs font-semibold text-[color:var(--accent)] transition hover:brightness-110 sm:text-sm sm:gap-2 ${focus}`}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
      </svg>
      View on GitHub →
    </a>
  );
}

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-[color:var(--line)] bg-[var(--raised)] px-2 py-0.5 text-[10px] font-medium text-[color:var(--muted)] sm:px-2.5 sm:py-1 sm:text-xs"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function KindBadge({ children, color }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold sm:px-3 sm:py-1"
      style={{ borderColor: color || "var(--accent)", color: color || "var(--accent)" }}
    >
      {children}
    </span>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="bg-[var(--bg)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Selected{" "}
              <span className="gradient-text">projects.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              Backend APIs, full-stack apps and AI assistants. Each one links to its code.
            </p>
          </div>
        </Reveal>

        {/* ── Featured project ── */}
        <Reveal>
          <article className="relative mt-10 overflow-hidden rounded-2xl border border-[color:var(--accent)] bg-[var(--card)] p-5 shadow-xl shadow-black/40 sm:mt-12 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <KindBadge>{featured.kind}</KindBadge>
                  <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-bold text-[color:var(--accent-ink)] sm:px-3 sm:py-1">
                    Featured
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:mt-4 sm:text-base sm:leading-8">
                  {featured.description}
                </p>
                <div className="mt-4 sm:mt-6">
                  <Tags items={featured.technologies} />
                </div>
                <div className="mt-5 sm:mt-7">
                  <CodeLink href={featured.github} title={featured.title} />
                </div>
              </div>

              {/* Highlights */}
              <div className="border-t border-[color:var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--muted)]">
                  What it does
                </p>
                <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                  {featured.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-6 sm:gap-3 sm:leading-7">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m8 12 3 3 5-6" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ── Flip cards grid ── */}
        <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {rest.map((project) => (
            <Reveal key={project.title} className="h-full">
              <FlipCard
                height="h-64 sm:h-72"
                className="w-full"
                front={
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[var(--card)] p-5">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-3xl"
                      style={{ background: project.color || "var(--accent)" }}
                    />
                    <div className="relative">
                      <KindBadge color={project.color}>{project.kind}</KindBadge>
                      <h3 className="mt-3 text-base font-bold leading-snug tracking-tight sm:text-lg">
                        {project.title}
                      </h3>
                    </div>
                    <div className="relative">
                      <Tags items={project.technologies} />
                      <p
                        aria-hidden="true"
                        className="mt-2 text-[10px] text-[color:var(--faint)]"
                      >
                        Tap to learn more →
                      </p>
                    </div>
                  </div>
                }
                back={
                  <div
                    className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--card)] p-5"
                    style={{ borderColor: project.color || "var(--accent)" }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${project.color || "var(--accent)"}, transparent)` }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 blur-3xl"
                      style={{ background: project.color || "var(--accent)" }}
                    />

                    <div className="relative">
                      <KindBadge color={project.color}>{project.kind}</KindBadge>
                      <p className="mt-2.5 text-xs leading-6 text-[color:var(--muted)] sm:text-sm sm:leading-7">
                        {project.description}
                      </p>
                    </div>

                    <div className="relative space-y-2.5 sm:space-y-3">
                      <Tags items={project.technologies} />
                      <div className="border-t border-[color:var(--line)] pt-2.5 sm:pt-3">
                        <CodeLink href={project.github} title={project.title} />
                      </div>
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
