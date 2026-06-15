"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    // 'bg-[#0a0a0a]' match kardo hero ke background se
    // 'relative z-20' ensure karega ke ye hero ke upar (ya neeche) sahi tarah layer ho
    <section 
      id="process" 
className="relative z-20 mt-0 md:mt-0 py-32 bg-[#111827] text-white px-8 md:px-20"    >
      
      {/* Decorative Line */}
      <div className="hidden md:block absolute top-0 left-20 w-px h-32 bg-yellow-600/50"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
        
        {/* Left Side: Authority Statement */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <h3 className="text-[10px] text-yellow-600 tracking-[0.4em] uppercase mb-6 font-bold">
            The SHC Legacy
          </h3>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Rooted in <br/> <span className="italic text-yellow-600">Tradition</span>, <br/> Driven by Scale.
          </h2>
        </div>

        {/* Right Side: Narrative */}
        <div className="lg:w-2/3 space-y-12 md:space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg md:text-2xl font-serif leading-relaxed text-neutral-300 italic border-l-2 border-yellow-600 pl-6">
              "Consistency in the cocoa supply chain isn't built during harvest season—it’s built over years of trust, precision, and long-term relationships at origin."
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed font-light">
              Founded on a legacy dating back to the 1970s, <b>SHC Agro Allied Ltd</b> bridges generational cocoa farming heritage with modern 120+ metric ton export capabilities. Based in Ikom, Cross River State, our operations integrate rigorous quality control—from fermentation and sun-drying to grading—ensuring that international buyers receive exactly the quality specified in every shipment. We don't just trade commodities; we manage the entire value chain to preserve the integrity of Nigerian cocoa.
            </p>
          </motion.div>
          
          {/* Industrial Expertise Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-neutral-800">
            {[
              { label: "Annual Volume", val: "120+ MT" },
              { label: "Expertise", val: "Supply Chain" },
              { label: "Standards", val: "NEPC Export" },
              { label: "Heritage", val: "Since 1970" }
            ].map((skill, i) => (
              <div key={i} className="space-y-1">
                <p className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold">{skill.label}</p>
                <p className="text-sm font-bold text-white">{skill.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}