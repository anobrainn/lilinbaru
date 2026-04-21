import React from 'react';

export const CollectionsSection: React.FC = () => {
  return (
    <div className="px-6 md:px-12 flex flex-col md:flex-row gap-12 max-w-[1600px] mx-auto w-full pt-8">
      <section className="flex-grow flex flex-col gap-24 pb-32">
        {/* Header section */}
        <header className="max-w-3xl">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6">EXPERIENCE THE MOODS</h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-xl">
            Explore our full collection of Spotify-integrated aromatherapy candles, designed to enhance every feeling.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Product Card 1 */}
          <article className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-6 group hover:bg-surface-bright transition-all duration-500 relative overflow-hidden ghost-border">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden glass-panel flex items-center justify-center glow-shadow mb-4">
              <img 
                alt="Cloud Nine Candle" 
                className="object-cover w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTmlI-Odch5Z6FWR_XrCQ_9xPHKmShyO_FS3rPd8jhMBs5xhuGYBjdN49AqlkgUlJ6nLzkIjJU84uhLSB-XVkP2aHOTpMqm-VmudmBqzpLJpKA-U_8tmsiiM31txCjnnRdwRzXaesc5l9W11hZ05axWoIjILtp4lXUBv-dv-hZwYq85Y6NViUsOuY4WrSwM6EJqWRMvVcevtdo5PdPjrUXr1BwFWtEmcaW64OojglJJ5ZzpEYeRiCVFHC8YyPisksY33pzp0zYuVBM"
              />
              {/* Floating Action overlay */}
              <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <button className="bg-gradient-to-r from-secondary to-secondary-dim text-on-secondary rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
              {/* Spotify Code integration hint */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-60">
                <span className="material-symbols-outlined text-primary text-xl">graphic_eq</span>
                <span className="text-[10px] font-epilogue tracking-widest text-primary uppercase">Scan to listen</span>
              </div>
            </div>
            <div className="flex justify-between items-start z-10 relative">
              <div>
                <h3 className="font-headline text-2xl font-bold tracking-tight text-primary mb-2">Cloud Nine</h3>
                <p className="font-body text-sm text-on-surface-variant">Eucalyptus, Mint, Rainwater</p>
              </div>
              <div className="text-right">
                <span className="font-headline text-xl text-primary block mb-1">$48</span>
                <span className="text-[10px] font-epilogue tracking-widest text-secondary uppercase bg-secondary/10 px-2 py-1 rounded">Calm</span>
              </div>
            </div>
          </article>

          {/* Product Card 2 */}
          <article className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-6 group hover:bg-surface-bright transition-all duration-500 relative overflow-hidden ghost-border">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden glass-panel flex items-center justify-center glow-shadow mb-4">
              <img 
                alt="Cloud Nine Candle" 
                className="object-cover w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTmlI-Odch5Z6FWR_XrCQ_9xPHKmShyO_FS3rPd8jhMBs5xhuGYBjdN49AqlkgUlJ6nLzkIjJU84uhLSB-XVkP2aHOTpMqm-VmudmBqzpLJpKA-U_8tmsiiM31txCjnnRdwRzXaesc5l9W11hZ05axWoIjILtp4lXUBv-dv-hZwYq85Y6NViUsOuY4WrSwM6EJqWRMvVcevtdo5PdPjrUXr1BwFWtEmcaW64OojglJJ5ZzpEYeRiCVFHC8YyPisksY33pzp0zYuVBM"
              />
              {/* Floating Action overlay */}
              <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <button className="bg-gradient-to-r from-secondary to-secondary-dim text-on-secondary rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
              {/* Spotify Code integration hint */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-60">
                <span className="material-symbols-outlined text-primary text-xl">graphic_eq</span>
                <span className="text-[10px] font-epilogue tracking-widest text-primary uppercase">Scan to listen</span>
              </div>
            </div>
            <div className="flex justify-between items-start z-10 relative">
              <div>
                <h3 className="font-headline text-2xl font-bold tracking-tight text-primary mb-2">Cloud Nine</h3>
                <p className="font-body text-sm text-on-surface-variant">Eucalyptus, Mint, Rainwater</p>
              </div>
              <div className="text-right">
                <span className="font-headline text-xl text-primary block mb-1">$48</span>
                <span className="text-[10px] font-epilogue tracking-widest text-secondary uppercase bg-secondary/10 px-2 py-1 rounded">Calm</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
