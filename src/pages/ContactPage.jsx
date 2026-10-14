import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-white space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Connect With Our Engineering Team</h1>
        <p className="text-xs sm:text-sm text-slate-400">Specify requirements for Green Hydrogen, VTOL UAVs, or Aerospace testbeds.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-lg font-bold text-emerald-400">Headquarters</h3>
          <div className="space-y-4 text-xs text-slate-300">
            <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-400" /> +91 77440 38427</p>
            <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-emerald-400" /> info@aaryanspower.com</p>
            <p className="flex items-start gap-3"><MapPin className="w-4 h-4 text-emerald-400 mt-0.5" /> Pune, Maharashtra, India</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted!"); }} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
              <input required type="email" placeholder="john@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Project Details</label>
              <textarea rows={4} placeholder="Mention capacity requirements..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Submit Proposal Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}