import React from 'react';
import { Globe, ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';
import { PartnerLogos } from './PartnerLogos';

interface HeroProps {
  onOpenGetStarted: () => void;
  onOpenDemo: () => void;
  onOpenExplore: () => void;
  onOpenStatDetail: (stat: 'projects' | 'satisfaction') => void;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenGetStarted,
  onOpenDemo,
  onOpenExplore,
  onOpenStatDetail,
  onScrollDown,
}) => {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex flex-col justify-between px-6 sm:px-10 lg:px-14 pb-8 pt-2">
      {/* Main Hero Container */}
      <div className="max-w-[1440px] w-full mx-auto flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Top Feature Tag: Wireframe Globe + Text */}
          <div className="flex items-center gap-3.5 mb-8 text-left select-none">
            <div className="text-white/80 shrink-0">
              <Globe size={26} strokeWidth={1.2} />
            </div>
            <div className="h-7 w-[1px] bg-white/20" />
            <div className="flex flex-col text-left">
              <span className="text-xs md:text-sm font-medium text-white tracking-normal leading-tight">
                Full custom experience
              </span>
              <span className="text-[11px] md:text-xs text-neutral-400 font-normal leading-tight mt-0.5">
                Powerful insights
              </span>
            </div>
          </div>

          {/* Primary Massive Headline */}
          <h1 className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[5.8rem] font-normal leading-[1.04] tracking-[-0.035em] heading-pop">
            <span className="block">Technology</span>
            <span className="block">Crafted for All</span>
            <span className="block">
              Not{' '}
              <span className="font-serif-italic font-normal tracking-tight accent-glow">
                Machines
              </span>
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="mt-6 text-[#E0E0E0] text-base md:text-[1.125rem] leading-relaxed max-w-xl font-light drop-shadow-md">
            We create clear, intuitive, and accessible digital experiences shaped by real human behavior.
          </p>

          {/* CTA & Social Proof Row */}
          <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
            {/* Primary Get Started Button */}
            <button
              onClick={onOpenGetStarted}
              className="group inline-flex items-center gap-3.5 bg-gradient-to-r from-[#FF3B00] to-[#FF2D00] hover:from-[#FF4810] hover:to-[#FF3608] pl-7 pr-2.5 py-2.5 rounded-full shadow-[0_4px_28px_rgba(255,59,0,0.38)] hover:shadow-[0_6px_34px_rgba(255,59,0,0.5)] transition-all duration-300 cursor-pointer active:scale-98"
            >
              <span className="text-white font-medium text-base tracking-tight">
                Get started
              </span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-md group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowRight size={18} strokeWidth={2.4} />
              </div>
            </button>

            {/* Social Proof (Avatars + Text) */}
            <div className="flex items-center gap-3">
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-2">
                {/* Avatar 1 */}
                <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-neutral-900 shrink-0 shadow">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <radialGradient id="av1-bg" cx="70%" cy="30%" r="80%">
                        <stop offset="0%" stopColor="#FFA24C" />
                        <stop offset="60%" stopColor="#4A1E05" />
                        <stop offset="100%" stopColor="#1A0A02" />
                      </radialGradient>
                      <linearGradient id="av1-face" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#E29D72" />
                        <stop offset="100%" stopColor="#8A4A28" />
                      </linearGradient>
                    </defs>
                    <rect width="40" height="40" fill="url(#av1-bg)" />
                    <circle cx="20" cy="16" r="7.5" fill="url(#av1-face)" />
                    <path d="M12 15 C12 8, 28 8, 28 15 C26 12, 14 12, 12 15 Z" fill="#24140E" />
                    <ellipse cx="20" cy="33" rx="12" ry="9" fill="#D96825" />
                    <path d="M25 10 A7.5 7.5 0 0 1 27 19" stroke="#FFD28A" strokeWidth="1.5" fill="none" opacity="0.8" />
                  </svg>
                </div>

                {/* Avatar 2 */}
                <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-neutral-900 shrink-0 shadow">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <radialGradient id="av2-bg" cx="30%" cy="30%" r="80%">
                        <stop offset="0%" stopColor="#3C2A3A" />
                        <stop offset="100%" stopColor="#0F0914" />
                      </radialGradient>
                      <linearGradient id="av2-face" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#BD856D" />
                        <stop offset="100%" stopColor="#5A3A30" />
                      </linearGradient>
                    </defs>
                    <rect width="40" height="40" fill="url(#av2-bg)" />
                    <circle cx="20" cy="16" r="7" fill="url(#av2-face)" />
                    <path d="M13 14 C13 9, 27 9, 27 14 C25 11, 15 11, 13 14 Z" fill="#151214" />
                    <ellipse cx="20" cy="33" rx="12" ry="9" fill="#1E2333" />
                    <path d="M14 14 A7 7 0 0 1 15 21" stroke="#FF7E55" strokeWidth="1.2" fill="none" opacity="0.7" />
                  </svg>
                </div>

                {/* Avatar 3 */}
                <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-neutral-900 shrink-0 shadow">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <defs>
                      <radialGradient id="av3-bg" cx="70%" cy="30%" r="80%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="60%" stopColor="#0A3C4A" />
                        <stop offset="100%" stopColor="#02141C" />
                      </radialGradient>
                      <linearGradient id="av3-face" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#D4A373" />
                        <stop offset="100%" stopColor="#7E4D30" />
                      </linearGradient>
                    </defs>
                    <rect width="40" height="40" fill="url(#av3-bg)" />
                    <circle cx="20" cy="16" r="7.5" fill="url(#av3-face)" />
                    <path d="M12 14 C13 7, 27 7, 28 14 C26 10, 14 10, 12 14 Z" fill="#2E1B10" />
                    <ellipse cx="20" cy="33" rx="12" ry="9" fill="#00B4D8" />
                    <path d="M26 12 A7.5 7.5 0 0 1 27.5 20" stroke="#70F3FF" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>

              {/* People Chose Copy */}
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-white tracking-tight leading-tight">
                  520k+ People Chose
                </span>
                <span className="text-[11px] text-neutral-400 font-normal leading-tight mt-0.5">
                  Our Product
                </span>
              </div>
            </div>
          </div>

          {/* Two Stat Cards (10+ Projects Completed & 98% Client Satisfaction) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Card 1: 10+ Projects Completed */}
            <button
              onClick={() => onOpenStatDetail('projects')}
              className="text-left w-44 sm:w-48 h-28 sm:h-30 p-4 sm:p-5 rounded-2xl border border-amber-600/40 bg-gradient-to-br from-[#2D1606]/90 via-[#1C0D03]/85 to-[#0F0702]/95 hover:border-amber-500/70 hover:scale-[1.02] shadow-[0_4px_24px_rgba(217,119,6,0.12)] transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-start justify-between w-full">
                <span className="text-3xl sm:text-[2.25rem] font-normal tracking-tight text-white leading-none">
                  10+
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
              <span className="text-xs text-neutral-300 font-normal leading-tight">
                Projects Completed
              </span>
            </button>

            {/* Card 2: 98% Client Satisfaction */}
            <button
              onClick={() => onOpenStatDetail('satisfaction')}
              className="text-left w-44 sm:w-48 h-28 sm:h-30 p-4 sm:p-5 rounded-2xl border border-red-600/40 bg-gradient-to-br from-[#2E0808]/90 via-[#1C0404]/85 to-[#0F0202]/95 hover:border-red-500/70 hover:scale-[1.02] shadow-[0_4px_24px_rgba(220,38,38,0.12)] transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-start justify-between w-full">
                <span className="text-3xl sm:text-[2.25rem] font-normal tracking-tight text-white leading-none">
                  98%
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>
              <span className="text-xs text-neutral-300 font-normal leading-tight">
                Client Satisfaction
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Explore Control, Partners, Scroll Down */}
      <div className="max-w-[1440px] w-full mx-auto mt-12 pt-4 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
        {/* Bottom Left: EXPLORE | Learn Details -> */}
        <div className="flex items-center">
          <div className="border border-white/20 bg-neutral-950/60 backdrop-blur-md rounded-full px-5 py-2.5 inline-flex items-center gap-4 shadow-lg">
            <button
              onClick={onOpenExplore}
              className="text-[11px] font-bold tracking-widest text-white hover:text-orange-400 transition-colors uppercase cursor-pointer"
            >
              EXPLORE
            </button>
            <div className="w-[1px] h-3.5 bg-white/25" />
            <button
              onClick={onOpenExplore}
              className="text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Learn Details</span>
              <ArrowRight size={13} className="text-neutral-300 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Center / Partners Logos */}
        <div className="w-full lg:w-auto flex-1 flex justify-center lg:justify-center px-0 lg:px-8">
          <PartnerLogos />
        </div>

        {/* Bottom Right: Scroll Down with Arrow Circle */}
        <div className="hidden sm:flex items-center gap-3 shrink-0 self-end">
          <span className="text-xs text-white font-medium tracking-tight">Scroll Down</span>
          <button
            onClick={onScrollDown}
            aria-label="Scroll to details"
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all hover:translate-y-0.5 cursor-pointer shadow-md active:scale-95"
          >
            <ArrowDown size={15} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
};
