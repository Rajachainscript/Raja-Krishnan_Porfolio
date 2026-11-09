import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, Cpu, Zap, ArrowRight, Bot, Search, BarChart3, Mail, MessageSquareText } from 'lucide-react';
import { ProjectData, ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onOpenContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenContact }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: 'nlp-intent-chatbot',
      title: 'NLP Intent Recognition AI Chatbot',
      subtitle: 'Smart conversational AI assistant built with Python, Flask, and Hugging Face NLP models featuring custom intent recognition and sentiment analysis pipelines.',
      tag: 'NLP & Conversational AI',
      gradient: 'from-[#3A0A0A]/90 via-[#1E0505]/85 to-[#0A0202]/95 border-red-600/40 hover:border-red-500/70',
      summary: 'Conversational assistant capable of token classification, intent extraction, and multi-turn dialogue state tracking using open-source transformer architectures.',
      challenge: 'Resolving subtle user intent nuances in noisy text inputs while maintaining sub-120ms response latencies in a lightweight Flask deployment.',
      solution: 'Fine-tuned Hugging Face transformer models for intent classification and sentiment polarity, backed by tokenization optimization and asynchronous pipeline batching in Flask.',
      architecture: [
        'Hugging Face transformer token classification pipeline',
        'Intent routing & dialogue state machine',
        'Real-time sentiment scoring & escalation gates',
        'REST API endpoints with structured JSON responses',
      ],
      techStack: ['Python', 'Flask', 'Hugging Face', 'PyTorch', 'Scikit-learn', 'NLP', 'REST APIs'],
      metrics: [
        { label: 'Intent Accuracy', value: '96.8%' },
        { label: 'Avg Latency', value: '92ms' },
        { label: 'Dialogues Handled', value: '180k+' },
      ],
    },
    {
      id: 'octopus-ai',
      title: 'Octopus AI',
      subtitle: 'All-in-one multi-model SaaS platform for automated marketing content generation, AI image creation, and email orchestration.',
      tag: 'Multi-Model SaaS Platform',
      gradient: 'from-[#350A0A]/90 via-[#1C0505]/85 to-[#0A0202]/95 border-red-600/40 hover:border-red-500/70',
      summary: 'Engineered an end-to-end multi-modal content generation engine enabling marketing teams to orchestrate copy, imagery, and drip campaigns in parallel.',
      challenge: 'Integrating disparate foundation model APIs (LLMs for copy, diffusion models for visuals) while maintaining low latency, unified prompt state, and reliable brand tone consistency.',
      solution: 'Architected an asynchronous worker queue leveraging Redis and FastAPI microservices. Implemented custom prompt grounding pipelines with caching layers that reduced generation latency by 45%.',
      architecture: [
        'Multi-model LLM router with fallback redundancy',
        'Asynchronous task queuing via Celery & Redis',
        'FastAPI microservices with token-streaming websockets',
        'Automated multi-variant email sequence generator',
      ],
      techStack: ['Python', 'FastAPI', 'Multi-Model LLMs', 'Redis', 'PostgreSQL', 'Docker'],
      metrics: [
        { label: 'Latency Reduction', value: '-45%' },
        { label: 'Workflows Executed', value: '250k+' },
        { label: 'Uptime Reliability', value: '99.95%' },
      ],
    },
    {
      id: 'social-email-agents',
      title: 'AI Social Media & Email Automation Agents',
      subtitle: 'Autonomous multi-agent pipelines for automated content scheduling and direct email orchestration.',
      tag: 'Autonomous Multi-Agent Systems',
      gradient: 'from-[#2F0808]/90 via-[#190404]/85 to-[#0A0202]/95 border-red-600/40 hover:border-red-500/70',
      summary: 'Autonomous agentic loop coordinating market research, post drafting, approval triggers, and reactive email follow-ups without manual overhead.',
      challenge: 'Preventing agent hallucinations and loops in multi-step autonomous workflows requiring human-in-the-loop review and transactional safety.',
      solution: 'Built a stateful LangGraph supervisory network with deterministic checkpoints, automated regression evaluators, and webhook-driven approval gates for high-stakes enterprise communications.',
      architecture: [
        'LangGraph stateful agentic execution graph',
        'Supervisor-worker agent delegation pattern',
        'Automated sentiment & brand guardrail filters',
        'Interactive human-in-the-loop email review gates',
      ],
      techStack: ['LangGraph', 'LangChain', 'Python', 'FastAPI', 'ChromaDB', 'PostgreSQL'],
      metrics: [
        { label: 'Manual Time Saved', value: '78%' },
        { label: 'Multi-Agent Steps', value: '18/loop' },
        { label: 'Error Rate', value: '< 0.2%' },
      ],
    },
    {
      id: 'google-ads-seo',
      title: 'Google Ads & SEO Automation',
      subtitle: 'AI pipelines automating ad copy generation, performance metrics tracking, and SEO keyword optimization.',
      tag: 'AdTech & Organic Search Intelligence',
      gradient: 'from-[#340E05]/90 via-[#1C0702]/85 to-[#0A0301]/95 border-amber-600/40 hover:border-amber-500/70',
      summary: 'Data-driven pipeline synthesizing Google Search Console APIs, high-intent keyword clustering, and automated ad copy variation generation.',
      challenge: 'Generating hundreds of high-converting, compliant ad variants that adhere to strict Google character limits while dynamically adapting to conversion bidding trends.',
      solution: 'Constructed custom constraint-guided decoding algorithms and programmatic evaluation loops that rank semantic ad copy against competitor density benchmarks.',
      architecture: [
        'Continuous keyword clustering & SERP scraping engine',
        'Dynamic character-constrained LLM generation',
        'Automated A/B headline performance ranking',
        'Real-time conversion telemetry feedback ingestion',
      ],
      techStack: ['Python', 'LLM Prompt Engineering', 'Google Ads API', 'SQL', 'FastAPI'],
      metrics: [
        { label: 'Ad CTR Uplift', value: '+34%' },
        { label: 'Copy Generated', value: '45k+' },
        { label: 'SEO Rank Gains', value: '+62%' },
      ],
    },
    {
      id: 'hybrid-search-rag',
      title: 'Hybrid Search RAG Application',
      subtitle: 'Enterprise document intelligence assistant using vector database retrieval and exact citation mapping.',
      tag: 'Enterprise RAG Architecture',
      gradient: 'from-[#320808]/90 via-[#1A0303]/85 to-[#0A0101]/95 border-red-600/40 hover:border-red-500/70',
      summary: 'Production knowledge retrieval system synthesizing dense vector embeddings with sparse BM25 keyword matching for high-precision document Q&A.',
      challenge: 'Handling complex corporate PDFs containing dense tabular data, multi-column layouts, and strict regulatory requirements for verified source citations.',
      solution: 'Developed a hybrid retriever architecture combining ChromaDB dense embeddings with lexical re-ranking (Cross-Encoders) and exact page/chunk provenance attribution.',
      architecture: [
        'Hybrid dense (embeddings) + sparse (BM25) retriever',
        'Cross-encoder re-ranking for top-k contextual precision',
        'Document layout parsing for tables & structured text',
        'Zero-hallucination citation verification engine',
      ],
      techStack: ['ChromaDB', 'PyTorch', 'LangChain', 'FastAPI', 'PostgreSQL', 'Docker'],
      metrics: [
        { label: 'Citation Accuracy', value: '99.4%' },
        { label: 'Retrieval Speed', value: '180ms' },
        { label: 'Documents Indexed', value: '1.2M+' },
      ],
    },
    {
      id: 'beesure-analyzer',
      title: 'BeeSure AI Business Analyzer',
      subtitle: 'Business intelligence tool designed to process financial, operational, and performance metrics automatically.',
      tag: 'Autonomous Business Intelligence',
      gradient: 'from-[#2D0909]/90 via-[#170404]/85 to-[#090202]/95 border-red-600/40 hover:border-red-500/70',
      summary: 'Automated executive insight engine converting raw financial spreadsheets and operational metrics into actionable executive memos and anomaly alerts.',
      challenge: 'Extracting strategic synthesis from non-standard financial ledgers without numeric calculation hallucinations or mathematical inaccuracies.',
      solution: 'Separated analytical computation from narrative generation via tool-augmented code execution sandboxes, allowing LLMs to write and execute verified Python analysis scripts on data.',
      architecture: [
        'Tool-calling code interpreter sandbox for exact calculations',
        'Financial time-series anomaly detection algorithms',
        'Automated executive PDF/Slack memo generation',
        'Role-based multi-tenant security & data encryption',
      ],
      techStack: ['Python', 'SQL', 'FastAPI', 'Pandas', 'LLM Function Calling', 'PostgreSQL'],
      metrics: [
        { label: 'Report Generation', value: '< 15 sec' },
        { label: 'Calculation Accuracy', value: '100%' },
        { label: 'Weekly Hours Saved', value: '25 hrs' },
      ],
    },
  ];

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-white/10 bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[550px] h-[550px] bg-orange-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Selected Engineering Portfolio
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] heading-pop leading-tight">
              Featured AI Applications &{' '}
              <span className="font-serif-italic italic accent-glow">
                Agentic Systems
              </span>
            </h2>
            <p className="mt-4 text-[#E0E0E0] text-sm sm:text-base leading-relaxed font-light">
              Production architectures engineered for measurable enterprise impact, multi-agent reasoning, and zero-hallucination accuracy.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 shrink-0">
            6 Flagship Systems · Deployed & Verified
          </div>
        </div>

        {/* Projects Grid: 6 cards in a clean 3-column desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className={`group relative rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between bg-gradient-to-br ${proj.gradient} shadow-[0_8px_32px_rgba(220,38,38,0.12)] hover:shadow-[0_12px_40px_rgba(239,68,68,0.25)] hover:-translate-y-1.5`}
            >
              <div>
                {/* Top Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold text-red-400 uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                    {proj.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-red-100 transition-colors">
                  {proj.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6 min-h-[60px]">
                  {proj.subtitle}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-black/50 border border-white/5 mb-6 text-center">
                  {proj.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-base sm:text-lg font-bold text-white tracking-tight">{m.value}</div>
                      <div className="text-[10px] text-neutral-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {proj.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-neutral-400">
                      +{proj.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-gradient-to-r hover:from-[#FF3B00] hover:to-[#FF2500] hover:text-white border border-white/15 text-white font-medium text-xs tracking-tight transition-all duration-200 flex items-center justify-between group/btn cursor-pointer shadow-sm"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
