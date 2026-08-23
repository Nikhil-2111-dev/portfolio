import React from 'react';
import blueprintBgAvif from '../images/cars themed5 (1).avif';
import blueprintBg from '../images/cars themed5 (1).jpg';

const Blueprint = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="blueprint">
      {/* Full-screen Background Image - Pure Original Colors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="w-full h-full block">
          <source srcSet={blueprintBgAvif} type="image/avif" />
          <img 
            src={blueprintBg} 
            alt="Blueprint Background" 
            className="w-full h-full object-cover object-center saturate-110 contrast-105" 
          />
        </picture>
      </div>

      {/* Floating Centered Typography with High-Contrast Text Drop Shadows */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-4 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          01 / Architecture
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          The Blueprint
        </h2>
        <p className="text-white font-sans text-sm md:text-lg font-normal tracking-wide max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Conceptualizing scalable system architectures, intuitive wireframes, and refined UI component hierarchies.
        </p>
      </div>
    </section>
  );
};

export default Blueprint;
