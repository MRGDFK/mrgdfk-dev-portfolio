'use client'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import MainPanel from '@/components/MainPanel'
import StatusBar from '@/components/StatusBar'
import TitleBar from '@/components/TitleBar'

export type Section = 'intro' | 'about' | 'projects' | 'skills' | 'education' | 'contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('intro')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Listen for navigate events dispatched from TerminalHero quick links
  useEffect(() => {
    const handler = (e: Event) => {
      const section = (e as CustomEvent).detail as Section
      setActiveSection(section)
    }
    window.addEventListener('navigate', handler)
    return () => window.removeEventListener('navigate', handler)
  }, [])

  return (
    <div className="h-screen flex flex-col bg-[#0a0e1a] overflow-hidden blueprint-grid">
      <TitleBar activeSection={activeSection} />
      <div className="flex flex-1 overflow-hidden">
        {sidebarOpen && (
          <Sidebar
            activeSection={activeSection}
            onSelect={setActiveSection}
          />
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
