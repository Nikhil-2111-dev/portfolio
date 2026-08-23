import React from 'react';

const NavBar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#blueprint' },
    { name: 'Tech', href: '#workshop' },
    { name: 'Projects', href: '#powertrain' },
    { name: 'Contact', href: '#pitstop' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 md:px-12 py-5 transition-all duration-300">
      {/* Subtle dark gradient overlay at top for clear text legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none h-28" />

      <div className="flex justify-between items-center max-w-7xl mx-auto text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group"
        >
          <span className="text-lg sm:text-xl md:text-2xl font-serif tracking-widest text-white uppercase font-normal">
            NIKHIL<span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] font-light text-white/90 ml-1.5 sm:ml-2 uppercase">Portfolio</span>
          </span>
        </a>

        {/* Navigation Links (Visible across screen sizes) */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-sans text-white/90 font-medium">
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
      </div>
    </nav>
  );
};

export default NavBar;
