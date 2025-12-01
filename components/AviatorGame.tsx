
import React, { useState, useEffect, useRef } from 'react';
import { Plane, TrendingUp, AlertTriangle, Info, Activity, BarChart, Calculator, History, Brain, Target, Shield, Gauge, Bell, X, User, DollarSign, Trophy } from 'lucide-react';
import { Translations, Language } from '../types';
import { AFFILIATE_LINK, CRYPTO_USERNAMES, AVIATOR_RISK_STRATEGIES } from '../constants';

interface AviatorGameProps {
  t: Translations;
  lang: Language;
}

interface GraphPoint {
  t: number; // Time
  m: number; // Multiplier
}

interface LiveBet {
  id: string;
  user: string;
  bet: number;
  mult: string; // "-" or "2.5x"
  cashedOut: boolean;
}

interface PlayerHistoryItem {
  id: string;
  time: Date;
  bet: number;
  mult: number; // 0 if crashed/lost
  win: number;
}

interface GameNotification {
  id: number;
  message: string;
  type: 'info' | 'success' | 'danger' | 'gold';
}

type TabMode = 'MANUAL' | 'AUTO';

const AviatorGame: React.FC<AviatorGameProps> = ({ t, lang }) => {
  // Game State
  const [multiplier, setMultiplier] = useState(1.00);
  const [gameState, setGameState] = useState<'IDLE' | 'RUNNING' | 'CRASHED'>('IDLE');
  const [balance, setBalance] = useState(10000);
  const [betAmount, setBetAmount] = useState(100);
  const [cashedOutAt, setCashedOutAt] = useState<number | null>(null);
  
  // Stats & History
  const [history, setHistory] = useState<number[]>([1.23, 2.50, 1.10, 5.43, 1.05, 12.00]); // Dummy initial history
  const [playerHistory, setPlayerHistory] = useState<PlayerHistoryItem[]>([]);
  const [liveBets, setLiveBets] = useState<LiveBet[]>([]);
  const [sidebarTab, setSidebarTab] = useState<'LIVE' | 'MINE'>('LIVE');
  const [notifications, setNotifications] = useState<GameNotification[]>([]);

  // Auto Mode
  const [mode, setMode] = useState<TabMode>('MANUAL');
  const [autoCashOutEnabled, setAutoCashOutEnabled] = useState(false);
  const [autoCashOutValue, setAutoCashOutValue] = useState<number>(2.00);
  const [isAutoBetting, setIsAutoBetting] = useState(false);

  // Engine Refs
  const pointsRef = useRef<GraphPoint[]>([{t: 0, m: 1}]);
  const reqRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const crashPointRef = useRef<number>(0);
  const autoCashOutRef = useRef<{enabled: boolean, value: number}>({ enabled: false, value: 2.00 });
  const isCashedOutRef = useRef(false);
  
  const strategies = AVIATOR_RISK_STRATEGIES[lang];

  // --- Notification System ---
  const addNotification = (message: string, type: 'info' | 'success' | 'danger' | 'gold') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  // --- Live Bets Simulation ---
  useEffect(() => {
    const generateUser = () => {
      const prefix = CRYPTO_USERNAMES[Math.floor(Math.random() * CRYPTO_USERNAMES.length)];
      const suffix = Math.floor(Math.random() * 999);
      return `${prefix}${suffix}`;
    };

    const initialBets: LiveBet[] = Array(12).fill(null).map((_, i) => ({
      id: Math.random().toString(36).substring(2, 9),
      user: generateUser(),
      bet: Math.floor(Math.random() * 500 + 10),
      mult: '-',
      cashedOut: false
    }));
    setLiveBets(initialBets);

    const interval = setInterval(() => {
      setLiveBets(prev => {
        const next = [...prev];
        // Randomly add new bet
        if (Math.random() > 0.4) {
          next.unshift({
            id: Math.random().toString(36).substring(2, 9),
            user: generateUser(),
            bet: Math.floor(Math.random() * 500 + 10),
            mult: '-',
            cashedOut: false
          });
          if (next.length > 20) next.pop();
        }
        // Randomly cash out
        return next.map(b => {
          if (!b.cashedOut && Math.random() > 0.15) {
             const m = (Math.random() * 8 + 1.1).toFixed(2);
             return { ...b, mult: `${m}x`, cashedOut: true };
          }
          return b;
        });
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Update Auto Cashout Ref
  useEffect(() => {
    autoCashOutRef.current = { enabled: autoCashOutEnabled, value: autoCashOutValue };
  }, [autoCashOutEnabled, autoCashOutValue]);

  // --- Game Loop Engine ---
  const startGame = () => {
    if (balance < betAmount) {
      setIsAutoBetting(false);
      addNotification(lang === 'ar' ? "رصيد تجريبي غير كاف!" : "Insufficient Demo Balance!", "danger");
      return;
    }
    
    // Reset State
    setBalance(prev => prev - betAmount);
    setGameState('RUNNING');
    setCashedOutAt(null);
    isCashedOutRef.current = false;
    setMultiplier(1.00);
    pointsRef.current = [{t: 0, m: 1}]; 
    
    // Determine Crash Point
    const r = Math.random();
    // E = 100 / (100 - r) approx logic, with house edge
    let cp = 0.99 / (1 - r);
    if (cp < 1) cp = 1;
    // Cap for demo purposes so it doesn't run forever
    if (cp > 30) cp = 30; 
    
    // Occasional instant crash
    if (Math.random() < 0.05) cp = 1.00;

    crashPointRef.current = cp;
    startTimeRef.current = Date.now();
    
    addNotification(lang === 'ar' ? "الطائرة تقلع!" : "Plane Taking Off!", "info");
    runGameLoop();
  };

  const runGameLoop = () => {
    const now = Date.now();
    const elapsed = (now - startTimeRef.current) / 1000; // seconds
    
    // Growth function
    // Multiplier(t) = e^(0.1 * t) roughly
    const k = 0.15; // Speed constant
    const newMult = Math.max(1, Math.exp(k * elapsed));

    // Update Data Points
    pointsRef.current.push({ t: elapsed, m: newMult });

    // Check Auto Cash Out
    if (
      autoCashOutRef.current.enabled && 
      !isCashedOutRef.current && 
      newMult >= autoCashOutRef.current.value &&
      crashPointRef.current > autoCashOutRef.current.value
    ) {
      performCashOut(autoCashOutRef.current.value);
    }

    // Check Crash
    if (newMult >= crashPointRef.current) {
      setMultiplier(crashPointRef.current);
      handleCrash();
    } else {
      setMultiplier(newMult);
      reqRef.current = requestAnimationFrame(runGameLoop);
    }
  };

  const handleCrash = () => {
    if (reqRef.current) cancelAnimationFrame(reqRef.current);
    setGameState('CRASHED');
    setHistory(prev => [crashPointRef.current, ...prev].slice(0, 50));
    
    if (!isCashedOutRef.current) {
       addNotification(lang === 'ar' ? "تحطمت!" : "Crashed!", "danger");
       setPlayerHistory(prev => [{
          id: Date.now().toString(),
          time: new Date(),
          bet: betAmount,
          mult: 0,
          win: 0
       }, ...prev]);
    }
  };

  const performCashOut = (val: number) => {
    isCashedOutRef.current = true;
    const winAmount = betAmount * val;
    setBalance(prev => prev + winAmount);
    setCashedOutAt(val);
    
    if (val >= 10.0) {
      addNotification(lang === 'ar' ? `فوز ضخم! ${val.toFixed(2)}x!` : `MEGA WIN! ${val.toFixed(2)}x!`, "gold");
    } else {
      addNotification(lang === 'ar' ? `تم السحب: ${val.toFixed(2)}x` : `Cashed out: ${val.toFixed(2)}x`, "success");
    }
    
    setPlayerHistory(prev => [{
      id: Date.now().toString(),
      time: new Date(),
      bet: betAmount,
      mult: val,
      win: winAmount
    }, ...prev]);
  };

  const cashOut = () => {
    if (gameState !== 'RUNNING' || cashedOutAt) return;
    performCashOut(multiplier);
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  // Auto Bet Trigger
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isAutoBetting && gameState === 'CRASHED') {
      timeout = setTimeout(() => {
        startGame();
      }, 3000); // Wait 3s before next round
    }
    return () => clearTimeout(timeout);
  }, [isAutoBetting, gameState]);

  // --- Visualization Helpers ---
  const lastPoint = pointsRef.current[pointsRef.current.length - 1] || {t: 0, m: 1};
  
  // Scale the graph view
  // X axis: Time (seconds). Min 5s.
  // Y axis: Multiplier (x). Min 2x.
  const maxX = Math.max(5, lastPoint.t * 1.1); 
  const maxY = Math.max(2, lastPoint.m * 1.1);

  // Map value to percentage (0-100)
  const mapX = (t: number) => (t / maxX) * 100;
  // SVG Y is inverted (0 is top), so we do 100 - value
  // We map multiplier 1 to Y=100 (bottom) and maxY to Y=0 (top)
  const mapY = (m: number) => 100 - ((m - 1) / (maxY - 1)) * 100;

  const pathData = pointsRef.current.map((p, i) => {
    const x = mapX(p.t);
    const y = mapY(p.m);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const areaData = `${pathData} L ${mapX(lastPoint.t)} 100 L 0 100 Z`;

  // Plane Position & Rotation
  const planeX = Math.min(92, Math.max(0, mapX(lastPoint.t))); // Clamp to keep inside
  const planeY = Math.min(92, Math.max(0, mapY(lastPoint.m))); // Clamp to keep inside

  let angle = 0;
  if (pointsRef.current.length > 5) {
      const pPrev = pointsRef.current[pointsRef.current.length - 5];
      // Calculate angle in screen space requires considering the aspect ratio of the SVG container
      // For simplicity, we approximate the slope
      const dx = mapX(lastPoint.t) - mapX(pPrev.t);
      const dy = mapY(lastPoint.m) - mapY(pPrev.m); // dy is negative as it goes up
      angle = Math.atan2(dy, dx) * (180 / Math.PI);
  }
  // For RTL, we might want to flip the plane or angle, but usually graph goes left to right even in RTL.
  // Keeping standard graph direction.

  // Stats
  const stats = {
    total: history.length,
    blue: history.filter(x => x < 2).length,
    purple: history.filter(x => x >= 2 && x < 10).length,
    pink: history.filter(x => x >= 10).length,
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 animate-fade-in pb-16 space-y-6">
      
      {/* Notifications Layer */}
      <div className="fixed top-20 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
         {notifications.map(n => (
           <div key={n.id} className={`pointer-events-auto px-6 py-3 rounded-lg shadow-2xl font-bold text-white flex items-center gap-3 animate-slide-in-right backdrop-blur-md
             ${n.type === 'success' ? 'bg-green-500/90 border border-green-400' : 
               n.type === 'danger' ? 'bg-red-500/90 border border-red-400' : 
               n.type === 'gold' ? 'bg-yellow-500/90 border border-yellow-300 text-black' :
               'bg-blue-500/90 border border-blue-400'}`}>
               {n.type === 'gold' ? <Trophy className="animate-bounce" /> : <Info />}
               {n.message}
           </div>
         ))}
      </div>

      {/* Main Game Container */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* LEFT: Game & Controls */}
        <div className="flex-1 flex flex-col gap-4">
           
           {/* Game Canvas */}
           <div className="bg-brand-secondary rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative flex flex-col h-[350px] md:h-[450px]">
              
              {/* Top Bar: History */}
              <div className="h-12 bg-brand-darker border-b border-slate-700 flex items-center px-4 relative z-20">
                 <div className="flex items-center gap-2 text-xs font-bold text-brand-text mr-4 rtl:ml-4 rtl:mr-0">
                    <History size={14} /> {t.aviator.statsTitle}
                 </div>
                 {/* Carousel */}
                 <div className="flex-1 overflow-hidden flex items-center justify-end rtl:justify-start gap-2 mask-linear-fade">
                    {history.slice(0, 15).map((h, i) => (
                       <div key={i} className={`
                         px-3 py-1 rounded-full text-xs font-mono font-bold border
                         ${h >= 10 ? 'bg-pink-500/20 text-pink-500 border-pink-500/50' : 
                           h >= 2 ? 'bg-purple-500/20 text-purple-500 border-purple-500/50' : 
                           'bg-blue-500/10 text-blue-400 border-blue-500/30'}
                       `}>
                          {h.toFixed(2)}x
                       </div>
                    ))}
                 </div>
              </div>

              {/* The Graph Area */}
              <div className="relative flex-1 bg-brand-darker w-full overflow-hidden group">
                 
                 {/* Grid Lines */}
                 <div className="absolute inset-0 z-0 opacity-20" 
                      style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                 </div>

                 {/* Central Multiplier Text */}
                 <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className={`text-6xl md:text-8xl font-black font-mono transition-all duration-100 ${gameState === 'CRASHED' ? 'text-red-500' : 'text-white'}`}>
                       {multiplier.toFixed(2)}x
                    </div>
                    {gameState === 'CRASHED' && (
                       <div className="absolute mt-24 bg-red-600 text-white px-4 py-1 rounded font-bold uppercase tracking-widest text-sm animate-bounce">
                          {t.aviator.crashed}
                       </div>
                    )}
                 </div>

                 {/* SVG Layer */}
                 <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="graphFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Draw Graph if running or crashed */}
                    {(gameState === 'RUNNING' || gameState === 'CRASHED') && pointsRef.current.length > 1 && (
                       <>
                         <path d={areaData} fill="url(#graphFill)" />
                         <path d={pathData} stroke="#ef4444" strokeWidth="0.8" fill="none" vectorEffect="non-scaling-stroke" />
                       </>
                    )}
                 </svg>

                 {/* Plane Layer */}
                 <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                    {/* IDLE State: Plane Waiting */}
                    {gameState === 'IDLE' && (
                       <div className="absolute bottom-4 left-4 animate-bounce">
                          <Plane size={48} className="text-pink-500 fill-current rotate-12" />
                          <div className="text-xs text-brand-text font-bold mt-2 ml-2">{lang === 'ar' ? 'بانتظار الجولة القادمة...' : 'Waiting for next round...'}</div>
                       </div>
                    )}

                    {/* RUNNING State: Plane Flying */}
                    {gameState === 'RUNNING' && (
                       <div 
                         className="absolute w-16 h-16 transition-transform duration-75 linear will-change-transform"
                         style={{ 
                            left: `${planeX}%`, 
                            top: `${planeY}%`, 
                            transform: `translate(-50%, -50%) rotate(${angle}deg)`
                         }}
                       >
                          <Plane size={64} className="text-pink-500 fill-current drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
                          {/* Trail effect */}
                          <div className="absolute top-1/2 right-full w-32 h-1 bg-gradient-to-r from-transparent to-pink-500 rounded-full blur-sm transform -translate-y-1/2"></div>
                       </div>
                    )}
                    
                    {/* CRASHED State: Explosion */}
                    {gameState === 'CRASHED' && (
                       <div 
                         className="absolute flex items-center justify-center"
                         style={{ left: `${planeX}%`, top: `${planeY}%`, transform: 'translate(-50%, -50%)' }}
                       >
                          <div className="text-6xl animate-ping absolute">💥</div>
                          <div className="text-6xl relative z-10">💥</div>
                       </div>
                    )}
                 </div>

                 {/* Player Win Notification Overlay */}
                 {cashedOutAt && gameState === 'RUNNING' && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-xl shadow-2xl border-2 border-green-300 animate-bounce z-50 flex flex-col items-center">
                       <div className="text-xs font-bold uppercase tracking-widest opacity-90">{lang === 'ar' ? 'لقد ربحت' : 'You Won'}</div>
                       <div className="text-3xl font-black font-mono">+${(betAmount * cashedOutAt).toFixed(0)}</div>
                    </div>
                 )}

              </div>
           </div>

           {/* Controls Section */}
           <div className="bg-brand-secondary p-4 rounded-2xl border border-slate-700 shadow-xl">
               {/* Manual / Auto Tabs */}
               <div className="flex justify-center mb-6">
                  <div className="bg-brand-darker p-1 rounded-lg flex border border-slate-700">
                     <button onClick={() => setMode('MANUAL')} className={`px-6 py-2 rounded-md font-bold text-xs uppercase transition-all ${mode === 'MANUAL' ? 'bg-slate-700 text-white shadow' : 'text-brand-text hover:text-white'}`}>{t.aviator.manual}</button>
                     <button onClick={() => setMode('AUTO')} className={`px-6 py-2 rounded-md font-bold text-xs uppercase transition-all ${mode === 'AUTO' ? 'bg-slate-700 text-white shadow' : 'text-brand-text hover:text-white'}`}>{t.aviator.auto}</button>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-4 items-end">
                   
                   {/* Bet Amount Input */}
                   <div className="flex-1 w-full bg-brand-darker p-2 rounded-xl border border-slate-700">
                      <div className="flex justify-between text-[10px] text-brand-text uppercase font-bold mb-1 px-1">
                         <span>{t.plinko.bet}</span>
                         <span>${balance.toFixed(0)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <button onClick={() => setBetAmount(Math.max(10, betAmount - 10))} className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-xl">-</button>
                         <div className="flex-1 bg-brand-dark border border-slate-600 rounded-lg h-10 flex items-center justify-center font-mono font-bold text-white text-lg">
                            ${betAmount}
                         </div>
                         <button onClick={() => setBetAmount(betAmount + 10)} className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-bold text-xl">+</button>
                      </div>
                      <div className="grid grid-cols-4 gap-2 mt-2">
                         {[10, 20, 50, 100].map(amt => (
                            <button key={amt} onClick={() => setBetAmount(amt)} className="bg-slate-800 hover:bg-slate-700 text-brand-text text-[10px] font-bold py-1 rounded border border-slate-700">${amt}</button>
                         ))}
                      </div>
                   </div>

                   {/* Main Action Button */}
                   <div className="flex-1 w-full h-[88px]">
                      {gameState === 'RUNNING' && !cashedOutAt ? (
                         <button 
                           onClick={cashOut}
                           className="w-full h-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.4)] border-b-4 border-orange-700 active:scale-95 transition-all flex flex-col items-center justify-center"
                         >
                            <span className="text-xs font-bold uppercase tracking-widest opacity-90 mb-1">{t.aviator.cashout}</span>
                            <span className="text-3xl font-black font-mono">${(betAmount * multiplier).toFixed(0)}</span>
                         </button>
                      ) : (
                         <button 
                           onClick={() => {
                              if (mode === 'AUTO') {
                                 isAutoBetting ? setIsAutoBetting(false) : setIsAutoBetting(true);
                                 if (!isAutoBetting && gameState === 'IDLE') startGame();
                              } else {
                                 startGame();
                              }
                           }}
                           disabled={gameState === 'RUNNING' && mode === 'MANUAL'}
                           className={`w-full h-full rounded-xl shadow-lg border-b-4 transition-all flex flex-col items-center justify-center uppercase tracking-wider font-black text-xl
                             ${mode === 'AUTO' && isAutoBetting 
                               ? 'bg-red-500 hover:bg-red-600 border-red-700 text-white' 
                               : gameState === 'RUNNING' 
                                 ? 'bg-slate-700 border-slate-800 text-slate-500 cursor-not-allowed'
                                 : 'bg-brand-accent hover:bg-green-500 border-green-700 text-brand-darker active:scale-95'
                             }`}
                         >
                            {mode === 'AUTO' && isAutoBetting ? t.aviator.stopAuto : t.aviator.bet}
                         </button>
                      )}
                   </div>
               </div>

               {/* Auto Cashout Config */}
               {mode === 'AUTO' && (
                  <div className="mt-4 p-3 bg-brand-darker rounded-xl border border-slate-700 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <input type="checkbox" checked={autoCashOutEnabled} onChange={(e) => setAutoCashOutEnabled(e.target.checked)} className="w-4 h-4 accent-brand-accent" />
                        <span className="text-xs font-bold text-white uppercase">{t.aviator.autoCashOut}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="text-brand-text font-bold text-sm">x</span>
                        <input 
                          type="number" 
                          step="0.1" 
                          value={autoCashOutValue} 
                          onChange={(e) => setAutoCashOutValue(parseFloat(e.target.value))}
                          disabled={!autoCashOutEnabled}
                          className="w-20 bg-brand-dark border border-slate-600 rounded px-2 py-1 text-white font-mono font-bold text-right"
                        />
                     </div>
                  </div>
               )}
           </div>

           {/* Statistics Bars */}
           <div className="bg-brand-secondary rounded-2xl p-4 border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                 <h4 className="text-xs font-bold text-brand-text uppercase flex items-center gap-2">
                    <BarChart size={14} /> {lang === 'ar' ? 'تاريخ الجولات (100)' : 'Round History (100)'}
                 </h4>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden w-full mb-2">
                  <div className="bg-blue-500" style={{ width: `${(stats.blue / stats.total) * 100}%` }}></div>
                  <div className="bg-purple-500" style={{ width: `${(stats.purple / stats.total) * 100}%` }}></div>
                  <div className="bg-pink-500" style={{ width: `${(stats.pink / stats.total) * 100}%` }}></div>
               </div>
               <div className="flex justify-between text-[10px] font-mono text-brand-text opacity-70">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> 1x - 2x</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div> 2x - 10x</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-pink-500"></div> 10x+</span>
               </div>
           </div>

        </div>

        {/* RIGHT: Sidebar / Live Bets */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
           {/* Promo Box */}
           <div className="bg-gradient-to-br from-brand-secondary to-brand-dark p-6 rounded-2xl border border-slate-700 shadow-xl text-center">
              <h3 className="text-white font-bold text-lg mb-2">{lang === 'ar' ? 'جاهز للمال الحقيقي؟' : 'Ready for Real Money?'}</h3>
              <p className="text-xs text-brand-text mb-4">
                {lang === 'ar' ? 'العب مع كود' : 'Play with code'} <span className="text-brand-accent font-bold">PLAY971</span> {lang === 'ar' ? 'لبونص 3000$' : 'for $3000 Bonus.'}
              </p>
              <a href={AFFILIATE_LINK} target="_blank" className="block w-full py-3 bg-brand-accent hover:bg-green-400 text-brand-darker font-black uppercase rounded-lg transition-colors">
                 {t.common.playNow}
              </a>
           </div>

           {/* Tabs & List */}
           <div className="flex-1 bg-brand-secondary rounded-2xl border border-slate-700 overflow-hidden flex flex-col min-h-[400px]">
              <div className="flex border-b border-slate-700">
                 <button 
                   onClick={() => setSidebarTab('LIVE')}
                   className={`flex-1 py-3 text-xs font-bold uppercase transition-colors ${sidebarTab === 'LIVE' ? 'bg-slate-700 text-white border-b-2 border-brand-accent' : 'text-brand-text hover:bg-slate-800'}`}
                 >
                   {lang === 'ar' ? 'رهانات حية' : 'Live Bets'}
                 </button>
                 <button 
                   onClick={() => setSidebarTab('MINE')}
                   className={`flex-1 py-3 text-xs font-bold uppercase transition-colors ${sidebarTab === 'MINE' ? 'bg-slate-700 text-white border-b-2 border-brand-accent' : 'text-brand-text hover:bg-slate-800'}`}
                 >
                   {lang === 'ar' ? 'رهاناتي' : 'My Bets'}
                 </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                 {sidebarTab === 'LIVE' ? (
                    liveBets.map((bet) => (
                       <div key={bet.id} className={`flex justify-between items-center p-2 rounded text-xs transition-colors ${bet.cashedOut ? 'bg-green-500/10 border border-green-500/20' : 'bg-brand-darker'}`}>
                          <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold uppercase">
                                {bet.user.charAt(0)}
                             </div>
                             <span className="text-brand-text font-mono">{bet.user}</span>
                          </div>
                          <div className="text-right rtl:text-left">
                             <div className="text-white font-bold">${bet.bet}</div>
                             <div className={`font-mono font-bold ${bet.cashedOut ? 'text-green-400' : 'text-slate-500'}`}>
                                {bet.mult}
                             </div>
                          </div>
                       </div>
                    ))
                 ) : (
                    playerHistory.length === 0 ? (
                       <div className="text-center py-10 text-brand-text text-sm italic opacity-50">{lang === 'ar' ? 'لا رهانات بعد' : 'No bets yet.'}</div>
                    ) : (
                       playerHistory.map((h) => (
                          <div key={h.id} className={`flex justify-between items-center p-2 rounded text-xs border ${h.mult > 0 ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                             <div>
                                <div className="text-brand-text text-[10px]">{h.time.toLocaleTimeString()}</div>
                                <div className="text-white font-bold">${h.bet}</div>
                             </div>
                             <div className="text-right rtl:text-left">
                                <div className={`font-mono font-bold ${h.mult > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                   {h.mult > 0 ? `${h.mult.toFixed(2)}x` : (lang === 'ar' ? 'تحطم' : 'CRASH')}
                                </div>
                                {h.mult > 0 && <div className="text-green-500 font-bold">+${h.win.toFixed(0)}</div>}
                             </div>
                          </div>
                       ))
                    )
                 )}
              </div>
           </div>
        </div>

      </div>

      {/* Strategies Section */}
      <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-700">
         {strategies.map((strat, idx) => (
            <div key={idx} className="bg-brand-secondary p-4 rounded-xl border border-slate-700">
               <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm">{strat.name}</h4>
                  <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${strat.risk === 'Low' || strat.risk === 'منخفض' ? 'bg-green-500/20 text-green-400' : strat.risk === 'High' || strat.risk === 'مرتفع' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                     {strat.risk} {lang === 'ar' ? 'مخاطرة' : 'Risk'}
                  </span>
               </div>
               <p className="text-xs text-brand-text leading-relaxed">{strat.desc}</p>
            </div>
         ))}
      </div>

    </div>
  );
};

export default AviatorGame;
