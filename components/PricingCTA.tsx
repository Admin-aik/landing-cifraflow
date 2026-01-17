
import React from 'react';

const PricingCTA: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 animate-in slide-in-from-top duration-700 bg-[#fdfaf1]">
      <div className="bg-white border-2 border-cyan-100 rounded-[3rem] p-12 text-center shadow-xl relative overflow-hidden">
        {/* Background Sparkle Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05),transparent)] pointer-events-none"></div>

        <h2 className="font-orbitron text-4xl sm:text-5xl font-bold mb-6 text-slate-800">ÚNETE A <span className="text-cyan-600">CILOW SANDBOX</span></h2>
        
        <div className="flex justify-center items-baseline gap-2 mb-8">
            <span className="text-6xl font-orbitron font-bold text-cyan-600">$5</span>
            <span className="text-xl text-slate-400">/mes</span>
        </div>

        <p className="text-xl text-slate-600 mb-12 max-w-lg mx-auto leading-relaxed">
            Inversión familiar con acceso ilimitado a educación financiera de élite y herramientas de desbloqueo real.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3">
                <span className="text-cyan-600 text-xl font-bold">✓</span>
                <span className="text-slate-700">Acceso a 3 Llaves</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-cyan-600 text-xl font-bold">✓</span>
                <span className="text-slate-700">Mentor AI 24/7</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-cyan-600 text-xl font-bold">✓</span>
                <span className="text-slate-700">Dashboard Parental</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-cyan-600 text-xl font-bold">✓</span>
                <span className="text-slate-700">Red de Aliados</span>
            </div>
        </div>

        <button 
            onClick={() => window.open('https://example.com/register', '_blank')}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-5 px-16 rounded-full text-xl shadow-lg transition-all transform hover:scale-105 font-orbitron tracking-widest"
        >
          Empezar Mi Legado Hoy
        </button>

        <p className="mt-8 text-slate-400 text-sm">
            Términos y condiciones aplican. Disponible para toda la familia.
        </p>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <h3 className="font-orbitron text-xl mb-8 text-slate-400 uppercase tracking-[0.2em]">Respaldado por</h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all text-slate-600">
            <div className="text-2xl font-bold">CRYPTOBANK</div>
            <div className="text-2xl font-bold">LEGACY CO.</div>
            <div className="text-2xl font-bold">FUTURE EDU</div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;