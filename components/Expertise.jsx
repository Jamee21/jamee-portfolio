import Reveal from "./Reveal";
import FlipCard from "./FlipCard";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const icons = {
  fullstack: <path d="M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />,
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
      "Complete applications connecting a React or Next.js interface to a Node.js backend and database, with clean architecture and thoughtful API design.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    icon: "fullstack",
    accent: "var(--accent)",
  },
  {
    title: "Responsive front ends",
    description:
      "Polished, responsive interfaces with attention to usability, performance and cross-browser compatibility — built to work on every screen size.",
    technologies: ["JavaScript", "React", "Next.js", "CSS3"],
    icon: "frontend",
    accent: "var(--indigo)",
  },
  {
    title: "REST APIs and databases",
    description:
      "Structured REST APIs with authentication, authorization and middleware, backed by MongoDB, Mongoose or MySQL — from design to tested endpoints.",
    technologies: ["Express.js", "JWT", "bcrypt", "MySQL"],
    icon: "api",
    accent: "var(--accent)",
  },
  {
    title: "AI assistants",
    description:
      "Chat assistants using an LLM with tools and memory, grounded in your own data — built with guardrails, retries and an eval suite so they stay reliable.",
    technologies: ["Gemini API", "Tool calling", "Memory", "Evals"],
    icon: "ai",
    featured: true,
    accent: "var(--indigo)",
  },
];

function ServiceIcon({ name, size = "h-6 w-6" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="bg-[var(--raised)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              What I can{" "}
              <span className="gradient-text">build for you.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              From the first screen to the database behind it, and the assistant that answers your
              users&rsquo; questions.{" "}
              <span className="text-sm text-[color:var(--faint)]">
                Tap or hover a card to learn more.
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title}>
              <FlipCard
                height="h-64 sm:h-72"
                front={
                  <div
                    className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--card)] p-5 sm:p-7 ${
                      service.featured
                        ? "border-[color:var(--accent)] shadow-lg shadow-black/40"
                        : "border-[color:var(--line)]"
                    }`}
                  >
                    {service.featured && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
                      />
                    )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-10 blur-3xl"
                      style={{ background: service.accent }}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border bg-[var(--raised)] sm:h-12 sm:w-12"
                        style={{ borderColor: service.accent, color: service.accent }}
                      >
                        <ServiceIcon name={service.icon} size="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        {service.featured && (
                          <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-semibold text-[color:var(--accent-ink)]">
                            New
                          </span>
                        )}
                        <span className="text-sm font-medium tabular-nums text-[color:var(--faint)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
                        {service.title}
                      </h3>
                      <p aria-hidden="true" className="mt-2 text-xs text-[color:var(--faint)]">
                        Tap or hover to see details →
                      </p>
                    </div>
                  </div>
                }
                back={
                  <div
                    className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--card)] p-5 sm:p-7 ${
                      service.featured
                        ? "border-[color:var(--accent)] shadow-lg shadow-black/40"
                        : "border-[color:var(--line)]"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-10 blur-3xl"
                      style={{ background: service.accent }}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-[var(--raised)]"
                          style={{ borderColor: service.accent, color: service.accent }}
                        >
                          <ServiceIcon name={service.icon} size="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-bold tracking-tight sm:text-base">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-xs leading-6 text-[color:var(--muted)] sm:text-sm sm:leading-7">
                        {service.description}
                      </p>
                    </div>

                    <ul className="relative flex flex-wrap gap-1.5" aria-label="Technologies">
                      {service.technologies.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-[color:var(--line)] bg-[var(--raised)] px-2.5 py-1 text-xs font-medium text-[color:var(--muted)]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <Reveal>
          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-[color:var(--line)] bg-[var(--card)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="text-base text-[color:var(--text)] sm:max-w-md sm:text-lg">
              Not sure what fits? Ask the assistant what I&rsquo;ve built, or tell me about your
              idea.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#chat"
                className={`rounded-lg border border-[color:var(--line)] px-5 py-2.5 text-sm font-medium transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] ${focus}`}
              >
                Ask the assistant
              </a>
              <a
                href="#contact"
                className={`rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--accent-ink)] shadow-md shadow-[var(--accent-glow)] transition hover:brightness-110 ${focus}`}
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
