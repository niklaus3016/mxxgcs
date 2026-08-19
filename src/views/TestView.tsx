import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Save, RotateCcw, HelpCircle, AlertCircle } from 'lucide-react';
import { AppSettings, AssessmentType, Question, TestProgress } from '../types';
import { MBTI_QUESTIONS } from '../data/mbtiQuestions';
import { SBTI_QUESTIONS } from '../data/sbtiQuestions';
import { playTapSound, triggerVibration } from '../utils/audio';

interface TestViewProps {
  testType: AssessmentType;
  initialProgress: TestProgress | null;
  settings: AppSettings;
  onSaveProgress: (progress: TestProgress) => void;
  onComplete: (answers: Record<number, number>, hesitations: Record<number, number>, durationSec: number) => void;
  onQuit: () => void;
}

export const TestView: React.FC<TestViewProps> = ({
  testType,
  initialProgress,
  settings,
  onSaveProgress,
  onComplete,
  onQuit,
}) => {
  const questions: Question[] = testType === 'MBTI' ? MBTI_QUESTIONS : SBTI_QUESTIONS;
  const totalQuestions = questions.length;

  // State
  const [currentIndex, setCurrentIndex] = useState<number>(
    initialProgress ? Math.min(initialProgress.currentQuestionIndex, totalQuestions - 1) : 0
  );
  const [answers, setAnswers] = useState<Record<number, number>>(
    initialProgress ? initialProgress.answers : {}
  );
  const [hesitationCounts, setHesitationCounts] = useState<Record<number, number>>(
    initialProgress ? initialProgress.hesitationCounts : {}
  );
  const [startTime] = useState<number>(
    initialProgress ? initialProgress.startTime : Date.now()
  );
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedValue = answers[currentQuestion.id];

  // Auto save progress on answer change
  useEffect(() => {
    const progress: TestProgress = {
      testType,
      currentQuestionIndex: currentIndex,
      answers,
      answerTimestamps: {},
      hesitationCounts,
      startTime,
      lastUpdated: Date.now(),
    };
    onSaveProgress(progress);
  }, [answers, currentIndex, hesitationCounts, onSaveProgress, startTime, testType]);

  const handleSelectOption = (optionValue: number) => {
    // Sound & Vibration feedback
    if (settings.soundEnabled) playTapSound();
    if (settings.vibrationEnabled) triggerVibration(true);

    const questionId = currentQuestion.id;
    const previousValue = answers[questionId];

    // Check if hesitation (changing an existing answer)
    if (previousValue !== undefined && previousValue !== optionValue) {
      setHesitationCounts((prev) => ({
        ...prev,
        [questionId]: (prev[questionId] || 0) + 1,
      }));
    }

    // Save answer
    const newAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(newAnswers);

    // Auto advance after slight delay for visual tap response
    setTimeout(() => {
      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // All questions completed!
        const totalDurationSec = Math.max(10, Math.round((Date.now() - startTime) / 1000));
        onComplete(newAnswers, hesitationCounts, totalDurationSec);
      }
    }, 180);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (selectedValue !== undefined && currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-4 min-h-[90vh] flex flex-col justify-between animate-fadeIn pb-12">
      {/* Top Header & Progress Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
          <button
            onClick={() => setShowExitConfirm(true)}
            id="test-exit-button"
            className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:bg-slate-800/80 text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> 退出
          </button>

          <span className="font-bold text-slate-200 text-xs px-3.5 py-1 rounded-full bg-slate-900/50 backdrop-blur-xl border border-white/10">
            {currentQuestion.categoryName || (testType === 'MBTI' ? 'MBTI 测评' : 'SBTI 秩序测评')}
          </span>

          <span className="font-mono text-sky-400 font-bold">
            {currentIndex + 1} <span className="text-slate-500 font-normal">/ {totalQuestions}</span>
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/80 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/10">
          <div
            className="bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 h-full rounded-full transition-all duration-300 ease-out shadow-sm shadow-sky-400"
            style={{ width: `${Math.max(2, progressPercent)}%` }}
          />
        </div>
      </div>

      {/* Main Single Question Card */}
      <div className="my-auto py-8 space-y-8 flex flex-col justify-center">
        {/* Question Text */}
        <div className="space-y-2 text-center px-2">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase font-mono">
            QUESTION {currentIndex + 1}
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-100 leading-snug tracking-tight">
            {currentQuestion.text}
          </h2>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedValue === opt.value;
            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.value)}
                id={`option-btn-${idx}`}
                className={`w-full p-4 rounded-2xl text-left font-semibold text-sm transition-all duration-200 flex items-center justify-between border shadow-lg active:scale-98 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-sky-400 shadow-blue-500/25 ring-2 ring-sky-400/40'
                    : 'bg-slate-900/50 backdrop-blur-xl hover:bg-slate-800/80 text-slate-200 border-white/10 hover:border-blue-500/50'
                }`}
              >
                <span className="leading-normal">{opt.text}</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                    isSelected ? 'border-white bg-white' : 'border-slate-500'
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          id="prev-question-button"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-semibold text-xs disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" /> 上一题
        </button>

        <span className="text-[11px] text-slate-500 font-medium">
          进度自动保存
        </span>

        <button
          onClick={handleNext}
          disabled={selectedValue === undefined || currentIndex === totalQuestions - 1}
          id="next-question-button"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-semibold text-xs disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95"
        >
          下一题 <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Exit Confirmation Dialog */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xs w-full p-5 text-slate-100 flex flex-col items-center shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-100 mb-1">暂停答题并保存？</h3>
            <p className="text-xs text-slate-400 text-center leading-relaxed mb-5">
              你的答题进度将存入本地，7 天内重新进入可随时接续答题。
            </p>
            <div className="w-full grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setShowExitConfirm(false)}
                id="continue-test-button"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                继续答题
              </button>
              <button
                onClick={onQuit}
                id="confirm-quit-button"
                className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-600/30"
              >
                保存并退出
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
