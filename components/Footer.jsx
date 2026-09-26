export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-lg font-semibold tracking-wide">
            JAMEE RAZA
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Full-Stack / Front-End Developer
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-gray-500">
          <a
            href="#home"
            className="transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © {year} Jamee Raza
        </p>

      </div>
    </footer>
  );
}