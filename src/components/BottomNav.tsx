import React from 'react';
import { Compass, UserCheck, History, Settings } from 'lucide-react';

export type TabType = 'home' | 'profile' | 'history' | 'settings';

interface BottomNavProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  recordCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onTabChange,
  recordCount,
}) => {
  interface TabItem {
    id: TabType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number;
  }

  const tabs: TabItem[] = [
    { id: 'home', label: '首页', icon: Compass },
    { id: 'profile', label: '我的档案', icon: UserCheck },
    { id: 'history', label: '历史记录', icon: History, badge: recordCount > 0 ? recordCount : undefined },
    { id: 'settings', label: '设置', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/60 backdrop-blur-xl border-t border-white/10 px-4 py-2.5">
      <div className="max-w-2xl mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as TabType)}
              id={`tab-btn-${tab.id}`}
              className={`relative flex flex-col items-center gap-1 py-1 px-4 rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110 text-sky-400' : ''} transition-transform`} />
                {tab.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 bg-blue-500 text-white font-mono font-bold text-[10px] rounded-full min-w-[16px] text-center shadow-md">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] leading-none">{tab.label}</span>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 absolute -bottom-1 shadow-sm shadow-sky-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
