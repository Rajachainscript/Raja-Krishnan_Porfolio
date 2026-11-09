import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Calendar,
  Building,
  BookmarkCheck
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const certifications = [
    {
      institution: 'Harvard University',
      title: 'CS50: Introduction to Computer Science with Python',
      tag: 'Computer Science & Python Mastery',
      skills: ['Python Foundations', 'Object-Oriented Programming', 'Algorithms', 'Data Structures', 'Testing & Debugging'],
      link: '#',
    },
    {
      institution: 'Harvard University',
      title: 'CS50: Introduction to Artificial Intelligence with Python',
      tag: 'AI Algorithms & Machine Learning',
      skills: ['Search Algorithms', 'Knowledge Graphs', 'Probabilistic Inference', 'Machine Learning', 'Neural Networks', 'NLP'],
      link: '#',
    },
    {
      institution: 'IBM',
      title: 'Data Science Foundations & Big Data Essentials',
      tag: 'Data Science & Big Data Engineering',
      skills: ['Data Science Methodology', 'Big Data Architecture', 'Hadoop & Spark Concepts', 'Data Mining', 'Predictive Modeling'],
      link: '#',
    },
  ];

  const focusAreas = [
    'Data Analytics & Exploration',
    'Business Intelligence & Reporting',
    'Data Engineering Fundamentals',
    'Statistical Modeling & Probability',
    'Workflow Optimization & Process Mining',
  ];

  return (
    <section id="education" className="relative scroll-mt-24 py-24 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-white/10 bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-red-950/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] bg-orange-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Academic Credentials & Verified Certifications
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] heading-pop leading-tight">
            Education &{' '}
            <span className="font-serif-italic italic accent-glow">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-[#E0E0E0] text-sm sm:text-base leading-relaxed font-light">
            Formal business analytics degree paired with world-class computer science and artificial intelligence credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Block (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="p-8 sm:p-9 rounded-3xl transition-all duration-300 shadow-[0_8px_32px_rgba(255,51,51,0.12)] hover:shadow-[0_12px_40px_rgba(255,51,51,0.2)]"
              style={{
                background: 'rgba(18, 18, 22, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 51, 51, 0.25)',
              }}
            >
              {/* Header with Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                  <GraduationCap size={24} />
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 uppercase tracking-wider">
                  Degree
                </span>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2">
                Bachelor of Vocation (B.Voc) in Business Process and Data Analytics
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-neutral-300 font-medium mb-6">
                <Building size={16} className="text-orange-400 shrink-0" />
                <span className="text-white">Bharathiar University</span>
              </div>

              {/* Focus Areas */}
              <div className="pt-6 border-t border-white/10 space-y-3.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <BookmarkCheck size={14} />
                  <span>Curriculum & Specialized Focus Areas</span>
                </div>

                <div className="space-y-2.5">
                  {focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E0E0E0]">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Block (Right Column - Dedicated Interactive Cards) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400">
                <Award size={15} />
                <span>Executive & Academic Credentials</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">3 Verified Programs</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: 'rgba(18, 18, 22, 0.65)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 51, 51, 0.25)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300">
                        {cert.institution}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight mt-2 group-hover:text-red-200 transition-colors">
                        {cert.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 bg-black/40 border border-white/10 px-2.5 py-1 rounded-lg">
                      {cert.tag}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-2">
                      Mastered Competencies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-neutral-300 group-hover:border-red-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
