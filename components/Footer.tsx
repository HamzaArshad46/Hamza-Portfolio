import React from 'react';
import { Mail, Linkedin, Download, Award, ChevronRight, ChevronUp } from 'lucide-react';
import { smoothScrollTo } from '../utils';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    smoothScrollTo(e, href);
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Bio Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
              ℋ𝒶𝓂𝓏𝒶 𝒜𝓇𝓈𝒽𝒶𝒹
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              A dedicated Frontend Developer and Python enthusiast focused on building interactive, user-centric web experiences and exploring the potential of AI.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/hamza-arshad12" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-400/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hm260369@gmail.com" 
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-400/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links with Arrow & Shift Left Hover */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certificates', href: '#certifications' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name} className="flex justify-start">
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:-translate-x-2 cursor-pointer"
                  >
                    <span className="order-1">{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity order-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.linkedin.com/in/hamza-arshad12" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hm260369@gmail.com" 
                  className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email Me
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h3>
            <div className="space-y-4">
              {/* Download Resume: Bold & Minor Up Hover */}
              <a 
                href="https://drive.google.com/file/d/1Yggdu-USlzFUWVFTebP7OHS91SaT459q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:border-indigo-500 hover:-translate-y-1 hover:font-bold transition-all group"
              >
                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Download className="w-4 h-4" />
                </div>
                <span className="font-medium group-hover:font-bold transition-all">Download Resume</span>
              </a>
              
              {/* View Certificates: Home-like actions (Shift Left + Arrow) */}
              <a 
                href="#certifications"
                onClick={(e) => handleNavClick(e, '#certifications')}
                className="group flex items-center justify-between px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:border-purple-500 transition-all duration-300 hover:-translate-x-2"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-medium">View Certificates</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Centered Content */}
        <div className="border-t border-slate-900 pt-8 flex flex-col items-center justify-center relative">
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Hamza Arshad. All rights reserved.
          </p>
          
          {/* Back to Top Button Box - Bottom Right */}
          <button 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="mt-8 md:mt-0 md:absolute md:right-0 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all group cursor-pointer"
            title="Back to Top"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;