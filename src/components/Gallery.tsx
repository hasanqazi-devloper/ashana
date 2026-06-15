"use client";
import { motion } from "framer-motion";

const items = [
  { title: "Raw Origin", desc: "Farm-gate inspection", span: "md:col-span-2 row-span-2", src: "https://images.unsplash.com/photo-1730766450678-0eb806a39698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJ5aW5nJTIwY29jb2ElMjBiZWFuc3xlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Sun Drying", desc: "Precision fermentation", span: "md:col-span-2", src: "https://images.unsplash.com/photo-1507576164121-220762647800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jb2ElMjBmYXJtZXIlMjBoYW5kc3xlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Grade 1 Export", desc: "Warehouse ready", span: "md:col-span-1", src: "https://images.unsplash.com/photo-1626379907480-29d844d603ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1dGUlMjBiYWdzJTIwb2YlMjBjb2ZmZWUlMjBiZWFuc3xlbnwwfHwwfHx8MA%3D%3D" },
  { title: "Traceability", desc: "Quality standards", span: "md:col-span-1", src: "https://images.unsplash.com/photo-1630595600066-d2c219b7715e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lYXN1cmluZyUyMGNvY29hJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-[#0a0a0a] px-8 md:px-20">
      <div className="max-w-7xl mx-auto mb-16">
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-yellow-600 mb-4">Operations Portfolio</h3>
        <h2 className="text-4xl md:text-5xl font-serif text-white">The Industrial Lifecycle</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98 }}
            className={`relative overflow-hidden border border-neutral-800 group ${item.span}`}
          >
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.6] transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h4 className="text-2xl font-serif text-white mb-1">{item.title}</h4>
              <p className="text-[10px] uppercase tracking-widest text-yellow-600 font-bold">{item.desc}</p>
            </div>
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-yellow-600/30"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}