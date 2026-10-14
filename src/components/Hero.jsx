import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <div className="relative overflow-hidden bg-[#030712] text-white pt-24 pb-20 border-b border-slate-800/80">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/5">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-300 font-semibold tracking-wider uppercase">
              Indigenous DeepTech & Aerospace Innovation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Powering Clean Energy & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Next-Gen Defense Mobility
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Engineering sustainable hydrogen ecosystems, fuel-cell UAVs, and space research platforms under National Green Hydrogen Mission.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/AARYANS_POWER_Brochure.pdf"
              download
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition-all hover:border-slate-600 flex items-center gap-2"
            >
              Download Tech Portfolio
            </a>
          </div>

          {/* Live Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-800/60 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <span className="block text-2xl font-black font-mono text-emerald-400">6</span>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Core Platforms</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <span className="block text-2xl font-black font-mono text-cyan-400">100%</span>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Indigenous Tech</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <span className="block text-2xl font-black font-mono text-emerald-400">0</span>
              <span className="text-[11px] font-mono text-slate-400 uppercase">Carbon Emission</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <span className="block text-2xl font-black font-mono text-cyan-400">100 kg</span>
              <span className="text-[11px] font-mono text-slate-400 uppercase">SOHAM H₂ / Day</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}