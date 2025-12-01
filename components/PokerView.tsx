
import React from 'react';
import { Spade, Trophy, Users, ChevronRight, Crown, DollarSign, Club, Heart, Diamond, Target, Lock, Zap, Globe, Flame, Plane, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { Translations, Language } from '../types';
import { AFFILIATE_LINK, IMAGES, POKER_EMOTION_TEXT, POKER_WSOP_CONTENT, POKER_TERMS_GLOSSARY, POKER_HAND_RANKINGS_DETAILED } from '../constants';

interface Props { t: Translations; lang: Language }

const PokerView: React.FC<Props> = ({ t, lang }) => {
  const terms = POKER_TERMS_GLOSSARY[lang];
  const rankings = POKER_HAND_RANKINGS_DETAILED[lang];
  const wsop = POKER_WSOP_CONTENT[lang];

  return (
    <div className="animate-fade-in pb-12 bg-brand-dark">
      {/* Poker Hero */}
      <div className="relative overflow-hidden bg-brand-darker py-16 md:py-24 border-b border-brand-secondary">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/poker.png')]"></div>
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.poker.bg})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
           <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mb-6 backdrop-blur-sm border border-brand-accent/30 animate-pulse">
              <Spade size={40} fill="currentColor" />
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight max-w-3xl">
             {t.poker.heroTitle}
           </h1>
           <p className="text-lg md:text-xl text-brand-text mb-10 max-w-2xl mx-auto leading-relaxed">
             {t.poker.heroSubtitle}
           </p>
           <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-accent hover:bg-green-400 text-brand-darker font-black text-lg px-10 py-4 rounded-lg shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1">
              {t.common.playNow}
           </a>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
         {/* Game Types Grid */}
         <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-secondary rounded-2xl p-8 border border-slate-700 shadow-xl hover:border-brand-accent/50 transition-colors group relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 text-slate-800 opacity-20 rotate-12">
                  <Spade size={120} />
               </div>
               <div className="flex justify-between items-start mb-4 relative">
                  <div className="p-3 bg-red-500/10 rounded-xl text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                     <Spade size={28} />
                  </div>
                  <span className="text-xs font-bold text-brand-text uppercase bg-brand-darker px-2 py-1 rounded">{lang === 'ar' ? 'شائع' : 'Popular'}</span>
               </div>
               <h3 className="text-2xl font-bold text-white mb-3">{t.poker.holdemTitle}</h3>
               <p className="text-brand-text text-sm leading-relaxed mb-6">{t.poker.holdemBody}</p>
               <a href={AFFILIATE_LINK} className="text-white font-bold text-sm flex items-center gap-2 hover:text-brand-accent transition-colors">
                  {lang === 'ar' ? 'انضم للطاولة' : 'Join Table'} <ChevronRight size={16} className="rtl:rotate-180" />
               </a>
            </div>

            <div className="bg-brand-secondary rounded-2xl p-8 border border-slate-700 shadow-xl hover:border-brand-accent/50 transition-colors group relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 text-slate-800 opacity-20 rotate-12">
                  <Club size={120} />
               </div>
               <div className="flex justify-between items-start mb-4 relative">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                     <Users size={28} />
                  </div>
               </div>
               <h3 className="text-2xl font-bold text-white mb-3">{t.poker.omahaTitle}</h3>
               <p className="text-brand-text text-sm leading-relaxed mb-6">{t.poker.omahaBody}</p>
               <a href={AFFILIATE_LINK} className="text-white font-bold text-sm flex items-center gap-2 hover:text-brand-accent transition-colors">
                  {lang === 'ar' ? 'انضم للطاولة' : 'Join Table'} <ChevronRight size={16} className="rtl:rotate-180" />
               </a>
            </div>

            <div className="bg-brand-secondary rounded-2xl p-8 border border-slate-700 shadow-xl hover:border-brand-accent/50 transition-colors group relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 text-slate-800 opacity-20 rotate-12">
                  <Trophy size={120} />
               </div>
               <div className="flex justify-between items-start mb-4 relative">
                  <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                     <Trophy size={28} />
                  </div>
                  <span className="text-xs font-bold text-brand-accent uppercase bg-brand-accent/10 px-2 py-1 rounded border border-brand-accent/20">{lang === 'ar' ? 'رهانات عالية' : 'High Stakes'}</span>
               </div>
               <h3 className="text-2xl font-bold text-white mb-3">{t.poker.tournamentsTitle}</h3>
               <p className="text-brand-text text-sm leading-relaxed mb-6">{t.poker.tournamentsBody}</p>
               <a href={AFFILIATE_LINK} className="text-white font-bold text-sm flex items-center gap-2 hover:text-brand-accent transition-colors">
                  {lang === 'ar' ? 'عرض الجدول' : 'View Schedule'} <ChevronRight size={16} className="rtl:rotate-180" />
               </a>
            </div>
         </div>

         {/* Detailed Hand Rankings Guide - Enhanced */}
         <div className="bg-brand-secondary border border-slate-700 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-700 pb-6">
               <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent">
                  <Crown size={32} />
               </div>
               <div>
                  <h3 className="text-3xl font-black text-white">{t.poker.handRankings}</h3>
                  <p className="text-brand-text text-sm">{lang === 'ar' ? 'احفظ هذه لتفوز.' : 'Memorize these to win.'}</p>
               </div>
            </div>
            
            <div className="grid gap-4">
              {rankings.map((hand, idx) => (
                <div key={idx} className="bg-brand-darker p-4 md:p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors group">
                   <div className="flex items-center gap-4 md:w-1/3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-black text-slate-500 group-hover:bg-brand-accent group-hover:text-brand-darker transition-colors shrink-0">
                         {hand.rank}
                      </div>
                      <div>
                         <div className={`font-bold text-lg mb-1 ${hand.color}`}>{hand.name}</div>
                         <div className="text-xs text-brand-text leading-tight">{hand.desc}</div>
                      </div>
                   </div>
                   
                   {/* Card Visuals */}
                   <div className="flex gap-2">
                     {hand.cards.map((c, i) => (
                       <div key={i} className="w-10 h-14 bg-white rounded flex flex-col items-center justify-center border border-gray-300 shadow-sm relative select-none transform transition-transform group-hover:-translate-y-2" style={{ transitionDelay: `${i * 50}ms` }}>
                         <div className={`text-xs font-bold absolute top-1 left-1 ${["Hearts", "Diamonds"].includes("Hearts") ? 'text-red-600' : 'text-black'}`}>{c}</div>
                         <div className={`text-lg ${["Hearts", "Diamonds"].includes("Hearts") ? 'text-red-600' : 'text-black'}`}>
                            {/* Simple logic for demo: Royal Flush gets Spade, etc */}
                            {hand.name.includes("Flush") ? "♠" : i % 2 === 0 ? "♠" : "♥"}
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
              ))}
            </div>
         </div>

         {/* Poker Master Class: How to Play & Terms */}
         <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* How to Play Column */}
            <div className="md:col-span-2 bg-brand-darker border border-slate-800 rounded-3xl p-8">
               <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                     <GraduationCap size={32} />
                  </div>
                  <div>
                     <h3 className="text-2xl font-black text-white">{lang === 'ar' ? 'كيفية لعب اليد' : 'How a Hand is Played'}</h3>
                     <p className="text-brand-text text-sm">{lang === 'ar' ? 'تكساس هولديم خطوة بخطوة' : "Texas Hold'em Step-by-Step"}</p>
                  </div>
               </div>
               
               <div className="space-y-8 relative">
                  <div className="absolute left-4 rtl:left-auto rtl:right-4 top-4 bottom-4 w-0.5 bg-slate-800"></div>
                  
                  {[
                     { step: lang === 'ar' ? "الرهانات العمياء" : "The Blinds", text: lang === 'ar' ? "لاعبان على يسار الموزع يدفعان رهانات إجبارية (الرهان الصغير والكبير) لبدء الوعاء." : "Two players to the left of the dealer pay forced bets (Small Blind & Big Blind) to start the pot." },
                     { step: lang === 'ar' ? "ما قبل الفلوب" : "Pre-Flop", text: lang === 'ar' ? "يتم توزيع ورقتين خاصتين لكل لاعب. يبدأ الرهان من اللاعب الموجود على يسار الرهان الكبير." : "Each player is dealt two private cards ('Hole Cards'). Betting starts from the player left of the Big Blind." },
                     { step: lang === 'ar' ? "الفلوب" : "The Flop", text: lang === 'ar' ? "يتم توزيع ثلاث بطاقات مجتمعية مكشوفة. تحدث جولة أخرى من الرهان." : "Three community cards are dealt face up. Another round of betting occurs." },
                     { step: lang === 'ar' ? "التيرن" : "The Turn", text: lang === 'ar' ? "يتم توزيع بطاقة مجتمعية رابعة. جولة أخرى من الرهان." : "A fourth community card is dealt. Another round of betting." },
                     { step: lang === 'ar' ? "الريفر" : "The River", text: lang === 'ar' ? "يتم توزيع البطاقة المجتمعية الخامسة والأخيرة. تحدث جولة الرهان النهائية." : "The fifth and final community card is dealt. The final betting round takes place." },
                     { step: lang === 'ar' ? "المواجهة" : "Showdown", text: lang === 'ar' ? "يكشف اللاعبون عن أيديهم. أفضل مجموعة من 5 بطاقات تفوز بالوعاء." : "Players reveal their hands. The best 5-card combination wins the pot." }
                  ].map((s, i) => (
                     <div key={i} className="flex gap-6 relative">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center font-bold text-white text-xs shrink-0 z-10">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg mb-1">{s.step}</h4>
                           <p className="text-brand-text text-sm leading-relaxed">{s.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Glossary Column */}
            <div className="bg-brand-secondary border border-slate-700 rounded-3xl p-8">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                     <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white">{lang === 'ar' ? 'مصطلحات البوكر' : 'Poker Glossary'}</h3>
               </div>
               
               <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {terms.map((term, i) => (
                     <div key={i} className="border-b border-slate-700 pb-3 last:border-0">
                        <span className="text-brand-accent font-bold block mb-1">{term.term}</span>
                        <span className="text-xs text-brand-text leading-relaxed block">{term.def}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Crypto Poker Section */}
         <div className="max-w-4xl mx-auto bg-brand-secondary/30 border border-slate-700 rounded-3xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
               <div className="inline-block p-3 bg-brand-accent/10 rounded-full text-brand-accent mb-4">
                 <Zap size={32} />
               </div>
               <h2 className="text-3xl font-black text-white mb-4">{t.poker.cryptoPokerTitle}</h2>
               <p className="text-brand-text leading-relaxed text-lg">{t.poker.cryptoPokerBody}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
               <div className="bg-brand-darker p-6 rounded-xl border border-slate-800">
                  <Lock className="text-brand-purple mb-4" size={24} />
                  <h4 className="font-bold text-white mb-2">{lang === 'ar' ? 'خصوصية تامة' : 'Total Privacy'}</h4>
                  <p className="text-xs text-brand-text">{lang === 'ar' ? 'لا كشوف حساب بنكية متطفلة. رصيد البوكر الخاص بك يظل شأنك الخاص.' : 'No intrusive bank statements. Your poker bankroll remains your business.'}</p>
               </div>
               <div className="bg-brand-darker p-6 rounded-xl border border-slate-800">
                  <Zap className="text-yellow-500 mb-4" size={24} />
                  <h4 className="font-bold text-white mb-2">{lang === 'ar' ? 'سرعة فورية' : 'Instant Speed'}</h4>
                  <p className="text-xs text-brand-text">{lang === 'ar' ? 'أودع واجلس في دقائق. اسحب الأرباح فورًا إلى محفظتك.' : 'Deposit and be seated in minutes. Cash out winnings instantly to your wallet.'}</p>
               </div>
               <div className="bg-brand-darker p-6 rounded-xl border border-slate-800">
                  <Globe className="text-blue-500 mb-4" size={24} />
                  <h4 className="font-bold text-white mb-2">{lang === 'ar' ? 'مجموعة عالمية' : 'Global Pool'}</h4>
                  <p className="text-xs text-brand-text">{lang === 'ar' ? 'العب ضد لاعبين من جميع أنحاء العالم دون قيود إقليمية.' : 'Play against players from all over the world with no region locking.'}</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PokerView;
