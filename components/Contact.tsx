"use client";
function Contact() {
  return (
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
            href="https://github.com/sopuru-ani"
            className="text-jotaro-500 ml-1"
          >
            github/sopuru
          </a>
        </p>
        <p>
          <span className="text-giorno-500">&gt;</span> LinkedIn:
          <a
            href="https://www.linkedin.com/in/sopuru-ani-b286a925a/"
            className="text-jotaro-500 ml-1"
          >
            linkedin/sopuru
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
