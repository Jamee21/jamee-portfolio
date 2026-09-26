import Reveal from "./Reveal";

const contactLinks = [
    {
        label: "Email",
        value: "mjamijami46@gmail.com",
        href: "mailto:mjamijami46@gmail.com",
        icon: "✉",
    },
    {
        label: "GitHub",
        value: "github.com/Jamee21",
        href: "https://github.com/Jamee21",
        icon: "⌘",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/jamee-r-b3b365307",
        href: "https://www.linkedin.com/in/jamee-r-b3b365307",
        icon: "in",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black px-6 py-28 text-white"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                <Reveal>
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-12 lg:p-16">

                        {/* Decorative corner */}
                        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl" />

                        {/* Header */}
                        <div className="relative max-w-4xl">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-white/40" />

                                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                                    Get In Touch
                                </p>
                            </div>

                            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                                Let's create something{" "}
                                <span className="text-gray-500">
                                    meaningful.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
                                Have a project, idea or opportunity in mind?
                                I'd love to hear about it. Let's connect and
                                discuss how we can turn your idea into a
                                practical digital solution.
                            </p>

                        </div>

                        {/* Contact Cards */}
                        <div className="relative mt-14 grid gap-4 md:grid-cols-3">

                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.label !== "Email" ? "_blank" : undefined}
                                    rel={
                                        link.label !== "Email"
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.05]"
                                >

                                    {/* Hover glow */}
                                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.04] blur-2xl transition duration-500 group-hover:bg-white/[0.08]" />

                                    <div className="relative flex items-start justify-between">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-gray-400 transition duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
                                            {link.icon}
                                        </div>

                                        <span className="text-lg text-gray-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                                            ↗
                                        </span>

                                    </div>

                                    <p className="relative mt-8 text-xs uppercase tracking-[0.2em] text-gray-600">
                                        {link.label}
                                    </p>

                                    <p className="relative mt-3 break-all text-sm font-medium text-gray-300 transition duration-300 group-hover:text-white">
                                        {link.value}
                                    </p>

                                </a>
                            ))}

                        </div>

                        {/* Bottom CTA */}
                        <div className="relative mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

                            <div>
                                <p className="text-sm font-medium text-gray-300">
                                    Have something in mind?
                                </p>

                                <p className="mt-1 text-sm text-gray-600">
                                    Let's start a conversation.
                                </p>
                            </div>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=mjamijami46@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
                            >
                                Send Me an Email

                                <span className="transition duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                        </div>

                    </div>
                </Reveal>

            </div>
        </section>
    );
}