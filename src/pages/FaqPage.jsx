import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How safe are Green Hydrogen storage systems for residential/commercial use?",
      a: "Aaryans Power units feature Trinetra 5-layer safety protocols, automated pressure relief valves, real-time hydrogen leak sensors, and ventilated enclosures."
    },
    {
      q: "What is the lifespan of the PEM Electrolyser and Fuel Cell stack?",
      a: "Our industrial-grade PEM electrolysers and fuel cell stacks are rated for over 60,000 operational hours with minimal degradation."
    },
    {
      q: "Can the system integrate with my existing rooftop solar setup?",
      a: "Yes! SOHAM and MUKTI systems are designed to seamlessly integrate with existing solar photovoltaic arrays."
    },
    {
      q: "Are there government subsidies available for Green Hydrogen & Solar installations?",
      a: "Yes, commercial and industrial clients can leverage MNRE guidelines, accelerated depreciation benefits, and state-level green energy capital subsidies."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 flex items-center justify-center gap-1">
          <HelpCircle className="w-4 h-4" /> Information Center
        </h2>
        <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-800/40"
            >
              <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
            </button>
            {openFaq === idx && (
              <div className="px-6 pb-6 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}