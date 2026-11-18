import Reveal from "./Reveal";

const education = [
  {
    degree: "BS Software Engineering",
    institute: "Sindh Madressatul Islam University",
    location: "Karachi, Pakistan",
    period: "2023 to 2027 (expected)",
    current: true,
    description:
      "Currently pursuing a Bachelor's degree in Software Engineering, with a focus on software development and modern web technologies.",
  },
  {
    degree: "Intermediate in Computer Science",
    institute: "Govt. Kohsar Degree College",
    location: "Hyderabad, Pakistan",
    period: "2020 to 2022",
    description: "Completed intermediate education with a focus on Computer Science.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[var(--raised)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Education
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              My academic journey.
            </h2>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <li key={item.degree}>
              <Reveal className="h-full">
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl border bg-[var(--bg)] p-7 transition duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-8 ${
                    item.current
                      ? "border-[color:var(--accent)] shadow-lg shadow-black/30"
                      : "border-[color:var(--line)] hover:border-[color:var(--accent)]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--line)] bg-[var(--raised)] text-[color:var(--accent)]">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
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
                    <p className="rounded-full border border-[color:var(--line)] bg-[var(--raised)] px-3 py-1 text-sm text-[color:var(--muted)]">
                      {item.period}
                    </p>
                  </div>

                  <h3 className="relative mt-6 text-2xl font-semibold tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="relative mt-2 text-lg">{item.institute}</p>
                  <p className="relative mt-1 text-sm text-[color:var(--muted)]">{item.location}</p>
                  <p className="relative mt-4 leading-7 text-[color:var(--muted)]">
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