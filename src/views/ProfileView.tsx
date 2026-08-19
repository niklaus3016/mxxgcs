import React, { useState } from 'react';
import { UserCheck, Sparkles, Bookmark, Compass, Award, Trash2, ArrowRight } from 'lucide-react';
import { Bookmark as BookmarkType, TestRecord } from '../types';
import { loadBookmarks, toggleBookmark } from '../utils/storage';

interface ProfileViewProps {
  records: TestRecord[];
  onSelectRecord: (record: TestRecord) => void;
  onStartNewTest: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  records,
  onSelectRecord,
  onStartNewTest,
}) => {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>(loadBookmarks());

  // Latest MBTI & SBTI records
  const latestMBTI = records.find((r) => r.testType === 'MBTI');
  const latestSBTI = records.find((r) => r.testType === 'SBTI');

  const handleDeleteBookmark = (bm: BookmarkType) => {
    toggleBookmark(bm);
    setBookmarks(loadBookmarks());
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6 animate-fadeIn pb-28">
      {/* Header Profile Badge */}
      <div className="p-6 rounded-[32px] bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-2xl space-y-4 text-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#38BDF8] to-[#1D4ED8] flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
            <UserCheck className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              我的性格档案
              <Sparkles className="w-4 h-4 text-sky-400" />
            </h2>
            <p className="text-xs text-slate-400">已累计完成 {records.length} 次深度自我探索测评</p>
          </div>
        </div>

        {/* Primary Dual Badges */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {/* MBTI Badge */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-indigo-500/30 flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-indigo-400">MBTI 主性格</span>
              <Award className="w-4 h-4 text-indigo-400" />
            </div>
            {latestMBTI && latestMBTI.resultMBTI ? (
              <div>
                <div className="text-2xl font-black text-slate-100">
                  {latestMBTI.resultMBTI.type}
                </div>
                <div className="text-xs text-slate-300 font-semibold truncate">
                  {latestMBTI.resultMBTI.title}
                </div>
              </div>
            ) : (
              <div className="text-xs text-slate-500 font-medium">尚无测试数据</div>
            )}
          </div>

          {/* SBTI Badge */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-blue-500/30 flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-blue-400">SBTI 专属序型</span>
              <Compass className="w-4 h-4 text-blue-400" />
            </div>
            {latestSBTI && latestSBTI.resultSBTI ? (
              <div>
                <div className="text-2xl font-black text-slate-100">
                  {latestSBTI.resultSBTI.code}
                </div>
                <div className="text-xs text-slate-300 font-semibold truncate">
                  {latestSBTI.resultSBTI.title}
                </div>
              </div>
            ) : (
              <div className="text-xs text-slate-500 font-medium">尚无测试数据</div>
            )}
          </div>
        </div>
      </div>

      {/* Bookmarked Personality Insights Collection */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-sky-400" />
          我收藏的性格解读 ({bookmarks.length})
        </h3>

        {bookmarks.length === 0 ? (
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-800 text-center space-y-2 text-slate-400">
            <p className="text-xs">暂无收藏内容，在测评结果报告页点击“收藏解读”即可在此归档</p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {bookmarks.map((bm) => (
              <div
                key={bm.id}
                className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 font-bold text-[10px]">
                      {bm.testType}
                    </span>
                    <h4 className="font-bold text-sm text-slate-200">{bm.title}</h4>
                  </div>
                  <button
                    onClick={() => handleDeleteBookmark(bm)}
                    id={`delete-bm-${bm.id}`}
                    className="text-slate-400 hover:text-rose-400 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{bm.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Start or Retake Call */}
      <button
        onClick={onStartNewTest}
        id="profile-start-new-button"
        className="w-full py-3.5 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-sky-400 font-bold text-xs flex items-center justify-center gap-2 border border-sky-500/30 transition-all active:scale-98"
      >
        开启全新一轮性格复测与对比 <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
