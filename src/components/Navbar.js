import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" min-h-screen">
      {/* Background image */}
      <img
        src="/images/template_cleanup.png"
        alt="homepage"
        className="absolute inset-0 w-full h-full  -z-10"
      />
      <div className="absolute top-[15%]  text-center text-slate-500 right-64 font-semibold text-xl md:text-3xl ">
        Developer
      </div>
      <div className="absolute top-[60%] left-60 text-slate-500 font-semibold text-xl md:text-3xl ">
        Teja Samyuktha
      </div>

      <div className="">
        <nav className="flex flex-col space-y-4 md:space-y-0 md:space-x-8 md:flex-row justify-center p-2">
          <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row gap-6 ">
            <li>
              <Link to="/" className="text-2xl font-sans">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-2xl font-sans">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-2xl font-sans">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="text-2xl font-sans">
                Skills
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-2xl font-sans">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
