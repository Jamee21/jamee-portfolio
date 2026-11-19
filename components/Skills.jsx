import Reveal from "./Reveal";
import FlipCard from "./FlipCard";

const core = ["React", "Next.js", "Node.js", "Express.js", "MongoDB"];

const groups = [
  { icon: "💻", title: "Frontend & Mobile",    skills: ["JavaScript (ES6+)", "React", "Next.js", "React Native", "HTML5", "CSS3"] },
  { icon: "🤖", title: "AI & Agents", featured: true, skills: ["Gemini API", "Tool calling", "Agent loops", "Memory", "RAG basics", "MCP basics", "Evals"] },
  { icon: "⚙️", title: "Backend",              skills: ["Node.js", "Express.js", "REST API design", "Middleware", "API integration"] },
  { icon: "🗄️", title: "Databases & Security", skills: ["MongoDB", "Mongoose", "MySQL", "CRUD", "bcrypt", "JWT"] },
  { icon: "📝", title: "Languages",             skills: ["C", "C++", "C#", "JavaScript"] },
  { icon: "🛠️", title: "Tools",                 skills: ["Git", "GitHub", "Postman", "Thunder Client", "Wix"] },
  { icon: "✨", title: "AI Coding Tools",        skills: ["Claude", "Cursor", "GitHub Copilot", "ChatGPT", "Kiro"] },
  { icon: "🌐", title: "Spoken Languages",       skills: ["Urdu (fluent)", "English (intermediate)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--bg)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Skills</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Technologies I <span className="gradient-text">work with.</span>
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                From interface to database to AI — my full toolbox.
              </p>
            </div>
            <p className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
              Core stack · Tap to explore
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(g => (
            <div key={g.title} className={g.featured ? "lg:col-span-2" : undefined}>
              <Reveal>
                <FlipCard height="h-52 sm:h-56"
                  front={
                    <div className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--card)] p-5 transition-all duration-300 hover:shadow-lg ${g.featured ? "border-[color:var(--accent)] hover:shadow-[var(--accent-glow)]" : "border-[color:var(--line2)] hover:border-[color:var(--accent)]"}`}>
                      {g.featured && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--teal)]" />}
                      <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--accent)] opacity-[0.06] blur-2xl" />

                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{g.icon}</span>
                        {g.featured && <span className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--teal)] px-2.5 py-0.5 text-xs font-semibold text-white">New</span>}
                      </div>

                      <div>
                        <h3 className="text-base font-bold sm:text-lg">{g.title}</h3>
                        <p className="mt-1 text-xs text-[color:var(--muted)]">{g.skills.length} skills · tap to explore</p>
                      </div>
                    </div>
                  }
                  back={
                    <div className={`flex h-full flex-col rounded-2xl border bg-[var(--card)] p-4 sm:p-5 ${g.featured ? "border-[color:var(--accent)]" : "border-[color:var(--line2)]"}`}>
                      <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                        <span>{g.icon}</span>{g.title}
                      </p>
                      <ul className="flex flex-1 flex-wrap content-start gap-1.5 overflow-hidden">
                        {g.skills.map(sk => {
                          const isCore = core.includes(sk);
                          return (
                            <li key={sk} className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium sm:text-xs ${isCore ? "border border-[color:var(--accent)] bg-[var(--accent-glow)] text-[color:var(--accent-lt)]" : "border border-[color:var(--line2)] text-[color:var(--muted)]"}`}>
                              {isCore && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />}
                              {sk}
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
