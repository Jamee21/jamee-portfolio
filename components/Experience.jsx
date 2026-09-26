import Reveal from "./Reveal";

const experiences = [
  {
    number: "01",
    role: "Front-End Developer",
    company: "360 Expert Solution",
    location: "Karachi · On-site",
    description:
      "Developed responsive web interfaces with a focus on clean layouts, cross-browser compatibility and dynamic user interfaces.",
    work: [
      "Built responsive web interfaces",
      "Worked on dynamic UI components",
      "Fixed bugs and styling issues",
      "Improved cross-browser compatibility",
    ],
  },
  {
    number: "02",
    role: "Web Developer & Quality Checker",
    company: "Cosmic 365 AI",
    location: "Remote",
    description:
      "Worked on Wix-based layouts, data analysis and quality checking to improve website consistency and usability.",
    work: [
      "Created and adjusted Wix layouts",
      "Performed website quality checks",
      "Analyzed website data",
      "Identified UI and functionality issues",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Experience
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Where I have worked.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <Reveal key={experience.number}>
              <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] md:p-10">

                <div className="grid gap-8 lg:grid-cols-[180px_1fr_1fr]">

                  {/* Number */}
                  <div>
                    <span className="text-sm tracking-widest text-gray-600">
                      {experience.number}
                    </span>
                  </div>

                  {/* Role */}
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-gray-300">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {experience.location}
                    </p>
                  </div>

                  {/* Details */}
                  <div>
                    <p className="leading-7 text-gray-400">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {experience.work.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-gray-500"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}