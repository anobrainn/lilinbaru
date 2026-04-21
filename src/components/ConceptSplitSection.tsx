import React, { useState } from 'react';

const spotifySlides = [
  '/slides/slide2.jpg',
  '/slides/slide3.jpg',
  '/slides/slide4.jpg',
  '/slides/slide5.jpg',
  '/slides/slide1.jpg'
];

export const ConceptSplitSection: React.FC = () => {
  // Tambahkan state untuk melacak index slide saat ini
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk tombol Next
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % spotifySlides.length);
  };

  // Fungsi untuk tombol Previous
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? spotifySlides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-32 px-6 lg:px-12 bg-surface-container-lowest relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            <img
              alt="Candle burning"
              className="w-full h-[600px] object-cover rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              data-alt="Close up of a luxury candle burning in a dark room, warm flickering amber flame, soft focus background, minimalist aesthetic"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkgE4Jv7T-ShZhPlGY3BfNK4fbvjVpTk1q_sf3qWKguVsa3HM9UNnGVuimOaguahg7AJHT8QIdUFhpK698r2YQrhd7NavwijDi_8YMrZ63gvbgFzWK_PSpzTHRjEmIz2YIc1Z0Zd6niTag4cwELzQj3FbfOZSseaRc7ZWaQrf5aCaRCK6rPgiJRvBM4FORVDWCxBPxvmoEsZDK6eVtuZuq956HUT3hPA_VeRFZZIINwuZZkKFoYnk6zEymC35CzyDLWSOPQfLScq0"
            />
            <div className="absolute -bottom-12 -right-12 lg:-right-24 glass-panel p-8 rounded-xl max-w-xs shadow-2xl border border-white/5 ambient-glow hidden md:block">
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                "The flickering flame is the conductor; the scent is the symphony."
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pl-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
              The Ritual, Redefined.
            </h2>
            <p className="text-lg font-body text-on-surface-variant leading-relaxed">
              It begins with a spark. Our unique smart-vessel design incorporates a subtle, elegant QR code seamlessly integrated into the minimalist aesthetic.
            </p>
            <p className="text-lg font-body text-on-surface-variant leading-relaxed">
              Scan to instantly immerse yourself in a Spotify playlist meticulously crafted by sound engineers to match the exact emotional profile of the fragrance blooming in your room.
            </p>

            <div className="relative mt-8 rounded-xl overflow-hidden bg-black border border-outline-variant/30 flex items-center justify-center p-12 min-h-[16rem]">
              <img
                id="spotify-slide-image"
                alt="Smartphone scanning"
                className="w-full h-auto object-contain transition-opacity duration-1000 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                // Gunakan state currentIndex di sini
                src={spotifySlides[currentIndex]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-primary z-10">
                <span className="material-symbols-outlined text-3xl text-secondary">barcode_scanner</span>
                <span className="font-headline font-bold uppercase tracking-widest text-sm">Scan & Listen</span>
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10">
                <button
                  id="btn-prev-slide"
                  // Tambahkan onClick handler
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-surface-container-highest/80 hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center text-primary backdrop-blur-md border border-outline-variant/30"
                  aria-label="Previous Slide"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                <button
                  id="btn-next-slide"
                  // Tambahkan onClick handler
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-surface-container-highest/80 hover:bg-secondary hover:text-on-secondary transition-colors flex items-center justify-center text-primary backdrop-blur-md border border-outline-variant/30"
                  aria-label="Next Slide"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};