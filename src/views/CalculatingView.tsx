import React, { useEffect } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { playCompletionSound } from '../utils/audio';

interface CalculatingViewProps {
  onDone: () => void;
  soundEnabled?: boolean;
}

export const CalculatingView: React.FC<CalculatingViewProps> = ({ onDone, soundEnabled = true }) => {
  useEffect(() => {
    if (soundEnabled) {
      playCompletionSound();
    }
    const timer = setTimeout(() => {
      onDone();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onDone, soundEnabled]);

  return (
    <div className="w-full max-w-md mx-auto min-h-[80vh] flex flex-col items-center justify-center p-6 text-center animate-fadeIn space-y-6">
      <div className="relative flex items-center justify-center">
        {/* Animated Pulse Rings */}
        <div className="absolute w-32 h-32 rounded-full bg-sky-500/10 animate-ping" />
        <div className="absolute w-24 h-24 rounded-full bg-indigo-500/20 animate-pulse" />

        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-sky-500/30">
          <Compass className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-100 flex items-center justify-center gap-2">
          正在解析你的性格秩序
          <Sparkles className="w-4 h-4 text-sky-400 animate-bounce" />
        </h3>
        <p className="text-xs text-slate-400">
          正在进行维度加权与心理特征建模计算...
        </p>
      </div>

      <div className="w-48 bg-slate-800 h-1.5 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
        <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full animate-pulse w-full" />
      </div>
    </div>
  );
};
