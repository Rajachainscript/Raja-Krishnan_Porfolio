import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './PartnerLogos';

interface HeaderProps {
  onOpenDemo?: () => void;
  onOpenGetStarted?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDemo,
  onOpenGetStarted,
  onNavigateSection,
}) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Top Nav Items in requested exact order:
  // Features | About | Experience | Education & Certifications | Projects | Contact
  const navItems = [
    { label: 'About', action: () => onNavigateSection?.('about') },
    { label: 'Experience', action: () => onNavigateSection?.('experience') },
    { label: 'Education & Certifications', action: () => onNavigateSection?.('education') },
    { label: 'Projects', action: () => onNavigateSection?.('projects') },
    { label: 'Contact', action: () => onNavigateSection?.('contact') },
  ];

  return (
    <header className="relative w-full z-40 px-6 sm:px-10 lg:px-14 py-6">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <BrandLogo />
          </a>
        </div>

        {/* Center Pill Navigation Bar */}
        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 px-6 lg:px-8 py-2.5 rounded-full border border-white/15 bg-neutral-950/70 backdrop-blur-md shadow-lg"
          aria-label="Main Navigation"
        >
          {/* 1. Features Dropdown */}
          <div className="relative" ref={featuresRef}>
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-200 hover:text-white transition-colors cursor-pointer focus:outline-none"
              aria-expanded={featuresOpen}
            >
              <span>Features</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 text-neutral-400 group-hover:text-white ${
                  featuresOpen ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>

            {/* Features Dropdown Menu */}
            {featuresOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 p-2 rounded-2xl bg-neutral-900/95 border border-red-500/20 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                <div className="space-y-1">
                  {[
                    { title: 'Agentic Architectures', desc: 'LangGraph & Multi-agent pipelines', id: 'about' },
                    { title: 'Production RAG Systems', desc: 'Hybrid retrieval & vector indexing', id: 'projects' },
                    { title: 'Autonomous Workflows', desc: 'Enterprise process orchestration', id: 'experience' },
                    { title: 'LLM Fine-Tuning & Serving', desc: 'FastAPI microservices & low latency', id: 'about' },
                  ].map((feat, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setFeaturesOpen(false);
                        onNavigateSection?.(feat.id);
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-orange-400 flex items-center justify-between">
                        {feat.title}
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">{feat.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 2. Book a Demo, 3. About, 4. Experience, 5. Projects, 6. Contact */}
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.action) item.action();
              }}
              className="text-sm font-medium text-neutral-200 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA (Phone number and audio toggle removed completely, Get Started preserved) */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenGetStarted}
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all active:scale-95 cursor-pointer shadow-sm"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenGetStarted}
            className="px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-neutral-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-5 rounded-2xl border border-white/15 bg-neutral-950/95 backdrop-blur-xl space-y-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase text-neutral-400 px-2 tracking-wider">Navigation</div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection?.('about');
              }}
              className="block w-full text-left px-3 py-2 text-sm text-neutral-200 hover:text-white rounded-lg hover:bg-white/5"
            >
              Features
            </button>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.action) item.action();
                }}
                className="block w-full text-left px-3 py-2 text-sm text-neutral-200 hover:text-white rounded-lg hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted?.();
              }}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF3B00] to-[#FF2D00] text-white font-semibold text-sm text-center shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
