import React, { useState } from 'react';
import { Translations, QuizTopic, QuizQuestion, Language } from '../types';
import { QUIZ_DATA } from '../constants';
import { Brain, Check, X, Award, RotateCcw, ChevronRight, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props { t: Translations; lang: Language }

const CryptoQuizView: React.FC<Props> = ({ t, lang }) => {
  const [activeTopic, setActiveTopic] = useState<QuizTopic | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleStart = (topic: QuizTopic) => {
    setActiveTopic(topic);
    setCurrentQuestionIdx(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const fireConfetti = (opts: any) => {
    try {
      confetti(opts);
    } catch (e) {
      console.warn("Confetti failed", e);
    }
  }

  const handleAnswer = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
    setIsAnswered(true);

    if (optionIdx === activeTopic!.questions[currentQuestionIdx].correct) {
      setScore(s => s + 1);
      fireConfetti({
         particleCount: 50,
         spread: 60,
         origin: { y: 0.7 },
         colors: ['#00e701', '#ffffff']
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx + 1 < activeTopic!.questions.length) {
      setCurrentQuestionIdx(p => p + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (score > activeTopic!.questions.length / 2) {
         fireConfetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
         });
      }
    }
  };

  const reset = () => {
    setActiveTopic(null);
  };

  if (!activeTopic) {
    return (
      <div className="max-w-6xl mx-auto p-6 md:p-12 animate-fade-in pb-20">
        <div className="text-center mb-16">
           <div className="inline-block p-4 bg-brand-purple/20 rounded-full text-brand-purple mb-6 border border-brand-purple/30">
              <Brain size={40} />
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{t.quiz.title}</h1>
           <p className="text-xl text-brand-text max-w-2xl mx-auto">{t.quiz.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {QUIZ_DATA.map(topic => (
             <div key={topic.id} className="bg-brand-secondary border border-slate-700 rounded-2xl p-8 hover:border-brand-accent transition-all hover:-translate-y-1 shadow-xl flex flex-col">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white font-bold mb-6">
                   {topic.icon === 'Bitcoin' && '₿'}
                   {topic.icon === 'Shield' && <Check size={24}/>}
                   {topic.icon === 'Zap' && <Zap size={24}/>}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-brand-text text-sm mb-8 flex-1">{topic.description}</p>
                <button 
                  onClick={() => handleStart(topic)}
                  className="w-full py-3 bg-brand-darker hover:bg-brand-accent hover:text-brand-darker border border-slate-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {t.quiz.start} <ChevronRight size={16}/>
                </button>
             </div>
           ))}
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-8 py-20 animate-fade-in text-center">
         <div className="bg-brand-secondary border border-slate-700 rounded-3xl p-12 shadow-2xl">
            <div className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent mx-auto mb-6">
               <Award size={48} />
            </div>
            <h2 className="text-3xl font-black text-white mb-2">{t.quiz.finish}</h2>
            <p className="text-brand-text mb-8">{activeTopic.title}</p>
            
            <div className="text-6xl font-black text-white mb-2">{score} <span className="text-2xl text-slate-500">/ {activeTopic.questions.length}</span></div>
            <div className="text-sm font-bold text-brand-text uppercase tracking-widest mb-12">{t.quiz.score}</div>

            <div className="flex gap-4 justify-center">
               <button onClick={reset} className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">
                 Menu
               </button>
               <button onClick={() => handleStart(activeTopic)} className="px-8 py-3 bg-brand-accent hover:bg-green-400 text-brand-darker font-bold rounded-xl transition-colors flex items-center gap-2">
                 <RotateCcw size={18}/> {t.quiz.playAgain}
               </button>
            </div>
         </div>
      </div>
    );
  }

  const question = activeTopic.questions[currentQuestionIdx];

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-12 animate-fade-in pb-20">
      <div className="mb-8 flex justify-between items-center text-sm font-bold text-brand-text">
         <button onClick={reset} className="hover:text-white">Exit</button>
         <div>Question {currentQuestionIdx + 1} / {activeTopic.questions.length}</div>
      </div>

      <div className="bg-brand-secondary border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
         {/* Progress Bar */}
         <div className="absolute top-0 left-0 h-2 bg-slate-800 w-full">
            <div 
              className="h-full bg-brand-accent transition-all duration-300"
              style={{ width: `${((currentQuestionIdx) / activeTopic.questions.length) * 100}%` }}
            ></div>
         </div>

         <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 mt-4 leading-tight">
            {question.question}
         </h2>

         <div className="space-y-4">
            {question.options.map((option, idx) => {
               let stateClass = "bg-brand-darker border-slate-700 hover:border-slate-500";
               if (isAnswered) {
                  if (idx === question.correct) stateClass = "bg-green-500/20 border-green-500 text-green-400";
                  else if (idx === selectedOption) stateClass = "bg-red-500/20 border-red-500 text-red-400";
                  else stateClass = "bg-brand-darker border-slate-700 opacity-50";
               } else if (selectedOption === idx) {
                  stateClass = "bg-brand-accent text-brand-darker border-brand-accent";
               }

               return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left p-6 rounded-xl border font-bold transition-all flex justify-between items-center ${stateClass}`}
                  >
                    {option}
                    {isAnswered && idx === question.correct && <Check size={20} />}
                    {isAnswered && idx === selectedOption && idx !== question.correct && <X size={20} />}
                  </button>
               );
            })}
         </div>

         {isAnswered && (
            <div className="mt-8 flex justify-end animate-fade-in">
               <button 
                 onClick={nextQuestion}
                 className="px-8 py-3 bg-white hover:bg-gray-200 text-brand-darker font-black rounded-xl transition-colors flex items-center gap-2"
               >
                 {currentQuestionIdx + 1 === activeTopic.questions.length ? t.quiz.finish : t.quiz.next} <ChevronRight size={20}/>
               </button>
            </div>
         )}
      </div>
    </div>
  );
};

export default CryptoQuizView;