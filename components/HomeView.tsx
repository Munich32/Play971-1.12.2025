import React from 'react';
import Hero from './Hero';
import { Translations, PageView, Language } from '../types';
import { AFFILIATE_LINK, COUNTRY_DATA } from '../constants';
import { Wallet, Headphones, Crown, Globe, Bitcoin, MapPin, ChevronRight, Star, Gift } from 'lucide-react';

interface Props {
  t: Translations;
  setPage: (p: PageView) => void;
  setCountry?: (c: string) => void;
  lang: Language;
}

const HomeView: React.FC<Props> = ({ t, setPage, setCountry, lang }) => {
  
  const handleCountryClick = (code: string) => {
    if (setCountry) {
      setCountry(code);
      setPage('country');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="animate-fade-in">
      <Hero t={t} setPage={setPage} />
      
      {/* Home Features Grid */}
      <div className="bg-brand-darker py-16 border-b border-slate-800">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">{t.home.featuresTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-brand-secondary p-8 rounded-2xl border border-slate-700 hover:border-brand-accent/30 transition-all hover:-translate-y-1 shadow-xl group">
                  <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-accent mb-6 mx-auto group-hover:scale-110 transition-transform">
                     <Wallet size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">{t.home.feature1Title}</h3>
                  <p className="text-brand-text text-center text-sm leading-relaxed">{t.home.feature1Body}</p>
               </div>
               <div className="bg-brand-secondary p-8 rounded-2xl border border-slate-700 hover:border-brand-accent/30 transition-all hover:-translate-y-1 shadow-xl group">
                  <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-pink mb-6 mx-auto group-hover:scale-110 transition-transform">
                     <Headphones size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">{t.home.feature2Title}</h3>
                  <p className="text-brand-text text-center text-sm leading-relaxed">{t.home.feature2Body}</p>
               </div>
               <div className="bg-brand-secondary p-8 rounded-2xl border border-slate-700 hover:border-brand-accent/30 transition-all hover:-translate-y-1 shadow-xl group">
                  <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-purple mb-6 mx-auto group-hover:scale-110 transition-transform">
                     <Crown size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">{t.home.feature3Title}</h3>
                  <p className="text-brand-text text-center text-sm leading-relaxed">{t.home.feature3Body}</p>
               </div>
            </div>
         </div>
      </div>

      {/* Arab Focus Section */}
      <div className="bg-brand-secondary py-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-10 opacity-5">
            <Globe size={400} />
         </div>
         <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <div className="inline-block px-4 py-1 bg-brand-accent/10 rounded-full text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">
                 {t.home.arabSubtitle}
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                 {t.home.arabTitle}
               </h2>
               <p className="text-xl text-brand-text mb-6 leading-relaxed">
                 {t.home.arabBody1}
               </p>
               <p className="text-brand-text mb-8">
                 {t.home.arabBody2}
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white font-bold bg-brand-darker p-4 rounded-xl border border-slate-700">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     {lang === 'ar' ? 'دعم باللغة العربية' : 'Arabic Support'}
                  </div>
                  <div className="flex items-center gap-3 text-white font-bold bg-brand-darker p-4 rounded-xl border border-slate-700">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     {lang === 'ar' ? 'خصوصية تامة' : 'Total Privacy'}
                  </div>
               </div>
            </div>
            <div className="flex-1 flex justify-center">
               <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-brand-accent/20 blur-[60px] rounded-full"></div>
                  <div className="relative bg-brand-darker border border-slate-700 rounded-2xl p-8 shadow-2xl">
                     <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-brand-accent">
                           <Bitcoin size={24} />
                        </div>
                        <div>
                           <div className="font-bold text-white">{lang === 'ar' ? 'سحب فوري' : 'Instant Withdrawal'}</div>
                           <div className="text-xs text-brand-text">{lang === 'ar' ? 'تمت المعالجة الآن' : 'Processed just now'}</div>
                        </div>
                        <div className="flex-1 text-right rtl:text-left font-mono font-bold text-green-500">
                           + $4,500
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
                           <div className="h-full bg-brand-accent w-3/4"></div>
                        </div>
                        <div className="flex justify-between text-xs text-brand-text">
                           <span>{lang === 'ar' ? 'تأكيدات الشبكة' : 'Confirmations'}</span>
                           <span>3/3</span>
                        </div>
                     </div>
                     <div className="mt-6 pt-4 text-center">
                        <span className="text-xs font-bold text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full">
                           {lang === 'ar' ? 'مكتمل' : 'COMPLETED'}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Country Grid - Moved Up for Visibility */}
      <div className="py-20 bg-brand-darker">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <div className="inline-block p-3 bg-brand-secondary rounded-full text-brand-text mb-4">
                  <MapPin size={24} />
               </div>
               <h2 className="text-4xl font-black text-white mb-4">{t.home.countriesTitle}</h2>
               <p className="text-brand-text max-w-2xl mx-auto">{t.home.countriesSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {COUNTRY_DATA.map((country) => (
                  <div 
                    key={country.code}
                    onClick={() => handleCountryClick(country.code)}
                    className="bg-brand-secondary border border-slate-700 rounded-xl p-6 text-center hover:border-brand-accent hover:-translate-y-1 transition-all cursor-pointer group shadow-lg"
                  >
                     <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{country.flag}</div>
                     <h3 className="font-bold text-white mb-1">{country.name}</h3>
                     <div className="text-brand-text text-[10px] uppercase font-bold tracking-wider group-hover:text-brand-accent transition-colors">
                        {lang === 'ar' ? 'عرض الدليل' : 'View Guide'}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* Crypto & VIP Section */}
      <div className="py-20 container mx-auto px-4">
         <div className="bg-gradient-to-br from-brand-secondary to-brand-darker border border-slate-700 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left rtl:md:text-right">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    {t.home.vipTitle}
                  </h2>
                  <p className="text-xl text-brand-text mb-8 leading-relaxed max-w-xl">
                    {t.home.vipBody}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                     <div className="flex items-center gap-3 text-white font-bold">
                        <Star className="text-yellow-500" size={20} /> {t.home.vipBenefit1}
                     </div>
                     <div className="flex items-center gap-3 text-white font-bold">
                        <ChevronRight className="text-brand-accent" size={20} /> {t.home.vipBenefit2}
                     </div>
                     <div className="flex items-center gap-3 text-white font-bold">
                        <Gift className="text-brand-pink" size={20} /> {t.home.vipBenefit3}
                     </div>
                     <div className="flex items-center gap-3 text-white font-bold">
                        <Crown className="text-brand-purple" size={20} /> {t.home.vipBenefit4}
                     </div>
                  </div>

                  <a href={AFFILIATE_LINK} target="_blank" className="inline-block bg-white text-brand-darker font-black text-lg px-10 py-4 rounded-xl hover:bg-gray-200 transition-colors shadow-xl">
                     {t.common.playNow}
                  </a>
               </div>
               
               <div className="flex-1 flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                     <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full animate-pulse"></div>
                     <div className="relative bg-brand-darker border-4 border-brand-accent rounded-full w-full h-full flex items-center justify-center shadow-2xl">
                        <Crown size={100} className="text-brand-accent drop-shadow-[0_0_15px_rgba(0,231,1,0.5)]" />
                     </div>
                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-brand-secondary border border-brand-accent px-6 py-2 rounded-full text-brand-accent font-black tracking-widest uppercase shadow-xl whitespace-nowrap">
                        Diamond VIP
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HomeView;