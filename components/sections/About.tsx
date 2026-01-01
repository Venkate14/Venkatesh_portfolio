import React from 'react';
import { Code, Database, Layout, Github } from 'lucide-react';

export const About: React.FC = () => {
  const services = [
    {
      icon: <Code size={32} className="text-neon-green" />,
      title: "Full stack developer",
      desc: "Building fast, responsive, and accessible websites with React.js and Architecting robust APIs and database structures with Node.js."
    },
    {
      icon: <Database size={32} className="text-neon-green" />,
      title: "Data Analysis",
      desc: "Transforming raw data into actionable business insights using Python & SQL."
    },
    {
      icon: <Layout size={32} className="text-neon-green" />,
      title: "UI/UX Design",
      desc: "Designing intuitive user interfaces that look great on any device."
    }
  ];

  const username = 'YOUR_GITHUB_USERNAME'; // Replace with your GitHub username

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-12">
      <h2 className="text-4xl font-heading font-bold mb-2">About Me</h2>
      <div className="w-20 h-1.5 bg-neon-green rounded-full mb-8"></div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-4 text-white">
          I am a <span className="text-neon-green">Full stack developer & Data Analyst</span>
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6 font-sans">
          I'm a final-year B.Tech student and <span className="text-neon-green">Nextwave Student</span> with a growing passion for full-stack development and data analysis. With a strong foundation in Python, MySQL, React, and Node.js, I thrive on uncovering insights from data and transforming raw information into meaningful stories that drive smarter decisions.

Hands-on experience in data cleaning, visualization, statistical analysis, and AI workflow optimization fuels my drive to build scalable, impact-driven solutions through Nextwave's project-based learning.

        </p>
        <p className="text-gray-400 leading-relaxed font-sans">
          With hands-on experience in data cleaning, visualization, and basic statistical analysis, I'm eager to deepen my expertise in solving real-world problems through data. I've also explored how AI can streamline workflows and enhance analytical efficiency—fueling my curiosity to build scalable, impact-driven solutions.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-8">What I Do</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {services.map((service, index) => (
          <div key={index} className="bg-navy-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 shadow-lg group">
            <div className="mb-4 bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{service.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-8 mt-8">GitHub <span className="text-neon-green">Stats</span></h3>
      <div className="flex flex-col xl:flex-row gap-6 pb-8">
        <div className="flex-1 bg-navy-panel p-8 rounded-3xl border border-white/5 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-neon-green/20 rounded-2xl flex items-center justify-center">
              <Github size={24} className="text-neon-green" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Public Repos</p>
              <p className="text-2xl font-bold text-white">20</p> {/* Replace with your actual stats */}
            </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};
