'use client';

import React from 'react';
import Image from 'next/image';

export default function TrustedLogos() {
  const topRowLogos = [
    { src: '/logos/tailwind.png', alt: 'Tailwind CSS' },
    { src: '/logos/github.png', alt: 'GitHub' },
    { src: '/logos/slack.png', alt: 'Slack' },
    { src: '/logos/google.png', alt: 'Google' },
    { src: '/logos/aws.png', alt: 'AWS' },
    { src: '/logos/figma.png', alt: 'Figma' },
    { src: '/logos/apple.png', alt: 'Apple' },
  ];

  const bottomRowLogos = [
    { src: '/logos/salesforce.png', alt: 'Salesforce' },
    { src: '/logos/docker.png', alt: 'Docker' },
    { src: '/logos/postgresql.png', alt: 'PostgreSQL' },
    { src: '/logos/mongodb.png', alt: 'MongoDB' },
    { src: '/logos/nodejs.png', alt: 'Node.js' },
    { src: '/logos/react.png', alt: 'React' },
    { src: '/logos/flutter.png', alt: 'Flutter' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#111827] overflow-hidden border-t border-white/5">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-block text-xs md:text-sm font-bold text-blue-400 tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            🌐 Global Placements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase text-white leading-none">
            Our Alumni Work <br />
            <span className="text-blue-400">At Top Tech Giants</span>
          </h2>
        </div>
        
        <div className="max-w-xs border-l-2 border-blue-500 pl-4 py-1">
          <p className="text-zinc-400 text-xs md:text-sm font-medium uppercase tracking-wider leading-snug">
            From Canada to New Zealand, our students are dominating the global IT industry.
          </p>
        </div>
      </div>

      {/* LOGOS INFINITE SLIDER CONTAINER */}
      <div className="space-y-6 md:space-y-8 flex flex-col w-full">
        
        {/* FIRST ROW: Moving Left to Right (LTR) */}
        {/* Style tag injects pure CSS directly so it works instantly without tailwind.config setup */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <style>{`
            @keyframes marqueeLTR {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-ltr-pure {
              animation: marqueeLTR 30s linear infinite;
            }
          `}</style>
          <div className="animate-ltr-pure flex whitespace-nowrap gap-6 items-center py-2 shrink-0">
            {[...topRowLogos, ...topRowLogos, ...topRowLogos].map((logo, index) => (
              <div
                key={index}
                className="w-40 h-20 md:w-52 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group relative shrink-0"
              >
                <div className="w-full h-full relative opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 208px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECOND ROW: Moving Right to Left (RTL) */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <style>{`
            @keyframes marqueeRTL {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-rtl-pure {
              animation: marqueeRTL 30s linear infinite;
            }
          `}</style>
          <div className="animate-rtl-pure flex whitespace-nowrap gap-6 items-center py-2 shrink-0">
            {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
              <div
                key={index}
                className="w-40 h-20 md:w-52 md:h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center p-4 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group relative shrink-0"
              >
                <div className="w-full h-full relative opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 208px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}