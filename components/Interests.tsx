
import React from 'react';
import { Rocket, Code, Globe, Cpu, Gamepad2, Video } from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "AI & Emerging Tech",
      desc: "Fascinated by how AI is revolutionizing industries, from coding assistants to generative video.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Video className="w-6 h-6 text-pink-400" />,
      title: "AI Video Editor",
      desc: "Exploring and utilizing cutting-edge AI tools to create and edit compelling video content.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-400" />,
      title: "Practical Problem Solving",
      desc: "I love building projects that solve real problems, no matter how small or complex.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: "Learning in Public",
      desc: "Sharing my journey to help other beginners and connect with like-minded developers.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
    },
    {
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      title: "Frontend Developer",
      desc: "Crafting responsive, interactive, and user-friendly web interfaces using modern standards like React and Tailwind.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
      title: "Creative Coding",
      desc: "Making programming fun through interactive games and applications.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
    }
  ];

  return (
    <section id="interests" className="py-24 bg-slate-900/60 backdrop-blur-sm">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">What Drives Me</h2>
            <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto text-lg">More than just code — here is what fuels my passion and creative energy.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative h-[380px] rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] flex flex-col cursor-default"
              >
                 {/* Image Background */}
                 <div className="absolute inset-0 z-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-30 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40"></div>
                 </div>

                 {/* Content Overlay */}
                 <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                    <div className="mb-6 bg-slate-800/50 backdrop-blur-md w-14 h-14 rounded-xl flex items-center justify-center border border-slate-700 transform group-hover:rotate-12 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-200 transition-colors">
                      {item.desc}
                    </p>
                    
                    {/* Decorative bottom bar */}
                    <div className="w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default Interests;
