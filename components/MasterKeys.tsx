
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MASTER_KEYS } from '../constants';

interface MasterKeysProps {
  onNext: () => void;
}

const KEYS_IMAGE_PROMPT = `3D style, rendering, model, pixar. Vertical portrait format for a full-screen mobile/web module. A dark, sophisticated tech-grid background with subtle particle effects. Three magical floating keys are stacked vertically in the center. 1. TOP: The 'Emergency' key, golden with a large glowing ruby red gem, surrounded by a red circular energy aura and a red 'lock' icon with the label 'EMERGENCIA'. 2. MIDDLE: The 'Vault' key, silver with a large glowing emerald green gem, surrounded by a green energy aura, stacks of golden coins, and a green 'lock' icon with the label 'BÓVEDA'. 3. BOTTOM: The 'Shield' key, bronze with a large glowing sapphire blue gem, surrounded by a blue hexagonal shield aura, holographic data patterns, and a blue 'lock' icon with the label 'ESCUDO'. Each key has an ornate, high-detail fantasy-tech design. The lighting is cinematic, with intense glows reflecting off the metallic surfaces. Atmosphere of mystery, power, and progression. High resolution, 8k, sharp details.`;

const MasterKeys: React.FC<MasterKeysProps> = ({ onNext }) => {
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
            parts: [{ text: KEYS_IMAGE_PROMPT }],
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Error generating keys visual:", error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateImage();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-12 animate-in zoom-in duration-700 bg-[#EDE8D0]">
      
      {/* Immersive Main Container */}
      <div className="relative w-full min-h-[85vh] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border border-white bg-white flex flex-col">
        
        {/* Background Layer: Generated Image expanded to fill the module */}
        <div className="absolute inset-0 z-0">
          {isGenerating ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-slate-900">
              <div className="w-24 h-24 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin"></div>
              <span className="font-orbitron text-xs text-slate-400 tracking-[0.5em] uppercase text-center px-8">Forjando tus Instrumentos de Poder...</span>
            </div>
          ) : generatedImageUrl ? (
            <div className="w-full h-full relative">
              <img 
                src={generatedImageUrl} 
                alt="Master Keys Background" 
                className="w-full h-full object-cover animate-in fade-in duration-1000"
              />
              {/* Overlays for depth and readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]"></div>
            </div>
          ) : (
            <div className="w-full h-full bg-slate-950"></div>
          )}
        </div>

        {/* Content Layer: Overlaid UI */}
        <div className="relative z-10 w-full h-full flex flex-col lg:flex-row p-8 md:p-16 gap-8 flex-grow">
          
          {/* Left Panel: Descriptions (Floating Glass) */}
          <div className="lg:w-2/5 flex flex-col justify-center gap-8">
            <div className="mb-4">
              <span className="text-[10px] font-orbitron text-amber-400 tracking-[0.5em] uppercase mb-4 block drop-shadow-md">Inventario de Soberanía</span>
              <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-white leading-tight drop-shadow-lg uppercase">
                LAS TRES <br/><span className="text-amber-400">LLAVES MAESTRAS</span>
              </h2>
              <p className="mt-6 text-slate-300 font-inter text-sm max-w-md">
                Cada módulo completado desbloquea una de estas llaves. Representan tu capacidad de reaccionar, crecer y proteger tu futuro.
              </p>
            </div>

            <div className="space-y-4">
              {MASTER_KEYS.map((key) => (
                <div 
                  key={key.id}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                      {key.icon}
                    </div>
                    <div>
                      <h3 className="font-orbitron text-xs font-bold text-white mb-2 uppercase tracking-widest">{key.name}</h3>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-inter">{key.description}</p>
                    </div>
                  </div>
                  {/* Color strip accent */}
                  <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full" style={{ backgroundColor: key.color }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Bottom Action Button */}
          <div className="lg:w-3/5 flex flex-col items-center justify-end lg:items-end lg:pb-8 mt-auto">
            <div className="backdrop-blur-2xl bg-black/20 border border-white/10 p-8 rounded-[3rem] shadow-2xl w-full max-w-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 animate-bounce">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-orbitron text-[10px] text-white tracking-[0.4em] mb-4 uppercase">¿LISTO PARA PROBAR EL PODER?</h4>
                <p className="text-slate-400 text-[10px] mb-8 font-inter uppercase tracking-widest">El Sandbox de CifraFlow te espera con capital de simulación.</p>
                
                <button 
                  onClick={onNext}
                  className="w-full bg-white hover:bg-amber-400 text-slate-900 font-bold py-5 rounded-2xl transition-all font-orbitron tracking-[0.3em] text-[10px] group flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  ENTRAR AL SANDBOX
                  <span className="group-hover:translate-x-2 transition-transform inline-block">➔</span>
                </button>
            </div>
          </div>

        </div>

        {/* Decorative Glass Border Overlay */}
        <div className="absolute inset-0 pointer-events-none border-[16px] border-white/5 rounded-[4rem]"></div>
      </div>
      
    </section>
  );
};

export default MasterKeys;
