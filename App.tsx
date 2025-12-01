import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import SportsView from './components/SportsView';
import CasinoView from './components/CasinoView';
import PromoView from './components/PromoView';
import AviatorGame from './components/AviatorGame';
import PlinkoGame from './components/PlinkoGame';
import PokerView from './components/PokerView';
import NewsView from './components/NewsView';
import LegalView from './components/LegalView';
import StakeReviewView from './components/StakeReviewView';
import CryptoQuizView from './components/CryptoQuizView';
import CountryView from './components/CountryView';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import { PageView, Language } from './types';
import { TEXTS, AFFILIATE_LINK, SEO_METADATA } from './constants';
import { X, Trophy, Ticket, Plane, Zap, Menu, Shield, HelpCircle, FileText, Globe } from 'lucide-react';
import { Gamepad2 } from 'lucide-react'; // Ensure this is imported if used, otherwise remove.

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hackerMode, setHackerMode] = useState(false);
  const [activeCountry, setActiveCountry] = useState<string>('AE');

  // Set RTL direction on body
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Konami Code Easter Egg
  useEffect(() => {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let cur = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.key === code[cur]) {
        cur++;
        if (cur === code.length) {
          setHackerMode(prev => !prev);
          cur = 0;
        }
      } else {
        cur = 0;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const t = TEXTS[language];

  // --- COMPREHENSIVE SEO ENGINE ---
  useEffect(() => {
    let title = SEO_METADATA[language][currentPage]?.title || t.seo.title;
    let description = SEO_METADATA[language][currentPage]?.description || t.seo.body;

    // Dynamic Overrides for Country Pages
    if (currentPage === 'country') {
      const countryName = activeCountry === 'AE' ? (language === 'ar' ? 'الإمارات' : 'UAE') : activeCountry;
      if (language === 'ar') {
        title = `أفضل كود خصم ستيك لـ ${countryName} | Play971`;
        description = `احصل على أفضل كود خصم لموقع ستيك في ${countryName}. مكافآت VIP حصرية، رايك باك فوري، ودليل مقامرة الكريبتو لعام 2025.`;
      } else {
        title = `Best Stake Promo Code for ${countryName} | Play971`;
        description = `Find the best Stake.com promo code for ${countryName}. Exclusive VIP bonuses, instant rakeback, and crypto gambling guide for 2025.`;
      }
    }

    // Update Document Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Scroll to top on page change
    window.scrollTo(0, 0); 
  }, [currentPage, language, t, activeCountry]);

  // --- REDESIGNED MOBILE MENU ---
  const MobileMenu = () => (
    <div className={`fixed inset-0 z-[60] bg-brand-darker/95 backdrop-blur-xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-brand-secondary">
           <span className="text-2xl font-black italic text-white">PLAY<span className="text-brand-accent">971</span></span>
           <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-brand-accent transition-colors"><X size={32} /></button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
           
           {/* Section 1: Main Navigation */}
           <div>
             <h4 className="text-xs font-bold uppercase text-brand-text/50 mb-3 tracking-widest">Gaming</h4>
             <div className="space-y-2">
               <MenuLink page="sports" icon={<Trophy size={20}/>} label={t.nav.sports} active={currentPage === 'sports'} onClick={() => { setCurrentPage('sports'); setIsMenuOpen(false); }} />
               <MenuLink page="casino" icon={<Gamepad2 size={20}/>} label={t.nav.casino} active={currentPage === 'casino'} onClick={() => { setCurrentPage('casino'); setIsMenuOpen(false); }} />
               <MenuLink page="poker" icon={<Ticket size={20}/>} label={t.nav.poker} active={currentPage === 'poker'} onClick={() => { setCurrentPage('poker'); setIsMenuOpen(false); }} />
               <MenuLink page="aviator" icon={<Plane size={20}/>} label={t.nav.aviator} active={currentPage === 'aviator'} onClick={() => { setCurrentPage('aviator'); setIsMenuOpen(false); }} />
               <MenuLink page="plinko" icon={<Zap size={20}/>} label="Plinko" active={currentPage === 'plinko'} onClick={() => { setCurrentPage('plinko'); setIsMenuOpen(false); }} />
             </div>
           </div>

           {/* Section 2: Info & Promos */}
           <div>
             <h4 className="text-xs font-bold uppercase text-brand-text/50 mb-3 tracking-widest">Discover</h4>
             <div className="space-y-2">
               <MenuLink page="promo" icon={<Ticket size={20}/>} label={t.nav.promo} active={currentPage === 'promo'} onClick={() => { setCurrentPage('promo'); setIsMenuOpen(false); }} />
               <MenuLink page="quiz" icon={<HelpCircle size={20}/>} label={t.nav.quiz} active={currentPage === 'quiz'} onClick={() => { setCurrentPage('quiz'); setIsMenuOpen(false); }} />
               <MenuLink page="news" icon={<FileText size={20}/>} label={t.nav.news} active={currentPage === 'news'} onClick={() => { setCurrentPage('news'); setIsMenuOpen(false); }} />
               <MenuLink page="review" icon={<Shield size={20}/>} label={t.footer.stakeReview} active={currentPage === 'review'} onClick={() => { setCurrentPage('review'); setIsMenuOpen(false); }} />
             </div>
           </div>

           {/* Section 3: Legal */}
           <div>
             <h4 className="text-xs font-bold uppercase text-brand-text/50 mb-3 tracking-widest">Support</h4>
             <div className="space-y-2">
               <MenuLink page="legal" icon={<Globe size={20}/>} label="Legal" active={currentPage === 'legal'} onClick={() => { setCurrentPage('legal'); setIsMenuOpen(false); }} />
             </div>
           </div>
        </div>

        {/* Sticky Footer CTA */}
        <div className="p-4 border-t border-brand-secondary bg-brand-darker">
          <a 
            href={AFFILIATE_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full block bg-brand-accent hover:bg-green-400 text-brand-darker font-black py-4 rounded-xl text-center text-xl shadow-lg shadow-green-500/20 transition-transform active:scale-95"
          >
            {t.nav.register}
          </a>
          <div className="text-center mt-3 text-[10px] text-brand-text/50">
             Official Partner • 18+ Only
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-brand-dark text-brand-text selection:bg-brand-pink selection:text-white flex flex-col ${hackerMode ? 'font-mono saturate-150 contrast-125' : 'font-sans'}`}>
      {hackerMode && (
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-10 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] bg-cover mix-blend-overlay"></div>
      )}
      
      <MobileMenu />
      
      <Header 
        t={t} 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        lang={language} 
        setLang={setLanguage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <Breadcrumbs page={currentPage} setPage={setCurrentPage} country={activeCountry} />

      <main className="flex-grow">
        {currentPage === 'home' && <HomeView t={t} setPage={setCurrentPage} setCountry={setActiveCountry} lang={language} />}
        {currentPage === 'sports' && <SportsView t={t} lang={language} />}
        {currentPage === 'casino' && <CasinoView t={t} lang={language} />}
        {currentPage === 'promo' && <PromoView t={t} lang={language} />}
        {currentPage === 'aviator' && <AviatorGame t={t} lang={language} />}
        {currentPage === 'plinko' && <PlinkoGame t={t} lang={language} />}
        {currentPage === 'poker' && <PokerView t={t} lang={language} />}
        {currentPage === 'news' && <NewsView t={t} lang={language} />}
        {currentPage === 'legal' && <LegalView t={t} lang={language} />}
        {currentPage === 'review' && <StakeReviewView t={t} setPage={setCurrentPage} setCountry={setActiveCountry} lang={language} />}
        {currentPage === 'quiz' && <CryptoQuizView t={t} lang={language} />}
        {currentPage === 'country' && <CountryView t={t} countryCode={activeCountry} lang={language} />}
      </main>

      <Footer t={t} setPage={setCurrentPage} lang={language} />
    </div>
  );
};

// Helper Component for Menu Links
const MenuLink = ({ page, icon, label, active, onClick }: { page: string, icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all
      ${active ? 'bg-brand-secondary text-brand-accent font-bold shadow-sm' : 'text-brand-text hover:bg-slate-800 hover:text-white'}`}
  >
    <div className={`${active ? 'text-brand-accent' : 'text-slate-500'}`}>{icon}</div>
    <span className="text-lg">{label}</span>
  </button>
)

export default App;