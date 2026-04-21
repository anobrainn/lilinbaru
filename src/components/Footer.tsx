import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-20 px-12 mt-32 bg-slate-950 border-t border-slate-800/30 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-lg font-black text-slate-100 mb-4 font-headline">Candé</div>
      <p className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400">
        © 2026 Candé. Etherial Curation for the Modern Soul.
      </p>
      <div className="flex gap-6 font-['Manrope'] text-xs tracking-widest uppercase">
        <a className="text-slate-500 hover:text-slate-200 transition-colors" href="/contact">Contact</a>
      </div>
    </footer>
  );
};
