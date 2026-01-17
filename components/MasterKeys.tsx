
import React from 'react';
import { MASTER_KEYS } from '../constants';

interface MasterKeysProps {
  onNext: () => void;
}

const MasterKeys: React.FC<MasterKeysProps> = ({ onNext }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 animate-in zoom-in duration-500 bg-[#fdfaf1]">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl sm:text-5xl font-bold mb-4 text-slate-800">LAS TRES <span className="text-cyan-600">LLAVES MAESTRAS</span></h2>
        <p className="text-slate-500">Cada llave desbloquea un superpoder para tu economía del mañana.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {MASTER_KEYS.map((key) => (
          <div 
            key={key.id} 
            className="group relative bg-white/60 border border-white rounded-3xl p-8 hover:bg-white transition-all flex flex-col items-center text-center shadow-sm hover:shadow-md"
          >
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6 relative z-10 transition-transform group-hover:scale-110 duration-500 shadow-sm"
              style={{ backgroundColor: `${key.color}15` }}
            >
              {key.icon}
            </div>
            
            <h3 className="font-orbitron text-xl font-bold mb-3" style={{ color: key.color }}>{key.name}</h3>
            <p className="text-sm text-slate-600 mb-6 flex-grow">{key.description}</p>
            
            <div className="w-full pt-6 border-t border-slate-100">
                <span className="text-xs uppercase tracking-widest text-slate-400 block mb-2">Poder Activo</span>
                <div className="font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">{key.benefit}</div>
            </div>

            <div 
                className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ borderColor: `${key.color}33` }}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all font-orbitron tracking-widest text-sm"
        >
          Unirse al Sandbox
        </button>
      </div>
    </section>
  );
};

export default MasterKeys;