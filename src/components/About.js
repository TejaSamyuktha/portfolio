import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-300 px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center text-black mb-10">
        About
      </h1>

      {/* Main content card */}
      <div className="flex items-center justify-center">
        <div className="bg-slate-200 flex flex-col md:flex-row items-center max-w-4xl rounded-xl shadow-lg p-6 md:p-10 space-y-8 md:space-y-0 md:space-x-10">
          {/* Image section */}
          <div className="relative w-64 h-80 rounded-full overflow-hidden border-4 border-black">
            <img
              src="/images/portimg.jpg"
              alt="samyuktha"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-black mb-4 font-serif">
              I'm Teja Samyuktha
            </h2>
            <p className="text-black mb-4 text-base">
              I'm Kasarapu Teja Samyuktha, a passionate and creative Computer
              Science undergraduate specializing in Data Science at Vignan's
              Institute of Information Technology. I enjoy transforming ideas
              into engaging digital experiences, with strong skills in React.js,
              Next.js, Tailwind CSS, and core programming languages like C++,
              Python, and JavaScript.
            </p>
            <p className="text-black mb-4 text-base">
              I bring not just development ability but a sharp analytical
              mindset to every challenge. I'm always eager to learn,
              collaborate, and contribute to meaningful tech solutions. I am
              eager to work and explore with people as I also share my
              creativity with them.
            </p>
            <div className="text-black mt-4 space-y-3 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span role="img" aria-label="email">
                  📧
                </span>{" "}
                kasaraputejasamyuktha@gmail.com
              </p>

              {/* Resume Button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="/images/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-[3px] relative inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-200 rounded-lg" />
                  <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    Resume
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
