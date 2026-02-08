
import React from 'react';

const TeslaHarmonizer: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#1c1917]/80 border border-amber-900/50 rounded-lg overflow-hidden flex items-center justify-center p-6 shadow-inner">
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      
      <svg viewBox="0 0 1000 600" className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Etheric Coils */}
        <g stroke="#b45309" strokeWidth="1" fill="none" opacity="0.6">
          <circle cx="700" cy="300" r="220" strokeDasharray="10,5" />
          <circle cx="700" cy="300" r="180" />
          <circle cx="700" cy="300" r="140" strokeWidth="0.5" />
        </g>

        {/* Radial Nodes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const x = 700 + Math.cos((angle * Math.PI) / 180) * 180;
          const y = 300 + Math.sin((angle * Math.PI) / 180) * 180;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="15" fill="#1c1917" stroke="#b45309" strokeWidth="2" />
              <circle cx={x} cy={y} r="4" fill="#06b6d4" className="etheric-node" />
            </g>
          );
        })}

        {/* Central Resonance Core */}
        <g filter="url(#glow)">
          <circle cx="700" cy="300" r="80" fill="#0c0a09" stroke="#06b6d4" strokeWidth="3" />
          <path d="M640 300 Q660 260 680 300 T720 300 T760 300" stroke="#06b6d4" strokeWidth="2" fill="none">
            <animate attributeName="d" 
              values="M640 300 Q660 260 680 300 T720 300 T760 300;
                      M640 300 Q660 340 680 300 T720 300 T760 300;
                      M640 300 Q660 260 680 300 T720 300 T760 300" 
              dur="1s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Bio-Connection Path */}
        <path d="M700 480 L700 520" stroke="#b45309" strokeWidth="2" strokeDasharray="4,2" />
        
        {/* Human Bio-Shell */}
        <g transform="translate(650, 520) scale(0.6)" stroke="#b45309" fill="none" strokeWidth="1.5">
          <circle cx="83.3" cy="30" r="15" />
          <path d="M83.3 45 L83.3 120 M50 70 L116 70 M83.3 120 L50 170 M83.3 120 L116 170" />
          <text x="50" y="195" fill="#b45309" className="text-[14px] font-bold patent-font">BIO-RESONANCE TARGET</text>
        </g>

        {/* Left Side: Free Energy Receiver (Vaporizer Core Merger) */}
        <g transform="translate(50, 100)">
          <rect width="400" height="350" rx="10" fill="none" stroke="#b45309" strokeWidth="2" />
          <text x="20" y="30" fill="#b45309" className="text-[12px] font-bold orbitron">TESLAIC VAPOR-CORE 1903/1977</text>
          
          <rect x="100" y="100" width="200" height="150" fill="#0c0a09" stroke="#b45309" strokeWidth="1" />
          {/* Tubes/Valves */}
          <rect x="130" y="120" width="40" height="100" rx="20" stroke="#06b6d4" strokeWidth="1" fill="none" />
          <rect x="230" y="120" width="40" height="100" rx="20" stroke="#06b6d4" strokeWidth="1" fill="none" />
          
          <path d="M400 175 L520 175 Q600 175 620 220" stroke="#06b6d4" strokeWidth="2" fill="none" />
          <path d="M400 275 L520 275 Q600 275 620 320" stroke="#06b6d4" strokeWidth="2" fill="none" />
          
          <text x="20" y="380" fill="#b45309" className="text-[10px] patent-font italic">"Universal Life Force Frequencies Captured via Dry-Vapor Ionization"</text>
        </g>

        {/* Blueprint Annotations */}
        <text x="350" y="50" fill="#b45309" className="text-2xl patent-font uppercase tracking-widest">Teslaic Bio-Resonance Harmonizer</text>
        <text x="800" y="150" fill="#b45309" className="text-xs patent-font italic">PATENT PENDING - 1903 (RESTORED 2024)</text>
      </svg>
      
      <div className="absolute top-4 right-4 text-right">
        <div className="text-[10px] text-amber-500 orbitron">RESTORATION OF CELLULAR HARMONY</div>
        <div className="text-[8px] text-slate-500">AUTH: N. TESLA / T. OGLE</div>
      </div>
    </div>
  );
};

export default TeslaHarmonizer;
