import Reveal from "./Reveal";

const highlights = [
  {
    number: "01",
    title: "Full-Stack Development",
    text: "Building complete web applications by connecting modern frontend interfaces with reliable backend services.",
  },
  {
    number: "02",
    title: "Frontend Development",
    text: "Creating responsive and user-friendly interfaces using React, Next.js and modern JavaScript.",
  },
  {
    number: "03",
    title: "Backend & APIs",
    text: "Developing RESTful APIs with Node.js, Express.js, authentication and authorization.",
  },
  {
    number: "04",
    title: "Database Integration",
    text: "Working with MongoDB, Mongoose, MySQL, CRUD operations and secure data handling.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <Reveal>
          <div className="mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-white/40" />

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                About Me
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Turning ideas into{" "}
              <span className="text-gray-500">
                practical digital solutions.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Main About Area */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT - IMAGE */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">

              <div className="group relative">

                {/* Outer glow */}
                <div className="absolute -inset-3 rounded-[2rem] bg-white/[0.03] blur-xl transition duration-500 group-hover:bg-white/[0.06]" />

                {/* Image container */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/50">

                  <img
                    src="/my_image.jpeg"
                    alt="Jamee Raza"
                    className="h-[380px] w-[300px] rounded-[1.5rem] object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 sm:h-[440px] sm:w-[350px]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-20">
                    <p className="text-sm font-medium text-white">
                      Jamee Raza
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Full-Stack / Front-End Developer
                    </p>
                  </div>

                </div>

                {/* Small floating badge */}
                <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#0a0a0a] px-5 py-4 shadow-xl">
                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Based in
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    Karachi, Pakistan
                  </p>
                </div>

              </div>
            </div>
          </Reveal>

          {/* RIGHT - CONTENT */}
          <Reveal>
            <div>

              <p className="max-w-2xl text-lg leading-8 text-gray-400">
                I am a Software Engineering student and Full-Stack /
                Front-End Developer focused on building modern,
                responsive and practical digital experiences.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                I work with technologies such as React, Next.js,
                Node.js, Express.js, MongoDB and REST APIs to develop
                applications that connect clean interfaces with
                reliable backend systems.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                I enjoy solving problems, learning new technologies
                and continuously improving the quality of my code
                and projects.
              </p>

              {/* Professional Highlights */}
<div className="mt-10 grid max-w-2xl grid-cols-1 border-y border-white/10 py-7 sm:grid-cols-3">

  <div className="py-2 sm:pr-6">
    <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
      Focus
    </p>

    <p className="mt-2 text-lg font-semibold text-white">
      Modern Web Development
    </p>

    <p className="mt-1 text-sm leading-6 text-gray-600">
      Building responsive and practical digital experiences.
    </p>
  </div>

  <div className="border-white/10 py-6 sm:border-l sm:px-6 sm:py-2">
    <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
      Expertise
    </p>

    <p className="mt-2 text-lg font-semibold text-white">
      Frontend & Backend
    </p>

    <p className="mt-1 text-sm leading-6 text-gray-600">
      Working across interfaces, APIs and databases.
    </p>
  </div>

  <div className="border-white/10 py-2 sm:border-l sm:pl-6">
    <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
      Approach
    </p>

    <p className="mt-2 text-lg font-semibold text-white">
      Clean & Practical
    </p>

    <p className="mt-1 text-sm leading-6 text-gray-600">
      Focused on maintainable code and useful solutions.
    </p>
  </div>

</div>
              {/* CTA */}
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
                >
                  Explore My Work →
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                >
                  Get In Touch
                </a>

              </div>

            </div>
          </Reveal>

        </div>

        {/* Expertise Cards */}
        <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => (
            <Reveal key={item.number}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.05]">

                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-gray-600">
                    {item.number}
                  </span>

                  <span className="text-xl text-gray-700 transition duration-300 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}