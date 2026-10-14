import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Download, ArrowRight, Menu, X, Calculator } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to check active route styling
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'ROI CALCULATOR', path: '/roi-calculator', isBadge: true },
    { name: 'FAQS', path: '/faqs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#040810]/90 backdrop-blur-md border-b border-slate-800/80">
      {/* Top Banner */}
      <div className="bg-emerald-950/40 border-b border-emerald-500/10 py-1.5 px-4 text-center">
        <p className="text-[11px] font-mono text-emerald-400 tracking-wide">
          Driving Clean Energy & Defense Tech under National Green Hydrogen Mission | Made in India
        </p>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shadow-sm shadow-emerald-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-black tracking-wider text-white flex items-center gap-1">
                AARYANS <span className="text-emerald-400">POWER</span>
              </span>
              <p className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">
                Hydrogen & Aerospace Innovation
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-mono font-medium transition-colors uppercase tracking-wider ${
                  link.isBadge
                    ? 'flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30'
                    : isActive(link.path)
                    ? 'text-emerald-400 font-bold'
                    : 'text-slate-300 hover:text-emerald-400'
                }`}
              >
                {link.isBadge && <Calculator className="w-3.5 h-3.5 text-emerald-400" />}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="/datasheet.pdf"
              download
              className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              Datasheet
            </a>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/10 cursor-pointer"
            >
              Get Quote (₹)
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#040810] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="/datasheet.pdf"
              download
              className="w-full justify-center px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-slate-800 flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              Download Technical Datasheet
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full justify-center px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-950 bg-emerald-400 flex items-center gap-2"
            >
              Get Quote (₹)
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}