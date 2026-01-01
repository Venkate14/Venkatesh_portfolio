
import React from 'react';
import { SectionId } from '../../types';
import { Code, Database, TrendingUp, BarChart3, PieChart } from 'lucide-react';

interface HomeProps {
  onNavigate: (id: SectionId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col justify-center px-12 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Python (Code) - Right of 'Solutions' - Blue */}
        <div className="absolute top-[38%] right-[18%] animate-float-delayed text-blue-500/40 hover:text-blue-400 transition-colors duration-500 pointer-events-auto cursor-default">
          <Code size={48} strokeWidth={1.5} />
        </div>

        {/* SQL (Database) - Top Right - Orange */}
        <div className="absolute top-[15%] right-[10%] animate-float text-orange-500/40 hover:text-orange-400 transition-colors duration-500 pointer-events-auto cursor-default">
          <Database size={36} strokeWidth={1.5} />
        </div>

        {/* Statistics (BarChart) - Middle Rightish - Purple */}
        <div className="absolute top-[28%] right-[32%] animate-float-slow text-purple-500/40 hover:text-purple-400 transition-colors duration-500 pointer-events-auto cursor-default">
          <BarChart3 size={32} strokeWidth={1.5} />
        </div>

        {/* Graphs (TrendingUp) - Bottom Right - Green */}
        <div className="absolute bottom-[25%] right-[15%] animate-float text-emerald-500/40 hover:text-emerald-400 transition-colors duration-500 pointer-events-auto cursor-default">
          <TrendingUp size={44} strokeWidth={1.5} />
        </div>

        {/* Pie Chart - Bottom Center-Right - Red/Pink */}
        <div className="absolute bottom-[18%] right-[35%] animate-float-delayed text-rose-500/40 hover:text-rose-400 transition-colors duration-500 pointer-events-auto cursor-default">
          <PieChart size={28} strokeWidth={1.5} />
        </div>
      </div>

      <div className="z-10 animate-fade-in-up">
        <span className="inline-block py-1 px-3 rounded bg-neon-green/10 text-neon-green font-mono text-sm mb-6 border border-neon-green/20">
          Welcome to my portfolio
        </span>
        
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-white relative">
          I Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital</span> <br />
          <span className="relative z-10">
            Solutions
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon-green -z-10 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="font-sans text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
          Full-Stack Developer & Data Analyst crafting React/Express apps and Power BI dashboards for actionable insights.
        </p>

        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 bg-neon-green text-navy-panel font-heading font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-glow"
          >
            View Projects
          </button>
          <button 
             onClick={() => onNavigate('contact')}
             className="px-8 py-4 bg-transparent border border-gray-600 text-white font-heading font-semibold rounded-full hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};
