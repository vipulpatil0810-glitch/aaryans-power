import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap } from 'lucide-react';

export default function RoiCalculatorPage({ onOpenQuote }) {
  const [solarKw, setSolarKw] = useState(10);
  const [dieselHours, setDieselHours] = useState(4);
  const gridRate = 9; // ₹/kWh

  // ROI Calculations
  const annualSolarGen = solarKw * 4 * 365; // approx 4 units/kW/day
  const annualSolarSavings = annualSolarGen * gridRate;
  const annualDieselCost = dieselHours * 3.5 * 90 * 365; // ~3.5 L/hr at ₹90/L
  const totalSavings = annualSolarSavings + (annualDieselCost * 0.6); // 60% displacement
  const estimatedCost = solarKw * 65000 + 400000; // rough system cost
  const paybackYears = (estimatedCost / totalSavings).toFixed(1);

  return (
    <div className="bg-[#040810] min-h-screen text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center space-y-3">
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 uppercase tracking-widest font-bold">
            Interactive Commercial Energy Estimator
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Green H₂ & Solar ROI Calculator
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Estimate payback period, diesel displacement, and financial savings for integrating Aaryans Power zero-emission systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Proposed Solar Capacity: <span className="text-emerald-400 font-bold">{solarKw} kW</span>
              </label>
              <input 
                type="range" 
                min="5" 
                max="100" 
                value={solarKw} 
                onChange={(e) => setSolarKw(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-950 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Daily Diesel Gen Runtime: <span className="text-emerald-400 font-bold">{dieselHours} Hours/Day</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="16" 
                value={dieselHours} 
                onChange={(e) => setDieselHours(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-950 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Estimated System Investment</span>
              <p className="text-xl font-extrabold text-white font-mono">
                ₹{(estimatedCost / 100000).toFixed(2)} Lakhs
              </p>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">Estimated Financial Impact</span>
              
              <div>
                <span className="text-[11px] font-mono text-slate-400">Annual Electricity & Fuel Savings</span>
                <p className="text-2xl font-black text-emerald-400 font-mono">
                  ₹{Math.round(totalSavings).toLocaleString('en-IN')} / year
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400">Estimated Payback Period</span>
                <p className="text-2xl font-black text-white font-mono">
                  {paybackYears} Years
                </p>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl font-mono transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Get Detailed Commercial Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}