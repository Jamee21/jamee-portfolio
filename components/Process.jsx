import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I first understand the requirements, goals and problems that need to be solved.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I break the project into clear tasks and decide the structure, technologies and development approach.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "I build the interface, backend services and required functionality with clean and maintainable code.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "I test the application, identify bugs and make improvements for reliability and usability.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "After testing, I prepare the project for deployment and make sure everything works as expected.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              My Process
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              From idea to working product.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-2 hover:border-white/25">
                
                <span className="text-sm tracking-widest text-gray-600">
                  {step.number}
                </span>

                <h3 className="mt-10 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {step.description}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}