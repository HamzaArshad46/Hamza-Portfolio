import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Senior Full Stack Developer",
    content: "Hamza shows an incredible aptitude for learning. His ability to grasp complex Python concepts and immediately apply them to build functional tools is impressive for someone so early in their journey."
  },
  {
    name: "Ali Raza",
    role: "CS Peer & Collaborator",
    content: "Working with Hamza on university projects is always a boost. He brings energy, creative problem-solving, and a 'never give up' attitude to every coding challenge we face."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What Others Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-900 p-8 rounded-2xl relative">
              <Quote className="absolute top-8 right-8 text-slate-700 w-8 h-8 opacity-50" />
              <p className="text-slate-300 italic mb-6 relative z-10">"{t.content}"</p>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <span className="text-indigo-400 text-sm">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;