import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/40 rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5">
      
      <div>
        {/* Top Tag & ID */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
            {product.category || 'DeepTech'}
          </span>
          <span className="text-xs font-mono text-slate-500 font-bold">
            #{product.id}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
          {product.name}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-semibold text-slate-400 mb-3 font-mono">
          {product.tagline}
        </p>

        {/* Short Description */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-6 font-sans">
          {product.description}
        </p>
      </div>

      {/* Footer / Action Link */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Technical Specs
        </span>

        <Link
          to={`/product/${product.id}`}
          className="p-2 rounded-xl bg-slate-800/80 group-hover:bg-emerald-500 group-hover:text-slate-950 text-slate-300 transition-all"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}