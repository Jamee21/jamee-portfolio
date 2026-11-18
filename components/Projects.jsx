import Reveal from "./Reveal";

// To add a screenshot to a card, put the image in public/projects/ and set
// image: "/projects/name.png". Cards without an image simply skip that area.
const projects = [
  {
    kind: "AI agent",
    title: "RecallMate-AI",
    description:
      "A chat assistant that saves and recalls notes. The model decides when to call tools, the server runs them, and notes and chat history are stored per session in SQLite.",
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
  },
  {
    kind: "Backend",
    title: "User Authentication and User Management REST API",
    description:
      "A RESTful backend for user registration, authentication, authorization and user management, with hashed passwords and token-based login.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    github: "https://github.com/Jamee21/User-Authentication-User-Management-REST-API",
  },
  {
    kind: "Full-stack",
    title: "Skill Swap App",
    description:
      "A platform concept where users share their skills, discover other skills and connect with people for skill exchange.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/Jamee21/skill-swap-app",
  },
  {
    kind: "Frontend",
    title: "Fitness Tracker",
    description:
      "A fitness tracking application for monitoring workouts, activities, goals and personal progress.",
    technologies: ["React", "JavaScript", "REST API"],
    github: "https://github.com/Jamee21/fitness-tracker-app",
  },
  {
    kind: "TV app",
    title: "Hotel Welcome Screen",
    description:
      "A hotel TV welcome system that displays guest information, hotel services, billing details and promotional content.",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Android TV"],
    github: null, // no public code
  },
];

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

function CodeLink({ href, title }) {
  if (!href) {
    return <span className="text-sm text-[color:var(--muted)]">Code is not public</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} code on GitHub (opens in a new tab)`}
      className={`inline-flex items-center gap-2 rounded text-sm font-semibold text-[color:var(--accent)] transition hover:brightness-110 ${focus}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
      </svg>
      View code on GitHub
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
        &rarr;
      </span>
    </a>
  );
}

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-[color:var(--line)] bg-[var(--bg)] px-2.5 py-1 text-xs font-medium text-[color:var(--muted)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Kind({ children }) {
  return (
    <span className="inline-block rounded-full border border-[color:var(--line)] bg-[var(--bg)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
      {children}
    </span>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="bg-[var(--bg)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Selected projects.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              Backend APIs, full-stack apps and AI assistants. Each one links to its code.
            </p>
          </div>
        </Reveal>

        {/* Featured */}
        <Reveal>
          <article className="group relative mt-12 overflow-hidden rounded-2xl border border-[color:var(--accent)] bg-[var(--raised)] p-7 shadow-lg shadow-black/30 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Kind>{featured.kind}</Kind>
                  <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-[color:var(--accent-ink)]">
                    Featured
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
                  {featured.description}
                </p>
                <div className="mt-6">
                  <Tags items={featured.technologies} />
                </div>
                <div className="mt-7">
                  <CodeLink href={featured.github} title={featured.title} />
                </div>
              </div>

              <div className="border-t border-[color:var(--line)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--muted)]">
                  What it does
                </p>
                <ul className="mt-5 space-y-4">
                  {featured.highlights.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="mt-1 h-5 w-5 shrink-0 text-[color:var(--accent)]"
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

        {/* The rest */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <Reveal key={project.title} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[var(--raised)] p-6 transition duration-300 hover:border-[color:var(--accent)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
                />

                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="relative mb-5 aspect-video w-full rounded-lg border border-[color:var(--line)] object-cover"
                  />
                )}

                <div className="relative">
                  <Kind>{project.kind}</Kind>
                </div>
                <h3 className="relative mt-4 text-xl font-semibold leading-snug tracking-tight">
                  {project.title}
                </h3>
                <p className="relative mt-3 flex-1 leading-7 text-[color:var(--muted)]">
                  {project.description}
                </p>
                <div className="relative mt-5">
                  <Tags items={project.technologies} />
                </div>
                <div className="relative mt-6 border-t border-[color:var(--line)] pt-4">
                  <CodeLink href={project.github} title={project.title} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}