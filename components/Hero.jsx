import AskChips from "./AskChips";
import Image from "next/image";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const stack = ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Gemini API"];

const stats = [
  { value: "2+",   label: "Years building" },
  { value: "6+",   label: "Projects shipped" },
  { value: "Full", label: "Stack coverage" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--bg)] px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:pb-32 lg:pt-44"
    >
      {/* Decorative blobs — clamped so they never cause horizontal scroll */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.05] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[var(--indigo)] opacity-[0.05] blur-[100px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

        {/* ── LEFT: headline + CTAs ── */}
        <div className="order-2 lg:order-1">
          {/* Availability badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[var(--raised)] px-4 py-1.5 text-sm text-[color:var(--muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            Available for new opportunities
          </div>

          <p className="text-sm font-medium text-[color:var(--muted)] sm:text-base">
            Software Engineering student · Karachi, Pakistan
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.25rem]">
            Web apps &amp; AI assistants,{" "}
            <span className="gradient-text">built end to end.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
            I&rsquo;m{" "}
            <span className="font-semibold text-[color:var(--text)]">Jamee Raza</span>. I build
            React and Node.js applications, REST APIs and LLM agents — from the interface down
            to the database.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={`rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-ink)] shadow-lg shadow-[var(--accent-glow)] transition hover:brightness-110 sm:px-7 sm:py-3.5 ${focus}`}
            >
              View projects
            </a>
            <a
              href="#chat"
              className={`rounded-lg border border-[color:var(--line)] px-6 py-3 text-sm font-medium transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:px-7 sm:py-3.5 ${focus}`}
            >
              Ask my AI assistant
            </a>
            <a
              href="/Jamee_Resume.pdf"
              download="Jamee_Raza_Resume.pdf"
              className={`flex items-center gap-1.5 rounded px-2 py-3 text-sm text-[color:var(--muted)] underline underline-offset-4 transition hover:text-[color:var(--text)] ${focus}`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
              </svg>
              Resume
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-6 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[color:var(--accent)] sm:text-3xl">{s.value}</p>
                <p className="text-xs text-[color:var(--muted)] sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Tech stack chips */}
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Main technologies">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-[color:var(--line)] bg-[var(--raised)] px-3 py-1.5 text-xs font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--text)] sm:text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: chat preview card ── */}
        <div
          role="group"
          aria-label="Example conversation with the portfolio assistant"
          className="order-1 lg:order-2 relative rounded-2xl border border-[color:var(--line)] bg-[var(--card)] p-4 shadow-2xl shadow-black/50 sm:p-6"
        >
          {/* Top glow line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60"
          />

          {/* Avatar + header */}
          <div className="flex items-start justify-between gap-3 border-b border-[color:var(--line)] pb-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-[color:var(--accent)] animate-pulse-ring">
                <Image
                  src="/my_image.jpeg"
                  alt="Jamee Raza"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Jamee&rsquo;s assistant</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  Online
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-md border border-[color:var(--line)] px-2 py-1 text-xs text-[color:var(--muted)]">
              Example
            </span>
          </div>

          {/* Messages */}
          <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
            <p className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-[var(--accent)] px-4 py-2.5 font-medium text-[color:var(--accent-ink)]">
              What has Jamee built with AI?
            </p>
            <p className="max-w-[92%] self-start rounded-2xl rounded-bl-sm bg-[var(--raised)] px-4 py-2.5 text-[color:var(--text)]">
              RecallMate-AI — saves and recalls notes with tool calling, per-session SQLite memory,
              a retrying Gemini client with model fallback, and an automated eval suite.
            </p>
          </div>

          {/* Ask chips */}
          <div className="mt-5 border-t border-[color:var(--line)] pt-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[color:var(--muted)]">
              Ask it yourself
            </p>
            <AskChips />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--bg)] to-transparent"
      />
    </section>
  );
}
