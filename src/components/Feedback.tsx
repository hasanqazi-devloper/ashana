"use client";
import { Star, ThumbsUp, MessageSquare, Share2, MoreHorizontal } from "lucide-react";

export default function StudentFeedback() {
  // Exact high-fidelity feedback data matching matching UI structures
  const feedbacks = [
    {
      name: "Urooj Irshad",
      date: "October 22, 2025",
      text: "Skill Education Institute provides a professional and supportive learning environment. The courses are well structured and focused on practical skills that truly help in career development. The instructors are knowledgeable and always available for guidance.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "M Bilal",
      date: "November 10, 2025",
      text: "Mash'Allah! Highly recommended ecosystem. Excellent teaching methodology by Sir Umair Farooq. Very clear explanations on complex technical architecture layouts.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Muhammad Asif Abdullah Qadri",
      date: "November 28, 2025",
      text: "Till yet class going extra ordinary special training style of Sir Umair Farooq! Real-world enterprise pipelines are covered step by step without skipping critical production configurations.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Mohsin Hussain Malak",
      date: "December 04, 2025",
      text: "I have been learning WordPress & SEO Optimization at Skills Education for the past two months, and my experience has been exceptional! The instructors are highly knowledgeable, friendly, and always ready to help.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Faiqa Khan",
      date: "October 18, 2025",
      text: "SkillsEducation.pk has matched my expectations! These courses are not only basic but also provide extensive practical data. I've learned a lot to bootstrap my custom freelancing agency career.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Usman Hashmi",
      date: "September 15, 2025",
      text: "At first, I thought theory classes would be boring, but the coding legacy is premium here! Every single day is packed with practical tasks and custom live case studies. Highly recommended to everyone!",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section id="feedback" className="relative w-full bg-[#111827] overflow-hidden py-16 md:py-24 border-t border-white/5">
      
      {/* 🏷️ HEADER SECTION: EXACT MATCH TO APKI SNAPSHOT */}
      <div className="text-center space-y-2 pb-12">
        {/* <p className="text-[10px] md:text-xs font-black text-[#10B981] uppercase tracking-[3px] font-mono">
          OUR PRIDE
        </p> */}
        <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-black leading-none tracking-tighter text-white   font-sans">
          STUDENT {" "}
          <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">FEEDBACK</span>
        </h2>
        {/* Underline matching screenshot style precisely */}
        <div className="w-16 h-[3px] bg-[#FFC71E] mx-auto mt-3 rounded-full" />
      </div>

      {/* 🔄 INFINITE ROW SCROLLER CONTAINER */}
      <div className="relative w-full flex items-center overflow-x-hidden group py-4">
        {/* Fade Left Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
        {/* Fade Right Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

        {/* Dynamic Infinite Track Loop (Runs Twice for Seamless Continuity) */}
        <div className="flex gap-4 animate-marquee whitespace-nowrap min-w-full will-change-transform group-hover:[animation-play-state:paused]">
          {[...feedbacks, ...feedbacks].map((card, idx) => (
            <div 
              key={idx}
              className="inline-block w-[300px] sm:w-[360px] bg-[#0c0c0e] border border-white/5 rounded-xl p-4 shadow-2xl whitespace-normal select-none flex-shrink-0"
            >
              {/* Card Meta Header Layer */}
              <div className="flex items-start justify-between gap-3 w-full">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={card.avatar} 
                    alt={card.name} 
                    className="w-9 h-9 rounded-full object-cover border border-white/10"
                  />
                  <div className="leading-tight">
                    <h4 className="text-[12px] font-bold text-zinc-200 tracking-tight flex items-center gap-1">
                      {card.name}
                    </h4>
                    <p className="text-[9px] text-zinc-500 font-medium mt-0.5">{card.date}</p>
                  </div>
                </div>
                <MoreHorizontal size={14} className="text-zinc-600 cursor-pointer hover:text-zinc-400" />
              </div>

              {/* Stars Badge Block */}
              <div className="flex items-center gap-0.5 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-[#FFC71E] text-[#FFC71E]" />
                ))}
              </div>

              {/* Feed Text content */}
              <p className="text-zinc-400 text-xs font-normal leading-relaxed pt-2.5 border-b border-white/[0.03] pb-3 min-h-[90px]">
                "{card.text}"
              </p>

              {/* Interactive Toolbar Footer Layers */}
              <div className="flex items-center justify-between text-zinc-600 text-[10px] font-bold pt-2.5 px-0.5">
                <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                  <ThumbsUp size={12} /> Like
                </button>
                <button className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors">
                  <MessageSquare size={12} /> Comment
                </button>
                <button className="flex items-center gap-1.5 hover:text-purple-500 transition-colors">
                  <Share2 size={12} /> Share
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Global CSS Styles injected dynamically for smooth performance layout handles */}
      <style jsx global>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}