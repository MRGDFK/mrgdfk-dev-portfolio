'use client'
import { useState } from 'react'

interface Project {
  id: string
  filename: string
  ext: string
  title: string
  description: string
  longDesc: string
  tech: string[]
  color: string
  status: 'completed' | 'active' | 'experiment'
  github?: string
  live?: string
  lines: string[]
}

const projects: Project[] = [
  {
    id: 'urban-nest',
    filename: 'URBAN_NEST',
    ext: '.tsx',
    title: 'Urban Nest',
    description: 'Real Estate Listing Platform',
    longDesc: 'A full-featured real estate listing platform with property search, filtering, and detailed listings. Built with ASP.NET for the backend and a clean responsive frontend.',
    tech: ['ASP.NET', 'JavaScript', 'HTML/CSS', 'SQL'],
    color: '#fbbf24',
    status: 'completed',
    github: 'https://github.com/MRGDFK/URBAN_NEST',
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
    longDesc: 'A feature-rich Android task management application built with Android Studio. Supports task creation, categorization, reminders, and a clean Material Design UI.',
    tech: ['Android Studio', 'Java', 'Kotlin', 'SQLite'],
    color: '#a5f3a5',
    status: 'completed',
    github: 'https://github.com/MRGDFK',
    lines: [
      '# TaskZen - Android Task Manager',
      '',
      '## Overview',
      'Mobile-first task management with',
      'clean UX and offline support.',
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
    longDesc: 'A fully custom portfolio and landing site for ShutterArc Studios — a creative cinematography agency. Live in production.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    color: '#f472b6',
    status: 'active',
    live: 'https://www.shutterarcstudios.com',
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
    id: 'rl-card',
    filename: '29CardGame_RL',
    ext: '.py',
    title: '29 Card Game RL',
    description: 'Reinforcement Learning Experiments',
    longDesc: 'Reinforcement learning experiments for the classic 29 card game. Building AI agents that learn game strategy through self-play and reward shaping.',
    tech: ['Python', 'Reinforcement Learning', 'Game AI', 'NumPy'],
    color: '#818cf8',
    status: 'experiment',
    github: 'https://github.com/MRGDFK',
    lines: [
      '# RL Agent for 29 Card Game',
      'import gym, numpy as np',
      '',
      'class CardAgent:',
      '  def __init__(self):',
      '    self.policy = {}',
      '    self.epsilon = 0.1',
      '',
      '  def learn(self, state, reward):',
      '    # Q-learning update',
      '    ...',
    ],
  },
  {
    id: 'sen-pi',
    filename: 'SEN_pi_DemonSlayer',
    ext: '.c',
    title: 'SEN_pi Demon Slayer',
    description: 'C Game Project',
    longDesc: 'A Demon Slayer themed game project written in C. Features ASCII-art styled gameplay and custom game logic.',
    tech: ['C', 'Game Logic', 'ASCII Art'],
    color: '#fb7185',
    status: 'completed',
    github: 'https://github.com/MRGDFK/SEN_pi--Demon-Slayer',
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
]

const statusColors = {
  completed: { bg: '#1a2e1a', text: '#4ade80', label: 'completed' },
  active: { bg: '#1a1f2e', text: '#00d4ff', label: 'live' },
  experiment: { bg: '#2e1a2e', text: '#c084fc', label: 'experiment' },
}

const extColors: Record<string, string> = {
  '.tsx': '#61dafb', '.ts': '#3b82f6', '.py': '#fbbf24',
  '.md': '#94a3b8', '.c': '#f472b6',
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState(projects[0].id)
  const active = projects.find(p => p.id === activeTab)!

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <div className="text-[#334155] text-sm mb-6 font-mono">
        <span className="text-[#475569]">// Projects.ts</span>
        <span className="text-[#1e2d40]"> — open as files, click to preview</span>
      </div>

      {/* File tabs */}
      <div className="flex items-center gap-0 overflow-x-auto border-b border-[#1e2d40] mb-0">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-[12px] whitespace-nowrap border-b-2 transition-all shrink-0 font-mono ${
              activeTab === p.id
                ? 'border-[#00d4ff] bg-[#0a0e1a] text-[#e2e8f0]'
                : 'border-transparent text-[#475569] hover:text-[#94a3b8] hover:bg-white/[0.02]'
            }`}
          >
            <span className="text-[10px]" style={{ color: extColors[p.ext] || '#94a3b8' }}>●</span>
            {p.filename}
            <span style={{ color: extColors[p.ext] || '#94a3b8' }} className="opacity-60">{p.ext}</span>
          </button>
        ))}
      </div>

      {/* Split view */}
      <div className="grid md:grid-cols-2 gap-0 border border-[#1e2d40] border-t-0 rounded-b-lg overflow-hidden">
        {/* Code preview */}
        <div className="border-r border-[#1e2d40] bg-[#080c16]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1e2d40] text-xs text-[#475569] bg-[#0d1321]">
            <span style={{ color: extColors[active.ext] }}>◈</span>
            <span>{active.filename}{active.ext}</span>
            <span className="ml-auto text-[#1e2d40]">{active.lines.length} lines</span>
          </div>
          <div className="p-4 font-mono text-xs leading-6 min-h-[280px]">
            {active.lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="w-6 text-right text-[#1e2d40] mr-4 select-none text-[10px]">{i + 1}</span>
                <span className={
                  line.startsWith('//') || line.startsWith('#') ? 'text-[#334155]' :
                  line.startsWith('export') || line.startsWith('import') || line.startsWith('class') || line.startsWith('int ') || line.startsWith('#include') ? 'text-[#c792ea]' :
                  line.includes('":') ? 'text-[#94a3b8]' :
                  line.includes('"') ? 'text-[#a5f3a5]' :
                  'text-[#94a3b8]'
                }>
                  {line || '\u00A0'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="p-6 bg-[#0a0e1a]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-[#e2e8f0] font-bold text-lg">{active.title}</h3>
              <p className="text-[#475569] text-sm">{active.description}</p>
            </div>
            <span
              className="text-[10px] px-2 py-1 rounded font-mono shrink-0 ml-3"
              style={{ background: statusColors[active.status].bg, color: statusColors[active.status].text }}
            >
              {statusColors[active.status].label}
            </span>
          </div>

          <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{active.longDesc}</p>

          {/* Tech stack */}
          <div className="mb-5">
            <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-2">// tech stack</div>
            <div className="flex flex-wrap gap-2">
              {active.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded border border-[#1e2d40] text-[#94a3b8] bg-[#0d1321] font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {active.github && (
              <a
                href={active.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm border border-[#1e2d40] rounded text-[#94a3b8] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all"
              >
                <span>⬡</span> GitHub
              </a>
            )}
            {active.live && (
              <a
                href={active.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm border border-[#00d4ff]/30 rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all"
              >
                <span>↗</span> Live Site
              </a>
            )}
          </div>
        </div>
      </div>

      {/* All projects grid */}
      <div className="mt-8">
        <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-4">// all projects</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`text-left p-3 rounded-lg border transition-all ${
                activeTab === p.id
                  ? 'border-[#00d4ff]/50 bg-[#00d4ff]/5'
                  : 'border-[#1e2d40] hover:border-[#2a3a50] bg-[#0d1321] hover:bg-[#0f1a27]'
              }`}
            >
              <div className="text-xs font-mono" style={{ color: extColors[p.ext] }}>
                {p.filename}<span className="opacity-60">{p.ext}</span>
              </div>
              <div className="text-[10px] text-[#334155] mt-1 truncate">{p.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
