import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";
import Process from "../components/Process";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Process />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}