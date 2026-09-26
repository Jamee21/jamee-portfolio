import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "User Authentication & User Management REST API",
    description:
      "A RESTful backend system for user registration, authentication, authorization and user management with secure password handling.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
    ],
    github:
      "https://github.com/Jamee21/User-Authentication-User-Management-REST-API",
  },
  {
    number: "02",
    title: "Skill Swap App",
    description:
      "A platform concept where users can share their skills, discover other skills and connect with people for skill exchange.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/Jamee21/skill-swap-app",
  },
  {
    number: "03",
    title: "Fitness Tracker",
    description:
      "A fitness tracking application designed to monitor workouts, activities, goals and personal progress.",
    technologies: [
      "React",
      "JavaScript",
      "REST API",
    ],
    github: "https://github.com/Jamee21/fitness-tracker-app",
  },
  {
    number: "04",
    title: "Hotel Welcome Screen",
    description:
      "A hotel TV welcome system designed to display guest information, hotel services, billing details and promotional content.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Android TV",
    ],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Projects
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Things I have built.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              A selection of projects demonstrating my experience
              with frontend development, backend APIs, databases
              and practical applications.
            </p>
          </div>
        </Reveal>

        {/* Project Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.number}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.05]">

                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-widest text-gray-600">
                    PROJECT {project.number}
                  </span>

                  <span className="text-2xl text-gray-700 transition duration-300 group-hover:text-white">
                    ↗
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-12 max-w-xl text-2xl font-semibold leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-xl leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-white/25 hover:text-white"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <a
                    href={project.github}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={
                      project.github !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
                  >
                    View on GitHub
                    <span>→</span>
                  </a>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}