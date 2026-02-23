import { useNavigate } from 'react-router-dom';
import { topics } from '@/data/topics';

const Index = () => {
  const navigate = useNavigate();
  const quantTopics = topics.filter(t => t.category === 'quantitative');
  const reasonTopics = topics.filter(t => t.category === 'reasoning');

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
        {/* Quantitative Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full inline-block" />
            Quantitative Aptitude
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {quantTopics.map(topic => (
              <button
                key={topic.id}
                onClick={() => navigate(`/test/${topic.id}`)}
                className="topic-card-hover bg-card border border-border rounded-xl p-4 text-left hover:border-accent group"
              >
                <span className="text-2xl block mb-2">{topic.icon}</span>
                <span className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors leading-tight block">
                  {topic.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1 block">{topic.questionCount} Qs</span>
              </button>
            ))}
          </div>
        </section>

        {/* Reasoning Section */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent rounded-full inline-block" />
            Logical Reasoning
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {reasonTopics.map(topic => (
              <button
                key={topic.id}
                onClick={() => navigate(`/test/${topic.id}`)}
                className="topic-card-hover bg-card border border-border rounded-xl p-4 text-left hover:border-accent group"
              >
                <span className="text-2xl block mb-2">{topic.icon}</span>
                <span className="text-sm font-semibold text-card-foreground group-hover:text-accent transition-colors leading-tight block">
                  {topic.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1 block">{topic.questionCount} Qs</span>
              </button>
            ))}
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
