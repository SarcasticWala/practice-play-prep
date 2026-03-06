import { useState, useCallback } from "react";

export interface TestAttempt {
  id: string;
  date: string;
  topicName: string;
  topicId: string;
  isMockTest: boolean;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  percentage: number;
  timeTaken: number;
}

const STORAGE_KEY = "tcs-nqt-history";

function loadHistory(): TestAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useTestHistory() {
  const [history, setHistory] = useState<TestAttempt[]>(loadHistory);

  const saveAttempt = useCallback(
    (attempt: Omit<TestAttempt, "id" | "date">) => {
      const entry: TestAttempt = {
        ...attempt,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        date: new Date().toISOString(),
      };
      setHistory((prev) => {
        const next = [entry, ...prev].slice(0, 100); // keep last 100
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    [],
  );

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }, []);

  return { history, saveAttempt, clearHistory };
}
