import React, { useState } from 'react';
import { X, Calculator, Info, TrendingUp } from 'lucide-react';

export default function RoiCalculatorModal({ isOpen, onClose, onOpenQuote }) {
  const [kwSize, setKwSize] = useState(10);
  const [monthlyBill, setMonthlyBill] = useState(25000);

  if (!isOpen) return null;

  const yearlySavings = Math.round(monthlyBill * 12 * 0.75);
  const co2Reduced = (kwSize * 1.4).toFixed(1);
  const paybackYears = ((kwSize * 60000) / (yearlySavings || 1)).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 flex items-center justify-center gap-1">
            <Calculator className="w-4 h-4" /> Estimator
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Solar & Energy ROI Calculator</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950 border border-slate-800/80 rounded-2xl p-6">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-200">Monthly Electricity Bill (₹)</label>
                <span className="font-mono text-lg font-bold text-emerald-400">₹{monthlyBill.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" min="5000" max="200000" step="5000" value={monthlyBill} 
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-slate-200">Recommended Capacity (kW)</label>
                <span className="font-mono text-lg font-bold text-emerald-400">{kwSize} kW</span>
              </div>
              <input 
                type="range" min="3" max="100" step="1" value={kwSize} 
                onChange={(e) => setKwSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Info className="w-4 h-4" /> Hydrogen Backup Hybrid System
              </div>
              <p className="text-[11px]">Integration with SOHAM fuel cells enables zero-emission diesel generator replacement during outages.</p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-5">
            <h4 className="text-sm font-bold text-white border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Financial Projection</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </h4>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-[10px] text-emerald-400 font-semibold uppercase">Yearly Savings</div>
                <div className="text-2xl font-black text-white font-mono mt-0.5">₹{yearlySavings.toLocaleString('en-IN')}</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-semibold">CO₂ Offset</div>
                  <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">{co2Reduced} Tons</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-semibold">Payback Period</div>
                  <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">{paybackYears} Yrs</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => { onClose(); onOpenQuote(); }}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
            >
              Get Detailed Commercial Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}