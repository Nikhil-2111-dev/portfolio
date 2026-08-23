import React from 'react';
import { motion } from 'framer-motion';
import blueprintBgAvif from '../images/cars themed5 (1).avif';
import blueprintBg from '../images/cars themed5 (1).jpg';

const Blueprint = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-end px-6 md:px-16 lg:px-24 overflow-hidden" id="blueprint">
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

      {/* Right-Aligned Typography positioned on the Right of the Page */}
      <motion.div 
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 -translate-y-10 text-right max-w-xl md:max-w-2xl flex flex-col items-end"
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight font-normal mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          About Me
        </h2>
        <p className="text-white font-sans text-sm md:text-lg font-normal tracking-wide leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Hi, I’m Nikhil, a Computer Science student and developer who enjoys turning ideas into things that actually work. I’m curious about technology, love solving challenging problems, and enjoy building projects that push me to learn something new(if not existenital crisis). I’m always experimenting, improving, and looking forward to the next interesting thing to build or break.
        </p>
      </motion.div>
    </section>
  );
};

export default Blueprint;
