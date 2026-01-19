
import React, { useState } from 'react';
import { Project } from '../types';
import { X, Layers, Code as CodeIcon, Lightbulb, ExternalLink, Smartphone, LayoutGrid } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Python Contact Book",
    description: "A robust contact management system built with Python and JSON for persistent data storage.",
    techStack: ["Python", "JSON", "File I/O"],
    features: ["Add/Edit/Delete Contacts", "Persistent JSON Storage", "Search Functionality", "Data Validation"],
    learning: "Mastered JSON parsing and structured data management in Python.",
    imageUrl: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Interactive Calculator",
    description: "Built a fully functional calculator with a clean UI and error handling features.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    features: ["Arithmetic operations", "Responsive Design", "Error Handling"],
    learning: "Mastered DOM manipulation and event handling logic.",
    imageUrl: "https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?q=80&w=1974&auto=format&fit=crop",
    repoUrl: "#"
  },
{
  id: 3,
  title: "Python Quiz Game",
  description: "Interactive quiz application with random question generation and score tracking.",
  techStack: ["Python", "Data Structures"],
  features: ["Instant Feedback", "Score System", "Randomization"],
  learning: "Deepened understanding of dictionaries and dynamic user interactions.",
  imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop"
,
  repoUrl: "#"
},


  {
    id: 4,
    title: "Console To-Do List",
    description: "Complete task management system enabling users to add, remove, and manage lists.",
    techStack: ["Python", "Loops", "Error Handling"],
    features: ["CRUD Operations", "Input Validation", "List Management"],
    learning: "Strengthened logic-building and exception handling skills.",
    imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2032&auto=format&fit=crop",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "Billing Receipt System",
    description: "Automated receipt generation system for retail scenarios with formatted output.",
    techStack: ["Python", "F-strings"],
    features: ["Price Calculation", "Item Tracking", "Formatted Output"],
    learning: "Applied basic concepts to a real-world business problem.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    repoUrl: "#"
  },
  {
    id: 6,
    title: "Funny Joke Generator",
    description: "Creative app generating random jokes to make coding fundamentals fun.",
    techStack: ["Python", "Lists", "While Loops"],
    features: ["User Input", "Random Selection", "Infinite Loop Mode"],
    learning: "Creative approach to mastering Python basics.",
    imageUrl: "https://images.unsplash.com/photo-1543791187-df796fa11835?q=80&w=2071&auto=format&fit=crop",
    repoUrl: "#"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A showcase of my recent work, ranging from complex Python systems to interactive web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-500 hover:scale-[0.97] group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700/50 text-indigo-300 text-xs font-semibold rounded-full border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-700/50 mt-auto">
                   <p className="text-xs text-slate-400 italic">
                     <span className="text-purple-400 not-italic font-bold uppercase tracking-wider">Learned:</span> {project.learning}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={closeModal}>
            <div 
              className="bg-slate-900 rounded-3xl border border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 p-2 bg-slate-800/80 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20 backdrop-blur-sm" 
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-72 md:h-96 w-full">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 md:left-12 right-8">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-10">
                 <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <CodeIcon className="w-6 h-6 text-indigo-400" /> Project Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-lg">{selectedProject.description}</p>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                          <Layers className="w-6 h-6 text-purple-400" /> Features
                        </h4>
                        <ul className="space-y-4">
                            {selectedProject.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-300">
                                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                                  {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                          <Lightbulb className="w-6 h-6 text-yellow-400" /> Key Takeaways
                        </h4>
                        <p className="text-slate-300 italic leading-relaxed text-lg">
                            "{selectedProject.learning}"
                        </p>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-end gap-4">
                    <button 
                      onClick={closeModal}
                      className="px-8 py-3 rounded-xl text-slate-400 hover:text-white font-bold transition-colors"
                    >
                      Close
                    </button>
                    <a 
                      href={selectedProject.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-xl font-bold transition-all shadow-xl shadow-indigo-600/20 transform hover:-translate-y-1"
                    >
                        <ExternalLink className="w-5 h-5" /> View Project Source
                    </a>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
