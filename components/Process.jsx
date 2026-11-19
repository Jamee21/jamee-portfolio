import Reveal from "./Reveal";

const steps = [
  { icon: "🔍", title: "Understand", desc: "Start with requirements, goals and the problem that needs solving." },
  { icon: "📋", title: "Plan",       desc: "Break work into clear tasks and choose the right structure and stack." },
  { icon: "💻", title: "Develop",    desc: "Build the interface, backend and database with clean, maintainable code." },
  { icon: "✅", title: "Test",       desc: "Test the app, fix bugs and improve reliability and usability." },
  { icon: "🚀", title: "Deploy",     desc: "Prepare for release and verify everything works as expected." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[var(--raised)] px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Process</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              From idea to <span className="gradient-text">working product.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              Five clear steps, so you always know what&rsquo;s happening next.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ol className="mt-12 flex flex-col gap-4 md:grid md:grid-cols-5 md:gap-4">
            {steps.map((step, i) => (
              <li key={step.title} className="group relative flex flex-col">
                <div className="flex gap-4 md:flex-col md:gap-0">

                  {/* Circle */}
                  <div className="relative flex shrink-0 flex-col items-center md:flex-row">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--line2)] bg-[var(--card)] text-xl transition-all duration-300 group-hover:border-[color:var(--accent)] group-hover:bg-[var(--accent)] group-hover:shadow-lg group-hover:shadow-[var(--accent-glow)]">
                      {step.icon}
                    </div>
                    {i < steps.length - 1 && (
                      <>
                        <div aria-hidden="true" className="mt-1 h-6 w-px bg-[color:var(--line)] md:hidden" />
                        <div aria-hidden="true" className="absolute left-11 top-5 hidden h-px bg-[color:var(--line)] md:block" style={{ width: "calc(100% - 2.75rem + 1rem)" }} />
                      </>
                    )}
                  </div>

                  {/* Card */}
                  <div className="mb-3 flex flex-1 flex-col rounded-2xl border border-[color:var(--line2)] bg-[var(--card)] p-4 transition-all duration-300 group-hover:border-[color:var(--accent)] group-hover:shadow-md group-hover:shadow-[var(--accent-glow)] md:mt-5 md:mb-0">
                    <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--teal)] text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <h3 className="text-sm font-bold sm:text-base">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-[color:var(--muted)] sm:text-sm sm:leading-6">{step.desc}</p>
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
