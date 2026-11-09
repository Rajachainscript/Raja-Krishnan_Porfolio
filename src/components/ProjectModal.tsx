import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, Cpu, Layers, BarChart3, ShieldCheck } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  gradient: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 p-6 sm:p-10 rounded-3xl bg-neutral-950 border border-red-500/30 text-white shadow-[0_0_50px_rgba(239,68,68,0.2)] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header Tag & Title */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <span>{project.tag}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight heading-pop mb-2">
          {project.title}
        </h2>
        <p className="text-base text-[#E0E0E0] font-light mb-8">
          {project.subtitle}
        </p>

        {/* Metrics Bar */}
        <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-black/60 border border-white/10 mb-8 text-center">
          {project.metrics.map((m, i) => (
            <div key={i}>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{m.value}</div>
              <div className="text-[11px] sm:text-xs text-neutral-400 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 text-sm text-[#E0E0E0]">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              The Engineering Challenge
            </h3>
            <p className="leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              {project.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Architectural Solution
            </h3>
            <p className="leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              {project.solution}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Core Technical Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-900/60 border border-white/5 text-xs">
                  <CheckCircle2 size={14} className="text-red-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-red-950/40 border border-red-500/20 text-xs font-mono text-red-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF3B00] to-[#FF2500] hover:from-[#FF4E12] hover:to-[#FF3408] text-white font-semibold text-xs tracking-tight shadow-lg shadow-red-600/30 flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <span>Inquire About Similar Architecture</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
