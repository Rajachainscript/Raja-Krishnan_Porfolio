import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  Terminal, 
  Sparkles,
  Bot,
  Zap,
  Globe2,
  Workflow
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: 'AI Specialist',
      company: 'Monarch Global Group',
      duration: 'July 2025 – August 2026 | 1 Year',
      location: 'International UK Collaborations',
      badge: 'Full-Time Role',
      badgeColor: 'bg-red-500/15 border-red-500/30 text-red-400',
      highlights: [
        'Architected and deployed production-grade LLM applications and autonomous AI agent pipelines.',
        'Collaborated directly with UK clients on technical requirements and AI integration.',
        'Built asynchronous background processing pipelines and enterprise vector search systems.',
      ],
      techStack: ['LangGraph', 'LangChain', 'FastAPI', 'Multi-Agent', 'ChromaDB', 'PostgreSQL', 'Docker', 'Redis'],
    },
    {
      role: 'AI Python Developer Intern',
      company: 'Chainscript Technologies',
      duration: 'January 2025 – June 2025 | Tamil Nadu, India',
      location: 'Tamil Nadu, India',
      badge: 'Internship',
      badgeColor: 'bg-orange-500/15 border-orange-500/30 text-orange-400',
      highlights: [
        'Developed custom AI applications and REST APIs using Python and Flask.',
        'Built interactive chatbots with NLP intent recognition and integrated Hugging Face models for sentiment analysis.',
        'Embedded machine learning models into live application workflows, conducted debugging/testing, and built AI automation & analytics dashboards alongside backend teams.',
      ],
      techStack: ['Python', 'Flask', 'Hugging Face', 'NLP', 'Scikit-learn', 'PyTorch', 'REST APIs', 'SQL'],
    },
  ];

  return (
    <section id="experience" className="relative scroll-mt-24 py-24 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-white/10 bg-transparent">
      {/* Background neon crimson glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-950/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Work History & Professional Trajectory
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] heading-pop leading-tight">
            Professional Experience &{' '}
            <span className="font-serif-italic italic accent-glow">
              Impact
            </span>
          </h2>
          <p className="mt-4 text-[#E0E0E0] text-sm sm:text-base leading-relaxed font-light">
            Delivering mission-critical autonomous intelligence and custom AI systems across enterprise roles and high-impact internships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Modern Vertical Timeline with Both Roles */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative pl-8 sm:pl-10 border-l border-red-600/30 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)] flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-red-500 animate-ping' : 'bg-red-500'}`} />
                  </div>

                  {/* Timeline Card */}
                  <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#2D0B0B]/85 via-[#180505]/80 to-[#0A0202]/95 border border-red-600/35 hover:border-red-500/60 shadow-[0_8px_30px_rgba(220,38,38,0.12)] transition-all duration-300 hover:-translate-y-1">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider mb-2 ${exp.badgeColor}`}>
                          <Briefcase size={12} />
                          <span>{exp.badge}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-300 mt-1 font-medium">
                          <Building2 size={15} className="text-red-400" />
                          <span className="text-white">{exp.company}</span>
                          <span className="text-neutral-500">·</span>
                          <div className="flex items-center gap-1 text-xs text-neutral-400">
                            <MapPin size={12} className="text-orange-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs text-neutral-300 shrink-0">
                        <Calendar size={13} className="text-orange-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Achievements / Highlights List */}
                    <div className="space-y-3.5 mt-6 pt-6 border-t border-white/10">
                      <div className="text-xs font-semibold uppercase tracking-wider text-red-400">
                        Key Responsibilities & Deliverables
                      </div>

                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3.5">
                          <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={13} />
                          </div>
                          <p className="text-xs sm:text-sm text-[#E0E0E0] leading-relaxed font-light">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-neutral-300 hover:text-white hover:border-red-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Highlights & Principles */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#2D0A0A]/90 via-[#190505]/85 to-[#0A0202]/95 border border-red-600/35 shadow-[0_8px_30px_rgba(220,38,38,0.15)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
                <Sparkles size={14} />
                <span>Engineering Capabilities</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-3">
                Production-Ready AI Delivery
              </h4>
              <p className="text-xs text-[#E0E0E0] leading-relaxed font-light mb-6">
                Direct client delivery with foreign enterprise partners, bridging frontier generative models with high-throughput asynchronous execution.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">UK Client Delivery</div>
                    <div className="text-[11px] text-neutral-400">Direct technical scoping & requirements integration</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Workflow size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Multi-Agent Systems</div>
                    <div className="text-[11px] text-neutral-400">LangGraph state graphs with supervisor patterns</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Sub-100ms Latency</div>
                    <div className="text-[11px] text-neutral-400">Asynchronous pipelines & vector caching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
