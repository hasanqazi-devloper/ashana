"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#111827] text-white px-8 md:px-20 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-yellow-600 mb-6">Partnership Inquiry</h3>
          <h2 className="text-4xl md:text-6xl font-serif">Ready to align with SHC Agro?</h2>
          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            Direct sourcing, Grade 1 quality, and traceable cocoa supply. Let’s discuss your procurement needs.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Direct Email */}
          <a 
            href="mailto:shcagroalliedltd@gmail.com"
            className="group p-12 border border-neutral-800 hover:border-yellow-600 transition-all duration-500 bg-neutral-900/30"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">Direct Correspondence</p>
            <h4 className="text-xl md:text-2xl font-medium group-hover:text-yellow-600 transition-colors">shcagroalliedltd@gmail.com</h4>
          </a>

          {/* LinkedIn Profile */}
          <a 
            href="https://www.linkedin.com/in/kenneth-ausaji-397323416" 
            target="_blank"
            className="group p-12 border border-neutral-800 hover:border-yellow-600 transition-all duration-500 bg-neutral-900/30"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">Professional Network</p>
            <h4 className="text-xl md:text-2xl font-medium group-hover:text-yellow-600 transition-colors">Kenneth Ausaji</h4>
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center border-t border-neutral-900 pt-12">
          <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600">
            SHC Agro Allied Ltd • Ikom, Cross River State, Nigeria • Registered Export Entity
          </p>
        </div>
      </div>
    </section>
  );
}