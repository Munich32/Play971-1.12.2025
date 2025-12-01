import React from 'react';
import { Translations, PageView, Language } from '../types';
import { AFFILIATE_LINK, FOOTER_DISCLAIMER_LONG } from '../constants';
import { Shield, Lock, HeartHandshake, Dna } from 'lucide-react';

interface Props {
  t: Translations;
  setPage: (p: PageView) => void;
  lang: Language;
}

const Footer: React.FC<Props> = ({ t, setPage, lang }) => {
  return (
    <footer className="bg-brand-darker border-t border-brand-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black italic text-white mb-6">PLAY<span className="text-brand-accent">971</span></div>
            <p className="text-brand-text text-sm mb-6 leading-relaxed">
              {t.footer.disclaimer}
            </p>
            {/* Updated 18+ Badge to Neutral */}
            <div className="inline-flex items-center gap-2 border border-slate-600 rounded-full px-4 py-1 text-slate-400 font-black text-xs uppercase tracking-widest bg-slate-800/50">
              18+ ONLY
            </div>
            
            <div className="mt-6 flex flex-col gap-2">
               <div className="flex items-center gap-2 text-xs font-bold text-brand-text/60">
                  <Shield size={16} /> Responsible Gambling
               </div>
               <div className="flex items-center gap-2 text-xs font-bold text-brand-text/60">
                  <HeartHandshake size={16} /> Crypto Gambling Foundation
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><button onClick={() => setPage('sports')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.nav.sports}</button></li>
              <li><button onClick={() => setPage('casino')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.nav.casino}</button></li>
              <li><button onClick={() => setPage('poker')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.nav.poker}</button></li>
              <li><button onClick={() => setPage('aviator')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.nav.aviator}</button></li>
              <li><button onClick={() => setPage('promo')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.nav.promo}</button></li>
              <li><button onClick={() => setPage('news')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.nav.news}</button></li>
            </ul>
          </div>

          {/* Learn & Explore */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><button onClick={() => setPage('review')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.footer.stakeReview}</button></li>
              <li><button onClick={() => setPage('quiz')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.footer.cryptoAcademy}</button></li>
              <li><button onClick={() => setPage('legal')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.legal.termsTitle}</button></li>
              <li><button onClick={() => setPage('legal')} className="text-brand-text hover:text-brand-accent transition-colors text-sm">{t.legal.privacyTitle}</button></li>
            </ul>
          </div>

          {/* Badges / Trust */}
          <div>
             <h4 className="text-white font-bold uppercase tracking-wider mb-6">Security & Payment</h4>
             <div className="flex flex-wrap gap-2 mb-6">
                <div className="bg-brand-secondary px-3 py-1 rounded text-xs text-brand-text font-bold">Bitcoin</div>
                <div className="bg-brand-secondary px-3 py-1 rounded text-xs text-brand-text font-bold">Ethereum</div>
                <div className="bg-brand-secondary px-3 py-1 rounded text-xs text-brand-text font-bold">USDT</div>
                <div className="bg-brand-secondary px-3 py-1 rounded text-xs text-brand-text font-bold">Litecoin</div>
                <div className="bg-brand-secondary px-3 py-1 rounded text-xs text-brand-text font-bold">Dogecoin</div>
             </div>
             <div className="flex items-center gap-4 text-brand-text/50">
                <Shield size={32} />
                <Lock size={32} />
                <Dna size={32} />
             </div>
          </div>
        </div>

        {/* Site Map Section */}
        <div className="border-t border-slate-800 pt-8 pb-8">
           <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text mb-4 opacity-50">{t.footer.sitemap}</h4>
           <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-text/70">
              <button onClick={() => setPage('home')} className="hover:text-white">Home</button>
              <button onClick={() => setPage('sports')} className="hover:text-white">Sports Betting</button>
              <button onClick={() => setPage('casino')} className="hover:text-white">Online Casino</button>
              <button onClick={() => setPage('aviator')} className="hover:text-white">Crash Games</button>
              <button onClick={() => setPage('poker')} className="hover:text-white">Poker</button>
              <button onClick={() => setPage('promo')} className="hover:text-white">VIP Promotions</button>
              <button onClick={() => setPage('review')} className="hover:text-white">Stake Review</button>
              <button onClick={() => setPage('quiz')} className="hover:text-white">Crypto Quiz</button>
              <button onClick={() => setPage('news')} className="hover:text-white">News & Blog</button>
              <a href={AFFILIATE_LINK} target="_blank" className="hover:text-white">Affiliate Program</a>
              <a href={AFFILIATE_LINK} target="_blank" className="hover:text-white">Login</a>
              <a href={AFFILIATE_LINK} target="_blank" className="hover:text-white">Register</a>
           </div>
        </div>

        {/* Localized Disclaimer Section */}
        <div className="border-t border-slate-800 pt-8 space-y-4">
           <p className="text-xs text-brand-text leading-relaxed opacity-70">
             {FOOTER_DISCLAIMER_LONG[lang]}
           </p>
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text opacity-50">
             <div>© 2026 Play971. {t.footer.rights}</div>
             <div>Play971 is an independent affiliate partner.</div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;