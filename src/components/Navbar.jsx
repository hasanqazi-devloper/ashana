"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ease-in-out ${
      isScrolled 
        ? "py-4 bg-[#0a0a0a]/70 backdrop-blur-2xl border-b border-white/5" 
        : "py-10 bg-transparent"
    }`}>
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold tracking-[0.2em] text-lg z-[110] relative">
          <span className="text-yellow-600">AS</span>AA.
        </h1>

        {/* Desktop Links - Hidden 'Hire Me' on scroll logic */}
        <div className="hidden md:flex items-center gap-12 text-[9px] uppercase tracking-[0.3em] font-medium text-neutral-400">
          {["about", "experience", "gallery", "contact"].map((link) => (
            <a key={link} href={`#${link}`} className="hover:text-yellow-600 transition-colors duration-300">
              {link}
            </a>
          ))}
          
          {/* Hire Me button disappears/fades on scroll if you want, or keep it static but premium */}
          <a href="#contact" className={`border border-neutral-800 px-6 py-2 hover:border-yellow-600 hover:text-yellow-600 transition-all duration-500 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-[110] flex flex-col justify-center gap-1.5 w-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`h-px bg-white transition-all ${isMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6"}`}></span>
          <span className={`h-px bg-white transition-all ${isMenuOpen ? "w-0" : "w-4"}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center gap-10 transition-all duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          {["about", "experience", "gallery", "contact"].map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif uppercase tracking-widest hover:text-yellow-600">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}