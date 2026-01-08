
import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Facebook, Youtube, Instagram, Linkedin, Globe, ChevronRight, Loader2, Mail, Languages, ArrowLeft, Spade, Shovel, Droplets, Info, Leaf, Waves } from 'lucide-react';
import { CATEGORIES, TRANSLATIONS, CULTIVATION_GUIDES } from './constants';
import { Language, Category, Crop, Product } from './types';
import { getProductInsight } from './geminiService';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<'search' | 'detail'>('search');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCatId, setSelectedCatId] = useState<string>('');
  const [selectedCropId, setSelectedCropId] = useState<string>('');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const t = TRANSLATIONS[lang];

  const currentCategory = CATEGORIES.find(c => c.id === selectedCatId);
  const currentCrop = currentCategory?.crops.find(c => c.id === selectedCropId);
  const currentProduct = currentCrop?.products.find(p => p.id === selectedProductId);

  const handleSeeDetails = async () => {
    if (currentCategory && currentCrop && currentProduct) {
      setLoading(true);
      setInsight(null);
      const text = await getProductInsight(currentCategory.name, currentCrop.name, currentProduct.name);
      setInsight(text || '');
      setLoading(false);
      setView('detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToSearch = () => {
    setView('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentGuide = selectedCropId ? CULTIVATION_GUIDES[selectedCropId] : null;

  return (
    <div className="min-h-screen flex flex-col font-oswald tracking-wide bg-white">
      {/* Top Utility Bar */}
      <div className="bg-[#f8f9fa] border-b border-gray-200 py-1 px-4 flex justify-end items-center gap-2 relative z-[60]">
        <div className="flex items-center gap-2 text-[#2d5a27] font-sans text-xs font-semibold">
          <Languages size={14} />
          <span>Language:</span>
        </div>
        <select 
          className="bg-transparent border-none rounded p-1 text-xs font-sans focus:ring-0 text-gray-700 cursor-pointer hover:text-[#2d5a27] transition-colors"
          value={lang}
          onChange={(e) => setLang(e.target.value as Language)}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">मराठी</option>
        </select>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('search')}>
             <div className="w-10 h-10 bg-[#2d5a27] rounded-full flex items-center justify-center text-white font-bold text-xl italic border-2 border-[#8cc63f]">H</div>
             <div className="leading-none">
                <span className="text-[#2d5a27] font-bold text-xl block tracking-tighter">HIMALAYA</span>
                <span className="text-[#8cc63f] text-xs font-sans font-bold block uppercase tracking-tight">Hybrid Seeds</span>
             </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X size={28} className="text-[#2d5a27]" /> : <Menu size={28} className="text-[#2d5a27]" />}
           </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 animate-slide-up shadow-2xl">
           <ul className="space-y-6 text-2xl font-medium text-[#2d5a27]">
             <li className="border-b border-gray-100 pb-2" onClick={() => { setIsMenuOpen(false); setView('search'); }}>{t.home}</li>
             <li className="border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>{t.aboutUs}</li>
           </ul>
        </div>
      )}

      {view === 'search' ? (
        <>
          {/* Hero Section - Search View */}
          <section className="relative h-64 md:h-96 flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2000" 
              alt="Lush Vegetables" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
            />
            <div className="relative z-10 text-white animate-slide-up">
              <div className="h-0.5 w-16 bg-[#8cc63f] mx-auto mb-4"></div>
              <h1 className="text-2xl md:text-5xl font-bold mb-2 uppercase drop-shadow-lg tracking-wider">{t.findCatalog}</h1>
              <div className="h-0.5 w-16 bg-[#8cc63f] mx-auto mt-4 mb-6"></div>
              <p className="text-xs md:text-lg max-w-lg mx-auto opacity-90 font-sans tracking-normal font-light">
                {t.heroSubtitle}
              </p>
            </div>
          </section>

          {/* Catalog Selector Section */}
          <main className="flex-grow bg-gray-50 -mt-10 md:-mt-20 relative z-20 px-4 pb-20">
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-10 border-t-8 border-[#2d5a27]">
              <h2 className="text-2xl md:text-3xl text-center font-bold mb-8 text-[#2d5a27] uppercase tracking-normal">{t.findCatalog}</h2>
              
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-gray-500 font-sans font-semibold mb-2 ml-1 text-sm">{t.selectCategory}</label>
                  <select 
                    className="w-full border-2 border-gray-100 rounded-lg py-3 px-4 focus:border-[#8cc63f] focus:ring-0 transition-all bg-gray-50 font-sans text-gray-800"
                    value={selectedCatId}
                    onChange={(e) => {
                      setSelectedCatId(e.target.value);
                      setSelectedCropId('');
                      setSelectedProductId('');
                      setInsight(null);
                    }}
                  >
                    <option value="">-- {t.selectCategory} --</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-gray-500 font-sans font-semibold mb-2 ml-1 text-sm">{t.selectCrop}</label>
                  <select 
                    disabled={!selectedCatId}
                    className="w-full border-2 border-gray-100 rounded-lg py-3 px-4 focus:border-[#8cc63f] focus:ring-0 transition-all bg-gray-50 font-sans text-gray-800 disabled:bg-gray-200 disabled:cursor-not-allowed"
                    value={selectedCropId}
                    onChange={(e) => {
                      setSelectedCropId(e.target.value);
                      setSelectedProductId('');
                      setInsight(null);
                    }}
                  >
                    <option value="">-- {t.selectCrop} --</option>
                    {currentCategory?.crops.map(crop => (
                      <option key={crop.id} value={crop.id}>{crop.name}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-gray-500 font-sans font-semibold mb-2 ml-1 text-sm">{t.selectProduct}</label>
                  <select 
                    disabled={!selectedCropId}
                    className="w-full border-2 border-gray-100 rounded-lg py-3 px-4 focus:border-[#8cc63f] focus:ring-0 transition-all bg-gray-50 font-sans text-gray-800 disabled:bg-gray-200 disabled:cursor-not-allowed"
                    value={selectedProductId}
                    onChange={(e) => {
                      setSelectedProductId(e.target.value);
                      setInsight(null);
                    }}
                  >
                    <option value="">-- {t.selectProduct} --</option>
                    {currentCrop?.products.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <button 
                  disabled={!selectedProductId || loading}
                  onClick={handleSeeDetails}
                  className="w-full bg-[#2d5a27] hover:bg-[#1e3d1a] text-white py-4 rounded-lg font-bold text-xl transition-all active:scale-[0.98] disabled:opacity-50 shadow-lg flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" /> : null}
                  {t.seeDetails}
                </button>
              </div>
            </div>
          </main>
        </>
      ) : (
        /* DETAIL PAGE VIEW */
        <main className="flex-grow animate-slide-up pb-20">
          {/* Detailed Header */}
          <header className="bg-[#2d5a27] text-white pt-8 pb-16 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
              <button 
                onClick={handleBackToSearch}
                className="flex items-center gap-2 text-[#8cc63f] font-sans font-bold mb-6 hover:translate-x-[-4px] transition-transform"
              >
                <ArrowLeft size={20} />
                <span>Back to Search</span>
              </button>
              
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="flex-grow">
                   <p className="text-[#8cc63f] font-sans font-bold uppercase tracking-widest text-sm mb-1">{currentCrop?.name}</p>
                   <h1 className="text-4xl md:text-6xl font-bold uppercase">{currentProduct?.name}</h1>
                </div>
                <div className="shrink-0">
                   <div className="bg-[#8cc63f] text-[#2d5a27] px-4 py-2 rounded-full font-bold text-sm inline-block shadow-lg">
                      PREMIUM HYBRID
                   </div>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          </header>

          <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
            {/* AI Insights Summary */}
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-l-8 border-[#8cc63f] mb-8">
              <h2 className="text-2xl font-bold text-[#2d5a27] mb-4 flex items-center gap-3">
                <Info size={24} className="text-[#8cc63f]" />
                Agronomist Insights
              </h2>
              <div className="font-sans text-gray-700 leading-relaxed text-lg italic prose prose-green max-w-none">
                {insight}
              </div>
            </div>

            {/* Dynamic Cultivation Details */}
            {currentGuide ? (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-[#2d5a27] text-center uppercase tracking-wider mb-6">Cultivation Guide</h2>
                
                {/* Nursery or Direct Sowing Card */}
                {currentGuide.nursery ? (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Spade className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.nursery.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.nursery.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : currentGuide.directSowing ? (
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                      <Leaf className="text-[#2d5a27]" />
                      <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.directSowing.title}</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4">
                        {currentGuide.directSowing.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 font-sans text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}

                {/* Land Prep Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="bg-[#f0f9eb] px-6 py-4 border-b border-[#e1f3d8] flex items-center gap-3">
                    <Shovel className="text-[#2d5a27]" />
                    <h3 className="text-xl font-bold text-[#2d5a27] uppercase">{currentGuide.landPrep.title}</h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <ul className="space-y-4">
                      {currentGuide.landPrep.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 font-sans text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] mt-2 shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Generic Maintenance Accent */}
                <div className="bg-[#2d5a27] text-white p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-xl">
                  <div className="p-4 bg-white/10 rounded-full shrink-0">
                    <Droplets size={40} className="text-[#8cc63f]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 uppercase tracking-wider">Expert Management Tip</h4>
                    <p className="font-sans text-white/90">Regular monitoring for pests and diseases like Whiteflies or Powdery Mildew is essential. Always use clean irrigation water and balanced NPK fertilizer for maximum {currentCrop?.name} yield.</p>
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback for crops without specific guides */
              <div className="bg-gray-50 p-12 rounded-xl border-2 border-dashed border-gray-200 text-center">
                <Globe className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500 font-sans italic">Detailed cultivation guide for {currentCrop?.name} is being prepared by our agronomists. For urgent support, please use the contact info below.</p>
              </div>
            )}
            
            <button 
              onClick={handleBackToSearch}
              className="mt-12 w-full max-w-xs mx-auto block bg-gray-100 hover:bg-gray-200 text-gray-700 font-sans font-bold py-4 rounded-lg transition-colors text-center shadow-sm"
            >
              Back to Catalog Search
            </button>
          </div>
        </main>
      )}

      {/* Transition Silhouette */}
      <div className="relative h-20 bg-gray-50 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full text-[#2d5a27]" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,100 L1440,100 L1440,0 C1300,80 1100,20 900,60 C700,100 500,20 300,80 C150,110 0,60 0,60 Z"></path>
        </svg>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#2d5a27] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-tighter text-[#8cc63f]">{t.contactUs}</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="shrink-0 mt-1 text-[#8cc63f]" size={24} />
                <div>
                  <p className="font-bold">Himalaya Hybrid Seeds Company</p>
                  <p className="font-sans text-sm opacity-90 leading-snug">
                    1364, SEC-38, PHASE-1,<br/>INDUSTRIAL ESTATE, HSIIDC,<br/>RAI, (Dist. Sonipat) HARYANA - 131029
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="shrink-0 text-[#8cc63f]" size={24} />
                <p className="font-sans text-lg">+91-9873640440</p>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="shrink-0 text-[#8cc63f]" size={24} />
                <p className="font-sans text-sm break-all">Himalayaseeds88@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-3">
              <FooterLink onClick={() => { setView('search'); window.scrollTo(0,0); }}>{t.home}</FooterLink>
              <FooterLink onClick={() => {}}>{t.aboutUs}</FooterLink>
            </div>
          </div>

          {/* Social and Language */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-4 mb-8">
               <SocialIcon><Facebook size={24} /></SocialIcon>
               <SocialIcon><Youtube size={24} /></SocialIcon>
               <SocialIcon><Instagram size={24} /></SocialIcon>
               <SocialIcon><Linkedin size={24} /></SocialIcon>
            </div>
            <p className="font-sans text-sm text-center md:text-left mb-4 opacity-90">{t.allRightsReserved}</p>
            <div className="text-[#8cc63f]/40 text-xs font-sans tracking-widest uppercase">
              HIMALAYA™ HYBRID SEEDS
            </div>
          </div>
        </div>

        {/* Scroll Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-[#8cc63f] p-4 rounded-full shadow-lg text-[#2d5a27] hover:scale-110 transition-transform z-50 border-2 border-white/30"
          aria-label="Scroll to top"
        >
          <ChevronRight size={24} className="-rotate-90" />
        </button>
      </footer>
    </div>
  );
};

const FooterLink: React.FC<{ children: React.ReactNode, onClick: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick} className="block text-left hover:translate-x-1 transition-transform opacity-90 hover:opacity-100 text-lg hover:text-[#8cc63f] font-light font-oswald uppercase">
    {children}
  </button>
);

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-[#8cc63f] hover:text-[#2d5a27] transition-all">
    {children}
  </a>
);

export default App;
