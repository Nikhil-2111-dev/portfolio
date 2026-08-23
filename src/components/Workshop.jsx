import React from 'react';
import workshopBgAvif from '../images/cars themed4.avif';
import workshopBg from '../images/cars themed4.jpeg';

const Workshop = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="workshop">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="w-full h-full block">
          <source srcSet={workshopBgAvif} type="image/avif" />
          <img 
            src={workshopBg} 
            alt="Workshop Background" 
            className="w-full h-full object-cover object-center" 
          />
        </picture>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      {/* Floating Centered Typography */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white/80 text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-4 font-light">
          02 / Craftsmanship
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-md">
          The Workshop
        </h2>
        <p className="text-white/80 font-sans text-sm md:text-lg font-light tracking-wide max-w-2xl leading-relaxed">
          Building robust interactive applications with clean code, modular frameworks, and seamless design integration.
        </p>
      </div>
    </section>
  );
};

export default Workshop;
