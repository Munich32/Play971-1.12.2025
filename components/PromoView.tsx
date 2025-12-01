
import React, { useState, useEffect } from 'react';
import { Copy, Check, Gift, ShieldCheck, Zap, Star, ArrowRight, Coins, Calendar, TrendingUp, Lock, CreditCard, Scale, ExternalLink, Lightbulb, User, Globe, Calculator, AlertOctagon, Monitor, UserCheck, MousePointer, Bell, Play, Smartphone, Users, HelpCircle, MapPin, History, Dna, Quote } from 'lucide-react';
import { Translations, Language } from '../types';
import { AFFILIATE_LINK, COMPARISON_DATA, PROMO_LONG_COPY, PROMO_TESTIMONIALS_DATA, PROMO_VALUE_ANALYSIS, PROMO_COUNTRY_CONTEXT, PROMO_TCS_TEXT, PROMO_GLOBAL_TABLE, STAKE_HISTORY_INFO, PROMO_PAYMENT_METHODS, PROMO_CRYPTO_GAMES_LIST } from '../constants';

interface Props { t: Translations; lang: Language }

const PromoView: React.FC<Props> = ({ t, lang }) => {
  const [copied, setCopied] = useState(false);
  const [animateChart, setAnimateChart] = useState(false);
  const CODE = "PLAY971";

  // Select content based on language
  const longCopy = PROMO_LONG_COPY[lang];
  const testimonials = PROMO_TESTIMONIALS_DATA[lang];
  const valueAnalysis = PROMO_VALUE_ANALYSIS[lang];
  const context = PROMO_COUNTRY_CONTEXT[lang];
  const tcs = PROMO_TCS_TEXT[lang];
  const globalTable = PROMO_GLOBAL_TABLE[lang];
  const historyInfo = STAKE_HISTORY_INFO[lang];
  const paymentMethods = PROMO_PAYMENT_METHODS[lang];
  const cryptoGames = PROMO_CRYPTO_GAMES_LIST[lang];

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setAnimateChart(true), 100);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.open(AFFILIATE_LINK, '_blank');
  };

  return (
    <div className="animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-darker py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-purple/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/50 rounded-full border border-brand-accent/30 text-brand-accent text-sm font-bold mb-6 backdrop-blur-sm">
            <Gift size={16} /> {t.promo.title}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
             {lang === 'ar' ? 'كود خصم ستيك هو Play971' : 'The Stake Promo code is Play971'}
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.promo.copy}
          </p>

          {/* Code Box */}
          <div className="max-w-xl mx-auto bg-brand-secondary/80 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between border border-brand-accent/50 mb-12 shadow-2xl shadow-brand-accent/10 relative group hover:scale-[1.02] transition-transform duration-300 cursor-pointer" onClick={handleCopy}>
            <div className="pl-6 flex-1 text-left rtl:text-right">
              <span className="text-xs text-brand-text uppercase font-bold tracking-wider block mb-1">{t.promo.codeLabel}</span>
              <span className="text-3xl md:text-4xl font-mono font-black text-white tracking-widest drop-shadow-md">{CODE}</span>
            </div>
            <button 
              className="bg-brand-accent hover:bg-green-400 text-brand-darker px-6 py-4 rounded-xl transition-colors font-bold flex items-center gap-2"
            >
              {copied ? <Check size={20} /> : <ExternalLink size={20} />}
              <span className="hidden md:inline">{copied ? t.promo.claimed : (lang === 'ar' ? 'انسخ والعب' : 'COPY & PLAY')}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        
        {/* Call Out Box: Pro Tip */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-secondary to-brand-darker border-l-4 border-yellow-500 rounded-r-xl p-6 shadow-xl mb-12 flex items-start gap-4">
           <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500 shrink-0">
              <Lightbulb size={24} />
           </div>
           <div>
              <h4 className="text-white font-bold text-lg mb-1">{lang === 'ar' ? 'نصيحة محترف: لماذا الكود مهم' : 'Pro Tip: Why Code Matters'}</h4>
              <p className="text-brand-text text-sm leading-relaxed">
                 {lang === 'ar' 
                   ? 'يقوم العديد من اللاعبين بالتسجيل مباشرة ويفوتون فرصة "الرايك باك". باستخدام PLAY971، ستقوم بتفعيل هذه الميزة فورًا. وهذا يعني أنك تستعيد نسبة من ميزة الكازينو على كل رهان تضعه، سواء ربحت أو خسرت.' 
                   : 'Many players sign up directly and miss out on "Rakeback". By using PLAY971, you activate this feature instantly. It effectively lowers the house edge on every single bet you place, returning money to your pocket whether you win or lose the hand.'}
              </p>
           </div>
        </div>

        {/* Global Codes Table */}
        <div className="bg-brand-secondary border border-slate-700 rounded-xl overflow-hidden shadow-2xl mb-16 max-w-5xl mx-auto">
            <div className="bg-brand-darker p-5 border-b border-slate-700 flex items-center gap-3">
               <Globe className="text-brand-accent" size={24} />
               {/* Updated Title Here */}
               <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'كودات خصم ستيك حسب الدولة' : 'Stake Promo Code Pages by Country'}</h3>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left rtl:text-right">
                  <thead>
                     <tr className="bg-brand-dark/50 text-brand-text text-xs uppercase tracking-wider">
                        <th className="p-4">{lang === 'ar' ? 'الدولة' : 'Country'}</th>
                        <th className="p-4">{lang === 'ar' ? 'الكود' : 'Code'}</th>
                        <th className="p-4">{lang === 'ar' ? 'ميزة حصرية' : 'Exclusive Perk'}</th>
                        <th className="p-4">{lang === 'ar' ? 'تقييم الثقة' : 'Trust Score'}</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                     {globalTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-700/50 transition-colors">
                           <td className="p-4 font-bold text-white flex items-center gap-2">
                              <MapPin size={14} className="text-slate-500" /> {row.country}
                           </td>
                           <td className="p-4 font-mono font-bold text-brand-accent">{row.code}</td>
                           <td className="p-4 text-sm text-brand-text">{row.benefit}</td>
                           <td className="p-4">
                              <div className="inline-flex items-center gap-1 bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-xs font-bold">
                                 <ShieldCheck size={12} /> {row.rating}
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-secondary p-8 rounded-2xl border border-slate-700 shadow-xl hover:border-brand-accent/50 transition-colors">
             <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mb-4 text-brand-accent">
               <ShieldCheck size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">{t.promo.benefit1}</h3>
             <p className="text-brand-text text-sm">{lang === 'ar' ? 'احصل على دعم هائل لرصيدك الأولي. نحن نطابق إيداعك الأول بنسبة 200%.' : 'Get a massive boost to your starting bankroll. We match your first deposit by 200%.'}</p>
          </div>
          <div className="bg-brand-secondary p-8 rounded-2xl border border-slate-700 shadow-xl hover:border-brand-accent/50 transition-colors">
             <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mb-4 text-brand-pink">
               <Zap size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">{t.promo.benefit2}</h3>
             <p className="text-brand-text text-sm">{lang === 'ar' ? 'سواء ربحت أو خسرت، استرد 10% من ميزة الكازينو على كل رهان تضعه. فورًا.' : 'Win or lose, get 10% of the house edge back on every single bet you place. Instantly.'}</p>
          </div>
          <div className="bg-brand-secondary p-8 rounded-2xl border border-slate-700 shadow-xl hover:border-brand-accent/50 transition-colors">
             <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mb-4 text-brand-purple">
               <Star size={24} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">{t.promo.benefit3}</h3>
             <p className="text-brand-text text-sm">{lang === 'ar' ? 'تجاوز الانتظار واحصل على تقدم فوري نحو مكافآت VIP والمكافآت الشهرية والمزيد.' : 'Skip the line and get instant progress towards VIP rewards, monthly bonuses, and more.'}</p>
          </div>
        </div>

        {/* Value Analysis Review */}
        <div className="bg-brand-darker border border-slate-800 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[60px]"></div>
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-3 bg-brand-secondary rounded-xl text-brand-accent">
                    <Calculator size={32} />
                 </div>
                 <div>
                    <h2 className="text-3xl font-black text-white">{valueAnalysis.title}</h2>
                    <p className="text-brand-text">{valueAnalysis.intro}</p>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    {valueAnalysis.sections.map((section, idx) => (
                       <div key={idx}>
                          <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
                          <p className="text-brand-text text-sm leading-relaxed">{section.body}</p>
                       </div>
                    ))}
                 </div>
                 
                 {/* Visual Breakdown */}
                 <div className="bg-brand-secondary rounded-2xl p-6 border border-slate-700">
                    <div className="flex justify-between items-center mb-6">
                       <h4 className="font-bold text-white">{lang === 'ar' ? 'رصيدك' : 'Your Bankroll'}</h4>
                       <span className="text-xs text-brand-text">{lang === 'ar' ? 'مع الكود مقابل بدونه' : 'With Code vs Without'}</span>
                    </div>
                    
                    <div className="space-y-4">
                       <div>
                          <div className="flex justify-between text-xs font-bold text-white mb-1">
                             <span>{lang === 'ar' ? 'بدون كود' : 'Without Code'}</span>
                             <span>$1,500</span>
                          </div>
                          <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                             <div className="h-full bg-slate-600 w-1/3"></div>
                          </div>
                       </div>
                       
                       <div>
                          <div className="flex justify-between text-xs font-bold text-white mb-1">
                             <span className="text-brand-accent">{lang === 'ar' ? 'مع PLAY971' : 'With PLAY971'}</span>
                             <span className="text-brand-accent">$4,500 {lang === 'ar' ? 'قيمة' : 'Value'}</span>
                          </div>
                          <div className="h-4 bg-slate-800 rounded-full overflow-hidden flex">
                             <div className="h-full bg-slate-600 w-1/3 border-r border-brand-darker"></div>
                             <div className="h-full bg-brand-accent w-2/3 animate-pulse"></div>
                          </div>
                          <div className="flex justify-between text-[10px] text-brand-text mt-1">
                             <span>{lang === 'ar' ? 'إيداع' : 'Deposit'}</span>
                             <span className="text-brand-accent">{lang === 'ar' ? '+ بونص ورايك باك' : '+ Bonus & Rakeback'}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Country Specific Context */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
           {context.map((item, idx) => (
             <div key={idx} className="bg-brand-secondary/50 p-4 rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                   <Globe size={16} className="text-brand-text"/>
                   <span className="font-bold text-white text-sm">{item.country}</span>
                </div>
                <p className="text-xs text-brand-text leading-relaxed">{item.text}</p>
             </div>
           ))}
        </div>

        {/* Real User Testimonials - SCROLLING */}
        <div className="mb-16 overflow-hidden">
           <h2 className="text-3xl font-black text-white mb-8 text-center">{lang === 'ar' ? 'لاعبون حقيقيون، نتائج حقيقية' : 'Real Players, Real Results'}</h2>
           <div className="relative w-full">
              <div className="flex gap-6 w-max animate-scroll">
                {[...testimonials, ...testimonials].map((testimonial, idx) => (
                  <div key={idx} className="w-[300px] md:w-[350px] bg-brand-darker p-6 rounded-2xl border border-slate-800 relative flex-shrink-0">
                      <div className="absolute -top-3 left-6 bg-brand-secondary px-3 py-1 rounded text-[10px] font-bold text-brand-accent border border-slate-700 shadow-md">
                        {testimonial.badge}
                      </div>
                      <p className="text-brand-text text-sm italic mb-6 pt-4 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white">
                            <User size={14} />
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">{testimonial.name}</div>
                            <div className="text-xs text-brand-text/60">{testimonial.country}</div>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
           </div>
           {/* Add style for animation if not present */}
           <style>{`
             @keyframes scroll {
               0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
             }
             .animate-scroll {
               animation: scroll 40s linear infinite;
             }
             .animate-scroll:hover {
               animation-play-state: paused;
             }
           `}</style>
        </div>

        {/* How To Claim - Enhanced */}
        <div className="bg-brand-secondary rounded-3xl p-8 md:p-12 border border-slate-700 mb-16">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8">
                 <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                   <span className="w-10 h-10 rounded-lg bg-brand-accent text-brand-darker flex items-center justify-center text-lg shadow-lg shadow-brand-accent/20">?</span>
                   {t.promo.stepTitle}
                 </h2>
                 
                 <div className="space-y-6 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-4 rtl:left-auto rtl:right-4 top-4 bottom-4 w-0.5 bg-slate-700 -z-10"></div>

                    <div className="flex gap-6 items-start">
                       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark border border-slate-600 flex items-center justify-center font-bold text-white relative z-10 shadow-md">1</div>
                       <div>
                         <p className="text-white font-bold text-lg mb-1">{t.promo.step1}</p>
                         <p className="text-sm text-brand-text">{lang === 'ar' ? 'استخدم الروابط الموجودة على هذه الصفحة لضمان وصولك إلى نموذج التسجيل الرسمي للشريك.' : 'Use the links on this page to ensure you land on the official partner registration form.'}</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark border border-slate-600 flex items-center justify-center font-bold text-white relative z-10 shadow-md">2</div>
                       <div>
                         <p className="text-white font-bold text-lg mb-1">{t.promo.step2}</p>
                         <p className="text-sm text-brand-text">{lang === 'ar' ? 'النموذج قصير. تحتاج فقط إلى اسم مستخدم وكلمة مرور.' : 'The form is short. You only need a username and password.'}</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent text-brand-darker flex items-center justify-center font-bold relative z-10 shadow-lg shadow-brand-accent/30 animate-pulse">3</div>
                       <div>
                         <p className="text-white font-bold text-lg mb-1">{t.promo.step3}</p>
                         <div className="flex items-center gap-2 mt-2 bg-brand-darker p-2 rounded-lg border border-brand-accent/30 w-fit">
                            <span className="text-brand-accent font-mono font-bold">PLAY971</span>
                            <span className="text-[10px] text-brand-text uppercase bg-brand-secondary px-1 rounded">{lang === 'ar' ? 'مطلوب' : 'Required'}</span>
                         </div>
                       </div>
                    </div>
                 </div>

                 {/* New UX Info Box */}
                 <div className="bg-gradient-to-r from-brand-darker to-brand-secondary border border-slate-600 rounded-xl p-5 mt-8 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                       <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <Bell size={16} className="text-brand-accent" />
                          {lang === 'ar' ? 'ماذا تتوقع بعد ذلك' : 'What to Expect Next'}
                       </h4>
                       <div className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold">{lang === 'ar' ? 'تفعيل تلقائي' : 'Auto-Active'}</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-brand-text">
                       <div className="flex gap-3 items-center bg-brand-dark/50 p-2 rounded border border-slate-700/50">
                          <Check size={16} className="text-green-500 shrink-0" />
                          <span>{lang === 'ar' ? 'رايك باك نشط فورًا مع أول رهان' : 'Rakeback Active instantly on 1st bet'}</span>
                       </div>
                       <div className="flex gap-3 items-center bg-brand-dark/50 p-2 rounded border border-slate-700/50">
                          <Check size={16} className="text-green-500 shrink-0" />
                          <span>{lang === 'ar' ? 'تم فتح ميزة الخزنة في الإعدادات' : 'Vault Feature Unlocked in Settings'}</span>
                       </div>
                       <div className="flex gap-3 items-center bg-brand-dark/50 p-2 rounded border border-slate-700/50">
                          <Check size={16} className="text-green-500 shrink-0" />
                          <span>{lang === 'ar' ? 'مطابقة الإيداع (اترك 24 ساعة للإضافة)' : 'Deposit Match (Allow 24h to credit)'}</span>
                       </div>
                       <div className="flex gap-3 items-center bg-brand-dark/50 p-2 rounded border border-slate-700/50">
                          <Check size={16} className="text-green-500 shrink-0" />
                          <span>{lang === 'ar' ? 'تعيين مضيف VIP (عند إيداع 1000$+)' : 'VIP Host Assigned (if depositing $1k+)'}</span>
                       </div>
                    </div>
                 </div>

                 <a 
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-accent hover:bg-green-400 text-brand-darker font-black text-lg py-4 px-8 rounded-lg shadow-lg shadow-green-500/20 transform transition hover:scale-105 mt-4 w-full md:w-auto justify-center"
                  >
                    {t.common.playNow} <ArrowRight size={20} className="rtl:rotate-180" />
                  </a>
              </div>

              {/* Visual Aid */}
              <div className="flex-1 w-full max-w-md bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl relative">
                 <div className="absolute -right-4 rtl:-right-auto rtl:-left-4 -top-4 bg-yellow-500 text-brand-darker font-bold text-xs px-3 py-1 rounded-full shadow-lg z-10 rotate-3">
                    {lang === 'ar' ? 'لا تفوت هذا!' : "Don't Miss This!"}
                 </div>
                 <div className="text-xs text-slate-400 uppercase font-bold mb-4 tracking-wider flex items-center gap-2">
                    <MousePointer size={14} /> {lang === 'ar' ? 'معاينة التسجيل' : 'Registration Preview'}
                 </div>
                 <div className="space-y-4">
                    <div className="h-10 bg-slate-700 rounded w-full flex items-center px-3 gap-3">
                       <User size={16} className="text-slate-500" />
                       <div className="w-24 h-2 bg-slate-600 rounded"></div>
                    </div>
                    <div className="h-10 bg-slate-700 rounded w-full flex items-center px-3 gap-3">
                       <Lock size={16} className="text-slate-500" />
                       <div className="w-16 h-2 bg-slate-600 rounded"></div>
                    </div>
                    
                    <div className="p-4 border-2 border-brand-accent bg-brand-accent/5 rounded-lg relative">
                       <div className="absolute -top-2.5 left-3 rtl:left-auto rtl:right-3 bg-slate-800 px-1 text-[10px] text-brand-accent font-bold">{lang === 'ar' ? 'تم تطبيق الكود' : 'Code Applied'}</div>
                       <div className="text-xs text-slate-400 font-bold mb-1">{lang === 'ar' ? 'الكود (اختياري)' : 'Code (Optional)'}</div>
                       <div className="text-xl font-mono text-white flex justify-between items-center">
                          <span>PLAY971</span>
                          <CheckCircleIcon />
                       </div>
                    </div>
                    
                    <div className="h-12 bg-brand-accent rounded w-full mt-4 flex items-center justify-center text-brand-darker font-bold shadow-lg shadow-brand-accent/20">
                       {lang === 'ar' ? 'إنشاء حساب' : 'Create Account'}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Extensive Article Section */}
        <div className="max-w-4xl mx-auto mb-20 bg-brand-secondary/30 rounded-3xl p-8 md:p-12 border border-slate-800">
           
           {/* Review Verdict Scorecard */}
           <div className="bg-brand-darker rounded-xl p-6 border border-slate-700 mb-12 flex flex-col md:flex-row gap-8 items-center shadow-xl">
              <div className="text-center md:w-1/3 border-b md:border-b-0 md:border-r rtl:md:border-r-0 rtl:md:border-l border-slate-700 pb-6 md:pb-0 md:pr-6 rtl:md:pr-0 rtl:md:pl-6">
                 <div className="text-6xl font-black text-brand-accent mb-2">9.8</div>
                 <div className="text-white font-bold uppercase tracking-wider text-sm">{lang === 'ar' ? 'تقييم Play971' : 'Play971 Score'}</div>
                 <div className="flex justify-center text-yellow-500 mt-2 gap-1">
                   <Star fill="currentColor" size={16} />
                   <Star fill="currentColor" size={16} />
                   <Star fill="currentColor" size={16} />
                   <Star fill="currentColor" size={16} />
                   <Star fill="currentColor" size={16} />
                 </div>
              </div>
              <div className="flex-1 w-full space-y-4">
                 <div className="flex justify-between text-sm font-bold text-white"><span>{lang === 'ar' ? 'تنوع الألعاب' : 'Game Variety'}</span><span className="text-brand-accent">10/10</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden"><div className="bg-brand-accent h-full w-full"></div></div>
                 
                 <div className="flex justify-between text-sm font-bold text-white"><span>{lang === 'ar' ? 'المكافآت' : 'Bonuses'}</span><span className="text-brand-accent">9.8/10</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden"><div className="bg-brand-accent h-full w-[98%]"></div></div>
                 
                 <div className="flex justify-between text-sm font-bold text-white"><span>{lang === 'ar' ? 'الدعم' : 'Support'}</span><span className="text-brand-accent">9.5/10</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden"><div className="bg-brand-accent h-full w-[95%]"></div></div>
                 
                 <div className="flex justify-between text-sm font-bold text-white"><span>{lang === 'ar' ? 'سرعة السحب' : 'Withdrawal Speed'}</span><span className="text-brand-accent">10/10</span></div>
                 <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden"><div className="bg-brand-accent h-full w-full"></div></div>
              </div>
           </div>

           <div className="text-center mb-12">
             <div className="inline-block px-4 py-1 bg-brand-accent/10 rounded text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">{lang === 'ar' ? 'نظرة عميقة' : 'Deep Dive'}</div>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t.promo.articleTitle}</h2>
             <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
           </div>

           <div className="prose prose-invert max-w-none prose-lg text-brand-text">
              <p className="text-xl text-white font-medium leading-relaxed mb-8">
                {longCopy.intro}
              </p>

              {longCopy.sections.map((section, idx) => (
                <div key={idx} className="mb-12">
                   <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                     <span className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-brand-accent text-sm font-mono border border-slate-600">{idx + 1}</span>
                     {section.title}
                   </h3>
                   <p className="leading-relaxed border-l-2 rtl:border-l-0 rtl:border-r-2 border-slate-700 pl-6 rtl:pl-0 rtl:pr-6 text-base">
                     {section.body}
                   </p>
                </div>
              ))}
           </div>
        </div>
        
        {/* NEW CONTENT UNITS TO DOUBLE LENGTH */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
           {/* Mobile Box */}
           <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8">
              <Smartphone className="text-blue-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ar' ? 'تجربة هاتف لا تضاهى' : 'Unmatched Mobile Experience'}</h3>
              <p className="text-brand-text mb-4 leading-relaxed">{lang === 'ar' ? 'تعمل Stake.com كتطبيق ويب تقدمي عالي الأداء. لا توجد برامج زائدة، ولا تحديثات للتنزيل، وبدون تأخير. للاعبين العرب الذين يستخدمون الهواتف المحمولة في الغالب للألعاب، تضمن الواجهة المحسنة أنه يمكنك وضع رهان أثناء التنقل، سواء كنت على شبكة 5G أو Wi-Fi.' : 'Stake.com operates as a high-performance Progressive Web App. There is no bloatware, no updates to download, and zero lag. For Arab players who predominantly use mobile devices for gaming, the optimized interface ensures you can place a bet on the go, whether you are on 5G or Wi-Fi.'}</p>
           </div>
           
           {/* Vault Box */}
           <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8">
              <Lock className="text-yellow-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ar' ? 'ميزة أمان "الخزنة"' : "The 'Vault' Security Feature"}</h3>
              <p className="text-brand-text mb-4 leading-relaxed">{lang === 'ar' ? 'حصريًا للحسابات التي تم التحقق منها (مثل تلك التي تستخدم PLAY971)، تسمح لك الخزنة بتخزين جزء من رصيدك بشكل منفصل عن أموال اللعب الخاصة بك. هذه أداة بالغة الأهمية للمقامرة المسؤولة، مما يسمح لك "بتأمين" الأرباح فورًا بعد الفوز الكبير.' : "Exclusive to verified accounts (like those using PLAY971), the Vault allows you to store a portion of your bankroll separately from your playing funds. This is a critical tool for responsible gaming, allowing you to 'lock in' profits instantly after a big win."}</p>
           </div>
           
           {/* Community Box */}
           <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8">
              <Users className="text-purple-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ar' ? 'مجتمع عربي نابض بالحياة' : 'Vibrant Arab Community'}</h3>
              <p className="text-brand-text mb-4 leading-relaxed">{lang === 'ar' ? 'انضم إلى الآلاف من اللاعبين في غرفة الدردشة العربية. شارك الاستراتيجيات، واحتفل بالمضاعفات الكبيرة على Aviator، وشارك في أحداث "المطر" حيث يتم توزيع العملات المشفرة المجانية على أعضاء الدردشة النشطين كل ساعة.' : "Join thousands of players in the Arabic chat room. Share strategies, celebrate big multipliers on Aviator, and participate in 'Rain' events where free crypto is distributed to active chat members every hour."}</p>
           </div>

           {/* Support Box */}
           <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8">
              <HelpCircle className="text-green-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">{lang === 'ar' ? 'دعم ذو أولوية 24/7' : '24/7 Priority Support'}</h3>
              <p className="text-brand-text mb-4 leading-relaxed">{lang === 'ar' ? 'استخدام كود PLAY971 يميز حسابك لمعالجة الدعم ذات الأولوية. تخطي قائمة الانتظار وتواصل مع كبار وكلاء الدعم الذين يمكنهم حل المشكلات المتعلقة بالإيداع أو السحب أو استفسارات اللعبة في ثوانٍ.' : 'Using the PLAY971 code flags your account for priority support handling. Skip the queue and get connected to senior support agents who can resolve issues with deposits, withdrawals, or game queries in seconds.'}</p>
           </div>
        </div>

        {/* --- NEW SECTION: Payment Methods --- */}
        <div className="max-w-6xl mx-auto mb-16">
           <h2 className="text-3xl font-black text-white mb-8 text-center">{lang === 'ar' ? 'طرق الدفع في ستيك' : 'Payment Methods at Stake'}</h2>
           <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {paymentMethods.map((method, idx) => (
                    <div key={idx} className="bg-brand-secondary p-4 rounded-xl border border-slate-700 flex items-start gap-4 hover:border-brand-accent/30 transition-colors">
                       <div className="p-2 bg-brand-dark rounded-lg text-brand-accent shrink-0">
                          <CreditCard size={20} />
                       </div>
                       <div>
                          <h4 className="text-white font-bold text-sm mb-1">{method.name}</h4>
                          <p className="text-xs text-brand-text leading-tight">{method.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* --- NEW SECTION: Crypto Games --- */}
        <div className="max-w-6xl mx-auto mb-16">
           <h2 className="text-3xl font-black text-white mb-8 text-center">{lang === 'ar' ? 'ألعاب ستيك الأصلية للكريبتو' : 'Stake Original Crypto Games'}</h2>
           <div className="bg-brand-darker border border-slate-800 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6">
                 {cryptoGames.map((game, idx) => (
                    <div key={idx} className="bg-brand-secondary p-6 rounded-xl border border-slate-700 hover:border-brand-purple/50 transition-colors text-center">
                       <h4 className="text-white font-bold text-lg mb-2">{game.name}</h4>
                       <p className="text-sm text-brand-text">{game.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* --- NEW SECTION: Stake History --- */}
        <div className="max-w-4xl mx-auto mb-20">
           <div className="bg-brand-secondary/30 border border-slate-700 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-brand-accent/10 rounded-full text-brand-accent">
                    <History size={32} />
                 </div>
                 <h2 className="text-3xl font-black text-white">{lang === 'ar' ? 'قصة ستيك' : 'The Stake Story'}</h2>
              </div>
              <div className="space-y-6 text-brand-text leading-relaxed">
                 <p><strong className="text-white">{lang === 'ar' ? 'تأسست:' : 'Founded:'}</strong> {historyInfo.founded}</p>
                 <p><strong className="text-white">{lang === 'ar' ? 'المؤسسون:' : 'Founders:'}</strong> {historyInfo.founders}</p>
                 <p>{historyInfo.origin}</p>
                 <div className="p-4 bg-brand-darker rounded-xl border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-accent italic">
                    "{historyInfo.mission}"
                 </div>
                 <p>
                    {lang === 'ar' 
                      ? 'لقد كان إد كرافن وبيجان طهراني شخصيات محورية في مجتمع المقامرة بالعملات المشفرة منذ الأيام الأولى للبيتكوين. كانت رؤيتهم هي الابتعاد عن الكازينوهات التقليدية الغامضة إلى نموذج شفاف وعادل يمكن التحقق منه، حيث يمكن التحقق من كل رهان على البلوكتشين.'
                      : 'Ed Craven and Bijan Tehrani have been pivotal figures in the crypto gambling community since the early days of Bitcoin. Their vision was to move away from opaque traditional casinos to a transparent, provably fair model where every bet can be verified on the blockchain.'}
                 </p>
                 {historyInfo.quotes && (
                   <div className="grid md:grid-cols-2 gap-6 mt-8">
                     {historyInfo.quotes.map((q, i) => (
                       <div key={i} className="bg-brand-darker p-6 rounded-xl border border-slate-700 relative">
                         <Quote size={24} className="text-brand-accent/30 absolute top-4 left-4 rtl:left-auto rtl:right-4" />
                         <p className="text-white italic mb-4 relative z-10">"{q.text}"</p>
                         <div className="text-sm font-bold text-brand-text">- {q.author}</div>
                       </div>
                     ))}
                   </div>
                 )}
              </div>
           </div>
        </div>

        {/* Legal / T&Cs Section */}
        <div className="max-w-4xl mx-auto text-center border-t border-slate-800 pt-12">
           <div className="flex justify-center mb-4 text-brand-text/50">
             <AlertOctagon size={32} />
           </div>
           <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">{lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</h4>
           <div className="bg-brand-darker p-6 rounded-xl border border-slate-800 inline-block text-left rtl:text-right">
             <p className="text-[11px] text-brand-text/70 leading-relaxed max-w-2xl font-mono">
               {tcs}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircleIcon = () => (
  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-brand-darker">
    <Check size={12} strokeWidth={4} />
  </div>
)

export default PromoView;
