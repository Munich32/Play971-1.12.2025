import React from 'react';
import { Translations, Language } from '../types';
import { NEWS_STORIES, AFFILIATE_LINK } from '../constants';
import { Calendar } from 'lucide-react';

interface Props { t: Translations; lang: Language }

const NewsView: React.FC<Props> = ({ t, lang }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 animate-fade-in pb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white mb-4">{t.news.latestUpdates}</h1>
        <div className="w-20 h-1 bg-brand-accent mx-auto rounded"></div>
      </div>

      <div className="space-y-12">
        {NEWS_STORIES.map((story) => (
          <article key={story.id} className="bg-brand-secondary rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col md:flex-row">
             <div className="md:w-1/3 relative">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover min-h-[200px]" />
                <div className="absolute top-0 left-0 p-4">
                   <span className="inline-flex items-center gap-1 bg-brand-darker/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                     <Calendar size={12} /> {story.date}
                   </span>
                </div>
             </div>
             <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-white mb-4">{story.title}</h2>
                <div className="text-brand-text leading-relaxed whitespace-pre-wrap mb-6 text-sm">
                   {story.body}
                </div>
                <div>
                   <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-brand-dark hover:bg-brand-accent hover:text-brand-darker border border-slate-600 hover:border-brand-accent text-white font-bold rounded-lg transition-all">
                     {t.common.playNow}
                   </a>
                </div>
             </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsView;