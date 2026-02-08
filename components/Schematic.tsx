
import React from 'react';

const Schematic: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-slate-900 border border-slate-700 rounded-lg overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <svg viewBox="0 0 800 500" className="w-full h-full text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">
        {/* Fuel Tank */}
        <rect x="50" y="350" width="150" height="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        <text x="70" y="450" fill="currentColor" className="text-xs font-bold">PRIMARY STORAGE [LIQUID]</text>
        
        {/* Vaporizer Unit */}
        <rect x="300" y="150" width="200" height="200" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="400" cy="250" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2">
          <animateTransform attributeName="transform" type="rotate" from="0 400 250" to="360 400 250" dur="10s" repeatCount="indefinite" />
        </circle>
        <text x="320" y="140" fill="currentColor" className="text-sm font-bold orbitron">VAPORIZATION CHAMBER</text>
        
        {/* Intake Manifold */}
        <path d="M500 250 L700 250 L700 150" fill="none" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <text x="550" y="240" fill="currentColor" className="text-xs font-bold">DRY VAPOR STREAM</text>
        
        {/* Heating Lines */}
        <path d="M200 390 Q 250 390 300 300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" className="text-amber-500">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
        </path>
        <text x="210" y="380" fill="#f59e0b" className="text-[10px] font-bold">THERMAL INDUCTION</text>
        
        {/* Indicators */}
        <g transform="translate(600, 350)">
          <rect width="120" height="60" fill="#0f172a" stroke="currentColor" strokeWidth="1" />
          <text x="10" y="20" fill="currentColor" className="text-[10px]">PSI: 4.2</text>
          <text x="10" y="35" fill="currentColor" className="text-[10px]">TEMP: 184F</text>
          <text x="10" y="50" fill="currentColor" className="text-[10px]">EFF: 99.8%</text>
        </g>
        
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
          </marker>
        </defs>
      </svg>
      
      <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
        <span className="flex items-center gap-2 text-[10px] text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          OMNI-SYNCHRONIZED
        </span>
        <span className="text-[10px] text-slate-500">REFUSAL LOG ID: 19810819-A</span>
      </div>
    </div>
  );
};

export default Schematic;
