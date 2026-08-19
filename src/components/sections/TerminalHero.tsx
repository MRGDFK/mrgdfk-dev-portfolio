'use client'
import { useEffect, useState, useRef } from 'react'
import {
  SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiPostgresql,
  SiMongodb, SiDotnet, SiPython, SiTailwindcss, SiTypescript,
  SiGit, SiFigma,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbBrain } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import DevTerminal from '@/components/DevTerminal'
import ContactSection from '@/components/ContactSection'

const techIcons: Record<string, IconType> = {
  'next.js':                SiNextdotjs,
  'react':                  SiReact,
  'node.js':                SiNodedotjs,
  'express':                SiExpress,
  'postgresql':             SiPostgresql,
  'mongodb':                SiMongodb,
  'aspnet':                 SiDotnet,
  'java':                   FaJava,
  'python':                 SiPython,
  'tailwindcss':            SiTailwindcss,
  'typescript':             SiTypescript,
  'git':                    SiGit,
  'figma':                  SiFigma,
  'reinforcement-learning': TbBrain,
}

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
  { label: 'Repositories', value: '14+',      icon: '⬡', color: '#00d4ff',  desc: 'on GitHub' },
  { label: 'Tech Stack',   value: '20+',     icon: '⚙', color: '#a5f3a5',  desc: 'languages & tools' },
  { label: 'Projects',     value: '10+',      icon: '◈', color: '#fbbf24',  desc: 'shipped & live' },
  { label: 'Location',     value: 'Dhaka',   icon: '📍', color: '#f472b6', desc: 'Bangladesh 🇧🇩' },
]

const profileStats = [
  { label: 'Experience', value: '3+ yrs',        color: '#00d4ff' },
  { label: 'Projects',   value: '10+ shipped',   color: '#fbbf24' },
  { label: 'Focus',      value: 'Full-Stack & AI/RL', color: '#a5f3a5' },
]

function SectionHeader({ index, slug, title }: { index: string; slug: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="text-[11px] text-[#334155] font-mono tracking-widest mb-2">{`// ${index} — ${slug}`}</div>
      <h2 className="text-[#e2e8f0] text-2xl md:text-3xl font-bold">{title}</h2>
    </div>
  )
}

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

  const scanLines = { background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.07) 3px,rgba(0,0,0,0.07) 4px)' }

  const PhotoCard = ({ size }: { size: 'sm' | 'lg' }) => (
    <div className={`relative rounded-lg overflow-hidden border border-[#00d4ff]/30 shadow-[0_0_25px_rgba(0,212,255,0.2)] shrink-0 ${size === 'sm' ? 'w-16 h-24' : 'w-32 h-40'}`}>
      {!imgError ? (
        <img src="/profile.jpg" alt="Sharjil" className="w-full h-full object-cover object-top" onError={() => setImgError(true)} />
      ) : (
        <div className="w-full h-full bg-[#0d1321] flex flex-col items-center justify-center gap-2">
          <svg viewBox="0 0 80 80" className="w-8 h-8" fill="none">
            <circle cx="40" cy="28" r="14" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.4)" strokeWidth="1.5"/>
            <path d="M10 72 C10 52 70 52 70 72" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5"/>
          </svg>
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none" style={scanLines} />
    </div>
  )

  return (
    <div className="relative w-full h-36 md:w-44 md:h-full md:min-h-[320px] shrink-0 overflow-hidden border-b border-[#1e2d40] md:border-b-0 md:border-l">
      {/* Binary rain background */}
      <BinaryRain width={176} height={320} />

      {/* Dark overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c16]/40 via-transparent to-[#080c16]/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c16]/50 to-transparent z-10" />

      {/* Mobile layout: photo left, name right */}
      <div className="md:hidden absolute inset-0 z-20 flex items-center gap-4 px-5">
        <PhotoCard size="sm" />
        <div className="flex flex-col gap-0.5">
          <div className="text-[#e2e8f0] text-[13px] font-bold font-mono">Sharjil S. Khan</div>
          <div className="text-[#00d4ff] text-[10px] font-mono opacity-80">Full-Stack Dev</div>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-[#4ade80] text-[10px] font-mono">available</span>
          </div>
        </div>
      </div>

      {/* Desktop layout: centered photo + name at bottom */}
      <div className="hidden md:block">
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <PhotoCard size="lg" />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-20 gap-0.5">
          <div className="text-[#e2e8f0] text-[11px] font-bold font-mono text-center">Sharjil S. Khan</div>
          <div className="text-[#00d4ff] text-[9px] font-mono text-center opacity-80">Full-Stack Dev</div>
          <div className="flex items-center gap-1 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-[#4ade80] text-[9px] font-mono">available</span>
          </div>
        </div>
      </div>

      {/* Blueprint corner brackets */}
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#00d4ff]/40 z-20" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#00d4ff]/40 z-20" />
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#00d4ff]/40 z-20" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#00d4ff]/40 z-20" />
    </div>
  )
}

const TYPE_SPEED = 35 // ms per character
const LINE_PAUSE = 260 // ms pause between lines

function TypingCursor() {
  return <span className="inline-block w-2 h-4 bg-[#00d4ff] animate-[blink_1s_step-end_infinite] ml-0.5 align-middle" />
}

function renderTypingLine(line: typeof lines[number], typed: string) {
  if (line.type === 'cmd' || line.type === 'active') {
    return (
      <div className="flex items-center gap-1">
        <span className="text-[#00d4ff]">➜</span>
        <span className="text-[#475569] text-xs">~/portfolio</span>
        <span className="text-[#00d4ff] ml-1">$</span>
        {line.type === 'cmd' && <span className="text-[#e2e8f0] ml-1">{typed}</span>}
        <TypingCursor />
      </div>
    )
  }
  const colorClass =
    line.type === 'output-string' ? 'text-[#fbbf24]' :
    line.type === 'output-dir' ? 'text-[#a5f3a5]' :
    'text-[#94a3b8]'
  return (
    <div className={`pl-6 ${colorClass}`}>
      {typed}
      <TypingCursor />
    </div>
  )
}

type Phase = 'typing' | 'divider' | 'node-cmd' | 'spinner' | 'output' | 'cursor'

export default function TerminalHero() {
  const [completedLines, setCompletedLines] = useState(0)
  const [currentTyped, setCurrentTyped] = useState('')
  const [replayCount, setReplayCount] = useState(0)
  const [animStarted, setAnimStarted] = useState(false)
  const [phase, setPhase] = useState<Phase>('typing')
  const [nodeCmdTyped, setNodeCmdTyped] = useState('')

  useEffect(() => {
    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []

    setCompletedLines(0)
    setCurrentTyped('')
    setAnimStarted(false)
    setPhase('typing')
    setNodeCmdTyped('')

    const startNodeAnimation = () => {
      const nodeCmd = '$ node --version'
      timeouts.push(setTimeout(() => {
        if (cancelled) return
        setPhase('node-cmd')
        let ci = 0
        const typeNodeChar = () => {
          if (cancelled) return
          if (ci <= nodeCmd.length) {
            setNodeCmdTyped(nodeCmd.slice(0, ci))
            ci++
            timeouts.push(setTimeout(typeNodeChar, TYPE_SPEED))
          } else {
            timeouts.push(setTimeout(() => {
              if (cancelled) return
              setPhase('spinner')
              timeouts.push(setTimeout(() => {
                if (cancelled) return
                setPhase('output')
                timeouts.push(setTimeout(() => {
                  if (cancelled) return
                  setPhase('cursor')
                }, 120))
              }, 1200))
            }, LINE_PAUSE))
          }
        }
        typeNodeChar()
      }, 300))
    }

    const typeLine = (lineIdx: number, charIdx: number) => {
      if (cancelled) return
      if (lineIdx >= lines.length) {
        timeouts.push(setTimeout(() => {
          if (cancelled) return
          setPhase('divider')
          startNodeAnimation()
        }, LINE_PAUSE))
        return
      }
      const line = lines[lineIdx]
      if (lineIdx === 0 && charIdx === 0) {
        setAnimStarted(true)
      }
      setCurrentTyped(line.text.slice(0, charIdx))
      if (charIdx >= line.text.length) {
        timeouts.push(setTimeout(() => {
          if (cancelled) return
          setCompletedLines(lineIdx + 1)
          setCurrentTyped('')
          typeLine(lineIdx + 1, 0)
        }, LINE_PAUSE))
      } else {
        timeouts.push(setTimeout(() => typeLine(lineIdx, charIdx + 1), TYPE_SPEED))
      }
    }

    typeLine(0, 0)

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [replayCount])

  const navigate = (section: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: section }))
  }

  return (
    <div className="p-4 md:p-10 max-w-5xl mx-auto">

      {/* Terminal window */}
      <div className="rounded-lg overflow-hidden border border-[#1e2d40] shadow-2xl shadow-black/60">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1321] border-b border-[#1e2d40]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#475569] font-mono">sharjil@portfolio: ~/intro</span>
          <button
            onClick={() => setReplayCount(c => c + 1)}
            title="Replay animation"
            className="ml-auto flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-[#475569] hover:text-[#00d4ff] hover:bg-white/5 rounded transition-colors"
          >
            <span>↺</span> replay
          </button>
        </div>

        {/* Terminal body + photo: stacked on mobile, side by side on md+ */}
        <div className="flex flex-col-reverse md:flex-row">
          {/* Terminal output */}
          <div className="flex-1 bg-[#080c16] p-4 md:p-6 font-mono text-sm min-h-[240px] md:min-h-[320px]">
            {animStarted && lines.slice(0, completedLines).map((line, i) => (
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
                  <div className="pl-6 flex flex-wrap gap-x-4 gap-y-1">
                    {line.text.split('  ').map((item, j) => {
                      const Icon = techIcons[item.trim()]
                      return (
                        <span key={j} className="flex items-center gap-1.5 text-[#a5f3a5]">
                          {Icon && <Icon className="shrink-0 opacity-80" size={13} />}
                          {item}
                        </span>
                      )
                    })}
                  </div>
                )}
                {line.type === 'output-string' && (
                  <div className="text-[#fbbf24] pl-6">{line.text}</div>
                )}
                {line.type === 'active' && (
                  <div className="flex items-center gap-1">
                    <span className="text-[#00d4ff]">➜</span>
                    <span className="text-[#475569] text-xs">~/portfolio</span>
                    <span className="text-[#00d4ff] ml-1">$</span>
                    <span className="inline-block w-2 h-4 bg-[#00d4ff] animate-[blink_1s_step-end_infinite] ml-1 align-middle" />
                  </div>
                )}
              </div>
            ))}
            {animStarted && completedLines < lines.length && (
              <div className="leading-7">{renderTypingLine(lines[completedLines], currentTyped)}</div>
            )}

            {/* Divider */}
            {phase !== 'typing' && (
              <div className="border-t border-white/10 my-4" />
            )}

            {/* Node command section */}
            {(phase === 'node-cmd' || phase === 'spinner' || phase === 'output' || phase === 'cursor') && (
              <div className="leading-7">
                <div className="flex items-center gap-1">
                  <span className="text-[#00d4ff]">➜</span>
                  <span className="text-[#475569] text-xs">~/portfolio</span>
                  <span className="text-[#00d4ff] ml-1">$</span>
                  <span className="text-[#e2e8f0] ml-1">{nodeCmdTyped}</span>
                  {phase === 'node-cmd' && <TypingCursor />}
                  {phase === 'spinner' && (
                    <span className="inline-block w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin ml-1" />
                  )}
                </div>
              </div>
            )}

            {/* Output lines */}
            {(phase === 'output' || phase === 'cursor') && (
              <div className="leading-7">
                <div className="text-[#94a3b8] pl-6">v20.12.0</div>
                <div className="text-[#a5f3a5] pl-6">⊙ ✓ [process compiled successfully in 16ms]</div>
              </div>
            )}

            {/* Blinking cursor */}
            {phase === 'cursor' && (
              <div className="leading-7 pl-6">
                <span className="inline-block w-2 h-4 bg-[#00d4ff] animate-[blink_1s_step-end_infinite] align-middle" />
              </div>
            )}
          </div>

          {/* Photo panel with binary rain — right side of terminal */}
          <PhotoPanel />
        </div>
      </div>

      {/* Quick nav */}
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

      {/* Stats row — beautiful colored cards */}
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

      {/* Homepage sections */}
      <div className="mt-20 space-y-24 animate-fade-in">

          {/* 01 — tech_stack */}
          <section>
            <SectionHeader index="01" slug="tech_stack" title="Tech Stack" />
            <div className="border border-[#1e2d40] rounded-xl overflow-hidden bg-[#0d1321]">
              <Skills />
            </div>
          </section>

          {/* 02 — featured_projects */}
          <section>
            <SectionHeader index="02" slug="featured_projects" title="Featured Projects" />
            <Projects variant="featured" limit={4} />
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => navigate('projects')}
                className="px-4 py-2 text-sm border border-[#1e2d40] rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 hover:shadow-[0_0_12px_rgba(0,212,255,0.15)] transition-all font-mono"
              >
                view_all_projects →
              </button>
            </div>
          </section>

          {/* 03 — career_timeline */}
          <section>
            <SectionHeader index="03" slug="career_timeline" title="Career Timeline" />
            <div className="border border-[#1e2d40] rounded-xl overflow-hidden bg-[#0d1321]">
              <Education />
            </div>
          </section>

          {/* 05 — profile_overview */}
          <section>
            <SectionHeader index="05" slug="profile_overview" title="About & Engineering Philosophy" />
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: bio + stat cards */}
              <div className="space-y-5">
                <div className="space-y-3 text-sm text-[#94a3b8] leading-relaxed">
                  <p>
                    I build <span className="text-[#e2e8f0] font-medium">scalable web applications</span> using the MERN stack and Next.js ecosystem. I specialize in turning complex problems into clean, functional products.
                  </p>
                  <p>
                    Currently exploring <span className="text-[#00d4ff]">System Design, AI, and Reinforcement Learning</span> — building experiments like card game AI and intelligent agents.
                  </p>
                  <p>
                    When I&apos;m not coding, I work in <span className="text-[#fbbf24]">cinematography and creative production</span> — I shoot brand films, visual stories, and run ShutterArc Studios.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {profileStats.map((s) => (
                    <div
                      key={s.label}
                      className="border border-[#1e2d40] rounded-lg p-3 bg-[#0d1321] text-center transition-all duration-300"
                      onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '55'; e.currentTarget.style.boxShadow = `0 0 16px ${s.color}18` }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e2d40'; e.currentTarget.style.boxShadow = '' }}
                    >
                      <div className="font-bold font-mono text-sm" style={{ color: s.color }}>{s.value}</div>
                      <div className="text-[10px] text-[#475569] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: DevTerminal widget */}
              <DevTerminal />
            </div>
          </section>

          {/* 06 — initiate_contact */}
          <section>
            <div className="text-[11px] text-[#334155] font-mono tracking-widest mb-6">// 06 — initiate_contact</div>
            <ContactSection />
          </section>

        </div>
    </div>
  )
}
