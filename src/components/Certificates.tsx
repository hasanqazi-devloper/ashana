"use client";
import { Award, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

export default function CertificatesSection() {
  // Mock data matching the screenshot verification layout style
  const certificates = [
    { name: "Fizza Habib", title: "WordPress & SEO Specialist", id: "SKILLS-2026-081", image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=600&auto=format&fit=crop" },
    { name: "Aniba Irfan", title: "Technical SEO Expert", id: "SKILLS-2026-142", image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=600&auto=format&fit=crop" },
    { name: "Asad Ali Lakho", title: "Full-Stack Web Architect", id: "SKILLS-2026-094", image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=600&auto=format&fit=crop" },
    { name: "Faraz Ahmed", title: "Custom WordPress Developer", id: "SKILLS-2026-311", image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section className="relative w-full bg-[#1E2939] overflow-hidden py-16 md:py-24 2xl:py-32 px-6 border-t border-white/5">
      {/* Soft Top Ambient Background Light */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-blue-600/[0.02] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto px-6 w-full space-y-12">
        
        {/* 🏷️ HEADER SECTION: EXACT MATCHING YOUR REFERENCED DESIGN */}
        <div className="text-center space-y-3 pb-4">
      
          
          <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-none tracking-tighter text-white uppercase font-sans">
            STUDENT <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">CERTIFICATES</span>
          </h2>

          {/* Precise accent stroke separator bar below typography */}
          <div className="w-12 h-[3px] bg-[#FFC71E] mx-auto mt-4 rounded-full" />
        </div>

        {/* 📜 CERTIFICATES CARD GRID (High-Contrast White Layout Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-zinc-200 rounded-xl p-4 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,112,255,0.08)] flex flex-col justify-between space-y-4"
            >
              {/* Outer Safe Technical Border Layer around core content frame */}
              <div className="relative border-2 border-zinc-900 rounded-lg p-3 bg-white space-y-4 overflow-hidden aspect-[1.41/1] flex flex-col justify-between">
                
                {/* Certificate Header Stamp elements */}
                <div className="flex items-start justify-between border-b border-zinc-100 pb-2">
                  <div>
                    <h4 className="text-[9px] font-black tracking-tight text-zinc-950 uppercase leading-none">SkillsEdu</h4>
                    <p className="text-[6px] font-bold tracking-widest text-zinc-400 uppercase mt-0.5">Ecosystem Verified</p>
                  </div>
                  <Award size={14} className="text-blue-600" />
                </div>

                {/* Main Dynamic Text Inside Box Layout */}
                <div className="text-center space-y-1.5 my-auto">
                  <p className="text-[7px] font-bold text-black uppercase tracking-wider">This Certificate is proudly presented to</p>
                  <h3 className="text-sm md:text-base font-black text-black tracking-tight font-sans px-1 border-b border-zinc-900/10 pb-1 inline-block w-full truncate">
                    {cert.name}
                  </h3>
                  <p className="text-[8px] font-extrabold text-blue-600 uppercase tracking-wide pt-0.5">{cert.title}</p>
                </div>

                {/* Footer Micro Verification Layer */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[6px] font-mono text-zinc-400 font-bold">
                  <span>ID: {cert.id}</span>
                  <span className="flex items-center gap-0.5 text-emerald-600 font-extrabold bg-emerald-50 px-1 py-0.5 rounded">
                    ✓ VALID STATUS
                  </span>
                </div>
              </div>

              {/* Bottom Frame Badge Controls matching screenshot details exactly */}
              <div className="flex items-center justify-between pt-1 border-t border-zinc-100/80">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider pl-1">
                  GRADUATED
                </span>
                
                {/* Interactive Status Indicator Action Pill */}
                <span className="inline-flex items-center gap-1 bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] font-black text-[9px] tracking-wider px-2 py-0.5 rounded-md uppercase select-none group-hover:bg-[#0070ff] group-hover:text-white group-hover:border-[#0070ff] transition-all duration-200">
                  VERIFIED <ExternalLink size={8} />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}