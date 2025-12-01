
import React, { useState, useEffect, useRef } from 'react';
import { Translations, Language } from '../types';
import { AFFILIATE_LINK, PLINKO_STRATEGIES } from '../constants';
import { Settings, Play, RotateCcw, Zap, AlertTriangle, History, Trophy, Info } from 'lucide-react';

interface Props {
  t: Translations;
  lang: Language;
}

interface Ball {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  value: number; // visual only
}

interface Multiplier {
  val: number;
  color: string;
}

const PlinkoGame: React.FC<Props> = ({ t, lang }) => {
  const [balance, setBalance] = useState(10000);
  const [betAmount, setBetAmount] = useState(100);
  const [rows, setRows] = useState(16);
  const [risk, setRisk] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [history, setHistory] = useState<number[]>([]);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballsRef = useRef<Ball[]>([]);
  const reqRef = useRef<number>(0);

  // Configuration for Multipliers based on Risk/Rows
  const getMultipliers = (r: number, riskLevel: string): Multiplier[] => {
    // Simplified logic for demo purposes - generating symmetric multipliers
    const count = r + 1;
    const mids = Math.floor(count / 2);
    const mults: Multiplier[] = [];
    
    let peak = riskLevel === 'High' ? 1000 : riskLevel === 'Medium' ? 100 : 10;
    let min = riskLevel === 'High' ? 0.2 : riskLevel === 'Medium' ? 0.4 : 0.5;
    
    for (let i = 0; i < count; i++) {
       const distFromCenter = Math.abs(i - mids);
       const factor = Math.pow(distFromCenter / mids, riskLevel === 'High' ? 4 : 2);
       let val = min + (peak - min) * factor;
       
       // Snap to nice numbers
       if (val > 10) val = Math.round(val);
       else val = parseFloat(val.toFixed(1));

       let color = 'bg-blue-500';
       if (val >= 10) color = 'bg-pink-500';
       else if (val >= 2) color = 'bg-purple-500';
       else if (val < 1) color = 'bg-slate-600';

       mults.push({ val, color });
    }
    return mults;
  };

  const multipliers = getMultipliers(rows, risk);

  // Physics Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const pegSize = 4;
    const ballRadius = 6;
    
    // Pyramid Metrics
    const pyStartY = 50;
    const pyHeight = height - 100;
    const rowSpacing = pyHeight / rows;
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw Pegs
      ctx.fillStyle = '#334155';
      for (let r = 0; r < rows; r++) {
         const cols = r + 3;
         const rowY = pyStartY + r * rowSpacing;
         const rowWidth = cols * rowSpacing; // approximated spread
         const startX = (width - rowWidth) / 2;
         
         for (let c = 0; c < cols; c++) {
            const x = width / 2 + (c - (cols-1)/2) * rowSpacing;
            ctx.beginPath();
            ctx.arc(x, rowY, pegSize, 0, Math.PI * 2);
            ctx.fill();
         }
      }

      // Update & Draw Balls
      ballsRef.current.forEach((ball, i) => {
         ball.vy += 0.2; // Gravity
         ball.y += ball.vy;
         ball.x += ball.vx;
         
         // Simple Collision with Pegs (Approximation)
         // Check nearest row
         const rowIdx = Math.round((ball.y - pyStartY) / rowSpacing);
         if (rowIdx >= 0 && rowIdx < rows) {
            const cols = rowIdx + 3;
            // ideal x for pegs in this row
            const pegSpacing = rowSpacing;
            const nearestPegCol = Math.round((ball.x - width/2) / pegSpacing + (cols-1)/2);
            const pegX = width / 2 + (nearestPegCol - (cols-1)/2) * pegSpacing;
            const pegY = pyStartY + rowIdx * rowSpacing;
            
            const dx = ball.x - pegX;
            const dy = ball.y - pegY;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < pegSize + ballRadius) {
               // Collision!
               // Add randomness
               ball.vy *= -0.5;
               ball.vx += (Math.random() - 0.5) * 4 + dx * 0.1;
               ball.y += ball.vy; // push out
            }
         }

         // Draw Ball
         ctx.beginPath();
         ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
         ctx.fillStyle = '#facc15'; // Yellow
         ctx.fill();
         ctx.strokeStyle = '#a16207';
         ctx.stroke();

         // Check Floor (Landing)
         if (ball.y > height - 40) {
            // Determine bin
            // Map x to bin index
            const binWidth = width / (rows + 1); // rough approx
            // More precise: 
            const lastRowCols = rows + 3;
            const range = lastRowCols * rowSpacing;
            // Let's just use random bin logic for demo visual matching or physics based
            // Physics based:
            const relativeX = ball.x - (width/2 - range/2);
            // ... complex mapping. 
            // For this UI demo, we remove ball and add history based on where it roughly fell
            
            // Just complete the ball lifecycle
            ballsRef.current.splice(i, 1);
            
            // Assign result
            const randomBin = Math.floor(Math.max(0, Math.min(multipliers.length - 1, (ball.x / width) * multipliers.length)));
            const result = multipliers[randomBin];
            
            setHistory(prev => [result.val, ...prev].slice(0, 5));
            setBalance(b => b + betAmount * result.val);
         }
      });

      reqRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [rows, risk, multipliers]); // Re-init geometry if settings change

  const dropBall = () => {
     if (balance < betAmount) return;
     setBalance(b => b - betAmount);
     
     // Spawn ball at top center with slight random X velocity
     ballsRef.current.push({
        id: Date.now(),
        x: 400 + (Math.random() - 0.5) * 10, // Assuming 800 width canvas
        y: 20,
        vx: (Math.random() - 0.5) * 2,
        vy: 0,
        value: betAmount
     });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 animate-fade-in pb-16">
       
       <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Controls Sidebar */}
          <div className="w-full lg:w-80 bg-brand-secondary rounded-2xl border border-slate-700 p-4 h-fit">
             {/* Bet Amount */}
             <div className="bg-brand-darker p-4 rounded-xl border border-slate-700 mb-4">
                <div className="flex justify-between text-xs font-bold text-brand-text mb-2">
                   <span>{lang === 'ar' ? 'قيمة الرهان' : 'BET AMOUNT'}</span>
                   <span>${balance.toFixed(2)}</span>
                </div>
                <div className="flex gap-2 mb-2">
                   <input 
                     type="number" 
                     value={betAmount} 
                     onChange={e => setBetAmount(Math.max(0, parseFloat(e.target.value)))}
                     className="w-full bg-brand-dark border border-slate-600 rounded-lg px-3 py-2 text-white font-bold"
                   />
                </div>
                <div className="grid grid-cols-4 gap-2">
                   {[10, 50, 100, 500].map(amt => (
                      <button key={amt} onClick={() => setBetAmount(amt)} className="bg-slate-700 hover:bg-slate-600 text-xs font-bold py-1 rounded text-white">
                         ${amt}
                      </button>
                   ))}
                </div>
             </div>

             {/* Risk Level */}
             <div className="mb-4">
                <div className="text-xs font-bold text-brand-text mb-2 uppercase">{t.plinko.risk}</div>
                <div className="bg-brand-darker p-1 rounded-xl flex">
                   {['Low', 'Medium', 'High'].map(r => (
                      <button 
                        key={r}
                        onClick={() => setRisk(r as any)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${risk === r ? 'bg-brand-accent text-brand-darker' : 'text-brand-text hover:text-white'}`}
                      >
                         {lang === 'ar' 
                            ? (r === 'Low' ? 'منخفض' : r === 'Medium' ? 'متوسط' : 'مرتفع')
                            : r}
                      </button>
                   ))}
                </div>
             </div>

             {/* Rows */}
             <div className="mb-6">
                <div className="text-xs font-bold text-brand-text mb-2 uppercase">{t.plinko.rows}: {rows}</div>
                <input 
                  type="range" 
                  min="8" max="16" 
                  value={rows} 
                  onChange={e => setRows(parseInt(e.target.value))} 
                  className="w-full accent-brand-accent"
                />
             </div>

             {/* Play Button */}
             <button 
               onClick={dropBall}
               className="w-full py-4 bg-brand-accent hover:bg-green-400 text-brand-darker font-black text-xl rounded-xl shadow-lg shadow-green-500/20 active:scale-95 transition-all"
             >
                {t.plinko.play}
             </button>

             {/* Promo Box */}
             <div className="mt-8 p-4 bg-brand-darker rounded-xl border border-slate-700 text-center">
                <p className="text-xs text-brand-text mb-2">{lang === 'ar' ? 'هل تريد اللعب بمال حقيقي؟' : 'Want to play for real?'}</p>
                <a href={AFFILIATE_LINK} target="_blank" className="block w-full py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded text-xs">
                   {lang === 'ar' ? 'العب على ستيك' : 'Play on Stake'}
                </a>
             </div>
          </div>

          {/* Game Canvas Area */}
          <div className="flex-1 bg-brand-darker rounded-2xl border border-slate-700 relative overflow-hidden flex flex-col items-center justify-center p-4 min-h-[500px]">
             
             {/* History Top Bar */}
             <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 flex gap-2">
                {history.map((h, i) => (
                   <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs border border-white/10 ${h >= 10 ? 'bg-pink-500 text-white' : h >= 2 ? 'bg-purple-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                      {h}x
                   </div>
                ))}
             </div>

             {/* Canvas */}
             <canvas 
                ref={canvasRef} 
                width={800} 
                height={600} 
                className="w-full max-w-[600px] h-auto"
             />

             {/* Multiplier Bins Display (Static Visual backup) */}
             <div className="flex gap-1 mt-2 max-w-[600px] w-full px-4">
                {multipliers.map((m, i) => (
                   <div 
                     key={i} 
                     className={`flex-1 h-8 rounded text-[10px] flex items-center justify-center font-bold text-white shadow-lg ${m.color}`}
                   >
                      {m.val}x
                   </div>
                ))}
             </div>

          </div>
       </div>
    </div>
  );
};

export default PlinkoGame;
