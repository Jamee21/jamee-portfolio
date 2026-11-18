import Image from "next/image";
import Reveal from "./Reveal";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const facts = [
  { label: "Based in", value: "Karachi, Pakistan" },
  {
    label: "Studying",
    value: "BS Software Engineering, Sindh Madressatul Islam University (2023 to 2027)",
  },
  {
    label: "AI skills",
    value:
      "LLM APIs, structured JSON output, tool calling, RAG, LangGraph, Vercel AI SDK, MCP",
  },
  {
    label: "Open to",
    value: "Junior full-stack, front-end and AI developer roles, and internships",
  },
  { label: "Languages", value: "Urdu (fluent), English (intermediate)" },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        {/* Photo */}
        <Reveal>
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <Image
              src="/my_image.jpeg"
              alt="Portrait of Jamee Raza"
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="aspect-[4/5] w-full rounded-xl border border-[color:var(--line)] object-cover"
            />
          </div>
        </Reveal>

        {/* Story */}
        <Reveal>
          <div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A student who builds software that actually works.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-[color:var(--muted)]">
              <p>
                I&rsquo;m a Software Engineering student in Karachi. I build web applications from the
                interface down to the database, mostly with React, Next.js, Node.js, Express and
                MongoDB.
              </p>
              <p>
                I&rsquo;ve worked as a front-end developer and as a web developer and quality checker.
                I&rsquo;ve built REST APIs with JWT authentication and bcrypt password hashing, and
                projects such as a hotel TV welcome system with React, Node.js and MySQL.
              </p>
              <p>
                I recently completed an Agentic AI program, and I now build AI assistants that use
                tool calling, memory and retrieval. The assistant on this page is one of them: it
                answers questions about my work using only my resume and projects.
              </p>
            </div>

            <dl className="mt-10 max-w-2xl border-t border-[color:var(--line)]">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 border-b border-[color:var(--line)] py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
                >
                  <dt className="text-sm text-[color:var(--muted)]">{fact.label}</dt>
                  <dd className="text-[color:var(--text)]">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className={`rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-ink)] transition hover:brightness-110 ${focus}`}
              >
                See my projects
              </a>
              <a
                href="#contact"
                className={`rounded-lg border border-[color:var(--line)] px-6 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] ${focus}`}
              >
                Get in touch
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}