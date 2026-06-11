"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
{/* 🎴 COMPACT PREMIUM MASTER COURSE CARD */ }
import React from "react"; // React alag se import hoga
import { Globe, Search, PenTool, Share2 } from "lucide-react"; // Sahi icons import kar liye

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

      <div className="relative z-10 max-w-7xl 2xl:max-w-[120rem] mx-auto  w-full px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">

          {/* 📝 LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Premium Animated Heading */}
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[5rem] font-black leading-[1.05] tracking-tighter text-white max-w-2xl lg:max-w-none ">
              Pakistan’s Most Practical {" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                SEO Training Program
              </span>
            </h1>

            {/* Cleaned Paragraph */}
            <p className="text-white text-sm md:text-base xl:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Beat the local job market by mastering the world's most in-demand digital skill and launching a successful remote career today.            </p>




            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              {[
                {
                  title: "WORDPRESS DEVELOPMENT",
                  desc: "PHP, ELEMENTOR & CUSTOM THEMES",
                  icon: <Globe className="w-5 h-5 stroke-[2.5]" />
                },
                {
                  title: "SEARCH ENGINE OPTIMIZATION",
                  desc: "ADVANCED AUDITS, ON-PAGE & RANKING",
                  icon: <Search className="w-5 h-5 stroke-[2.5]" />
                },
                {
                  title: "CONTENT WRITING",
                  desc: "SEO COPYWRITING & BLOG ARCHITECTURE",
                  icon: <PenTool className="w-5 h-5 stroke-[2.5]" />
                },
                {
                  title: "SOCIAL MEDIA MARKETING",
                  desc: "BRANDING, ADS & CAMPAIGN MANAGEMENT",
                  icon: <Share2 className="w-5 h-5 stroke-[2.5]" />
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer flex items-center gap-4 p-4 rounded-2xl bg-[#0d1321]/40 border border-white/10 backdrop-blur-md hover:border-blue-500/40 hover:bg-[#111827]/70 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
                >
                  {/* 🔵 Ambient Premium Blue Background Glow */}
                  <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* 🟦 LEFT SIDE: Compact Square Icon Container with Blue Palette */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center justify-center text-blue-400 bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-cyan-500/20 group-hover:text-cyan-300 group-hover:border-blue-500/40 group-hover:scale-105 transition-all duration-300 shrink-0 shadow-inner">
                    {item.icon}
                  </div>

                  {/* 📝 RIGHT SIDE: Clean Text Alignment (Turns blue on hover) */}
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="text-xs sm:text-sm font-black text-white italic tracking-wide uppercase group-hover:text-blue-400 transition-colors duration-300 truncate">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-zinc-400 font-extrabold tracking-wider uppercase mt-0.5 group-hover:text-zinc-200 transition-colors duration-300 truncate">
                      {item.desc}
                    </p>
                  </div>

                  {/* 🌟 Dynamic Blue Highlight Line at the Bottom */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500" />
                </div>
              ))}
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
                      "https://images.unsplash.com/photo-1669804227127-0876cb0f5474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D",
                      "https://plus.unsplash.com/premium_photo-1682096108814-b53765f48ba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
                      "https://images.unsplash.com/photo-1647151481397-95e581943ac1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFraXN0YW5pJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",
                      "https://images.unsplash.com/photo-1599842057874-37393e9342df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
                      "https://images.unsplash.com/photo-1711374316403-2bfa31ae9c2a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D"
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
                      150<span className="text-blue-500 font-black">+</span>
                    </h4>
                    <p className="text-[10px] text-white font-black uppercase tracking-widest mt-1.5 whitespace-nowrap">
                      Students Trained.
                    </p>
                  </div>
                </div>
              </div>

            </div>


          </div>

          {/* 📸 RIGHT CONTENT: PREMIUM STATIC VISUAL LAYER */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            {/* 🔵 Subtle Ambient Glow Behind Image Frame */}
            <div className="absolute w-[80%] h-[80%] bg-blue-600/[0.08] rounded-full blur-[120px] pointer-events-none z-0 right-0 top-1/2 -translate-y-1/2" />

            {/* 🖼️ Premium Border Mockup Container */}
            <div className="relative z-10 w-full max-w-[420px] sm:max-w-[48px] lg:max-w-[500px] xl:max-w-[560px] p-2 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_25px_60px_rgba(59,130,246,0.1)]">

              {/* Inner Subtle Light Stroke */}
              <div className="absolute inset-0 border border-white/[0.05] rounded-xl pointer-events-none z-20" />

              <Image
                src="/about.jpg"
                alt="HRD Institute Tech Education Ecosystem Mockup"
                width={700}
                height={450}
                priority
                className="w-full h-auto object-cover rounded-xl select-none pointer-events-none shadow-inner opacity-95 group-hover:opacity-100 transition-opacity"
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