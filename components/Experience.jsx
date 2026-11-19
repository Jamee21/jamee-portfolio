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
    color: "var(--teal)",
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
            <span className="eyebrow">Experience</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Where I&rsquo;ve <span className="gradient-text">worked.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              Hands-on work on real client websites, from interface to quality checks.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-5">
          {experiences.map((job, idx) => (
            <Reveal key={job.company}>
              <article className="group relative overflow-hidden rounded-2xl border border-[color:var(--line2)] bg-[var(--card)] p-5 transition-all duration-300 hover:border-[color:var(--accent)] hover:shadow-xl hover:shadow-[var(--accent-glow)] motion-safe:hover:-translate-y-1 sm:p-7">

                {/* Left color bar */}
                <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl" style={{ background: `linear-gradient(to bottom, ${job.color}, transparent)` }} />

                {/* Hover glow blob */}
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]" style={{ background: job.color }} />

                <div className="relative pl-3">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">{job.role}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2.5">
                        <span className="rounded-full px-3 py-1 text-sm font-semibold" style={{ background: `${job.color}18`, color: job.color }}>
                          {job.company}
                        </span>
                        <span className="text-sm text-[color:var(--muted)]">{job.place}</span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-[color:var(--line2)] bg-[var(--raised)] px-3 py-1.5 text-xs font-medium text-[color:var(--muted)]">
                      {job.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-5 space-y-2.5">
                    {job.work.map(item => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: job.color }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <li key={tag} className="rounded-full border border-[color:var(--line2)] bg-[var(--raised)] px-3 py-1 text-xs font-medium text-[color:var(--muted)]">
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
