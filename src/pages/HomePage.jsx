import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/products';

import { 
  Shield, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Activity, 
  Globe, 
  Layers, 
  FileText, 
  Calculator 
} from 'lucide-react';

export default function HomePage({ onOpenQuote, onOpenBrochure, onOpenRoi }) {
  return (
    <div className="bg-[#040810] text-slate-100 space-y-24 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase backdrop-blur-md">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> DeepTech Innovation Architecture
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Pioneering <span className="text-emerald-400">Green Hydrogen</span> & Aerospace Systems
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              Engineering indigenous PEM fuel-cell UAV platforms, decentralized hydrogen generators, and high-altitude aerospace propulsion testbeds under Atmanirbhar Bharat.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2.5 group cursor-pointer"
              >
                Request Commercial Proposal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={onOpenBrochure}
                className="px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-400" /> Executive Datasheet
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 font-mono">
              <div>
                <span className="text-2xl font-black text-white block">6+ Hrs</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">UAV Mission Endurance</span>
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-400 block">99.999%</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Green H₂ Purity</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">Zero</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Carbon Footprint</span>
              </div>
            </div>
          </div>

          {/* Hero Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800/90 bg-slate-900/50 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden">
                <img 
                  src="/powerimage/mukti-vehicle.jpg" 
                  alt="MUKTI Mobile Demonstrator" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold uppercase backdrop-blur-md">
                  Active Platform
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider">Flagship Platform</span>
                  <h3 className="text-sm font-bold text-white">MUKTI — Mobile Green H₂ Demonstrator</h3>
                  <p className="text-[11px] text-slate-400">Complete value chain: Solar → Electrolysis → Storage → Fuel Cell</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ENTERPRISE BADGES & COMPLIANCE BAR */}
      <section className="py-8 border-y border-slate-800/80 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono">TRINETRA Safety</h4>
                <p className="text-[11px] text-slate-400">5-Layer Fail-Safe Architecture</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono">National H₂ Mission</h4>
                <p className="text-[11px] text-slate-400">Government Policy Aligned</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono">ISO 9001:2015</h4>
                <p className="text-[11px] text-slate-400">Defense Certified Quality</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase font-mono">Atmanirbhar Bharat</h4>
                <p className="text-[11px] text-slate-400">100% Indigenous Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE TECHNOLOGY PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">Engineering Framework</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">DeepTech Pillars & Innovation Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">PEM Fuel Cell Stacks</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-efficiency Proton Exchange Membrane fuel-cell systems optimized for extreme thermal conditions and continuous heavy-duty operations.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Aerospace Propulsion R&D</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Precision ground testbeds analyzing H₂–O₂ high-speed combustion, thrust measurement, telemetry, and high-altitude propulsion parameters.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl space-y-4 hover:border-emerald-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Orbital Space Debris Testbeds</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Experimental platforms utilizing LiDAR and vision estimation for satellite fragment capture concepts under ISRO DFSM 2030 guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">Defense & Clean Energy Portfolio</span>
            <h2 className="text-3xl font-black text-white mt-1">DeepTech Systems Showcase</h2>
          </div>
          <Link 
            to="/products" 
            className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
          >
            Explore Complete Portfolio →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all group">
              <div className="p-6 space-y-4">
                <div className="h-52 rounded-2xl overflow-hidden relative border border-slate-800">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/90 text-emerald-400 border border-emerald-500/30">
                    {item.categoryLabel}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase block">{item.tagline}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{item.desc}</p>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link 
                  to={`/products/${item.id}`} 
                  className="w-full py-3 rounded-xl bg-slate-950 border border-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-bold text-xs font-mono transition-all flex items-center justify-center gap-2"
                >
                  Technical Specification Dashboard <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE ESTIMATOR CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl relative z-10">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <Calculator className="w-4 h-4" /> Commercial Energy Estimator
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white">Calculate Solar & Green H₂ Fuel Cell ROI</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Evaluate financial payback, annual electricity cost savings, and CO₂ reduction for integrating Aaryans Power zero-emission energy systems.
            </p>
          </div>

          <button 
            onClick={onOpenRoi}
            className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide shadow-xl shadow-emerald-500/20 transition-all shrink-0 cursor-pointer font-mono"
          >
            Open Interactive Calculator →
          </button>
        </div>
      </section>

    </div>
  );
}