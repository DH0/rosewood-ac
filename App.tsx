
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Concert from './pages/Concert';

/**
 * Brand Logo component using the provided logo.png.
 */
export const RosewoodLogo: React.FC<{ className?: string }> = ({ 
  className = "w-12 h-12"
}) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img 
      src="logo.png" 
      alt="Rosewood Academy" 
      className="w-full h-full object-contain"
      onError={(e) => {
        // Fallback in case the file is missing or renamed in some contexts
        (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/initials/svg?seed=RA&backgroundColor=65000b&fontFamily=serif';
      }}
    />
  </div>
);

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState('Global Network');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  // Simplified chapter list
  const chapters = ['London PhD Club', 'Shanghai PhD Club'];

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-[#B07A5A] selection:text-white">
        <nav className="fixed w-full z-50 bg-[#F4EFEA]/80 backdrop-blur-md border-b border-[#65000b]/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between h-24 items-center">
              {/* Logo Identity */}
              <Link to="/" className="flex items-center space-x-5 group" onClick={() => setActiveChapter('Global Network')}>
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#65000b]/10 rounded-full group-hover:border-[#B07A5A]/40 transition-colors duration-700"></div>
                  <RosewoodLogo className="w-10 h-10 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold tracking-[0.15em] text-[#65000b] leading-tight uppercase">ROSEWOOD</span>
                  <span className="text-[10px] font-bold tracking-[0.5em] text-[#B07A5A] uppercase -mt-1">Academy</span>
                </div>
              </Link>

              {/* Network Switcher */}
              <div className="flex items-center">
                <div className="relative">
                  <button 
                    onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
                    className="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A222E]/60 hover:text-[#65000b] transition-all py-2 border-b border-transparent hover:border-[#B07A5A]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B07A5A]"></span>
                    <span>{activeChapter}</span>
                    <svg className={`w-3 h-3 transition-transform duration-500 ${isSwitcherOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                  </button>

                  {isSwitcherOpen && (
                    <div className="absolute top-full right-0 mt-4 w-64 bg-white border border-[#F4EFEA] shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-3 rounded-sm animate-in fade-in slide-in-from-top-2 z-50">
                      <div className="px-5 py-2 mb-2">
                        <p className="text-[9px] font-black text-[#B07A5A] uppercase tracking-[0.3em]">Select Chapter</p>
                      </div>
                      {['Global Network', ...chapters].map(chapter => (
                        <button
                          key={chapter}
                          onClick={() => {
                            setActiveChapter(chapter);
                            setIsSwitcherOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 text-xs font-semibold tracking-wider transition-colors hover:bg-[#F4EFEA] ${activeChapter === chapter ? 'text-[#65000b] border-l-2 border-[#65000b]' : 'text-[#1A222E]/70'}`}
                        >
                          {chapter}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home activeChapter={activeChapter} />} />
            <Route path="/concert" element={<Concert />} />
          </Routes>
        </main>

        <footer className="bg-white py-20 px-6 border-t border-[#F4EFEA]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] text-[#B07A5A]/50">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <span className="text-[#65000b]">Ex Scientia, Concordia.</span>
            </div>
            <div className="flex space-x-10">
              <a href="#" className="hover:text-[#65000b] transition-colors">Charter</a>
              <a href="#" className="hover:text-[#65000b] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#65000b] transition-colors">Archive</a>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
