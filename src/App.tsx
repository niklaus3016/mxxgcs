import React, { useState, useEffect } from 'react';
import {
  AppSettings,
  AssessmentType,
  HesitationRecord,
  MBTIResult,
  SBTIResult,
  TestProgress,
  TestRecord,
} from './types';
import { calculateMBTI, calculateSBTI } from './data/personalityProfiles';
import { MBTI_QUESTIONS } from './data/mbtiQuestions';
import { SBTI_QUESTIONS } from './data/sbtiQuestions';
import {
  clearAllAppData,
  clearAllHistory,
  clearTestProgress,
  deleteTestRecord,
  loadConsentState,
  loadSettings,
  loadTestHistory,
  loadTestProgress,
  saveConsentState,
  saveSettings,
  saveTestProgress,
  saveTestRecord,
} from './utils/storage';

// Views
import { Navbar } from './components/Navbar';
import { BottomNav, TabType } from './components/BottomNav';
import { StartupConsent } from './components/StartupConsent';
import { HomeView } from './views/HomeView';
import { NoticeView } from './views/NoticeView';
import { TestView } from './views/TestView';
import { CalculatingView } from './views/CalculatingView';
import { ResultView } from './views/ResultView';
import { HistoryView } from './views/HistoryView';
import { ProfileView } from './views/ProfileView';
import { SettingsView } from './views/SettingsView';

export default function App() {
  // App view navigation state
  const [currentView, setCurrentView] = useState<
    'home' | 'notice' | 'test' | 'calculating' | 'result' | 'history' | 'profile' | 'settings'
  >('home');

  // Startup consent (User Agreement & Privacy Policy)
  const [hasConsented, setHasConsented] = useState<boolean>(() => {
    const state = loadConsentState();
    return state ? state.agreed : false;
  });

  // Selected assessment type
  const [selectedType, setSelectedType] = useState<AssessmentType>('MBTI');

  // Active loaded test progress
  const [activeProgressMBTI, setActiveProgressMBTI] = useState<TestProgress | null>(() =>
    loadTestProgress('MBTI')
  );
  const [activeProgressSBTI, setActiveProgressSBTI] = useState<TestProgress | null>(() =>
    loadTestProgress('SBTI')
  );

  // Current session active test progress
  const [currentProgress, setCurrentProgress] = useState<TestProgress | null>(null);

  // Test history
  const [historyRecords, setHistoryRecords] = useState<TestRecord[]>(() => loadTestHistory());

  // Current active result
  const [activeResultMBTI, setActiveResultMBTI] = useState<MBTIResult | undefined>();
  const [activeResultSBTI, setActiveResultSBTI] = useState<SBTIResult | undefined>();
  const [activeHesitations, setActiveHesitations] = useState<HesitationRecord[]>([]);

  // Settings
  const [settings, setSettings] = useState<AppSettings>(() => loadSettings());

  // Helper to refresh active progress state
  const refreshActiveProgress = () => {
    setActiveProgressMBTI(loadTestProgress('MBTI'));
    setActiveProgressSBTI(loadTestProgress('SBTI'));
  };

  // Select test from home
  const handleSelectTest = (type: AssessmentType) => {
    setSelectedType(type);
    const existing = type === 'MBTI' ? activeProgressMBTI : activeProgressSBTI;
    setCurrentProgress(existing);
    setCurrentView('notice');
  };

  // Resume test from home banner
  const handleResumeProgress = (progress: TestProgress) => {
    setSelectedType(progress.testType);
    setCurrentProgress(progress);
    setCurrentView('test');
  };

  // Start test from notice view
  const handleStartTest = () => {
    const existing = selectedType === 'MBTI' ? activeProgressMBTI : activeProgressSBTI;
    setCurrentProgress(existing);
    setCurrentView('test');
  };

  // Save progress during test
  const handleSaveProgress = (progress: TestProgress) => {
    saveTestProgress(progress);
    refreshActiveProgress();
  };

  // Complete test
  const handleCompleteTest = (
    answers: Record<number, number>,
    hesitationCounts: Record<number, number>,
    durationSec: number
  ) => {
    // Build hesitation records list
    const questions = selectedType === 'MBTI' ? MBTI_QUESTIONS : SBTI_QUESTIONS;
    const hesitations: HesitationRecord[] = [];

    for (const [qIdStr, count] of Object.entries(hesitationCounts)) {
      if (count > 0) {
        const qId = Number(qIdStr);
        const qObj = questions.find((q) => q.id === qId);
        if (qObj) {
          const selectedVal = answers[qId];
          const opt = qObj.options.find((o) => o.value === selectedVal);
          hesitations.push({
            questionId: qId,
            questionText: qObj.text,
            selectedOptionText: opt ? opt.text : '',
            hesitationCount: count,
          });
        }
      }
    }

    setActiveHesitations(hesitations);

    // Calculate result
    let resMBTI: MBTIResult | undefined;
    let resSBTI: SBTIResult | undefined;

    if (selectedType === 'MBTI') {
      resMBTI = calculateMBTI(answers);
      setActiveResultMBTI(resMBTI);
      setActiveResultSBTI(undefined);
    } else {
      resSBTI = calculateSBTI(answers);
      setActiveResultSBTI(resSBTI);
      setActiveResultMBTI(undefined);
    }

    // Save record to history
    const record: TestRecord = {
      id: `rec_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      testType: selectedType,
      timestamp: Date.now(),
      answers,
      resultMBTI: resMBTI,
      resultSBTI: resSBTI,
      hesitations,
      completionTimeSeconds: durationSec,
    };

    saveTestRecord(record);
    setHistoryRecords(loadTestHistory());

    // Clear active test progress
    clearTestProgress(selectedType);
    refreshActiveProgress();

    // Transition to calculating screen
    setCurrentView('calculating');
  };

  // Quit test
  const handleQuitTest = () => {
    refreshActiveProgress();
    setCurrentView('home');
  };

  // Select record from history or profile
  const handleSelectRecord = (record: TestRecord) => {
    setSelectedType(record.testType);
    setActiveResultMBTI(record.resultMBTI);
    setActiveResultSBTI(record.resultSBTI);
    setActiveHesitations(record.hesitations || []);
    setCurrentView('result');
  };

  // Delete history item
  const handleDeleteRecord = (id: string) => {
    deleteTestRecord(id);
    setHistoryRecords(loadTestHistory());
  };

  // Clear all history
  const handleClearAllHistory = () => {
    clearAllHistory();
    setHistoryRecords([]);
  };

  // Settings update
  const handleUpdateSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  // Clear ALL app data
  const handleClearAllData = () => {
    clearAllAppData();
    setSettings(loadSettings());
    setHistoryRecords([]);
    setActiveProgressMBTI(null);
    setActiveProgressSBTI(null);
    setCurrentProgress(null);
    setCurrentView('home');
  };

  // Tab change
  const handleTabChange = (tab: TabType) => {
    setCurrentView(tab);
  };

  // Startup consent handlers
  const handleConsentAccept = () => {
    saveConsentState(true);
    setHasConsented(true);
  };

  const handleConsentExit = () => {
    // User declined — attempt to close the app window (web/Capacitor fallback)
    try {
      if (typeof window !== 'undefined') {
        window.close();
      }
    } catch (e) {
      // Fallback: redirect to a blank page
      window.location.href = 'about:blank';
    }
  };

  // Determine top bar title
  let topTitle = '明序性格测试';
  if (currentView === 'notice') topTitle = selectedType === 'MBTI' ? 'MBTI 测评前置须知' : 'SBTI 序型前置须知';
  else if (currentView === 'test') topTitle = selectedType === 'MBTI' ? 'MBTI 人格测评中' : 'SBTI 序型测评中';
  else if (currentView === 'calculating') topTitle = '结果计算中';
  else if (currentView === 'result') topTitle = selectedType === 'MBTI' ? 'MBTI 测评报告' : 'SBTI 序型报告';
  else if (currentView === 'history') topTitle = '历史测评档案';
  else if (currentView === 'profile') topTitle = '我的性格档案';
  else if (currentView === 'settings') topTitle = '系统设置';

  // Boot gate: user must consent before using the app
  if (!hasConsented) {
    return (
      <StartupConsent
        onConsent={handleConsentAccept}
        onExit={handleConsentExit}
      />
    );
  }

  const showNavbarBack = currentView === 'notice' || currentView === 'result';

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-sky-500 selection:text-white flex flex-col justify-between relative overflow-hidden">
      {/* Immersive UI Ambient Background Blurs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#38BDF8] blur-[120px] rounded-full opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#1D4ED8] blur-[150px] rounded-full opacity-25" />
      </div>

      {/* Navbar Top Bar */}
      <Navbar
        title={topTitle}
        showBack={showNavbarBack}
        onBack={() => setCurrentView('home')}
        onOpenSettings={currentView !== 'settings' ? () => setCurrentView('settings') : undefined}
      />

      {/* Main View Router Content */}
      <main className="flex-1 w-full relative z-10">
        {currentView === 'home' && (
          <HomeView
            onSelectTest={handleSelectTest}
            onResumeProgress={handleResumeProgress}
            activeProgressMBTI={activeProgressMBTI}
            activeProgressSBTI={activeProgressSBTI}
          />
        )}

        {currentView === 'notice' && (
          <NoticeView
            testType={selectedType}
            onStart={handleStartTest}
            onBack={() => setCurrentView('home')}
            hasResumeProgress={
              selectedType === 'MBTI' ? !!activeProgressMBTI : !!activeProgressSBTI
            }
          />
        )}

        {currentView === 'test' && (
          <TestView
            testType={selectedType}
            initialProgress={currentProgress}
            settings={settings}
            onSaveProgress={handleSaveProgress}
            onComplete={handleCompleteTest}
            onQuit={handleQuitTest}
          />
        )}

        {currentView === 'calculating' && (
          <CalculatingView
            soundEnabled={settings.soundEnabled}
            onDone={() => setCurrentView('result')}
          />
        )}

        {currentView === 'result' && (
          <ResultView
            testType={selectedType}
            resultMBTI={activeResultMBTI}
            resultSBTI={activeResultSBTI}
            hesitations={activeHesitations}
            onRetake={() => setCurrentView('notice')}
            onSwitchType={() => {
              const other = selectedType === 'MBTI' ? 'SBTI' : 'MBTI';
              setSelectedType(other);
              setCurrentView('notice');
            }}
            onGoHistory={() => setCurrentView('history')}
          />
        )}

        {currentView === 'history' && (
          <HistoryView
            records={historyRecords}
            onSelectRecord={handleSelectRecord}
            onDeleteRecord={handleDeleteRecord}
            onClearAll={handleClearAllHistory}
            onStartNewTest={() => setCurrentView('home')}
          />
        )}

        {currentView === 'profile' && (
          <ProfileView
            records={historyRecords}
            onSelectRecord={handleSelectRecord}
            onStartNewTest={() => setCurrentView('home')}
          />
        )}

        {currentView === 'settings' && (
          <SettingsView
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onClearAllData={handleClearAllData}
          />
        )}
      </main>

      {/* Bottom Navigation Bar - Visible on main views */}
      {['home', 'profile', 'history', 'settings', 'result'].includes(currentView) && (
        <BottomNav
          currentTab={
            ['home', 'profile', 'history', 'settings'].includes(currentView)
              ? (currentView as TabType)
              : 'home'
          }
          onTabChange={handleTabChange}
          recordCount={historyRecords.length}
        />
      )}
    </div>
  );
}
