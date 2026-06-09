"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const awardLogos = [
  { src: "/ahrefs.png", alt: "Ahrefs" },
  { src: "/wp-partner.png", alt: "WordPress Partner" },
  { src: "/semrush.png", alt: "Semrush" },
  { src: "/shopify.png", alt: "Shopify" },
  { src: "/woocommerce-partner.png", alt: "WooCommerce Partner" },
  { src: "/HSN_white.png", alt: "HSN White" },
];

export default function HeroSlider() {
  const duplicated = [...awardLogos, ...awardLogos, ...awardLogos];

  return (
    <section className="relative py-4 md:py-5 2xl:py-5 bg-[#111827] overflow-hidden border-y border-white/5">

      {/* Side Fades: Ambient Edge Blending */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#111827] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#111827] to-transparent z-10 pointer-events-none" />

      {/* Track Wrapper (Height & Padding Synced with ClientTrust) */}
      <div className="w-full relative h-20 md:h-24 2xl:h-32 flex items-center overflow-hidden px-4 sm:px-6">
        <motion.div
          className="flex gap-4 md:gap-8 2xl:gap-16 w-max items-center"
          animate={{ x: ["0%", "-33.33%"] }} 
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity
          }}
          whileHover={{ transition: { duration: 50 } }}
        >
          {duplicated.map((logo, index) => (
            <div
              key={`award-logo-${index}`}
              className="relative flex items-center justify-center min-w-[120px] md:min-w-[150px] 2xl:min-w-[180px] group/logo select-none"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={60}
                className="h-8 md:h-9 2xl:h-10 w-auto object-contain transition-all duration-500 opacity-80 group-hover/logo:opacity-100 filter brightness-110 group-hover/logo:scale-105"
                sizes="(max-width: 768px) 120px, (max-width: 1536px) 150px, 180px"
              />

              {/* Soft Ambient Hover Indicator Glow */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500/0 group-hover/logo:bg-blue-500/40 blur-sm transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}