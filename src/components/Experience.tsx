"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 – Present",
    role: "Bakery Demi Chef de partie",
    company: "W Dubai - The Palm",
    tasks: ["Leading artisanal pastry production.", "Ensuring strict HACCP food safety.", "Mentoring junior chefs."]
  },
  {
    period: "2021 – 2025",
    role: "Bakery Chef Commi 1",
    company: "One&Only Resorts",
    tasks: ["Managed production of premium lamination.", "Collaborated with Executive Chefs.", "Maintained 100% health & safety."]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-32 bg-[#e5e5e5] text-neutral-900 border-t border-neutral-300">
      <div className="max-w-6xl mx-auto px-8">
<h2 className="text-3xl md:text-5xl text-black tracking-tight uppercase mb-20 text-center font-serif font-bold">
  Professional <span className="text-yellow-700 italic">Trajectory.</span>
</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#d4d4d4]/60 p-10 border-l-4 border-yellow-700 hover:bg-[#d4d4d4] transition-all duration-500"
            >
              <div className="grid md:grid-cols-[250px,1fr] gap-8 items-start">
                {/* Period - Dark Grey Contrast */}
                <div className="text-neutral-600 font-mono text-[11px] uppercase tracking-widest pt-1">
                  {exp.period}
                </div>

                {/* Content - High Readability */}
                <div className="space-y-4">
                  <h4 className="text-3xl font-serif text-neutral-950">{exp.role}</h4>
                  <p className="text-yellow-800 font-bold tracking-[0.2em] text-[10px] uppercase">
                    {exp.company}
                  </p>
                  <ul className="space-y-3 text-neutral-700 text-sm leading-relaxed max-w-2xl font-light">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="flex gap-4 items-start">
                        <span className="text-yellow-700 mt-1.5">▪</span> 
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}