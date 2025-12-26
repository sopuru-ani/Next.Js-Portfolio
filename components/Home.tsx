"use client";
import Image from "next/image";
import { FileText } from "lucide-react";

function Homepage() {
  return (
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
            <span className="text-gray-500 mr-2">3</span>Building web apps for
            fun, clarity, and challenge.
            <span className="cursor">|</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
