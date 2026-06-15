"use client";
import { motion } from "framer-motion";
// Yahan change karo:
import { Mail, MessageCircle } from "lucide-react";
// Animation variants for cleaner code and staggered effects
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between animations
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 md:py-48 px-8 bg-[#0a0a0a] border-t border-neutral-900 relative overflow-hidden">
      
      {/* Visual Depth System: Dual Layer Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute middle-left top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-600/3 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger earlier for better flow
        className="max-w-[1400px] mx-auto relative z-10"
      >
        
        {/* Step 1: Heading - Clean and Staggered */}
        <motion.div variants={itemVariants} className="text-center mb-24 md:mb-32 space-y-4">
          <h3 className="text-[10px] text-yellow-600 tracking-[0.5em] uppercase font-bold border-b-2 border-yellow-600 inline-block pb-1">
            Inquiry
          </h3>
          <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">
            Ready to collaborate?
          </h2>
        </motion.div>
        
        {/* Step 2: Interactive Action Grid - Maximum Polish */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-24">
          
          {/* Email Card - Optimized for Focus */}
          <a 
            href="mailto:ashangasilakshana@gmail.com" 
            className="group relative flex flex-col items-start gap-5 p-12 bg-[#111111] border border-neutral-800 hover:border-yellow-600/50 hover:-translate-y-2 transition-all duration-700 ease-out overflow-hidden"
          >
            {/* Animated Background Pulse */}
            <div className="absolute -inset-10 bg-yellow-600/3 group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all duration-700 rounded-full blur-2xl z-0"></div>
            
            <div className="relative z-10 flex items-center gap-4 text-yellow-600">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                <span className="block text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-500 group-hover:text-yellow-600 transition-colors">Drop an Email</span>
            </div>
            <span className="relative z-10 text-xl md:text-2xl font-medium tracking-wide text-white group-hover:text-white transition-colors">
                ashangasilakshana@gmail.com
            </span>
          </a>

          {/* WhatsApp Card - Mobile Friendly & Fast */}
          <a 
            href="https://wa.me/971586517834" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-start gap-5 p-12 bg-[#111111] border border-neutral-800 hover:border-yellow-600/50 hover:-translate-y-2 transition-all duration-700 ease-out overflow-hidden"
          >
             {/* Animated Background Pulse */}
             <div className="absolute -inset-10 bg-yellow-600/3 group-hover:scale-150 group-hover:opacity-100 opacity-0 transition-all duration-700 rounded-full blur-2xl z-0"></div>

            <div className="relative z-10 flex items-center gap-4 text-yellow-600">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                <span className="block text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-500 group-hover:text-yellow-600 transition-colors">Chat via WhatsApp</span>
            </div>
            <span className="relative z-10 text-xl md:text-2xl font-medium tracking-wide text-white group-hover:text-white transition-colors">
                +971 58 651 7834
            </span>
          </a>
        </motion.div>

        {/* Step 3: Minimalist Footer - High Contrast */}
        <motion.div variants={itemVariants} className="pt-16 border-t border-neutral-900/50 text-center">
          <p className="text-neutral-700 text-[10px] uppercase tracking-[0.4em] font-light max-w-lg mx-auto leading-relaxed">
            Based in Dubai, UAE • Available for global opportunities, bringing artisanal expertise to luxury hospitality.
          </p>
        </motion.div>
        
      </motion.div>
    </section>
  );
}