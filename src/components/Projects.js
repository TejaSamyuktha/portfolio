import React from "react";

const projects = [
  {
    title: "Zenpathways",
    desc: "Built a mental wellness app including journaling and multimedia suggestions.Enabled therapist booking and user interaction using modern React patterns based on Next.js.",
    img: "/images/therapy.jpg",
  },
  {
    title: "Bookverse",
    desc: "The Book Booking Web App is a modern and responsive platform that allows users to explore newly released books and easily reserve or book them. It is designed to provide a seamless experience for book lovers to discover, track, and manage book reservations online based on React.js and Tailwind CSS.",
    img: "/images/book.jpg",
  },
  {
    title: "Comprehensive Health Solutions",
    desc: "– Created a medical support platform offering Ayurveda, allopathy, and first-aid help.Implemented appointment booking forms with field validations based on Html ,Css,Java Script.",
    img: "/images/health solutions.jpg",
  },
  {
    title: "Portfolio Website",
    desc: " Designed and deployed a personal website to highlight academic and technical skills.Ensured mobile-first responsiveness and modern styling using React.js and Tailwind.Css.",
    img: "/images/portfolio.jpg",
  },
];

const Projects = () => {
  return (
    <div className="bg-slate-300 min-h-screen py-10 px-4">
      <h2 className="text-center font-sans text-5xl text-black mb-10">
        Projects
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-teal-700">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
