'use client';

import React, { useState, useEffect } from 'react';

export default function TrustedLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 100% Solid Tech Grid Labels (No local png images needed = ZERO broken paths error)
  const topRowLogos = [
    { name: 'Tailwind', tech: 'CSS Framework' },
    { name: 'GitHub', tech: 'Version Control' },
    { name: 'Slack', tech: 'Communication' },
    { name: 'Google', tech: 'Cloud Engines' },
    { name: 'AWS', tech: 'Cloud Matrix' },
    { name: 'Figma', tech: 'UI/UX Pipeline' },
    { name: 'Apple', tech: 'iOS Ecosystem' },
  ];

  const bottomRowLogos = [
    { name: 'Salesforce', tech: 'Enterprise CRM' },
    { name: 'Docker', tech: 'Containers' },
    { name: 'PostgreSQL', tech: 'SQL Database' },
    { name: 'MongoDB', tech: 'NoSQL Engine' },
    { name: 'Node.js', tech: 'Runtime Stack' },
    { name: 'React', tech: 'Next Architecture' },
    { name: 'Flutter', tech: 'Cross Platform' },
  ];

  if (!mounted) {
    return <section className="py-24 bg-[#030303] min-h-[400px]" />;
  }

  return (
    <section className="py-16 md:py-24 bg-[#030303] overflow-hidden border-t border-white/5 relative">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="space-y-3">
          {/* <div className="inline-block text-[10px] font-black text-blue-400 tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md font-mono">
            🌐 GLOBAL PLACEMENTS
          </div> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-white leading-none font-sans">
            OUR ALUMNI WORK <br />
            {/* <span className="text-[#FFC71E]"></span> */}
            <span className="block mt-0 mb-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              AT TOP TECH GIANTS
            </span>
          </h2>
        </div>

        <div className="max-w-xs border-l-2 border-[#FFC71E] pl-4 py-1">
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider leading-relaxed font-sans">
            From Silicon Valley to top domestic hubs, our students are dominating the live software pipelines.
          </p>
        </div>
      </div>

      {/* LOGOS INFINITE SLIDER CONTAINER */}
      <div className="space-y-6 md:space-y-8 flex flex-col w-full relative z-10">

        {/* FIRST ROW: Moving Left to Right (LTR) */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <style>{`
            @keyframes marqueeLTR {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-ltr-pure {
              animation: marqueeLTR 35s linear infinite;
            }
            @keyframes marqueeRTL {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-rtl-pure {
              animation: marqueeRTL 35s linear infinite;
            }
          `}</style>

          <div className="animate-ltr-pure flex whitespace-nowrap gap-6 items-center py-2 shrink-0">
            {[...topRowLogos, ...topRowLogos, ...topRowLogos].map((item, index) => (
              <div
                key={`top-${index}`}
                className="w-44 h-20 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-xl flex flex-col items-center justify-center px-4 transition-all duration-300 hover:border-[#FFC71E]/30 hover:bg-white/[0.05] group shrink-0 shadow-lg backdrop-blur-sm"
              >
                <span className="text-sm font-black tracking-wider text-zinc-200 group-hover:text-white transition-colors font-sans uppercase">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase mt-1">
                  {item.tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECOND ROW: Moving Right to Left (RTL) */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="animate-rtl-pure flex whitespace-nowrap gap-6 items-center py-2 shrink-0">
            {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="w-44 h-20 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 rounded-xl flex flex-col items-center justify-center px-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05] group shrink-0 shadow-lg backdrop-blur-sm"
              >
                <span className="text-sm font-black tracking-wider text-zinc-200 group-hover:text-white transition-colors font-sans uppercase">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase mt-1">
                  {item.tech}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}