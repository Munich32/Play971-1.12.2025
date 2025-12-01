
import React from 'react';
import { Trophy, Calendar, ChevronRight, Activity, TrendingUp, BookOpen, Target, ArrowUpRight, Wallet, Search, HeartOff, Percent, Users, Flame } from 'lucide-react';
import { Translations, Language } from '../types';
import { AFFILIATE_LINK, IMAGES, SPORTS_MARKETS_GUIDE, SPORTS_BETTING_TIPS, SPORTS_HEADLINES } from '../constants';

interface Props { t: Translations; lang: Language }

const SportsView: React.FC<Props> = ({ t, lang }) => {
  
  const marketsGuide = SPORTS_MARKETS_GUIDE[lang];
  const tips = SPORTS_BETTING_TIPS[lang];
  const headlines = SPORTS_HEADLINES[lang];

  const getIcon = (name: string) => {
    switch(name) {
      case 'Wallet': return <Wallet size={18} />;
      case 'Search': return <Search size={18} />;
      case 'HeartOff': return <HeartOff size={18} />;
      case 'Percent': return <Percent size={18} />;
      case 'Users': return <Users size={18} />;
      case 'Activity': return <Activity size={18} />;
      default: return <Target size={18} />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-8 animate-fade-in pb-16">
       
       {/* Trending Headlines Ticker */}
       <div className="bg-brand-secondary border border-slate-700 rounded-xl overflow-hidden p-3 flex items-center gap-4 shadow-lg">
          <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs whitespace-nowrap px-2">
             <Flame size={14} className="animate-pulse" /> {lang === 'ar' ? 'شائع' : 'Trending'}
          </div>
          <div className="flex-1 overflow-hidden relative h-6">
             <div className="absolute whitespace-nowrap animate-marquee flex gap-12 text-sm font-medium text-brand-text items-center">
                {headlines.map((news, i) => (
                   <span key={i} className="flex items-center gap-2">
                      <span className="text-white font-bold">{news.category}:</span> {news.title} <span className="text-[10px] text-slate-500">({news.time})</span>
                   </span>
                ))}
                {/* Duplicate for seamless loop */}
                {headlines.map((news, i) => (
                   <span key={`dup-${i}`} className="flex items-center gap-2">
                      <span className="text-white font-bold">{news.category}:</span> {news.title} <span className="text-[10px] text-slate-500">({news.time})</span>
                   </span>
                ))}
             </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `}</style>
       </div>

       {/* Hero Banner for Sports */}
       <div className="relative rounded-2xl overflow-hidden min-h-[300px] md:h-80 bg-slate-800 shadow-2xl group">
          <img src={IMAGES.sports.banner} alt="Sports" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full text-left rtl:text-right">
            <div className="flex flex-wrap gap-2 mb-3">
               <span className="px-3 py-1 bg-brand-accent text-brand-darker font-bold text-xs rounded uppercase tracking-wider animate-pulse flex items-center gap-1">
                 <Activity size={12}/> {lang === 'ar' ? 'مباشر' : 'Live Action'}
               </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-2">{t.sports.heroTitle}</h2>
            <p className="text-gray-300 max-w-lg text-lg mb-6">{t.sports.heroSubtitle}</p>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-accent text-brand-darker font-black py-3 px-8 rounded hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg shadow-brand-accent/20">
              {t.common.playNow} <ChevronRight size={18} className="rtl:rotate-180" />
            </a>
          </div>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {/* Betting Tips Column (Replaces Fixtures) */}
          <div className="md:col-span-1 space-y-6">
             <div className="bg-brand-secondary rounded-xl border border-slate-700 overflow-hidden shadow-xl">
                <div className="p-4 border-b border-slate-700 bg-brand-darker/50 flex items-center justify-between">
                   <h3 className="font-bold text-white flex items-center gap-2">
                     <Target className="text-brand-accent" size={18} />
                     <span className="tracking-wide text-sm uppercase">{lang === 'ar' ? 'نصائح المراهنة' : 'Pro Betting Tips'}</span>
                   </h3>
                </div>
                <div className="divide-y divide-slate-700">
                   {tips.map((tip, idx) => (
                      <div key={idx} className="p-4 hover:bg-slate-700/50 transition-colors">
                         <div className="flex items-center gap-2 mb-2">
                            <div className="text-brand-accent">{getIcon(tip.icon)}</div>
                            <h4 className="font-bold text-white text-sm">{tip.title}</h4>
                         </div>
                         <p className="text-xs text-brand-text leading-relaxed">
                            {tip.body}
                         </p>
                      </div>
                   ))}
                </div>
                <div className="p-3 bg-brand-darker border-t border-slate-700 text-center">
                  <a href={AFFILIATE_LINK} target="_blank" className="text-xs font-bold text-white hover:text-brand-accent transition-colors flex items-center justify-center gap-1">
                     {lang === 'ar' ? 'طبق النصائح الآن' : 'Apply Tips Now'} <ChevronRight size={12} className="rtl:rotate-180" />
                  </a>
                </div>
             </div>

             {/* Call Out Box */}
             <div className="bg-gradient-to-br from-brand-purple/20 to-brand-secondary border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-purple p-5 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl">
                <div className="flex items-start gap-3">
                   <TrendingUp className="text-brand-purple shrink-0" size={24} />
                   <div>
                      <h4 className="text-white font-bold text-sm mb-1">{lang === 'ar' ? 'نصيحة بناء الرهان' : 'Bet Builder Tip'}</h4>
                      <p className="text-brand-text text-xs leading-relaxed">
                         {lang === 'ar' 
                           ? 'اجمع بين أسواق متعددة من نفس المباراة (مثل الفائز + أكثر من 2.5 هدف) لإنشاء رهان فريد بفرص أعلى. تقدم Stake خدمة بناء الرهان على جميع دوريات كرة القدم الكبرى.'
                           : 'Combine multiple markets from the same match (e.g. Winner + Over 2.5 Goals) to create a unique bet with higher odds. Stake offers Bet Builder on all major football leagues.'}
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* Betting Markets Guide */}
          <div className="md:col-span-2 space-y-6">
             <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-brand-accent" size={24} />
                <h3 className="text-2xl font-bold text-white">{lang === 'ar' ? 'احتراف الأسواق' : 'Mastering the Markets'}</h3>
             </div>
             
             <div className="grid sm:grid-cols-2 gap-4">
                {marketsGuide.map((market, idx) => (
                   <div key={idx} className="bg-brand-secondary rounded-xl p-5 border border-slate-700 hover:border-brand-accent/50 transition-all hover:-translate-y-1">
                      <h4 className="font-bold text-white mb-2 flex items-center justify-between">
                         {market.title}
                         {idx === 0 && <span className="text-[10px] bg-brand-accent text-brand-darker px-2 py-0.5 rounded font-bold uppercase">{lang === 'ar' ? 'شائع' : 'Popular'}</span>}
                      </h4>
                      <p className="text-sm text-brand-text mb-3 leading-relaxed min-h-[60px]">
                         {market.desc}
                      </p>
                      <div className="bg-brand-darker rounded p-2 text-xs text-brand-text/80 mb-3 border border-slate-700 font-mono">
                         <span className="text-brand-accent font-bold">{lang === 'ar' ? 'مثال: ' : 'Ex: '}</span> {market.example}
                      </div>
                      <a 
                        href={AFFILIATE_LINK} 
                        target="_blank"
                        className="block w-full text-center py-2 bg-slate-700 hover:bg-brand-accent hover:text-brand-darker rounded text-sm font-bold transition-colors"
                      >
                         {lang === 'ar' ? 'راهن الآن' : `Bet on ${market.title.split(' ')[0]}`}
                      </a>
                   </div>
                ))}
             </div>
          </div>
       </div>

       {/* Educational Footer */}
       <div className="bg-brand-darker border border-slate-800 rounded-xl p-8 mt-12">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-brand-secondary rounded-lg text-white">
                  <BookOpen size={24} />
               </div>
               <h3 className="text-2xl font-bold text-white">
                  {t.sports.descTitle}
               </h3>
            </div>
            <div className="prose prose-invert max-w-none text-brand-text leading-relaxed">
               <p className="text-lg mb-4">{t.sports.descBody}</p>
               <p>
                  {lang === 'ar' 
                    ? 'المراهنات الرياضية هي أكثر من مجرد حظ؛ إنها تتعلق بإيجاد القيمة. توجد "القيمة" عندما يكون احتمال وقوع حدث ما أكبر مما تشير إليه الاحتمالات. في Stake، نقدم احتمالات تنافسية للغاية، مما يعني عوائد أفضل لرهاناتك الفائزة مقارنة بوكلاء المراهنات التقليديين.'
                    : "Sports betting is more than just luck; it's about finding value. 'Value' exists where the probability of an event occurring is greater than what the odds imply. At Stake, we offer the most competitive odds in the industry, meaning you get better returns for your winning bets compared to traditional bookmakers."}
               </p>
               <p className="mt-4">
                  {lang === 'ar'
                    ? 'سواء كنت تراهن قبل المباراة أو أثناء اللعب (مباشر)، تتعامل منصتنا مع ملايين المعاملات في الثانية لضمان وضع رهانك بالضبط عندما تريد ذلك.'
                    : "Whether you are betting pre-match or In-Play (Live), our platform handles millions of transactions per second to ensure your bet is placed exactly when you want it."}
               </p>
            </div>
            
            <div className="mt-8 flex justify-center">
               <a href={AFFILIATE_LINK} target="_blank" className="inline-flex items-center gap-2 bg-brand-accent text-brand-darker font-black px-8 py-3 rounded-lg hover:bg-green-400 transition-colors">
                  {lang === 'ar' ? 'انضم للأكشن' : 'Join the Action'} <ArrowUpRight size={20} className="rtl:rotate-180" />
               </a>
            </div>
       </div>
    </div>
  );
};

export default SportsView;
