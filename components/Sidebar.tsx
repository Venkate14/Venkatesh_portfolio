
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center bg-navy-panel rounded-[36px] shadow-soft py-10 px-6 relative overflow-hidden">
      {/* Profile Image */}
      <div className="relative mb-6 group cursor-pointer">
        <div className="w-48 h-48 rounded-full border-4 border-gray-600/50 p-1 shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:border-neon-green">
          <img 
            src="" 
            alt="Profile" 
            loading="eager"
            decoding="async"
            width={192}
            height={192}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute bottom-2 right-4 w-6 h-6 bg-neon-green rounded-full border-4 border-navy-panel"></div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-8">
        <h1 className="font-heading font-bold text-4xl text-white mb-2 tracking-tight">
          K Venkatesh
        </h1>
        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10">
           <p className="font-sans font-light text-gray-300 text-sm tracking-widest uppercase">
            Full-Stack Developer & Data Analyst
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        <a 
          href="https://www.linkedin.com/in/k-venkatesh-/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-neon-green hover:text-navy-panel transition-all duration-300 group"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://github.com/Venkate14" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/5 hover:bg-neon-green hover:text-navy-panel transition-all duration-300 group"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-green to-transparent opacity-50"></div>
    </div>
  );
};
