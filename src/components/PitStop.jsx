import React from 'react';
import pitstopBgAvif from '../images/tyres.avif';
import pitstopBg from '../images/dark-storage-full-big-variety-new-tyres-busy-warehouse.jpg';

const PitStop = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="pitstop">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture className="w-full h-full block">
          <source srcSet={pitstopBgAvif} type="image/avif" />
          <img 
            src={pitstopBg} 
            alt="PitStop Background" 
            className="w-full h-full object-cover object-center" 
          />
        </picture>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Floating Centered Typography */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-white/80 text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-4 font-light">
          04 / Connect
        </span>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-md">
          The Pit Stop
        </h2>
        <p className="text-white/80 font-sans text-sm md:text-lg font-light tracking-wide max-w-2xl leading-relaxed mb-8">
          Ready to accelerate your next digital project? Let's connect and build extraordinary web applications together.
        </p>

        <a 
          href="mailto:contact@nikhil.dev" 
          className="inline-block border border-white/40 hover:border-white text-white uppercase text-xs tracking-[0.25em] px-8 py-3.5 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default PitStop;
