import Reveal from "./Reveal";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

/* Simple inline icons. Decorative only, so they are hidden from screen readers. */
const icons = {
  fullstack: (
    <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
  ),
  frontend: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  api: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  ai: (
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm7 11 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14ZM5 15l.7 1.6L7.3 17l-1.6.7L5 19.3l-.7-1.6L2.7 17l1.6-.4L5 15Z" />
  ),
};

const services = [
  {
    title: "Full-stack web applications",
    description:
      "Complete applications that connect a React or Next.js interface to a Node.js backend and a database.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    icon: "fullstack",
  },
  {
    title: "Responsive front ends",
    description:
      "Clean, responsive interfaces with attention to usability and cross-browser compatibility.",
    technologies: ["JavaScript", "React", "Next.js", "CSS3"],
    icon: "frontend",
  },
  {
    title: "REST APIs and databases",
    description:
      "Structured REST APIs with authentication, authorization and middleware, backed by MongoDB, Mongoose or MySQL.",
    technologies: ["Express.js", "JWT", "bcrypt", "MySQL"],
    icon: "api",
  },
  {
    title: "AI assistants",
    description:
      "Chat assistants that use an LLM with tools and memory, built to answer from your own data and stay within it.",
    technologies: ["Gemini API", "Tool calling", "Memory", "Evals"],
    icon: "ai",
    featured: true,
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-[var(--raised)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              What I can build for you.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              From the first screen to the database behind it, and now the assistant that answers
              your users&rsquo; questions.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border bg-[var(--bg)] p-7 transition duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-8 ${
                  service.featured
                    ? "border-[color:var(--accent)] shadow-lg shadow-black/30"
                    : "border-[color:var(--line)] hover:border-[color:var(--accent)]"
                }`}
              >
                {/* Soft accent glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[var(--raised)] text-[color:var(--accent)]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {icons[service.icon]}
                    </svg>
                  </div>

                  <div className="flex items-center gap-3">
                    {service.featured && (
                      <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-[color:var(--accent-ink)]">
                        New
                      </span>
                    )}
                    <span
                      aria-hidden="true"
                      className="text-sm font-medium tabular-nums text-[color:var(--muted)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <h3 className="relative mt-6 text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="relative mt-3 max-w-md leading-7 text-[color:var(--muted)]">
                  {service.description}
                </p>

                <ul
                  className="relative mt-6 flex flex-wrap gap-2"
                  aria-label={`${service.title}: technologies`}
                >
                  {service.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-[color:var(--line)] bg-[var(--raised)] px-3 py-1.5 text-sm text-[color:var(--muted)]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[color:var(--line)] bg-[var(--bg)] p-7 sm:flex-row sm:items-center sm:p-8">
            <p className="max-w-md text-lg text-[color:var(--text)]">
              Not sure what fits? Ask the assistant what I&rsquo;ve built, or tell me about your idea.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#chat"
                className={`rounded-lg border border-[color:var(--line)] px-6 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] ${focus}`}
              >
                Ask the assistant
              </a>
              <a
                href="#contact"
                className={`rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-ink)] transition hover:brightness-110 ${focus}`}
              >
                Start a conversation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}