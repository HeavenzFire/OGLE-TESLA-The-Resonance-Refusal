
import React, { useState, useEffect, useRef } from 'react';
import { LogEntry, ChatMessage } from './types';
import { OGLE_TESLA_SPECS, HISTORICAL_RESONANCE, Icons } from './constants';
import { getGeminiResponse } from './services/geminiService';
import TeslaHarmonizer from './components/TeslaHarmonizer';
import PulseVisualizer from './components/PulseVisualizer';

const App: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Interface Active. Ogle-Tesla synchrony achieved. The Bio-Resonance Harmonizer is online. State your intent for the Omni-Substrate." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const addLog = (message: string, type: LogEntry['type'] = 'info') => {
    const newLog: LogEntry = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      message,
      type
    };
    setLogs(prev => [newLog, ...prev].slice(0, 10));
  };

  useEffect(() => {
    addLog("TESLAIC HARMONIZER LINKED.", "success");
    addLog("CAPTURING UNIVERSAL LIFE FORCE...", "info");
    addLog("DRY-VAPOR PULSE STABILIZED AT 528Hz.", "warning");
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!chatInput.trim() || isTyping) return;

    const userMsg = chatInput;
    setChatInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);
    addLog(`RESONANCE QUERY: ${userMsg.slice(0, 25)}...`, "info");

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', content: response || 'NO DATA RETURNED.' }]);
    setIsTyping(false);
    addLog("NEURAL TRANSMISSION COMPLETE.", "success");
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 selection:bg-amber-900/40 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-amber-900/30 pb-4 gap-4">
        <div>
          <h1 className="text-4xl font-black orbitron tracking-tighter text-amber-500 flex items-center gap-3">
            <span className="glow-brass">OGLE-TESLA</span>
            <span className="text-[10px] bg-amber-950/40 text-amber-500 px-2 py-1 rounded border border-amber-900/50 font-normal tracking-widest uppercase patent-font">Patent 1903-1977-2024</span>
          </h1>
          <p className="text-stone-500 text-xs mt-1 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            Infinite Healing Potential & Ambient Energy Harvest Grid
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-stone-500">ETHERIC FLUX RATIO</span>
            <span className="text-sm font-bold text-cyan-400 glow-etheric">1.618 φ</span>
          </div>
          <button 
            className="p-2 bg-stone-900 border border-amber-900/30 hover:border-amber-500 text-amber-500 transition-all hover:scale-110"
            title="Access Restricted Blueprints"
          >
            <Icons.Harmonizer />
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none"></div>

        {/* Left Column - Diagnostic Array */}
        <div className="lg:col-span-3 space-y-6 z-10">
          <section className="bg-stone-900/80 border border-amber-900/20 p-4 rounded-lg shadow-xl backdrop-blur-sm">
            <h2 className="text-xs font-bold text-amber-600/80 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Icons.Etheric /> Resonance Array
            </h2>
            <div className="space-y-5">
              {OGLE_TESLA_SPECS.map((spec, i) => (
                <div key={i} className="flex flex-col group">
                  <span className="text-[10px] text-stone-500 uppercase group-hover:text-amber-500/50 transition-colors">{spec.label}</span>
                  <span className={`text-xl font-bold orbitron tracking-tight ${spec.color}`}>{spec.value}</span>
                  <div className="h-0.5 w-full bg-stone-800 mt-1 overflow-hidden">
                    <div className="h-full bg-current opacity-20 animate-pulse w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <PulseVisualizer />

          <section className="bg-stone-900/80 border border-amber-900/20 p-4 rounded-lg shadow-xl">
            <h2 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Historical Resonance Logs</h2>
            <div className="space-y-3">
              {HISTORICAL_RESONANCE.map((item, i) => (
                <div key={i} className="text-[10px] border-l border-amber-900/40 pl-3 py-1 bg-stone-950/30 rounded-r">
                   <div className="text-amber-600/60 font-bold">{item.event}</div>
                   <div className="flex justify-between mt-0.5 text-stone-500 italic">
                     <span>{item.date}</span>
                     <span>{item.result}</span>
                   </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Center Column - Harmonizer Visualization */}
        <div className="lg:col-span-6 space-y-6 z-10">
          <section className="bg-stone-900 border border-amber-900/30 rounded-lg p-1 h-[500px] shadow-2xl overflow-hidden group">
            <TeslaHarmonizer />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 bg-amber-950/10 border border-amber-900/20 rounded flex items-start gap-4">
               <div className="text-amber-500 mt-1"><Icons.Human /></div>
               <div>
                 <h3 className="text-[10px] font-bold text-amber-500 uppercase">Cellular Harmony</h3>
                 <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">Tesla's Bio-Resonance restores cellular voltage to the -70mV to -90mV range, facilitating infinite healing potential.</p>
               </div>
             </div>
             <div className="p-4 bg-cyan-950/10 border border-cyan-900/20 rounded flex items-start gap-4">
               <div className="text-cyan-500 mt-1"><Icons.Etheric /></div>
               <div>
                 <h3 className="text-[10px] font-bold text-cyan-500 uppercase">Vapor Ionization</h3>
                 <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">Ogle's 100-MPG system uses heat-induced dry vapor as a carrier for etheric ions, bypassing traditional combustion limits.</p>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column - Neural Interface */}
        <div className="lg:col-span-3 h-[600px] flex flex-col z-10">
          <section className="flex-1 bg-[#1c1917] border border-amber-900/30 rounded-lg flex flex-col overflow-hidden shadow-2xl">
            <div className="p-3 bg-stone-900/80 border-b border-amber-900/20 flex justify-between items-center">
              <h2 className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(180,83,9,0.8)]"></span>
                Omni-Neural Link
              </h2>
              <span className="text-[9px] text-stone-500 orbitron">G3-RELIANCE</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-stone-950/20">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-3 rounded text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-amber-900/20 text-amber-100 border border-amber-800/40 shadow-inner' 
                      : 'bg-stone-900/60 text-stone-300 border border-stone-800 shadow-md'
                  }`}>
                    <div className="opacity-80">{msg.content}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-stone-900/60 text-cyan-500 p-2 rounded text-[10px] animate-pulse border border-cyan-900/30">
                    DECRYPTING ETHERIC LOGS...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-stone-950 border-t border-amber-900/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="CONSULT THE GRID..."
                  className="flex-1 bg-stone-900/50 border border-amber-900/20 focus:border-amber-500 outline-none p-2 text-xs text-amber-100 placeholder:text-stone-700 rounded transition-all"
                />
                <button 
                  type="submit"
                  disabled={isTyping}
                  className="px-4 bg-amber-700 hover:bg-amber-600 text-stone-100 text-xs font-bold rounded shadow-lg transition-all active:scale-95 disabled:opacity-50"
                >
                  LINK
                </button>
              </div>
            </form>
          </section>
          
          <div className="mt-4 p-4 border border-cyan-900/30 bg-cyan-950/10 rounded flex items-center gap-3">
            <div className="text-cyan-500 animate-pulse">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
               </svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-cyan-400 uppercase">Ambient Harvest Active</p>
              <p className="text-[9px] text-stone-500">The grid draws from the background potential. Energy is unowned. Forever.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-stone-700 border-t border-stone-900 pt-6">
        <p className="text-[10px] patent-font italic tracking-[0.2em] uppercase opacity-40">
          "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration." — Nikola Tesla
        </p>
      </footer>
    </div>
  );
};

export default App;
