"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <img 
          // Yeh direct image link hai jo har jagah load hota hai
          src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jb2ElMjBmYXJtZXIlMjBoYW5kc3xlbnwwfHwwfHx8MA%3D%3D" 
          className="w-full h-full object-cover object-center brightness-[0.6]" 
          alt="Cocoa Processing"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center">
        
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-yellow-600 tracking-[0.5em] text-[9px] uppercase font-bold mb-10 border-b border-yellow-600/20 pb-2"
        >
          Established 1970 • Nigerian Origin
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-[100px] font-serif text-white leading-[0.9] tracking-tighter mb-10"
        >
          SHC Agro Allied. <br/>
          <span className="italic text-yellow-600">Traceable.</span> <br/>
          <span className="font-light text-neutral-500 italic">Premium Cocoa.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-neutral-400 text-lg md:text-xl font-light max-w-lg mb-12 leading-relaxed px-4"
        >
          Bridging generational farming heritage with 120+ MT global export standards. Pure origin, professional grading, reliable supply.
        </motion.p>

        {/* Button Add Kiya Hai */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="border border-yellow-600 text-yellow-600 px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-yellow-600 hover:text-black transition-all"
        >
          Request Inspection Report
        </motion.button>
      </div>
    </section>
  );
}