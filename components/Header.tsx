"use client";
import { useState, useEffect, useRef } from "react";
import useTypedText from "@/hooks/useTypedText";
import { FileUser } from "lucide-react";

function Header({
  sectionRefs,
}: {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
}) {
  const [isActive, setIsActive] = useState("Home");
  const sections = ["Home", "About", "Projects", "Skills", "Contact"];
  const typedText = useTypedText(isActive ? isActive.toLowerCase() : ""); // e.g., 'home', 'about'
  const isProgrammaticScroll = useRef(false);

  // function handleClick(sectionName: string) {
  //   setIsActive(sectionName);
  //   sectionRefs[sectionName]?.current?.scrollIntoView({ behavior: "smooth" });
  // }
  function handleClick(sectionName: string) {
    isProgrammaticScroll.current = true;
    setIsActive(sectionName);

    sectionRefs[sectionName]?.current?.scrollIntoView({
      behavior: "smooth",
    });

    // re-enable observer after scroll finishes
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 700); // tweak if needed
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName =
              entry.target.id.charAt(0).toUpperCase() +
              entry.target.id.slice(1);

            setIsActive(sectionName);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
    <header className="terminal-header border-b border-gray-700">
      {/* Top Layer: Fake file path */}
      <div className="terminal-path">
        <span className="user">sopuru</span>
        <span className="at">@</span>
        <span className="host">portfolio</span>
        <span className="colon">:~</span>
        <span className="path">\{typedText}</span>
        <span className="cursor">█</span>
      </div>

      {/* Bottom Layer: Navigation */}
      <nav className="terminal-nav -mb-2 -mx-2 border-t border-t-gray-700 flex flex-row justify-between ">
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className={isActive === section ? "setActive" : ""}
              onClick={() => handleClick(section)}
            >
              {section}
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          className="decoration-0 text-sm sm:text-lg px-3 py-2 hover:text-jotaro-500 hidden sm:inline-block"
          target="_blank"
        >
          <FileUser className="inline w-4 h-4" />
          <span>resume</span>
        </a>
        <a
          href="/resume.pdf"
          className="flex flex-col items-center justify-center fixed bottom-8 right-8 decoration-0 text-4xl px-3 py-2 sm:hidden backdrop-brightness-50 backdrop-blur-md p-2.5 rounded-lg"
          target="_blank"
        >
          <FileUser className="inline w-8 h-8" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
