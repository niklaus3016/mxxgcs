import { AppSettings, AssessmentType, Bookmark, TestProgress, TestRecord } from '../types';

const STORAGE_KEYS = {
  SETTINGS: 'mingxu_app_settings',
  ACTIVE_PROGRESS_PREFIX: 'mingxu_progress_',
  HISTORY: 'mingxu_test_history',
  BOOKMARKS: 'mingxu_bookmarks',
  CONSENT: 'mxxgcs_consent_v1',
};

const DEFAULT_SETTINGS: AppSettings = {
  soundEnabled: true,
  vibrationEnabled: true,
};

// Settings
export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading settings', e);
  }
  return DEFAULT_SETTINGS;
}

export function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error('Error saving settings', e);
  }
}

// Active Test Progress (Saved for 7 days)
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export function loadTestProgress(testType: AssessmentType): TestProgress | null {
  try {
    const key = `${STORAGE_KEYS.ACTIVE_PROGRESS_PREFIX}${testType}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const progress: TestProgress = JSON.parse(raw);
    const now = Date.now();

    // 7 days expiration check
    if (now - progress.lastUpdated > SEVEN_DAYS_MS) {
      clearTestProgress(testType);
      return null;
    }

    return progress;
  } catch (e) {
    console.error('Error loading progress', e);
    return null;
  }
}

export function saveTestProgress(progress: TestProgress): void {
  try {
    const key = `${STORAGE_KEYS.ACTIVE_PROGRESS_PREFIX}${progress.testType}`;
    progress.lastUpdated = Date.now();
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving progress', e);
  }
}

export function clearTestProgress(testType: AssessmentType): void {
  try {
    const key = `${STORAGE_KEYS.ACTIVE_PROGRESS_PREFIX}${testType}`;
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Error clearing progress', e);
  }
}

// History Test Records
export function loadTestHistory(): TestRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (raw) {
      const records: TestRecord[] = JSON.parse(raw);
      // Sort reverse chronological
      return records.sort((a, b) => b.timestamp - a.timestamp);
    }
  } catch (e) {
    console.error('Error loading history', e);
  }
  return [];
}

export function saveTestRecord(record: TestRecord): void {
  try {
    const history = loadTestHistory();
    // Filter duplicate if ID exists
    const updated = [record, ...history.filter(r => r.id !== record.id)];
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving record', e);
  }
}

export function deleteTestRecord(id: string): void {
  try {
    const history = loadTestHistory();
    const updated = history.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error deleting record', e);
  }
}

export function clearAllHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  } catch (e) {
    console.error('Error clearing history', e);
  }
}

// Bookmarks
export function loadBookmarks(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading bookmarks', e);
  }
  return [];
}

export function toggleBookmark(bookmark: Bookmark): boolean {
  try {
    const bookmarks = loadBookmarks();
    const existsIndex = bookmarks.findIndex(b => b.id === bookmark.id);
    let isBookmarked = false;

    if (existsIndex >= 0) {
      bookmarks.splice(existsIndex, 1);
      isBookmarked = false;
    } else {
      bookmarks.unshift(bookmark);
      isBookmarked = true;
    }

    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    return isBookmarked;
  } catch (e) {
    console.error('Error toggling bookmark', e);
    return false;
  }
}

export function isBookmarked(id: string): boolean {
  const bookmarks = loadBookmarks();
  return bookmarks.some(b => b.id === id);
}

// Clear ALL app data
export function clearAllAppData(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    localStorage.removeItem(`${STORAGE_KEYS.ACTIVE_PROGRESS_PREFIX}MBTI`);
    localStorage.removeItem(`${STORAGE_KEYS.ACTIVE_PROGRESS_PREFIX}SBTI`);
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    localStorage.removeItem(STORAGE_KEYS.CONSENT);
  } catch (e) {
    console.error('Error clearing all data', e);
  }
}

// Startup consent (User Agreement & Privacy Policy)
export interface ConsentState {
  agreed: boolean;
  agreedAt: number; // timestamp
  policyVersion: string;
}

const CURRENT_POLICY_VERSION = '2026-08-20';

export function loadConsentState(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONSENT);
    if (!raw) return null;
    const state: ConsentState = JSON.parse(raw);
    // Policy changed? Re-consent required
    if (state.policyVersion !== CURRENT_POLICY_VERSION) {
      clearConsentState();
      return null;
    }
    return state;
  } catch (e) {
    console.error('Error loading consent state', e);
    return null;
  }
}

export function saveConsentState(agreed: boolean): void {
  try {
    const state: ConsentState = {
      agreed,
      agreedAt: Date.now(),
      policyVersion: CURRENT_POLICY_VERSION,
    };
    localStorage.setItem(STORAGE_KEYS.CONSENT, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving consent state', e);
  }
}

export function clearConsentState(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.CONSENT);
  } catch (e) {
    console.error('Error clearing consent state', e);
  }
}
