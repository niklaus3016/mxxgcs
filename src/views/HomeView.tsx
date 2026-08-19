import React from 'react';
import { Sparkles, Play } from 'lucide-react';
import { AssessmentType, TestProgress } from '../types';

interface HomeViewProps {
  onSelectTest: (type: AssessmentType) => void;
  onResumeProgress: (progress: TestProgress) => void;
  activeProgressMBTI: TestProgress | null;
  activeProgressSBTI: TestProgress | null;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTest,
  onResumeProgress,
  activeProgressMBTI,
  activeProgressSBTI,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-8 animate-fadeIn pb-28">
      {/* Immersive Hero Header */}
      <div className="text-center space-y-3 py-2">
        <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
          明心见序，读懂自己
        </h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          专业的双体系性格测评工具，通过结构化思维与行为秩序，深度解析真实的自我特质。
        </p>
      </div>

      {/* Unfinished Test Resume Banner */}
      {(activeProgressMBTI || activeProgressSBTI) && (
        <div className="space-y-3">
          {activeProgressMBTI && (
            <div
              onClick={() => onResumeProgress(activeProgressMBTI)}
              id="resume-mbti-banner"
              className="p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex items-center justify-between gap-3 cursor-pointer hover:border-blue-500/50 transition-all active:scale-98 shadow-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs border border-blue-500/30">
                  MBTI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">
                    检测到未完成的 MBTI 测评
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    已完成 {Object.keys(activeProgressMBTI.answers).length} / 60 题，点击继续答题
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 transition-all shadow-md">
                继续 <Play className="w-3 h-3 fill-current" />
              </button>
            </div>
          )}

          {activeProgressSBTI && (
            <div
              onClick={() => onResumeProgress(activeProgressSBTI)}
              id="resume-sbti-banner"
              className="p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 flex items-center justify-between gap-3 cursor-pointer hover:border-indigo-500/50 transition-all active:scale-98 shadow-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0 font-bold text-xs border border-indigo-500/30">
                  SBTI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">
                    检测到未完成的 SBTI 序型测评
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    已完成 {Object.keys(activeProgressSBTI.answers).length} / 48 题，点击继续答题
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 transition-all shadow-md">
                继续 <Play className="w-3 h-3 fill-current" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Dual Core Assessment Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1: MBTI */}
        <div
          onClick={() => onSelectTest('MBTI')}
          id="select-mbti-card"
          className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all cursor-pointer shadow-2xl active:scale-98 overflow-hidden min-h-[280px]"
        >
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <span className="text-blue-400 text-2xl font-serif italic font-bold">M</span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
              MBTI 经典人格测试
            </h3>

            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              源自荣格心理学，基于16型人格维度，探索你的先天倾向、社交偏好与职业契合度。
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-[11px] text-slate-500 font-mono uppercase tracking-tight">
              60 题目 · 约 8 分钟
            </span>
            <button className="px-5 py-2 rounded-full bg-white text-slate-900 font-semibold text-xs group-hover:bg-blue-50 transition-all shadow-md">
              进入测评
            </button>
          </div>
        </div>

        {/* Card 2: SBTI */}
        <div
          onClick={() => onSelectTest('SBTI')}
          id="select-sbti-card"
          className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all cursor-pointer shadow-2xl active:scale-98 overflow-hidden min-h-[280px]"
        >
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />

          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <span className="text-indigo-400 text-2xl font-serif italic font-bold">S</span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
              SBTI 序型性格测试
              <Sparkles className="w-4 h-4 text-sky-400" />
            </h3>

            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              明序专属秩序测评。聚焦个人行为、思维与生活秩序，洞悉你在高压环境下的行为逻辑。
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-[11px] text-slate-500 font-mono uppercase tracking-tight">
              48 题目 · 约 6 分钟
            </span>
            <button className="px-5 py-2 rounded-full bg-white text-slate-900 font-semibold text-xs group-hover:bg-indigo-50 transition-all shadow-md">
              进入测评
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
