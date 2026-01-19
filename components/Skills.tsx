
import React from 'react';
import { Brain } from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  shadowClass: string;
  brandColor: string;
}

// High-Fidelity Official Brand SVGs
const HTML5Logo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    className="w-16 h-16"
    alt="HTML5"
  />
);


const CSS3Logo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    className="w-16 h-16"
    alt="CSS3"
  />
);


const JSLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    className="w-16 h-16"
    alt="JavaScript"
  />
);


const PythonLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    className="w-16 h-16"
    alt="Python"
  />
);


const VSCodeLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    className="w-16 h-16"
    alt="VS Code"
  />
);




const GitLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    className="w-16 h-16"
    alt="Git"
  />
);


const GitHubLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    className="w-16 h-16 invert"
    alt="GitHub"
  />
);


const FlaskLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
    className="w-16 h-16 invert"
    alt="Flask"
  />
);

const NumPyLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
    className="w-16 h-16"
    alt="NumPy"
  />
);
const PandasLogo = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
    className="w-16 h-16"
    alt="Pandas"
  />
);


const skills: SkillItem[] = [
  { name: "Python", icon: <PythonLogo />, shadowClass: "hover:shadow-blue-500/30", brandColor: "text-[#3776AB]" },
  { name: "HTML5", icon: <HTML5Logo />, shadowClass: "hover:shadow-orange-500/30", brandColor: "text-[#E34F26]" },
  { name: "CSS3", icon: <CSS3Logo />, shadowClass: "hover:shadow-blue-600/30", brandColor: "text-[#264DE4]" },
  { name: "JavaScript", icon: <JSLogo />, shadowClass: "hover:shadow-yellow-400/30", brandColor: "text-[#F7DF1E]" },
  { name: "VS Code", icon: <VSCodeLogo />, shadowClass: "hover:shadow-blue-400/30", brandColor: "text-[#007ACC]" },
  { name: "Git", icon: <GitLogo />, shadowClass: "hover:shadow-red-500/30", brandColor: "text-[#F05032]" },
  { name: "GitHub", icon: <GitHubLogo />, shadowClass: "hover:shadow-white/20", brandColor: "text-white" },
  { name: "Flask", icon: <FlaskLogo />, shadowClass: "hover:shadow-slate-300/30", brandColor: "text-slate-100" },
  { name: "NumPy", icon: <NumPyLogo />, shadowClass: "hover:shadow-blue-400/30", brandColor: "text-[#013243]" },
  { name: "Pandas", icon: <PandasLogo />, shadowClass: "hover:shadow-slate-300/30", brandColor: "text-[#15045]" },
  { name: "AI Prompts", icon: <Brain className="w-16 h-16 text-indigo-400" />, shadowClass: "hover:shadow-indigo-400/30", brandColor: "text-indigo-400" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            Leveraging industry-standard technologies to build modern, high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`group flex flex-col items-center justify-center w-full max-w-[180px] p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/50 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-800/60 cursor-default shadow-xl ${skill.shadowClass}`}
            >
              {/* Brand Logo Container */}
              <div className="transform transition-all duration-500 group-hover:scale-110 flex items-center justify-center mb-6">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span className={`font-bold text-sm md:text-base transition-all duration-300 ${skill.brandColor} group-hover:brightness-125`}>
                {skill.name}
              </span>
              
              {/* Decorative hover indicator */}
              <div className="mt-3 w-0 h-0.5 bg-current transition-all duration-500 group-hover:w-full opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
