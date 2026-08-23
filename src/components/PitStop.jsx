import React from 'react';
import pitstopBgAvif from '../images/pexels-daijonj-28738962 (1).avif';
import pitstopBg from '../images/pexels-daijonj-28738962 (1).webp';

const PitStop = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="pitstop">
      {/* Full-screen Background Image - Pure Original Colors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="w-full h-full block">
          <source srcSet={pitstopBgAvif} type="image/avif" />
          <img 
            src={pitstopBg} 
            alt="PitStop Background" 
            className="w-full h-full object-cover object-center saturate-110 contrast-105" 
          />
        </picture>
      </div>

      {/* Floating Centered Typography with High-Contrast Text Drop Shadows */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          Let's Connect
        </h2>
        <p className="text-white font-sans text-sm md:text-lg font-normal tracking-wide max-w-2xl leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
         Got something intersting to work on? Let's connect and build extraordinary, if not learn from our failures.
        </p>

        <a 
          href="mailto:nallanikhil21@gmail.com" 
          className="inline-block border border-white/80 hover:border-white text-white uppercase text-xs tracking-[0.25em] px-8 py-3.5 rounded-full backdrop-blur-md bg-black/30 hover:bg-white hover:text-black transition-all duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default PitStop;
