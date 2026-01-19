
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Linkedin, Instagram, Download, LayoutGrid } from 'lucide-react';
import { smoothScrollTo } from '../utils';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [blurAmount, setBlurAmount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const phrases = [
    "Python Enthusiast",
    "AI Video Editor",
    "Prompt Engineering",
    "Canva Designer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before next phrase
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY <= sectionHeight) {
        const progress = Math.min(scrollY / (sectionHeight / 1.5), 1);
        setBlurAmount(progress * 12);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden min-h-[90vh]"
    >
      <div 
        className="absolute inset-0 -z-20 pointer-events-none transition-all duration-300"
        style={{ 
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`
        }}
      ></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-indigo-400 text-sm font-medium mb-6 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Open to Opportunities
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 min-h-[160px] sm:min-h-[192px]">
          Frontend Developer <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
             & {text}
          </span>
          <span className="text-indigo-400 animate-pulse font-light">|</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Building interactive web experiences and exploring the frontiers of AI & Technology.
        </p>

        <div className="flex items-center justify-center gap-2 text-slate-500 mb-8">
          <MapPin className="w-5 h-5 text-indigo-400" />
          <span>Lahore, Punjab, Pakistan</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://drive.google.com/file/d/1Yggdu-USlzFUWVFTebP7OHS91SaT459q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            Download Resume <Download className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            onClick={(e) => smoothScrollTo(e, '#projects')}
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-indigo-400 text-white font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            View Projects <LayoutGrid className="w-4 h-4" />
          </a>
        </div>

        <div className="flex gap-6 justify-center mb-12">
          <a 
            href="https://www.linkedin.com/in/hamza-arshad12" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://www.instagram.com/hamza_mughal_46_/?next=%2F" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <div className="flex justify-center gap-6 text-slate-400">
           <div className="flex flex-col items-center gap-2">
             <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">Tech Stack</span>
             <div className="flex gap-4 mt-2">
                <span className="hover:text-indigo-400 transition-colors cursor-default">HTML/CSS</span>
                <span className="hover:text-indigo-400 transition-colors cursor-default">JavaScript</span>
                <span className="hover:text-indigo-400 transition-colors cursor-default">Python</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
