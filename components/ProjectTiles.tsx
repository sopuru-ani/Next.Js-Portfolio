"use client";
import { Fragment } from "react";

import SkillPill from "./SkillPill";

type Props = {
  title: string;
  description: string;
  tech: string[];
  view: string;
  source: string;
};
function ProjectTiles({ title, description, tech, view, source }: Props) {
  return (
    <div>
      <p className="text-giorno-500">&gt; {title}</p>
      <p className="ml-4 text-gray-300">{description}</p>
      <div className="my-1 ml-4 flex flex-wrap items-center gap-2 text-gray-400">
        <span>Tech:</span>
        {tech.map((techItem: string) => (
          <Fragment key={techItem}>
            <span className="text-gray-500">--</span>
            <SkillPill size={"xs"} pill={techItem} />
          </Fragment>
        ))}
      </div>
      <div className="ml-4 flex gap-4 text-jotaro-500">
        <a href={view} target="_blank">
          [view]
        </a>
        <a href={source} target="_blank">
          [source]
        </a>
      </div>
    </div>
  );
}

export default ProjectTiles;
