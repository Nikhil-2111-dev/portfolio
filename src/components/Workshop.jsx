import React from 'react';
import workshopBgAvif from '../images/cars themed9 (1).avif';
import workshopBg from '../images/cars themed9 (1).jpeg';

const WORKSHOP_OPTIONS = [
  {
    title: 'Web Development',
    description: 'Architecting scalable frontends and robust APIs to deliver seamless full-stack applications.',
    icon: 'terminal'
  },
  {
    title: 'Generative AI',
    description: 'Integrating LLMs and modern AI tools to automate workflows and build intelligent systems.',
    icon: 'memory'
  },
  {
    title: 'Cloud Engineering',
    description: 'Deploying high-availability infrastructure with containers and streamlined CI/CD pipelines.',
    icon: 'cloud'
  },
  {
    title: 'System Design',
    description: 'Designing distributed, fault-tolerant architectures optimized for performance and scale.',
    icon: 'account_tree'
  }
];

const Workshop = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row bg-[#FFFFF0] overflow-hidden" id="workshop">
      {/* Left: Cars Themed Image Container */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center p-8 md:py-16 md:pl-16 md:pr-8 z-10">
        <div className="relative w-full h-full min-h-[40vh] md:min-h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl">
          <picture className="w-full h-full block">
            <source srcSet={workshopBgAvif} type="image/avif" />
            <img 
              src={workshopBg} 
              alt="Workshop Background" 
              className="w-full h-full object-cover object-center saturate-110 contrast-105" 
            />
          </picture>
          {/* Optional inner shadow overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Right: Techstack Info Cards */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center py-12 px-8 sm:px-12 lg:px-20 z-0">
        <div className="max-w-2xl mx-auto w-full">
          {/* <span className="text-[#00C9FF] text-xs font-sans uppercase tracking-[0.25em] mb-4 font-bold block">
            02 / Craftsmanship
          </span> */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-900 tracking-tight font-bold mb-10 leading-tight">
            Techstack
          </h2>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
            {WORKSHOP_OPTIONS.map((opt, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-10 h-10 mb-4 bg-blue-50 rounded-full flex items-center justify-center text-[#00C9FF]">
                  <span className="material-symbols-outlined text-xl">{opt.icon}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-serif text-slate-800 font-bold mb-2">{opt.title}</h3>
                <p className="text-slate-600 font-sans text-xs lg:text-sm leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
