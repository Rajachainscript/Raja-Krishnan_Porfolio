import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { DemoModal, DetailModal } from './components/Modals';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoTitle, setDemoTitle] = useState('Book a Demo');
  const [detailType, setDetailType] = useState<'projects' | 'satisfaction' | 'explore' | null>(null);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy handled
      });
    }
  }, []);

  const showToast = (msg: string) => {
    setActiveToast(msg);
    setTimeout(() => setActiveToast(null), 3000);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      showToast(`Navigating to ${sectionId}...`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-[#FF4415] selection:text-white flex flex-col font-sans relative">
      {/* Toast Notification */}
      {activeToast && (
        <div className="fixed top-6 right-6 z-50 px-4 py-2.5 rounded-full bg-neutral-900 border border-orange-500/30 text-white text-xs shadow-xl animate-in fade-in slide-in-from-top-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span>{activeToast}</span>
        </div>
      )}

      {/* 1. Fixed Video Layer (stationary across all sections and pages) */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/sxhnrvfs/video/upload/v1794204877/kling_20260516_Image_to_Video__4121_0.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -2,
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />

      {/* 2. Global Overlay Layer (semi-transparent dark red/black gradient with multiply blend) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          background: 'linear-gradient(180deg, rgba(20, 5, 5, 0.75) 0%, rgba(10, 0, 0, 0.85) 100%)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      {/* 3. Content Layer (All text, cards, UI elements, and navigation menu scroll over stationary background) */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Top Navigation */}
        <Header
          onOpenDemo={() => {
            setDemoTitle('Book a Demo');
            setDemoOpen(true);
          }}
          onOpenGetStarted={() => {
            setDemoTitle('Get Started');
            setDemoOpen(true);
          }}
          onNavigateSection={handleNavigateSection}
        />

        {/* Hero Section */}
        <Hero
          onOpenGetStarted={() => {
            setDemoTitle('Get Started');
            setDemoOpen(true);
          }}
          onOpenDemo={() => {
            setDemoTitle('Book a Demo');
            setDemoOpen(true);
          }}
          onOpenExplore={() => setDetailType('explore')}
          onOpenStatDetail={(stat) => setDetailType(stat)}
          onScrollDown={() => handleNavigateSection('about')}
        />

        {/* About Me & Technical Skills Section */}
        <AboutSection />

        {/* Experience Section with Timeline */}
        <ExperienceSection />

        {/* Dedicated Education & Certifications Section */}
        <EducationSection />

        {/* Featured Projects Section with Interactive Case Study Modals */}
        <ProjectsSection onOpenContact={() => handleNavigateSection('contact')} />

        {/* Contact Section with Interactive Form & Direct Details */}
        <ContactSection />

        {/* Elegant Dark Luxury Footer */}
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-12 px-6 sm:px-10 lg:px-14">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-sm font-semibold text-white tracking-tight heading-pop">AI Engineer & Specialist Portfolio</span>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <span className="text-xs text-[#E0E0E0]">Tamil Nadu, India · rajakrishnan2003@zohomail.in</span>
            </div>

            <div className="flex items-center gap-5 sm:gap-6 text-xs text-[#E0E0E0]">
              <button onClick={() => handleNavigateSection('about')} className="hover:text-white transition-colors cursor-pointer">
                About
              </button>
              <button onClick={() => handleNavigateSection('experience')} className="hover:text-white transition-colors cursor-pointer">
                Experience
              </button>
              <button onClick={() => handleNavigateSection('education')} className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                Education
              </button>
              <button onClick={() => handleNavigateSection('projects')} className="hover:text-white transition-colors cursor-pointer">
                Projects
              </button>
              <button onClick={() => handleNavigateSection('contact')} className="hover:text-white transition-colors cursor-pointer">
                Contact
              </button>
              <span className="text-neutral-700">|</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">
                Portfolio
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Interactive Modals */}
      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        title={demoTitle}
      />

      <DetailModal
        isOpen={detailType !== null}
        onClose={() => setDetailType(null)}
        type={detailType}
      />
    </div>
  );
}
