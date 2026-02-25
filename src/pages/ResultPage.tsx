import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Question, UserAnswer } from '@/types/quiz';
import { useProgress } from '@/hooks/use-progress';

interface ResultState {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  timeTaken: number;
  answers: UserAnswer[];
  questions: Question[];
  topicName: string;
  topicId: string;
}

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state as ResultState;
  const [showSolutions, setShowSolutions] = useState(false);
  const { saveResult } = useProgress();

  useEffect(() => {
    if (result?.topicId) {
      saveResult(result.topicId, result.correct, result.totalQuestions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No results found.</p>
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const percentage = Math.round((result.correct / result.totalQuestions) * 100);
  const mins = Math.floor(result.timeTaken / 60);
  const secs = result.timeTaken % 60;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-5 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Test Results</h1>
          <p className="text-sm text-primary-foreground/60">{result.topicName}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Score Card */}
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <div className="text-center mb-6">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold font-mono-timer border-4 ${
              percentage >= 70 ? 'border-success text-success' : percentage >= 40 ? 'border-warning text-warning' : 'border-destructive text-destructive'
            }`}>
              {percentage}%
            </div>
            <p className="mt-2 text-muted-foreground text-sm">
              Time: {mins}m {secs}s
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-muted rounded-lg p-3">
              <p className="text-2xl font-bold text-foreground">{result.totalQuestions}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="bg-success/10 rounded-lg p-3">
              <p className="text-2xl font-bold text-success">{result.correct}</p>
              <p className="text-xs text-muted-foreground">Correct</p>
            </div>
            <div className="bg-destructive/10 rounded-lg p-3">
              <p className="text-2xl font-bold text-destructive">{result.incorrect}</p>
              <p className="text-xs text-muted-foreground">Incorrect</p>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <p className="text-2xl font-bold text-muted-foreground">{result.unattempted}</p>
              <p className="text-xs text-muted-foreground">Unattempted</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mb-6">
          <button onClick={() => navigate('/')} className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90">
            Back to Topics
          </button>
          <button onClick={() => navigate(`/test/${result.topicId}`)} className="flex-1 px-4 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted">
            Retry Test
          </button>
          <button onClick={() => setShowSolutions(!showSolutions)} className="flex-1 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90">
            {showSolutions ? 'Hide' : 'View'} Solutions
          </button>
        </div>

        {/* Solutions */}
        {showSolutions && (
          <div className="space-y-4 fade-in">
            {result.questions.map((q, i) => {
              const userAnswer = result.answers.find(a => a.questionId === q.id);
              const selected = userAnswer?.selectedOption;
              const isCorrect = selected === q.correctAnswer;
              const isAttempted = selected !== null && selected !== undefined;

              return (
                <div key={q.id} className={`bg-card rounded-xl border p-5 ${
                  !isAttempted ? 'border-border' : isCorrect ? 'border-success/40' : 'border-destructive/40'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      !isAttempted ? 'bg-muted text-muted-foreground' : isCorrect ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'
                    }`}>
                      {i + 1}
                    </span>
                    <p className="text-sm font-medium text-card-foreground">{q.question}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 ml-10">
                    {q.options.map((opt, j) => (
                      <div key={j} className={`text-sm px-3 py-2 rounded-lg border ${
                        j === q.correctAnswer ? 'border-success bg-success/10 text-success font-semibold' :
                        j === selected && !isCorrect ? 'border-destructive bg-destructive/10 text-destructive' :
                        'border-border text-muted-foreground'
                      }`}>
                        <span className="font-bold mr-2">{String.fromCharCode(65 + j)}.</span>{opt}
                      </div>
                    ))}
                  </div>

                  <div className="ml-10 bg-muted rounded-lg p-3">
                    <p className="text-xs font-semibold text-muted-foreground mb-1">EXPLANATION</p>
                    <p className="text-sm text-foreground">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default ResultPage;
