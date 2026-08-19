export type AssessmentType = 'MBTI' | 'SBTI';

export interface QuestionOption {
  text: string;
  value: number; // Score value
}

export interface Question {
  id: number;
  dimension: 'EI' | 'SN' | 'TF' | 'JP' | 'S' | 'B' | 'T' | 'I';
  text: string;
  categoryName?: string;
  options: QuestionOption[];
}

export interface TestProgress {
  testType: AssessmentType;
  currentQuestionIndex: number;
  answers: Record<number, number>; // questionId -> optionValue
  answerTimestamps: Record<number, number>;
  hesitationCounts: Record<number, number>; // questionId -> count of changes
  startTime: number;
  lastUpdated: number;
}

export interface HesitationRecord {
  questionId: number;
  questionText: string;
  selectedOptionText: string;
  hesitationCount: number;
}

export interface MBTIProfile {
  type: string; // e.g. "INTJ"
  title: string; // e.g. "战略家"
  motto: string;
  subtitle: string;
  coreTraits: string[];
  color: string;
  bgGradient: string;
  description: string;
  advantages: string[];
  shortfalls: string[];
  careerAdvice: string[];
  socialAdvice: string[];
  growthAdvice: string[];
}

export interface MBTIResult {
  type: string;
  title: string;
  motto: string;
  subtitle: string;
  dimensions: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
  percentages: {
    EI: { label: string; percent: number; leftTrait: string; rightTrait: string };
    SN: { label: string; percent: number; leftTrait: string; rightTrait: string };
    TF: { label: string; percent: number; leftTrait: string; rightTrait: string };
    JP: { label: string; percent: number; leftTrait: string; rightTrait: string };
  };
  profile: MBTIProfile;
}

export interface SBTIProfile {
  code: string; // e.g. "S-01"
  title: string; // e.g. "结构律动者"
  orderCategory: 'S-结构化思维' | 'B-平衡行为' | 'T-目标导向' | 'I-内在感知';
  subtitle: string;
  coreDefinition: string;
  keywords: string[];
  color: string;
  behaviorPattern: string[];
  thinkingStyle: string[];
  suitableScenarios: string[];
  selfOptimization: string[];
}

export interface SBTIResult {
  code: string;
  title: string;
  orderCategory: 'S-结构化思维' | 'B-平衡行为' | 'T-目标导向' | 'I-内在感知';
  subtitle: string;
  dimensionScores: {
    S: number; // 0-100
    B: number;
    T: number;
    I: number;
  };
  profile: SBTIProfile;
}

export interface TestRecord {
  id: string;
  testType: AssessmentType;
  timestamp: number;
  answers: Record<number, number>;
  resultMBTI?: MBTIResult;
  resultSBTI?: SBTIResult;
  hesitations: HesitationRecord[];
  completionTimeSeconds: number;
}

export interface AppSettings {
  soundEnabled: boolean;
  vibrationEnabled: boolean;
}

export interface Bookmark {
  id: string;
  title: string;
  testType: AssessmentType;
  typeCode: string;
  content: string;
  timestamp: number;
}
