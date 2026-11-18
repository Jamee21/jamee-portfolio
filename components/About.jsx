import Image from "next/image";
import Reveal from "./Reveal";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const facts = [
  { label: "Based in",   value: "Karachi, Pakistan" },
  { label: "Studying",   value: "BS Software Engineering, Sindh Madressatul Islam University (2023–2027)" },
  { label: "AI skills",  value: "LLM APIs, tool calling, memory, RAG, Vercel AI SDK, MCP" },
  { label: "Open to",    value: "Junior full-stack, front-end & AI developer roles, and internships" },
  { label: "Languages",  value: "Urdu (fluent) · English (intermediate)" },
];

const highlights = [
  { icon: "code",   label: "Full-Stack",  sub: "React · Node.js" },
  { icon: "ai",     label: "AI Agents",   sub: "Gemini API" },
  { icon: "api",    label: "REST APIs",   sub: "JWT · bcrypt" },
];

const iconPaths = {
  code: "m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",
  ai:   "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z",
  api:  "M12 2a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3V5a3 3 0 0 0-3-3Z",
};

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* ── Photo column ── */}
          <Reveal>
            <div className="mx-auto w-full max-w-sm lg:mx-0">
              {/* Glow ring wrapper */}
              <div className="relative">
                {/* Spinning gradient ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--accent)] via-[var(--indigo)] to-transparent opacity-30 blur-sm animate-spin-slow"
                />
                <Image
                  src="/my_image.jpeg"
                  alt="Portrait of Jamee Raza"
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 24rem, 90vw"
                  className="relative aspect-[4/5] w-full rounded-2xl border border-[color:var(--line)] object-cover"
                  priority
                />
                {/* Floating skill badges */}
                <div
                  aria-hidden="true"
                  className="absolute -right-4 bottom-10 rounded-xl border border-[color:var(--line)] bg-[var(--card)] px-3 py-2 text-xs font-semibold shadow-xl"
                >
                  <span className="text-[color:var(--accent)]">AI</span> Agent Builder
                </div>
                <div
                  aria-hidden="true"
                  className="absolute -left-4 top-10 rounded-xl border border-[color:var(--line)] bg-[var(--card)] px-3 py-2 text-xs font-semibold shadow-xl"
                >
                  Full-Stack <span className="text-[color:var(--indigo)]">Dev</span>
                </div>
              </div>

              {/* Highlight pills below image */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-[color:var(--line)] bg-[var(--card)] p-3 text-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-[color:var(--accent)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={iconPaths[h.icon]} />
                    </svg>
                    <span className="text-xs font-semibold leading-tight">{h.label}</span>
                    <span className="text-[10px] text-[color:var(--muted)]">{h.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Story column ── */}
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
                About me
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                A student who builds software that{" "}
                <span className="gradient-text">actually works.</span>
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-[color:var(--muted)]">
                <p>
                  I&rsquo;m a Software Engineering student in Karachi. I build web applications
                  from the interface down to the database — mostly with React, Next.js, Node.js,
                  Express and MongoDB.
                </p>
                <p>
                  I&rsquo;ve worked as a front-end developer and as a web developer and quality
                  checker. I&rsquo;ve built REST APIs with JWT authentication and bcrypt password
                  hashing, and projects such as a hotel TV welcome system with React, Node.js and
                  MySQL.
                </p>
                <p>
                  I recently completed an Agentic AI program, and I now build AI assistants that
                  use tool calling, memory and retrieval. The assistant on this page is one of
                  them — it answers questions about my work using only my resume and projects.
                </p>
              </div>

              {/* Facts table */}
              <dl className="mt-10 max-w-2xl divide-y divide-[color:var(--line)] rounded-2xl border border-[color:var(--line)] bg-[var(--card)] overflow-hidden">
                {facts.map((fact, i) => (
                  <div
                    key={fact.label}
                    className={`grid gap-1 px-6 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6 transition hover:bg-[var(--raised)]`}
                  >
                    <dt className="text-sm font-medium text-[color:var(--accent)]">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-[color:var(--text)]">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className={`rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-ink)] shadow-lg shadow-[var(--accent-glow)] transition hover:brightness-110 ${focus}`}
                >
                  See my projects
                </a>
                <a
                  href="#contact"
                  className={`rounded-lg border border-[color:var(--line)] px-6 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] ${focus}`}
                >
                  Get in touch
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
