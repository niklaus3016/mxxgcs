import React, { useState } from 'react';
import { Volume2, VolumeX, Smartphone, ShieldCheck, Trash2, HelpCircle, AlertTriangle, Sparkles, ChevronRight } from 'lucide-react';
import { AppSettings } from '../types';
import { ConfirmModal } from '../components/ConfirmModal';
import { PrivacyModal } from '../components/PrivacyModal';
import { PrivacyPolicyContent } from '../data/agreementContents';

interface SettingsViewProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  onClearAllData: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onUpdateSettings,
  onClearAllData,
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const toggleSound = () => {
    onUpdateSettings({ ...settings, soundEnabled: !settings.soundEnabled });
  };

  const toggleVibration = () => {
    onUpdateSettings({ ...settings, vibrationEnabled: !settings.vibrationEnabled });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6 animate-fadeIn pb-28">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          系统设置与偏好
        </h2>
        <p className="text-xs text-slate-400">所有偏好配置均立即生效，并保存在本地设备</p>
      </div>

      {/* Interactive Toggles */}
      <div className="p-6 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">交互反馈设置</h3>

        <div className="space-y-3">
          {/* Sound Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center border border-blue-500/20">
                {settings.soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">答题按键音效</h4>
                <p className="text-[11px] text-slate-400">点击选项时播放清脆音频反馈</p>
              </div>
            </div>

            <button
              onClick={toggleSound}
              id="toggle-sound-btn"
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                settings.soundEnabled ? 'bg-blue-500' : 'bg-slate-800'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.soundEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Vibration Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">触觉触振反馈</h4>
                <p className="text-[11px] text-slate-400">选中答案时提供轻微触觉微振动</p>
              </div>
            </div>

            <button
              onClick={toggleVibration}
              id="toggle-vibration-btn"
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                settings.vibrationEnabled ? 'bg-blue-500' : 'bg-slate-800'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  settings.vibrationEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Action Card */}
      <div className="p-6 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-emerald-500/30 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-200">隐私政策与数据安全</h3>
            </div>
          </div>

          <button
            onClick={() => setShowPrivacyModal(true)}
            id="open-privacy-policy-btn"
            className="py-2 px-4 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold text-xs border border-emerald-500/30 transition-all active:scale-95 flex items-center gap-1 shrink-0"
          >
            隐私政策 <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Clear All Data */}
      <div className="p-6 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-rose-500/30 space-y-3 shadow-xl">
        <h3 className="text-xs font-bold text-rose-400 flex items-center gap-2">
          <Trash2 className="w-4 h-4" /> 危险区域 · 本地数据管理
        </h3>
        <p className="text-xs text-slate-400">
          如果你想重置应用程序状态，可以一键清空所有历史答题进度、测试档案与收藏解读。
        </p>
        <button
          onClick={() => setShowResetConfirm(true)}
          id="clear-app-data-button"
          className="py-3 px-5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 font-bold text-xs border border-rose-500/30 transition-all active:scale-95 flex items-center gap-2"
        >
          <Trash2 className="w-4 h-4" /> 一键清空所有本地数据
        </button>
      </div>

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      >
        <PrivacyPolicyContent />
      </PrivacyModal>

      {/* Reset Confirmation Modal */}
      <ConfirmModal
        isOpen={showResetConfirm}
        title="重置所有本地数据？"
        message="此操作将永久清空你的答题进度、历史测试档案、收藏解读与系统设置，清空后无法撤销恢复。"
        confirmText="清空并重置"
        cancelText="取消"
        onConfirm={() => {
          onClearAllData();
          setShowResetConfirm(false);
        }}
        onCancel={() => setShowResetConfirm(false)}
      />
    </div>
  );
};
