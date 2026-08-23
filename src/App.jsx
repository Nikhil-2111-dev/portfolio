import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Blueprint from './components/Blueprint';
import Workshop from './components/Workshop';
import Powertrain from './components/Powertrain';
import PitStop from './components/PitStop';
import Footer from './components/Footer';

function App() {
  const mainRef = React.useRef(null);
  useScrollReveal(mainRef);

  return (
    <div className="antialiased text-white bg-black w-full min-h-screen selection:bg-white selection:text-black font-sans">
      <NavBar />
      <main ref={mainRef} className="flex flex-col w-full min-h-screen">
        <Hero />
        <Blueprint />
        <Workshop />
        <Powertrain />
        <PitStop />
        <Footer />
      </main>
    </div>
  );
}

export default App;
