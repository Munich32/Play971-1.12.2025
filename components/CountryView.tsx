
import React, { useState } from 'react';
import { Translations, Language } from '../types';
import { COUNTRY_DETAILS, AFFILIATE_LINK } from '../constants';
import { ShieldCheck, CheckCircle, XCircle, CreditCard, ExternalLink, Trophy, Copy, Check, BookOpen, Star, Gem, MapPin, User } from 'lucide-react';

interface Props {
  t: Translations;
  countryCode: string;
  lang: Language;
}

const CountryView: React.FC<Props> = ({ t, countryCode, lang }) => {
  const [copied, setCopied] = useState(false);
  const details = COUNTRY_DETAILS[lang][countryCode];

  const handleCopy = () => {
    navigator.clipboard.writeText("PLAY971");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.open(AFFILIATE_LINK, '_blank');
  };

  if (!details) return <div className="text-white text-center py-20">Country data not found.</div>;

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <div className="bg-brand-darker py-16 md:py-24 border-b border-brand-secondary">
        <div className="container mx-auto px-4 text-center">
           <div className="text-6xl mb-6 animate-pulse">{details.flag}</div>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
             {lang === 'ar' 
               ? `كود خصم ستيك في ${details.name} هو Play971` 
               : `Stake Promo code in ${details.name} is Play971`}
           </h1>
           <p className="text-xl text-brand-text max-w-3xl mx-auto leading-relaxed">
             {details.introBody}
           </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10">
         {/* Promo Unit */}
         <div className="max-w-3xl mx-auto bg-brand-secondary border border-brand-accent rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="text-center mb-8">
               <div className="inline-block px-4 py-1 rounded bg-brand-accent/20 text-brand-accent font-bold text-xs uppercase tracking-widest mb-4">
                 {lang === 'ar' ? 'عرض رسمي' : 'Official Offer'}
               </div>
               <h3 className="text-2xl font-black text-white mb-2">{lang === 'ar' ? 'عرض ترحيبي حصري' : 'Exclusive Welcome Offer'}</h3>
               <p className="text-brand-text">
                 {lang === 'ar' ? 'استخدم الكود ' : 'Use code '}
                 <span className="text-brand-accent font-bold">PLAY971</span>
                 {lang === 'ar' ? ` لفتح أفضل المكافآت في ${details.name}.` : ` to unlock the best bonuses in ${details.name}.`}
               </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
               <div 
                 onClick={handleCopy}
                 className="w-full md:w-auto flex items-center justify-between bg-brand-dark px-6 py-4 rounded-xl border border-slate-700 cursor-pointer hover:border-brand-accent transition-colors min-w-[280px]"
               >
                  <span className="font-mono font-black text-2xl text-white tracking-widest">PLAY971</span>
                  {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-brand-text" />}
               </div>
               <a 
                 href={AFFILIATE_LINK}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full md:w-auto px-8 py-4 bg-brand-accent hover:bg-green-400 text-brand-darker font-black text-xl rounded-xl shadow-lg shadow-green-500/20 transition-transform hover:-translate-y-1 text-center"
               >
                 {lang === 'ar' ? 'طالب الآن' : 'CLAIM NOW'}
               </a>
            </div>
         </div>

         {/* NEW: Best Code Article Box */}
         <div className="bg-gradient-to-br from-brand-secondary to-brand-dark border border-slate-700 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/30">
                  <Gem size={32} />
               </div>
               <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {details.bestCodeTitle}
               </h2>
            </div>
            <div className="prose prose-invert max-w-none text-brand-text leading-relaxed">
               <p className="text-lg">{details.bestCodeBody}</p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 flex flex-wrap gap-4">
               <div className="flex items-center gap-2 text-white font-bold text-sm bg-brand-dark px-4 py-2 rounded-lg">
                  <CheckCircle size={16} className="text-green-500" />
                  {lang === 'ar' ? `تم التحقق لـ ${details.name}` : `Verified for ${details.name}`}
               </div>
               <div className="flex items-center gap-2 text-white font-bold text-sm bg-brand-dark px-4 py-2 rounded-lg">
                  <CheckCircle size={16} className="text-green-500" />
                  {lang === 'ar' ? 'أقصى مكافأة نشطة' : 'Max Bonus Active'}
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Crypto Benefits */}
            <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8 hover:border-brand-purple/50 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-brand-purple" size={32} />
                  {lang === 'ar' ? `مزايا الكريبتو في ${details.name}` : `Crypto Benefits in ${details.name}`}
               </h3>
               <ul className="space-y-4">
                  {details.cryptoBenefits.map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start text-brand-text">
                       <CheckCircle size={20} className="text-brand-purple shrink-0 mt-0.5" />
                       <span>{item}</span>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Pros & Cons */}
            <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8">
               <h3 className="text-2xl font-bold text-white mb-6">{lang === 'ar' ? 'الإيجابيات والسلبيات' : 'Pros & Cons'}</h3>
               <div className="space-y-6">
                  <div>
                     <h4 className="text-sm font-bold text-green-500 uppercase tracking-widest mb-3">{lang === 'ar' ? 'إيجابيات' : 'Pros'}</h4>
                     <ul className="space-y-2">
                        {details.pros.map((item, idx) => (
                          <li key={idx} className="flex gap-3 items-center text-white text-sm">
                             <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                             {item}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-3">{lang === 'ar' ? 'سلبيات' : 'Cons'}</h4>
                     <ul className="space-y-2">
                        {details.cons.map((item, idx) => (
                          <li key={idx} className="flex gap-3 items-center text-brand-text text-sm">
                             <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                             {item}
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Popular Sports */}
            <div className="bg-gradient-to-br from-brand-secondary to-brand-dark border border-slate-700 rounded-2xl p-8">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Trophy className="text-yellow-500" size={32} />
                  {lang === 'ar' ? `أهم الرياضات في ${details.name}` : `Top Sports in ${details.name}`}
               </h3>
               <div className="space-y-6">
                  {details.popularSports.map((sport, idx) => (
                     <div key={idx} className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-white font-bold text-lg mb-1">{sport.name}</h4>
                        <p className="text-sm text-brand-text">{sport.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="mt-8">
                 <a href={AFFILIATE_LINK} target="_blank" className="text-brand-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {lang === 'ar' ? `راهن على رياضة ${details.name}` : `Bet on ${details.name} Sports`} <ExternalLink size={16} />
                 </a>
               </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gradient-to-br from-brand-secondary to-brand-dark border border-slate-700 rounded-2xl p-8">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CreditCard className="text-blue-500" size={32} />
                  {lang === 'ar' ? 'طرق الدفع' : 'Payment Methods'}
               </h3>
               <div className="space-y-6">
                  {details.paymentMethods.map((method, idx) => (
                     <div key={idx} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white font-bold text-xs shrink-0">
                           {method.name.slice(0, 3)}
                        </div>
                        <div>
                           <h4 className="text-white font-bold mb-1">{method.name}</h4>
                           <p className="text-xs text-brand-text">{method.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="mt-8">
                 <a href={AFFILIATE_LINK} target="_blank" className="text-brand-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {lang === 'ar' ? 'أودع الآن' : 'Deposit Now'} <ExternalLink size={16} />
                 </a>
               </div>
            </div>
         </div>
         
         {/* Extended Article Content */}
         <div className="max-w-4xl mx-auto bg-brand-darker border border-slate-800 rounded-3xl p-8 md:p-12 mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-6">
               <div className="p-3 bg-brand-secondary rounded-lg text-white">
                  <BookOpen size={32} />
               </div>
               <div>
                  <h2 className="text-3xl font-black text-white">{lang === 'ar' ? 'دليل شامل' : 'Comprehensive Guide'}</h2>
                  <p className="text-brand-text text-sm">{lang === 'ar' ? `كل ما تحتاج معرفته عن المراهنة في ${details.name}` : `Everything you need to know about betting in ${details.name}`}</p>
               </div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-brand-text">
               {details.articleContent.map((section, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                     <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                     {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="mb-4 leading-relaxed">{para}</p>
                     ))}
                  </div>
               ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700 text-center">
               <a href={AFFILIATE_LINK} target="_blank" className="inline-block bg-white text-brand-darker font-black text-lg px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  {lang === 'ar' ? `ابدأ اللعب في ${details.name}` : `Start Playing in ${details.name}`}
               </a>
            </div>
         </div>

         {/* Local Testimonials Section */}
         <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-black text-white mb-8 text-center">
              {lang === 'ar' ? `ماذا يقول اللاعبون في ${details.name}` : `What players in ${details.name} think`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {details.testimonials.map((testi, idx) => (
                  <div key={idx} className="bg-brand-secondary border border-slate-700 rounded-xl p-6 hover:border-brand-accent/30 transition-colors shadow-lg">
                     <div className="flex gap-1 text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} size={14} fill={i < testi.rating ? "currentColor" : "none"} className={i < testi.rating ? "" : "text-slate-600"} />
                        ))}
                     </div>
                     <p className="text-brand-text text-sm italic mb-6 min-h-[60px]">"{testi.quote}"</p>
                     <div className="flex items-center gap-3 border-t border-slate-700 pt-4">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white">
                           <User size={14} />
                        </div>
                        <div>
                           <div className="font-bold text-white text-sm">{testi.name}</div>
                           <div className="flex items-center gap-1 text-xs text-brand-text/60">
                              <MapPin size={10} /> {testi.location}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
    </div>
  );
};

export default CountryView;
