import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Sparkles, 
  Network, 
  Server, 
  Database, 
  Cloud, 
  ArrowUpRight, 
  CheckCircle2, 
  Code2,
  Workflow,
  Globe2,
  BarChart3
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  gradient: string;
  borderGlow: string;
}

export const AboutSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Data Analysis & Engineering',
      icon: <BarChart3 size={20} className="text-red-400" />,
      description: 'Business intelligence pipelines, automated ETL workflows & executive dashboards',
      skills: ['Power BI', 'Data Analysis', 'Data Engineering', 'ETL Pipelines', 'Data Visualization'],
      gradient: 'from-red-950/60 via-neutral-950/50 to-black/70',
      borderGlow: 'border-red-500/40 hover:border-red-500/80 shadow-[0_0_25px_rgba(239,68,68,0.2)]',
    },
    {
      title: 'Programming',
      icon: <Code2 size={20} className="text-orange-400" />,
      description: 'Core programming foundations for high-concurrency AI systems',
      skills: ['Python', 'SQL'],
      gradient: 'from-orange-950/40 via-red-950/20 to-black/60',
      borderGlow: 'border-orange-500/30 hover:border-orange-500/70 shadow-[0_0_20px_rgba(249,115,22,0.12)]',
    },
    {
      title: 'AI / ML',
      icon: <Cpu size={20} className="text-amber-400" />,
      description: 'Deep learning architectures, intent classification & sentiment analysis models',
      skills: ['PyTorch', 'Scikit-learn', 'NLP', 'Sentiment Analysis'],
      gradient: 'from-amber-950/40 via-neutral-950/40 to-black/60',
      borderGlow: 'border-amber-500/30 hover:border-amber-500/70 shadow-[0_0_20px_rgba(245,158,11,0.12)]',
    },
    {
      title: 'Generative AI & Agentic Systems',
      icon: <Workflow size={20} className="text-rose-400" />,
      description: 'Multi-agent orchestration, state graphs & retrieval-augmented generation',
      skills: ['LLMs', 'RAG', 'Prompt Engineering', 'LangChain', 'LangGraph', 'Multi-Agent Systems'],
      gradient: 'from-rose-950/50 via-red-950/30 to-black/60',
      borderGlow: 'border-rose-500/40 hover:border-rose-500/80 shadow-[0_0_25px_rgba(244,63,94,0.18)]',
    },
    {
      title: 'Backend & Web Development',
      icon: <Server size={20} className="text-orange-400" />,
      description: 'Asynchronous microservices, token-streaming endpoints & REST APIs',
      skills: ['FastAPI', 'Flask', 'REST APIs'],
      gradient: 'from-red-950/40 via-neutral-950/40 to-black/60',
      borderGlow: 'border-orange-500/30 hover:border-orange-500/70 shadow-[0_0_20px_rgba(249,115,22,0.12)]',
    },
    {
      title: 'Databases & Vector Stores',
      icon: <Database size={20} className="text-rose-400" />,
      description: 'High-dimensional embeddings, semantic retrieval & low-latency caching',
      skills: ['PostgreSQL', 'ChromaDB', 'Redis'],
      gradient: 'from-rose-950/40 via-neutral-950/40 to-black/60',
      borderGlow: 'border-rose-500/30 hover:border-rose-500/70 shadow-[0_0_20px_rgba(244,63,94,0.14)]',
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud size={20} className="text-red-400" />,
      description: 'Containerized microservices, serverless scale & production deployments',
      skills: ['AWS', 'GCP', 'Docker'],
      gradient: 'from-red-950/40 via-neutral-950/40 to-black/60',
      borderGlow: 'border-red-500/30 hover:border-red-500/70 shadow-[0_0_20px_rgba(239,68,68,0.14)]',
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-24 py-24 px-6 sm:px-10 lg:px-14 overflow-hidden">
      {/* Dark luxury red ambient background accents */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-red-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[450px] h-[450px] bg-orange-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            About Me & Specialized Architecture
          </span>
        </div>

        {/* Headline & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] heading-pop leading-[1.08]">
              Engineered for{' '}
              <span className="font-serif-italic italic accent-glow">
                Autonomous Intelligence
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-[#E0E0E0] text-base md:text-lg leading-relaxed font-light">
              <p>
                I am an <strong className="text-white font-medium">AI Engineer</strong> with <strong className="text-white font-medium">1 year of hands-on production engineering experience</strong>, specializing in architecting production-grade Large Language Model (LLM) applications, autonomous agentic systems, and high-impact enterprise AI solutions.
              </p>
              <p>
                At <span className="text-white font-medium underline decoration-red-500/50 underline-offset-4">Monarch Global Group</span>, I have directly collaborated with international UK clients to translate ambitious operational challenges into deployed, low-latency AI architectures—spanning asynchronous multi-agent pipelines, resilient RAG citation engines, and automated business workflows.
              </p>
            </div>

            {/* Quick Proof Highlights */}
            <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-900/80 border border-white/10 px-4 py-2 rounded-full">
                <Globe2 size={14} className="text-red-400" />
                <span>International UK Client Implementations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-900/80 border border-white/10 px-4 py-2 rounded-full">
                <Terminal size={14} className="text-orange-400" />
                <span>Production LLM & Agent Deployments</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300 bg-neutral-900/80 border border-white/10 px-4 py-2 rounded-full">
                <Network size={14} className="text-rose-400" />
                <span>Multi-Agent LangGraph Workflows</span>
              </div>
            </div>
          </div>

          {/* Luxury Metric / Focus Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#2D0A0A]/90 via-[#1A0505]/85 to-[#0D0202]/95 border border-red-600/35 shadow-[0_8px_32px_rgba(220,38,38,0.18)]">
              <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-6 flex items-center justify-between">
                <span>Core Engineering Thesis</span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              </div>

              <blockquote className="text-xl font-light text-white leading-relaxed mb-6">
                “Bridging the gap between frontier probabilistic models and resilient, production-ready enterprise execution.”
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight">1 Year</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Hands-on AI Engineering</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight">Global</div>
                  <div className="text-xs text-neutral-400 mt-0.5">UK Enterprise Client Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                Technical Skills & System Stack
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Battle-tested frameworks, vector databases, and agent runtimes used across client deployments.
              </p>
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              7 Core Categories · 21+ Technologies
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skillCategories.map((cat, idx) => {
              const isSelected = activeCategory === cat.title;
              return (
                <div
                  key={cat.title}
                  onClick={() => setActiveCategory(isSelected ? null : cat.title)}
                  className={`relative p-6 rounded-3xl border transition-all duration-300 cursor-pointer bg-gradient-to-br ${cat.gradient} ${cat.borderGlow} ${
                    isSelected ? 'ring-2 ring-red-500/50 scale-[1.02]' : 'hover:-translate-y-1'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white tracking-tight mb-2">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6 min-h-[36px]">
                    {cat.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white/[0.07] border border-white/10 text-neutral-200 hover:text-white hover:bg-red-500/20 hover:border-red-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
