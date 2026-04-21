import React from 'react';

export const TopNavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(15,23,42,0.3)]">
      <div className="flex justify-between items-center px-8 py-6 max-w-full mx-auto">
        <a href="/" className="flex items-center gap-4 text-2xl font-black tracking-tighter text-slate-50 font-headline group">
          <img src="/ce-logo.png" alt="CANDÉ Logo" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300" />
          <span>Candé</span>
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-10 font-headline tracking-tighter uppercase font-bold text-sm">
            <a className="text-slate-350 hover:text-white transition-colors" href="/collections">Collections</a>
            <a className="text-slate-350 hover:text-white transition-colors" href="/contact">Contact</a>
          </div>

          <div className="flex gap-4 text-slate-100">
            <button className="md:hidden hover:backdrop-blur-2xl hover:bg-slate-900/40 transition-all duration-500 p-2 rounded-full scale-95 active:scale-90">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
};
