
import React, { useState } from 'react';
import { Play, Sparkles, Monitor, Zap, Hexagon, Percent, Brain, Coins, BarChart3, Info } from 'lucide-react';
import { Translations, Language } from '../types';
import { AFFILIATE_LINK, CASINO_STRATEGY_GUIDE, CASINO_GAMES_LIST } from '../constants';

interface Props { t: Translations; lang: Language }

const CasinoView: React.FC<Props> = ({ t, lang }) => {
  const [activeCategory, setActiveCategory] = useState(lang === 'ar' ? 'الردهة' : 'Lobby');

  const categories = lang === 'ar' 
    ? ['الردهة', 'سلوتس', 'كازينو مباشر', 'عروض ألعاب', 'إصدارات جديدة', 'ألعاب الطاولة', 'بلاك جاك', 'روليت', 'شائع', 'تقلب عالي']
    : ['Lobby', 'Slots', 'Live Casino', 'Game Shows', 'New Releases', 'Table Games', 'Blackjack', 'Roulette', 'Popular', 'High Volatility'];

  const categoryMap: Record<string, string> = {
    'الردهة': 'Lobby',
    'سلوتس': 'Slots',
    'كازينو مباشر': 'Live Casino',
    'عروض ألعاب': 'Game Shows',
    'إصدارات جديدة': 'New Releases',
    'ألعاب الطاولة': 'Table Games',
    'بلاك جاك': 'Blackjack',
    'روليت': 'Roulette',
    'شائع': 'Popular',
    'تقلب عالي': 'High Volatility'
  };

  const selectedCategoryKey = lang === 'ar' ? (categoryMap[activeCategory] || 'Lobby') : activeCategory;

  const filteredGames = selectedCategoryKey === 'Lobby' 
    ? CASINO_GAMES_LIST[lang] 
    : CASINO_GAMES_LIST[lang].filter(game => game.category.includes(selectedCategoryKey));

  const strategy = CASINO_STRATEGY_GUIDE[lang];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 animate-fade-in space-y-12 pb-16">
      
      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
         {categories.map((cat, i) => (
           <button 
             key={i} 
             onClick={() => setActiveCategory(cat)}
             className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg
             ${activeCategory === cat ? 'bg-white text-brand-darker scale-105' : 'bg-brand-secondary text-brand-text hover:bg-slate-700 hover:text-white'}`}
           >
             {cat}
           </button>
         ))}
      </div>

      {/* Game Table Section */}
      <div>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-brand-accent rounded-sm"></span>
            {lang === 'ar' ? `تفاصيل ألعاب ${activeCategory}` : `${activeCategory} Games Breakdown`}
          </h2>
        </div>
        
        {/* Detailed Games Table */}
        <div className="bg-brand-secondary rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
           <div className="overflow-x-auto">
             <table className="w-full text-left rtl:text-right">
               <thead>
                 <tr className="bg-brand-darker text-brand-text text-xs uppercase tracking-wider border-b border-slate-700">
                   <th className="p-6">{lang === 'ar' ? 'اللعبة' : 'Game'}</th>
                   <th className="p-6">{lang === 'ar' ? 'المزود' : 'Provider'}</th>
                   <th className="p-6 w-1/3">{lang === 'ar' ? 'لماذا يحبها اللاعبون' : 'Why Players Love It'}</th>
                   <th className="p-6 w-1/3">{lang === 'ar' ? 'جاذبية اللاعب العربي' : 'Arab Player Appeal'}</th>
                   <th className="p-6 text-right rtl:text-left">{lang === 'ar' ? 'إجراء' : 'Action'}</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-700">
                 {filteredGames.length > 0 ? (
                   filteredGames.map((game) => (
                     <tr key={game.id} className="hover:bg-brand-darker/50 transition-colors group">
                       <td className="p-6">
                          <div className="font-bold text-white text-lg">{game.title}</div>
                       </td>
                       <td className="p-6">
                          <div className="text-sm text-brand-text bg-slate-800 px-2 py-1 rounded inline-block">{game.provider}</div>
                       </td>
                       <td className="p-6">
                          <p className="text-sm text-brand-text leading-relaxed">{game.desc}</p>
                       </td>
                       <td className="p-6">
                          <div className="flex gap-2 items-start">
                             <Info size={16} className="text-brand-accent shrink-0 mt-0.5" />
                             <p className="text-sm text-white italic">{game.arabAppeal}</p>
                          </div>
                       </td>
                       <td className="p-6 text-right rtl:text-left">
                          <a href={AFFILIATE_LINK} target="_blank" className="inline-flex items-center gap-2 bg-brand-accent text-brand-darker font-black px-6 py-3 rounded-lg hover:bg-green-400 transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/20 whitespace-nowrap">
                             {lang === 'ar' ? 'العب الآن' : 'Play Now'} <Play size={16} fill="currentColor" />
                          </a>
                       </td>
                     </tr>
                   ))
                 ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-brand-text italic">
                        {lang === 'ar' ? 'لا توجد ألعاب في هذه الفئة.' : 'No games found in this category.'}
                      </td>
                    </tr>
                 )}
               </tbody>
             </table>
           </div>
        </div>
      </div>
       
       {/* Call Out Box: RTP Info */}
       <div className="bg-brand-secondary border border-brand-accent/30 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-lg">
          <div className="p-4 bg-brand-accent/10 rounded-full text-brand-accent">
             <Percent size={32} />
          </div>
          <div>
             <h4 className="text-white font-bold text-xl mb-2">{lang === 'ar' ? 'هل تعلم؟ تقدم Stake أعلى نسبة عائد للاعب (RTP)' : 'Did You Know? Stake offers the Highest RTP'}</h4>
             <p className="text-brand-text text-sm leading-relaxed">
                {lang === 'ar' 
                  ? 'يرمز RTP إلى "العائد للاعب". على عكس الكازينوهات الأخرى التي تخفض نسبة RTP على ماكينات القمار إلى 94% أو أقل، تستضيف Stake إصدارات "RTP المحسنة" من الألعاب الشهيرة (تصل إلى 98% أو 99% للألعاب الأصلية). هذا يعني حسابيًا أنك تخسر أقل بمرور الوقت وتحصل على وقت لعب أكثر مقابل أموالك.'
                  : 'RTP stands for "Return to Player". Unlike other casinos that lower the RTP on slots to 94% or less, Stake hosts the "Enhanced RTP" versions of popular games (up to 98% or 99% for originals). This means mathematically, you lose less over time and get more playtime for your money.'}
             </p>
          </div>
       </div>

       {/* Detailed Feature Boxes */}
       <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-brand-secondary/50 p-6 rounded-2xl border border-slate-700">
             <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
               <Monitor size={24} />
             </div>
             <h4 className="text-lg font-bold text-white mb-2">{t.casino.liveTitle}</h4>
             <p className="text-brand-text text-sm">{t.casino.liveBody}</p>
          </div>
          <div className="bg-brand-secondary/50 p-6 rounded-2xl border border-slate-700">
             <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-4">
               <Zap size={24} />
             </div>
             <h4 className="text-lg font-bold text-white mb-2">{t.casino.slotsTitle}</h4>
             <p className="text-brand-text text-sm">{t.casino.slotsBody}</p>
          </div>
          <div className="bg-brand-secondary/50 p-6 rounded-2xl border border-slate-700">
             <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-4">
               <Hexagon size={24} />
             </div>
             <h4 className="text-lg font-bold text-white mb-2">{t.casino.providersTitle}</h4>
             <p className="text-brand-text text-sm">{t.casino.providersBody}</p>
          </div>
       </div>

       {/* Strategy Guide Section */}
       <div className="bg-brand-darker border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-white mb-2">{lang === 'ar' ? 'دليل استراتيجية الكازينو' : 'Casino Strategy Guide'}</h2>
             <p className="text-brand-text">{lang === 'ar' ? 'افهم الآليات للعب بذكاء.' : 'Understand the mechanics to play smarter.'}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-brand-secondary rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-purple-500/10 rounded text-purple-500"><BarChart3 size={24}/></div>
                   <h3 className="font-bold text-white text-lg">{strategy.volatility.title}</h3>
                </div>
                <p className="text-sm text-brand-text leading-relaxed">{strategy.volatility.body}</p>
             </div>
             <div className="bg-brand-secondary rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-green-500/10 rounded text-green-500"><Brain size={24}/></div>
                   <h3 className="font-bold text-white text-lg">{strategy.houseEdge.title}</h3>
                </div>
                <p className="text-sm text-brand-text leading-relaxed">{strategy.houseEdge.body}</p>
             </div>
             <div className="bg-brand-secondary rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-yellow-500/10 rounded text-yellow-500"><Coins size={24}/></div>
                   <h3 className="font-bold text-white text-lg">{strategy.bankroll.title}</h3>
                </div>
                <p className="text-sm text-brand-text leading-relaxed">{strategy.bankroll.body}</p>
             </div>
          </div>
       </div>

       {/* Main Description Text */}
       <div className="bg-gradient-to-br from-brand-secondary to-brand-darker border border-slate-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4 opacity-5">
            <Sparkles size={200} />
         </div>
         <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
           <div className="bg-brand-dark rounded-lg p-2 text-brand-purple border border-slate-700">
             <Sparkles size={24} />
           </div>
           {t.casino.descTitle}
         </h3>
         <div className="text-brand-text leading-relaxed text-lg max-w-4xl space-y-4 relative z-10">
           <p>{t.casino.descBody}</p>
         </div>
       </div>
    </div>
  );
};

export default CasinoView;
