import React from 'react';
import { ShieldCheck, X, Lock, Database, EyeOff, FileText } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // If children provided, use children-rendering mode (same content as startup consent detail view)
  if (children) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
        <div className="bg-slate-900/95 border border-white/15 rounded-[32px] w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-slate-900/80 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/25 text-sky-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white leading-tight">隐私政策</h3>
                <p className="text-[10px] text-sky-400 font-mono tracking-wider uppercase">Privacy Policy</p>
              </div>
            </div>
            <button
              onClick={onClose}
              id="close-privacy-modal"
              className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 border border-white/10 text-slate-400 hover:text-white transition-all active:scale-95"
              aria-label="关闭"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {children}
          </div>
          {/* Footer */}
          <div className="p-4 border-t border-white/10 shrink-0 bg-slate-900/80 backdrop-blur-xl">
            <button
              onClick={onClose}
              id="confirm-privacy-modal"
              className="w-full py-3 px-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all active:scale-98 shadow-lg"
            >
              返回设置
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900/95 border border-white/15 rounded-[32px] max-w-md w-full max-h-[85vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-slate-900/80 backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white leading-tight">隐私政策声明</h3>
              <p className="text-[10px] text-emerald-400 font-mono tracking-wider uppercase">Privacy Policy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-privacy-modal"
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 border border-white/10 text-slate-400 hover:text-white transition-all active:scale-95"
            aria-label="关闭"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto text-xs text-slate-300 leading-relaxed custom-scrollbar">
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 space-y-1">
            <h4 className="font-bold text-xs flex items-center gap-1.5 text-emerald-400">
              <Lock className="w-3.5 h-3.5" /> 核心承诺：零收集 · 零上报 · 100% 本地化
            </h4>
            <p className="text-[11px] leading-normal opacity-90">
              《明序性格测试》严格遵循纯前端离线运行机制，不设后台服务器，绝不收集或上传您的任何个人隐私与测试数据。
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-white flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-400" /> 1. 数据存储机制
            </h4>
            <p className="text-slate-300">
              您的所有答题进度、测评历史档案、个人喜好及设置选项均仅保存在您当前设备的浏览器本地存储（localStorage）中。
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
              <li>数据仅存留于本机，不经过任何网络传输；</li>
              <li>更换设备或清空浏览器缓存后，本地记录将被自动清除。</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-white flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-indigo-400" /> 2. 网络请求与追踪说明
            </h4>
            <p className="text-slate-300">
              本应用不包含任何第三方统计分析 SDK、跟踪 Cookie 或广告监测代码，在应用使用过程中不会发起任何云端 API 交互或数据上报。
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" /> 3. 用户数据自主管理
            </h4>
            <p className="text-slate-300">
              您拥有对自己数据的完整控制权。可以在系统设置页面随时点击"一键清空所有本地数据"完全抹除存储在设备上的所有测评记录。
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 space-y-1">
            <p>如对本隐私政策有任何疑问，可随时重新查阅本声明。</p>
            <p className="text-slate-500">更新时间：2026 年 8 月</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 shrink-0 bg-slate-900/80 backdrop-blur-xl">
          <button
            onClick={onClose}
            id="confirm-privacy-modal"
            className="w-full py-3 px-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all active:scale-98 shadow-lg"
          >
            我已阅读并知晓
          </button>
        </div>
      </div>
    </div>
  );
};
