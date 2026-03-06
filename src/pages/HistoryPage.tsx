import { useNavigate } from "react-router-dom";
import { useTestHistory, TestAttempt } from "@/hooks/use-test-history";
import ThemeToggle from "@/components/ThemeToggle";
import ScientificCalculatorModal from "@/components/ScientificCalculator";
import { FaCalculator } from "react-icons/fa";
import { ArrowLeft, Trash2, TrendingUp, Clock, Target } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const HistoryPage = () => {
  const navigate = useNavigate();
  const { history, clearHistory } = useTestHistory();

  // Chart data: last 20 attempts reversed for chronological order
  const trendData = history
    .slice(0, 20)
    .reverse()
    .map((a, i) => ({
      label: `#${i + 1}`,
      percentage: a.percentage,
      correct: a.correct,
      date: new Date(a.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      }),
    }));

  // Topic accuracy aggregation
  const topicMap: Record<string, { total: number; correct: number; attempts: number }> = {};
  history.forEach((a) => {
    if (!topicMap[a.topicName])
      topicMap[a.topicName] = { total: 0, correct: 0, attempts: 0 };
    topicMap[a.topicName].total += a.totalQuestions;
    topicMap[a.topicName].correct += a.correct;
    topicMap[a.topicName].attempts += 1;
  });

  const topicData = Object.entries(topicMap)
    .map(([name, d]) => ({
      name: name.length > 15 ? name.slice(0, 14) + "…" : name,
      accuracy: Math.round((d.correct / d.total) * 100),
      attempts: d.attempts,
    }))
    .sort((a, b) => b.attempts - a.attempts)
    .slice(0, 10);

  // Stats
  const totalAttempts = history.length;
  const avgScore =
    totalAttempts > 0
      ? Math.round(history.reduce((s, a) => s + a.percentage, 0) / totalAttempts)
      : 0;
  const bestScore = totalAttempts > 0 ? Math.max(...history.map((a) => a.percentage)) : 0;
  const totalTime = history.reduce((s, a) => s + a.timeTaken, 0);

  const getBarColor = (accuracy: number) => {
    if (accuracy >= 70) return "hsl(var(--success))";
    if (accuracy >= 40) return "hsl(var(--warning))";
    return "hsl(var(--destructive))";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary via-primary/95 to-accent/80 text-primary-foreground py-6 px-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="max-w-5xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Test History
              </h1>
              <p className="text-sm text-primary-foreground/70">
                Performance trends & analytics
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ScientificCalculatorModal
              trigger={
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-semibold transition-colors border border-primary-foreground/10">
                  <FaCalculator className="w-4 h-4" />
                </button>
              }
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {totalAttempts === 0 ? (
          <div className="text-center py-20">
            <TrendingUp size={48} className="mx-auto text-muted-foreground/40 mb-4" />
            <h2 className="text-xl font-bold text-foreground mb-2">
              No test history yet
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Complete a practice test or mock test to start tracking your
              performance.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:opacity-90"
            >
              Start Practicing
            </button>
          </div>
        ) : (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                {
                  icon: Target,
                  label: "Total Tests",
                  value: totalAttempts,
                  color: "text-accent",
                },
                {
                  icon: TrendingUp,
                  label: "Avg Score",
                  value: `${avgScore}%`,
                  color: "text-primary",
                },
                {
                  icon: TrendingUp,
                  label: "Best Score",
                  value: `${bestScore}%`,
                  color: "text-success",
                },
                {
                  icon: Clock,
                  label: "Total Time",
                  value: `${Math.floor(totalTime / 60)}m`,
                  color: "text-muted-foreground",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card rounded-xl border border-border p-4 shadow-sm"
                >
                  <s.icon size={18} className={`${s.color} mb-2`} />
                  <p className="text-2xl font-bold font-mono-timer text-foreground">
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Score Trend Chart */}
            {trendData.length >= 2 && (
              <div className="bg-card rounded-xl border border-border p-5 mb-6 shadow-sm">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-accent" />
                  Score Trend (Last {trendData.length} Tests)
                </h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="date"
                        tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                      />
                      <YAxis
                        domain={[0, 100]}
                        tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          color: "hsl(var(--foreground))",
                        }}
                        formatter={(value: number) => [`${value}%`, "Score"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="percentage"
                        stroke="hsl(var(--accent))"
                        strokeWidth={2.5}
                        dot={{ fill: "hsl(var(--accent))", r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Topic Accuracy Chart */}
            {topicData.length > 0 && (
              <div className="bg-card rounded-xl border border-border p-5 mb-6 shadow-sm">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target size={18} className="text-primary" />
                  Topic-wise Accuracy
                </h2>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topicData} layout="vertical">
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        type="number"
                        domain={[0, 100]}
                        tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        width={120}
                        tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          color: "hsl(var(--foreground))",
                        }}
                        formatter={(value: number) => [`${value}%`, "Accuracy"]}
                      />
                      <Bar dataKey="accuracy" radius={[0, 4, 4, 0]}>
                        {topicData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={getBarColor(entry.accuracy)}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Recent Attempts */}
            <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">
                  Recent Attempts
                </h2>
                <button
                  onClick={() => {
                    if (confirm("Clear all test history?")) clearHistory();
                  }}
                  className="text-xs text-destructive hover:underline flex items-center gap-1"
                >
                  <Trash2 size={12} /> Clear History
                </button>
              </div>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {history.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center justify-between bg-muted/50 rounded-lg p-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {a.isMockTest ? "🎯 " : ""}
                        {a.topicName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(a.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        {" · "}
                        {a.correct}/{a.totalQuestions} correct
                        {" · "}
                        {Math.floor(a.timeTaken / 60)}m {a.timeTaken % 60}s
                      </p>
                    </div>
                    <span
                      className={`text-lg font-bold font-mono-timer shrink-0 ml-3 ${
                        a.percentage >= 70
                          ? "text-success"
                          : a.percentage >= 40
                            ? "text-warning"
                            : "text-destructive"
                      }`}
                    >
                      {a.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default HistoryPage;
