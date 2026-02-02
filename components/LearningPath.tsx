
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { LEVELS } from '../constants';
import { LevelInfo } from '../types';

interface LearningPathProps {
  onNext: () => void;
}

const EVOLUTION_IMAGE_PROMPT = `3D animated movie style, Pixar/Disney render. A vertical journey visualization on a stylized mountain silhouette background at sunset. A winding, glowing golden path with arrow markers leads from bottom to top. Three distinct stages: 1. Bottom: A young boy (age 12-13) in a denim jacket stands on a bronze circular platform with a small treasure chest and few coins. 2. Middle: A teenage girl (age 14-15) in a white hoodie stands on a silver circular platform with more treasure, bars of gold, and a shield icon. 3. Top: An older teenage boy (age 16-17) in a red coat stands triumphantly on a golden circular platform surrounded by a massive hoard of treasure, chests, swords, and three glowing floating keys above his head with a crown icon. Soft cinematic lighting, particle effects, magical atmosphere, vibrant colors. Floating UI tags showing '12-13', '14-15', and '16-17' near each level. High detail, depth of field.`;

const LearningPath: React.FC<LearningPathProps> = ({ onNext }) => {
  const [selectedLevel, setSelectedLevel] = useState<LevelInfo>(LEVELS[0]);
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
            parts: [{ text: EVOLUTION_IMAGE_PROMPT }],
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Error generating evolution map:", error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateImage();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-12 animate-in slide-in-from-right duration-700 bg-[#EDE8D0]">
      
      {/* Immersive Main Container */}
      <div className="relative w-full min-h-[85vh] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border border-white bg-white flex flex-col">
        
        {/* Background Layer: Generated Image expanded to fill the module */}
        <div className="absolute inset-0 z-0">
          {isGenerating ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-slate-50">
              <div className="w-24 h-24 border-4 border-slate-100 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="font-orbitron text-xs text-slate-400 tracking-[0.5em] uppercase">Mapeando tu Evolución...</span>
            </div>
          ) : generatedImageUrl ? (
            <div className="w-full h-full relative">
              <img 
                src={generatedImageUrl} 
                alt="Evolution Path Background" 
                className="w-full h-full object-cover animate-in fade-in duration-1000"
              />
              {/* Overlays for contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
            </div>
          ) : (
            <div className="w-full h-full bg-slate-900"></div>
          )}
        </div>

        {/* Content Layer: Overlaid UI */}
        <div className="relative z-10 w-full h-full flex flex-col lg:flex-row p-8 md:p-16 gap-12 flex-grow">
          
          {/* Left Panel: Level Selection (Floating Glass) */}
          <div className="lg:w-1/3 flex flex-col gap-4 justify-center">
            <div className="mb-8">
              <span className="text-[10px] font-orbitron text-cyan-400 tracking-[0.5em] uppercase mb-4 block drop-shadow-md">Niveles de Maestría</span>
              <h2 className="font-orbitron text-4xl font-bold text-white leading-tight drop-shadow-lg uppercase">
                RUTA DE <br/><span className="text-cyan-400">EVOLUCIÓN</span>
              </h2>
            </div>

            <div className="space-y-4">
              {LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level)}
                  className={`w-full p-6 rounded-[2rem] border transition-all text-left backdrop-blur-xl group relative overflow-hidden ${
                    selectedLevel.id === level.id 
                      ? 'bg-white/20 border-white/40 shadow-2xl scale-[1.05]' 
                      : 'bg-black/10 border-white/10 opacity-60 hover:opacity-100 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className="font-orbitron text-sm font-bold text-white mb-1 uppercase tracking-wider">
                        {level.title}
                      </h3>
                      <span className="text-[9px] font-orbitron text-cyan-300 font-bold tracking-widest uppercase">{level.ageRange}</span>
                    </div>
                    <div className="text-xl">{level.id === 'junior' ? '🎒' : level.id === 'intermedio' ? '💼' : '🏢'}</div>
                  </div>
                  {selectedLevel.id === level.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel: Active Level Details (Floating Glass) */}
          <div className="lg:w-2/3 flex items-center justify-center lg:justify-end">
            <div className="max-w-md w-full backdrop-blur-2xl bg-white/10 border border-white/20 p-10 rounded-[3rem] shadow-2xl animate-in zoom-in duration-500">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-inner shrink-0 text-4xl">
                    {selectedLevel.id === 'junior' ? '🎒' : selectedLevel.id === 'intermedio' ? '💼' : '🏢'}
                  </div>
                  <div>
                    <h4 className="text-2xl font-orbitron font-bold text-white mb-1 uppercase tracking-tighter">{selectedLevel.title}</h4>
                    <p className="text-cyan-300 text-[9px] font-orbitron tracking-[0.3em] uppercase">{selectedLevel.alias}</p>
                  </div>
                </div>
                
                <p className="text-slate-200 text-sm leading-relaxed font-inter mb-10 drop-shadow-sm">
                  {selectedLevel.description}
                </p>

                <div className="space-y-4 pt-8 border-t border-white/10">
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <span className="text-slate-400 text-[8px] font-orbitron uppercase tracking-widest">Estado</span>
                        <span className="font-bold text-cyan-400 text-[10px] font-orbitron">DISPONIBLE</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                        <span className="text-slate-400 text-[8px] font-orbitron uppercase tracking-widest">Recompensa</span>
                        <span className="font-bold text-white text-[10px] font-orbitron">LLAVE MAESTRA</span>
                    </div>
                </div>

                <div className="mt-10">
                   <button 
                    onClick={onNext}
                    className="w-full bg-white hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-2xl transition-all font-orbitron tracking-widest text-[10px] group flex items-center justify-center gap-3 shadow-xl"
                  >
                    CONTINUAR VIAJE
                    <span className="group-hover:translate-x-2 transition-transform inline-block">➔</span>
                  </button>
                </div>
            </div>
          </div>

        </div>

        {/* Decorative Glass Border */}
        <div className="absolute inset-0 pointer-events-none border-[16px] border-white/5 rounded-[4rem]"></div>
      </div>

    </section>
  );
};

export default LearningPath;
