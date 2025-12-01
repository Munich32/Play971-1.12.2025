import React from 'react';
import { Menu, Globe } from 'lucide-react';
import { Translations, PageView, Language } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface HeaderProps {
  t: Translations;
  currentPage: PageView;
  setPage: (p: PageView) => void;
  lang: Language;
  setLang: (l: Language) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (o: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ t, currentPage, setPage, lang, setLang, isMenuOpen, setIsMenuOpen }) => {
  
  const navItems: { id: PageView; label: string }[] = [
    { id: 'sports', label: t.nav.sports },
    { id: 'casino', label: t.nav.casino },
    { id: 'poker', label: t.nav.poker },
    { id: 'aviator', label: t.nav.aviator },
    { id: 'promo', label: t.nav.promo },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-darker border-b border-brand-secondary h-16 flex items-center shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </button>
          <div 
            onClick={() => setPage('home')} 
            className="cursor-pointer font-black text-2xl text-white tracking-tighter italic"
          >
            PLAY<span className="text-brand-accent">971</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-white
                ${currentPage === item.id ? 'text-brand-accent' : 'text-brand-text'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          {/* Lang Switcher */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1 text-xs font-bold text-brand-text hover:text-white px-2 py-1 rounded border border-transparent hover:border-slate-600 transition-all"
          >
            <Globe size={14} />
            <span>{lang.toUpperCase()}</span>
          </button>

          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer" 
            className="hidden sm:block text-white font-bold text-sm px-4 py-2 hover:text-brand-text transition-colors"
          >
            {t.nav.login}
          </a>
          <a 
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent hover:bg-green-500 text-brand-darker font-bold text-sm px-5 py-2 rounded-md shadow-lg shadow-green-500/10 transition-transform active:scale-95"
          >
            {t.nav.register}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;