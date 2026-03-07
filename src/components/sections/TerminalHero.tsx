'use client'
import { useEffect, useState, useRef } from 'react'

const lines = [
  { delay: 0,    text: 'whoami',                                              type: 'cmd' },
  { delay: 800,  text: 'sharjil — full-stack developer & ai/rl enthusiast 🇧🇩', type: 'output' },
  { delay: 1400, text: 'cat mission.txt',                                     type: 'cmd' },
  { delay: 2200, text: 'Building scalable web apps & exploring intelligent systems.', type: 'output' },
  { delay: 2800, text: 'Switching between code and cinematography since 2020.', type: 'output' },
  { delay: 3400, text: 'ls ./tech-stack',                                     type: 'cmd' },
  { delay: 4200, text: 'next.js  react  node.js  express  postgresql',        type: 'output-dir' },
  { delay: 4300, text: 'mongodb  aspnet  java  python  tailwindcss',          type: 'output-dir' },
  { delay: 4400, text: 'typescript  git  figma  reinforcement-learning',      type: 'output-dir' },
  { delay: 5000, text: 'cat ./status.json | jq .availability',                type: 'cmd' },
  { delay: 5800, text: '"open to opportunities — let\'s build something great"', type: 'output-string' },
  { delay: 6400, text: '',                                                     type: 'active' },
]

const quickLinks = [
  { label: '→ About Me',    section: 'about' },
  { label: '→ My Projects', section: 'projects' },
  { label: '→ Contact',     section: 'contact' },
]

const stats = [
  { label: 'Repositories', value: '14',      icon: '⬡', color: '#00d4ff',  desc: 'on GitHub' },
  { label: 'Tech Stack',   value: '20+',     icon: '⚙', color: '#a5f3a5',  desc: 'languages & tools' },
  { label: 'Projects',     value: '5+',      icon: '◈', color: '#fbbf24',  desc: 'shipped & live' },
  { label: 'Location',     value: 'Dhaka',   icon: '📍', color: '#f472b6', desc: 'Bangladesh 🇧🇩' },
]

// Binary rain animation canvas
function BinaryRain({ width, height }: { width: number; height: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const fontSize = 11
    const cols = Math.floor(width / fontSize)
    const drops: number[] = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 12, 22, 0.18)'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? '1' : '0'
        const alpha = Math.random() * 0.6 + 0.1
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    const id = setInterval(draw, 80)
    return () => clearInterval(id)
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 w-full h-full opacity-60"
    />
  )
}

function PhotoPanel() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="relative w-44 h-full min-h-[320px] shrink-0 overflow-hidden border-l border-[#1e2d40]">
      {/* Binary rain background */}
      <BinaryRain width={176} height={320} />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c16]/40 via-transparent to-[#080c16]/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c16]/50 to-transparent z-10" />

      {/* Photo */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative w-32 h-40 rounded-lg overflow-hidden border border-[#00d4ff]/30 shadow-[0_0_25px_rgba(0,212,255,0.2)]">
          {!imgError ? (
            <img
              src="/profile.jpg"
              alt="Sharjil"
              className="w-full h-full object-cover object-top"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#0d1321] flex flex-col items-center justify-center gap-2">
              <svg viewBox="0 0 80 80" className="w-12 h-12" fill="none">
                <circle cx="40" cy="28" r="14" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5"/>
                <path d="M10 72 C10 52 70 52 70 72" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5"/>
              </svg>
              <span className="text-[#00d4ff]/40 text-[8px] font-mono tracking-widest">PHOTO</span>
            </div>
          )}

          {/* Scan line over photo */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.07) 3px,rgba(0,0,0,0.07) 4px)' }}
          />
        </div>
      </div>

      {/* Blueprint corner brackets */}
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#00d4ff]/40 z-20" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#00d4ff]/40 z-20" />
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#00d4ff]/40 z-20" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#00d4ff]/40 z-20" />

      {/* Name tag at bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-20 gap-0.5">
        <div className="text-[#e2e8f0] text-[11px] font-bold font-mono text-center">Sharjil S. Khan</div>
        <div className="text-[#00d4ff] text-[9px] font-mono text-center opacity-80">Full-Stack Dev</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          <span className="text-[#4ade80] text-[9px] font-mono">available</span>
        </div>
      </div>
    </div>
  )
}

export default function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    setVisibleLines(0)
    lines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    })
  }, [])

  const navigate = (section: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: section }))
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">

      {/* Terminal window */}
      <div className="rounded-lg overflow-hidden border border-[#1e2d40] shadow-2xl shadow-black/60">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1321] border-b border-[#1e2d40]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#475569] font-mono">sharjil@portfolio: ~/intro</span>
        </div>

        {/* Terminal body + photo side by side */}
        <div className="flex">
          {/* Terminal output */}
          <div className="flex-1 bg-[#080c16] p-6 font-mono text-sm min-h-[320px]">
            {lines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="leading-7">
                {line.type === 'cmd' && (
                  <div className="flex items-center gap-1">
                    <span className="text-[#00d4ff]">➜</span>
                    <span className="text-[#475569] text-xs">~/portfolio</span>
                    <span className="text-[#00d4ff] ml-1">$</span>
                    <span className="text-[#e2e8f0] ml-1">{line.text}</span>
                  </div>
                )}
                {line.type === 'output' && (
                  <div className="text-[#94a3b8] pl-6">{line.text}</div>
                )}
                {line.type === 'output-dir' && (
                  <div className="pl-6 flex flex-wrap gap-x-4 gap-y-0.5">
                    {line.text.split('  ').map((item, j) => (
                      <span key={j} className="text-[#a5f3a5]">{item}</span>
                    ))}
                  </div>
                )}
                {line.type === 'output-string' && (
                  <div className="text-[#fbbf24] pl-6">{line.text}</div>
                )}
                {line.type === 'active' && i === visibleLines - 1 && (
                  <div className="flex items-center gap-1">
                    <span className="text-[#00d4ff]">➜</span>
                    <span className="text-[#475569] text-xs">~/portfolio</span>
                    <span className="text-[#00d4ff] ml-1">$</span>
                    <span className="inline-block w-2 h-4 bg-[#00d4ff] animate-[blink_1s_step-end_infinite] ml-1 align-middle" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Photo panel with binary rain — right side of terminal */}
          <PhotoPanel />
        </div>
      </div>

      {/* Quick nav */}
      {visibleLines >= lines.length && (
        <div className="mt-8 animate-fade-in">
          <div className="text-[11px] text-[#334155] uppercase tracking-widest mb-3 font-mono">// quick navigate</div>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => navigate(link.section)}
                className="px-4 py-2 text-sm border border-[#1e2d40] rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 hover:shadow-[0_0_12px_rgba(0,212,255,0.15)] transition-all font-mono"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stats row — beautiful colored cards */}
      {visibleLines >= lines.length && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative border border-[#1e2d40] rounded-lg p-4 bg-[#0d1321] overflow-hidden transition-all duration-300 group cursor-default"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = stat.color + '60'
                e.currentTarget.style.boxShadow = `0 0 20px ${stat.color}20, inset 0 0 20px ${stat.color}05`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e2d40'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Background glow blob */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: stat.color + '20', transform: 'translate(30%, -30%)' }}
              />

              {/* Icon */}
              <div
                className="text-lg mb-2 transition-transform duration-300 group-hover:scale-110 w-8 h-8 flex items-center justify-center rounded border border-transparent group-hover:border-current"
                style={{ color: stat.color }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div
                className="font-bold text-2xl font-mono transition-colors duration-200"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-[#e2e8f0] text-xs font-medium mt-0.5">{stat.label}</div>

              {/* Sub label */}
              <div className="text-[#334155] text-[10px] font-mono mt-0.5">{stat.desc}</div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b"
                style={{ background: `linear-gradient(90deg, ${stat.color}00, ${stat.color}, ${stat.color}00)` }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
