import React from 'react';
import { X } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div>
          <h3 className="text-2xl font-bold text-white">Inquiry Form</h3>
          <p className="text-xs text-slate-400 mt-1">Connect with Aaryans DeepTech engineering team.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully!"); onClose(); }} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
            <input required type="text" placeholder="Enter name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
            <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Project Details</label>
            <textarea rows={3} placeholder="Specify requirements for Hydrogen, VTOL, or Aerospace systems..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}