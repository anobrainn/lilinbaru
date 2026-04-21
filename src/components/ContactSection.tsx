import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <div className="pb-32 px-8 md:px-16 max-w-screen-2xl mx-auto flex flex-col gap-[120px] pt-16">
      {/* Hero Section */}
      <header className="w-full flex justify-start">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter text-primary leading-none">
          GET IN TOUCH
        </h1>
      </header>

      {/* Split Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
        {/* Left Side: Contact Form */}
        <div className="lg:col-span-7 flex flex-col gap-12 relative z-10">
          <div className="glass-panel p-8 md:p-12 rounded-xl bg-surface-container-lowest/40 backdrop-blur-xl border border-outline-variant/20 block shadow-2xl">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm text-on-surface-variant tracking-wide" htmlFor="name">Name</label>
                <input className="bg-surface-variant/50 border-0 border-b border-outline-variant text-on-surface focus:ring-0 focus:border-secondary transition-colors py-3 px-4 rounded-t-lg font-body" id="name" placeholder="Your Full Name" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm text-on-surface-variant tracking-wide" htmlFor="email">Email</label>
                <input className="bg-surface-variant/50 border-0 border-b border-outline-variant text-on-surface focus:ring-0 focus:border-secondary transition-colors py-3 px-4 rounded-t-lg font-body" id="email" placeholder="you@gmail.com" type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm text-on-surface-variant tracking-wide" htmlFor="subject">Subject</label>
                <input className="bg-surface-variant/50 border-0 border-b border-outline-variant text-on-surface focus:ring-0 focus:border-secondary transition-colors py-3 px-4 rounded-t-lg font-body" id="subject" placeholder="What is this regarding?" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm text-on-surface-variant tracking-wide" htmlFor="message">Message</label>
                <textarea className="bg-surface-variant/50 border-0 border-b border-outline-variant text-on-surface focus:ring-0 focus:border-secondary transition-colors py-3 px-4 rounded-t-lg font-body resize-none" id="message" placeholder="How can we help you?" rows={5}></textarea>
              </div>
              <div className="pt-4">
                <button className="bg-gradient-to-r from-secondary to-secondary-dim text-on-secondary font-headline font-bold tracking-wide py-4 px-10 rounded-full hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(45,183,242,0.3)]" type="button">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Info & Map */}
        <div className="lg:col-span-5 flex flex-col gap-16 lg:pt-12">
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary transition-colors shadow-[0_0_15px_rgba(45,183,242,0.1)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-label text-xs text-on-surface-variant tracking-widest uppercase">Email Us</span>
                <span className="font-body text-lg text-primary">cande@gmail.com</span>
              </div>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary transition-colors shadow-[0_0_15px_rgba(45,183,242,0.1)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-label text-xs text-on-surface-variant tracking-widest uppercase">WhatsApp</span>
                <span className="font-body text-lg text-primary">+62 858 1157 9936</span>
              </div>
            </div>

            <div className="flex items-start gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary transition-colors shadow-[0_0_15px_rgba(45,183,242,0.1)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="font-label text-xs text-on-surface-variant tracking-widest uppercase">Find Us</span>
                <span className="font-body text-lg text-primary">Jl. Ki Hajar Dewantara, Kota Jababeka, Cikarang Baru, Bekasi 17550.</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] rounded-xl overflow-hidden relative group bg-surface-container-lowest/40 backdrop-blur-xl border border-outline-variant/20 shadow-2xl">
            <img
              alt="Dark stylized map visualization of city streets"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity grayscale"
              data-alt="Dark stylized minimal map of urban city streets at night with subtle blue glowing accents"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPaIk5nbWRIVZhS5yQxgteRl0EETLYYEZU9Cq6cv6dBhTrzZKGXidMbHaYJCOVVaOqY6eJXkiblmb7E8wW1rXphXguTUWiofE016yPbJwibOLPXGwj9iR-O4q4SoOUB_c5LzS-9YGCmxYvBUvjdywK5zmKUCKZ3QY1d4yc7Bs0TXHIjrFF8PF75zcvUAtcC1AitrcARw7mg9e0GQRv1spEwE0Zomixnuvok04F_k2h3jFumarqTDB8VmWp1-O5qxLT1F5ZRxtoyrqu"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
              <span className="font-headline text-sm font-bold text-primary">CIKARANG STUDIO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
