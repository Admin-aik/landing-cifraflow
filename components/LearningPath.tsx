
import React, { useState } from 'react';
import { LEVELS } from '../constants';
import { LevelInfo } from '../types';

interface LearningPathProps {
  onNext: () => void;
}

const LearningPath: React.FC<LearningPathProps> = ({ onNext }) => {
  const [selectedLevel, setSelectedLevel] = useState<LevelInfo>(LEVELS[0]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 animate-in slide-in-from-right duration-500 bg-[#fdfaf1]">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl sm:text-5xl font-bold mb-4 uppercase text-slate-800">Tu Ruta de <span className="text-cyan-600">Progreso</span></h2>
        <p className="text-slate-500">Evoluciona tu avatar financiero según tu edad.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {LEVELS.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level)}
              className={`w-full p-6 rounded-2xl border transition-all text-left flex items-center justify-between group ${
                selectedLevel.id === level.id 
                  ? 'bg-white border-cyan-200 shadow-md' 
                  : 'bg-white/40 border-slate-200 opacity-60 hover:opacity-100 hover:bg-white/80'
              }`}
            >
              <div>
                <h3 className="font-orbitron text-xl font-bold flex items-center gap-3 text-slate-800">
                  {level.title}
                  <span className="text-xs font-normal bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded uppercase tracking-wider">{level.ageRange}</span>
                </h3>
                <p className="text-sm text-slate-500">{level.alias}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 transition-all duration-1000" style={{ width: `${level.progress}%` }}></div>
                </div>
                <span className="font-orbitron text-cyan-600 font-bold">{level.progress}%</span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white shadow-xl flex flex-col items-center text-center">
          <div className="w-48 h-48 bg-cyan-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md relative">
             <div className="text-6xl animate-pulse">
                {selectedLevel.id === 'junior' ? '🎒' : selectedLevel.id === 'intermedio' ? '👔' : '🎓'}
             </div>
             <div className="absolute -bottom-4 bg-cyan-600 text-white px-4 py-1 rounded-full font-bold text-xs shadow-sm">
                {selectedLevel.alias}
             </div>
          </div>
          <h4 className="text-2xl font-orbitron font-bold mb-4 text-slate-800">{selectedLevel.title}</h4>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {selectedLevel.description}
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="block text-slate-400 text-xs uppercase mb-1">Status</span>
                <span className="font-bold text-cyan-600">Activo</span>
            </div>
             <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="block text-slate-400 text-xs uppercase mb-1">Módulos</span>
                <span className="font-bold text-cyan-600">12 Pendientes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button 
          onClick={onNext}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all font-orbitron tracking-widest text-sm"
        >
          Desbloquear Llaves Maestras
        </button>
      </div>
    </section>
  );
};

export default LearningPath;