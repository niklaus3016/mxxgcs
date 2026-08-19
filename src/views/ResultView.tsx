import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Share2,
  Bookmark as BookmarkIcon,
  RotateCcw,
  RefreshCw,
  History,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  BookmarkCheck
} from 'lucide-react';
import { AssessmentType, HesitationRecord, MBTIResult, SBTIResult } from '../types';
import { RadarChart } from '../components/RadarChart';
import { HesitationAnalysis } from '../components/HesitationAnalysis';
import { ShareModal } from '../components/ShareModal';
import { isBookmarked, toggleBookmark } from '../utils/storage';

interface ResultViewProps {
  testType: AssessmentType;
  resultMBTI?: MBTIResult;
  resultSBTI?: SBTIResult;
  hesitations: HesitationRecord[];
  onRetake: () => void;
  onSwitchType: () => void;
  onGoHistory: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  testType,
  resultMBTI,
  resultSBTI,
  hesitations,
  onRetake,
  onSwitchType,
  onGoHistory,
}) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const isMBTI = testType === 'MBTI' && !!resultMBTI;
  const isSBTI = testType === 'SBTI' && !!resultSBTI;

  const typeCode = isMBTI ? resultMBTI!.type : isSBTI ? resultSBTI!.code : '';
  const bookmarkId = `bm_${testType}_${typeCode}`;

  // Fire celebratory confetti on mount
  useEffect(() => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38BDF8', '#818CF8', '#34D399', '#F472B6'],
      });
    } catch (e) {
      // Confetti fail safe
    }
    setBookmarked(isBookmarked(bookmarkId));
  }, [bookmarkId]);

  const handleToggleBookmark = () => {
    const title = isMBTI
      ? `${resultMBTI!.type} - ${resultMBTI!.title}`
      : `${resultSBTI!.code} - ${resultSBTI!.title}`;

    const content = isMBTI
      ? resultMBTI!.profile.description
      : resultSBTI!.profile.coreDefinition;

    const newStatus = toggleBookmark({
      id: bookmarkId,
      title,
      testType,
      typeCode,
      content,
      timestamp: Date.now(),
    });
    setBookmarked(newStatus);
  };

  // Prepare radar chart data
  const radarData = isMBTI
    ? [
        { label: '内/外倾向 (E)', value: resultMBTI!.percentages.EI.percent, code: 'EI' },
        { label: '实/直模式 (S)', value: resultMBTI!.percentages.SN.percent, code: 'SN' },
        { label: '思/情依据 (T)', value: resultMBTI!.percentages.TF.percent, code: 'TF' },
        { label: '判/感态度 (J)', value: resultMBTI!.percentages.JP.percent, code: 'JP' },
      ]
    : isSBTI
    ? [
        { label: '结构思维 (S)', value: resultSBTI!.dimensionScores.S, code: 'S' },
        { label: '平衡行为 (B)', value: resultSBTI!.dimensionScores.B, code: 'B' },
        { label: '目标导向 (T)', value: resultSBTI!.dimensionScores.T, code: 'T' },
        { label: '内在感知 (I)', value: resultSBTI!.dimensionScores.I, code: 'I' },
      ]
    : [];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6 animate-fadeIn pb-28">
      {/* Result Hero Header Banner */}
      <div className="relative p-6 md:p-8 rounded-[32px] bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden text-slate-100">
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-blue-500/20 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs border border-blue-500/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> 专属测评结果报告
          </span>

          <button
            onClick={handleToggleBookmark}
            id="bookmark-result-button"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/60 hover:bg-slate-700/80 border border-white/10 text-xs font-semibold text-slate-200 transition-all active:scale-95"
          >
            {bookmarked ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-sky-400" /> 已收藏解读
              </>
            ) : (
              <>
                <BookmarkIcon className="w-4 h-4 text-slate-400" /> 收藏解读
              </>
            )}
          </button>
        </div>

        {/* Code & Title */}
        <div className="space-y-1.5 my-4">
          <div className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            {typeCode}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
            {isMBTI ? resultMBTI!.title : resultSBTI!.title}
          </h2>
          <p className="text-xs text-blue-300 font-medium">
            {isMBTI ? resultMBTI!.subtitle : resultSBTI!.subtitle}
          </p>
        </div>

        {/* Motto Box */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-950/60 border border-white/10 italic text-xs text-slate-300 leading-relaxed">
          {isMBTI ? resultMBTI!.motto : `秩序锚定：${resultSBTI!.orderCategory}`}
        </div>
      </div>

      {/* Visual Radar Chart Section */}
      <div className="p-6 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Compass className="w-4 h-4 text-sky-400" />
          四维人格秩序雷达图
        </h3>

        <div className="py-2 flex justify-center">
          <RadarChart data={radarData} size={280} color="#38BDF8" />
        </div>

        {/* Dimension Breakdown Bars for MBTI */}
        {isMBTI && (
          <div className="space-y-3 pt-2">
            {(
              Object.entries(resultMBTI!.percentages) as [
                string,
                { label: string; percent: number; leftTrait: string; rightTrait: string }
              ][]
            ).map(([key, item]) => (
              <div key={key} className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-300 font-medium">
                  <span>{item.leftTrait}</span>
                  <span className="font-bold text-sky-400">{item.percent}%</span>
                  <span>{item.rightTrait}</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-sky-400 h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Core Interpretation */}
      <div className="p-6 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          核心性格底色
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          {isMBTI ? resultMBTI!.profile.description : resultSBTI!.profile.coreDefinition}
        </p>

        {/* Keywords Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {(isMBTI ? resultMBTI!.profile.coreTraits : resultSBTI!.profile.keywords).map((tag, i) => (
            <span
              key={i}
              className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Detailed Analysis: Advantages & Shortfalls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Advantages */}
        <div className="p-5 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-emerald-500/30 space-y-3 shadow-xl">
          <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> 核心天赋与优势
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {(isMBTI ? resultMBTI!.profile.advantages : resultSBTI!.profile.behaviorPattern).map((adv, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Shortfalls */}
        <div className="p-5 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-rose-500/30 space-y-3 shadow-xl">
          <h4 className="text-xs font-bold text-rose-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> 潜在盲点与短板
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {(isMBTI ? resultMBTI!.profile.shortfalls : resultSBTI!.profile.thinkingStyle).map((sf, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                <span>{sf}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Adaptation Recommendations */}
      <div className="p-6 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-sky-400" />
          全维度适配指南
        </h3>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
            <h5 className="font-bold text-sky-300 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" /> 职业适配方案
            </h5>
            <p className="text-slate-400 leading-relaxed">
              {isMBTI ? resultMBTI!.profile.careerAdvice.join(' ') : resultSBTI!.profile.suitableScenarios.join(' ')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
            <h5 className="font-bold text-indigo-300 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> 社交与沟通建议
            </h5>
            <p className="text-slate-400 leading-relaxed">
              {isMBTI ? resultMBTI!.profile.socialAdvice.join(' ') : resultSBTI!.profile.behaviorPattern[0]}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
            <h5 className="font-bold text-teal-300 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" /> 专属成长指南
            </h5>
            <p className="text-slate-400 leading-relaxed">
              {isMBTI ? resultMBTI!.profile.growthAdvice.join(' ') : resultSBTI!.profile.selfOptimization.join(' ')}
            </p>
          </div>
        </div>
      </div>

      {/* Hesitation Questions Analysis Component */}
      <HesitationAnalysis records={hesitations} />

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <button
          onClick={() => setShowShareModal(true)}
          id="generate-card-button"
          className="w-full py-4 px-6 rounded-full bg-white text-slate-900 font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:bg-slate-100 active:scale-98 transition-all"
        >
          <Share2 className="w-4 h-4 text-blue-600" /> 生成性格海报卡片 (图文分享)
        </button>

        <div className="grid grid-cols-3 gap-2.5">
          <button
            onClick={onRetake}
            id="retake-test-button"
            className="py-3 px-3 rounded-2xl bg-slate-900/50 backdrop-blur-xl hover:bg-slate-800/80 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1 border border-white/10 active:scale-95 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-sky-400" /> 重新测评
          </button>

          <button
            onClick={onSwitchType}
            id="switch-test-button"
            className="py-3 px-3 rounded-2xl bg-slate-900/50 backdrop-blur-xl hover:bg-slate-800/80 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1 border border-white/10 active:scale-95 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5 text-indigo-400" /> 切换体系
          </button>

          <button
            onClick={onGoHistory}
            id="history-logs-button"
            className="py-3 px-3 rounded-2xl bg-slate-900/50 backdrop-blur-xl hover:bg-slate-800/80 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1 border border-white/10 active:scale-95 transition-all"
          >
            <History className="w-3.5 h-3.5 text-teal-400" /> 历史记录
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        resultMBTI={resultMBTI}
        resultSBTI={resultSBTI}
      />
    </div>
  );
};
