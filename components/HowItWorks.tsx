
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const steps = [
  { id: 1, title: 'Descifra el Módulo', icon: '📖', desc: 'Micro-lecciones interactivas que parecen misiones.', color: 'blue' },
  { id: 2, title: 'Hackea el Desafío', icon: '🧩', desc: 'Supera tests de mercado real.', color: 'cyan' },
  { id: 3, title: 'Libera tu CIFRAFLOW', icon: '🔓', desc: 'Activa productos financieros familiares.', color: 'blue' },
  { id: 4, title: 'Impacto Real', icon: '🛍️', desc: 'Usa tu poder en nuestra red aliada.', color: 'cyan' },
];

const FLOW_IMAGE_PROMPT = `Professional creative flow diagram slide with playful educational gaming aesthetic. Portrait format for mobile. 3D style, rendering, model, pixar. Modern gaming illustration style with vibrant colors, Clean vector-like rendering with depth, showing a central teenager surrounded by learning symbols, trophies, and gold coins. Three circular platforms showing Learn, Challenge, and Reward. Bright, high-contrast visual with glowing neon arrows. 8k resolution, cinematic lighting.`;

interface HowItWorksProps {
  onNext: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNext }) => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      if (!process.env.API_KEY) return;
      setIsGenerating(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: FLOW_IMAGE_PROMPT }],
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Error generating flow image:", error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateImage();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-12 animate-in slide-in-from-bottom duration-700 bg-[#EDE8D0]">
      
      {/* Immersive Main Container */}
      <div className="relative w-full min-h-[85vh] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] border border-white bg-white">
        
        {/* Background Layer: Visual as the Hero */}
        <div className="absolute inset-0 z-0">
          {isGenerating ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-slate-50">
              <div className="w-24 h-24 border-4 border-slate-100 border-t-cyan-500 rounded-full animate-spin"></div>
              <span className="font-orbitron text-xs text-slate-400 tracking-[0.5em] uppercase">Generando Mundo Visual...</span>
            </div>
          ) : generatedImageUrl ? (
            <div className="w-full h-full relative group">
              <img 
                src={generatedImageUrl} 
                alt="Flow Visualization Background" 
                className="w-full h-full object-cover animate-in fade-in duration-1000 scale-[1.02] group-hover:scale-100 transition-transform duration-[4000ms]"
              />
              {/* Minimal Overlays to keep image in 'primer plano' */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          ) : (
            <div className="w-full h-full bg-slate-900"></div>
          )}
        </div>

        {/* Content Layer: Floating UI Elements */}
        <div className="relative z-10 w-full h-full flex flex-col p-10 md:p-16 justify-between">
          
          {/* Header - Compact Overlay */}
          <div className="max-w-2xl bg-black/20 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 shadow-2xl">
            <span className="text-[10px] font-orbitron text-cyan-400 tracking-[0.5em] uppercase mb-4 block drop-shadow-md">Ecosistema de Crecimiento</span>
            <h2 className="font-orbitron text-3xl sm:text-5xl font-bold text-white leading-tight drop-shadow-lg mb-4 uppercase">
              TU VIAJE <span className="text-cyan-400">FINANCIERO</span>
            </h2>
            <p className="text-slate-200 font-inter text-sm md:text-base leading-relaxed opacity-90">
              Aprende, supera desafíos y desbloquea el poder adquisitivo real para tu familia.
            </p>
          </div>

          {/* Steps Grid - Minimalist Cards pushed to edges */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className="group relative backdrop-blur-2xl bg-white/10 border border-white/20 p-6 rounded-[2.5rem] hover:bg-white/25 transition-all duration-500 shadow-xl overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    {step.icon}
                  </div>
                  
                  <h3 className="font-orbitron text-[10px] font-bold mb-2 tracking-widest text-white uppercase">{step.title}</h3>
                  <p className="text-[9px] text-slate-300 leading-tight font-inter opacity-80">{step.desc}</p>
                  
                  <div className="absolute top-4 right-6 text-4xl font-orbitron font-black text-white/5 group-hover:text-cyan-400/10 transition-colors duration-500">{step.id}</div>
                </div>
              ))}
            </div>

            {/* Bottom Nav */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px]">👤</div>
                    ))}
                  </div>
                  <span className="text-[9px] font-orbitron text-white/80 tracking-widest uppercase">+500 JUGADORES</span>
              </div>
              
              <button 
                onClick={onNext}
                className="bg-white hover:bg-cyan-400 text-slate-900 font-bold py-5 px-16 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all font-orbitron tracking-[0.2em] text-[10px] group flex items-center gap-4 hover:scale-105 active:scale-95"
              >
                SIGUIENTE NIVEL
                <span className="group-hover:translate-x-2 transition-transform inline-block">➔</span>
              </button>
            </div>
          </div>

        </div>

        {/* Outer Frame */}
        <div className="absolute inset-0 pointer-events-none border-[16px] border-white/5 rounded-[4rem] z-20"></div>
      </div>
      
    </section>
  );
};

export default HowItWorks;
