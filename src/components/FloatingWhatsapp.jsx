import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsapp() {
  const whatsappUrl = "https://wa.me/917744038427?text=Hello%20Aaryans%20Power,%20I%20want%20to%20know%20more%20about%20your%20hydrogen%20and%20aerospace%20solutions.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono rounded-full shadow-2xl shadow-emerald-500/40 flex items-center gap-2 transition-all hover:scale-105 border border-emerald-300/30"
    >
      <MessageSquare className="w-4 h-4 fill-slate-950" />
      <span className="hidden sm:inline">Direct Inquiry</span>
    </a>
  );
}