
import React, { useState, useEffect } from 'react';
import { getConcertSummary } from '../services/geminiService';
import { ConcertSummary } from '../types';

const Concert: React.FC = () => {
  const [rawText, setRawText] = useState<string>('');
  const [summary, setSummary] = useState<ConcertSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./ad.txt');
        const text = await response.text();
        setRawText(text);
        
        const result = await getConcertSummary(text);
        setSummary(result);
      } catch (err) {
        console.error("Failed to load concert ad", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4EFEA]">
        <div className="text-center">
          <div className="w-16 h-16 border-t-2 border-[#65000b] rounded-full animate-spin mx-auto mb-8"></div>
          <p className="font-serif italic tracking-widest text-[#B07A5A]">Preparing your invitation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4EFEA] text-[#1A222E] pb-32">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="text-center mb-24">
          <span className="text-[#B07A5A] font-bold text-[11px] uppercase tracking-[0.6em] mb-6 block">One-Off Event</span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#65000b] leading-tight mb-8">Gala <span className="italic">Musical</span> Social</h1>
          <div className="w-24 h-px bg-[#B07A5A] mx-auto opacity-30"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Invitation Card */}
          <div className="animate-in slide-in-from-left-4 duration-1000">
            <div className="bg-white p-12 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#65000b]/5 rounded-bl-full -mr-24 -mt-24 opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif text-[#65000b] mb-12 tracking-tight">
                  {summary?.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 mb-16 pb-12 border-b border-[#F4EFEA]">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B07A5A] mb-3">Schedule</p>
                    <p className="text-xl font-serif">{summary?.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B07A5A] mb-3">Venue</p>
                    <p className="text-xl font-serif">{summary?.location}</p>
                  </div>
                </div>

                <div className="mb-16">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#B07A5A] mb-8">Event Highlights</p>
                  <ul className="space-y-6">
                    {summary?.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-6">
                        <span className="w-1.5 h-1.5 bg-[#B07A5A] rounded-full"></span>
                        <span className="text-lg font-serif italic text-[#1A222E]/70">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg font-serif italic text-[#1A222E]/50 border-l-2 border-[#B07A5A]/20 pl-6 py-2 leading-relaxed mb-12">
                  {summary?.description}
                </p>

                <button className="w-full py-6 bg-[#1A222E] text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-[#65000b] transition-all shadow-xl">
                  RSVP Admission
                </button>
              </div>
            </div>
          </div>

          {/* Raw Message Context */}
          <div className="lg:pt-20 animate-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="mb-12">
              <h3 className="text-xl font-serif mb-4 text-[#65000b]">Internal Transmission</h3>
              <p className="text-sm text-[#1A222E]/50 font-light leading-relaxed">
                We present the original call to fellowship as distributed through the Academy's private channels.
              </p>
            </div>

            <div className="bg-[#1A222E] rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
               {/* Mobile UI simulation with new colors */}
               <div className="flex justify-between items-center text-[#B07A5A]/40 text-[9px] mb-8 uppercase tracking-[0.4em] px-4">
                 <span>Rosewood Private Net</span>
                 <div className="flex gap-2">
                   <div className="w-1.5 h-1.5 border border-white/20 rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-[#B07A5A] rounded-full"></div>
                 </div>
               </div>

               <div className="flex items-start gap-4 mb-8">
                 <div className="w-12 h-12 flex-shrink-0 bg-[#65000b] rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                   <span className="text-white font-serif font-bold text-xl">R</span>
                 </div>
                 <div className="bg-[#2D3643] p-6 rounded-3xl rounded-tl-none border border-white/5">
                   <div className="text-sm font-sans text-stone-200 whitespace-pre-wrap leading-relaxed">
                     {rawText}
                   </div>
                 </div>
               </div>
               
               <div className="text-center pt-6 border-t border-white/5">
                 <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.4em]">Broadcast complete</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Concert;
