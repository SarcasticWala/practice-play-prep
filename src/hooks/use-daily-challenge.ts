import { useState, useMemo } from "react";
import { Question } from "@/types/quiz";
import { getQuestions } from "@/data/questions";
import { topics } from "@/data/topics";

const DAILY_KEY = "tcs-nqt-daily-challenge";

interface DailyState {
  date: string;
  questionId: string;
  topicId: string;
  answered: boolean;
  selectedOption: number | null;
  correct: boolean | null;
}

function getTodayStr(): string {
  return new Date().toISOString().split("T")[0];
}

// Deterministic "random" from date string
function seededIndex(dateStr: string, max: number): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % max;
}

export function useDailyChallenge() {
  const today = getTodayStr();

  const { question, topicId, topicName } = useMemo(() => {
    const topicIdx = seededIndex(today, topics.length);
    const topic = topics[topicIdx];
    // Get all questions for this topic (unseeded, but we'll pick deterministically)
    const allQs = getQuestions(topic.id, 999);
    const qIdx = seededIndex(today + "q", allQs.length);
    return {
      question: allQs[qIdx],
      topicId: topic.id,
      topicName: topic.name,
    };
  }, [today]);

  const [state, setState] = useState<DailyState>(() => {
    try {
      const raw = localStorage.getItem(DAILY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as DailyState;
        if (parsed.date === today) return parsed;
      }
    } catch {}
    return {
      date: today,
      questionId: question.id,
      topicId,
      answered: false,
      selectedOption: null,
      correct: null,
    };
  });

  const answer = (optionIndex: number) => {
    const isCorrect = optionIndex === question.correctAnswer;
    const updated: DailyState = {
      ...state,
      answered: true,
      selectedOption: optionIndex,
      correct: isCorrect,
    };
    setState(updated);
    localStorage.setItem(DAILY_KEY, JSON.stringify(updated));
    return isCorrect;
  };

  const shouldShowModal = !state.answered;

  return {
    question,
    topicName,
    answered: state.answered,
    selectedOption: state.selectedOption,
    correct: state.correct,
    answer,
    shouldShowModal,
  };
}
