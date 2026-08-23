import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 bg-black border-t border-white/10 text-xs font-sans uppercase tracking-[0.2em] text-white/60">
      <div className="font-serif text-white tracking-widest text-sm uppercase">
        Nikhil
      </div>
      <div>
        © {new Date().getFullYear()} Nikhil Portfolio. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a className="hover:text-white transition-colors" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;
