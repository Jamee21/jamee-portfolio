import Reveal from "./Reveal";

const expertise = [
  {
    number: "01",
    title: "Full-Stack Development",
    short: "Complete digital products",
    description:
      "Building complete web applications by connecting modern frontend interfaces with reliable backend services, APIs and databases.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    title: "Frontend Development",
    short: "Modern user interfaces",
    description:
      "Creating responsive, clean and user-friendly interfaces with a strong focus on usability, accessibility and cross-browser compatibility.",
    technologies: ["JavaScript", "React", "Next.js", "CSS3"],
  },
  {
    number: "03",
    title: "Backend & APIs",
    short: "Reliable backend systems",
    description:
      "Developing structured RESTful APIs with authentication, authorization, middleware and secure communication between applications.",
    technologies: ["Node.js", "Express.js", "REST API", "JWT"],
  },
  {
    number: "04",
    title: "Database Integration",
    short: "Data-driven applications",
    description:
      "Designing and integrating databases with CRUD operations, data models and secure management of application data.",
    technologies: ["MongoDB", "Mongoose", "MySQL", "CRUD"],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-16 max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-white/40" />

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                Expertise
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Building across the{" "}
              <span className="text-gray-500">
                entire development stack.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              From responsive interfaces to backend systems and
              databases, I work across different layers of a
              digital product to turn ideas into functional
              applications.
            </p>

          </div>
        </Reveal>

        {/* Expertise Grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {expertise.map((item) => (
            <Reveal key={item.number}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.045] md:p-10">

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition duration-500 group-hover:bg-white/[0.08]" />

                {/* Top row */}
                <div className="relative flex items-start justify-between">

                  <span className="text-sm font-medium tracking-[0.25em] text-gray-600 transition duration-300 group-hover:text-gray-400">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-gray-600 transition duration-500 group-hover:border-white/25 group-hover:bg-white group-hover:text-black">
                    ↗
                  </span>

                </div>

                {/* Title */}
                <div className="relative mt-14">

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    {item.short}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>

                </div>

                {/* Description */}
                <p className="relative mt-5 max-w-xl text-base leading-7 text-gray-400">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="relative my-8 h-px bg-white/10" />

                {/* Technologies */}
                <div className="relative">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-600">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-black/30 px-3.5 py-2 text-xs font-medium text-gray-400 transition duration-300 group-hover:border-white/20 group-hover:text-gray-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-white/30 transition duration-500 group-hover:scale-x-100 md:left-10 md:right-10" />

              </article>
            </Reveal>
          ))}

        </div>

        {/* Bottom statement */}
        <Reveal>
          <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

            <p className="max-w-xl text-sm leading-6 text-gray-600">
              Focused on building solutions that are functional,
              maintainable and designed around real user needs.
            </p>

            <a
              href="#skills"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white"
            >
              Explore my technical skills

              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}