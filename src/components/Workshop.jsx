import React, { useState } from 'react';
import OptionWheel from '../assets/optionwheel';
import workshopBgAvif from '../images/cars themed9 (1).avif';
import workshopBg from '../images/cars themed9 (1).jpeg';

const WORKSHOP_OPTIONS = [
  {
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with responsive UIs and resilient server architectures.'
  },
  {
    title: 'React & Frontend Architecture',
    description: 'Crafting modular, reusable component systems with high-performance state management.'
  },
  {
    title: 'Backend Systems & APIs',
    description: 'Engineering RESTful APIs, microservices, and secure database solutions.'
  },
  {
    title: 'UI/UX Design & Motion',
    description: 'Designing elegant user experiences with fluid micro-interactions and modern aesthetics.'
  },
  {
    title: 'Cloud & DevOps Engineering',
    description: 'Deploying scalable applications with CI/CD pipelines, Docker containers, and cloud infrastructure.'
  },
  {
    title: 'Performance & Speed',
    description: 'Optimizing render pipelines, asset delivery, and bundle size for lightning-fast page speed.'
  }
];

const Workshop = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentOption = WORKSHOP_OPTIONS[selectedIdx] || WORKSHOP_OPTIONS[0];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-12" id="workshop">
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

      {/* Workshop Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Selected Option Details Card */}
        <div className="flex flex-col items-start text-left bg-black/65 backdrop-blur-lg p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] transition-all duration-300">
          <span className="text-[#00E5FF] text-xs font-sans uppercase tracking-[0.25em] mb-3 font-bold drop-shadow-[0_0_12px_rgba(0,229,255,0.9)]">
            Techstack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight font-normal mb-4 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {currentOption.title}
          </h2>
          <p className="text-white/95 font-sans text-sm sm:text-base font-normal tracking-wide leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {currentOption.description}
          </p>
        </div>

        {/* Right: Interactive OptionWheel */}
        <div className="h-[320px] sm:h-[420px] w-full flex items-center justify-center">
          <OptionWheel
            items={WORKSHOP_OPTIONS.map(opt => opt.title)}
            defaultSelected={0}
            onChange={(index) => setSelectedIdx(index)}
            textColor="#a6a6a6"
            activeColor="#F5D973"
            side="right"
            fontSize={1.8}
            spacing={1.5}
            curve={1.2}
            tilt={8}
            blur={1.5}
            fade={0.3}
            inset={20}
            loop={true}
            draggable={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Workshop;
