import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { topics } from '@/data/topics';
import { useProgress } from '@/hooks/use-progress';
import { useBookmarks } from '@/hooks/use-bookmarks';

const Index = () => {
  const navigate = useNavigate();
  const { progress, clearProgress } = useProgress();
  const { bookmarks, clearBookmarks } = useBookmarks();
  const [showBookmarks, setShowBookmarks] = useState(false);
  const quantTopics = topics.filter(t => t.category === 'quantitative');
  const reasonTopics = topics.filter(t => t.category === 'reasoning');

  const completedCount = Object.keys(progress).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">TCS NQT Practice Platform</h1>
          <p className="mt-1 text-primary-foreground/70 text-sm">Master aptitude & reasoning with timed practice tests</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Progress Summary */}
        <div className="bg-card rounded-xl border border-border p-5 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-6">
            <div>
              <p className="text-2xl font-bold text-foreground">{completedCount}</p>
              <p className="text-xs text-muted-foreground">Topics Practiced</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{Object.values(progress).reduce((s, p) => s + p.attempts, 0)}</p>
              <p className="text-xs text-muted-foreground">Total Attempts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">{bookmarks.length}</p>
              <p className="text-xs text-muted-foreground">Bookmarked</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowBookmarks(!showBookmarks)}
              className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {showBookmarks ? 'Hide' : '📌 View'} Bookmarks
            </button>
            {completedCount > 0 && (
              <button
                onClick={() => { clearProgress(); clearBookmarks(); }}
                className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Reset All
              </button>
            )}
          </div>
        </div>

        {/* Bookmarks Panel */}
        {showBookmarks && (
          <div className="bg-card rounded-xl border border-border p-5 mb-6 fade-in">
            <h3 className="font-bold text-foreground mb-3">📌 Bookmarked Questions ({bookmarks.length})</h3>
            {bookmarks.length === 0 ? (
              <p className="text-sm text-muted-foreground">No bookmarked questions yet. Bookmark questions during tests for later review.</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {bookmarks.map(b => (
                  <div key={b.question.id} className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-accent font-semibold mb-1">{b.topicName}</p>
                    <p className="text-sm font-medium text-card-foreground mb-2">{b.question.question}</p>
                    <div className="grid grid-cols-2 gap-1">
                      {b.question.options.map((opt, j) => (
                        <span key={j} className={`text-xs px-2 py-1 rounded ${j === b.question.correctAnswer ? 'bg-success/20 text-success font-bold' : 'text-muted-foreground'}`}>
                          {String.fromCharCode(65 + j)}. {opt}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{b.question.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Quantitative Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full inline-block" />
            Quantitative Aptitude
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {quantTopics.map(topic => {
              const tp = progress[topic.id];
              return (
                <button
                  key={topic.id}
                  onClick={() => navigate(`/test/${topic.id}`)}
                  className="topic-card-hover bg-card border border-border rounded-xl p-4 text-left hover:border-accent group relative"
                >
                  {tp && (
                    <span className={`absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      tp.bestPercentage >= 70 ? 'bg-success/20 text-success' : tp.bestPercentage >= 40 ? 'bg-accent/20 text-accent' : 'bg-destructive/20 text-destructive'
                    }`}>
                      {tp.bestPercentage}%
                    </span>
                  )}
                  <span className="text-2xl block mb-2">{topic.icon}</span>
                  <span className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors leading-tight block">
                    {topic.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {topic.questionCount} Qs{tp ? ` · ${tp.attempts} tries` : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Reasoning Section */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full inline-block" />
            Logical Reasoning
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {reasonTopics.map(topic => {
              const tp = progress[topic.id];
              return (
                <button
                  key={topic.id}
                  onClick={() => navigate(`/test/${topic.id}`)}
                  className="topic-card-hover bg-card border border-border rounded-xl p-4 text-left hover:border-accent group relative"
                >
                  {tp && (
                    <span className={`absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      tp.bestPercentage >= 70 ? 'bg-success/20 text-success' : tp.bestPercentage >= 40 ? 'bg-accent/20 text-accent' : 'bg-destructive/20 text-destructive'
                    }`}>
                      {tp.bestPercentage}%
                    </span>
                  )}
                  <span className="text-2xl block mb-2">{topic.icon}</span>
                  <span className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors leading-tight block">
                    {topic.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {topic.questionCount} Qs{tp ? ` · ${tp.attempts} tries` : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-muted-foreground text-xs border-t border-border mt-8">
        Practice Platform — Not affiliated with TCS
      </footer>
    </div>
  );
};

export default Index;
