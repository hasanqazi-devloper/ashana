"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-fit lg:min-h-[85vh] 2xl:min-h-[80vh] bg-[#030303] overflow-hidden flex items-center selection:bg-blue-600 pb-12 pt-36 md:pt-40 lg:pt-32 lg:pb-12">

      {/* 🌌 AMBIENT BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Left Deep Blue Flare */}
        <div className="absolute top-[-20%] left-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600/10 rounded-full blur-[140px]" />
        {/* Soft Right Cyan Flare */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[120rem] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">

          {/* 📝 LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Premium Animated Heading */}
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[5rem] font-black leading-[1.05] tracking-tighter text-white max-w-2xl lg:max-w-none ">
              Pakistan’s Most Practical {" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                SEO <br /> Training Program
              </span>
            </h1>

            {/* Cleaned Paragraph */}
            <p className="text-white text-sm md:text-base xl:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Beat the local job market by mastering the world's most in-demand digital skill and launching a successful remote career today.            </p>

            {/* 🎴 COMPACT PREMIUM MASTER COURSE CARD */}
            {/* 🎴 WIDE PREMIUM MASTER COURSE CARD */}
            <div className="w-full max-w-xl pt-1">
              <div className="flex flex-col gap-3.5 p-5 rounded-2xl bg-[#0d1321]/40 border border-white/10 backdrop-blur-md hover:border-blue-500 hover:bg-[#111827]/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:scale-[1.01] transition-all duration-300 text-left group cursor-pointer relative overflow-hidden">

                {/* Ambient Glow Background Effect on Hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Header Section */}
                <div className="flex items-center justify-between gap-3.5 relative z-10 w-full">
                  <div className="flex items-center gap-3.5 truncate">
                    {/* Compact Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 font-black text-[11px] tracking-tighter group-hover:scale-110 group-hover:text-cyan-300 transition-all shrink-0 border border-blue-500/30">
                      WP+SEO
                    </div>

                    {/* Content Area */}
                    <div className="truncate">
                      <h4 className="text-sm font-black text-white tracking-widest flex items-center gap-2 uppercase group-hover:text-blue-400 transition-colors">
                        WordPress & SEO
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-bold tracking-wide truncate mt-0.5 group-hover:text-zinc-300 transition-colors">
                        Master Course • Elementor & Advanced Audits
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-transparent transition-all duration-500 relative z-10" />

                {/* 🌟 4 Modules Matrix Grid */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {[
                    "WordPress Website",
                    "Search Engine Optimization",
                    "Guest Posting",
                    "Content Writing"
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-300 shadow-sm"
                    >
                      {/* Glowing Dot Indicator */}
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shrink-0 group-hover:scale-125 group-hover:shadow-[0_0_8px_#3b82f6] transition-all" />

                      <span className="text-[11px] font-black text-zinc-300 group-hover:text-white transition-colors tracking-wide leading-snug truncate">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 🚀 ACTION CALL SYSTEM */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full sm:w-auto pt-4">

              {/* ENROLL NOW GRADIENT SLIDER BUTTON */}
              <Link href="/contact" className="w-full sm:w-auto block">
                <button
                  className="group relative overflow-hidden w-full sm:min-w-[180px] h-[50px] rounded-full bg-white text-black font-black text-[12px] tracking-[2px] uppercase flex items-center justify-center gap-2 transition-all duration-500 shadow-xl active:scale-95 cursor-pointer"
                >
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                    Enroll Now
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              {/* ELITE NATIONWIDE TRUST BADGE */}
              <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10 w-full sm:w-auto justify-center sm:justify-start">

                <div className="flex items-center gap-4 text-left bg-transparent p-0">
                  {/* 👥 AVATAR STACK BLOCK (Overlapping Real Live Images) */}
                  <div className="flex -space-x-3.5 items-center isolation-auto">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    ].map((src, idx) => (
                      <div
                        key={idx}
                        className="w-9 h-9 rounded-full border-2 border-[#111827] ring-1 ring-emerald-500/40 overflow-hidden bg-zinc-900 shrink-0 transform hover:scale-110 hover:z-10 transition-all duration-300"
                      >
                        <img
                          src={src}
                          alt={`Student ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* 📈 DATA TEXT BLOCK */}
                  <div className="flex flex-col justify-center leading-none">
                    <h4 className="text-xl font-black text-white tracking-tight flex items-center gap-0.5 uppercase">
                      15,000<span className="text-blue-500 font-black">+</span>
                    </h4>
                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1.5 whitespace-nowrap">
                      Students Enrolled.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* 🎯 MINIMAL SOCIAL SOCIAL PROOF */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/5 w-full max-w-xl lg:max-w-none justify-center lg:justify-start">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-white font-bold text-[10px] uppercase tracking-widest">
                Top Rated Ed-Tech Program In Pakistan
              </p>
            </div>

          </div>

          {/* 📸 RIGHT CONTENT: PREMIUM STATIC VISUAL LAYER */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Ambient Background Light Behind Product Image */}
            <div className="absolute w-[70%] h-[70%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px]">
              <Image
                src="/hero-img.webp"
                alt="HRD Institute Tech Education Ecosystem Mockup"
                width={650}
                height={650}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,112,255,0.12)] select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .animate-gradient { animation: gradientMove 6s linear infinite; }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}