
import React from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: Section.HOME, label: 'Lobby' },
    { id: Section.HOW_IT_WORKS, label: 'Cómo Funciona' },
    { id: Section.LEARNING_PATH, label: 'Ruta' },
    { id: Section.MASTER_KEYS, label: 'Llaves' },
    { id: Section.CTA, label: 'Sandbox' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/60 backdrop-blur-lg border border-white shadow-sm rounded-full px-6 py-2">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setActiveSection(Section.HOME)}
        >
          <div className="w-8 h-8 bg-cyan-600 rounded-md flex items-center justify-center font-orbitron font-bold text-white shadow-sm">CF</div>
          <span className="font-orbitron font-bold tracking-wider hidden sm:block text-slate-800">CIFRA FLOW</span>
        </div>

        <div className="flex gap-4 sm:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm font-semibold transition-all hover:text-cyan-600 ${
                activeSection === item.id ? 'text-cyan-600' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;