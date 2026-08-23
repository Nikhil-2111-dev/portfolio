import React from 'react';
import powertrainBgAvif from '../images/cars themed3 (1).avif';
import powertrainBg from '../images/cars themed3 (1).jpg';

const PROJECTS = [
  {
    title: 'ZenFlow',
    tech: 'Python • MediaPipe • TensorFlow • FastAPI • React',
    description: 'AI-driven wellness ecosystem using computer vision for real-time posture correction. Identified and mitigated BOLA vulnerabilities, reducing unauthorized access by 95%.',
    icon: 'self_improvement'
  },
  {
    title: 'LegalEase',
    tech: 'Python • CrewAI • LangChain • OpenAI',
    description: 'AI-powered platform engineered with multi-agent orchestration to parse and simplify complex banking and legal jargon into layman’s terms for financial literacy.',
    icon: 'gavel'
  }
];

const Powertrain = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col-reverse md:flex-row bg-[#FFFFF0] overflow-hidden" id="powertrain">
      {/* Left: Project Cards */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center py-12 px-8 sm:px-12 lg:px-20 z-0">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-900 tracking-tight font-bold mb-10 leading-tight">
            Projects
          </h2>

          <div className="flex flex-col gap-6">
            {PROJECTS.map((proj, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#00C9FF] shrink-0">
                    <span className="material-symbols-outlined text-2xl">{proj.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif text-slate-800 font-bold">{proj.title}</h3>
                    <p className="text-[#00C9FF] font-sans text-xs font-bold uppercase tracking-wider mt-1">{proj.tech}</p>
                  </div>
                </div>
                <p className="text-slate-600 font-sans text-sm lg:text-base leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Cars Themed Image Container */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center p-8 md:py-16 md:pr-16 md:pl-8 z-10">
        <div className="relative w-full h-full min-h-[40vh] md:min-h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl">
          <picture className="w-full h-full block">
            <source srcSet={powertrainBgAvif} type="image/avif" />
            <img 
              src={powertrainBg} 
              alt="Powertrain Background" 
              className="w-full h-full object-cover object-center saturate-110 contrast-105" 
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Powertrain;
