"use client";

import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-[0.2em] text-white transition hover:text-gray-300"
        >
          JAMEE
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm text-gray-400 transition duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-gray-200"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
        >
          <span className="text-xl">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-white px-5 py-3 text-center font-medium text-black"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}