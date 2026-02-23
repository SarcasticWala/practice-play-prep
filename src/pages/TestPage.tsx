import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestions } from '@/data/questions';
import { topics } from '@/data/topics';
import { Question, UserAnswer } from '@/types/quiz';

const TestPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topic = topics.find(t => t.id === topicId);
  const [questions] = useState<Question[]>(() => getQuestions(topicId || '', 50));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [timeLeft, setTimeLeft] = useState(questions.length * 60); // 1 min per question
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);
    const userAnswers: UserAnswer[] = questions.map(q => ({
      questionId: q.id,
      selectedOption: answers[q.id] ?? null,
    }));
    const correct = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    const attempted = Object.values(answers).filter(v => v !== null && v !== undefined).length;

    navigate('/result', {
      state: {
        totalQuestions: questions.length,
        attempted,
        correct,
        incorrect: attempted - correct,
        unattempted: questions.length - attempted,
        score: correct,
        timeTaken: (questions.length * 60) - timeLeft,
        answers: userAnswers,
        questions,
        topicName: topic?.name || 'Test',
      },
    });
  }, [submitted, questions, answers, timeLeft, navigate, topic]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleSubmit]);

  const currentQ = questions[currentIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isLowTime = timeLeft < 60;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <header className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between shadow">
        <div>
          <h1 className="font-bold text-lg">{topic?.name || 'Test'}</h1>
          <p className="text-xs text-primary-foreground/60">Q {currentIndex + 1} of {questions.length}</p>
        </div>
        <div className={`font-mono-timer text-xl font-bold px-4 py-2 rounded-lg ${isLowTime ? 'bg-destructive text-destructive-foreground timer-pulse' : 'bg-primary-foreground/10'}`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </header>

      {/* Question Nav Dots */}
      <div className="bg-card border-b border-border px-4 py-2 overflow-x-auto">
        <div className="flex gap-1.5 min-w-max">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(i)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                i === currentIndex
                  ? 'bg-accent text-accent-foreground scale-110'
                  : answers[q.id] !== undefined && answers[q.id] !== null
                  ? 'bg-success/20 text-success border border-success/40'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Question */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 fade-in" key={currentIndex}>
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <p className="text-xs text-muted-foreground mb-2 font-semibold">QUESTION {currentIndex + 1}</p>
          <p className="text-lg font-medium text-card-foreground leading-relaxed">{currentQ.question}</p>
        </div>

        <div className="space-y-3 mb-8">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setAnswers(prev => ({ ...prev, [currentQ.id]: i }))}
              className={`option-radio w-full text-left flex items-center gap-3 ${
                answers[currentQ.id] === i ? 'selected' : 'border-border'
              }`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                answers[currentQ.id] === i ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-card-foreground">{opt}</span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted disabled:opacity-40 transition-colors"
          >
            ← Previous
          </button>

          <button
            onClick={() => setAnswers(prev => {
              const copy = { ...prev };
              delete copy[currentQ.id];
              return copy;
            })}
            className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear
          </button>

          {currentIndex < questions.length - 1 ? (
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

export default TestPage;
