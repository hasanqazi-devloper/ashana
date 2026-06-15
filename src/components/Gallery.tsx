"use client";
import { motion } from "framer-motion";

// Curation Masterpiece - Coded Unsplash Links
const galleryItems = [
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1400", alt: "Artisanal Bread Mastery", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800", alt: "Signature Lamination" },
  { src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFrZXJ5JTIwaXRlbXN8ZW58MHx8MHx8fDA%3D", alt: "Plated Excellence" },
  { src: "https://images.unsplash.com/photo-1597528662465-55ece5734101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJha2VyeSUyMGl0ZW1zfGVufDB8fDB8fHww", alt: "Precision Viennoiserie" },
  { src: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJha2VyeSUyMGl0ZW1zfGVufDB8fDB8fHww", alt: "Chef's Palette - Dual Feature", span: "md:col-span-2 md:row-span-2" }, // Added 2nd Large Feature
  { src: "https://images.unsplash.com/photo-1590301157172-7ba48dd1c2b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFkfGVufDB8fDB8fHww", alt: "Luxury Pastry Concept" },
  { src: "https://images.unsplash.com/photo-1499889808931-317a0255c0e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJha2luZ3xlbnwwfHwwfHx8MA%3D%3D", alt: "Gourmet Bread Art" },
  { src: "https://plus.unsplash.com/premium_photo-1675788939058-850af470cd36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJha2luZ3xlbnwwfHwwfHx8MA%3D%3D", alt: "Technique & Texture" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-32 md:py-40 bg-[#0a0a0a] px-8 md:px-20 border-t border-neutral-900">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Heading - Highly Professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-32"
        >
          <h3 className="text-[10px] text-yellow-600 tracking-[0.5em] uppercase mb-5 font-bold">
            The Portfolio
          </h3>
          <h2 className="text-5xl text-white md:text-7xl font-serif leading-tight">
            Curated <span className="italic">Creations.</span>
          </h2>
        </motion.div>
        
        {/* Highly Advanced Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "circOut" }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group cursor-pointer aspect-auto ${item.span || 'md:col-span-1 md:row-span-1'}`}
            >
              {/* Luxury Minimalist Overlay */}
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-all duration-700 z-10" />
              
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
              />
              
              {/* Decorative Label on Hover - Left Side */}
              <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] text-white tracking-[0.3em] uppercase font-bold border-l-2 border-yellow-600 pl-4">
                  {item.alt}
                </p>
              </div>

              {/* Added: Visual Corner Frame - Right Side */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-neutral-700 group-hover:border-yellow-600 transition-colors z-20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}