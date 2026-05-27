"use client";
import { useState } from "react";
import { Link2, Copy } from "lucide-react";
function Contact() {
  const [copied, setCopied] = useState<boolean>(false);

  async function handleCopy(text: string) {
    try {
      setCopied(false);
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="bg-deepblue-500 w-full max-w-4xl p-4 border border-gray-700 text-sm sm:text-base">
        {/* Terminal header */}
        <h1 className="mb-4">
          <span className="text-jotaro-500">sopuru</span>
          @portfolio:~$ cat contact.txt
        </h1>

        {/* Contact info */}
        <div className="space-y-2 text-gray-300 ml-0 sm:ml-4">
          <p>
            <span className="text-giorno-500">&gt;</span> Email:
            <a
              href="mailto:sopuruani41@gmail.com"
              className="text-jotaro-500 ml-1"
            >
              sopuruani41@gmail.com
            </a>
            {/* <Copy className="inline-block w-5 h-5 ml-3 hover:cursor-pointer" /> */}
          </p>
          <p>
            <span className="text-giorno-500">&gt;</span> GitHub:
            <a
              href="https://github.com/sopuru-ani"
              className="text-jotaro-500 ml-1"
            >
              github/sopuru
            </a>
            <Copy
              className="inline-block w-5 h-5 ml-3 hover:cursor-pointer"
              onClick={() => handleCopy("https://github.com/sopuru-ani")}
            />
          </p>
          <p>
            <span className="text-giorno-500">&gt;</span> LinkedIn:
            <a
              href="https://www.linkedin.com/in/sopuru-ani-b286a925a/"
              className="text-jotaro-500 ml-1"
            >
              linkedin/sopuru
            </a>
            <Copy
              className="inline-block w-5 h-5 ml-3 hover:cursor-pointer"
              onClick={() =>
                handleCopy("https://www.linkedin.com/in/sopuru-ani-b286a925a/")
              }
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
