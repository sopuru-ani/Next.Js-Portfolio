"use client";
import SkillPill from "./SkillPill";

function Skills() {
  return (
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
        <SkillPill size={"sm"} pill="JavaScript" />
        <SkillPill size={"sm"} pill="Express" />
        <SkillPill size={"sm"} pill="Python" />
        <SkillPill size={"sm"} pill="Flask" />
        <SkillPill size={"sm"} pill="MongoDB" />
      </div>

      {/* Tools & Misc */}
      <p className="text-giorno-500 mt-2 mb-1">&gt; Tools & Misc</p>
      <div className="flex flex-wrap gap-2 ml-4 mb-3">
        <SkillPill size={"sm"} pill="Git" />
        <SkillPill size={"sm"} pill="VS Code" />
        <SkillPill size={"sm"} pill="Vercel" />
        <SkillPill size={"sm"} pill="Firebase" />
        <SkillPill size={"sm"} pill="Render" />
      </div>
    </div>
  );
}

export default Skills;
