import React from 'react';
import { Translations } from '../types';
import { LEGAL_TEXT } from '../constants';

interface Props { t: Translations; lang: 'en' | 'ar' }

const LegalView: React.FC<Props> = ({ t, lang }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 animate-fade-in pb-20">
      <h1 className="text-4xl font-black text-white mb-12 border-b border-brand-secondary pb-6">Legal Information</h1>
      
      <div className="space-y-12">
         <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-brand-accent rounded"></span>
               {t.legal.termsTitle}
            </h2>
            <div className="bg-brand-secondary p-8 rounded-xl border border-slate-700 text-brand-text leading-relaxed">
               {LEGAL_TEXT[lang].terms}
            </div>
         </section>

         <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-brand-pink rounded"></span>
               {t.legal.privacyTitle}
            </h2>
            <div className="bg-brand-secondary p-8 rounded-xl border border-slate-700 text-brand-text leading-relaxed">
               {LEGAL_TEXT[lang].privacy}
            </div>
         </section>

         <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
               <span className="w-2 h-8 bg-brand-purple rounded"></span>
               {t.legal.cookieTitle}
            </h2>
            <div className="bg-brand-secondary p-8 rounded-xl border border-slate-700 text-brand-text leading-relaxed">
               {LEGAL_TEXT[lang].cookie}
            </div>
         </section>
      </div>
    </div>
  );
};

export default LegalView;