export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  category: "quantitative" | "reasoning";
  questionCount: number;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
}

export interface TestResult {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  timeTaken: number;
  answers: UserAnswer[];
  questions: Question[];
}
