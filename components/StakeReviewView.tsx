
import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, XCircle, ChevronRight, ExternalLink, Globe, Lock, Crown } from 'lucide-react';
import { Translations, PageView, Language } from '../types';
import { STAKE_REVIEW_COPY, AFFILIATE_LINK, STAKE_REVIEW_COUNTRY_TABLE } from '../constants';

interface Props { 
  t: Translations;
  setPage: (p: PageView) => void;
  setCountry?: (c: string) => void;
  lang: Language;
}

const StakeReviewView: React.FC<Props> = ({ t, setPage, setCountry, lang }) => {
  const [activeSection, setActiveSection] = useState(0);

  const reviewCopy = STAKE_REVIEW_COPY[lang];
  const countryTable = STAKE_REVIEW_COUNTRY_TABLE[lang];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="review-section-"]');
      let current = 0;
      sections.forEach((section, index) => {
        const top = (section as HTMLElement).offsetTop - 150;
        if (window.scrollY >= top) {
          current = index;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const el = document.getElementById(`review-section-${index}`);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  };

  const handleCountryLink = (code: string) => {
    if (setCountry) {
      setCountry(code);
      setPage('country');
      window.scrollTo(0, 0);
    }
  }

  // Helper to map localized country names back to codes is complex, 
  // so we will rely on the index or assume the order matches or pass code in the data.
  // Ideally, the data should contain the code. I'll stick to a simple mapping based on known names if needed, 
  // or update the data structure to include the code.
  // For now, let's just make the country clickable without logic or fix logic.
  // Since I can't easily map localized strings back to codes reliably without a map, 
  // I will just use the country name string for display and not link it for now in Arabic, 
  // OR better: Assume the data object has a 'code' field for the country code. 
  // I'll update constants to include 'countryCode' in the table data.

  return (
    <div className="animate-fade-in pb-20 relative">
      {/* Hero Header */}
      <div className="bg-brand-darker border-b border-brand-secondary py-16">
        <div className="container mx-auto px-4 text-center">
           <div className="inline-block px-4 py-1 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">
             {lang === 'ar' ? 'مراجعة موثوقة • تحديث ديسمبر 2025' : 'Trusted Review • Updated Dec 2025'}
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-6">{lang === 'ar' ? 'مراجعة STAKE.COM' : 'STAKE.COM REVIEW'}</h1>
           <p className="text-xl text-brand-text max-w-2xl mx-auto leading-relaxed">
             {lang === 'ar' 
               ? 'الغوص العميق النهائي في أكبر كازينو للعملات المشفرة في العالم. هل هو شرعي؟ هل هو عادل؟ ولماذا يجب أن يهتم اللاعبون العرب؟'
               : "The definitive deep-dive into the world's largest crypto casino. Is it legit? Is it fair? And why should Arab players care?"}
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
         {/* Sidebar Navigation (Sticky) */}
         <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 bg-brand-secondary rounded-xl border border-slate-700 p-6 shadow-xl">
               <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">{t.review.toc}</h3>
               <ul className="space-y-1">
                 {reviewCopy.sections.map((section, idx) => (
                   <li key={idx}>
                     <button 
                       onClick={() => scrollToSection(idx)}
                       className={`w-full text-left rtl:text-right px-4 py-2 rounded-lg text-sm font-medium transition-all flex justify-between items-center
                         ${activeSection === idx 
                           ? 'bg-brand-accent text-brand-darker font-bold' 
                           : 'text-brand-text hover:text-white hover:bg-slate-700'}`}
                     >
                       {section.title}
                       {activeSection === idx && <ChevronRight size={14} className="rtl:rotate-180" />}
                     </button>
                   </li>
                 ))}
               </ul>
               <div className="mt-8 pt-8 border-t border-slate-600">
                  <div className="text-center mb-4">
                     <div className="text-5xl font-black text-white mb-1">9.8</div>
                     <div className="flex justify-center text-brand-accent gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                     </div>
                     <div className="text-xs text-brand-text uppercase font-bold">{lang === 'ar' ? 'التقييم العام' : 'Overall Rating'}</div>
                  </div>
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-brand-accent hover:bg-green-400 text-brand-darker font-black text-center rounded-lg transition-colors">
                     {lang === 'ar' ? 'اطلب المكافأة' : 'CLAIM BONUS'}
                  </a>
               </div>
            </div>
         </div>

         {/* Main Content */}
         <div className="flex-1 max-w-4xl">
            {/* Country Bonus Table */}
            <div className="bg-brand-secondary border border-brand-accent rounded-xl overflow-hidden mb-16 shadow-2xl">
              <div className="bg-brand-accent/10 p-4 border-b border-brand-accent/20 flex items-center gap-3">
                 <Crown className="text-brand-accent" size={24} />
                 <h2 className="text-xl font-bold text-white">{lang === 'ar' ? 'عروض مكافآت الدول الحصرية' : 'Exclusive Country Bonus Offers'}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left rtl:text-right">
                   <thead>
                      <tr className="bg-brand-darker text-brand-text text-xs uppercase tracking-wider">
                         <th className="p-4">{lang === 'ar' ? 'الدولة' : 'Country'}</th>
                         <th className="p-4">{lang === 'ar' ? 'الكود' : 'Code'}</th>
                         <th className="p-4">{lang === 'ar' ? 'ميزة VIP' : 'VIP Benefit'}</th>
                         <th className="p-4">{lang === 'ar' ? 'إجراء' : 'Action'}</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-700 text-sm">
                      {countryTable.map((item, idx) => (
                        <tr key={idx} className="hover:bg-brand-darker/50 transition-colors">
                           <td className="p-4 font-bold text-white">
                             {/* Simplified linking logic based on position or assuming known codes for key countries */}
                             {/* For robustness in this demo, just display name if code mapping is complex, or use a manual mapping if possible. */}
                             {/* Since I am updating constants, I can add a countryCode field to the table data for linking. */}
                             <button onClick={() => handleCountryLink(item.countryCode || 'AE')} className="hover:text-brand-accent underline decoration-brand-accent/50 underline-offset-4">
                               {item.country}
                             </button>
                           </td>
                           <td className="p-4 font-mono font-bold text-brand-accent">{item.code}</td>
                           <td className="p-4 text-brand-text">{item.detail}</td>
                           <td className="p-4">
                              <a href={AFFILIATE_LINK} target="_blank" className="text-xs bg-white text-brand-darker font-bold px-3 py-1 rounded hover:bg-gray-200">
                                {lang === 'ar' ? 'مطالبة' : 'Claim'}
                              </a>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
              </div>
            </div>

            {/* Long Form Article */}
            <div className="prose prose-invert prose-lg max-w-none text-brand-text mb-16">
               <h1 className="text-3xl md:text-5xl font-black text-white mb-8">{reviewCopy.longFormArticle.title}</h1>
               <p className="text-xl text-white font-medium leading-relaxed mb-8">{reviewCopy.longFormArticle.p1}</p>
               <p className="mb-8">{reviewCopy.longFormArticle.p2}</p>
               
               <div className="bg-brand-darker p-8 rounded-2xl border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-accent my-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ar' ? 'شرح مكافأة 3000 دولار' : 'The $3,000 Bonus Explained'}</h3>
                  <p className="text-base text-brand-text">{reviewCopy.longFormArticle.p3}</p>
               </div>

               <p className="mb-8">{reviewCopy.longFormArticle.p4}</p>
               <p className="mb-8">{reviewCopy.longFormArticle.p5}</p>
            </div>

            {/* Existing Sections */}
            {reviewCopy.sections.map((section, idx) => (
               <section key={idx} id={`review-section-${idx}`} className="mb-16 scroll-mt-32 bg-brand-secondary/30 p-8 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-black text-white border border-slate-600">
                        {section.rating}
                     </div>
                     <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="prose prose-invert prose-lg max-w-none text-brand-text">
                     <p>{section.body}</p>
                  </div>
               </section>
            ))}

            {/* Verdict Box */}
            <div className="bg-brand-secondary border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl">
               <h2 className="text-3xl font-black text-white mb-8 text-center">{t.review.verdict}</h2>
               
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                     <h4 className="text-green-500 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <CheckCircle size={20} /> {t.review.pros}
                     </h4>
                     <ul className="space-y-3">
                        <li className="flex gap-3 text-brand-text text-sm">
                           <span className="text-green-500 font-bold">+</span> {lang === 'ar' ? 'سحوبات كريبتو فورية' : 'Instant crypto withdrawals'}
                        </li>
                        <li className="flex gap-3 text-brand-text text-sm">
                           <span className="text-green-500 font-bold">+</span> {lang === 'ar' ? 'مكتبة ألعاب ضخمة تضم 3000+ لعبة' : 'Massive 3,000+ game library'}
                        </li>
                        <li className="flex gap-3 text-brand-text text-sm">
                           <span className="text-green-500 font-bold">+</span> {lang === 'ar' ? 'أفضل مكافآت VIP في الفئة' : 'Best-in-class VIP rewards'}
                        </li>
                        <li className="flex gap-3 text-brand-text text-sm">
                           <span className="text-green-500 font-bold">+</span> {lang === 'ar' ? 'دعم باللغة العربية متاح' : 'Arabic support available'}
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-red-500 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <XCircle size={20} /> {t.review.cons}
                     </h4>
                     <ul className="space-y-3">
                        <li className="flex gap-3 text-brand-text text-sm">
                           <span className="text-red-500 font-bold">-</span> {lang === 'ar' ? 'لا توجد إيداعات ورقية تقليدية (كريبتو فقط)' : 'No traditional Fiat deposits (Crypto only)'}
                        </li>
                        <li className="flex gap-3 text-brand-text text-sm">
                           <span className="text-red-500 font-bold">-</span> {lang === 'ar' ? 'الاحتمالات في الرياضات المتخصصة قد تكون أقل' : 'Odds on niche sports can be lower'}
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="bg-brand-darker rounded-xl p-6 border border-slate-800 mb-8">
                  <p className="text-white italic text-center text-lg">"{reviewCopy.verdict}"</p>
               </div>

               <div className="text-center">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-brand-accent hover:bg-green-400 text-brand-darker font-black text-xl rounded-xl shadow-lg shadow-green-500/20 transition-transform hover:-translate-y-1">
                     {lang === 'ar' ? 'العب الآن' : 'PLAY NOW'} <ExternalLink size={20} />
                  </a>
                  <p className="text-xs text-brand-text mt-4">{lang === 'ar' ? '18+ | العب بمسؤولية' : '18+ | Play Responsibly'}</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default StakeReviewView;
