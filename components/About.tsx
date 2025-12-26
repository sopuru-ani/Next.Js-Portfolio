function About() {
  return (
    <>
      <div className="p-2 bg-deepblue-500 w-full max-w-300 min-h-full wrap-normal border border-gray-700 mb-20 sm:mb-0">
        <h1 className="mb-3">
          <span className="text-jotaro-500">sopuru</span>
          @portfolio:~$ cat about.txt
        </h1>

        <div className="space-y-2 leading-relaxed">
          <p>
            <span className="text-giorno-500">&gt;</span> Computer science
            student who loves turning ideas into functional, polished, and
            interactive web apps.
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> My interest in
            programming stemmed back to my days in middle school when i got my
            first laptop and had started writing HTML programs
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> I like understanding
            how things work end-to-end, from the UI users see to the logic
            running behind the scenes.
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> Most of my learning
            comes from building, breaking, and rebuilding projects until they
            feel right.
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> When I’m not coding,
            I’m usually in the word, watching anime, exploring new tech, or
            tinkering with fun side projects.
          </p>
          <br></br>
          <p className="text-gray-500">-- end of file --</p>
        </div>
      </div>
    </>
  );
}

export default About;
