
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../../constants';
import { ExternalLink, Github, Eye } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI Application', 'full-stack web application', 'Machine Learning', 'Data Analysis', 'IOT'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-12">
      <h2 className="text-4xl font-heading font-bold mb-2">Projects</h2>
      <div className="w-20 h-1.5 bg-neon-green rounded-full mb-8"></div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === cat 
                ? 'bg-neon-green text-navy-panel shadow-glow' 
                : 'bg-navy-panel text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group bg-navy-panel rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col h-full"
          >
            <div className="relative overflow-hidden h-48 bg-gray-900/50">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                {/* GitHub Link */}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-navy-panel hover:bg-neon-green hover:scale-110 transition-all duration-300"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                )}
                
                {/* Live Preview Link */}
                {project.previewLink && (
                  <a 
                    href={project.previewLink} 
                    target={project.previewLink === '#' ? undefined : "_blank"}
                    rel={project.previewLink === '#' ? undefined : "noopener noreferrer"}
                    className="p-3 bg-white rounded-full text-navy-panel hover:bg-neon-green hover:scale-110 transition-all duration-300"
                    title={project.previewLink === '#' ? "Preview coming soon" : "Live Preview"}
                    onClick={(e) => project.previewLink === '#' && e.preventDefault()}
                  >
                    <Eye size={20} />
                  </a>
                )}

                {/* Fallback Single Link */}
                {!project.githubLink && !project.previewLink && project.link && (
                   <a 
                    href={project.link} 
                    className="p-3 bg-neon-green rounded-full text-navy-panel hover:scale-110 transition-transform"
                   >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-neon-green text-xs font-bold uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
