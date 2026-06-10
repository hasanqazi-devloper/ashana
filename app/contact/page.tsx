"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function StudentEnrollmentForm() {
  // 🛠️ FIX: Yeh teenon states function ke start mein lazmi honi chahiye
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    course: "",
    fullName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    cnic: "",
    city: "",
    age: "",
    gender: "Male",
    password: "",
    address: "",
    agree: false,
  });

  // Ab is function par koi error nahi asakta
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agree) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] flex flex-col lg:flex-row font-sans pt-20 sm:pt-24 lg:pt-0 selection:bg-[#7bc143] selection:text-white relative overflow-hidden">

      {/* 🔵 LEFT SIDE: PREMIUM MARKETING & TRUST BANNER */}
      <section className="w-full lg:w-[42%] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8] text-white p-8 sm:p-12 lg:p-16 lg:pt-28 flex flex-col justify-between relative min-h-[550px] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-2 max-w-[220px] relative z-10">
          <div className="bg-black/40 backdrop-blur-md text-white p-3 rounded-xl flex items-center gap-2 border border-white/10 shadow-2xl">
            <div className="bg-amber-500 text-black font-black px-1.5 py-0.5 rounded text-xs tracking-tight">
              Skills
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider leading-none text-white">
              Skills Education <br />
              <span className="text-[9px] font-medium text-zinc-400">Enrollment 2026</span>
            </div>
          </div>
        </div>

        <div className="my-auto py-8 lg:py-6 space-y-6 max-w-md relative z-10">
          <div className="w-12 h-[4px] bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight uppercase leading-[1.1] text-white">
            LMS Registration <br />
            <span className="text-amber-400 drop-shadow-md flex items-center gap-2">
              Start Learning 📚💡
            </span>
          </h1>
          <p className="text-sm lg:text-base font-medium leading-relaxed text-zinc-200 max-w-sm border-l-2 border-amber-500 pl-4">
            Create your account to access courses, track your progress, and continue your learning journey 🚀✨
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 backdrop-blur-md shadow-xl transition-all hover:border-amber-500/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">Head Campus</span>
              </div>
              <p className="text-xs font-black text-white mt-1.5 uppercase tracking-wide">Multan Development Block</p>
              <p className="text-[11px] text-zinc-400 font-medium mt-0.5">Punjab, Pakistan</p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 backdrop-blur-md shadow-xl transition-all hover:border-white/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Support Pipeline</span>
              </div>
              <p className="text-xs font-black text-white mt-1.5 uppercase tracking-wide">Live Student Desk</p>
              <p className="text-[11px] text-zinc-400 font-medium mt-0.5">Response Within 24 Hours</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex items-center gap-3 border-t border-white/10 relative z-10">
          <div className="flex -space-x-2.5 overflow-hidden">
            {[
              "https://images.unsplash.com/photo-1669804227127-0876cb0f5474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1682096108814-b53765f48ba5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
              "https://images.unsplash.com/photo-1647151481397-95e581943ac1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFraXN0YW5pJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",
              "https://images.unsplash.com/photo-1599842057874-37393e9342df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBha2lzdGFuaSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
              "https://images.unsplash.com/photo-1711374316403-2bfa31ae9c2a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFuaSUyMGJveXN8ZW58MHx8MHx8fDA%3D"
            ].map((img, i) => (
              <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-900 overflow-hidden relative bg-zinc-800">
                <img src={img} alt="Scholar Stack" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block leading-none">Global Community</span>
            <span className="text-sm font-black text-white tracking-tight mt-0.5 block">30,000+ SCHOLARS</span>
          </div>
        </div>
      </section>

      {/* ⚪ RIGHT SIDE: PRODUCTION SECURE STUDENT ENROLLMENT FORM */}
      <section className="w-full lg:w-[58%] bg-[#0d1220] p-6 sm:p-12 lg:p-16 lg:pt-28 flex items-center relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#7bc143]/[0.02] blur-[130px] rounded-full pointer-events-none" />

        <div className="w-full max-w-2xl mx-auto relative z-10">

          {submitted ? (
            <div className="border border-zinc-800 bg-[#131a2b] shadow-2xl rounded-2xl p-8 md:p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#7bc143]/10 text-[#7bc143] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={32} className="stroke-[2.5]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Registration Transmitted</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed font-medium">
                  Your LMS registration details have been securely deployed. Check your dashboard for activation.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="space-y-1 text-left border-l-[3px] border-[#7bc143] pl-4">
                <span className="text-[10px] font-black uppercase tracking-[2.5px] text-[#7bc143] block">New Admission</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase leading-none">Student Enrollment</h2>
                <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-400 pt-0.5">Please provide accurate details for your LMS ID</p>
              </div>

              <div className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-xl space-y-2 shadow-2xl backdrop-blur-md">
                <label className="text-[10px] font-black uppercase tracking-wider text-[#7bc143] block">Select Desired Course</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-700 py-1.5 text-sm text-white font-bold focus:outline-none focus:border-[#7bc143] transition-colors cursor-pointer [&>option]:bg-[#111625] [&>option]:text-white"
                >
                  <option value="">-- SELECT YOUR PATH --</option>
                  <option value="wordpress-seo">WordPress Custom Architecture & Advanced SEO</option>
                  <option value="fullstack-dev">Full-Stack Development with Live Projects</option>
                  <option value="global-freelancing">Global Freelancing Blueprint Masterclass</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Full Name</label>
                  <input
                    type="text" required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Father Name</label>
                  <input
                    type="text" required
                    placeholder="Enter father name"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Email Address</label>
                  <input
                    type="email" required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Phone Number</label>
                  <input
                    type="tel" required
                    placeholder="03XXXXXXXXX"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">CNIC / B-Form</label>
                  <input
                    type="text" required
                    placeholder="36302-XXXXXXX-X"
                    value={formData.cnic}
                    onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">City</label>
                  <input
                    type="text" required
                    placeholder="e.g. Multan"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Age</label>
                  <input
                    type="number" required
                    placeholder="Your Age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] transition-all cursor-pointer [&>option]:bg-[#111625]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Security Password</label>
                <input
                  type="password" required
                  placeholder="Choose a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Residential Address</label>
                <textarea
                  rows={2} required
                  placeholder="Enter complete current home address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-zinc-900/40 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm font-semibold text-white placeholder-white/90 focus:outline-none focus:border-[#7bc143]/60 focus:bg-[#151d30] focus:shadow-[0_0_15px_rgba(123,193,67,0.1)] transition-all resize-none"
                />
              </div>

              <label className="flex items-start gap-2.5 select-none group cursor-pointer text-left">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-1 accent-[#7bc143] h-3.5 w-3.5 cursor-pointer"
                />
                <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  I confirm details are correct and agree to the{" "}
                  <Link href="/terms" className="text-[#7bc143] underline underline-offset-2 hover:text-[#8cd153]">
                    Terms & Conditions
                  </Link>.
                </span>
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 text-zinc-300 font-black text-xs uppercase tracking-[2px] hover:from-[#7bc143] hover:to-[#6baa3a] hover:text-white hover:border-[#7bc143] hover:shadow-[0_0_25px_rgba(123,193,67,0.25)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                >
                  Confirm Registration
                  <ArrowRight size={13} className="stroke-[3]" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] font-bold tracking-wide text-zinc-400 uppercase">
                  Already a Student?{" "}
                  <Link href="#login" className="text-[#7bc143] hover:text-[#8cd153] hover:underline font-black transition-colors">
                    Login Here
                  </Link>
                </p>
              </div>

            </form>
          )}

        </div>
      </section>

    </main>
  );
}