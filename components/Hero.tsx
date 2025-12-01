import React from 'react';
import { Translations, PageView } from '../types';
import { AFFILIATE_LINK, IMAGES } from '../constants';
import { Play } from 'lucide-react';

interface HeroProps {
  t: Translations;
  setPage: (p: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ t, setPage }) => {
  return (
    <div className="relative w-full min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-brand-darker">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero.bg}
          alt="Background" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 mt-12 md:mt-0">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-start rtl:md:text-right space-y-8">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/50 border border-slate-700 text-brand-accent text-sm font-bold backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
             Official Partner
           </div>
           
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] uppercase tracking-tight">
             {t.hero.title}
           </h1>
           
           <p className="text-lg md:text-xl text-brand-text max-w-xl mx-auto md:mx-0 leading-relaxed">
             {t.hero.subtitle}
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a 
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent hover:bg-green-400 text-brand-darker font-black text-lg px-8 py-4 rounded-lg shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1 hover:shadow-green-500/40 flex items-center justify-center gap-2"
              >
                <Play fill="currentColor" size={20} />
                {t.hero.cta}
              </a>
              <button 
                onClick={() => setPage('aviator')}
                className="bg-brand-secondary/50 hover:bg-slate-700 text-white font-bold text-lg px-8 py-4 rounded-lg border border-slate-600 transition-colors backdrop-blur-sm"
              >
                {t.nav.aviator}
              </button>
           </div>
        </div>

        {/* Graphic / Cards */}
        <div className="flex-1 hidden md:flex justify-end relative h-[400px] w-full items-center">
           {/* Floating Cards Effect */}
           <div className="relative w-80 h-96">
              {/* Back Card */}
              <div className="absolute top-0 right-10 w-full h-full bg-brand-secondary rounded-2xl border border-slate-600 transform rotate-6 opacity-40 scale-90"></div>
              
              {/* Middle Card */}
              <div className="absolute top-4 right-5 w-full h-full bg-brand-secondary rounded-2xl border border-slate-600 transform rotate-3 opacity-70 scale-95 shadow-2xl"></div>
              
              {/* Front Card (Aviator Teaser) */}
              <div className="absolute top-8 right-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-brand-accent/30 shadow-2xl overflow-hidden p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-white font-black text-2xl italic tracking-tighter">AVIATOR</div>
                    <div className="bg-red-500/20 text-red-500 text-xs font-bold px-2 py-1 rounded">LIVE</div>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center relative">
                     <div 
                       className="absolute inset-0 opacity-10"
                       style={{ backgroundImage: `url(${IMAGES.hero.aviatorCard})` }}
                     ></div>
                     <div className="text-6xl font-black text-white z-10">
                        14.2x
                     </div>
                     <div className="absolute bottom-10 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-sm"></div>
                  </div>
                  
                  <button onClick={() => setPage('aviator')} className="w-full bg-brand-accent text-brand-darker font-bold py-3 rounded hover:bg-green-400 transition-colors">
                    Try Demo
                  </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;