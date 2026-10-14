import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages Import
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import RoiCalculatorPage from './pages/RoiCalculatorPage';

// Modals Import
import RoiCalculatorModal from './components/RoiCalculatorModal';
import DatasheetModal from './components/DatasheetModal';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [isRoiOpen, setIsRoiOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar 
        onOpenRoi={() => setIsRoiOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenQuote={() => setIsQuoteOpen(true)} 
                onOpenBrochure={() => setIsBrochureOpen(true)}
                onOpenRoi={() => setIsRoiOpen(true)} 
              />
            } 
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route 
            path="/products/:id" 
            element={<ProductDetailPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
          />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route 
  path="/about" 
  element={<AboutPage onOpenQuote={() => setIsQuoteOpen(true)} 
  />} 

/>
<Route 
  path="/roi-calculator" 
  element={<RoiCalculatorPage onOpenQuote={() => setIsQuoteOpen(true)} />} 
/>
        </Routes>
      </main>

      <Footer onOpenRoi={() => setIsRoiOpen(true)} />

      {/* Modals */}
      <RoiCalculatorModal 
        isOpen={isRoiOpen} 
        onClose={() => setIsRoiOpen(false)} 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />
      <DatasheetModal 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
      />
      <InquiryModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />
    </div>
  );
}