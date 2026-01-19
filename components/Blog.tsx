
import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight, Linkedin } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Python Alone Can't Cook the Web — You Need the Full Kitchen!",
    excerpt: "Why full-stack knowledge matters: An analogy-driven explanation of how HTML, CSS, JS and Python work together.",
    tags: ["Web Dev", "Python", "Career"],
    link: "#"
  },
  {
    id: 2,
    title: "Python Use Cases in 2026 – The Most Popular Fields",
    excerpt: "A comprehensive breakdown of Python's future in AI, web dev, robotics, and cybersecurity for aspiring developers.",
    tags: ["Future Tech", "AI", "Python"],
    link: "#"
  },
  {
    id: 3,
    title: "Top 10 AI Tools Revolutionizing 2025",
    excerpt: "A curated list of AI video makers and programming assistants that are practical for creators and developers.",
    tags: ["AI Tools", "Productivity"],
    link: "#"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Insights</h2>
             <p className="text-slate-400 mt-2">Thoughts on code, career, and the future of tech.</p>
           </div>
           <div className="hidden md:block">
             <a href="#" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 font-medium">
               Read on LinkedIn <Linkedin className="w-4 h-4" />
             </a>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-colors flex flex-col h-full">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>
              <a href={post.link} className="inline-flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
