import Reveal from "./Reveal";
import FlipCard from "./FlipCard";

const core = ["React", "Next.js", "Node.js", "Express.js", "MongoDB"];

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
  code:      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  tools:     <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z" />,
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
    title: "Frontend & mobile",
    icon: "frontend",
    color: "var(--accent)",
    skills: ["JavaScript (ES6+)", "React", "Next.js", "React Native", "HTML5", "CSS3"],
  },
  {
    title: "AI & agents",
    icon: "ai",
    featured: true,
    color: "var(--indigo)",
    skills: ["Gemini API", "Tool calling", "Agent loops", "Conversation memory", "RAG basics", "MCP basics", "Evals"],
  },
  {
    title: "Backend",
    icon: "backend",
    color: "var(--accent)",
    skills: ["Node.js", "Express.js", "REST API design", "Middleware", "API integration"],
  },
  {
    title: "Databases & security",
    icon: "database",
    color: "var(--indigo)",
    skills: ["MongoDB", "Mongoose", "MySQL", "CRUD operations", "bcrypt", "JWT"],
  },
  {
    title: "Programming languages",
    icon: "code",
    color: "var(--accent)",
    skills: ["C", "C++", "C#", "JavaScript"],
  },
  {
    title: "Tools",
    icon: "tools",
    color: "var(--indigo)",
    skills: ["Git", "GitHub", "Postman", "Thunder Client", "Wix"],
  },
  {
    title: "AI coding assistants",
    icon: "assistant",
    color: "var(--accent)",
    skills: ["Claude", "Cursor", "GitHub Copilot", "ChatGPT", "Kiro"],
  },
  {
    title: "Spoken languages",
    icon: "globe",
    color: "var(--indigo)",
    skills: ["Urdu (fluent)", "English (intermediate)"],
  },
];

function SkillIcon({ name, size = "h-6 w-6" }) {
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

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--bg)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Technologies I{" "}
                <span className="gradient-text">work with.</span>
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
                From interface to database to AI assistants — this is my toolbox.
              </p>
            </div>
            <p className="flex shrink-0 items-center gap-2 text-sm text-[color:var(--muted)]">
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]"
              />
              Core stack · Tap cards to explore
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className={group.featured ? "lg:col-span-2" : undefined}>
              <Reveal>
                <FlipCard
                  height="h-52 sm:h-56"
                  front={
                    <div
                      className={`relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border bg-[var(--card)] p-5 text-center ${
                        group.featured
                          ? "border-[color:var(--accent)] shadow-lg shadow-black/40"
                          : "border-[color:var(--line)]"
                      }`}
                    >
                      {group.featured && (
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
                        />
                      )}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-2xl"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${group.color}18, transparent 65%)` }}
                      />

                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-[var(--raised)]"
                        style={{ borderColor: group.color, color: group.color }}
                      >
                        <SkillIcon name={group.icon} size="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-base font-bold tracking-tight sm:text-lg">
                          {group.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-[color:var(--muted)] sm:text-sm">
                          {group.skills.length} skills
                        </p>
                      </div>

                      {group.featured && (
                        <span className="absolute right-3 top-3 rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-semibold text-[color:var(--accent-ink)]">
                          New
                        </span>
                      )}
                      <p aria-hidden="true" className="absolute bottom-2.5 text-[10px] text-[color:var(--faint)]">
                        Tap to explore →
                      </p>
                    </div>
                  }
                  back={
                    <div
                      className={`flex h-full flex-col rounded-2xl border bg-[var(--card)] p-4 sm:p-5 ${
                        group.featured
                          ? "border-[color:var(--accent)] shadow-lg shadow-black/40"
                          : "border-[color:var(--line)]"
                      }`}
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <div
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border bg-[var(--raised)]"
                          style={{ borderColor: group.color, color: group.color }}
                        >
                          <SkillIcon name={group.icon} size="h-3.5 w-3.5" />
                        </div>
                        <h3 className="text-xs font-bold tracking-tight sm:text-sm">
                          {group.title}
                        </h3>
                      </div>

                      <ul className="flex flex-1 flex-wrap content-start gap-1.5 overflow-hidden">
                        {group.skills.map((skill) => {
                          const isCore = core.includes(skill);
                          return (
                            <li
                              key={skill}
                              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium sm:text-xs ${
                                isCore
                                  ? "border border-[color:var(--accent)] text-[color:var(--text)]"
                                  : "border border-[color:var(--line)] bg-[var(--raised)] text-[color:var(--muted)]"
                              }`}
                            >
                              {isCore && (
                                <span
                                  aria-hidden="true"
                                  className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                                />
                              )}
                              {skill}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  }
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
