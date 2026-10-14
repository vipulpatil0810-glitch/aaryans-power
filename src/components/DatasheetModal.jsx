import React from 'react';
import { X, FileText, Download } from 'lucide-react';

export default function DatasheetModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Download Executive Datasheet</h3>
          <p className="text-xs text-slate-400">Access technical documentation covering AARYA, SOHAM, MUKTI, BHAKTI, PRAGATI & SHOONYA.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Datasheet PDF download started!"); onClose(); }} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Work Email Address</label>
            <input required type="email" placeholder="name@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
            <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500" />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all">
            <Download className="w-4 h-4" /> Download PDF Brochure
          </button>
        </form>
      </div>
    </div>
  );
}