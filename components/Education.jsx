import Reveal from "./Reveal";

const education = [
  {
    degree: "BS Software Engineering",
    institute: "Sindh Madressatul Islam University",
    location: "Karachi, Pakistan",
    period: "2023 – 2027",
    current: true,
    description: "Bachelor's degree in Software Engineering with focus on software development and modern web technologies.",
    color: "var(--accent)",
  },
  {
    degree: "Intermediate in Computer Science",
    institute: "Govt. Kohsar Degree College",
    location: "Hyderabad, Pakistan",
    period: "2020 – 2022",
    current: false,
    description: "Completed intermediate education with a focus on Computer Science.",
    color: "var(--teal)",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[var(--bg)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Education</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              My academic <span className="gradient-text">journey.</span>
            </h2>
          </div>
        </Reveal>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2">
          {education.map(item => (
            <li key={item.degree}>
              <Reveal className="h-full">
                <article className={`group relative h-full overflow-hidden rounded-2xl border bg-[var(--card)] p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl sm:p-7 ${item.current ? "border-[color:var(--accent)] shadow-lg shadow-[var(--accent-glow)]" : "border-[color:var(--line2)] hover:border-[color:var(--accent)]"}`}>
                  {item.current && <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--teal)]" />}

                  <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]" style={{ background: item.color }} />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 bg-[var(--raised)] text-xl" style={{ borderColor: item.color }}>
                      🎓
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      {item.current && (
                        <span className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--teal)] px-2.5 py-0.5 text-xs font-bold text-white">In progress</span>
                      )}
                      <span className="rounded-full border border-[color:var(--line2)] bg-[var(--raised)] px-2.5 py-1 text-xs text-[color:var(--muted)]">{item.period}</span>
                    </div>
                  </div>

                  <h3 className="relative mt-5 text-xl font-bold sm:text-2xl">{item.degree}</h3>
                  <p className="relative mt-1 font-medium text-[color:var(--accent-lt)] sm:text-base">{item.institute}</p>
                  <p className="relative mt-1 flex items-center gap-1.5 text-sm text-[color:var(--muted)]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" /><circle cx="12" cy="9" r="2.5" /></svg>
                    {item.location}
                  </p>
                  <p className="relative mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
