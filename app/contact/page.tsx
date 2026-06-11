"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, MessageCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/src/components/lib/supabase";

export default function StudentEnrollmentForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    course: "",
    fullName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    city: "",
    age: "",
    gender: "Male",
    password: "",
    address: "",
    agree: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) return alert("Kindly accept the terms and conditions.");
    if (!formData.course) return alert("Please select your desired course path.");

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      const userUUID = authData?.user?.id;

      if (userUUID) {
        const { error: profileError } = await supabase.from("profiles").insert({
          id: userUUID,
          full_name: formData.fullName,
          father_name: formData.fatherName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          city: formData.city,
          age: parseInt(formData.age) || 18,
          gender: formData.gender,
          address: formData.address,
          course_slug: formData.course,
          fee_status: "Unpaid", 
          role: "student"
        });

        if (profileError) throw profileError;

        const { error: enrollError } = await supabase.from("enrollments").insert({
          student_id: userUUID,
          course_id: formData.course === "wordpress-seo" ? 1 : formData.course === "fullstack-dev" ? 2 : 3,
          progress: 0
        });

        if (enrollError) throw enrollError;

        setSubmitted(true);
      }
    } catch (error: any) {
      alert(`Registration Mismatch Error: ${error.message || "Connection Interrupted"}`);
    } finally {
      setLoading(false);
    }
  };

  const sendWhatsAppReceipt = () => {
    const adminWhatsAppNumber = "923001234567"; 
    const structuredText = `🚨 *NEW HRD LMS ENROLLMENT* 🚨%0A%0A*Name:* ${formData.fullName}%0A*Father Name:* ${formData.fatherName}%0A*Course:* ${formData.course.toUpperCase()}%0A*Phone:* ${formData.phoneNumber}%0A%0A_Maine form register kar diya hai. Kindly meri fee verify karke mera dashboard account status unlock/approve kar dein. Fee screenshot neeche attached hai:_`;

    window.open(`https://api.whatsapp.com/send?phone=${adminWhatsAppNumber}&text=${structuredText}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] flex flex-col lg:flex-row font-sans pt-20 sm:pt-24 lg:pt-0 selection:bg-[#7bc143] selection:text-white relative overflow-hidden">

      {/* 🔵 LEFT SIDE: MARKETING BANNER */}
      <section className="w-full lg:w-[42%] bg-gradient-to-br from-[#030712] via-[#09152e] to-[#021b3a] text-white p-8 sm:p-12 lg:p-16 lg:pt-28 flex flex-col justify-between relative min-h-[750px] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
        
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00f2ff]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-2 max-w-[240px] relative z-10">
          <div className="bg-black/60 backdrop-blur-xl text-white p-3 rounded-2xl flex items-center gap-2.5 border border-white/10 shadow-2xl">
            <div className="bg-gradient-to-r from-[#00f2ff] to-[#0070ff] text-black font-black px-2 py-0.5 rounded-lg text-[10px] tracking-tight uppercase shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              LMS Live
            </div>
            <div className="text-[10px] uppercase font-black tracking-widest leading-none text-white">
              HRD SKILLS <br />
              <span className="text-[9px] font-bold text-zinc-400 tracking-normal">ADMISSIONS 2026</span>
            </div>
          </div>
        </div>

        <div className="my-auto py-10 lg:py-6 space-y-8 max-w-xl relative z-10">
          <div className="space-y-4">
            <div className="w-16 h-[4px] bg-[#00f2ff] rounded-full shadow-[0_0_15px_rgba(0,242,255,0.6)]" />
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tighter uppercase leading-[1.02] text-white">
              LMS REGISTRATION <br />
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#00a2ff] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-sm">
                START LEARNING
              </span> <br /> 📚💡
            </h1>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-400 max-w-md border-l-2 border-[#00f2ff] pl-4">
              Create your secure industrial account to access top-tier frameworks, monitor milestones, and lock elite freelancing career paths.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-zinc-950/40 backdrop-blur-md border border-white/5 p-4 rounded-xl space-y-1 hover:border-[#00f2ff]/40 hover:shadow-[0_0_20px_rgba(0,242,255,0.05)] transition-all duration-300 group cursor-pointer">
              <span className="text-lg">🎯</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wide group-hover:text-[#00f2ff] transition-colors">Live Projects</h4>
              <p className="text-[10px] text-zinc-400 font-medium leading-tight">Hand-on practical portfolio building labs.</p>
            </div>

            <div className="bg-zinc-950/40 backdrop-blur-md border border-white/5 p-4 rounded-xl space-y-1 hover:border-[#00f2ff]/40 hover:shadow-[0_0_20px_rgba(0,242,255,0.05)] transition-all duration-300 group cursor-pointer">
              <span className="text-lg">💰</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wide group-hover:text-[#00f2ff] transition-colors">Earning Path</h4>
              <p className="text-[10px] text-zinc-400 font-medium leading-tight">Advanced monetization masterclasses blueprint.</p>
            </div>

            <div className="bg-zinc-950/40 backdrop-blur-md border border-white/5 p-4 rounded-xl space-y-1 hover:border-[#00f2ff]/40 hover:shadow-[0_0_20px_rgba(0,242,255,0.05)] transition-all duration-300 group cursor-pointer">
              <span className="text-lg">🔥</span>
              <h4 className="text-xs font-black text-white uppercase tracking-wide group-hover:text-[#00f2ff] transition-colors">1-1 Support</h4>
              <p className="text-[10px] text-zinc-400 font-medium leading-tight">Dedicated server support channels with experts.</p>
            </div>
          </div>

          <div className="pt-4 flex items-start gap-3 bg-zinc-950/20 border border-white/5 p-4 rounded-xl max-w-md">
            <div className="w-8 h-8 rounded-lg bg-[#00f2ff]/10 flex items-center justify-center text-[#00f2ff] shrink-0 border border-[#00f2ff]/20 shadow-[0_0_10px_rgba(0,242,255,0.1)]">
              📍
            </div>
            <div className="space-y-0.5">
              <h5 className="text-[11px] font-black uppercase text-white tracking-wider">Headquarters Location</h5>
              <p className="text-xs font-bold text-zinc-400 leading-tight">
                HRD Institute, Multan, Pakistan.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-10 w-full sm:w-auto justify-center sm:justify-start">
          <div className="flex items-center gap-4 text-left bg-transparent p-0">
            <div className="flex -space-x-3.5 items-center isolation-auto">
              {[
                "https://images.unsplash.com/photo-1669804227127-0876cb0f5474?w=500&auto=format&fit=crop&q=60",
                "https://plus.unsplash.com/premium_photo-1682096108814-b53765f48ba5?w=700&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1647151481397-95e581943ac1?w=700&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1599842057874-37393e9342df?w=700&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1711374316403-2bfa31ae9c2a?w=700&auto=format&fit=crop&q=60"
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="w-9 h-9 rounded-full border-2 border-[#111827] ring-1 ring-emerald-500/40 overflow-hidden bg-zinc-900 shrink-0 transform hover:scale-110 hover:z-10 transition-all duration-300"
                >
                  <img
                    src={src}
                    alt={`Student ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center leading-none">
              <h4 className="text-xl font-black text-white tracking-tight flex items-center gap-0.5 uppercase">
                150<span className="text-blue-500 font-black">+</span>
              </h4>
              <p className="text-[10px] text-white font-black uppercase tracking-widest mt-1.5 whitespace-nowrap">
                Students Trained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⚪ RIGHT SIDE: FORM / SUCCESS MATRIX */}
      <section className="w-full lg:w-[58%] bg-[#0b0f19] p-6 sm:p-12 lg:p-16 lg:pt-28 flex items-center relative border-t lg:border-t-0 border-white/5">
        <div className="w-full max-w-2xl mx-auto relative z-10">

          {submitted ? (
            <div className="border border-white/10 bg-[#0d1527] shadow-[0_20px_50px_rgba(0,242,255,0.05)] rounded-2xl p-8 md:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#00f2ff]/10 text-[#00f2ff] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,242,255,0.2)] border border-[#00f2ff]/30">
                <CheckCircle2 size={32} className="stroke-[2.5]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Form Registered Successfully!</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Aapka form portal ledger mein save ho chuka hai. Ab neeche diye gaye button par click karke admin ko WhatsApp par <strong className="text-[#00f2ff] font-bold">Fee Deposit Screenshot</strong> send karein taake aapka batch unlock kiya ja sake.
                </p>
              </div>
              
              <button
                type="button"
                onClick={sendWhatsAppReceipt}
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm uppercase tracking-[1.5px] shadow-[0_10px_30px_rgba(37,211,102,0.2)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageCircle size={18} fill="white" />
                Send Fee Screenshot via WhatsApp
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1 text-left border-l-[3px] border-[#00f2ff] pl-4 shadow-[inset_10px_0_10px_-10px_rgba(0,242,255,0.2)]">
                <span className="text-[10px] font-black uppercase tracking-[2.5px] text-[#00f2ff] block">New Admission</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase leading-none">Student Enrollment</h2>
              </div>

              <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl space-y-2 focus-within:border-[#00f2ff]/50 focus-within:shadow-[0_0_20px_rgba(0,242,255,0.05)] transition-all duration-300">
                <label className="text-[10px] font-black uppercase tracking-wider text-[#00f2ff] block">Select Desired Course</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-800 py-1.5 text-sm text-white font-bold focus:outline-none focus:border-[#00f2ff] transition-colors cursor-pointer"
                >
                  <option value="" className="bg-[#0b0f19] text-zinc-400">-- SELECT YOUR PATH --</option>
                  <option value="wordpress-seo" className="bg-[#0b0f19] text-white">WordPress Custom Architecture & Advanced SEO</option>
                  <option value="fullstack-dev" className="bg-[#0b0f19] text-white">Full-Stack Development with Live Projects</option>
                  <option value="global-freelancing" className="bg-[#0b0f19] text-white">Global Freelancing Blueprint Masterclass</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Full Name</label>
                  <input type="text" required placeholder="Enter full name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Father Name</label>
                  <input type="text" required placeholder="Enter father name" value={formData.fatherName} onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Email Address</label>
                  <input type="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Phone Number</label>
                  <input type="tel" required placeholder="03XXXXXXXXX" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">City</label>
                  <input type="text" required placeholder="e.g. Multan" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Age</label>
                  <input type="number" required placeholder="Your Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Gender</label>
                  <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white font-bold focus:outline-none focus:border-[#00f2ff]/60 transition-all duration-300 cursor-pointer">
                    <option value="Male" className="bg-[#0b0f19]">Male</option>
                    <option value="Female" className="bg-[#0b0f19]">Female</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Portal Security Password</label>
                <input type="password" required placeholder="Choose a strong password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">Residential Address</label>
                <textarea rows={2} required placeholder="Enter home address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full bg-zinc-900/30 border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white resize-none focus:outline-none focus:border-[#00f2ff]/60 focus:bg-zinc-900/50 transition-all duration-300" />
              </div>

              <label className="flex items-start gap-2.5 select-none cursor-pointer group">
                <input type="checkbox" checked={formData.agree} onChange={(e) => setFormData({ ...formData, agree: e.target.checked })} className="mt-1 accent-[#00f2ff]" />
                <span className="text-[11px] font-bold uppercase text-zinc-400 group-hover:text-zinc-300 transition-colors">I confirm details are correct and agree to terms.</span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="group relative overflow-hidden w-full flex items-center justify-center font-black text-xs uppercase tracking-[2px] h-[52px] px-6 rounded-xl bg-white text-black border border-white/10 shadow-lg transition-all duration-500 ease-out active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#0070ff] to-[#00f2ff] transition-all duration-500 ease-out group-hover:w-full" />
                
                <span className="relative z-10 flex items-center gap-1.5 group-hover:text-black transition-colors duration-500 ease-out">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={14} />
                      Processing...
                    </>
                  ) : (
                    <>
                      Confirm & Process Admission
                      <svg 
                        className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          )}

        </div>
      </section>
    </main>
  );
}