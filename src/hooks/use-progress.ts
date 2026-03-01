import { useState, useEffect } from "react";

export interface TopicProgress {
  topicId: string;
  bestScore: number;
  bestPercentage: number;
  totalQuestions: number;
  attempts: number;
  lastAttempt: string; // ISO date
}

const STORAGE_KEY = "tcs-nqt-progress";

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, TopicProgress>>(
    () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    },
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const saveResult = (
    topicId: string,
    correct: number,
    totalQuestions: number,
  ) => {
    const percentage = Math.round((correct / totalQuestions) * 100);
    setProgress((prev) => {
      const existing = prev[topicId];
      return {
        ...prev,
        [topicId]: {
          topicId,
          bestScore: existing ? Math.max(existing.bestScore, correct) : correct,
          bestPercentage: existing
            ? Math.max(existing.bestPercentage, percentage)
            : percentage,
          totalQuestions,
          attempts: existing ? existing.attempts + 1 : 1,
          lastAttempt: new Date().toISOString(),
        },
      };
    });
  };

  const getTopicProgress = (topicId: string): TopicProgress | null => {
    return progress[topicId] || null;
  };

  const clearProgress = () => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return { progress, saveResult, getTopicProgress, clearProgress };
}
