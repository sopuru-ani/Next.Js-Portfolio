"use client";

import ProjectTiles from "./ProjectTiles";
function Projects() {
  return (
    <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700">
      <h1 className="mb-4">
        <span className="text-jotaro-500">sopuru</span>
        @portfolio:~$ ls projects
      </h1>

      <div className="space-y-4 text-sm">
        <ProjectTiles
          title="jojo-stand-encyclopedia"
          description="A JoJo-themed web app with searchable Stand cards."
          tech={["HTML", "CSS", "JavaScript", "Express", "MongoDB", "Node.js"]}
          view="https://qr-manager.net"
          source="https://github.com/sopuru-ani/QR-Manager"
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
          view="https://qr-manager.net"
          source="https://github.com/sopuru-ani/QR-Manager"
        />
      </div>
    </div>
  );
}

export default Projects;
