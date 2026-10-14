import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenRoi }) {
  const whatsappNumber = "917744038427";
  const whatsappMsg = encodeURIComponent("Hi Aaryans Power team, I visited your website and would like to inquire about Green Hydrogen & DeepTech solutions.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950">
                <Zap className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                AARYANS <span className="text-emerald-400">POWER</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next-generation Green Hydrogen and Aerospace propulsion technologies engineered in India for high-end defense and clean energy transition.
            </p>
            <div className="pt-2">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Direct WhatsApp Inquiry
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Info</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-400" /> +91 77440 38427</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-400" /> info@aaryanspower.com</p>
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-emerald-400 mt-0.5" /> Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><Link to="/" className="hover:text-emerald-400">Home Platform</Link></li>
                <li><Link to="/products" className="hover:text-emerald-400">Technical Portfolio</Link></li>
                <li><button onClick={onOpenRoi} className="hover:text-emerald-400 text-left">Solar ROI Estimator</button></li>
                <li><Link to="/faqs" className="hover:text-emerald-400">Knowledge Base</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Aaryans Power. All rights reserved.</p>
          <p className="text-slate-600">Designed & Engineered under Atmanirbhar Bharat</p>
        </div>
      </div>
    </footer>
  );
}