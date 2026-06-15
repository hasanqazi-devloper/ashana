"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-neutral-200 text-neutral-900 px-8 md:px-20 relative overflow-hidden">
      
      {/* Decorative Line */}
      <div className="absolute top-0 left-20 w-px h-32 bg-yellow-700"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        
        {/* Left Side: Impact Statement */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <h3 className="text-[10px] text-yellow-800 tracking-[0.4em] uppercase mb-6 font-bold">
            The Culinary Philosophy
          </h3>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Precision in <br/> every <span className="text-yellow-700">grain</span>.
          </h2>
        </div>

        {/* Right Side: Narrative */}
        <div className="lg:w-2/3 space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-neutral-950 italic">
              "Great pastry is the perfect intersection of <span className="text-yellow-800 font-semibold not-italic">technical discipline</span> and <span className="text-yellow-800 font-semibold not-italic">artistic freedom</span>. It requires not just the right ingredients, but the right intuition."
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed font-light">
              Over the past 5 years, I have honed my craft in world-class kitchens like <b>W Dubai - The Palm</b> and <b>One&Only Resorts</b>. My approach is rooted in the rigorous demands of high-volume luxury hospitality, where consistency is as vital as creativity. From complex lamination techniques to precise bread plating, I view every dish as a statement of quality.
            </p>
          </motion.div>
          
          {/* Expertise Grid - Grey Palette */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-neutral-400">
            {[
              { label: "Food Safety", val: "HACCP Certified" },
              { label: "Technique", val: "Lamination" },
              { label: "Specialty", val: "Bread Plating" },
              { label: "Management", val: "Team Leadership" }
            ].map((skill, i) => (
              <div key={i} className="space-y-1">
                <p className="text-[9px] uppercase tracking-widest text-neutral-600 font-bold">{skill.label}</p>
                <p className="text-sm font-bold text-neutral-950">{skill.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}