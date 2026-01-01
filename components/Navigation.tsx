
import React from 'react';
import { Home, User, FileText, Briefcase, Mail, Trophy } from 'lucide-react';
import { SectionId } from '../types';

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const navItems: { id: SectionId; icon: React.ReactNode; label: string }[] = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'resume', icon: <FileText size={20} />, label: 'Resume' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { id: 'achievements', icon: <Trophy size={20} />, label: 'Achievements' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="bg-pill-bg/90 backdrop-blur-md px-3 py-6 rounded-full shadow-2xl border border-white/5 flex flex-col gap-6 items-center">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
              className="relative group flex items-center justify-center"
            >
              {/* Tooltip */}
              <span className="absolute right-12 bg-white text-navy-panel text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>

              {/* Icon Container */}
              <div 
                className={`p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-neon-green text-navy-panel shadow-glow scale-110' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
