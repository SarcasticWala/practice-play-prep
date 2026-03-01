import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { Question, UserAnswer } from '@/types/quiz';
import { useProgress } from '@/hooks/use-progress';
import { TaggedQuestion } from '@/pages/MockTestPage';
import { BarChart3, Target, TrendingUp, AlertTriangle, CheckCircle2, XCircle, MinusCircle } from 'lucide-react';

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
  isMockTest?: boolean;
}

interface TopicStat {
  topicName: string;
  total: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  accuracy: number;
}

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state as ResultState;
  const [showSolutions, setShowSolutions] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const { saveResult } = useProgress();

  useEffect(() => {
    if (result?.topicId) {
      saveResult(result.topicId, result.correct, result.totalQuestions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topicStats = useMemo<TopicStat[]>(() => {
    if (!result?.isMockTest || !result?.questions) return [];

    const answerMap: Record<string, number | null> = {};
    result.answers.forEach((a) => { answerMap[a.questionId] = a.selectedOption; });

    const grouped: Record<string, { name: string; qs: { q: Question; selected: number | null }[] }> = {};

    result.questions.forEach((q) => {
      const tagged = q as TaggedQuestion;
      const key = tagged.sourceTopic || 'unknown';
      const name = tagged.sourceTopicName || 'Unknown';
      if (!grouped[key]) grouped[key] = { name, qs: [] };
      grouped[key].qs.push({ q, selected: answerMap[q.id] ?? null });
    });

    return Object.entries(grouped)
      .map(([, { name, qs }]) => {
        const total = qs.length;
        const attempted = qs.filter((x) => x.selected !== null).length;
        const correct = qs.filter((x) => x.selected === x.q.correctAnswer).length;
        const incorrect = attempted - correct;
        const unattempted = total - attempted;
        const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
        return { topicName: name, total, attempted, correct, incorrect, unattempted, accuracy };
      })
      .sort((a, b) => b.total - a.total || b.accuracy - a.accuracy);
  }, [result]);

  const sectionStats = useMemo(() => {
    if (!result?.isMockTest || !result?.questions) return null;

    const answerMap: Record<string, number | null> = {};
    result.answers.forEach((a) => { answerMap[a.questionId] = a.selectedOption; });

    const sections = { numerical: { correct: 0, total: 0 }, reasoning: { correct: 0, total: 0 } };
    result.questions.forEach((q) => {
      const tagged = q as TaggedQuestion;
      const section = tagged.sourceTopic && [
        'percentages', 'number-system', 'profit-loss', 'ratios', 'work-time',
        'speed-time-distance', 'geometry', 'area-shapes', 'equations', 'ages',
        'clocks-calendar', 'series-progressions', 'probability', 'pnc',
        'allegations', 'divisibility', 'decimal-fractions', 'averages',
      ].includes(tagged.sourceTopic) ? 'numerical' : 'reasoning';
      sections[section].total++;
      if (answerMap[q.id] === q.correctAnswer) sections[section].correct++;
    });

    return sections;
  }, [result]);

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

  const strongTopics = topicStats.filter((t) => t.accuracy >= 70);
  const weakTopics = topicStats.filter((t) => t.accuracy < 50 && t.attempted > 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary via-primary/95 to-accent/80 text-primary-foreground py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-secondary text-2xl font-bold">Test Results</h1>
          <p className="text-sm text-primary-foreground/60 mt-1">{result.topicName}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Score Card */}
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-6 shadow-sm">
          <div className="text-center mb-6">
            <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full text-4xl font-bold font-mono-timer border-4 shadow-lg ${
              percentage >= 70 ? 'border-success text-success shadow-success/20' : percentage >= 40 ? 'border-warning text-warning shadow-warning/20' : 'border-destructive text-destructive shadow-destructive/20'
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

        {/* Section-wise summary for mock test */}
        {sectionStats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} className="text-accent" />
                <h3 className="font-semibold text-foreground">Numerical Ability</h3>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold font-mono-timer text-foreground">
                  {sectionStats.numerical.correct}/{sectionStats.numerical.total}
                </span>
                <span className="text-sm text-muted-foreground mb-1">
                  ({sectionStats.numerical.total > 0 ? Math.round((sectionStats.numerical.correct / sectionStats.numerical.total) * 100) : 0}%)
                </span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent transition-all"
                  style={{ width: `${sectionStats.numerical.total > 0 ? (sectionStats.numerical.correct / sectionStats.numerical.total) * 100 : 0}%` }}
                />
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} className="text-primary" />
                <h3 className="font-semibold text-foreground">Reasoning Ability</h3>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold font-mono-timer text-foreground">
                  {sectionStats.reasoning.correct}/{sectionStats.reasoning.total}
                </span>
                <span className="text-sm text-muted-foreground mb-1">
                  ({sectionStats.reasoning.total > 0 ? Math.round((sectionStats.reasoning.correct / sectionStats.reasoning.total) * 100) : 0}%)
                </span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${sectionStats.reasoning.total > 0 ? (sectionStats.reasoning.correct / sectionStats.reasoning.total) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button onClick={() => navigate('/')} className="flex-1 min-w-[120px] px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90">
            Back to Topics
          </button>
          {result.isMockTest ? (
            <button onClick={() => navigate('/mock-test')} className="flex-1 min-w-[120px] px-4 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted">
              Retry Mock Test
            </button>
          ) : (
            <button onClick={() => navigate(`/test/${result.topicId}`)} className="flex-1 min-w-[120px] px-4 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted">
              Retry Test
            </button>
          )}
          <button onClick={() => setShowSolutions(!showSolutions)} className="flex-1 min-w-[120px] px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90">
            {showSolutions ? 'Hide' : 'View'} Solutions
          </button>
          {result.isMockTest && (
            <button
              onClick={() => setShowAnalytics(!showAnalytics)}
              className="flex-1 min-w-[120px] px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 flex items-center justify-center gap-2"
            >
              <BarChart3 size={16} />
              {showAnalytics ? 'Hide' : 'View'} Analytics
            </button>
          )}
        </div>

        {/* Analytics Dashboard */}
        {showAnalytics && result.isMockTest && topicStats.length > 0 && (
          <div className="space-y-6 mb-8 fade-in">
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-accent" />
                Topic-wise Performance Breakdown
              </h2>

              <div className="space-y-3">
                {topicStats.map((t) => (
                  <div key={t.topicName} className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground truncate max-w-[200px]">{t.topicName}</span>
                      <div className="flex items-center gap-3 text-xs shrink-0">
                        <span className="flex items-center gap-1 text-success">
                          <CheckCircle2 size={12} /> {t.correct}
                        </span>
                        <span className="flex items-center gap-1 text-destructive">
                          <XCircle size={12} /> {t.incorrect}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MinusCircle size={12} /> {t.unattempted}
                        </span>
                        <span className={`font-bold ${t.accuracy >= 70 ? 'text-success' : t.accuracy >= 40 ? 'text-warning' : 'text-destructive'}`}>
                          {t.accuracy}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full flex">
                        <div
                          className="bg-success h-full transition-all"
                          style={{ width: `${(t.correct / t.total) * 100}%` }}
                        />
                        <div
                          className="bg-destructive h-full transition-all"
                          style={{ width: `${(t.incorrect / t.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl border border-success/30 p-5">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <TrendingUp size={16} className="text-success" />
                  Strong Topics ({strongTopics.length})
                </h3>
                {strongTopics.length > 0 ? (
                  <ul className="space-y-2">
                    {strongTopics.map((t) => (
                      <li key={t.topicName} className="flex items-center justify-between text-sm">
                        <span className="text-foreground truncate max-w-[160px]">{t.topicName}</span>
                        <span className="text-success font-bold">{t.accuracy}%</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No strong topics yet. Keep practicing!</p>
                )}
              </div>

              <div className="bg-card rounded-xl border border-destructive/30 p-5">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-destructive" />
                  Needs Improvement ({weakTopics.length})
                </h3>
                {weakTopics.length > 0 ? (
                  <ul className="space-y-2">
                    {weakTopics.map((t) => (
                      <li key={t.topicName} className="flex items-center justify-between text-sm">
                        <span className="text-foreground truncate max-w-[160px]">{t.topicName}</span>
                        <span className="text-destructive font-bold">{t.accuracy}%</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">Great! No weak spots detected.</p>
                )}
              </div>
            </div>

            {/* Overall Summary */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-3">📊 Quick Summary</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg font-bold text-foreground">{topicStats.length}</p>
                  <p className="text-xs text-muted-foreground">Topics Covered</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg font-bold text-foreground">
                    {topicStats.length > 0 ? Math.round(topicStats.reduce((s, t) => s + t.accuracy, 0) / topicStats.filter(t => t.attempted > 0).length || 1) : 0}%
                  </p>
                  <p className="text-xs text-muted-foreground">Avg Accuracy</p>
                </div>
                <div className="bg-success/10 rounded-lg p-3">
                  <p className="text-lg font-bold text-success">{strongTopics.length}</p>
                  <p className="text-xs text-muted-foreground">Strong Topics</p>
                </div>
                <div className="bg-destructive/10 rounded-lg p-3">
                  <p className="text-lg font-bold text-destructive">{weakTopics.length}</p>
                  <p className="text-xs text-muted-foreground">Weak Topics</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Solutions */}
        {showSolutions && (
          <div className="space-y-4 fade-in">
            {result.questions.map((q, i) => {
              const userAnswer = result.answers.find(a => a.questionId === q.id);
              const selected = userAnswer?.selectedOption;
              const isCorrect = selected === q.correctAnswer;
              const isAttempted = selected !== null && selected !== undefined;
              const tagged = q as TaggedQuestion;

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
                    <div className="flex-1">
                      {tagged.sourceTopicName && (
                        <span className="text-[10px] font-semibold text-accent">{tagged.sourceTopicName}</span>
                      )}
                      <p className="text-sm font-medium text-card-foreground">{q.question}</p>
                    </div>
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
