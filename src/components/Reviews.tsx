"use client";
import { useState } from "react";
import { Play, MessageSquare } from "lucide-react";

export default function StudentReviews() {
  // 🛠️ LINE HERE: Isko yahan sabsay upar add kiya hai
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const students = [
    { name: "FIZAA", role: "WordPress Engineer", videoId: "q9Xa9RR6mBM" },
    { name: "Fatima", role: "SEO Strategy Lead", videoId: "GAXdDDqVYtc" },
    { name: "HAYAT", role: "Fullstack Web Dev", videoId: "YtxNZG8aS2E" },
    { name: "Ali", role: "Custom Theme Specialist", videoId: "3Gg3rAfRgLA" },
    { name: "M HARIS", role: "Technical SEO Expert", videoId: "buTpBRJkab0" },
    { name: "Hamza", role: "UI/UX Specialist", videoId: "flnf09DQyeo" },
    { name: "USMAN", role: "Digital Marketer", videoId: "lZbdNfodmhQ" }
  ];

  return (
    <section className="relative w-full bg-[#111827] overflow-hidden py-16 md:py-24 border-t border-white/5">
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto px-6 w-full space-y-12">
        
        {/* 🏷️ HEADER SECTION */}
        <div className="space-y-3 border-b border-white/5 pb-8">
          <h2 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] font-black leading-[1.05] tracking-tighter text-white uppercase font-sans">
            THE 15,000+ {" "}
            <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              POWER
            </span>
          </h2>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-12 h-[2px] bg-[#FFC71E]" />
            <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-[2px] font-mono">
              SHOWCASING OUR ELITE GRADUATES
            </p>
          </div>
        </div>

        {/* 📹 IN-BOX INLINE VIDEO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 pt-4">
          {students.map((student, idx) => {
            const isVideoPlaying = playingIndex === idx;
            const thumbUrl = `https://img.youtube.com/vi/${student.videoId}/0.jpg`;

            return (
              <button 
                key={student.videoId} 
                type="button"
                onClick={() => setPlayingIndex(idx)}
                className="group relative aspect-square w-full text-left rounded-xl overflow-hidden border border-white/10 bg-black shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-end cursor-pointer p-0"
              >
                {isVideoPlaying ? (
                  <div className="absolute inset-0 w-full h-full bg-[#030303]">
                    <iframe
                      src={`https://www.youtube.com/embed/${student.videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                      title={student.name}
                      className="w-full h-full object-contain" 
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <>
                    <img 
                      src={thumbUrl} 
                      alt={student.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 z-0"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <div className="w-11 h-11 rounded-full bg-[#FFC71E] text-[#030303] flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Play size={14} className="fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="relative z-20 space-y-1 p-4 w-full text-left">
                      <div className="inline-block bg-white text-black font-black font-sans text-[10px] tracking-wide px-2 py-0.5 uppercase shadow-md">
                        {student.name}
                      </div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider pl-0.5">
                        {student.role}
                      </p>
                    </div>

                    <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-1.5 rounded-lg text-white/60 group-hover:text-blue-400 transition-colors">
                      <MessageSquare size={12} />
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}