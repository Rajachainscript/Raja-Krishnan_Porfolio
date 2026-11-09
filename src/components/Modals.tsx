import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Shield, Zap, Users } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const DemoModal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [date, setDate] = useState('2026-11-12');
  const [time, setTime] = useState('10:00 AM');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep open so user sees confirmation
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/15 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-semibold">Demo Session Requested!</h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto">
              Thank you, {name || 'Partner'}. Our design team has scheduled your human-centric walkthrough for {date} at {time}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              {title}
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Experience Technology Crafted for Humans</h2>
            <p className="text-xs text-neutral-400 mt-1 mb-6">
              Connect directly with our engineering team for a personalized 15-minute product tour.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena Rostova"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Work Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@enterprise.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Studio / Inc"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Preferred Time</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#FF3B00] to-[#FF2500] hover:from-[#FF4E12] hover:to-[#FF3408] text-white font-semibold text-sm transition-all shadow-lg shadow-orange-600/30 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export const DetailModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  type: 'projects' | 'satisfaction' | 'explore' | null;
}> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  const contentMap = {
    projects: {
      tag: 'Portfolio Performance',
      title: '10+ Completed Deployments',
      metric: '10+',
      color: 'from-amber-600/20 to-orange-600/10 border-amber-600/30',
      description:
        'Over 10 production-grade AI systems and autonomous applications brought to deployment across enterprise logistics, marketing SaaS, and document intelligence.',
      stats: [
        { label: 'Avg Delivery Velocity', val: '3.5 Weeks' },
        { label: 'Zero-Downtime Releases', val: '99.98%' },
        { label: 'Autonomous Agents', val: '20+ Active' },
      ],
    },
    satisfaction: {
      tag: 'Client Validation',
      title: '98% Verified Satisfaction',
      metric: '98%',
      color: 'from-red-600/20 to-rose-600/10 border-red-600/30',
      description:
        'Audited net-promoter ratings derived from long-term partnership reviews, based on usability, accessibility compliance, and design clarity.',
      stats: [
        { label: 'Long-term Retention', val: '94%' },
        { label: 'Referral Rate', val: '86%' },
        { label: 'WCAG AAA Accessibility', val: '100%' },
      ],
    },
    explore: {
      tag: 'Human Centric Framework',
      title: 'Designing for Human Reality',
      metric: 'All',
      color: 'from-neutral-800 to-neutral-900 border-white/20',
      description:
        'Technology crafted for real people, minimizing cognitive overload, removing mechanical friction, and harmonizing aesthetics with seamless engineering.',
      stats: [
        { label: 'Latency Overhead', val: '< 16ms' },
        { label: 'Behavioral Clarity', val: 'Intuitive' },
        { label: 'Cross-platform', val: 'Unified' },
      ],
    },
  };

  const item = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className={`relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${item.color} bg-neutral-900 border text-white shadow-2xl`}>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-2">{item.tag}</div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">{item.title}</h2>
        <p className="text-sm text-neutral-300 leading-relaxed mb-6">{item.description}</p>

        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 text-center">
          {item.stats.map((s, idx) => (
            <div key={idx}>
              <div className="text-lg font-bold text-white">{s.val}</div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
        >
          Close Overview
        </button>
      </div>
    </div>
  );
};
