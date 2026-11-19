import AskChips from "./AskChips";
import Image from "next/image";

const ring = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]";

const stack = [
  { label: "React" }, { label: "Next.js" }, { label: "Node.js" },
  { label: "Express.js" }, { label: "MongoDB" }, { label: "Gemini API" },
];

const stats = [
  { value: "2+",   label: "Years building" },
  { value: "6+",   label: "Projects shipped" },
  { value: "100%", label: "Full-stack" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--bg)] px-4 pb-24 pt-28 sm:px-6 sm:pt-36 lg:pb-32 lg:pt-44">

      {/* Ambient blobs — clamped to prevent scroll */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-32 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-[var(--teal)] opacity-[0.06] blur-[100px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

        {/* LEFT */}
        <div className="order-2 lg:order-1">
          {/* Availability pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--line2)] bg-[var(--raised)] px-4 py-1.5 text-sm font-medium text-[color:var(--muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--teal)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--teal)]" />
            </span>
            Available for new opportunities
          </div>

          <p className="text-sm font-medium text-[color:var(--muted)] sm:text-base">
            Software Engineering Student · Karachi, Pakistan
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.8rem]">
            Building web apps &amp;{" "}
            <span className="gradient-text">AI assistants,</span>{" "}
            end to end.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
            Hi, I&rsquo;m <strong className="font-semibold text-[color:var(--text)]">Jamee Raza</strong>. I build React and Node.js applications, REST APIs and LLM agents — from the interface down to the database.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`btn-primary ${ring}`}>View projects</a>
            <a href="#chat"     className={`btn-outline ${ring}`}>Ask my AI assistant</a>
            <a href="/Jamee_Resume.pdf" download className={`flex items-center gap-1.5 self-center rounded px-2 py-2 text-sm text-[color:var(--muted)] underline underline-offset-4 transition hover:text-[color:var(--text)] ${ring}`}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" /></svg>
              Resume
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-[color:var(--line)] pt-8">
            {stats.map(s => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-[color:var(--accent-lt)]">{s.value}</p>
                <p className="mt-0.5 text-xs font-medium text-[color:var(--muted)]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Stack chips */}
          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
            {stack.map(t => (
              <li key={t.label} className="rounded-lg border border-[color:var(--line2)] bg-[var(--raised)] px-3 py-1.5 text-xs font-medium text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent-lt)]">
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — chat card */}
        <div
          role="group"
          aria-label="Example conversation with the portfolio assistant"
          className="order-1 lg:order-2 relative overflow-hidden rounded-2xl border border-[color:var(--line2)] bg-[var(--card)] p-5 shadow-2xl shadow-black/40 sm:p-6"
        >
          {/* Top glow line */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

          {/* Avatar row */}
          <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[color:var(--accent)] animate-pulse-ring">
                <Image src="/my_image.jpeg" alt="Jamee Raza" width={40} height={40} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold">Jamee&rsquo;s assistant</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
                  Online
                </p>
              </div>
            </div>
            <span className="rounded-full border border-[color:var(--line2)] px-2.5 py-1 text-xs text-[color:var(--faint)]">Example</span>
          </div>

          {/* Messages */}
          <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
            <p className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dim)] px-4 py-2.5 font-medium text-white">
              What has Jamee built with AI?
            </p>
            <p className="max-w-[92%] self-start rounded-2xl rounded-bl-sm bg-[var(--raised)] px-4 py-2.5 text-[color:var(--text)]">
              RecallMate-AI — saves &amp; recalls notes with tool calling, per-session SQLite memory, Gemini fallback, and an eval suite.
            </p>
          </div>

          {/* Ask chips */}
          <div className="mt-5 border-t border-[color:var(--line)] pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[color:var(--faint)]">Ask it yourself</p>
            <AskChips />
          </div>
        </div>

      </div>
    </section>
  );
}
