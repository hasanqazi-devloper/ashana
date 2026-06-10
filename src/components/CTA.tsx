"use client";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative w-full bg-[#111827] overflow-hidden py-20 md:py-28 border-t border-white/5">
      {/* Premium Ambient Background Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Main Framework Wrapper Container */}
      <div className="relative z-10 max-w-7xl xl:max-w-[85rem] mx-auto px-6 w-full">

        {/* Inner Content Grid Box Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 
   bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526]
        border border-white/10 rounded-3xl p-8 md:p-12 xl:p-16 ">

          {/* Left Block Text Messaging Details */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Top Admissions Badge Tag */}
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFC71E] font-black text-[10px] tracking-widest uppercase">
              <Sparkles size={10} className="ani    mate-pulse" /> ADMISSIONS OPEN 2026
            </div> */}

            {/* Core Flagship Headline precisely mimicking screenshot styling */}
            <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-black leading-[1.05] tracking-tighter text-white uppercase italic font-sans">
              STOP SCROLLING. <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                START EARNING.
              </span>
            </h2>

            {/* Left Accent Stroke Bar Layer with Subtext description */}
            <div className="flex items-stretch gap-4 pt-2 text-left">
              <div className="w-[3px] bg-[#FFC71E] rounded-full flex-shrink-0" />
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider leading-relaxed">
                Join Pakistan's most practical skill-building academy.
                <br className="hidden sm:inline" />{"  "}
                <span className="text-white">Zero theory. 100% practical live optimization</span>  and real-world project ranking.

              </p>
            </div>

          </div>

          {/* Right Action Button Control Block */}
          <div className="w-full sm:w-auto flex-shrink-0 flex justify-center">
            <Link href="/contact" className="w-full sm:w-auto relative group block">
              {/* 🟦 Outer Glow Ring on Hover - Aligned to Rounded Full */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-70 blur-md transition duration-500 pointer-events-none" />

              {/* Premium Action Button Card */}
              <button
                className="group relative overflow-hidden w-full sm:min-w-[240px] h-14 rounded-full bg-white text-black font-black text-xs md:text-sm tracking-[2px] uppercase flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl active:scale-95 cursor-pointer"
              >
                {/* Blue to Cyan Hover Effect Gradient Layer */}
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />

                {/* Button Text & Icon Layer */}
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500 ease-out">
                  SECURE YOUR SEAT
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300 stroke-[3px]" />
                </span>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}