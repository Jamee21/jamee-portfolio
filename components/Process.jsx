import Reveal from "./Reveal";

const icons = {
  understand: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  plan: (
    <>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="m3 6 1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17" />
    </>
  ),
  develop: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  test: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 3c3 2 5 5 5 9l-2 3H9l-2-3c0-4 2-7 5-9Z" />
      <circle cx="12" cy="10" r="1.5" />
      <path d="m9 15-2 4M15 15l2 4" />
    </>
  ),
};

const steps = [
  {
    title: "Understand",
    icon: "understand",
    description: "I start with requirements, goals and the problem that needs solving.",
    color: "#4fd1c0",
  },
  {
    title: "Plan",
    icon: "plan",
    description: "I break the work into clear tasks and choose the right structure and stack.",
    color: "#818cf8",
  },
  {
    title: "Develop",
    icon: "develop",
    description: "I build the interface, backend and database with clean, maintainable code.",
    color: "#4fd1c0",
  },
  {
    title: "Test",
    icon: "test",
    description: "I test the application, fix bugs and improve reliability and usability.",
    color: "#818cf8",
  },
  {
    title: "Deploy",
    icon: "deploy",
    description: "I prepare for release and verify everything works as expected.",
    color: "#4fd1c0",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[var(--raised)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              From idea to{" "}
              <span className="gradient-text">working product.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              Five clear steps, so you always know what is happening and what comes next.
            </p>
          </div>
        </Reveal>

        {/* Mobile: vertical list. md+: horizontal 5-col grid */}
        <Reveal>
          <ol className="mt-12 flex flex-col gap-4 md:grid md:grid-cols-5 md:gap-4">
            {steps.map((step, index) => (
              <li key={step.title} className="group relative flex flex-col">

                {/* Mobile layout: horizontal number + content row */}
                <div className="flex gap-4 md:flex-col md:gap-0">

                  {/* Circle marker */}
                  <div className="relative flex shrink-0 flex-col items-center md:flex-row">
                    <div
                      className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-[var(--bg)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg motion-reduce:transition-none"
                      style={{ borderColor: step.color, color: step.color }}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {icons[step.icon]}
                      </svg>
                    </div>
                    {/* Vertical connector on mobile */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="mt-1 h-full w-px bg-[var(--line)] md:hidden"
                        style={{ minHeight: "1.5rem" }}
                      />
                    )}
                    {/* Horizontal connector on desktop */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-11 top-5 hidden h-px bg-[var(--line)] md:block"
                        style={{ width: "calc(100% - 2.75rem + 1rem)" }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="mb-4 flex flex-1 flex-col rounded-2xl border border-[color:var(--line)] bg-[var(--card)] p-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[color:var(--accent)] motion-reduce:transition-none md:mt-5 md:mb-0"
                  >
                    <div
                      className="mb-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-[color:var(--accent-ink)]"
                      style={{ background: step.color }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-base font-bold tracking-tight sm:text-lg">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[color:var(--muted)]">
                      {step.description}
                    </p>
                  </div>

                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
