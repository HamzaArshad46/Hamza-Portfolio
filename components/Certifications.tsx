import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "Advanced Prompt Engineering with ChatGPT",
      issuer: "UpGrad",
      date: "06 December, 2025",
      details: [
        "Advanced LLM Problem Solving Strategies",
        "Chain-of-Thought & Zero-Shot Optimization",
        "Verified by Mayank Kumar (Co-founder & MD)"
      ],
      link: "https://drive.google.com/file/d/1T2ul-M-NENaoNvTF0OKF3QGsakVOnjj1/view?usp=sharing",
      color: "indigo"
    },
    {
      title: "Professional Python Certificate",
      issuer: "Google",
      date: "25 December, 2025",
      details: [
        "Programming with Python Fundamentals",
        "Automation and Scripting Logic",
        "Data Structures & Algorithms"
      ],
      link: "https://drive.google.com/file/d/1aLwE8NEC1EXmxOVUpptmx-z5ZY_mVZr7/view?usp=sharing",
      color: "blue"
    },
    {
      title: "Foundations of Prompt Engineering",
      issuer: "AWS Training & Certification",
      date: "October 2025",
      details: [
        "Completion Certificate",
        "Large Language Models (LLMs)",
        "Generative AI Fundamentals"
      ],
      link: "https://drive.google.com/file/d/1KL_bA9yqz8gZSaMqd2JnLON6-otD1gCP/view?usp=sharing",
      color: "orange"
    },
    {
      title: "Dubai - Prompt Engineering",
      issuer: "Future Skills Academy",
      date: "2025",
      details: [
        "Advanced AI Strategy Implementation",
        "Specialized Prompting Techniques",
        "Verified Future Skills Credential"
      ],
      link: "https://drive.google.com/file/d/1QXwbsR_XuPseaiFJlKB-duIZG8_MaG4Y/view?usp=sharing",
      color: "purple"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & Education</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional credentials and specialized training in Software Development and Artificial Intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 group flex flex-col h-full shadow-lg"
            >
              <div className="flex items-start gap-4 h-full">
                <div className={`p-3 rounded-lg text-white flex-shrink-0 ${
                  cert.color === 'indigo' ? 'bg-indigo-600' :
                  cert.color === 'blue' ? 'bg-blue-600' :
                  cert.color === 'orange' ? 'bg-orange-600' :
                  'bg-purple-600'
                }`}>
                  <Award className="w-8 h-8" />
                </div>
                <div className="flex flex-col h-full w-full">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-300 text-sm mt-1 font-medium">{cert.issuer} • {cert.date}</p>
                  
                  <ul className="mt-6 space-y-3 mb-8 flex-grow">
                    {cert.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-snug">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-slate-800 mt-auto">
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all text-sm shadow-lg shadow-indigo-600/20 w-full active:scale-95"
                    >
                      View Certificate <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;