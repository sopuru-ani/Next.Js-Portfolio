"use client";
import { useRef } from "react";

import Header from "@/components/Header";
import About from "@/components/About";
import ProjectTiles from "@/components/ProjectTiles";
import SkillPill from "@/components/SkillPill";
import Image from "next/image";

import { FileText } from "lucide-react";
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
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
              {/* Avatar */}
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  width={180}
                  height={180}
                  className="rounded-md border border-gray-600"
                />
              </div>

              {/* Info.txt panel */}
              <div className="flex-1 bg-gray-800 border border-gray-700 rounded-sm text-lg">
                {/* File tab */}
                <div className="bg-gray-700 inline-flex items-center gap-2 px-3 py-1 border-t-2 border-jotaro-500 text-giorno-500">
                  <FileText className="w-4 h-4 text-white" />
                  <span>Intro.txt</span>
                </div>

                {/* File content */}
                <div className="p-3 text-lg">
                  <p className="terminal-path pb-1 mb-1 border-b border-gray-700">
                    <span className="user text-white">app</span>
                    <span className="path text-white"> &gt; page.tsx &gt;</span>
                    <span className="path"> intro</span>
                  </p>

                  <p>
                    <span className="text-gray-500 mr-2">1</span>
                    Sopuru Ani
                  </p>

                  <p>
                    <span className="text-gray-500 mr-2">2</span>
                    Computer Science Student | Full Stack Developer
                  </p>

                  <p>
                    <span className="text-gray-500 mr-2">3</span>I build apps
                    for the fun of it.
                    <span className="cursor">|</span>
                  </p>
                </div>
              </div>
            </div>
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
            <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700">
              <h1 className="mb-4">
                <span className="text-jotaro-500">sopuru</span>
                @portfolio:~$ ls projects
              </h1>

              <div className="space-y-4 text-sm">
                <ProjectTiles
                  title="jojo-stand-encyclopedia"
                  description="A JoJo-themed web app with searchable Stand cards."
                  tech={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Express",
                    "MongoDB",
                    "Node.js",
                  ]}
                  view="view"
                  source="source"
                />
                <ProjectTiles
                  title="jojo-stand-encyclopedia"
                  description="A JoJo-themed web app with searchable Stand cards."
                  tech={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Express",
                    "MongoDB",
                    "Node.js",
                  ]}
                  view="view"
                  source="source"
                />
                <ProjectTiles
                  title="qr-manager"
                  description="A web app for creating and managing dynamic qr codes"
                  tech={[
                    "React",
                    "Tailwind",
                    "JavaScript",
                    "Express",
                    "MongoDB",
                    "Node.js",
                    "qrcode",
                  ]}
                  view="view"
                  source="source"
                />
              </div>
            </div>
            {/* <div className="absolute bottom-6 text-gray-500 text-sm animate-terminal-bounce">
              ↓ scroll
            </div> */}
          </section>
          <section
            ref={skillsRef}
            id="skills"
            className="relative min-h-full flex items-center justify-center px-4"
          >
            <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700">
              {/* Terminal header */}
              <h1 className="mb-4">
                <span className="text-jotaro-500">sopuru</span>
                @portfolio:~$ cat skills.txt
              </h1>

              {/* Frontend */}
              <p className="text-giorno-500 mt-2 mb-1">&gt; Frontend</p>
              <div className="flex flex-wrap gap-2 ml-4 mb-3">
                <SkillPill size={"sm"} pill="React" />
                <SkillPill size={"sm"} pill="Next.js" />
                <SkillPill size={"sm"} pill="Tailwind" />
                <SkillPill size={"sm"} pill="JavaScript" />
                <SkillPill size={"sm"} pill="TypeScript" />
              </div>

              {/* Backend */}
              <p className="text-giorno-500 mt-2 mb-1">&gt; Backend</p>
              <div className="flex flex-wrap gap-2 ml-4 mb-3">
                <SkillPill size={"sm"} pill="Node.js" />
                <SkillPill size={"sm"} pill="Express" />
                <SkillPill size={"sm"} pill="Python" />
                <SkillPill size={"sm"} pill="Flask" />
                <SkillPill size={"sm"} pill="MongoDB" />
              </div>

              {/* Tools & Misc */}
              <p className="text-giorno-500 mt-2 mb-1">&gt; Tools & Misc</p>
              <div className="flex flex-wrap gap-2 ml-4 mb-3">
                <SkillPill size={"sm"} pill="Git" />
                <SkillPill size={"sm"} pill="Docker" />
                <SkillPill size={"sm"} pill="VS Code" />
              </div>
            </div>
            {/* <div className="absolute bottom-6 text-gray-500 text-sm animate-terminal-bounce">
              ↓ scroll
            </div> */}
          </section>
          <section
            ref={contactRef}
            id="contact"
            className="relative min-h-full flex items-center justify-center px-4"
          >
            <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700">
              {/* Terminal header */}
              <h1 className="mb-4">
                <span className="text-jotaro-500">sopuru</span>
                @portfolio:~$ cat contact.txt
              </h1>

              {/* Contact info */}
              <div className="space-y-2 text-gray-300 ml-4">
                <p>
                  <span className="text-giorno-500">&gt;</span> Email:
                  <a
                    href="mailto:sopuruani41@gmail.com"
                    className="text-jotaro-500 ml-1"
                  >
                    sopuruani41@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-giorno-500">&gt;</span> GitHub:
                  <a
                    href="https://github.com/username"
                    className="text-jotaro-500 ml-1"
                  >
                    github/sopuru
                  </a>
                </p>
                <p>
                  <span className="text-giorno-500">&gt;</span> LinkedIn:
                  <a
                    href="https://linkedin.com/in/sopuru"
                    className="text-jotaro-500 ml-1"
                  >
                    linkedin/sopuru
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
