"use client";
import { useRef } from "react";

import Header from "@/components/Header";
import About from "@/components/About";
import Homepage from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Map section names to refs
  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    Home: homeRef,
    About: aboutRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Contact: contactRef,
  };
  return (
    <>
      <div className="flex flex-col h-dvh w-full">
        <Header sectionRefs={sectionRefs} />
        <main className="flex-1 w-full overflow-y-auto px-2 scroll-smooth no-scrollbar">
          <section
            ref={homeRef}
            id="home"
            className="relative min-h-full flex items-start justify-center pt-16 px-4 md:pt-32"
          >
            <Homepage />
            <div className="absolute bottom-6 text-gray-500 text-sm animate-terminal-bounce">
              ↓ scroll
            </div>
          </section>
          <section
            ref={aboutRef}
            id="about"
            className="relative min-h-full flex flex-col justify-center items-center px-4"
          >
            <About />
            {/* <div className="absolute bottom-6 text-gray-500 text-sm animate-terminal-bounce">
              ↓ scroll
            </div> */}
          </section>
          <section
            ref={projectsRef}
            id="projects"
            className="relative min-h-full flex items-center justify-center px-4"
          >
            <Projects />
            {/* <div className="absolute bottom-6 text-gray-500 text-sm animate-terminal-bounce">
              ↓ scroll
            </div> */}
          </section>
          <section
            ref={skillsRef}
            id="skills"
            className="relative min-h-full flex items-center justify-center px-4"
          >
            <Skills />
            {/* <div className="absolute bottom-6 text-gray-500 text-sm animate-terminal-bounce">
              ↓ scroll
            </div> */}
          </section>
          <section
            ref={contactRef}
            id="contact"
            className="relative min-h-full flex flex-col px-4"
          >
            <Contact />
            <Footer />
          </section>
        </main>
      </div>
    </>
  );
}
