import Reveal from "./Reveal";

// Stack Jamee uses most. These chips get the accent outline and a dot.
const core = ["React", "Next.js", "Node.js", "Express.js", "MongoDB"];

/* Simple inline icons. Decorative only, so they are hidden from screen readers. */
const icons = {
  frontend: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  backend: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  ai: (
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm7 11 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14ZM5 15l.7 1.6L7.3 17l-1.6.7L5 19.3l-.7-1.6L2.7 17l1.6-.4L5 15Z" />
  ),
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  tools: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" />
  ),
  assistant: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 8V4M9 13h.01M15 13h.01M9 16h6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </>
  ),
};

const skillGroups = [
  {
    title: "Frontend and mobile",
    icon: "frontend",
    skills: ["JavaScript (ES6+)", "React", "Next.js", "React Native", "HTML5", "CSS3"],
  },
  {
    title: "AI and agents",
    icon: "ai",
    featured: true,
    skills: [
      "Gemini API",
      "Tool calling",
      "Agent loops",
      "Conversation memory",
      "RAG basics",
      "MCP basics",
      "Evals",
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express.js", "REST API design", "Middleware", "API integration"],
  },
  {
    title: "Databases and security",
    icon: "database",
    skills: ["MongoDB", "Mongoose", "MySQL", "CRUD operations", "bcrypt", "JWT"],
  },
  {
    title: "Programming languages",
    icon: "code",
    skills: ["C", "C++", "C#", "JavaScript"],
  },
  {
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "Postman", "Thunder Client", "Wix"],
  },
  {
    title: "AI coding assistants",
    icon: "assistant",
    skills: ["Claude", "Cursor", "GitHub Copilot", "ChatGPT", "Kiro"],
  },
  {
    title: "Spoken languages",
    icon: "globe",
    skills: ["Urdu (fluent)", "English (intermediate)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--bg)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
                Skills
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Technologies I work with.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
                From interface to database to AI assistants, this is my toolbox.
              </p>
            </div>

            {/* Legend */}
            <p className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]"
              />
              Stack I use most
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className={group.featured ? "lg:col-span-2" : undefined}>
            <Reveal>
              <article
                aria-labelledby={`skills-${group.icon}`}
                className={`group relative h-full overflow-hidden rounded-2xl border bg-[var(--raised)] p-7 transition duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none ${
                  group.featured
                    ? "border-[color:var(--accent)] shadow-lg shadow-black/30"
                    : "border-[color:var(--line)] hover:border-[color:var(--accent)]"
                }`}
              >
                {/* Soft accent glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
                />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[var(--bg)] text-[color:var(--accent)]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {icons[group.icon]}
                    </svg>
                  </div>
                  <h3 id={`skills-${group.icon}`} className="text-lg font-semibold tracking-tight">
                    {group.title}
                  </h3>
                  {group.featured && (
                    <span className="ml-auto rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-[color:var(--accent-ink)]">
                      New
                    </span>
                  )}
                </div>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isCore = core.includes(skill);
                    return (
                      <li
                        key={skill}
                        className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm ${
                          isCore
                            ? "border border-[color:var(--accent)] text-[color:var(--text)]"
                            : "border border-[color:var(--line)] bg-[var(--bg)] text-[color:var(--muted)]"
                        }`}
                      >
                        {isCore && (
                          <span
                            aria-hidden="true"
                            className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                          />
                        )}
                        {skill}
                        {isCore && <span className="sr-only"> (most used)</span>}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}