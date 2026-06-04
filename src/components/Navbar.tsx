'use client';

import { useState } from 'react';

export default function Navbar() {
  // Mobile menu open/close karne ki state
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links ka data
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact US', href: '#contact' },
  ];

  // Smooth scroll function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Mobile menu close karne ke liye
  };

  return (
    // PREMIUM DARK GLASSY BASE (Matching with Hero Section Background)
    <nav className="fixed top-0 left-0 w-full bg-[#0D1B2A]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-50 transition-all duration-300">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-16 md:h-20 2xl:h-24">
          
          {/* LOGO SECTION (Clean White & Blue Accent) */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span className="text-blue-500">HRD</span> Institute
            </a>
          </div>

          {/* DESKTOP NAV ITEMS (Premium Silver links with Ice-Blue hover) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-300 hover:text-blue-400 font-semibold transition-all duration-200 lg:text-base xl:text-lg 2xl:text-xl tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* DESKTOP CTA BUTTON (Blue with Smooth White Background Slide on Hover) */}
          <div className="hidden lg:block">
            <button className="group relative flex items-center justify-center font-extrabold uppercase transition-all duration-300 rounded-xl border-2 border-blue-600 bg-blue-600 text-white overflow-hidden lg:px-5 lg:py-2.5 lg:text-sm xl:px-6 xl:py-3 xl:text-base 2xl:px-8 2xl:py-4 2xl:text-lg shadow-lg cursor-pointer transform hover:-translate-y-0.5">
              {/* Sliding background color panel */}
              <span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out z-0"></span>
              
              {/* Button text */}
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Enroll Now
              </span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-blue-400 focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV MENU (Dark Blue Premium Dropdown) */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 border-t border-white/5 bg-[#0D1B2A]/95 backdrop-blur-2xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-3 pb-8 space-y-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block text-gray-300 hover:text-blue-400 font-semibold py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-base sm:text-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5">
            {/* Mobile Fallback Button for easy touch integration */}
            <button className="w-full bg-blue-600 hover:bg-white border-2 border-blue-600 text-white hover:text-blue-600 font-extrabold uppercase py-3.5 px-4 rounded-xl text-base sm:text-lg shadow-lg transition-all duration-300">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}