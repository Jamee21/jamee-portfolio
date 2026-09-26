import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <Reveal>
            <div className="max-w-3xl">

              {/* Small intro */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-white/40" />

                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                  Software Engineering Student
                </p>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
                Hi, I'm{" "}
                <span className="text-gray-500">
                  Muhammad Jamee Raza.
                </span>
              </h1>

              {/* Role */}
              <h2 className="mt-7 text-2xl font-medium text-gray-300 sm:text-3xl">
                Full-Stack / Front-End Developer
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
                I build responsive web applications, RESTful APIs
                and practical digital solutions using modern web
                technologies.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition duration-300 hover:border-white/25 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-7 py-3.5 font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
                >
                  View Projects →
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-7 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                >
                  Let's Talk
                </a>
              </div>

              {/* Quick Info */}
              <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-gray-500">
                <span>Karachi, Pakistan</span>

                <span className="hidden sm:inline">•</span>

                <span>Full-Stack Development</span>

                <span className="hidden sm:inline">•</span>

                <span>Web & Mobile</span>
              </div>

            </div>
          </Reveal>

          {/* RIGHT - ONLY CODING IMAGE */}
          <Reveal>
            <div className="flex w-full items-center justify-center lg:justify-end">
              <div className="w-full max-w-[430px]">

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/50 transition duration-500 hover:-translate-y-2 hover:border-white/20">

                  <img
                    src="/auth_api.png"
                    alt="Coding project"
                    className="h-[260px] w-full rounded-2xl object-cover transition duration-700 hover:scale-105 sm:h-[320px] lg:h-[360px]"
                  />

                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-gray-600 transition duration-300 hover:text-white sm:block"
      >
        Scroll ↓
      </a>
    </section>
  );
}