
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface HeroProps {
  onStart: () => void;
}

const IMAGE_PROMPT = `3D animated movie style, Pixar/Disney render. A teenage boy with brown hair wearing a light grey hoodie and blue jeans stands triumphantly in the center. He is holding a large, ornate, glowing golden key high above his head with one hand. Behind him is a massive, heavy industrial vault door, wide open, with a bright, intense golden light and piles of gold coins spilling out from the inside. Floating around the boy are several futuristic holographic HUD interfaces in cyan and magenta colors, showing icons like shields, checkmarks, a backpack, and progress bars. The floor is dark and reflective, with golden coins scattered around and some floating in the air. At the top center, the text 'CifraFlow' is written in a stylized neon font with a cyan-to-magenta gradient glow. Cinematic lighting, high detail, vibrant colors, magical and empowering atmosphere. Full frame composition.`;

const Hero: React.FC<HeroProps> = ({ onStart }) => {
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
            parts: [{ text: IMAGE_PROMPT }],
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Error generating hero image:", error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateImage();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 relative overflow-hidden bg-[#EDE8D0]">
      
      {/* Background Ambience (Outer) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-yellow-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-50/40 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content Area: Immersive Card */}
      <div className="z-10 w-full max-w-6xl h-[85vh] bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-white overflow-hidden relative flex flex-col animate-in zoom-in duration-1000">
        
        {/* Background Layer: The Full-Size Image brought to foreground */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {isGenerating ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-slate-50">
              <div className="w-20 h-20 border-4 border-slate-100 border-t-cyan-500 rounded-full animate-spin"></div>
              <span className="font-orbitron text-[10px] text-slate-400 tracking-[0.6em] uppercase">Abriendo Bóveda...</span>
            </div>
          ) : generatedImageUrl ? (
            <div className="w-full h-full relative group">
              <img 
                src={generatedImageUrl} 
                alt="CIFRA FLOW Start Portal" 
                className="w-full h-full object-cover animate-in fade-in duration-1000 scale-105 group-hover:scale-100 transition-transform duration-[3000ms] ease-out"
              />
              {/* Refined Overlays: Less intrusive to bring image forward */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[0.5px]"></div>
              
              {/* Dynamic Lens Flare Effect */}
              <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            </div>
          ) : (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                <div className="w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          )}
        </div>

        {/* Content Layer: Floating Elements */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-12 md:p-20 pointer-events-none">
          
          {/* Top Branding Section */}
          <div className="w-full pointer-events-auto">
            <div className="inline-block backdrop-blur-md bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-8 shadow-xl">
               <span className="text-[10px] font-orbitron text-cyan-300 tracking-[0.5em] font-bold uppercase drop-shadow-md">
                 Sistema de Educación Financiera
               </span>
            </div>
            <h1 className="font-orbitron text-6xl md:text-8xl font-black tracking-[0.3em] text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)] leading-none mb-6">
              CIFRA<span className="text-cyan-400">FLOW</span>
            </h1>
          </div>

          {/* Bottom Action Section */}
          <div className="w-full max-w-3xl flex flex-col items-center pointer-events-auto">
            <div className="backdrop-blur-2xl bg-black/40 border border-white/10 p-10 rounded-[3rem] shadow-2xl w-full mb-4">
              <p className="text-base md:text-xl text-slate-100 font-inter mb-10 tracking-[0.1em] drop-shadow-md leading-relaxed">
                Desbloquea tu potencial, asegura el futuro de tu familia y conviértete en el <span className="text-cyan-300 font-bold">próximo líder financiero</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button 
                  onClick={onStart}
                  className="w-full sm:w-auto px-16 bg-white hover:bg-cyan-400 text-slate-900 font-bold py-6 rounded-3xl transition-all shadow-[0_25px_60px_-15px_rgba(255,255,255,0.4)] active:scale-95 group overflow-hidden relative"
                >
                   <span className="font-orbitron tracking-[0.3em] text-xs md:text-sm relative z-10 group-hover:text-white transition-colors">INGRESAR AL SANDBOX</span>
                   <div className="absolute inset-0 bg-slate-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                  <span className="text-[10px] font-orbitron text-white/80 tracking-widest uppercase">SERVIDOR ONLINE</span>
                </div>
              </div>
            </div>

            {/* Hint of interaction */}
            <div className="mt-8 opacity-70 animate-bounce flex flex-col items-center gap-2">
               <span className="text-white text-[9px] font-orbitron tracking-[0.4em] uppercase">Explorar</span>
               <span className="text-white text-xl">↓</span>
            </div>
          </div>
        </div>

        {/* Decorative Glass Border Overlay */}
        <div className="absolute inset-0 pointer-events-none border-[20px] border-white/5 rounded-[4rem] z-20 shadow-inner"></div>
      </div>

      {/* Outer Decorative Elements */}
      <div className="absolute top-[20%] left-[8%] text-6xl opacity-20 select-none animate-float hidden lg:block drop-shadow-2xl">🪙</div>
      <div className="absolute bottom-[20%] right-[8%] text-6xl opacity-20 select-none animate-float hidden lg:block drop-shadow-2xl" style={{ animationDelay: '2s' }}>🔑</div>
      
    </section>
  );
};

export default Hero;
