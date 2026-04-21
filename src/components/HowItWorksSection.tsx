import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-12 relative">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-headline font-bold text-primary mb-24">The Sensory Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 rounded-full border border-tertiary/20 scale-110 group-hover:scale-100 transition-transform duration-500"></div>
              <span className="material-symbols-outlined text-4xl text-tertiary">local_fire_department</span>
            </div>
            <h4 className="font-headline font-bold text-xl mb-4">Light It Up</h4>
            <p className="font-body text-on-surface-variant text-sm max-w-xs leading-relaxed">
              Ignite the lead-free cotton wick to release complex, layered botanical notes.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 group-hover:scale-100 transition-transform duration-500"></div>
              <span className="material-symbols-outlined text-4xl text-primary">qr_code_scanner</span>
            </div>
            <h4 className="font-headline font-bold text-xl mb-4">Scan the Code</h4>
            <p className="font-body text-on-surface-variant text-sm max-w-xs leading-relaxed">
              Use your device to unlock the hidden auditory landscape tied to your vessel.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 rounded-full border border-secondary/20 scale-110 group-hover:scale-100 transition-transform duration-500"></div>
              <span className="material-symbols-outlined text-4xl text-secondary">headphones</span>
            </div>
            <h4 className="font-headline font-bold text-xl mb-4">Set the Mood</h4>
            <p className="font-body text-on-surface-variant text-sm max-w-xs leading-relaxed">
              Allow the synergy of aroma and melody to transport your mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
