
import React, { useState, useEffect } from 'react';
import { Section } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LearningPath from './components/LearningPath';
import MasterKeys from './components/MasterKeys';
import PricingCTA from './components/PricingCTA';
import ChatMentor from './components/ChatMentor';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const renderSection = () => {
    switch (activeSection) {
      case Section.HOME: return <Hero onStart={() => setActiveSection(Section.HOW_IT_WORKS)} />;
      case Section.HOW_IT_WORKS: return <HowItWorks onNext={() => setActiveSection(Section.LEARNING_PATH)} />;
      case Section.LEARNING_PATH: return <LearningPath onNext={() => setActiveSection(Section.MASTER_KEYS)} />;
      case Section.MASTER_KEYS: return <MasterKeys onNext={() => setActiveSection(Section.CTA)} />;
      case Section.CTA: return <PricingCTA />;
      default: return <Hero onStart={() => setActiveSection(Section.HOW_IT_WORKS)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#fdfaf1]">
      {/* Background Gradients - Suaves y aireados para fondo crema */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Glow cálido Oro/Cian */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-yellow-100/30 blur-[150px] rounded-full"></div>
        {/* Glow suave Turquesa */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-cyan-100/20 blur-[150px] rounded-full"></div>
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-grow pt-20">
        {renderSection()}
      </main>

      <ChatMentor />

      <footer className="py-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-orbitron tracking-widest">
        <p>© 2024 CIFRA FLOW. EL CONOCIMIENTO ES LA CLAVE DEL CONSUMO.</p>
      </footer>
    </div>
  );
};

export default App;