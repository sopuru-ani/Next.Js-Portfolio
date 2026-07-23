"use client";

import { useState } from "react";
import ProjectTiles from "./ProjectTiles";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700">
      <h1 className="mb-4">
        <span className="text-jotaro-500">sopuru</span>
        @portfolio:~$ ls projects
      </h1>

      <div className="space-y-4 text-sm">
        <ProjectTiles
          title="lostlink"
          description="Campus lost-and-found platform with Gemini-powered match suggestions, real-time messaging, and web push — senior capstone."
          tech={[
            "React",
            "Vite",
            "FastAPI",
            "Supabase",
            "Gemini",
            "WebSocket",
            "PWA",
          ]}
          view="https://csdp-490.vercel.app"
          source="https://github.com/sopuru-ani/csdp_490"
        />
        <ProjectTiles
          title="shellie"
          description="Installable local CLI coding agent for shell, file, search, and lint workflows with session memory and multi-LLM support."
          tech={[
            "Python",
            "LangChain",
            "LangGraph",
            "SQLite",
            "Cognee",
            "pipx",
          ]}
          source="https://github.com/sopuru-ani/shellie"
        />
        <ProjectTiles
          title="scanam"
          description="Mobile app that photographs receipts and extracts structured data via Gemini vision, with Firebase auth and planning lists."
          tech={[
            "React Native",
            "Expo",
            "Firebase",
            "FastAPI",
            "Gemini Vision",
          ]}
          source="https://github.com/sopuru-ani/scanam"
        />
        <ProjectTiles
          title="hawkbot"
          description="RAG chatbot over campus content with hybrid Pinecone retrieval, reranking, and web search."
          tech={[
            "Python",
            "FastAPI",
            "Pinecone",
            "Sentence Transformers",
            "React",
            "Tavily",
          ]}
          source="https://github.com/sopuru-ani/Hawkbot"
        />

        {showMore && (
          <>
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
              // view="https://qr-manager.net"
              source="https://github.com/sopuru-ani/Jojo-Stand-Card"
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
            <ProjectTiles
              title="domus"
              description="A full-stack Resident Assistant management system designed to streamline resident tracking, incidents, and daily RA workflows"
              tech={[
                "React",
                "Next.js",
                "Tailwind",
                "Shadcn",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "Node.js",
              ]}
              view="https://ra-pwa.vercel.app"
              source="https://github.com/sopuru-ani/RA-PWA"
            />
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => setShowMore((prev) => !prev)}
        className="mt-6 w-full text-center text-gray-500 text-sm animate-seemore-bounce hover:text-gray-400 cursor-pointer"
      >
        {showMore ? "↑ see less" : "↓ see more"}
      </button>
    </div>
  );
}

export default Projects;
