import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../Data/products';
import { Shield, Cpu, ArrowRight, Layers, Sliders } from 'lucide-react';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'hydrogen', label: 'Green Hydrogen Systems' },
    { id: 'aerospace', label: 'Aerospace & Defense' },
    { id: 'mobility', label: 'Clean Mobility' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#040810] min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Enterprise Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5" /> High-Altitude & Industrial Grade Architecture
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            DeepTech Engineering Systems
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Indigenous defense-grade hydrogen fuel-cell platforms, propulsion testbeds, and clean mobility architectures designed for mission-critical deployments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800/80 pb-6">
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide transition-all flex items-center gap-2 ${
                activeCategory === tab.id 
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> {tab.label}
            </button>
          ))}
        </div>

        {/* Professional Enterprise Spec Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-900/40 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl backdrop-blur-md"
            >
              <div className="grid sm:grid-cols-12 gap-6 p-6">
                {/* Image Section */}
                <div className="sm:col-span-5 relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-56 sm:h-full">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-950/90 text-emerald-400 border border-emerald-500/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Info & Specs Preview */}
                <div className="sm:col-span-7 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold tracking-wider uppercase block">
                      {item.tagline}
                    </span>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Spec Highlights List */}
                  {item.specs && (
                    <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3 space-y-1.5">
                      <div className="text-[10px] font-mono text-slate-500 uppercase font-bold flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-emerald-400" /> Key Engineering Parameters:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        {Object.entries(item.specs).slice(0, 2).map(([k, v], idx) => (
                          <div key={idx} className="truncate">
                            <span className="text-slate-400 block text-[10px]">{k}</span>
                            <span className="font-mono text-emerald-300 font-bold">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-3.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Defense Standard Architecture
                </div>
                <Link 
                  to={`/products/${item.id}`}
                  className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 border border-slate-700/60 text-emerald-400 font-bold text-xs transition-all flex items-center gap-2"
                >
                  Technical Specification Dashboard <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}