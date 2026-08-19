import React, { useState } from 'react';
import { History, Trash2, Calendar, Clock, ChevronRight, AlertCircle, FileText, Sparkles } from 'lucide-react';
import { TestRecord } from '../types';
import { ConfirmModal } from '../components/ConfirmModal';

interface HistoryViewProps {
  records: TestRecord[];
  onSelectRecord: (record: TestRecord) => void;
  onDeleteRecord: (id: string) => void;
  onClearAll: () => void;
  onStartNewTest: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  records,
  onSelectRecord,
  onDeleteRecord,
  onClearAll,
  onStartNewTest,
}) => {
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6 animate-fadeIn pb-28">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <History className="w-5 h-5 text-sky-400" /> 历史测评记录
          </h2>
          <p className="text-xs text-slate-400">本地永久留存，共 {records.length} 条测评档案</p>
        </div>

        {records.length > 0 && (
          <button
            onClick={() => setShowClearConfirm(true)}
            id="clear-all-history-button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold transition-colors border border-rose-500/20"
          >
            <Trash2 className="w-3.5 h-3.5" /> 清空记录
          </button>
        )}
      </div>

      {/* History List or Empty State */}
      {records.length === 0 ? (
        <div className="p-8 rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-white/10 text-center space-y-4 my-8 shadow-xl">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-slate-800/60 text-slate-400 flex items-center justify-center border border-white/5">
            <FileText className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-200">暂无历史测评档案</h3>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              完成一次 MBTI 或 SBTI 测评后，你的专属性格报告将自动在此永久备份。
            </p>
          </div>
          <button
            onClick={onStartNewTest}
            id="history-start-test-button"
            className="px-6 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-xl hover:bg-slate-100 transition-all active:scale-95"
          >
            立即进行首次测评
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {records.map((item) => {
            const isMBTI = item.testType === 'MBTI' && !!item.resultMBTI;
            const code = isMBTI ? item.resultMBTI!.type : item.resultSBTI ? item.resultSBTI!.code : '';
            const title = isMBTI ? item.resultMBTI!.title : item.resultSBTI ? item.resultSBTI!.title : '';
            const subtitle = isMBTI
              ? item.resultMBTI!.subtitle
              : item.resultSBTI
              ? item.resultSBTI!.subtitle
              : '';

            return (
              <div
                key={item.id}
                className="group p-4 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all duration-200 flex items-center justify-between gap-3 shadow-xl"
              >
                <div
                  onClick={() => onSelectRecord(item)}
                  id={`history-item-${item.id}`}
                  className="flex-1 flex items-center gap-3 cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex flex-col items-center justify-center font-black text-xs shrink-0 border ${
                      isMBTI
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                        : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                    }`}
                  >
                    <span>{item.testType}</span>
                    <span className="text-[10px] opacity-80 font-mono">{code}</span>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-slate-100 group-hover:text-sky-300 transition-colors">
                        {code} - {title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1">{subtitle}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {formatDate(item.timestamp)}
                      </span>
                      {item.hesitations && item.hesitations.length > 0 && (
                        <span className="text-amber-400/80">
                          {item.hesitations.length} 题犹豫
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => onDeleteRecord(item.id)}
                    id={`delete-record-${item.id}`}
                    className="p-2 rounded-xl hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                    title="删除此记录"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onSelectRecord(item)}
                    id={`view-record-${item.id}`}
                    className="p-2 text-slate-400 group-hover:text-sky-400 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Clear Confirm Modal */}
      <ConfirmModal
        isOpen={showClearConfirm}
        title="清空所有历史记录？"
        message="此操作将永久清空本地所有测评历史档案，不可撤销。"
        confirmText="确认清空"
        cancelText="保留记录"
        onConfirm={() => {
          onClearAll();
          setShowClearConfirm(false);
        }}
        onCancel={() => setShowClearConfirm(false)}
      />
    </div>
  );
};
