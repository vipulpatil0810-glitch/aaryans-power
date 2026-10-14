import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../Data/products';

import { 
  ArrowLeft, 
  Cpu, 
  ShieldCheck, 
  FileText, 
  Send, 
  CheckCircle2, 
  Download, 
  Zap,
  Activity,
  Award
} from 'lucide-react';

export default function ProductDetailPage({ onOpenQuote, onOpenBrochure }) {
  const { id } = useParams();
  
  // Dynamic lookup for AARYA, SOHAM, MUKTI, BHAKTI, PRAGATI, SHOONYA
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="bg-[#040810] text-white min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">System Specification Not Found</h2>
        <Link to="/products" className="text-emerald-400 text-xs underline font-mono">
          Return To Technical Systems Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#040810] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Back Navigation */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400" /> Return to Systems Portfolio
          </Link>

          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            System ID: {product.id.toUpperCase()} // ATMANIRBHAR DEEPTECH
          </span>
        </div>

        {/* Dynamic Product Hero Specification Banner */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Product Showcase Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 h-80 sm:h-[400px] shadow-2xl group">
            <img 
              src={product.img} 
              alt={product.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-800 px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-md">
              {product.categoryLabel}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-slate-950/90 border border-slate-800 p-3 rounded-xl backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> TRINETRA Fail-Safe
              </span>
              <span className="text-slate-400">ISO 9001:2015</span>
            </div>
          </div>

          {/* Product Overview & Action Brief */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {product.tagline}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {product.title}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/90 p-5 rounded-2xl border border-slate-800/80 font-sans">
              {product.desc}
            </p>

            {/* Compliance & Standard Highlights */}
            <div className="grid grid-cols-2 gap-3 py-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Defense ISR Grade</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Carbon Mission</span>
              </div>
            </div>

            {/* Enterprise Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs tracking-wide transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer font-mono"
              >
                <Send className="w-4 h-4" /> Request Technical Proposal (₹)
              </button>

              <button 
                onClick={onOpenBrochure}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs transition-all flex items-center gap-2 cursor-pointer font-mono"
              >
                <Download className="w-4 h-4 text-emerald-400" /> Download PDF Brief
              </button>
            </div>
          </div>

        </div>

        {/* Detailed Parameter Matrix (PDF Specs Placeholder) */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" /> Technical Architecture & Parameter Matrix
            </h3>
            <span className="text-[10px] font-mono text-slate-500">Government Defense Specifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {product.specs && Object.entries(product.specs).map(([param, value], idx) => (
              <div key={idx} className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-2">
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">{param}</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}