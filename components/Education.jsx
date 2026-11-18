import Reveal from "./Reveal";

const education = [
  {
    degree: "BS Software Engineering",
    institute: "Sindh Madressatul Islam University",
    location: "Karachi, Pakistan",
    period: "2023 – 2027 (expected)",
    current: true,
    description:
      "Pursuing a Bachelor's degree in Software Engineering, with a focus on software development and modern web technologies.",
    color: "var(--accent)",
  },
  {
    degree: "Intermediate in Computer Science",
    institute: "Govt. Kohsar Degree College",
    location: "Hyderabad, Pakistan",
    period: "2020 – 2022",
    current: false,
    description: "Completed intermediate education with a focus on Computer Science.",
    color: "var(--indigo)",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[var(--raised)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Education
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              My academic{" "}
              <span className="gradient-text">journey.</span>
            </h2>
          </div>
        </Reveal>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.degree}>
              <Reveal className="h-full">
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border bg-[var(--card)] p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 sm:p-7 ${
                    item.current
                      ? "border-[color:var(--accent)] shadow-lg shadow-black/40"
                      : "border-[color:var(--line)]"
                  }`}
                >
                  {/* Top glow line for current */}
                  {item.current && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
                    />
                  )}

                  {/* Hover border overlay */}
                  {!item.current && (
                    <div
                      className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{ borderColor: item.color }}
                    />
                  )}

                  {/* Glow blob */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]"
                    style={{ background: item.color }}
                  />

                  {/* Header */}
                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-[var(--raised)] sm:h-12 sm:w-12"
                      style={{ borderColor: item.color, color: item.color }}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9v6" />
                      </svg>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 sm:gap-2">
                      {item.current && (
                        <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-bold text-[color:var(--accent-ink)] sm:px-3 sm:py-1">
                          In progress
                        </span>
                      )}
                      <span className="rounded-full border border-[color:var(--line)] bg-[var(--raised)] px-2.5 py-0.5 text-xs text-[color:var(--muted)] sm:px-3 sm:py-1">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <h3 className="relative mt-5 text-xl font-bold tracking-tight sm:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="relative mt-1 text-sm font-medium text-[color:var(--text)] sm:text-base">
                    {item.institute}
                  </p>
                  <p className="relative mt-1 flex items-center gap-1.5 text-xs text-[color:var(--muted)] sm:text-sm">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {item.location}
                  </p>
                  <p className="relative mt-3 text-sm leading-6 text-[color:var(--muted)] sm:mt-4 sm:leading-7">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
