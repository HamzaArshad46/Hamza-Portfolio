
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Helper component for scroll reveal animation
const RevealSection = ({ children }: React.PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
};

// Custom Professional Developer Cursor Effect
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Using translate3d for hardware acceleration and smoother motion
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className={isHovering ? 'cursor-hover' : ''}>
      <div ref={dotRef} className="custom-cursor"></div>
      <div ref={followerRef} className="custom-cursor-follower"></div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Loading Screen Logic
  useEffect(() => {
    const duration = 2000;
    const intervalTime = 50; 
    const step = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // Scroll Progress Line Logic
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest animate-smooth-blink whitespace-nowrap">
            𝓗𝓪𝓶𝔃𝓪  𝒜𝓇𝓈𝒽𝒶𝒹☆
          </h1>
          <div className="w-full">
             <div className="flex justify-between items-center mb-2">
                <span className="text-indigo-400 text-xs font-mono tracking-tighter uppercase">Initializing System</span>
                <span className="text-slate-400 text-xs font-mono">{Math.round(loadingProgress)}%</span>
             </div>
             <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-800/50">
                <div 
                  className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all duration-75 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
             </div>
             <div className="mt-3 flex justify-center">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest animate-pulse">
                   Please Wait...
                </p>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-slate-100 font-sans animate-fade-in">
      {/* Custom Cursor Effect */}
      <CustomCursor />

      {/* Scroll Progress Line */}
      <div 
        className="fixed top-0 left-0 h-1 bg-purple-500 z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navbar />
      <main>
        <Hero />
        
        <RevealSection>
          <About />
        </RevealSection>

        <RevealSection>
          <Skills />
        </RevealSection>

        <RevealSection>
          <Projects />
        </RevealSection>
        
        <RevealSection>
          <Experience />
        </RevealSection>
        
        <RevealSection>
          <Certifications />
        </RevealSection>
        
        <RevealSection>
          <Interests />
        </RevealSection>
        
        <RevealSection>
          <Contact />
        </RevealSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
