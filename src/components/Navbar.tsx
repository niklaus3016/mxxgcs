import React from 'react';
import { ArrowLeft, Settings, Compass, Sparkles } from 'lucide-react';

interface NavbarProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  onOpenSettings?: () => void;
  currentTab?: 'home' | 'profile' | 'history' | 'settings';
}

export const Navbar: React.FC<NavbarProps> = ({
  title = '明序性格测试',
  showBack = false,
  onBack,
  onOpenSettings,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-slate-900/50 backdrop-blur-xl border-b border-white/10 px-4 py-3 text-slate-100 transition-all">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
        {showBack ? (
          <button
            onClick={onBack}
            id="nav-back-button"
            className="flex items-center justify-center p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/60 border border-white/10 text-slate-200 transition-transform active:scale-95"
            aria-label="返回"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#1D4ED8] flex items-center justify-center shadow-lg shadow-blue-500/20 text-white">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-base leading-tight tracking-tight text-white flex items-center gap-1.5">
                {title}
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              </h1>
              <p className="text-[10px] text-blue-400/80 font-medium uppercase tracking-widest">
                Ming Xu Analysis
              </p>
            </div>
          </div>
        )}

        {showBack && (
          <h2 className="font-semibold text-base text-slate-200 truncate flex-1 text-center px-2">
            {title}
          </h2>
        )}

        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            id="nav-settings-button"
            className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/60 border border-white/10 text-slate-300 hover:text-sky-400 transition-transform active:scale-95"
            aria-label="系统设置"
          >
            <Settings className="w-5 h-5" />
          </button>
        )}
      </div>
    </header>
  );
};
