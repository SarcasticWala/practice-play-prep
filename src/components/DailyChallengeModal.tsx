import { useState, useEffect, useCallback } from "react";
import { useDailyChallenge } from "@/hooks/use-daily-challenge";
import { useStreak } from "@/hooks/use-streak";
import { Flame, Clock, Trophy, X, Check, XCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  currentStreak: number;
  longestStreak: number;
  onCorrectAnswer: () => void;
}

export default function DailyChallengeModal({
  open,
  onClose,
  currentStreak,
  longestStreak,
  onCorrectAnswer,
}: Props) {
  const { question, topicName, answered, selectedOption, correct, answer } =
    useDailyChallenge();
  const [timeLeft, setTimeLeft] = useState(30);
  const [selected, setSelected] = useState<number | null>(selectedOption);
  const [submitted, setSubmitted] = useState(answered);
  const [isCorrect, setIsCorrect] = useState(correct);

  useEffect(() => {
    if (!open || submitted) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, open, submitted]);

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    const result = answer(selected ?? -1);
    setSubmitted(true);
    setIsCorrect(result);
    if (result) onCorrectAnswer();
  }, [selected, submitted, answer, onCorrectAnswer]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm fade-in">
      <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-warning/20 via-destructive/10 to-accent/15 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center">
              <Flame className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Daily Aptitude Challenge
              </h2>
              <p className="text-xs text-muted-foreground">{topicName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Streak bar */}
        <div className="px-5 py-3 border-b border-border flex items-center gap-6 text-sm">
          <span className="flex items-center gap-1.5 text-warning font-semibold">
            <Flame size={14} />
            Streak: {currentStreak} day{currentStreak !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Trophy size={14} />
            Best: {longestStreak} day{longestStreak !== 1 ? "s" : ""}
          </span>
          {!submitted && (
            <span
              className={`ml-auto flex items-center gap-1.5 font-mono-timer font-bold ${timeLeft <= 10 ? "text-destructive timer-pulse" : "text-foreground"}`}
            >
              <Clock size={14} />
              {timeLeft}s
            </span>
          )}
        </div>

        {/* Question */}
        <div className="p-5">
          <p className="text-sm font-semibold text-foreground mb-4 leading-relaxed">
            {question.question}
          </p>

          <div className="space-y-2">
            {question.options.map((opt, i) => {
              const isSelected = selected === i;
              const isAnswer = i === question.correctAnswer;
              let cls =
                "option-radio flex items-center gap-3 text-sm text-card-foreground";

              if (submitted) {
                if (isAnswer) cls += " correct";
                else if (isSelected && !isAnswer) cls += " incorrect";
              } else if (isSelected) {
                cls += " selected";
              }

              return (
                <button
                  key={i}
                  disabled={submitted}
                  onClick={() => setSelected(i)}
                  className={cls}
                >
                  <span className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-xs font-bold shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1 text-left">{opt}</span>
                  {submitted && isAnswer && (
                    <Check size={16} className="text-success" />
                  )}
                  {submitted && isSelected && !isAnswer && (
                    <XCircle size={16} className="text-destructive" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {submitted && (
            <div className="mt-4 p-3 rounded-xl bg-muted text-sm text-muted-foreground fade-in">
              <span
                className={`font-bold ${isCorrect ? "text-success" : "text-destructive"}`}
              >
                {isCorrect ? "Correct! 🎉" : "Incorrect"}
              </span>
              <span className="mx-1.5">—</span>
              {question.explanation}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-5 pb-5 flex gap-3">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="flex-1 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Continue to Practice
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
