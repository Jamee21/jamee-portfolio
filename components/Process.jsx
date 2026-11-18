import Reveal from "./Reveal";

/* Simple inline icons. Decorative only, so they are hidden from screen readers. */
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
    description: "I start with the requirements, the goals and the problem that needs solving.",
  },
  {
    title: "Plan",
    icon: "plan",
    description: "I break the work into clear tasks and choose the structure and technologies.",
  },
  {
    title: "Develop",
    icon: "develop",
    description: "I build the interface, backend and database with clean, maintainable code.",
  },
  {
    title: "Test",
    icon: "test",
    description: "I test the application, fix bugs and improve reliability and usability.",
  },
  {
    title: "Deploy",
    icon: "deploy",
    description: "I prepare the project for release and check that everything works as expected.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[var(--raised)] px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent)]">
              Process
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              From idea to working product.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              Five clear steps, so you always know what is happening and what comes next.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ol className="mt-14 grid gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="group relative flex flex-col">
                {/* Step marker, with a line running to the next step on wide screens */}
                <div className="relative flex items-center">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)] bg-[var(--bg)] text-[color:var(--accent)] transition duration-300 group-hover:bg-[var(--accent)] group-hover:text-[color:var(--accent-ink)] motion-reduce:transition-none">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {icons[step.icon]}
                    </svg>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-12 hidden h-px bg-[var(--line)] md:block"
                      style={{ width: "calc(100% - 3rem + 1.5rem)" }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="mt-5 h-full rounded-2xl border border-[color:var(--line)] bg-[var(--bg)] p-6 transition duration-300 group-hover:border-[color:var(--accent)] motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
                  <p className="text-sm font-semibold text-[color:var(--accent)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}