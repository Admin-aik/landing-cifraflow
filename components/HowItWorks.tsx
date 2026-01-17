
import React from 'react';

const steps = [
  { id: 1, title: 'Descifra el Módulo', icon: '📖', desc: 'Aprende conceptos clave con micro-lecciones interactivas.', color: 'blue' },
  { id: 2, title: 'Hackea el Desafío', icon: '🧩', desc: 'Demuestra lo que sabes superando tests y rompecabezas reales.', color: 'cyan' },
  { id: 3, title: 'Libera tu CIFRAFLOW', icon: '🔓', desc: 'Desbloquea llaves que activan productos financieros reales.', color: 'blue' },
  { id: 4, title: 'Compra en Aliados', icon: '🛒', desc: 'Usa tu poder de compra en nuestra red de comercios aliados.', color: 'cyan' },
];

interface HowItWorksProps {
  onNext: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNext }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 animate-in slide-in-from-bottom duration-500 bg-[#fdfaf1]">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl sm:text-5xl font-bold mb-4 text-slate-800">¿CÓMO <span className="text-cyan-600">FUNCIONA</span>?</h2>
        <p className="text-slate-500 uppercase tracking-widest text-xs">El conocimiento es el único cheat code para la libertad financiera.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map((step) => (
          <div key={step.id} className="relative group p-8 rounded-[2rem] bg-white/60 border border-white shadow-sm hover:shadow-md hover:border-cyan-200 transition-all text-center backdrop-blur-sm overflow-hidden">
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform ${step.color === 'blue' ? 'bg-blue-100' : 'bg-cyan-100'}`}>
              {step.icon}
            </div>
            <div className={`absolute -top-4 -left-4 text-7xl font-orbitron font-black opacity-10 ${step.color === 'blue' ? 'text-blue-200' : 'text-cyan-200'}`}>{step.id}</div>
            <h3 className="font-orbitron text-lg font-bold mb-3 tracking-wide text-slate-800">{step.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            
            <div className={`absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity ${step.color === 'blue' ? 'bg-blue-500' : 'bg-cyan-500'}`}></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 text-white font-bold py-4 px-12 rounded-2xl shadow-lg transition-all font-orbitron tracking-widest text-sm"
        >
          INICIAR MI RUTA
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;