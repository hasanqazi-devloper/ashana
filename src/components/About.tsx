"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      {/* 🎯 ABOUT SECTION - Adapted for HRD Institute */}
      <section id="about" className="relative pt-12 md:pt-20 2xl:pt-32 pb-16 bg-[#1E2939] overflow-hidden">

        {/* Background Glow - Kept same as source for VIP match */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT: Image - Place for your institute graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="absolute w-[50%] h-[50%] bg-blue-600/[0.05] blur-[80px] rounded-full" />
              <div className="relative z-10 w-full max-w-[320px] md:max-w-[490px] 2xl:max-w-[650px]">
                {/* 🎯 Placeholder Image - User to create graphic/file at public/about-hrd.png */}
                <Image
                  src="/about-hrd.png" // User, apni visual file create karein aur save karein `public/about-hrd.png`
                  alt="HRD Institute - Practical Training"
                  width={700}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* RIGHT: Text Content - Adapted copy for HRD Institute */}
            <div className="space-y-6 md:space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1] text-white">
                  Empowering individuals with <br /> production-ready code.
                  <br />
                  <span className="block mt-0 mb-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Zero theory, Full code.
                  </span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                {/* Paragraph 1 - Re-written for practical tech training */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  Traditional education focuses on theoretical knowledge, leaving you unprepared for the demands of the modern tech industry. We break this loop.
                </p>

                {/* Paragraph 2 - Re-written */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  Our core mission at **HRD Institute** is to deliver 100% practical training, transforming passionate learners into production-ready software engineers within months, not years.
                </p>

                {/* Paragraph 3 - Re-written (Hidden on mobile for cleaner layout) */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 hidden md:block">
                  Aap yahan MERN Stack, AI & ML, App Development (Flutter), aur WordPress par scalable, real-world applications scratch se build karte hain.
                </p>

                {/* Paragraph 4 - Re-written */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  Serving students nationwide in Pakistan, we provide the mentorship and support you need to jumpstart your career with confidence.
                </p>
              </motion.div>

              {/* Buttons Section - Updated to premium Blue-to-White Fill on Hover theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <Link href="#methodology">
                  {/* Updated Premium Blue Button with Smooth White background slider */}
                  <button className="group relative overflow-hidden px-8 2xl:px-10 h-[48px] 2xl:h-[56px] rounded-full bg-blue-600 text-white font-black text-[11px] 2xl:text-[13px] uppercase tracking-widest transition-all duration-500 flex items-center gap-2 active:scale-95 shadow-lg">
                    {/* Animated White background slider */}
                    <span className="absolute inset-0 w-0 bg-white transform scale-x-0 group-hover:w-full transition-all duration-500 ease-out z-0 origin-left"></span>
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-blue-600 transition-colors duration-500">
                      Our Methodology <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>

                <Link
                  href="#courses"
                  className="group flex items-center gap-2 text-zinc-400 hover:text-white font-bold text-[11px] 2xl:text-[13px] uppercase tracking-[2px] transition-colors duration-300"
                >
                  Explore Courses
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}