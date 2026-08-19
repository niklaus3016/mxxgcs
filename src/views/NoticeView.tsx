import React from 'react';
import { Clock, HelpCircle, ShieldCheck, Save, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { AssessmentType } from '../types';

interface NoticeViewProps {
  testType: AssessmentType;
  onStart: () => void;
  onBack: () => void;
  hasResumeProgress?: boolean;
}

export const NoticeView: React.FC<NoticeViewProps> = ({
  testType,
  onStart,
  onBack,
  hasResumeProgress = false,
}) => {
  const isMBTI = testType === 'MBTI';

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6 space-y-6 animate-fadeIn pb-24">
      {/* Back Header */}
      <button
        onClick={onBack}
        id="notice-back-button"
        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> 返回首页
      </button>

      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
          {isMBTI ? 'MBTI 经典人格测评' : 'SBTI 序型性格测评 (明序专属)'}
        </div>
        <h2 className="text-2xl font-black text-slate-100 tracking-tight">
          {isMBTI ? '16 型人格测评须知' : '秩序性格测评须知'}
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          {isMBTI
            ? '本测评基于经典 MBTI 心理学框架，包含 60 道标准化测评题目。'
            : 'SBTI 为「明序性格测试」自研秩序体系，包含 48 道秩序行为测评题目。'}
        </p>
      </div>

      {/* Info Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] text-slate-400">题目数量</p>
            <p className="text-base font-bold text-slate-100">
              {isMBTI ? '60 题' : '48 题'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] text-slate-400">预计耗时</p>
            <p className="text-base font-bold text-slate-100">
              {isMBTI ? '约 8 分钟' : '约 6 分钟'}
            </p>
          </div>
        </div>
      </div>

      {/* Assessment Guidelines Box */}
      <div className="p-6 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-sky-400" />
          测评核心准则
        </h3>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              1
            </div>
            <div>
              <strong className="text-slate-100">凭第一直觉答题：</strong>
              <p className="text-slate-400 mt-0.5">选择最符合你日常生活真实状态的选项，无需过多思考过度修饰。</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              2
            </div>
            <div>
              <strong className="text-slate-100">答案无好坏对错：</strong>
              <p className="text-slate-400 mt-0.5">每种性格类型均有独特优势与光芒，如实选择才能获得最精准报告。</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              3
            </div>
            <div>
              <strong className="text-slate-100">支持中途打断续答：</strong>
              <p className="text-slate-400 mt-0.5">答题进度实时写入本地设备，退出APP或刷新页面进度不丢失。</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
              4
            </div>
            <div>
              <strong className="text-slate-100">100% 隐私安全保障：</strong>
              <p className="text-slate-400 mt-0.5">全程前端本地计算，无服务器交互、无数据上传外传。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Button Area */}
      <div className="space-y-2.5 pt-2">
        <button
          onClick={onStart}
          id="start-assessment-button"
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 active:scale-98 transition-all"
        >
          {hasResumeProgress ? '恢复上次答题进度' : '准备好了，开始测评'}
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onBack}
          id="notice-cancel-button"
          className="w-full py-3 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors"
        >
          暂不测评，返回首页
        </button>
      </div>
    </div>
  );
};
