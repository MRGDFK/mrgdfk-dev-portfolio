'use client'
import { Section } from '@/app/page'

const sectionToFile: Record<Section, string> = {
  intro: 'Terminal.sh',
  about: 'About.tsx',
  projects: 'Projects.ts',
  skills: 'Skills.json',
  education: 'Education.tsx',
  contact: 'Contact.tsx',
}

interface TitleBarProps {
  activeSection: Section
  onToggleSidebar: () => void
}

export default function TitleBar({ activeSection, onToggleSidebar }: TitleBarProps) {
  return (
    <div className="h-9 flex items-center justify-between px-4 border-b border-[#1e2d40] bg-[#080c16] select-none shrink-0">
      {/* Left: hamburger on mobile, window controls on md+ */}
      <div className="flex items-center gap-2">
        {/* Hamburger — mobile only */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden text-[#475569] hover:text-[#94a3b8] transition-colors p-0.5 -ml-0.5"
          aria-label="Toggle sidebar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        {/* Traffic lights — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] cursor-pointer transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#ffcc00] cursor-pointer transition-colors" />
          <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#00b500] cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Center — active file, hidden on mobile */}
      <div className="hidden md:flex items-center gap-2 text-[#475569] text-xs">
        <span className="text-[#00d4ff] opacity-50">~/sharjil/portfolio/</span>
        <span className="text-[#94a3b8]">{sectionToFile[activeSection]}</span>
        <span className="text-[#475569]">— IDE v2.0</span>
      </div>

      {/* Mobile center — just the filename */}
      <div className="md:hidden text-[#94a3b8] text-xs font-mono">
        {sectionToFile[activeSection]}
      </div>

      {/* Right — git branch */}
      <div className="flex items-center gap-3 text-xs text-[#475569]">
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-[#00d4ff] opacity-60">
            <path d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25z"/>
          </svg>
          <span className="hidden sm:inline">main</span>
        </span>
        <span className="text-[#28c840] text-[10px]">● <span className="hidden sm:inline">ready</span></span>
      </div>
    </div>
  )
}
