"use client";
import { motion } from "framer-motion";
import { BarChart3, Package, ShieldCheck, Zap } from "lucide-react";

export default function Inventory() {
  const metrics = [
    { label: "Total Stock", value: "120+", unit: "Metric Tons", icon: Package },
    { label: "Quality Grade", value: "1 & 2", unit: "Certified", icon: ShieldCheck },
    { label: "Storage", value: "Controlled", unit: "Climate-Locked", icon: Zap },
    { label: "Availability", value: "Ready", unit: "For Shipment", icon: BarChart3 },
  ];

  return (
    <section id="inventory" className="py-32 bg-[#111827] text-white px-8 md:px-20 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-yellow-600 mb-4">Trade Capability</h3>
          <h2 className="text-4xl md:text-5xl font-serif">Inventory & Technical Specs</h2>
        </div>

        {/* The Trade Ledger Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-neutral-900 border border-neutral-800 hover:border-yellow-600 transition-colors"
            >
              <item.icon className="w-6 h-6 text-yellow-600 mb-6" />
              <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-2">{item.label}</p>
              <h3 className="text-3xl font-serif mb-1">{item.value}</h3>
              <p className="text-xs text-neutral-400 font-light">{item.unit}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs Callout */}
        <div className="mt-12 p-10 border border-neutral-800 bg-neutral-950 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-xl font-medium mb-1">Looking for a specific moisture content or bean size?</h4>
            <p className="text-neutral-400 text-sm">Download our full technical inspection sheet for Grade 1 cocoa beans.</p>
          </div>
          <button className="bg-white text-black px-8 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-yellow-600 transition-colors">
            Download Spec Sheet
          </button>
        </div>
      </div>
    </section>
  );
}