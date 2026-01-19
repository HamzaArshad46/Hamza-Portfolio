import React from 'react';
import { BookOpen, Share2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-slate-900/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Learning Journey</h2>
          <p className="text-slate-400">
            Dedicated to continuous growth through self-directed learning and community engagement.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-auto md:mr-auto md:max-w-3xl space-y-12 pl-8 md:pl-0">
          
          {/* Item 1 */}
          <div className="relative md:flex items-center justify-between group">
            <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 bg-slate-900 border-4 border-slate-700 p-2 rounded-full z-10 group-hover:border-indigo-500 transition-colors">
              <BookOpen className="w-5 h-5 text-indigo-400" />
            </div>
            
            <div className="md:w-[45%] md:text-right md:pr-12 mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">Self-Taught Developer</h3>
              <span className="text-indigo-400 text-sm font-semibold">2025 - Present</span>
            </div>
            
            <div className="md:w-[45%] md:pl-12">
               <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all shadow-xl">
                 <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
                   <li>Built a strong foundation in programming (HTML, CSS, JavaScript, Python).</li>
                   <li>Worked on practical projects to improve real-world problem-solving skills.</li>
                   <li>Learned to use AI tools and prompt engineering effectively.</li>
                   <li>Developed consistency, discipline, and a growth mindset for the future.</li>
                 </ul>
               </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative md:flex items-center justify-between group flex-row-reverse">
            <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 bg-slate-900 border-4 border-slate-700 p-2 rounded-full z-10 group-hover:border-purple-500 transition-colors">
              <Share2 className="w-5 h-5 text-purple-400" />
            </div>

            <div className="md:w-[45%] md:text-left md:pl-12 mb-4 md:mb-0">
               <h3 className="text-xl font-bold text-white">Fast learner and Self-motivated</h3>
               <span className="text-purple-400 text-sm font-semibold">2025 - Present</span>
            </div>

            <div className="md:w-[45%] md:pr-12">
               <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all shadow-xl">
                 <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
                   <li>Built a strong professional network with 500+ LinkedIn connections, enabling learning, collaboration, and growth.</li>
                   <li>Improved logical thinking and coding accuracy through regular practice.</li>
                   <li>Gained confidence in building and understanding complete web applications.</li>
                   <li>Learned how technology can be used for online business and digital growth.</li>
                 </ul>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;