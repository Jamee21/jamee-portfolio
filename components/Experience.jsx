import Reveal from "./Reveal";

const experiences = [
  {
    role: "Front-End Developer",
    company: "360 Expert Solution",
    place: "Karachi · On-site",
    period: "Apr 2025 – Jun 2025",
    color: "var(--accent)",
    work: [
      "Developed responsive web interfaces and dynamic UI components with attention to cross-browser compatibility.",
      "Fixed layout issues and refined front-end styling to improve usability and visual consistency.",
    ],
    tags: ["Responsive UI", "Dynamic components", "Cross-browser", "Styling"],
  },
  {
    role: "Web Developer & Quality Checker",
    company: "Cosmic 365 AI",
    place: "Remote",
    period: "2025",
    color: "var(--indigo)",
    work: [
      "Customized responsive client-facing web layouts using Wix and supported data analysis tasks.",
      "Performed quality checks on web features for visual consistency and functional accuracy.",
    ],
    tags: ["Wix", "Quality checks", "Data analysis"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[var(--bg)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Where I&rsquo;ve{" "}
              <span className="gradient-text">worked.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              Hands-on work on real client websites, from interface to quality checks.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-5">
          {experiences.map((job) => (
            <Reveal key={job.company}>
              <article
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[var(--card)] p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 sm:p-7"
              >
                {/* Left accent bar */}
                <div
                  className="absolute inset-y-0 left-0 w-1 rounded-l-2xl"
                  style={{ background: `linear-gradient(to bottom, ${job.color}, transparent)` }}
                />

                {/* Hover border highlight */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  style={{ borderColor: job.color }}
                />

                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]"
                  style={{ background: job.color }}
                />

                <div className="relative pl-3">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{job.role}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold sm:px-3 sm:py-1 sm:text-sm"
                          style={{ borderColor: job.color, color: job.color }}
                        >
                          {job.company}
                        </span>
                        <span className="text-xs text-[color:var(--muted)] sm:text-sm">{job.place}</span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-[color:var(--line)] bg-[var(--raised)] px-2.5 py-1 text-xs text-[color:var(--muted)] sm:px-3 sm:py-1.5 sm:text-sm">
                      {job.period}
                    </span>
                  </div>

                  {/* Work bullets */}
                  <ul className="mt-5 space-y-2.5">
                    {job.work.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-[color:var(--muted)] sm:text-base">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: job.color }}
                        />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-[color:var(--line)] bg-[var(--raised)] px-2.5 py-1 text-xs font-medium text-[color:var(--muted)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
