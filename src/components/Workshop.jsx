import React from 'react';
import workshopBgAvif from '../images/cars themed8 (1).avif';
import workshopBg from '../images/cars themed8 (1).webp';

const Workshop = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="workshop">
      {/* Full-screen Background Image - Pure Original Colors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="w-full h-full block">
          <source srcSet={workshopBgAvif} type="image/avif" />
          <img 
            src={workshopBg} 
            alt="Workshop Background" 
            className="w-full h-full object-cover object-center saturate-110 contrast-105" 
          />
        </picture>
      </div>

      {/* Floating Centered Typography with High-Contrast Text Drop Shadows */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-4 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          02 / Craftsmanship
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          The Workshop
        </h2>
        <p className="text-white font-sans text-sm md:text-lg font-normal tracking-wide max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Building robust interactive applications with clean code, modular frameworks, and seamless design integration.
        </p>
      </div>
    </section>
  );
};

export default Workshop;
