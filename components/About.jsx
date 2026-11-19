import Image from "next/image";
import Reveal from "./Reveal";

const ring = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const facts = [
  { label: "Based in",  value: "Karachi, Pakistan" },
  { label: "Studying",  value: "BS Software Engineering, SMIU (2023 – 2027)" },
  { label: "AI skills", value: "LLM APIs, tool calling, memory, RAG, MCP" },
  { label: "Open to",   value: "Junior full-stack, front-end & AI roles, internships" },
  { label: "Languages", value: "Urdu (fluent) · English (intermediate)" },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          {/* Photo */}
          <Reveal>
            <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0">
              <div className="relative">
                {/* Gradient glow border */}
                <div aria-hidden="true" className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--accent)] via-[var(--teal)] to-transparent opacity-50 blur-sm" />
                <Image
                  src="/my_image.jpeg"
                  alt="Portrait of Jamee Raza"
                  width={800} height={1000}
                  sizes="(min-width: 1024px) 22rem, 85vw"
                  className="relative aspect-[4/5] w-full rounded-2xl border border-[color:var(--line2)] object-cover"
                  priority
                />
                {/* Floating badge */}
                <div aria-hidden="true" className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[color:var(--line2)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold shadow-xl">
                  <span className="text-[color:var(--accent-lt)]">Full-Stack</span> &amp; AI Developer
                </div>
              </div>

              {/* Stat pills */}
              <div className="mt-8 grid grid-cols-3 gap-2">
                {[
                  { v: "2+",  l: "Years" },
                  { v: "6+",  l: "Projects" },
                  { v: "AI",  l: "Agent dev" },
                ].map(s => (
                  <div key={s.l} className="flex flex-col items-center gap-1 rounded-xl border border-[color:var(--line2)] bg-[var(--card)] p-3 text-center">
                    <span className="text-lg font-extrabold text-[color:var(--accent-lt)]">{s.v}</span>
                    <span className="text-[10px] font-medium text-[color:var(--muted)]">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <Reveal>
            <div>
              <span className="eyebrow">About me</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                A student who builds software that{" "}
                <span className="gradient-text">actually works.</span>
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-[color:var(--muted)] sm:leading-8">
                <p>
                  I&rsquo;m a Software Engineering student in Karachi. I build web applications from the interface down to the database — React, Next.js, Node.js, Express and MongoDB.
                </p>
                <p>
                  I&rsquo;ve worked as a front-end developer and web developer & quality checker, delivered REST APIs with JWT auth and bcrypt, and shipped projects like a hotel TV welcome system with React, Node.js and MySQL.
                </p>
                <p>
                  I recently completed an Agentic AI program and now build AI assistants using tool calling, memory and retrieval. The assistant on this page answers questions about my work from my profile only.
                </p>
              </div>

              <dl className="mt-8 overflow-hidden rounded-2xl border border-[color:var(--line2)] bg-[var(--card)]">
                {facts.map((f, i) => (
                  <div key={f.label} className={`grid gap-1 px-5 py-3.5 transition hover:bg-[var(--raised)] sm:grid-cols-[9rem_1fr] sm:gap-4 ${i < facts.length - 1 ? "border-b border-[color:var(--line)]" : ""}`}>
                    <dt className="text-xs font-semibold text-[color:var(--accent-lt)]">{f.label}</dt>
                    <dd className="text-sm text-[color:var(--text)]">{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className={`btn-primary ${ring}`}>See my projects</a>
                <a href="#contact"  className={`btn-outline ${ring}`}>Get in touch</a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
