import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getQuestions } from "@/data/questions";
import { topics } from "@/data/topics";
import { Question, UserAnswer } from "@/types/quiz";
import { useBookmarks } from "@/hooks/use-bookmarks";

const TestPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topic = topics.find((t) => t.id === topicId);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const [questions] = useState<Question[]>(() => getQuestions(topicId || "", 50));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [skipped, setSkipped] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(questions.length * 60);

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);

    const userAnswers: UserAnswer[] = questions.map((q) => ({
      questionId: q.id,
      selectedOption: answers[q.id] ?? null,
    }));

    const correct = questions.filter((q) => answers[q.id] === q.correctAnswer).length;
    const attempted = Object.values(answers).filter(
      (v) => v !== null && v !== undefined,
    ).length;

    navigate("/result", {
      state: {
        totalQuestions: questions.length,
        attempted,
        correct,
        incorrect: attempted - correct,
        unattempted: questions.length - attempted,
        score: correct,
        timeTaken: questions.length * 60 - timeLeft,
        answers: userAnswers,
        questions,
        topicName: topic?.name || "Test",
        topicId: topicId || "",
      },
    });
  }, [submitted, questions, answers, timeLeft, navigate, topic, topicId]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleSubmit]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!submitted) {
        e.preventDefault();
        e.returnValue = "You have an ongoing test. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [submitted]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <p className="text-muted-foreground text-center">
          No questions available for this topic.
        </p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const selectedAnswer = answers[currentQ.id];
  const isRevealed = revealed[currentQ.id];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;
  const isLowTime = timeLeft < 60;
  const bookmarked = isBookmarked(currentQ.id);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (revealed[questionId]) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const revealCurrent = () => {
    setRevealed((prev) => ({ ...prev, [currentQ.id]: true }));
  };

  const handleSkip = () => {
    setSkipped((prev) => ({ ...prev, [currentQ.id]: true }));
    setRevealed((prev) => ({ ...prev, [currentQ.id]: true }));
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-gradient-to-r from-primary via-primary/95 to-accent/80 text-primary-foreground px-4 py-3 shadow-lg">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/")}
              className="nav-back-btn shrink-0"
              aria-label="Go back to home"
            >
              <ArrowLeft size={16} />
              Back
            </button>
            <div className="min-w-0 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <h1 className="font-secondary font-bold text-base sm:text-lg truncate">
                {topic?.name || "Test"}
              </h1>
              <p className="text-xs text-primary-foreground/80">
                Q {currentIndex + 1} of {questions.length}
              </p>
            </div>
          </div>

          <div
            className={`self-end sm:self-auto font-mono-timer text-lg sm:text-xl font-bold px-3 py-2 sm:px-4 rounded-lg ${
              isLowTime
                ? "bg-destructive text-destructive-foreground timer-pulse"
                : "bg-primary-foreground/10"
            }`}
          >
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
        </div>
      </header>

      <div className="bg-card/80 backdrop-blur-sm border-b border-border px-4 py-2 overflow-x-auto">
        <div className="flex gap-1.5 min-w-max">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(i)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                i === currentIndex
                  ? "bg-accent text-accent-foreground scale-110"
                  : revealed[q.id] && answers[q.id] === q.correctAnswer
                    ? "bg-success/20 text-success border border-success/40"
                    : revealed[q.id] && answers[q.id] !== q.correctAnswer
                      ? "bg-destructive/20 text-destructive border border-destructive/40"
                      : skipped[q.id]
                        ? "bg-warning/20 text-warning border border-warning/40"
                        : "bg-muted text-muted-foreground"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-4 sm:py-6 fade-in" key={currentIndex}>
        <div className="bg-card/90 backdrop-blur-sm rounded-xl border border-border p-4 sm:p-6 mb-6 shadow-sm">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs text-muted-foreground mb-2 font-semibold">
              QUESTION {currentIndex + 1}
            </p>
            <button
              onClick={() => toggleBookmark(currentQ, topicId || "", topic?.name || "")}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all hover:scale-105 ${
                bookmarked
                  ? "border-accent/50 bg-accent/15 text-accent"
                  : "border-border bg-muted/50 text-muted-foreground"
              }`}
              title={bookmarked ? "Remove bookmark" : "Bookmark this question"}
            >
              {bookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
            </button>
          </div>
          <p className="font-secondary text-base sm:text-lg font-bold text-card-foreground leading-relaxed">
            {currentQ.question}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          {currentQ.options.map((opt, i) => {
            let optClass = "border-border";
            if (isRevealed) {
              if (i === currentQ.correctAnswer) {
                optClass = "border-success bg-success/10";
              } else if (i === selectedAnswer) {
                optClass = "border-destructive bg-destructive/10";
              }
            } else if (selectedAnswer === i) {
              optClass = "selected";
            }

            return (
              <button
                key={i}
                onClick={() => handleSelectOption(currentQ.id, i)}
                disabled={isRevealed}
                className={`option-radio w-full text-left flex items-center gap-3 ${optClass} disabled:cursor-default`}
              >
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    isRevealed && i === currentQ.correctAnswer
                      ? "bg-success text-success-foreground"
                      : isRevealed && i === selectedAnswer
                        ? "bg-destructive text-destructive-foreground"
                        : selectedAnswer === i
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-card-foreground">{opt}</span>
                {isRevealed && i === currentQ.correctAnswer && (
                  <span className="ml-auto text-success font-bold text-sm">Correct</span>
                )}
                {isRevealed && i === selectedAnswer && i !== currentQ.correctAnswer && (
                  <span className="ml-auto text-destructive font-bold text-sm">Wrong</span>
                )}
              </button>
            );
          })}
        </div>

        {isRevealed && (
          <div
            className={`rounded-lg p-4 mb-6 text-sm ${
              isCorrect
                ? "bg-success/10 border border-success/30 text-success"
                : "bg-destructive/10 border border-destructive/30 text-destructive"
            }`}
          >
            {isCorrect
              ? "Correct answer."
              : `Incorrect. The correct answer is ${String.fromCharCode(65 + currentQ.correctAnswer)}.`}
            {currentQ.explanation && (
              <p className="mt-2 text-card-foreground/80">{currentQ.explanation}</p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="inline-flex w-full sm:w-auto justify-center items-center gap-1.5 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted disabled:opacity-40 transition-colors"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="flex gap-2 w-full sm:w-auto">
            {!isRevealed && (
              <button
                onClick={handleSkip}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-warning/40 text-sm font-semibold text-warning hover:bg-warning/10 transition-colors"
              >
                Skip
              </button>
            )}
            <button
              onClick={() => {
                setAnswers((prev) => {
                  const c = { ...prev };
                  delete c[currentQ.id];
                  return c;
                });
                setRevealed((prev) => {
                  const c = { ...prev };
                  delete c[currentQ.id];
                  return c;
                });
              }}
              disabled={isRevealed}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors"
            >
              Clear
            </button>
          </div>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => {
                revealCurrent();
                setCurrentIndex((i) => i + 1);
              }}
              className="inline-flex w-full sm:w-auto justify-center items-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Next
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={() => {
                revealCurrent();
                handleSubmit();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-success text-success-foreground text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Submit Test
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default TestPage;
