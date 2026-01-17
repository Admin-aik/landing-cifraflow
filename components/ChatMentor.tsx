
import React, { useState, useRef, useEffect } from 'react';
import { getFinancialAdvice } from '../services/geminiService';

const ChatMentor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    const botResponse = await getFinancialAdvice(userText);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white border border-cyan-100 rounded-2xl w-[350px] sm:w-[400px] h-[500px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="bg-cyan-600 p-4 border-b border-cyan-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-cyan-600 text-lg shadow-sm">🤖</div>
                <div>
                    <h4 className="font-orbitron font-bold text-sm text-white">Mentor Cifra</h4>
                    <span className="text-[10px] text-cyan-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse"></span>
                        Online
                    </span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.length === 0 && (
                <div className="text-center py-10 opacity-40 text-slate-500">
                    <p className="text-sm">¡Hola! Soy tu Mentor Cifra.<br/>¿En qué puedo ayudarte hoy?</p>
                </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none font-medium' 
                    : 'bg-white border border-slate-200 rounded-tl-none text-slate-800 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 p-3 rounded-xl rounded-tl-none animate-pulse text-xs text-slate-400 shadow-sm">Pensando...</div>
                </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu duda financiera..."
                className="flex-grow bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-cyan-400 text-slate-800"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 transition-all hover:scale-110 shadow-sm"
              >
                ➔
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-cyan-600 rounded-full shadow-lg flex items-center justify-center text-3xl text-white transform hover:scale-110 transition-all group border-4 border-white"
        >
          <span className="group-hover:rotate-12 transition-transform">💬</span>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">1</div>
        </button>
      )}
    </div>
  );
};

export default ChatMentor;