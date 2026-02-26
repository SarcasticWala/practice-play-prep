import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '@/data/questions';
import { Question, UserAnswer } from '@/types/quiz';
import { useBookmarks } from '@/hooks/use-bookmarks';

// TCS NQT pattern: ~26 Numerical Ability + ~30 Reasoning = 56 questions, 60 min
const QUANT_TOPICS = [
  'percentages', 'number-system', 'profit-loss', 'ratios', 'work-time',
  'speed-time-distance', 'geometry', 'area-shapes', 'equations', 'ages',
  'clocks-calendar', 'series-progressions', 'probability', 'pnc',
  'allegations', 'divisibility', 'decimal-fractions', 'averages',
];
const REASONING_TOPICS = [
  'arrangements-series', 'blood-relations', 'coding-decoding', 'odd-man-out',
  'directions', 'statement-conclusion', 'seating-easy', 'seating-complex',
  'analogy', 'math-operations', 'symbols-notations', 'data-sufficiency',
  'meaningful-word', 'number-series', 'reasoning-general',
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(topics: string[], count: number): Question[] {
  const pool: Question[] = [];
  topics.forEach(t => {
    const qs = getQuestions(t, 50);
    pool.push(...qs);
  });
  return shuffle(pool).slice(0, count);
}

const SECTIONS = [
  { key: 'numerical', label: 'Numerical Ability', count: 26, topics: QUANT_TOPICS },
  { key: 'reasoning', label: 'Reasoning Ability', count: 30, topics: REASONING_TOPICS },
] as const;

const TOTAL_TIME = 60 * 60; // 60 minutes

const MockTestPage = () => {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const sections = useMemo(() => {
    return SECTIONS.map(s => ({
      ...s,
      questions: pickRandom(s.topics, s.count),
    }));
  }, []);

  const allQuestions = useMemo(() => sections.flatMap(s => s.questions), [sections]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [skipped, setSkipped] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState(false);

  // Flat index helpers
  const sectionOffset = currentSection === 0 ? 0 : sections[0].questions.length;
  const sectionQuestions = sections[currentSection].questions;
  const localIndex = currentIndex - sectionOffset;
  const currentQ = allQuestions[currentIndex];

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);
    const userAnswers: UserAnswer[] = allQuestions.map(q => ({
      questionId: q.id,
      selectedOption: answers[q.id] ?? null,
    }));
    const correct = allQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
    const attempted = Object.values(answers).filter(v => v !== null && v !== undefined).length;

    navigate('/result', {
      state: {
        totalQuestions: allQuestions.length,
        attempted,
        correct,
        incorrect: attempted - correct,
        unattempted: allQuestions.length - attempted,
        score: correct,
        timeTaken: TOTAL_TIME - timeLeft,
        answers: userAnswers,
        questions: allQuestions,
        topicName: 'TCS NQT Mock Test',
        topicId: 'mock-test',
      },
    });
  }, [submitted, allQuestions, answers, timeLeft, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) { handleSubmit(); return; }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleSubmit]);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (revealed[questionId]) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setRevealed(prev => ({ ...prev, [questionId]: true }));
  };

  const handleSkip = () => {
    setSkipped(prev => ({ ...prev, [currentQ.id]: true }));
    if (currentIndex < allQuestions.length - 1) setCurrentIndex(i => i + 1);
  };

  // Update section when index changes
  useEffect(() => {
    const sec0Len = sections[0].questions.length;
    setCurrentSection(currentIndex < sec0Len ? 0 : 1);
  }, [currentIndex, sections]);

  const switchSection = (secIdx: number) => {
    setCurrentSection(secIdx);
    setCurrentIndex(secIdx === 0 ? 0 : sections[0].questions.length);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isLowTime = timeLeft < 120;
  const isRevealed = revealed[currentQ.id];
  const selectedAnswer = answers[currentQ.id];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;
  const bookmarked = isBookmarked(currentQ.id);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <header className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between shadow">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-lg">←</span>
          <div>
            <h1 className="font-bold text-lg">TCS NQT Mock Test</h1>
            <p className="text-xs text-primary-foreground/60">Q {currentIndex + 1} of {allQuestions.length}</p>
          </div>
        </button>
        <div className={`font-mono-timer text-xl font-bold px-4 py-2 rounded-lg ${isLowTime ? 'bg-destructive text-destructive-foreground timer-pulse' : 'bg-primary-foreground/10'}`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </header>

      {/* Section Tabs */}
      <div className="bg-card border-b border-border px-4 py-2 flex gap-2">
        {sections.map((sec, si) => {
          const secStart = si === 0 ? 0 : sections[0].questions.length;
          const answered = sec.questions.filter(q => revealed[q.id]).length;
          return (
            <button
              key={sec.key}
              onClick={() => switchSection(si)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentSection === si ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {sec.label} ({answered}/{sec.count})
              {si === currentSection && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Skip entire section
                    sec.questions.forEach(q => {
                      if (!revealed[q.id]) setSkipped(prev => ({ ...prev, [q.id]: true }));
                    });
                    if (si < sections.length - 1) switchSection(si + 1);
                  }}
                  className="ml-2 text-xs text-warning underline"
                >
                  Skip Section
                </button>
              )}
            </button>
          );
        })}
      </div>

      {/* Question Nav Dots */}
      <div className="bg-card border-b border-border px-4 py-2 overflow-x-auto">
        <div className="flex gap-1.5 min-w-max">
          {sectionQuestions.map((q, i) => {
            const globalIdx = sectionOffset + i;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(globalIdx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  globalIdx === currentIndex
                    ? 'bg-accent text-accent-foreground scale-110'
                    : revealed[q.id] && answers[q.id] === q.correctAnswer
                    ? 'bg-success/20 text-success border border-success/40'
                    : revealed[q.id] && answers[q.id] !== q.correctAnswer
                    ? 'bg-destructive/20 text-destructive border border-destructive/40'
                    : skipped[q.id]
                    ? 'bg-warning/20 text-warning border border-warning/40'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 fade-in" key={currentIndex}>
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs text-muted-foreground mb-2 font-semibold">
              {sections[currentSection].label.toUpperCase()} — QUESTION {localIndex + 1}
            </p>
            <button
              onClick={() => toggleBookmark(currentQ, 'mock-test', 'Mock Test')}
              className={`text-lg transition-transform hover:scale-125 ${bookmarked ? 'text-accent' : 'text-muted-foreground/40'}`}
              title={bookmarked ? 'Remove bookmark' : 'Bookmark this question'}
            >
              {bookmarked ? '📌' : '📎'}
            </button>
          </div>
          <p className="text-lg font-medium text-card-foreground leading-relaxed">{currentQ.question}</p>
        </div>

        <div className="space-y-3 mb-4">
          {currentQ.options.map((opt, i) => {
            let optClass = 'border-border';
            if (isRevealed) {
              if (i === currentQ.correctAnswer) optClass = 'border-success bg-success/10';
              else if (i === selectedAnswer) optClass = 'border-destructive bg-destructive/10';
            } else if (selectedAnswer === i) {
              optClass = 'selected';
            }
            return (
              <button
                key={i}
                onClick={() => handleSelectOption(currentQ.id, i)}
                disabled={isRevealed}
                className={`option-radio w-full text-left flex items-center gap-3 ${optClass} disabled:cursor-default`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  isRevealed && i === currentQ.correctAnswer ? 'bg-success text-success-foreground'
                  : isRevealed && i === selectedAnswer ? 'bg-destructive text-destructive-foreground'
                  : selectedAnswer === i ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground'
                }`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-card-foreground">{opt}</span>
                {isRevealed && i === currentQ.correctAnswer && (
  <span className="ml-auto text-success font-bold text-sm">✓ CORRECT</span>
)}
{isRevealed && i === selectedAnswer && i !== currentQ.correctAnswer && (
  <span className="ml-auto text-destructive font-bold text-sm">✗ WRONG</span>
)}            </button>
            );
          })}
        </div>

        {isRevealed && (
          <div className={`rounded-lg p-4 mb-6 text-sm ${isCorrect ? 'bg-success/10 border border-success/30 text-success' : 'bg-destructive/10 border border-destructive/30 text-destructive'}`}>
            {isCorrect ? '🎉 Correct!' : `❌ Incorrect. The correct answer is ${String.fromCharCode(65 + currentQ.correctAnswer)}.`}
            {currentQ.explanation && <p className="mt-2 text-card-foreground/80">{currentQ.explanation}</p>}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted disabled:opacity-40 transition-colors"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {!isRevealed && (
              <button
                onClick={handleSkip}
                className="px-4 py-2.5 rounded-lg border border-warning/40 text-sm font-semibold text-warning hover:bg-warning/10 transition-colors"
              >
                Skip →
              </button>
            )}
            <button
              onClick={() => {
                setAnswers(prev => { const c = { ...prev }; delete c[currentQ.id]; return c; });
                setRevealed(prev => { const c = { ...prev }; delete c[currentQ.id]; return c; });
              }}
              disabled={isRevealed}
              className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors"
            >
              Clear
            </button>
          </div>

          {currentIndex < allQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(i => i + 1)}
              className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 rounded-lg bg-success text-success-foreground text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Submit Test
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default MockTestPage;
