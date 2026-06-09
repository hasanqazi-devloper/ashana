"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please confirm details and agree to terms.");
      return;
    }
    setSubmitted(true);
  };

  return (
    // 🚀 pt-16 to pt-24 ensures nothing cuts under a fixed navbar on desktop or mobile
    <main className="min-h-screen bg-[#111827] flex flex-col lg:flex-row font-sans pt-20 sm:pt-24 lg:pt-0 selection:bg-[#7bc143] selection:text-white">
      
      {/* 🔵 LEFT SIDE: PREMIUM MARKETING & TRUST BANNER (Now Custom Blue Variant) */}
      <section className="w-full lg:w-[42%] bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#1e40af] text-white p-8 sm:p-12 lg:p-16 lg:pt-28 flex flex-col justify-between relative min-h-[550px] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-white/10">
        
        {/* Top Branding Header */}
        <div className="space-y-2 max-w-[220px]">
          <div className="bg-black text-white p-3 rounded-lg flex items-center gap-2 border border-white/10 shadow-lg">
            <div className="bg-amber-500 text-black font-black px-1.5 py-0.5 rounded text-xs tracking-tight">
              Skills
            </div>
            <div className="text-[10px] uppercase font-bold tracking-wider leading-none text-white">
              Skills Education <br />
              <span className="text-[9px] font-medium text-zinc-300">Enrollment 2026</span>
            </div>
          </div>
        </div>

        {/* Center Headline Section */}
        <div className="my-auto py-8 lg:py-6 space-y-6 max-w-md">
          <div className="w-12 h-[4px] bg-amber-500 rounded-full" />
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight uppercase leading-[1.1] text-white">
            LMS Registration <br />
            <span className="text-amber-400 drop-shadow-sm flex items-center gap-2">
              Start Learning 📚💡
            </span>
          </h1>
          <p className="text-sm lg:text-base font-semibold leading-relaxed text-zinc-100 max-w-sm border-l-2 border-amber-500 pl-4">
            Create your account to access courses, track your progress, and continue your learning journey 🚀✨
          </p>

          {/* 📍 CAMPUS & LOCATION QUICK CARDS */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {/* Card 1: Head Campus */}
            <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">Head Campus</span>
              </div>
              <p className="text-xs font-black text-white mt-1.5 uppercase tracking-wide">Multan Development Block</p>
              <p className="text-[11px] text-zinc-300 font-medium mt-0.5">Punjab, Pakistan</p>
            </div>

            {/* Card 2: Support Desk */}
            <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider text-zinc-300">Support Pipeline</span>
              </div>
              <p className="text-xs font-black text-white mt-1.5 uppercase tracking-wide">Live Student Desk</p>
              <p className="text-[11px] text-zinc-300 font-medium mt-0.5">Response Within 24 Hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Student Social Proof Group */}
        <div className="pt-6 flex items-center gap-3 border-t border-white/10">
          {/* Avatar Stack Cluster */}
          <div className="flex -space-x-2.5 overflow-hidden">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop"
            ].map((img, i) => (
              <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-700 overflow-hidden relative bg-zinc-800">
                <img src={img} alt="Scholar Stack" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <span className="text-[10px] font-black tracking-widest text-zinc-300 uppercase block leading-none">Global Community</span>
            <span className="text-sm font-black text-white tracking-tight mt-0.5 block">30,000+ SCHOLARS</span>
          </div>
        </div>

      </section>

      {/* ⚪ RIGHT SIDE: PRODUCTION SECURE STUDENT ENROLLMENT FORM */}
      {/* lg:pt-28 padding adds uniform dynamic breathing space below custom Nav elements */}
      <section className="w-full lg:w-[58%] bg-[#111827] p-6 sm:p-12 lg:p-16 lg:pt-28 flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          
          {submitted ? (
            <div className="border border-zinc-800 bg-[#1f2937] shadow-2xl rounded-2xl p-8 md:p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#7bc143]/10 text-[#7bc143] flex items-center justify-center mx-auto shadow-sm">
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
              
              {/* Form Title Block */}
              <div className="space-y-1 text-left border-l-[3px] border-[#7bc143] pl-4">
                <span className="text-[10px] font-black uppercase tracking-[2.5px] text-[#7bc143] block">New Admission</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase leading-none">Student Enrollment</h2>
                <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-400 pt-0.5">Please provide accurate details for your LMS ID</p>
              </div>

              {/* Course Selector Dropdown Box */}
              <div className="p-4 bg-[#1f2937] border border-zinc-800 rounded-lg space-y-2 shadow-inner">
                <label className="text-[10px] font-black uppercase tracking-wider text-[#7bc143] block">Select Desired Course</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-transparent border-b border-zinc-700 py-1.5 text-sm text-white font-bold focus:outline-none focus:border-[#7bc143] transition-colors [&>option]:bg-[#1f2937] [&>option]:text-white"
                >
                  <option value="">-- SELECT YOUR PATH --</option>
                  <option value="wordpress-seo">WordPress Custom Architecture & Advanced SEO</option>
                  <option value="fullstack-dev">Full-Stack Development with Live Projects</option>
                  <option value="global-freelancing">Global Freelancing Blueprint Masterclass</option>
                </select>
              </div>

              {/* Main Fields Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Full Name</label>
                  <input
                    type="text" required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  />
                </div>

                {/* Father Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Father Name</label>
                  <input
                    type="text" required
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Email Address</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Phone Number</label>
                  <input
                    type="tel" required
                    placeholder="e.g. 03276381819"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  />
                </div>

                {/* CNIC / B-FORM */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">CNIC / B-Form</label>
                  <input
                    type="text" required
                    placeholder="36302-XXXXXXX-X"
                    value={formData.cnic}
                    onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  />
                </div>

                {/* City */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">City</label>
                  <input
                    type="text" required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  />
                </div>

                {/* Age */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Age</label>
                  <input
                    type="number" required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  />
                </div>

                {/* Gender Dropdown */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-bold text-white focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Security Password</label>
                <input
                  type="password" required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all"
                />
              </div>

              {/* Residential Address */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block pl-0.5">Residential Address</label>
                <textarea
                  rows={2} required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#1f2937] border border-zinc-800 rounded px-4 py-2.5 text-sm font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-[#253246] transition-all resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-2.5 select-none group cursor-pointer text-left">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-1 accent-[#7bc143] h-3.5 w-3.5"
                />
                <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  I confirm details are correct and agree to the{" "}
                  <Link href="#terms" className="text-[#7bc143] underline underline-offset-2">
                    Terms & Conditions
                  </Link>.
                </span>
              </label>

              {/* Form Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded bg-[#1f2937] border border-zinc-800 text-zinc-300 font-black text-xs uppercase tracking-[2px] hover:bg-[#7bc143] hover:text-white hover:border-[#7bc143] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99] shadow-sm cursor-pointer"
                >
                  Confirm Registration
                  <ArrowRight size={13} className="stroke-[3]" />
                </button>
              </div>

              {/* Switch to Login Link */}
              <div className="text-center pt-2">
                <p className="text-[11px] font-bold tracking-wide text-zinc-400 uppercase">
                  Already a Student?{" "}
                  <Link href="#login" className="text-[#7bc143] hover:underline font-black">
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