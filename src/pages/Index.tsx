import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { topics } from '@/data/topics';
import { useProgress } from '@/hooks/use-progress';
import { useBookmarks } from '@/hooks/use-bookmarks';

import ScientificCalculatorModal from '@/components/ScientificCalculator';
import { FaCalculator } from 'react-icons/fa';

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
      <header className="bg-gradient-to-r from-primary via-primary/95 to-accent/80 text-primary-foreground py-8 px-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="max-w-6xl mx-auto flex items-center justify-between relative z-10">
          <div>
            <h1 className="font-secondary text-2xl sm:text-3xl font-bold tracking-tight">TCS NQT Practice Platform</h1>
            <p className="mt-1.5 text-primary-foreground/70 text-sm">Master aptitude & reasoning with timed practice tests</p>
          </div>
          <ScientificCalculatorModal
            trigger={
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-semibold transition-colors border border-primary-foreground/10">
                <FaCalculator className="w-4 h-4" />
                <span className="hidden sm:inline">Calculator</span>
              </button>
            }
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Mock Test CTA */}
        <div className="bg-gradient-to-br from-accent/15 via-accent/5 to-primary/10 rounded-2xl border border-accent/25 p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">📝 TCS NQT Full Mock Test</h2>
            <p className="text-sm text-muted-foreground">56 questions • 60 minutes</p>
            <p className="text-xs text-muted-foreground mt-1">26 Numerical Ability + 30 Reasoning Ability</p>
          </div>
          <button
            onClick={() => navigate('/mock-test')}
            className="px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:brightness-110 transition-all shrink-0 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Mock Test →
          </button>
        </div>

        {/* Progress Summary */}
        <div className="bg-card rounded-2xl border border-border p-5 sm:p-6 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-bold font-mono-timer text-foreground">{completedCount}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Topics Practiced</p>
            </div>
            <div className="border-l border-border pl-8">
              <p className="text-3xl font-bold font-mono-timer text-foreground">{Object.values(progress).reduce((s, p) => s + p.attempts, 0)}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Total Attempts</p>
            </div>
            <div className="border-l border-border pl-8">
              <p className="text-3xl font-bold font-mono-timer text-accent">{bookmarks.length}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Bookmarked</p>
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
                  className="topic-card-hover bg-card border border-border rounded-2xl p-4 text-left hover:border-accent/60 group relative shadow-sm hover:shadow-md"
                >
                  {tp && (
                    <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      tp.bestPercentage >= 70 ? 'bg-success/15 text-success' : tp.bestPercentage >= 40 ? 'bg-accent/15 text-accent' : 'bg-destructive/15 text-destructive'
                    }`}>
                      {tp.bestPercentage}%
                    </span>
                  )}
                  <span className="text-2xl block mb-2">{topic.icon}</span>
                  <span className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors leading-tight block">
                    {topic.name}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1.5 block">
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

      <footer className="border-t border-border mt-8 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>Practice Platform — Not affiliated with TCS</span>
          <a
            href="https://www.linkedin.com/in/ayan-das-cse39/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-accent hover:underline font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Follow us on LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
