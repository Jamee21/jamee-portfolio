import Reveal from "./Reveal";
import FlipCard from "./FlipCard";

const ring = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const services = [
  {
    num: "01", icon: "🌐",
    title: "Full-stack Applications",
    description: "Complete apps connecting a React / Next.js UI to a Node.js backend and database, with clean architecture and thoughtful API design.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    num: "02", icon: "🎨",
    title: "Responsive Front Ends",
    description: "Polished, responsive interfaces with attention to usability, performance and cross-browser compatibility — built for every screen.",
    technologies: ["JavaScript", "React", "Next.js", "CSS3"],
  },
  {
    num: "03", icon: "⚙️",
    title: "REST APIs & Databases",
    description: "Structured APIs with authentication, authorization and middleware, backed by MongoDB, Mongoose or MySQL — from design to tested endpoints.",
    technologies: ["Express.js", "JWT", "bcrypt", "MySQL"],
  },
  {
    num: "04", icon: "🤖",
    title: "AI Assistants",
    description: "Chat assistants using an LLM with tools and memory, grounded in your own data — with guardrails, retries and an eval suite.",
    technologies: ["Gemini API", "Tool calling", "Memory", "Evals"],
    featured: true,
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-[var(--raised)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              What I can <span className="gradient-text">build for you.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              From the first screen to the database behind it.{" "}
              <span className="text-sm text-[color:var(--faint)]">Tap a card to learn more.</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(s => (
            <Reveal key={s.num}>
              <FlipCard height="h-60 sm:h-64"
                front={
                  <div className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--card)] p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent-glow)] ${s.featured ? "border-[color:var(--accent)]" : "border-[color:var(--line2)] hover:border-[color:var(--accent)]"}`}>
                    {s.featured && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--teal)]" />}
                    <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--accent)] opacity-[0.07] blur-2xl" />

                    <div className="flex items-start justify-between">
                      <span className="text-3xl">{s.icon}</span>
                      <div className="flex items-center gap-2">
                        {s.featured && <span className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--teal)] px-2.5 py-0.5 text-xs font-semibold text-white">New</span>}
                        <span className="text-2xl font-extrabold text-[color:var(--line2)]">{s.num}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold leading-tight sm:text-xl">{s.title}</h3>
                      <p aria-hidden="true" className="mt-2 text-xs text-[color:var(--faint)]">Tap to see details →</p>
                    </div>
                  </div>
                }
                back={
                  <div className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-[var(--card)] p-6 ${s.featured ? "border-[color:var(--accent)]" : "border-[color:var(--line2)]"}`}>
                    {s.featured && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--teal)]" />}
                    <div>
                      <span className="text-2xl">{s.icon}</span>
                      <h3 className="mt-2 text-base font-bold sm:text-lg">{s.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{s.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {s.technologies.map(t => (
                        <li key={t} className="rounded-full border border-[color:var(--line2)] bg-[var(--raised)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">{t}</li>
                      ))}
                    </ul>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col gap-5 overflow-hidden rounded-2xl border border-[color:var(--line2)] bg-[var(--card)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="text-base text-[color:var(--text)] sm:max-w-sm">
              Not sure what fits? Ask the assistant about my work, or tell me your idea.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#chat"    className={`btn-outline text-sm py-2.5 px-5 ${ring}`}>Ask assistant</a>
              <a href="#contact" className={`btn-primary text-sm py-2.5 px-5 ${ring}`}>Start a project</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
