'use client'
import { useState } from 'react'
import { Section } from '@/app/page'

interface SidebarProps {
  activeSection: Section
  onSelect: (s: Section) => void
}

const files: { section: Section; name: string; icon: string; ext: string; color: string }[] = [
  { section: 'intro', name: 'Terminal', icon: '⚡', ext: '.sh', color: '#00d4ff' },
  { section: 'about', name: 'About', icon: '👤', ext: '.tsx', color: '#61dafb' },
  { section: 'projects', name: 'Projects', icon: '📁', ext: '.ts', color: '#fbbf24' },
  { section: 'skills', name: 'Skills', icon: '{}', ext: '.json', color: '#a5f3a5' },
  { section: 'education', name: 'Education', icon: '🎓', ext: '.tsx', color: '#818cf8' },
  { section: 'contact', name: 'Contact', icon: '✉', ext: '.tsx', color: '#f472b6' },
]

export default function Sidebar({ activeSection, onSelect }: SidebarProps) {
  const [explorerOpen, setExplorerOpen] = useState(true)

  return (
    <div className="w-56 flex flex-col border-r border-[#1e2d40] bg-[#0d1321] shrink-0 overflow-hidden">
      {/* Explorer header */}
      <div className="px-3 py-2 text-[10px] font-semibold text-[#475569] uppercase tracking-widest border-b border-[#1e2d40] flex items-center justify-between">
        <span>Explorer</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="cursor-pointer hover:text-[#94a3b8]">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>

      {/* Workspace folder */}
      <div
        className="flex items-center gap-1 px-2 py-1.5 text-[11px] text-[#94a3b8] cursor-pointer hover:bg-white/5 select-none"
        onClick={() => setExplorerOpen(v => !v)}
      >
        <span className="text-[#475569]">{explorerOpen ? '▾' : '▸'}</span>
        <span className="text-[#00d4ff] opacity-70">📂</span>
        <span className="font-semibold text-[#94a3b8]">SHARJIL-PORTFOLIO</span>
      </div>

      {/* src folder */}
      {explorerOpen && (
        <div>
          <div className="flex items-center gap-1 px-4 py-1 text-[11px] text-[#475569] select-none">
            <span>▾</span>
            <span>📂</span>
            <span>src</span>
          </div>

          {/* Files */}
          <div className="ml-1">
            {files.map((file) => (
              <div
                key={file.section}
                onClick={() => onSelect(file.section)}
                className={`file-item flex items-center gap-2 px-6 py-1.5 text-[12px] cursor-pointer select-none transition-all ${
                  activeSection === file.section ? 'active' : ''
                }`}
              >
                <span className="text-[11px]" style={{ color: file.color }}>
                  {file.ext === '.json' ? '{}' : file.ext === '.sh' ? '⚡' : file.ext === '.tsx' ? '⚛' : '◈'}
                </span>
                <span className={activeSection === file.section ? 'text-[#00d4ff]' : 'text-[#94a3b8]'}>
                  {file.name}
                  <span style={{ color: file.color }} className="opacity-60">{file.ext}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-3 my-2 border-t border-[#1e2d40]" />

          {/* Config files */}
          <div className="px-4 pb-1">
            {['package.json', 'tsconfig.json', '.env.local'].map((f) => (
              <div key={f} className="flex items-center gap-2 py-1 text-[11px] text-[#334155] cursor-default select-none">
                <span className="text-[#1e2d40]">◇</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom - git/stats */}
      <div className="mt-auto border-t border-[#1e2d40] p-3 space-y-1.5">
        <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-2">Source Control</div>
        <div className="flex items-center gap-2 text-[11px] text-[#475569]">
          <span className="text-[#28c840]">M</span>
          <span>14 repositories</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#475569]">
          <span className="text-[#00d4ff]">⎇</span>
          <span>main</span>
        </div>
        <a
          href="https://github.com/MRGDFK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] text-[#475569] hover:text-[#00d4ff] transition-colors mt-1"
        >
          <span>⬡</span>
          <span>github/MRGDFK</span>
        </a>
      </div>
    </div>
  )
}
