import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend & Mobile",
    skills: ["JavaScript", "React", "Next.js", "React Native", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST API", "Middleware", "API Integration"],
  },
  {
    title: "Database & Security",
    skills: ["MongoDB", "Mongoose", "MySQL", "CRUD", "bcrypt", "JWT"],
  },
  {
    title: "Programming",
    skills: ["C", "C++", "JavaScript"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Thunder Client", "Wix"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Skills
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Technologies I work with.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title}>
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="flex flex-col gap-5 md:flex-row md:items-center">

                  <div className="flex w-full items-center gap-4 md:w-64">
                    <span className="text-sm text-gray-600">
                      0{index + 1}
                    </span>

                    <h3 className="text-lg font-semibold">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400 transition duration-300 hover:border-white/30 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
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