import React, { useState } from 'react';
import { HelpCircle, AlertCircle, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { HesitationRecord } from '../types';

interface HesitationAnalysisProps {
  records: HesitationRecord[];
}

export const HesitationAnalysis: React.FC<HesitationAnalysisProps> = ({ records }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!records || records.length === 0) return null;

  return (
    <div className="bg-slate-800/80 rounded-2xl p-4 border border-amber-500/30 text-slate-200 my-4 shadow-sm">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        id="hesitation-toggle-header"
        className="flex items-center justify-between cursor-pointer group"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
              犹豫题专属分析
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-normal">
                {records.length} 题曾多次切换
              </span>
            </h3>
            <p className="text-xs text-slate-400">检测到你在部分题目上有所摇摆，这反映了你的潜在性格张力</p>
          </div>
        </div>
        <button className="p-1 text-slate-400 group-hover:text-amber-400">
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-3 border-t border-slate-700/60 space-y-3">
          <div className="bg-amber-950/30 p-3 rounded-xl border border-amber-500/20 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200/90 leading-relaxed">
              <strong>性格解读视角：</strong>答题时的犹豫往往意味着你在该场景下处于<strong>“自我本能”与“社会期望/理想自我”</strong>的拉扯状态。反复修改答案表明这是你性格中正在进化或存在潜意识矛盾的维度。
            </p>
          </div>

          <div className="space-y-2.5">
            {records.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 text-xs text-slate-300 space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-amber-300 shrink-0">
                    #{item.questionId}
                  </span>
                  <p className="flex-1 font-medium text-slate-200">{item.questionText}</p>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  <span>最终选择：<strong className="text-sky-300">{item.selectedOptionText}</strong></span>
                  <span className="text-amber-400 font-medium">修改了 {item.hesitationCount} 次选项</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
