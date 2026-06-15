"use client";
import { useState } from "react"; // <--- useState import zaroori hai
import { motion } from "framer-motion";
import CVModal from "@/src/components/CVModal"; // <--- Path check kar lo, agar components folder root mein hai

export default function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0a0a0a] text-white px-8 md:px-20 overflow-hidden pt-40 md:pt-32">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-600/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Left side: Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/2 flex flex-col items-start space-y-8"
      >
        <div className="space-y-4">
          <span className="text-yellow-600 tracking-[0.4em] uppercase text-[10px] font-bold border-l border-yellow-600 pl-4">
            Available for Hire
          </span>
          <h2 className="text-6xl md:text-8xl font-serif leading-[0.9]">
            Culinary <br /> <span className="italic text-yellow-600">Mastery.</span>
          </h2>
        </div>
        
        <p className="text-neutral-400 text-lg max-w-sm font-light leading-relaxed">
          Ashanga Silakshana, Bakery Demi Chef @ W Dubai. 
          Bridging artisanal craftsmanship with luxury hospitality standards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Button to open Modal */}
          <button 
            onClick={() => setIsCVOpen(true)}
            className="bg-yellow-600 px-10 py-4 text-[10px] tracking-widest font-bold uppercase hover:bg-white hover:text-black transition-all duration-500 text-center"
          >
            View CV
          </button>

          <a href="#contact" className="border border-neutral-700 px-10 py-4 text-[10px] tracking-widest font-bold uppercase hover:border-yellow-600 hover:text-yellow-600 transition-all duration-500 text-center">
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Right side: Client Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end"
      >
        <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[3/4]">
          <div className="absolute -inset-6 border border-neutral-800"></div>
          <div className="absolute -bottom-6 -left-6 w-1/3 h-1/3 border-b border-l border-yellow-600"></div>
          <img 
            src="https://images.unsplash.com/photo-1549590143-d5855148a9d5?w=500&auto=format&fit=crop&q=60" 
            alt="Ashanga Silakshana" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </motion.div>

      {/* Modal Integration */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </section>
  );
}