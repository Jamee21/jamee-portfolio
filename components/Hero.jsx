import AskChips from "./AskChips";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const stack = ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Gemini API"];

export default function Hero() {
  return (
    <section id="home" className="bg-[var(--bg)] px-6 pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left: who, what, where to go next */}
        <div>
          <p className="text-base text-[color:var(--muted)]">
            Software Engineering student in Karachi, Pakistan
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Web apps and AI assistants, built end to end.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
            I&rsquo;m Jamee Raza. I build React and Node.js applications, REST APIs and LLM agents,
            from the interface down to the database.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={`rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-[color:var(--accent-ink)] transition hover:brightness-110 ${focus}`}
            >
              View projects
            </a>
            <a
              href="#chat"
              className={`rounded-lg border border-[color:var(--line)] px-6 py-3 font-medium transition hover:border-[color:var(--accent)] ${focus}`}
            >
              Ask my AI assistant
            </a>
            <a
  href="/Jamee_Resume.pdf"
  download="Jamee_Raza_Resume.pdf"
  className={`rounded px-3 py-3 text-[color:var(--muted)] underline underline-offset-4 transition hover:text-[color:var(--text)] ${focus}`}
>
  Download Resume
</a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-2" aria-label="Main technologies">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-[var(--raised)] px-3 py-1.5 text-sm text-[color:var(--muted)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: the assistant, shown working.
            NOTE: keep this example identical to what the real assistant answers
            for the same question, and make sure every claim is visible in your GitHub repo. */}
        <div
          role="group"
          aria-label="Example conversation with the portfolio assistant"
          className="rounded-2xl border border-[color:var(--line)] bg-[var(--raised)] p-5 shadow-2xl shadow-black/40 sm:p-6"
        >
          <div className="flex items-start justify-between gap-4 border-b border-[color:var(--line)] pb-4">
            <div>
              <p className="text-sm font-semibold">Jamee&rsquo;s assistant</p>
              <p className="mt-0.5 text-sm text-[color:var(--muted)]">
                Answers from his resume and projects
              </p>
            </div>
            <span className="rounded-md border border-[color:var(--line)] px-2 py-0.5 text-sm text-[color:var(--muted)]">
              Example
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-3 text-sm leading-relaxed">
            <p className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-[var(--bubble-user,#17454a)] px-4 py-2.5 text-[color:var(--bubble-user-ink,#e9fbf8)]">
              What has Jamee built with AI?
            </p>
            <p className="max-w-[92%] self-start rounded-2xl rounded-bl-md bg-[var(--bg)] px-4 py-2.5 text-[color:var(--text)]">
              Notes Agent, an assistant that saves and recalls notes. The model decides when to call
              tools, and it keeps per-session memory in SQLite. It also has a retrying Gemini client
              with model fallback, and an automated eval suite.
            </p>
          </div>

          <div className="mt-6 border-t border-[color:var(--line)] pt-4">
            <p className="mb-3 text-sm text-[color:var(--muted)]">Ask it yourself</p>
            <AskChips />
          </div>
        </div>
      </div>
    </section>
  );
}