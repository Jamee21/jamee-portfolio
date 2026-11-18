import Reveal from "./Reveal";

// Wording follows the resume. Edit dates, bullets or tags here when they change.
const experiences = [
  {
    role: "Front-End Developer",
    company: "360 Expert Solution",
    place: "Karachi, on-site",
    period: "Apr 2025 to Jun 2025",
    work: [
      "Developed responsive web interfaces and dynamic UI components, with attention to cross-browser compatibility.",
      "Fixed layout issues and refined front-end styling to improve usability and visual consistency.",
    ],
    tags: ["Responsive UI", "Dynamic components", "Cross-browser", "Styling"],
  },
  {
    role: "Web Developer and Quality Checker",
    company: "Cosmic 365 AI",
    place: "Remote",
    period: "2025",
    work: [
      "Customized responsive client-facing web layouts using Wix and supported data analysis tasks.",
      "Performed quality checks on web features for visual consistency and functional accuracy.",
    ],
    tags: ["Wix", "Quality checks", "Data analysis"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[var(--bg)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Experience
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Where I have worked.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              Hands-on work on real client websites, from interface to quality checks.
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 border-l border-[color:var(--line)]">
          {experiences.map((job) => (
            <li key={job.company} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              {/* Timeline dot with a soft ring */}
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-7 flex h-[17px] w-[17px] items-center justify-center rounded-full border border-[color:var(--accent)] bg-[var(--bg)]"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>

              <Reveal>
                <article className="group relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[var(--raised)] p-7 transition duration-300 hover:border-[color:var(--accent)] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-8">
                  {/* Soft accent glow on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
                  />

                  <div className="relative flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{job.role}</h3>
                      <p className="mt-1 text-[color:var(--muted)]">
                        <span className="font-medium text-[color:var(--text)]">{job.company}</span>
                        , {job.place}
                      </p>
                    </div>
                    <p className="rounded-full border border-[color:var(--line)] bg-[var(--bg)] px-3 py-1 text-sm text-[color:var(--muted)]">
                      {job.period}
                    </p>
                  </div>

                  <ul className="relative mt-6 max-w-2xl space-y-3">
                    {job.work.map((item) => (
                      <li key={item} className="flex gap-3 leading-7 text-[color:var(--muted)]">
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul
                    className="relative mt-6 flex flex-wrap gap-2"
                    aria-label={`${job.role}: focus areas`}
                  >
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-[color:var(--line)] bg-[var(--bg)] px-3 py-1.5 text-sm text-[color:var(--muted)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}