
import React from 'react';
import { Briefcase, GraduationCap, Code, UserCheck } from 'lucide-react';
import {  EDUCATION, SKILLS_DATA, SOFT_SKILLS } from '../../constants';

export const Resume: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-8 md:p-12">
      <h2 className="text-4xl font-heading font-bold mb-2">Resume</h2>
      <div className="w-20 h-1.5 bg-neon-green rounded-full mb-12"></div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
        {/* Experience Column */}
        

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
             <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
                {/* Timeline visual (Desktop) */}
                <div className="hidden md:block absolute left-[160px] top-0 bottom-0 w-px bg-gray-700"></div>
                <div className="hidden md:block absolute left-[154px] top-1.5 w-3 h-3 rounded-full bg-gray-600 border-2 border-dark-card group-hover:bg-neon-green transition-colors z-10"></div>

                {/* Left Column: Date & Institution */}
                <div className="md:w-[160px] flex-shrink-0 md:text-right md:pr-8 pt-0.5">
                   <span className="font-heading font-bold text-white block text-lg">{edu.period}</span>
                   <span className="text-gray-400 text-sm block md:mt-1">{edu.institution}</span>
                </div>

                {/* Right Column: Degree & Desc */}
                <div className="flex-1 pb-8 md:pb-0 relative pl-6 md:pl-0 border-l border-gray-700 md:border-l-0">
                   {/* Timeline visual (Mobile) */}
                   <div className="md:hidden absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 border border-dark-card group-hover:bg-neon-green transition-colors"></div>

                   <h4 className="text-xl font-bold text-white mb-1 leading-tight">{edu.degree}</h4>
                   <p className="text-gray-400 text-sm leading-relaxed mt-2">
                     {edu.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Skills */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
            <Code size={24} />
          </div>
          <h3 className="text-2xl font-bold">Coding <span className="text-neon-green">Skills</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((group, index) => (
            <div key={index} className="bg-navy-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2 inline-block">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="px-4 py-2 bg-dark-card/50 rounded-lg text-sm font-medium text-gray-300 border border-white/5 shadow-sm hover:text-neon-green hover:border-neon-green/30 hover:bg-neon-green/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-neon-green/10 rounded-full text-neon-green">
            <UserCheck size={24} />
          </div>
          <h3 className="text-2xl font-bold">Soft <span className="text-neon-green">Skills</span></h3>
        </div>

        <div className="bg-navy-panel p-8 rounded-3xl border border-white/5">
          <div className="flex flex-wrap gap-4">
            {SOFT_SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="px-5 py-3 bg-white/5 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-neon-green hover:text-navy-panel hover:font-bold hover:scale-105 transition-all duration-300 cursor-default shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom spacer for scrolling */}
      <div className="h-12"></div>
    </div>
  );
};
