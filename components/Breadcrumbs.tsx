
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageView } from '../types';

interface Props {
  page: PageView;
  setPage: (p: PageView) => void;
  country?: string;
}

const Breadcrumbs: React.FC<Props> = ({ page, setPage, country }) => {
  if (page === 'home') return null;

  return (
    <div className="bg-brand-darker border-b border-brand-secondary py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
          <button 
            onClick={() => setPage('home')}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home size={12} />
            <span>Home</span>
          </button>
          
          <ChevronRight size={12} className="opacity-50" />
          
          <span className="text-brand-accent uppercase">
            {page === 'country' && country ? `Betting in ${country}` : page}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
