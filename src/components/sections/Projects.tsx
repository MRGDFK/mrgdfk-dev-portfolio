'use client'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'

interface Project {
  id: string
  filename: string
  ext: string
  title: string
  description: string
  longDesc: string
  tech: string[]
  color: string
  category: 'all' | 'web' | 'ai' | 'mobile' | 'game'
  categoryLabel: string
  status: 'completed' | 'active' | 'experiment'
  github?: string
  live?: string
  thumbnail: string
  images?: string[]
  imagePerPage?: number
  lines: string[]
}

const projects: Project[] = [
  {
    id: 'rl-card',
    filename: '29CardGame_RL',
    ext: '.py',
    title: 'Policy Development for 29 Card Game - RL Agent',
    description: 'Developing a reinforcement learning agent to master the 29 card game.',
    longDesc: 'RL experiments for the classic 29 card game. AI agents learn game strategy through curriculum-based self-play against random, rule-based, and learned opponents.',
    tech: ['Python', 'PyTorch', 'DQN', 'Self-Play', 'Curriculum Learning'],
    color: '#818cf8',
    category: 'ai',
    categoryLabel: 'ai',
    status: 'experiment',
    github: 'https://github.com/MRGDFK/reinforcement_learning_agent_for_twenty_nine_card_game',
    thumbnail: '/projects/RL 1.png',
    images: ['/projects/RL 1.png', '/projects/RL 2.png'],
    imagePerPage: 1,
    lines: [
      '# RL Agent for 29 Card Game',
      'import torch, numpy as np',
      '',
      'class CardAgent:',
      '  def __init__(self):',
      '    self.policy = DQN()',
      '    self.epsilon = 0.1',
      '',
      '  def learn(self, state, reward):',
      '    # Q-learning update',
      '    ...',
    ],
  },
  {
    id: 'urban-nest',
    filename: 'URBAN_NEST',
    ext: '.tsx',
    title: 'Urban Nest',
    description: 'Real Estate Listing Platform',
    longDesc: 'Full-stack real estate platform with property search, filtering, and detailed listings. Built with ASP.NET backend and responsive frontend.',
    tech: ['ASP.NET', 'JavaScript', 'HTML/CSS', 'SQL'],
    color: '#fbbf24',
    category: 'web',
    categoryLabel: 'web',
    status: 'completed',
    github: 'https://github.com/MRGDFK/URBAN_NEST',
    thumbnail: '/projects/UN 1.png',
    images: ['/projects/UN 1.png','/projects/UN 2.png','/projects/UN 3.png','/projects/UN 4.png','/projects/UN 5.png','/projects/UN 6.png'],
    imagePerPage: 1,
    lines: [
      '// Real Estate Listing Platform',
      'export const UrbanNest = {',
      '  type: "Full-Stack Web App",',
      '  backend: "ASP.NET",',
      '  features: [',
      '    "Property listings",',
      '    "Search & filters",',
      '    "Responsive UI",',
      '  ],',
      '}',
    ],
  },
  {
    id: 'taskzen',
    filename: 'TaskZen',
    ext: '.md',
    title: 'TaskZen',
    description: 'Android Task Management App',
    longDesc: 'Feature-rich Android task manager with task creation, categorization, reminders, and a clean Material Design UI built with Java & Kotlin.',
    tech: ['Android Studio', 'Java', 'Kotlin', 'SQLite'],
    color: '#a5f3a5',
    category: 'mobile',
    categoryLabel: 'mobile',
    status: 'completed',
    github: 'https://github.com/MRGDFK/TaskZen',
    thumbnail: '/projects/TaskZen 1.jpg',
    images: ['/projects/TaskZen 1.jpg','/projects/TaskZen 2.jpg','/projects/TaskZen 3.jpg','/projects/TaskZen 4.jpg','/projects/TaskZen 5.jpg','/projects/TaskZen 6.jpg'],
    imagePerPage: 3,
    lines: [
      '# TaskZen - Android Task Manager',
      '',
      '## Overview',
      'Mobile-first task management',
      'with clean UX and offline support.',
      '',
      '## Tech',
      '- Android Studio',
      '- Java & Kotlin',
      '- Material Design 3',
      '- SQLite local DB',
    ],
  },
  {
    id: 'shutterarc',
    filename: 'ShutterArc',
    ext: '.ts',
    title: 'ShutterArc Studios',
    description: 'Creative Agency Portfolio Website',
    longDesc: 'Fully custom portfolio and landing site for ShutterArc Studios — a creative cinematography agency. Live in production with smooth animations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    color: '#f472b6',
    category: 'web',
    categoryLabel: 'web',
    status: 'active',
    live: 'https://www.shutterarcstudios.com',
    thumbnail: '/projects/shutterarc.png',
    lines: [
      'export const ShutterArc = {',
      '  type: "Agency Website",',
      '  status: "Live in Production",',
      '  url: "shutterarcstudios.com",',
      '  role: "Full design & dev",',
      '  animations: "GSAP",',
      '}',
    ],
  },
  {
    id: 'sen-pi',
    filename: 'SEN_pi_DemonSlayer',
    ext: '.c',
    title: 'Demon Slayer Game',
    description: 'C Game Project',
    longDesc: 'A Demon Slayer themed game written in C. Features ASCII-art styled gameplay, enemy encounters, and custom game logic built from scratch.',
    tech: ['C', 'Game Logic', 'ASCII Art'],
    color: '#fb7185',
    category: 'game',
    categoryLabel: 'game',
    status: 'completed',
    github: 'https://github.com/MRGDFK/SEN_pi--Demon-Slayer',
    thumbnail: '/projects/DS 1.jpg',
    images: ['/projects/DS 1.jpg','/projects/DS 2.jpg','/projects/DS 3.jpg','/projects/DS 4.jpg','/projects/DS 5.jpg','/projects/DS 6.jpg','/projects/DS 7.jpg'],
    imagePerPage: 1,
    lines: [
      '#include <stdio.h>',
      '#include "game.h"',
      '',
      '// Demon Slayer — C Edition',
      'int main() {',
      '  init_game();',
      '  while (!game_over()) {',
      '    render_frame();',
      '    handle_input();',
      '    update_state();',
      '  }',
      '}',
    ],
  },
  {
    id: 'urban-nest-php',
    filename: 'UrbanNest',
    ext: '.php',
    title: 'Urban Nest (PHP)',
    description: 'Real Estate Platform — PHP Edition',
    longDesc: 'A PHP-powered real estate listing platform with property search, user authentication, and dynamic listings. Backend built with PHP and MySQL.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    color: '#a78bfa',
    category: 'web',
    categoryLabel: 'web',
    status: 'completed',
    github: 'https://github.com/MRGDFK/UrbanNest',
    thumbnail: '/projects/UN 1.png',
    images: ['/projects/UN 1.png','/projects/UN 2.png','/projects/UN 3.png','/projects/UN 4.png','/projects/UN 5.png','/projects/UN 6.png'],
    imagePerPage: 1,
    lines: [
      '<?php',
      '// Urban Nest — PHP Edition',
      'class PropertyListing {',
      '  public function search($query) {',
      '    return DB::select(',
      '      "SELECT * FROM listings',
      '       WHERE title LIKE ?",',
      '      ["%{$query}%"]',
      '    );',
      '  }',
      '}',
    ],
  },
]

const filters = ['all', 'web', 'ai', 'mobile', 'game'] as const
type Filter = typeof filters[number]

const statusColors = {
  completed:  { bg: 'rgba(26,46,26,0.9)',  text: '#4ade80', label: 'completed' },
  active:     { bg: 'rgba(26,31,46,0.9)',  text: '#00d4ff', label: 'live' },
  experiment: { bg: 'rgba(46,26,46,0.9)',  text: '#c084fc', label: 'experiment' },
}

const extColors: Record<string, string> = {
  '.tsx': '#61dafb', '.ts': '#3b82f6', '.py': '#fbbf24',
  '.md': '#94a3b8', '.c': '#fb7185', '.php': '#a78bfa',
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
}

// ─── Thumbnail with hover arrows ─────────────────────────────────────────────
function ProjectThumbnail({ project, tall = false }: { project: Project; tall?: boolean }) {
  const [imgError, setImgError] = useState(false)
  const [page, setPage] = useState(0)

  const images = project.images ?? []
  const perPage = project.imagePerPage ?? 1
  const totalPages = Math.ceil(images.length / perPage)
  const currentImages = images.slice(page * perPage, (page + 1) * perPage)
  const isGrid = perPage > 1

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setPage(p => (p - 1 + totalPages) % totalPages) }
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setPage(p => (p + 1) % totalPages) }

  if (images.length > 0 && !imgError) {
    return (
      <div
        className="relative w-full h-full group/thumb"
        style={{
          background: '#080c16',
          ...(isGrid ? {
            backgroundImage: `linear-gradient(${project.color}06 1px,transparent 1px),linear-gradient(90deg,${project.color}06 1px,transparent 1px)`,
            backgroundSize: '18px 18px',
          } : {}),
        }}
      >
        {/* Images */}
        {isGrid ? (
          // 3-up portrait grid
          <div className="absolute inset-0 flex items-center gap-2 px-3 py-3">
            {currentImages.map((src, i) => (
              <div key={page * perPage + i} className="relative flex-1 h-full rounded-lg overflow-hidden border border-white/10 shadow-lg">
                <img src={src} alt={`${project.title} ${page * perPage + i + 1}`}
                  className="w-full h-full object-contain"
                  onError={() => setImgError(true)} />
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-black/40 pointer-events-none" />
              </div>
            ))}
            {/* fill empty slots */}
            {currentImages.length < perPage && Array(perPage - currentImages.length).fill(0).map((_, i) => (
              <div key={`empty-${i}`} className="flex-1 h-full rounded-lg border border-white/5 opacity-20"
                style={{ background: project.color + '08' }} />
            ))}
          </div>
        ) : (
          // Single full-bleed with object-contain (no crop)
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={currentImages[0]} alt={`${project.title} ${page + 1}`}
              className="w-full h-full object-contain"
              onError={() => setImgError(true)} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.04) 3px,rgba(0,0,0,0.04) 4px)' }} />
          </div>
        )}

        {/* Arrows — hover only, FIX 2 & 3 */}
        {totalPages > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 flex items-center justify-center rounded-full bg-black/75 border border-white/20 text-white text-lg leading-none
                         opacity-0 group-hover/thumb:opacity-100 transition-all duration-200 hover:scale-110 hover:bg-black select-none">
              ‹
            </button>
            <button onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 flex items-center justify-center rounded-full bg-black/75 border border-white/20 text-white text-lg leading-none
                         opacity-0 group-hover/thumb:opacity-100 transition-all duration-200 hover:scale-110 hover:bg-black select-none">
              ›
            </button>
            {/* page counter — hover only */}
            <div className="absolute top-2 right-2 z-20 text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/65 border border-white/10
                            opacity-0 group-hover/thumb:opacity-100 transition-opacity"
              style={{ color: project.color }}>
              {page + 1}/{totalPages}
            </div>

            {/* Dot / pill indicators — always visible at bottom */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setPage(i) }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    height: 5,
                    width: page === i ? 18 : 5,
                    background: page === i ? project.color : 'rgba(255,255,255,0.25)',
                    boxShadow: page === i ? `0 0 6px ${project.color}` : 'none',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  // Single thumbnail fallback
  if (!imgError) {
    return (
      <div className="relative w-full h-full bg-[#080c16]">
        <img src={project.thumbnail} alt={project.title}
          className="w-full h-full object-contain"
          onError={() => setImgError(true)} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.06) 3px,rgba(0,0,0,0.06) 4px)' }} />
      </div>
    )
  }

  // Placeholder
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative"
      style={{ background: 'linear-gradient(135deg, #080c16, #0d1321)' }}>
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(${project.color}06 1px,transparent 1px),linear-gradient(90deg,${project.color}06 1px,transparent 1px)`,
        backgroundSize: '20px 20px',
      }} />
      <div className="relative z-10 w-4/5 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0d1321]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
          <div className="flex-1 mx-2 h-4 rounded bg-[#1e2d40] flex items-center px-2">
            <span className="text-[8px] text-[#334155] font-mono truncate">{project.live || 'github.com/MRGDFK'}</span>
          </div>
        </div>
        <div className="bg-[#080c16] p-4 space-y-2">
          <div className="h-2 rounded-full w-3/4" style={{ background: `${project.color}30` }} />
          <div className="h-2 rounded-full w-full" style={{ background: `${project.color}18` }} />
          <div className="h-2 rounded-full w-5/6" style={{ background: `${project.color}18` }} />
          {tall && <>
            <div className="h-8 rounded mt-3" style={{ background: `${project.color}12` }} />
            <div className="grid grid-cols-3 gap-1 mt-2">
              {[1,2,3].map(i => <div key={i} className="h-10 rounded" style={{ background: `${project.color}10` }} />)}
            </div>
          </>}
        </div>
      </div>
      <div className="relative z-10 mt-3 text-[9px] font-mono text-center" style={{ color: `${project.color}55` }}>
        /public/projects/{project.id}.png
      </div>
    </div>
  )
}

// ─── Card — FIX 1: h-full + fixed thumbnail height ───────────────────────────
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col h-full rounded-xl overflow-hidden border border-[#1e2d40] bg-[#0d1321] cursor-pointer transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = project.color + '55'
        e.currentTarget.style.boxShadow = `0 8px 30px ${project.color}18`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#1e2d40'
        e.currentTarget.style.boxShadow = ''
      }}
    >
      {/* Fixed-height thumbnail — never shrinks */}
      <div className="relative overflow-hidden bg-[#080c16] shrink-0" style={{ height: 200 }}>
        <ProjectThumbnail project={project} />

        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded text-[10px] font-mono font-semibold backdrop-blur-sm pointer-events-none"
          style={{ background: statusColors[project.status].bg, color: project.color, border: `1px solid ${project.color}35` }}>
          {project.categoryLabel}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-t from-[#0d1321] via-[#0d1321]/60 to-transparent pointer-events-none z-10">
          <span className="text-[10px] font-mono" style={{ color: extColors[project.ext] || '#94a3b8' }}>
            {project.filename}<span className="opacity-60">{project.ext}</span>
          </span>
        </div>

        <div className="absolute inset-0 bg-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-20">
          <div className="bg-[#0a0e1a]/90 border border-[#00d4ff]/40 rounded px-3 py-1.5 text-[11px] font-mono text-[#00d4ff] flex items-center gap-1.5 backdrop-blur-sm">
            <span>◈</span> open file
          </div>
        </div>
      </div>

      {/* Body — flex-1 so all cards stretch uniformly */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-[#e2e8f0] font-bold text-base leading-tight group-hover:text-white transition-colors">{project.title}</h3>
          <span className="shrink-0 text-[9px] px-2 py-0.5 rounded font-mono mt-0.5"
            style={{ background: statusColors[project.status].bg, color: statusColors[project.status].text }}>
            {statusColors[project.status].label}
          </span>
        </div>

        <p className="text-[#94a3b8] text-xs leading-relaxed mb-4 flex-1 line-clamp-3">{project.longDesc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-[#1e2d40] text-[#475569] bg-[#080c16] font-mono">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded border border-[#1e2d40] text-[#334155] bg-[#080c16] font-mono">+{project.tech.length - 4}</span>
          )}
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-[#1e2d40] mt-auto">
          {project.github && <span className="flex items-center gap-1.5 text-xs text-[#475569] font-mono"><GitHubIcon /> Code</span>}
          {project.live && <span className="flex items-center gap-1.5 text-xs text-[#00d4ff] font-mono"><ExternalIcon /> Live</span>}
          <span className="ml-auto text-[10px] text-[#334155] font-mono group-hover:text-[#00d4ff]/60 transition-colors">click to open →</span>
        </div>
      </div>
    </div>
  )
}

// ─── Detail view ──────────────────────────────────────────────────────────────
function ProjectDetail({ project, onClose, onNext, onPrev }: {
  project: Project; onClose: () => void; onNext: () => void; onPrev: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-0 border-b border-[#1e2d40] bg-[#0d1321]">
        <button onClick={onClose}
          className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono text-[#475569] hover:text-[#00d4ff] border-r border-[#1e2d40] transition-colors shrink-0">
          <BackIcon /> all projects
        </button>
        <div className="flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-mono border-b-2 border-[#00d4ff] text-[#e2e8f0]">
          <span className="text-[10px]" style={{ color: extColors[project.ext] }}>●</span>
          {project.filename}<span style={{ color: extColors[project.ext] }} className="opacity-60">{project.ext}</span>
        </div>
        <div className="ml-auto flex items-center gap-1 px-3">
          <button onClick={onPrev} className="px-2 py-1 text-[#475569] hover:text-[#94a3b8] transition-colors text-xs font-mono">← prev</button>
          <span className="text-[#1e2d40]">|</span>
          <button onClick={onNext} className="px-2 py-1 text-[#475569] hover:text-[#94a3b8] transition-colors text-xs font-mono">next →</button>
          <button onClick={onClose} className="ml-2 px-2 py-1 text-[#334155] hover:text-[#475569] transition-colors text-sm">✕</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-b border-[#1e2d40]" style={{ minHeight: 500 }}>
        <div className="border-r border-[#1e2d40] flex flex-col bg-[#080c16]">
          {/* FIX 4: fixed height, object-contain, consistent across all projects */}
          <div className="relative border-b border-[#1e2d40] overflow-hidden shrink-0" style={{ height: 260 }}>
            <ProjectThumbnail project={project} tall />
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-2 bg-[#0d1321]/90 backdrop-blur-sm border-b border-[#1e2d40]/60 z-20 pointer-events-none">
              <span className="text-[10px]" style={{ color: extColors[project.ext] }}>◈</span>
              <span className="text-xs text-[#475569] font-mono">{project.filename}{project.ext}</span>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="ml-auto text-[10px] font-mono text-[#00d4ff] hover:underline flex items-center gap-1 pointer-events-auto">
                  <ExternalIcon /> live preview
                </a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1e2d40] text-xs text-[#475569] bg-[#0d1321] shrink-0">
            <span className="text-[#334155]">source</span>
            <span className="ml-auto text-[#1e2d40]">{project.lines.length} lines</span>
          </div>
          <div className="p-4 font-mono text-xs leading-6 flex-1 overflow-auto">
            {project.lines.map((line, i) => (
              <div key={i} className="flex hover:bg-white/[0.015] rounded">
                <span className="w-6 text-right text-[#1e2d40] mr-4 select-none text-[10px] leading-6">{i + 1}</span>
                <span className={
                  line.startsWith('//') || line.startsWith('#') ? 'text-[#334155]' :
                  line.startsWith('export') || line.startsWith('import') || line.startsWith('class') || line.startsWith('int ') || line.startsWith('#include') ? 'text-[#c792ea]' :
                  line.includes('":') ? 'text-[#94a3b8]' :
                  line.includes('"') ? 'text-[#a5f3a5]' : 'text-[#94a3b8]'
                }>{line || '\u00A0'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-7 bg-[#0a0e1a] overflow-auto">
          <div className="flex items-start justify-between gap-3 mb-5">
            <div>
              <div className="text-[10px] font-mono text-[#334155] uppercase tracking-widest mb-1">{project.categoryLabel}</div>
              <h2 className="text-[#e2e8f0] font-bold text-2xl leading-tight">{project.title}</h2>
              <p className="text-[#475569] text-sm mt-1">{project.description}</p>
            </div>
            <span className="text-[10px] px-2.5 py-1 rounded font-mono shrink-0 mt-1"
              style={{ background: statusColors[project.status].bg, color: statusColors[project.status].text }}>
              {statusColors[project.status].label}
            </span>
          </div>

          <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{project.longDesc}</p>

          <div className="mb-6">
            <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-3 font-mono">// tech stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded border border-[#1e2d40] text-[#94a3b8] bg-[#0d1321] font-mono hover:border-[#2a3a50] transition-colors">{t}</span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-3 font-mono">// links</div>
            <div className="flex gap-3 flex-wrap">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-[#1e2d40] rounded text-[#94a3b8] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all font-mono">
                  <GitHubIcon /> GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm border border-[#00d4ff]/30 rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all font-mono">
                  <ExternalIcon /> Live Site
                </a>
              )}
            </div>
          </div>

          <div>
            <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-3 font-mono">// other projects</div>
            <div className="space-y-1">
              {projects.filter(p => p.id !== project.id).map(p => (
                <button key={p.id}
                  onClick={() => window.dispatchEvent(new CustomEvent('open-project', { detail: p.id }))}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded border border-transparent hover:border-[#1e2d40] hover:bg-[#0d1321] transition-all text-left group/item">
                  <span className="text-[10px]" style={{ color: extColors[p.ext] }}>◈</span>
                  <span className="text-xs font-mono text-[#475569] group-hover/item:text-[#94a3b8] transition-colors">
                    {p.filename}<span style={{ color: extColors[p.ext] }} className="opacity-60">{p.ext}</span>
                  </span>
                  <span className="ml-auto text-[9px] text-[#334155] group-hover/item:text-[#475569]">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [filterKey, setFilterKey] = useState(0)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)
  const selectedProject = projects.find(p => p.id === selectedId) ?? null
  const selectedIndex = projects.findIndex(p => p.id === selectedId)

  const openProject = (id: string) => {
    setIsAnimating(true)
    setTimeout(() => { setSelectedId(id); setIsAnimating(false) }, 150)
  }
  const closeProject = () => {
    setIsAnimating(true)
    setTimeout(() => { setSelectedId(null); setIsAnimating(false) }, 150)
  }
  const goNext = () => openProject(projects[(selectedIndex + 1) % projects.length].id)
  const goPrev = () => openProject(projects[(selectedIndex - 1 + projects.length) % projects.length].id)

  useEffect(() => {
    const handler = (e: Event) => openProject((e as CustomEvent).detail)
    window.addEventListener('open-project', handler)
    return () => window.removeEventListener('open-project', handler)
  }, [])

  const counts = filters.reduce((acc, f) => {
    acc[f] = f === 'all' ? projects.length : projects.filter(p => p.category === f).length
    return acc
  }, {} as Record<Filter, number>)
  const visibleFilters = filters.filter(f => counts[f] > 0)

  useLayoutEffect(() => {
    const idx = visibleFilters.indexOf(activeFilter)
    const btn = tabRefs.current[idx]
    const container = containerRef.current
    if (btn && container) {
      const cRect = container.getBoundingClientRect()
      const bRect = btn.getBoundingClientRect()
      setPillStyle({ left: bRect.left - cRect.left, width: bRect.width, opacity: 1 })
    }
  }, [activeFilter])

  const handleFilterChange = (f: Filter) => { setActiveFilter(f); setFilterKey(k => k + 1) }

  return (
    <div className="transition-opacity duration-150" style={{ opacity: isAnimating ? 0 : 1 }}>
      {selectedProject ? (
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
          <ProjectDetail project={selectedProject} onClose={closeProject} onNext={goNext} onPrev={goPrev} />
        </div>
      ) : (
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
            <div>
              <div className="text-[#475569] text-xs font-mono mb-2">// Projects.ts</div>
              <h2 className="text-[#e2e8f0] text-2xl font-bold">Featured Projects</h2>
              <p className="text-[#475569] text-sm mt-1">A selection of my work in Software Engineering and AI.</p>
            </div>
            <div ref={containerRef} className="relative flex items-center gap-1 border border-[#1e2d40] rounded-lg p-1 bg-[#0d1321]">
              <div className="absolute top-1 h-[calc(100%-8px)] rounded-md bg-[#00d4ff] pointer-events-none"
                style={{ left: pillStyle.left, width: pillStyle.width, opacity: pillStyle.opacity,
                  transition: 'left 0.25s cubic-bezier(0.16,1,0.3,1), width 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.15s ease' }} />
              {visibleFilters.map((f, idx) => (
                <button key={f} ref={el => { tabRefs.current[idx] = el }}
                  onClick={() => handleFilterChange(f)}
                  className={`relative z-10 px-3 py-1.5 text-xs font-mono rounded-md capitalize transition-colors duration-200 ${
                    activeFilter === f ? 'text-[#0a0e1a] font-semibold' : 'text-[#475569] hover:text-[#94a3b8]'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* FIX 1: items-stretch so each row's cards match height */}
          <div key={filterKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {filtered.map((project, i) => (
              <div key={project.id} className="flex"
                style={{ animation: `cardIn 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms both` }}>
                <ProjectCard project={project} onClick={() => openProject(project.id)} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex-1 h-px bg-[#1e2d40]" />
            <a href="https://github.com/MRGDFK" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#475569] hover:text-[#00d4ff] font-mono transition-colors">
              <span>⬡</span> view all on github <span className="opacity-50">↗</span>
            </a>
            <div className="flex-1 h-px bg-[#1e2d40]" />
          </div>
        </div>
      )}
    </div>
  )
}