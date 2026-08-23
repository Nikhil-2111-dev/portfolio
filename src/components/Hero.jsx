import React from 'react';
import { motion } from 'framer-motion';
import heroBgAvif from '../images/cars themed7 (1).avif';
import heroBg from '../images/cars themed7 (1).jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      {/* Full-screen Background Image - Pure Original Colors */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <picture className="w-full h-full block">
          <source srcSet={heroBgAvif} type="image/avif" />
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center saturate-110 contrast-105" 
          />
        </picture>
      </motion.div>
      
      {/* Floating Centered Typography with Entrance Animations */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative translate-y-10 z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.span variants={itemVariants} className="text-black text-base md:text-base font-sans uppercase tracking-[0.3em] mb-4 font-bold drop-shadow-[0_0_12px_rgba(255,255,255,1)]">
          N V H Nikhil's Portfolio
        </motion.span>
        
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-serif text-[#00C9FF] tracking-tight font-bold mb-6 leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,1)] [text-shadow:_0_0_35px_rgba(255,255,255,0.9)]">
          The Art of Motion
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-[#00D2FF] font-sans text-sm md:text-lg font-semibold tracking-wide max-w-8xl leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,1)] mb-8">
          Pre-Final Year at IIIT Lucknow
        </motion.p>

        {/* View Resume Button */}
        <motion.div variants={itemVariants}>
          <a 
            href="https://drive.google.com/drive/folders/1MrM7os97XNuy8rKRZDfOj4PQJ7Jn1hg0?usp=drive_link " target="_blank" rel="noopener noreferrer" 
            className="px-8 py-3 bg-transparent text-[#00E5FF] font-sans text-sm tracking-widest uppercase font-bold hover:text-white transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_25px_rgba(0,229,255,1)] rounded-sm"
          >
            View Resume
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-24 md:-bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 drop-shadow-[0_0_15px_rgba(255,255,255,1)] hover:scale-105 transition-transform"
        >
          <a href="#blueprint" className="text-[#00C9FF] flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.25em] mb-1 font-sans font-bold">Scroll</span>
            <span className="material-symbols-outlined text-2xl animate-bounce">expand_more</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
