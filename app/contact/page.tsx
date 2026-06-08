"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, MessageSquare, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  
  // 🛠️ Step 1: Form ki fields ko track karne ke liye State banayi
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 🛠️ Step 2: Official Phone Number aur Message Setup kiya
    const phoneNumber = "923276381819"; // Aapka contact number bina "+" sign ke
    
    // WhatsApp par message bhejte waqt text ko clean aur structured dikhane ke liye format banaya
    const whatsappMessage = `*🔥 NEW CONTACT INQUIRY - HRD INSTITUTE* \n\n` +
                            `👤 *Name:* ${formData.fullName}\n` +
                            `📧 *Email:* ${formData.email}\n` +
                            `🎯 *Subject:* ${formData.subject}\n\n` +
                            `📝 *Message:* \n${formData.message}`;

    // URL safe encoding taake spaces aur lines custom format mein crash na hon
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // 🛠️ Step 3: API Gateway banakar browser redirection trigger kiya
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#111827] text-zinc-400 pt-36 pb-20 px-6 selection:bg-blue-600">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* BACK TO HOME */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* HEADER */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Support Pipelines Live
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Connect With Us
          </h1>
          <p className="text-sm text-zinc-500 max-w-xl">
            Have questions about the WordPress & SEO Master Course or need LMS technical support? Drop a message down below.
          </p>
          <hr className="border-white/10 pt-4" />
        </div>

        {/* MAIN GRID CONTROL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          
          {/* LEFT COLUMN: DIRECT CONNECT INFO (5 COLS) */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-black text-white uppercase tracking-[2px]">
                Direct Desk Channels
              </h3>
              
              {/* WhatsApp Widget */}
              <a 
                href="https://wa.me/923276381819" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-300">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">Official WhatsApp</h4>
                  <p className="text-sm font-mono font-bold text-zinc-400 group-hover:text-emerald-400 transition-colors mt-0.5">+92 327-6381819</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Instant response pipeline</p>
                </div>
              </a>

              {/* Email Connection */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">Email Queries</h4>
                  <p className="text-sm font-mono font-bold text-zinc-300 mt-0.5">support@highrisedigital.io</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Response within 24 hours</p>
                </div>
              </div>

              {/* Physical Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wide">Head Campus</h4>
                  <p className="text-sm font-bold text-zinc-300 mt-0.5">Multan, Punjab, Pakistan</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Live student operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SECURE CONTACT FORM (7 COLS) */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-emerald-500/20 bg-emerald-500/[0.02] rounded-2xl p-8 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">Message Securely Transmitted</h3>
                  <p className="text-xs text-zinc-400">Thank you, Jani. Opening WhatsApp gate node to dispatch your pipeline details...</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-500 font-mono">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Umair Farooq" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/[0.04] transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-500 font-mono">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/[0.04] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-500 font-mono">Subject / Course Query</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. LMS Portal Login Issue / Admission inquiry" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/[0.04] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-zinc-500 font-mono">Detailed Message</label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Type your message details here..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/[0.04] transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-neutral-950 font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
                >
                  Dispatch Message
                  <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}