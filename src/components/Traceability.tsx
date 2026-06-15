"use client";
import { motion } from "framer-motion";
import { Sprout, Flame, Scale, Warehouse } from "lucide-react";

const steps = [
  { icon: Sprout, title: "Direct Sourcing", desc: "Farm-gate procurement from Cross River estates." },
  { icon: Flame, title: "Precision Fermentation", desc: "Controlled moisture & heat management." },
  { icon: Scale, title: "Quality Grading", desc: "Strict separation of Grade 1 & 2 standards." },
  { icon: Warehouse, title: "Logistics", desc: "Warehouse storage & port-ready handling." },
];

export default function Traceability() {
  return (
    <section id="process" className="py-32 bg-[#0a0a0a] text-white px-8 md:px-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-yellow-600 mb-4">The Provenance Module</h3>
          <h2 className="text-4xl md:text-5xl font-serif">End-to-End Chain Transparency</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group p-8 border border-neutral-800 bg-[#1E2939] hover:border-yellow-700/50 transition-all duration-500"
            >
              <div className="mb-8">
                <step.icon className="w-8 h-8 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-5xl text-white font-serif font-bold">0{i + 1}</span>
              </div>
              <h3 className="text-xl mb-3 font-medium">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}