import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Cpu, 
  Globe, 
  Award, 
  Rocket, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage({ onOpenQuote }) {
  return (
    <div className="bg-[#040810] min-h-screen text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header / Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-widest font-bold">
            Pioneering Clean Energy & DeepTech Innovation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Driving India's National Green Hydrogen & Space Mission
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Aaryans Power is an indigenous technology platform spanning hydrogen generation, fuel cells, clean mobility, propulsion, aerospace, and sustainable-space research.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To engineer modular, safe, and scalable indigenous hydrogen and deep-tech platforms that accelerate zero-emission energy transition and provide robust defense-grade capabilities.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To build a self-reliant Atmanirbhar DeepTech ecosystem powering sustainable aerospace propulsion, decentralized energy grids, and orbital space sustainability for tomorrow.
            </p>
          </div>
        </div>

        {/* Technical Core Competencies */}
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Technology Ecosystem</h2>
              <p className="text-xs font-mono text-slate-400 mt-1">Six Core Platforms. One Integrated Ecosystem.</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 w-fit">
              ISO 9001:2015 Standards
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Zap className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-sm text-white">Decentralized Hydrogen</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                On-demand chemical reaction platforms eliminating high transportation and storage costs.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <Rocket className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-sm text-white">Aerospace & Propulsion</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hybrid H₂ VTOL UAVs, long-endurance ISR platforms, and liquid H₂/O₂ rocket propulsion testbeds.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-sm text-white">TRINETRA Safety Layer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                5-layer active protection, flashback prevention, leak detection, and automatic isolation interlocks.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Aaryans Power */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-black text-white">
              Why Partner With Aaryans Power?
            </h2>
            <div className="space-y-4">
              {[
                "Indigenous DeepTech R&D aligned with Make in India initiatives.",
                "End-to-End value chain from Hydrogen Generation to Fuel Cell mobility.",
                "Robust safety architecture verified for critical industrial & defense standards.",
                "Academic & research partnerships for human capital development."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 border border-emerald-500/20 rounded-3xl p-8 space-y-6 text-center">
            <Award className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Ready for Technical Collaboration?</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Explore our customized solutions, request technical proposals, or schedule a demonstration with our engineering team.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button 
                onClick={onOpenQuote}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl font-mono transition-all flex items-center gap-2 cursor-pointer"
              >
                Request Proposal <ArrowRight className="w-4 h-4" />
              </button>
              <Link 
                to="/products"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs rounded-xl font-mono transition-all"
              >
                View Systems
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}