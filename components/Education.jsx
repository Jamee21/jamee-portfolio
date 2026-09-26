import Reveal from "./Reveal";

const education = [
  {
    number: "01",
    degree: "BS Software Engineering",
    institute: "Sindh Madressatul Islam University",
    location: "Karachi, Pakistan",
    period: "2023 – 2027",
    description:
      "Currently pursuing a Bachelor's degree in Software Engineering with a focus on software development and modern technologies.",
  },
  {
    number: "02",
    degree: "Intermediate in Computer Science",
    institute: "Govt. Kohsar Degree College",
    location: "Hyderabad, Pakistan",
    period: "2020 – 2022",
    description:
      "Completed intermediate education with a focus on Computer Science.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
              Education
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              My academic journey.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-5">
          {education.map((item) => (
            <Reveal key={item.number}>
              <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] md:p-9">

                <div className="grid gap-6 md:grid-cols-[100px_1fr_auto] md:items-start">

                  {/* Number */}
                  <span className="text-sm tracking-widest text-gray-600">
                    {item.number}
                  </span>

                  {/* Education Details */}
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {item.degree}
                    </h3>

                    <p className="mt-3 text-lg text-gray-300">
                      {item.institute}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.location}
                    </p>

                    <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Period */}
                  <span className="text-sm text-gray-500 md:text-right">
                    {item.period}
                  </span>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}