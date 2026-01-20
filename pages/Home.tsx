
import React from 'react';
import { RosewoodLogo } from '../App';

interface HomeProps {
  activeChapter: string;
}

const Home: React.FC<HomeProps> = ({ activeChapter }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Prestige Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center bg-[#F4EFEA]">
        <div className="mb-12 relative">
          <div className="flex flex-col items-center">
            {/* Logo and Orbital Elements */}
            <div className="w-56 h-56 md:w-72 md:h-72 flex items-center justify-center relative mb-8">
              {/* Outer copper orbit */}
              <div className="absolute inset-0 rounded-full border border-[#B07A5A]/10 animate-[spin_45s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-[#B07A5A] rounded-full shadow-[0_0_10px_rgba(176,122,90,0.5)]"></div>
              </div>
              {/* Inner rosewood orbit */}
              <div className="absolute inset-8 rounded-full border border-[#65000b]/5 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-[#65000b] rounded-full opacity-30"></div>
              </div>
              
              <RosewoodLogo className="w-4/5 h-4/5 z-10 drop-shadow-sm scale-110" />
            </div>

            {/* Brand Typography (as per style guide) */}
            <div className="animate-in slide-in-from-bottom-2 duration-1000">
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-[0.2em] text-[#65000b] leading-tight mb-2 uppercase">
                ROSEWOOD
              </h2>
              <div className="w-full flex items-center justify-center">
                <div className="h-px bg-[#B07A5A]/20 flex-grow max-w-[40px]"></div>
                <p className="text-[12px] md:text-[14px] font-bold tracking-[0.7em] text-[#1A222E] uppercase px-4">
                  Academy
                </p>
                <div className="h-px bg-[#B07A5A]/20 flex-grow max-w-[40px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <span className="text-[#B07A5A] font-bold text-[11px] uppercase tracking-[0.6em] mb-10 block opacity-60">The Global PhD Network</span>
          
          <h1 className="text-5xl md:text-8xl font-serif text-[#65000b] mb-10 tracking-tight leading-[0.95] animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Knowledge as a <br /> <span className="italic font-normal text-[#1A222E]">Shared Legacy</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-[#1A222E]/60 font-serif italic max-w-2xl mx-auto mb-16 leading-relaxed animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            A sanctuary for the world's PhD candidates. Operating as a prestigious network of local chapters, sharing intellect through community.
          </p>

          <div className="flex flex-col items-center animate-in fade-in duration-1000 delay-500">
            <div className="px-8 py-3 bg-white/50 backdrop-blur-sm border border-[#B07A5A]/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#B07A5A] mb-12 shadow-sm">
              Current Chapter: {activeChapter}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-14 py-5 bg-[#65000b] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#1A222E] transition-all hover:-translate-y-1 shadow-2xl shadow-[#65000b]/20">
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Concept: Minimal & Powerful */}
      <section className="bg-[#1A222E] text-[#F4EFEA] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <path d="M50 100 L50 20 Q50 10 60 5" stroke="currentColor" fill="none" strokeWidth="0.1" />
             <path d="M50 70 L40 50" stroke="currentColor" fill="none" strokeWidth="0.1" />
             <path d="M50 80 L65 60" stroke="currentColor" fill="none" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-[#B07A5A] font-bold text-[10px] uppercase tracking-[0.6em] mb-16">The Charter</h2>
          <p className="text-3xl md:text-5xl font-serif leading-tight italic mb-16 text-white/90">
            "We foster a <span className="text-[#B07A5A]">freecycle of thought</span>. In our network, every research paper, every dataset, and every theoretical framework is a resource for the collective."
          </p>
          <div className="w-20 h-px bg-[#B07A5A] mx-auto opacity-50"></div>
        </div>
      </section>
      
      {/* Functional Grid - Clean & Minimal */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-12 border border-[#F4EFEA] hover:border-[#B07A5A]/30 transition-all group bg-[#F4EFEA]/20">
              <span className="text-[10px] font-black text-[#B07A5A] uppercase tracking-[0.4em] mb-6 block">Architecture</span>
              <h3 className="font-serif text-3xl text-[#65000b] mb-6">Regional Satellite Hubs</h3>
              <p className="text-[#1A222E]/60 text-base leading-relaxed font-light">
                Localized chapters operate autonomously while revolving around the Rosewood core. Membership in one grants unique access to the global network.
              </p>
            </div>
            <div className="p-12 border border-[#F4EFEA] hover:border-[#B07A5A]/30 transition-all group">
              <span className="text-[10px] font-black text-[#B07A5A] uppercase tracking-[0.4em] mb-6 block">Exchange</span>
              <h3 className="font-serif text-3xl text-[#65000b] mb-6">Intellectual Reciprocity</h3>
              <p className="text-[#1A222E]/60 text-base leading-relaxed font-light">
                A membership built on the principle of sharing. Access specialized libraries and data pools curated by your peers across different disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
