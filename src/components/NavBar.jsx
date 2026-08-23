import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Blueprint', href: '#blueprint' },
    { name: 'Workshop', href: '#workshop' },
    { name: 'Projects', href: '#powertrain' },
    { name: 'Contact', href: '#pitstop' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-300">
        {/* Subtle dark gradient overlay at top for clear text legibility */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none h-28" />

        <div className="flex justify-between items-center max-w-7xl mx-auto text-white">
          {/* Left: Hamburger Button */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors focus:outline-none group cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl group-hover:scale-105 transition-transform">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {/* Center: Luxury Brand Logo (Matching reference design format) */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group text-center"
          >
            <span className="text-xl md:text-2xl font-serif tracking-widest text-white uppercase font-normal">
              NIKHIL<span className="font-sans text-xs tracking-[0.25em] font-light text-white/70 ml-2 uppercase">Portfolio</span>
            </span>
          </a>

          {/* Right: Quick Links / Actions */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-sans text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors nav-link py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Right Contact Trigger */}
          <div className="md:hidden flex items-center">
            <a href="#pitstop" className="text-xs uppercase tracking-widest text-white/90 border border-white/30 px-3 py-1.5 rounded-full">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Slide-out / Fullscreen Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center text-center transition-all duration-300">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl md:text-5xl font-serif text-white hover:text-white/70 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
