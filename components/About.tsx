import React from "react";
import { Terminal, Cpu } from "lucide-react";


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image Only */}
          <div className="relative mt-8 md:mt-0 group">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl transform rotate-6 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl aspect-[3/4] md:aspect-auto md:h-[500px]">
              <img
                src="image2.jpeg"
                alt="Hamza Arshad - Profile Photo"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-800/50 shadow-xl">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>

              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
                Turning Creativity into Functional Code
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                <p>
                  I'm{" "}
                  <span className="text-indigo-400 font-semibold">
                    Hamza Arshad
                  </span>
                   ,a passionate learner and aspiring tech professional. I am currently focused on building strong skills in Python, Data Analysis, and Web Development. I enjoy learning how technology works and turning ideas into real projects.
                </p>

                <p>
                  I believe in{" "}
                  <span className="text-white font-medium">
                    "learning by doing."
                  </span>{" "}
                 I have experience with HTML, CSS, Python, NumPy, Pandas, and MS Excel, and I am continuously improving my problem-solving and analytical skills. I believe in learning step by step and building a solid foundation rather than rushing things.
                </p>

                <p>
                  My goal is to grow into a successful Data Analyst and work on meaningful projects that create real value. I am highly motivated, self-disciplined, and always eager to learn new technologies and improve myself every day.
                 
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white">Problem Solver</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Building Small solutions with Python .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white">AI Enthusiast</h4>
                </div>
                <p className="text-slate-400 text-sm">
                  Leveraging AI tools for better development.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
