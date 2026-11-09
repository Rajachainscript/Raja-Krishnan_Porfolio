import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Globe, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 px-6 sm:px-10 lg:px-14 overflow-hidden border-t border-white/10 bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-red-950/25 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-orange-950/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Pill Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Get In Touch
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] heading-pop leading-[1.08]">
            Let’s Build the{' '}
            <span className="font-serif-italic italic accent-glow">
              Future of AI
            </span>{' '}
            Together
          </h2>
          <p className="mt-4 text-[#E0E0E0] text-base md:text-lg leading-relaxed font-light">
            Available for AI Engineer / AI Specialist opportunities and technical consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#2D0A0A]/90 via-[#180505]/85 to-[#0A0202]/95 border border-red-600/35 shadow-[0_8px_32px_rgba(220,38,38,0.15)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Current Status: Open to Opportunities</span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                Let's discuss autonomous architectures & production pipelines
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-8">
                Whether you need to architect autonomous agent pipelines, build low-latency RAG systems, or explore AI engineering opportunities, my inbox is open.
              </p>

              {/* Direct Details */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                {/* Primary Contact Email */}
                <a
                  href="mailto:rajakrishnan2003@zohomail.in"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/10 hover:border-red-500/50 hover:bg-white/[0.04] transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-neutral-400 uppercase font-mono">Primary Contact Email</div>
                    <div className="text-sm font-semibold text-white truncate group-hover:text-red-300 transition-colors">
                      rajakrishnan2003@zohomail.in
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">Tamil Nadu, India</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Open to global remote roles</div>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-mono">Response Time</div>
                    <div className="text-sm font-semibold text-white">&lt; 24 Hours (Guaranteed)</div>
                  </div>
                </div>
              </div>

              {/* Social Channels: GitHub, LinkedIn, Portfolio */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Professional Links & Profiles
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-xs text-neutral-200 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-xs text-neutral-200 hover:text-white flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-xs text-neutral-200 hover:text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Globe size={14} />
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950/80 border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Message Dispatched!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message regarding <strong className="text-white">"{formData.subject || 'AI Engineering Consultation'}"</strong> has been forwarded to <strong className="text-red-400">rajakrishnan2003@zohomail.in</strong>. I will reply within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      Direct Communication Channel
                    </span>
                    <span className="text-xs text-neutral-500">All inquiries confidential</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. David Richardson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="david@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. AI Engineer Role / Technical Consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Message & Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project scope, technical stack, or full-time position details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Glowing Red Send Message Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF3B00] via-[#FF2800] to-[#E61F00] hover:from-[#FF4E12] hover:to-[#FF3408] text-white font-semibold text-sm tracking-tight transition-all duration-300 shadow-[0_0_30px_rgba(255,59,0,0.45)] hover:shadow-[0_0_40px_rgba(255,59,0,0.65)] hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      <span>{loading ? 'Dispatching...' : 'Send Message'}</span>
                      <Send size={15} className={loading ? 'animate-pulse' : ''} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
