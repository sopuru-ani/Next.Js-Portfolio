"use client";
import { useRef } from "react";
import { motion, easeOut } from "motion/react";

import Header from "@/components/Header";
import About from "@/components/About";
import Homepage from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GridBG from "@/components/GridBG";

/**
 * Client shell for the portfolio: Motion animations, section refs, and Header.
 *
 * Server widgets (LeetCode, later GitHub, …) are passed as `children` and
 * rendered inside the Misc section — above Contact.
 */
function PortfolioShell({ children }: { children?: React.ReactNode }) {
  const fallInVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const miscRef = useRef<HTMLElement>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    Home: homeRef,
    About: aboutRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Contact: contactRef,
    Misc: miscRef,
  };

  return (
    <>
      <GridBG />
      <div className="flex flex-col h-dvh w-dvw">
        <Header sectionRefs={sectionRefs} />
        <main className="flex-1 w-full overflow-y-auto px-2 scroll-smooth no-scrollbar">
          <motion.section
            variants={fallInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            ref={homeRef}
            id="home"
            className="relative min-h-full flex items-start justify-center pt-16 px-4 md:pt-32"
          >
            <Homepage />
            <div className="absolute bottom-6 text-gray-500 text-sm animate-terminal-bounce">
              ↓ scroll
            </div>
          </motion.section>
          <motion.section
            variants={fallInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            ref={aboutRef}
            id="about"
            className="relative min-h-full flex flex-col justify-center items-center px-4"
          >
            <About />
          </motion.section>
          <motion.section
            variants={fallInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            ref={projectsRef}
            id="projects"
            className="relative min-h-full flex items-center justify-center px-4"
          >
            <Projects />
          </motion.section>
          <motion.section
            variants={fallInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            ref={skillsRef}
            id="skills"
            className="relative min-h-full flex items-center justify-center px-4"
          >
            <Skills />
          </motion.section>
          <motion.section
            variants={fallInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            ref={miscRef}
            id="misc"
            className="relative min-h-full flex items-center justify-center px-4"
          >
            {children}
          </motion.section>
          <motion.section
            variants={fallInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            ref={contactRef}
            id="contact"
            className="relative min-h-full flex flex-col px-4"
          >
            <Contact />
            <Footer />
          </motion.section>
        </main>
      </div>
    </>
  );
}

export default PortfolioShell;
