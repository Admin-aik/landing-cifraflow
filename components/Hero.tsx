
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start text-center px-4 pt-20 pb-12 relative overflow-hidden animate-in fade-in duration-1000 bg-[#fdfaf1]">
      
      {/* Gradiente de Suelo - Blanco suave */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
      
      {/* 1. Título Superior Estilo Metálico Adaptado */}
      <div className="z-40 mb-2 sm:mb-10">
        <h1 className="font-orbitron text-5xl sm:text-7xl lg:text-8xl font-black tracking-[0.15em] relative inline-block">
          <span className="absolute inset-0 text-cyan-200/40 blur-2xl select-none animate-pulse">CIFRA FLOW</span>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-[#1e293b] via-[#d4af37] to-[#92400e] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            CIFRA FLOW
          </span>
        </h1>
      </div>

      {/* 2. Escena Central: Pareja Gamer Interactuando */}
      <div className="relative w-full max-w-7xl flex items-center justify-center flex-grow z-10">
        
        {/* Fondo Blanco Puro para resaltar a la pareja */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[800px] sm:h-[800px] rounded-full bg-white shadow-[0_0_150px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden z-0">
            {/* Sutil anillo de rotación cian */}
            <div className="w-[98%] h-[98%] border-2 border-dashed border-cyan-100/50 rounded-full animate-[spin_60s_linear_infinite]"></div>
        </div>

        {/* Paneles Holográficos Izquierdos */}
        <div className="absolute left-[2%] top-[15%] hidden 2xl:flex flex-col gap-8 z-30">
          <div className="w-64 h-36 bg-white/40 border border-white/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl animate-float relative overflow-hidden">
             <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-xs">📊</div>
                <div className="text-[10px] font-orbitron text-slate-500 uppercase tracking-widest">Real-time Stats</div>
             </div>
             <div className="h-1.5 w-full bg-slate-200 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 w-2/3"></div>
             </div>
             <div className="h-1.5 w-1/2 bg-slate-100 rounded-full"></div>
             <div className="mt-4 flex justify-between items-center text-[10px] font-orbitron text-cyan-600 font-bold">
                <span>SYNCING...</span>
                <span>SECURE</span>
             </div>
          </div>
        </div>

        {/* Pareja Gamer Central - Interactuando con el teclado sin biblioteca de fondo */}
        <div className="relative z-20 flex items-center justify-center mt-6">
          <div className="relative group">
            {/* Brillo exterior */}
            <div className="absolute -inset-10 bg-cyan-100/30 blur-[60px] rounded-full opacity-60 pointer-events-none"></div>
            
            <div className="relative rounded-[3rem] p-2 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                alt="Pareja de adolescentes usando la laptop con enfoque en manos y teclado" 
                className="w-80 h-[480px] sm:w-[700px] sm:h-[550px] object-cover rounded-[2.8rem] brightness-105 saturate-[0.9] contrast-[1.05] hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Overlays de Interfaz sobre el Teclado/Área de acción */}
              <div className="absolute bottom-[35%] left-[30%] bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-cyan-100 animate-bounce text-[11px] font-orbitron font-bold text-cyan-600 z-40">
                TAP TO UNLOCK
              </div>
              
              <div className="absolute top-[25%] right-[12%] bg-white/90 backdrop-blur px-5 py-2.5 rounded-2xl shadow-xl border border-blue-100 animate-float z-40">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <span className="text-[11px] font-orbitron text-slate-700 font-bold tracking-wider">SECURE SESSION</span>
                  </div>
              </div>
            </div>
            
            {/* La Llave de Oro Flotante */}
            <div className="absolute top-[5%] right-[2%] w-24 h-24 bg-cyan-100/60 blur-[40px] rounded-full animate-pulse pointer-events-none"></div>
            <div className="absolute top-[8%] right-[5%] text-7xl drop-shadow-2xl select-none animate-float z-30" style={{ animationDuration: '3.5s' }}>🔑</div>
          </div>
        </div>

        {/* Paneles Holográficos Derechos */}
        <div className="absolute right-[2%] top-[25%] hidden 2xl:flex flex-col gap-10 z-30">
          <div className="w-64 h-48 bg-white/40 border border-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
             <div className="w-full flex justify-between items-center mb-6">
                <span className="text-[10px] font-orbitron text-cyan-600 tracking-widest">PORTFOLIO</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
             </div>
             <div className="flex items-center justify-center h-24 border border-cyan-50 rounded-2xl bg-white/50">
                <span className="text-5xl drop-shadow-lg">👛</span>
             </div>
             <div className="mt-4 text-center">
                <span className="text-[8px] font-orbitron text-slate-400 uppercase font-bold">Wallet Ready for Action</span>
             </div>
          </div>
        </div>

        {/* Monedas Flotantes decorativas */}
        <div className="absolute bottom-[20%] left-[10%] text-4xl animate-float opacity-30" style={{ animationDuration: '4s' }}>🪙</div>
        <div className="absolute top-[10%] right-[12%] text-3xl animate-float opacity-30" style={{ animationDuration: '5s', animationDelay: '1s' }}>🪙</div>
      </div>

      {/* 3. Área de Texto y Acciones */}
      <div className="z-40 max-w-2xl mt-4 sm:mt-10">
        <p className="text-xl sm:text-2xl font-light text-slate-700 mb-8 leading-relaxed font-inter px-6">
          Domina tu futuro financiero. Usa la <span className="text-cyan-600 font-bold">Llave Maestra</span> y toma el control. 
          <span className="block text-sm sm:text-lg mt-2 text-slate-400 tracking-[0.25em] font-orbitron uppercase">La interactividad es el nuevo aprendizaje.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onStart}
            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 active:scale-95 text-white font-black py-4 px-16 rounded-2xl text-xl shadow-lg transition-all flex items-center justify-center gap-3 overflow-hidden border border-white/20"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-30deg]"></div>
            <span className="text-2xl drop-shadow-md">🕹️</span>
            COMENZAR TUTORIAL
          </button>
          
          <button className="bg-white/60 hover:bg-white border border-cyan-100 backdrop-blur-md font-bold py-4 px-12 rounded-2xl text-xl transition-all hover:border-cyan-400 group text-slate-600 shadow-sm">
            <span className="group-hover:text-cyan-600 transition-colors font-orbitron text-xs tracking-[0.3em]">RANKING</span>
          </button>
        </div>
      </div>

      {/* Footer Live Stats */}
      <div className="mt-12 flex gap-10 opacity-70 text-[8px] font-orbitron tracking-[0.5em] z-40 uppercase text-slate-500">
        <div className="flex flex-col items-center">
          <span className="text-cyan-600 font-bold text-xs mb-1">ONLINE</span>
          <span>15,420 PLAYERS</span>
        </div>
        <div className="w-px h-8 bg-slate-300"></div>
        <div className="flex flex-col items-center">
          <span className="text-blue-600 font-bold text-xs mb-1">XP POOL</span>
          <span>5.1M TOTAL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
