import React from 'react';

export const BrandLogo = () => (
  <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="shrink-0 transition-transform hover:scale-105 duration-200">
    {/* Center */}
    <rect x="12" y="12" width="12" height="12" rx="3" fill="#FF4415" />
    {/* Top */}
    <rect x="12" y="1" width="12" height="10" rx="3" fill="#FF4415" />
    {/* Bottom */}
    <rect x="12" y="25" width="12" height="10" rx="3" fill="#FF4415" />
    {/* Left */}
    <rect x="1" y="12" width="10" height="12" rx="3" fill="#FF4415" />
    {/* Right */}
    <rect x="25" y="12" width="10" height="12" rx="3" fill="#FF4415" />
  </svg>
);

export const PartnerLogos: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-2.5 text-right sm:text-left self-end lg:self-end flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#EF4444]" />
        <span>Enterprise AI, Cloud & Data Frameworks</span>
      </div>
      <div className="flex flex-wrap items-center gap-5 sm:gap-7 md:gap-8 lg:gap-9">
        {/* Python */}
        <div className="flex items-center gap-2 group cursor-pointer opacity-85 hover:opacity-100 transition-all hover:scale-105">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M11.91 2C6.98 2 7.29 4.14 7.29 4.14L7.3 6.36H12v.69H5.21S2 6.69 2 11.66c0 4.97 2.8 4.8 2.8 4.8h1.67v-2.34s-.09-2.8 2.76-2.8h4.73s2.67.04 2.67-2.6V4.6S17.3 2 11.91 2zm-1.85 1.54a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm2.03 18.46c4.93 0 4.62-2.14 4.62-2.14l-.01-2.22H12v-.69h6.79s3.21.36 3.21-4.61c0-4.97-2.8-4.8-2.8-4.8h-1.67v2.34s.09 2.8-2.76 2.8H9.98s-2.67-.04-2.67 2.6v4.12s-.47 2.6 4.92 2.6zm1.85-1.54a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"/>
          </svg>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-white font-mono">Python</span>
        </div>

        {/* PyTorch */}
        <div className="flex items-center gap-2 group cursor-pointer opacity-85 hover:opacity-100 transition-all hover:scale-105">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M12 2a9 9 0 0 0-9 9c0 3.2 1.7 6.1 4.3 7.6L12 15l4.7 3.6c2.6-1.5 4.3-4.4 4.3-7.6a9 9 0 0 0-9-9z" />
            <circle cx="16.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-white font-mono">PyTorch</span>
        </div>

        {/* AWS */}
        <div className="flex items-center gap-2 group cursor-pointer opacity-85 hover:opacity-100 transition-all hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M6.28 10.37c-.36.31-.76.54-1.2.68-.44.14-.88.21-1.32.21-.76 0-1.39-.24-1.88-.72-.49-.48-.74-1.12-.74-1.92 0-.82.26-1.47.78-1.96.52-.49 1.18-.73 1.98-.73.45 0 .89.07 1.32.21.43.14.8.36 1.12.66v-.93c0-.62-.17-1.1-.51-1.44-.34-.34-.84-.51-1.5-.51-.36 0-.74.06-1.14.18-.4.12-.79.31-1.17.57L1 3.52c.48-.34 1.01-.6 1.59-.78.58-.18 1.18-.27 1.8-.27 1.34 0 2.37.36 3.09 1.08.72.72 1.08 1.76 1.08 3.12v5.77H6.28v-2.07zm0-2.31c-.34-.28-.7-.48-1.08-.6-.38-.12-.76-.18-1.14-.18-.45 0-.81.12-1.08.36-.27.24-.4.56-.4.96 0 .39.12.7.36.93.24.23.58.35 1.02.35.43 0 .84-.08 1.23-.24.39-.16.76-.41 1.1-.75v-.87zm7.55 4.38h-2.19l-2.43-8.82h2.25l1.38 5.67 1.41-5.67h2.16l1.41 5.67 1.38-5.67h2.25l-2.43 8.82h-2.19l-1.5-5.64-1.5 5.64zm-9.35 6.06c4.68 1.89 10.23 1.44 14.7-.93.27-.14.63.03.6.33-.21 1.77-2.37 3.54-5.25 4.41-3.69 1.11-8.13.51-11.22-1.5-.24-.15-.06-.48.18-.48l.99-.03z" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-white font-mono">AWS</span>
        </div>

        {/* GCP */}
        <div className="flex items-center gap-2 group cursor-pointer opacity-85 hover:opacity-100 transition-all hover:scale-105">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-white font-mono">GCP</span>
        </div>

        {/* Docker */}
        <div className="flex items-center gap-2 group cursor-pointer opacity-85 hover:opacity-100 transition-all hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M13.98 11.08h-1.63V9.45h1.63v1.63zm-2.07 0h-1.63V9.45h1.63v1.63zm-2.07 0H8.21V9.45h1.63v1.63zm4.14-2.07h-1.63V7.38h1.63v1.63zm-2.07 0h-1.63V7.38h1.63v1.63zm-2.07 0H8.21V7.38h1.63v1.63zm4.14-2.07h-1.63V5.31h1.63v1.63zm-2.07 0h-1.63V5.31h1.63v1.63zm8.93 5.37c-.36-.24-.9-.37-1.57-.37-.22 0-.46.02-.7.06-.33-.94-1.07-1.51-2.08-1.58-.2-.01-.4-.01-.6 0V9.45H16.4v1.63h.27c.13.43.08.91-.12 1.3-.23.44-.64.74-1.12.83-.58.11-1.18.11-1.76 0H1.67c-.24.96-.3 1.94-.17 2.92.29 2.14 1.57 3.99 3.51 5.06 2.06 1.14 4.51 1.48 6.84.97 3.56-.78 6.49-3.23 7.82-6.56.76.1 1.54.02 2.25-.26.47-.19.88-.47 1.21-.83-.17-.15-.36-.29-.57-.4z" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-white font-mono">Docker</span>
        </div>

        {/* Hugging Face */}
        <div className="flex items-center gap-2 group cursor-pointer opacity-85 hover:opacity-100 transition-all hover:scale-105">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
            <path d="M4 14c1.5 1 2 3 2 3" />
            <path d="M20 14c-1.5 1-2 3-2 3" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold tracking-tight text-white font-mono">Hugging Face</span>
        </div>
      </div>
    </div>
  );
};
