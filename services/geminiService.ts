
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFinancialAdvice = async (userMessage: string) => {
  if (!process.env.API_KEY) {
    return "Error: API Key no configurada.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "Eres 'Mentor Cifra', un experto en educación financiera para adolescentes de 12 a 17 años. Responde de forma motivadora, usando términos sencillos sobre crédito, ahorro e inversión. Sé breve y amigable. Usa emojis relacionados con tecnología y finanzas.",
      },
    });

    return response.text || "No pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hubo un problema al conectar con el mentor financiero.";
  }
};
