
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navigation } from './components/Navigation';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Resume } from './components/sections/Resume';
import { Projects } from './components/sections/Projects';
import { SectionId } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return (
          <div className="h-full flex items-center justify-center flex-col p-12 text-center">
             <h2 className="text-4xl font-heading font-bold mb-4">Contact Me</h2>
             <p className="text-gray-400 mb-8 max-w-md">Currently available for freelance work and full-time opportunities.</p>
             <a href="mailto:dharshanojthrishal11@gmail.com" className="text-neon-green text-xl md:text-2xl font-bold hover:underline break-all">polepallyvenkatesh14@gmail.com</a>
          </div>
        );
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-teal-start to-teal-end flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
      
      {/* Mobile Header (Visible only on small screens) */}
      <div className="lg:hidden absolute top-4 left-4 right-4 z-50 flex justify-between items-center bg-navy-panel/90 backdrop-blur rounded-full px-6 py-3 shadow-lg">
        <span className="font-heading font-bold text-white">K Venkatesh</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Main Layout Grid */}
      <div className="max-w-[1600px] w-full h-full flex gap-6 relative">
        
        {/* Left Sidebar (Desktop) */}
        <div className={`
          fixed inset-0 z-40 lg:relative lg:inset-auto lg:z-0 lg:block lg:w-[320px] lg:h-full
          transition-transform duration-300 transform 
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          bg-gray-900/95 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-0 p-4 lg:p-0
        `}>
          <div className="h-full max-w-sm mx-auto lg:max-w-none">
            <Sidebar />
          </div>
          {/* Close button for mobile menu inside sidebar */}
          <button 
             className="lg:hidden absolute top-6 right-6 text-white bg-red-500/20 p-2 rounded-full"
             onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Center Content Card */}
        <div className="flex-1 h-full bg-dark-card rounded-[40px] shadow-2xl relative overflow-hidden mt-16 lg:mt-0 transition-all duration-500 border border-white/5">
           {/* Fade transition container could go here, simple rendering for now */}
           <div className="h-full w-full animate-fade-in">
             {renderSection()}
           </div>
        </div>

        {/* Right Navigation (Desktop) */}
        <div className="hidden lg:block w-20 h-full py-12">
          <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
           <div className="bg-navy-panel/90 backdrop-blur-md rounded-full shadow-2xl border border-white/10 px-6 py-4 flex justify-between">
              {/* Simplified icons for mobile */}
              {(['home', 'about', 'resume', 'projects', 'achievements', 'contact'] as SectionId[]).map((id) => (
                <button
                  key={id}
                  onClick={() => { setActiveSection(id); setMobileMenuOpen(false); }}
                  className={`p-2 rounded-full ${activeSection === id ? 'bg-neon-green text-navy-panel' : 'text-gray-400'}`}
                >
                  <div className="w-5 h-5 bg-current rounded-full opacity-0 pointer-events-none absolute" /> {/* Placeholder for logic */}
                  {/* Re-using icon logic would be better componentized, but keep simple here */}
                  <span className="capitalize text-[10px] sr-only">{id}</span>
                  <div className={`w-3 h-3 rounded-full ${activeSection === id ? 'bg-navy-panel' : 'bg-current'}`}></div>
                </button>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default App;
