
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const SANDBOX_IMAGE_PROMPT = `3D style, rendering, model, pixar. Professional gaming aesthetic. Cinematic view of a futuristic Venezuelan stock market trading floor. Group of high school students in stylish modern clothes acting as expert investors. They are interacting with floating golden holographic graphs, stock tickers, and digital currency symbols. High contrast, warm lighting, blue and gold accents. Background features subtle Venezuelan architectural motifs and high-tech displays. Atmosphere of success and innovation. Portrait format 9:16. Clean rendering with depth of field.`;

const PricingCTA: React.FC = () => {
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
            parts: [{ text: SANDBOX_IMAGE_PROMPT }],
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Error generating sandbox visual:", error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateImage();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-20 animate-in slide-in-from-top duration-1000 bg-[#EDE8D0]">
      <div className="bg-white border border-white rounded-[4rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Left Side: Generated Visual */}
        <div className="lg:w-5/12 relative bg-slate-900 overflow-hidden">
          {isGenerating ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-12">
              <div className="w-16 h-16 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin"></div>
              <span className="font-orbitron text-[10px] text-slate-400 tracking-[0.4em] text-center">CONECTANDO CON EL PISO DE REMATE...</span>
            </div>
          ) : generatedImageUrl ? (
            <img 
              src={generatedImageUrl} 
              alt="Venezuelan Market Sandbox" 
              className="w-full h-full object-cover animate-in fade-in duration-1000"
            />
          ) : (
            /* Fallback */
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-6xl">📈</div>
            </div>
          )}
          {/* Visual Overlay Label */}
          <div className="absolute top-8 left-8">
            <div className="backdrop-blur-md bg-black/30 border border-white/20 px-4 py-1.5 rounded-full">
              <span className="font-orbitron text-[9px] text-white tracking-[0.3em] font-bold uppercase">Simulación en Tiempo Real</span>
            </div>
          </div>
        </div>

        {/* Right Side: Pricing Content */}
        <div className="lg:w-7/12 p-8 md:p-16 flex flex-col justify-center relative">
          {/* Background Accent */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent)] pointer-events-none"></div>

          <div className="relative z-10 text-center lg:text-left">
            <span className="text-[10px] font-orbitron text-cyan-600 tracking-[0.5em] uppercase mb-6 block">Oferta de Lanzamiento</span>
            <h2 className="font-orbitron text-5xl sm:text-6xl font-bold mb-8 text-slate-900 tracking-tighter">
              ÚNETE AL <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-600 to-blue-700">SANDBOX</span>
            </h2>
            
            <div className="flex flex-col items-center lg:items-start mb-12">
                <div className="flex items-baseline gap-2">
                    <span className="text-8xl font-orbitron font-black text-slate-900">$5</span>
                    <span className="text-2xl text-slate-400 font-orbitron">/MES</span>
                </div>
                <p className="text-slate-500 font-inter mt-4 text-lg">Inversión única para tu futuro legado.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-16 text-left border-y border-slate-100 py-12">
                <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">✓</div>
                    <span className="text-slate-700 font-medium text-sm">Control Total de 3 Llaves</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">✓</div>
                    <span className="text-slate-700 font-medium text-sm">Mentor AI Ilimitado</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">✓</div>
                    <span className="text-slate-700 font-medium text-sm">Dashboard Familiar Premium</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">✓</div>
                    <span className="text-slate-700 font-medium text-sm">Acceso a Beneficios Reales</span>
                </div>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-6">
              <button 
                  onClick={() => window.open('https://example.com/register', '_blank')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 px-16 rounded-[2rem] text-lg shadow-2xl transition-all transform hover:scale-[1.03] active:scale-95 font-orbitron tracking-widest w-full sm:w-auto"
              >
                ASEGURAR MI ACCESO
              </button>
              <p className="text-slate-400 text-[10px] font-orbitron tracking-widest uppercase">
                  Sin contratos. Cancela cuando desees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center">
        <h3 className="font-orbitron text-[10px] mb-12 text-slate-400 uppercase tracking-[0.5em]">Partner Ecosystem</h3>
        <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all text-slate-900">
            <div className="text-3xl font-orbitron font-black tracking-tighter">CRYPTOBANK</div>
            <div className="text-3xl font-orbitron font-black tracking-tighter">LEGACY_CO</div>
            <div className="text-3xl font-orbitron font-black tracking-tighter">FUTURE_EDU</div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
