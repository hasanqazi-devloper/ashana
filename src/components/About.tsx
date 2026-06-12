"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <>
      {/* 🎯 ABOUT SECTION - Finalized Balanced Padding for All Screens */}
      <section id="about" className="relative py-16 md:py-24 2xl:py-32 px-6 bg-[#0b0f19] overflow-hidden flex items-center">

        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] md:w-[700px] h-[300px] bg-blue-600/[0.03] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[300px] bg-cyan-600/[0.02] blur-[130px] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[120rem] mx-auto px-6 sm:px-12 relative z-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">

            {/* 🖼️ LEFT: PREMIUM IMAGE FRAME LAYER (Optimized Width & Structure) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center order-2 lg:order-1 w-full lg:col-span-6 xl:col-span-6"
            >
              {/* Outer Ambient Border Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl rounded-[2.5rem] opacity-70 pointer-events-none" />
              
              {/* Main Premium Showcase Box - Increased max-widths and switched to wide aspect ratios */}
              <div className="relative z-10 w-full p-3 rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[1.15/1] xl:aspect-[1.2/1] max-w-full sm:max-w-[550px] lg:max-w-none flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-600/10 opacity-60 pointer-events-none" />
                
                {/* 🎯 Image Wrapper */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                  <Image
                    src="/about11.jpg"
                    alt="HRD Institute - Practical Training"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-w-7xl) 40vw, 40vw"
                    priority
                  />
                  {/* Subtle Dark Overlay Tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </motion.div>

            {/* 📝 RIGHT: BALANCED TEXT CONTENT & FEATURES */}
            <div className="space-y-6 md:space-y-7 order-1 lg:order-2 lg:col-span-6 xl:col-span-6 flex flex-col justify-center w-full">
              {/* Typography Heading Block */}
              <div className="space-y-2.5">
                <span className="text-[10px] md:text-[11px] font-black tracking-[3px] px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 inline-block">
                  Must Watch Before Admission
                </span>
                <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tight leading-[1.1] text-white">
                  What You Will Master : <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    No Theory, Just Live Projects
                  </span>
                </h2>
              </div>

              {/* Description Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed max-w-xl opacity-90"
              >
                Skip boring lectures. You will actively audit real websites, conduct advanced keyword research, build topical authority, and rank pages on Google—building a live portfolio to win high-paying international clients.
              </motion.p>

          {/* 🎴 VERTICAL CARDS CONTAINER */}
<div className="space-y-4 w-full max-w-xl">
  {[
    {
      title: "Guaranteed Internship",
      desc: "Top Students get hired in our own Digital Agency.",
    },
    {
      title: "Lifetime Mentorship",
      desc: "Free lifetime support from expert mentors.",
    },
    {
      title: "Online Community",
      desc: "Connect, network, and grow together.",
    }
  ].map((feat, idx) => (
    <div
      key={idx}
      className="group flex items-start sm:items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#0d1321]/60 to-[#070a12]/40 border border-white/5 hover:border-blue-500/30 hover:bg-[#111827]/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] transition-all duration-300 relative overflow-hidden text-left"
    >
      {/* ⚡ Left Edge Glow Line Indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 to-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r" />

      {/* Inner Ambient Glow Layer */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/[0.03] via-cyan-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Checkmark Circular Status Badge */}
      <div className="w-7 h-7 rounded-lg border border-blue-500/20 bg-blue-500/5 flex items-center justify-center text-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-black group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shrink-0 shadow-inner mt-0.5 sm:mt-0">
        <svg className="w-3.5 h-3.5 stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Feature Information Text */}
      <div className="flex flex-col gap-1 min-w-0">
        <h4 className="text-xs sm:text-sm font-black text-zinc-100 uppercase tracking-wider group-hover:text-blue-400 transition-colors duration-200">
          {feat.title}
        </h4>
        <p className="text-[11px] sm:text-xs text-zinc-400 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
          {feat.desc}
        </p>
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}