import React from "react";

const skills = [
  { name: "HTML & CSS", percent: 75 },
  { name: "BOOTSTRAP", percent: 65 },
  { name: "JAVASCRIPT", percent: 35 },
  { name: "React.Js", percent: 70 },
  { name: "Next.Js", percent: 70 },
  { name: "Tailwind.css", percent: 80 },
  { name: "C++", percent: 75 },
  { name: "Python", percent: 75 },
  { name: "SQL", percent: 70 },
];

const SkillCircle = ({ percent, name }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="relative w-[100px] h-[100px]">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="#1f2937" // gray-800
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45"
            stroke="#facc15" // yellow-400
            strokeWidth="10"
            fill="transparent"
            strokeDasharray="282.6"
            strokeDashoffset={282.6 - (282.6 * percent) / 100}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {percent}%
        </div>
      </div>
      <p className="mt-2 uppercase text-sm tracking-wide">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-slate-300 min-h-screen py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">MY SKILLS</h2>
      <div className="flex flex-wrap justify-center gap-10 pt-36">
        {skills.map((skill, idx) => (
          <SkillCircle key={idx} percent={skill.percent} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
