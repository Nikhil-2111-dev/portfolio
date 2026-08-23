import React from 'react';
import heroBgAvif from '../images/cars themed2.avif';
import heroBg from '../images/cars themed2.jpeg';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      {/* Full-screen Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="w-full h-full block">
          <source srcSet={heroBgAvif} type="image/avif" />
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center" 
          />
        </picture>
        {/* Subtle dark overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>
      
      {/* Floating Centered Typography (Matching reference design format) */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white/80 text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-4 font-light">
          Nikhil Portfolio
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-md">
          The Art of Motion
        </h1>
        <p className="text-white/80 font-sans text-sm md:text-lg font-light tracking-wide max-w-2xl leading-relaxed">
          High-performance engineering, bespoke software solutions, and dynamic visual design.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-24 md:-bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <a href="#blueprint" className="text-white/80 hover:text-white flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.25em] mb-1 font-sans">Scroll</span>
            <span className="material-symbols-outlined text-2xl animate-bounce">expand_more</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
