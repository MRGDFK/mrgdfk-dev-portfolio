'use client'
import { Section } from '@/app/page'
import { useEffect, useState } from 'react'

const sectionLines: Record<Section, number> = {
  intro: 42,
  about: 87,
  projects: 134,
  skills: 210,
  education: 95,
  contact: 58,
}

export default function StatusBar({ activeSection }: { activeSection: Section }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="statusbar h-6 flex items-center justify-between px-4 text-[11px] shrink-0 select-none">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="text-[#00d4ff] font-medium">⎇ main</span>
        </span>
        <span className="text-[#334155]">TypeScript</span>
        <span className="text-[#334155]">UTF-8</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[#334155]">
          Ln {sectionLines[activeSection]}, Col 1
        </span>
        <span className="text-[#334155]">Spaces: 2</span>
        <span className="flex items-center gap-1 text-[#334155]">
          <span className="text-[#28c840]">✓</span>
          No problems
        </span>
        <span className="text-[#334155]">{time}</span>
      </div>
    </div>
  )
}
