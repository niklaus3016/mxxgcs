import React, { useState } from 'react';
import { ShieldCheck, FileText, Lock, X, AlertCircle } from 'lucide-react';
import { UserAgreementContent, PrivacyPolicyContent } from '../data/agreementContents';

interface StartupConsentProps {
  onConsent: () => void;
  onExit: () => void;
}

type DetailView = 'user' | 'privacy' | null;

/**
 * 软件启动时的「用户协议 + 隐私政策」同意弹窗。
 * 未同意时遮罩整个应用，用户必须主动选择「同意并继续」或「不同意」。
 * 风格与 PrivacyModal / ConfirmModal 保持一致的深色系。
 */
export const StartupConsent: React.FC<StartupConsentProps> = ({ onConsent, onExit }) => {
  const [detailView, setDetailView] = useState<DetailView>(null);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  const handleAccept = () => {
    onConsent();
  };

  const handleDecline = () => {
    setShowDeclineModal(true);
  };

  const handleDeclineConfirm = () => {
    setShowDeclineModal(false);
    onExit();
  };

  // 协议详情弹窗（用户服务协议 / 隐私政策）
  if (detailView) {
    const title = detailView === 'user' ? '用户服务协议' : '隐私政策';
    const Icon = detailView === 'user' ? FileText : Lock;
    return (
      <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-[60] animate-fadeIn">
        <div className="bg-slate-900 border border-white/15 rounded-[32px] w-full max-w-2xl h-[85vh] overflow-hidden shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/25 text-sky-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-slate-100">{title}</h2>
            </div>
            <button
              onClick={() => setDetailView(null)}
              id="agreement-detail-close"
              className="w-9 h-9 rounded-full bg-slate-800/60 hover:bg-slate-700/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-all active:scale-90"
              aria-label="关闭"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {detailView === 'user' ? <UserAgreementContent /> : <PrivacyPolicyContent />}
          </div>
          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-slate-900/80 backdrop-blur-xl shrink-0">
            <button
              onClick={() => setDetailView(null)}
              id="agreement-detail-back"
              className="w-full py-3 px-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-all active:scale-98 shadow-lg"
            >
              返回同意页
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 拒绝二次确认弹窗
  if (showDeclineModal) {
    return (
      <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-[70] animate-fadeIn">
        <div className="bg-slate-900 border border-white/15 rounded-[28px] w-full max-w-sm overflow-hidden shadow-2xl flex flex-col">
          <div className="p-6">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-500/15 border border-rose-500/25 text-rose-400 flex items-center justify-center mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-100 text-center mb-2">确认拒绝？</h3>
            <p className="text-xs text-slate-400 text-center leading-relaxed mb-5">
              您确定要拒绝《用户服务协议》与《隐私政策》吗？
              <br />
              拒绝后将无法使用本应用的任何功能，应用将退出。
            </p>
          </div>
          <div className="flex border-t border-white/10">
            <button
              onClick={() => setShowDeclineModal(false)}
              id="decline-cancel-button"
              className="flex-1 py-3.5 text-center text-slate-300 font-medium text-xs hover:bg-slate-800/60 transition-colors border-r border-white/10"
            >
              取消
            </button>
            <button
              onClick={handleDeclineConfirm}
              id="decline-confirm-button"
              className="flex-1 py-3.5 text-center text-rose-400 font-bold text-xs hover:bg-slate-800/60 transition-colors"
            >
              确认拒绝
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 主同意弹窗
  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-slate-900 border border-white/15 rounded-[32px] w-full max-w-sm shadow-2xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 pt-7 pb-2 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center mb-4">
            <ShieldCheck className="w-7 h-7 text-sky-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-100 mb-1">用户协议与隐私政策</h3>
          <p className="text-[11px] text-slate-400">明序性格测试 · v1.0</p>
        </div>

        {/* Body */}
        <div className="px-6 pb-4 overflow-y-auto custom-scrollbar">
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                1
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-slate-100">《隐私政策》</strong>
                中关于本地测评数据存储、零收集零上报与您数据权利的说明。
              </p>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                2
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-slate-100">《用户服务协议》</strong>
                中关于本应用的服务内容、知识产权与免责声明的说明。
              </p>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-400 leading-relaxed">
            请阅读完整的
            <button
              onClick={() => setDetailView('user')}
              id="open-agreement-link"
              className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline cursor-pointer font-medium mx-1"
            >
              《用户服务协议》
            </button>
            和
            <button
              onClick={() => setDetailView('privacy')}
              id="open-privacy-link"
              className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline cursor-pointer font-medium mx-1"
            >
              《隐私政策》
            </button>
            了解详细内容。如您同意，请点击下方「同意并继续」。
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex border-t border-white/10">
          <button
            onClick={handleDecline}
            id="consent-decline-button"
            className="flex-1 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800/60 border-r border-white/10 transition-colors"
          >
            不同意
          </button>
          <button
            onClick={handleAccept}
            id="consent-accept-button"
            className="flex-1 py-4 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-colors"
          >
            同意并继续
          </button>
        </div>
      </div>
    </div>
  );
};
