import { useState, useCallback } from "react";

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
}

const STREAK_KEY = "tcs-nqt-streak";

function getTodayStr(): string {
  return new Date().toISOString().split("T")[0];
}

function getYesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

function loadStreak(): StreakData {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { currentStreak: 0, longestStreak: 0, lastActiveDate: "" };
}

function saveStreak(data: StreakData) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

export function useStreak() {
  const [streak, setStreak] = useState<StreakData>(loadStreak);

  const recordActivity = useCallback(() => {
    const today = getTodayStr();
    setStreak((prev) => {
      if (prev.lastActiveDate === today) return prev; // already recorded today

      const yesterday = getYesterdayStr();
      const newCurrent = prev.lastActiveDate === yesterday ? prev.currentStreak + 1 : 1;
      const newLongest = Math.max(prev.longestStreak, newCurrent);
      const updated = { currentStreak: newCurrent, longestStreak: newLongest, lastActiveDate: today };
      saveStreak(updated);
      return updated;
    });
  }, []);

  // Compute display streak (if last active was yesterday or today, show current; else 0)
  const today = getTodayStr();
  const yesterday = getYesterdayStr();
  const displayStreak =
    streak.lastActiveDate === today || streak.lastActiveDate === yesterday
      ? streak.currentStreak
      : 0;

  return {
    currentStreak: displayStreak,
    longestStreak: streak.longestStreak,
    recordActivity,
  };
}
