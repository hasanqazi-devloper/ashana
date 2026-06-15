"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Agar error aaye toh ye line hata dena

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["process", "inventory", "gallery", "contact"];

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-6">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white font-bold tracking-[0.3em] cursor-pointer text-lg">
          SHC<span className="text-yellow-600">AGRO</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[9px] uppercase tracking-[0.3em] text-neutral-400">
          {links.map(l => (
            <a key={l} href={`#${l}`} className="hover:text-yellow-600 transition-colors">{l}</a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-8 flex flex-col gap-6 text-center md:hidden">
          {links.map(l => (
            <a 
              key={l} 
              href={`#${l}`} 
              className="text-[12px] uppercase tracking-[0.3em] text-white hover:text-yellow-600"
              onClick={() => setIsOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}