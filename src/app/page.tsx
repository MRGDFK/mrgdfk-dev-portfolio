'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import MainPanel from '@/components/MainPanel'
import StatusBar from '@/components/StatusBar'
import TitleBar from '@/components/TitleBar'

export type Section = 'intro' | 'about' | 'projects' | 'skills' | 'education' | 'contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('intro')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Auto-open sidebar on md+ screens, close on mobile
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setSidebarOpen(mq.matches)
    const handler = (e: MediaQueryListEvent) => setSidebarOpen(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Listen for navigate events dispatched from TerminalHero quick links
  useEffect(() => {
    const handler = (e: Event) => {
      const section = (e as CustomEvent).detail as Section
      setActiveSection(section)
    }
    window.addEventListener('navigate', handler)
    return () => window.removeEventListener('navigate', handler)
  }, [])

  const handleSelect = (s: Section) => {
    setActiveSection(s)
    if (window.innerWidth < 768) setSidebarOpen(false)
  }

  return (
    <div className="h-screen flex flex-col bg-[#0a0e1a] overflow-hidden blueprint-grid">
      <TitleBar
        activeSection={activeSection}
        onToggleSidebar={() => setSidebarOpen(v => !v)}
      />
      <div className="flex flex-1 overflow-hidden relative">
        {/* Backdrop — mobile only, closes sidebar on tap */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-20 bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — fixed overlay on mobile, inline on md+ */}
        {sidebarOpen && (
          <div className="fixed top-9 left-0 bottom-6 z-30 md:relative md:top-auto md:bottom-auto md:z-auto flex">
            <Sidebar
              activeSection={activeSection}
              onSelect={handleSelect}
            />
          </div>
        )}

        <MainPanel
          activeSection={activeSection}
          onSelect={setActiveSection}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(v => !v)}
        />
      </div>
      <StatusBar activeSection={activeSection} />
    </div>
  )
}
