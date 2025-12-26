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
            student with a passion for building functional and visually
            intentional web applications.
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> My interest in web
            development began in JSS3, driven by curiosity about how websites
            work under the hood.
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> I enjoy working across
            the stack — designing responsive interfaces, building scalable
            backends, and experimenting with new ideas.
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> I value clean code,
            thoughtful design, and continuous learning.
          </p>

          <p>
            <span className="text-giorno-500">&gt;</span> Outside of coding, I
            enjoy chess, anime, and creative problem-solving.
          </p>
          <br></br>
          <p className="text-gray-500">-- end of file --</p>
        </div>
      </div>
    </>
  );
}

export default About;
