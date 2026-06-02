'use client'
import { useEffect, useState } from 'react'
import { Section } from '@/app/page'
import TerminalHero from './sections/TerminalHero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'

interface MainPanelProps {
  activeSection: Section
  onSelect: (s: Section) => void
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

const tabs: { section: Section; label: string; shortLabel: string; color: string }[] = [
  { section: 'intro',     label: 'Terminal.sh',   shortLabel: 'Terminal',  color: '#00d4ff' },
  { section: 'about',     label: 'About.tsx',     shortLabel: 'About',     color: '#61dafb' },
  { section: 'projects',  label: 'Projects.ts',   shortLabel: 'Projects',  color: '#fbbf24' },
  { section: 'skills',    label: 'Skills.json',   shortLabel: 'Skills',    color: '#a5f3a5' },
  { section: 'education', label: 'Education.tsx', shortLabel: 'Edu',       color: '#818cf8' },
  { section: 'contact',   label: 'Contact.tsx',   shortLabel: 'Contact',   color: '#f472b6' },
]

export default function MainPanel({ activeSection, onSelect, sidebarOpen, onToggleSidebar }: MainPanelProps) {
  const [displaySection, setDisplaySection] = useState(activeSection)
  const [contentVisible, setContentVisible] = useState(true)

  useEffect(() => {
    if (activeSection === displaySection) return
    setContentVisible(false)
    const t = setTimeout(() => {
      setDisplaySection(activeSection)
      setContentVisible(true)
    }, 180)
    return () => clearTimeout(t)
  }, [activeSection])

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#0a0e1a]">
      {/* Tab bar — horizontally scrollable, no scrollbar */}
      <div className="flex items-center border-b border-[#1e2d40] bg-[#0d1321] overflow-x-auto scrollbar-none shrink-0">
        {/* Sidebar toggle */}
        <button
          onClick={onToggleSidebar}
          className="px-3 h-9 text-[#475569] hover:text-[#94a3b8] border-r border-[#1e2d40] shrink-0 transition-colors"
          title="Toggle sidebar"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M9 3v18"/>
          </svg>
        </button>

        {tabs.map((tab) => (
          <button
            key={tab.section}
            onClick={() => onSelect(tab.section)}
            className={`flex items-center gap-1.5 px-3 md:px-4 h-9 text-[12px] whitespace-nowrap shrink-0 transition-all duration-200 border-b-2 ${
              activeSection === tab.section
                ? 'border-[#00d4ff] bg-[#0a0e1a] text-[#e2e8f0]'
                : 'border-transparent text-[#475569] hover:text-[#94a3b8] hover:bg-white/[0.02]'
            }`}
          >
            <span
              className="text-[10px] transition-colors duration-200"
              style={{ color: activeSection === tab.section ? tab.color : '#334155' }}
            >
              ●
            </span>
            <span className="md:hidden">{tab.shortLabel}</span>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Breadcrumb — hidden on mobile */}
      <div className="hidden md:flex items-center gap-1 px-4 py-1.5 text-[11px] text-[#334155] border-b border-[#0f1a27] bg-[#080c16] select-none">
        <span>sharjil</span>
        <span>›</span>
        <span>portfolio</span>
        <span>›</span>
        <span>src</span>
        <span>›</span>
        <span className="text-[#475569]">{tabs.find(t => t.section === displaySection)?.label}</span>
      </div>

      {/* Content */}
      <div
        className="flex-1 overflow-y-auto blueprint-grid-fine"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.18s ease, transform 0.18s ease',
        }}
      >
        <div key={displaySection} className="animate-fade-in min-h-full">
          {displaySection === 'intro' && <TerminalHero />}
          {displaySection === 'about' && <About />}
          {displaySection === 'projects' && <Projects />}
          {displaySection === 'skills' && <Skills />}
          {displaySection === 'education' && <Education />}
          {displaySection === 'contact' && <Contact />}
        </div>
      </div>
    </div>
  )
}
