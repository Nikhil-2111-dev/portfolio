import React from 'react';
import powertrainBgAvif from '../images/cars themed3 (1).avif';
import powertrainBg from '../images/cars themed3 (1).jpg';

const Powertrain = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="powertrain">
      {/* Full-screen Background Image - Pure Original Colors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="w-full h-full block">
          <source srcSet={powertrainBgAvif} type="image/avif" />
          <img 
            src={powertrainBg} 
            alt="Powertrain Background" 
            className="w-full h-full object-cover object-center saturate-110 contrast-105" 
          />
        </picture>
      </div>

      {/* Floating Centered Typography with High-Contrast Text Drop Shadows */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-4 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          03 / Performance
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          The Powertrain
        </h2>
        <p className="text-white font-sans text-sm md:text-lg font-normal tracking-wide max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Engineered for ultra-fast page speed, optimal state architecture, and high-velocity rendering performance.
        </p>
      </div>
    </section>
  );
};

export default Powertrain;
