
import React, { useEffect, useRef } from 'react';

const PulseVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.beginPath();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      for (let x = 0; x < width; x++) {
        // Simulating the "Repair Pulse" frequency waves
        const y = centerY + Math.sin(x * 0.05 + time) * 10 + Math.sin(x * 0.02 + time * 0.5) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#f59e0b';
      ctx.stroke();
      
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();
    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-slate-900/50 border border-amber-900/30 rounded p-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold text-amber-500 orbitron tracking-widest uppercase">528Hz Repair Pulse</span>
        <span className="text-[10px] text-slate-500">STABLE</span>
      </div>
      <canvas ref={canvasRef} width={400} height={40} className="w-full h-10 opacity-80" />
    </div>
  );
};

export default PulseVisualizer;
