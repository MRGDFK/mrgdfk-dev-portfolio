'use client'
import { useEffect, useState, useRef } from 'react'


function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const parent = canvas.parentElement
    const W = parent ? parent.offsetWidth : 280
    const H = parent ? parent.offsetHeight : 280
    canvas.width = W
    canvas.height = H

    const fontSize = 11
    const cols = Math.floor(W / fontSize)
    const drops: number[] = Array(cols).fill(1)

    // Start dark
    ctx.fillStyle = 'rgba(8, 12, 22, 1)'
    ctx.fillRect(0, 0, W, H)

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 12, 22, 0.14)'
      ctx.fillRect(0, 0, W, H)
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? '1' : '0'
        ctx.fillStyle = `rgba(0, 212, 255, ${Math.random() * 0.65 + 0.15})`
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > H && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    const id = setInterval(draw, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}

const metrics = [
  { label: 'Repositories', value: 14, suffix: '', color: '#00d4ff' },
  { label: 'Tech Skills', value: 20, suffix: '+', color: '#a5f3a5' },
  { label: 'Projects Built', value: 5, suffix: '+', color: '#fbbf24' },
  { label: 'Years Coding', value: 3, suffix: '+', color: '#f472b6' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/MRGDFK',
    color: '#94a3b8',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sharjilskhan/',
    color: '#3b82f6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:sharjilskhan3771@gmail.com',
    color: '#f472b6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    href: 'https://mrgdfk.github.io/MRGDFK-Portfolio/index.html',
    color: '#a5f3a5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = Math.ceil(target / 40)
    const id = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(id) }
      else setCount(start)
    }, 30)
    return () => clearInterval(id)
  }, [target])
  return <span>{count}{suffix}</span>
}

const codeLines = [
  { n: 1, tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'sharjil' }, { t: 'op', v: ' = {' }] },
  { n: 2, tokens: [{ t: 'key', v: '  name' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Sharjil S. Khan"' }, { t: 'op', v: ',' }] },
  { n: 3, tokens: [{ t: 'key', v: '  role' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Full-Stack Developer"' }, { t: 'op', v: ',' }] },
  { n: 4, tokens: [{ t: 'key', v: '  passion' }, { t: 'op', v: ': [' }, { t: 'str', v: '"Building Side Projects"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Learning AI & ML Concepts"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"UI Design"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Video Editing"' }, { t: 'op', v: '],' }] },
  { n: 5, tokens: [{ t: 'key', v: '  location' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Dhaka, Bangladesh 🇧🇩"' }, { t: 'op', v: ',' }] },
  { n: 6, tokens: [{ t: 'key', v: '  education' }, { t: 'op', v: ': ' }, { t: 'str', v: '"CSE Graduate"' }, { t: 'op', v: ',' }] },
  { n: 7, tokens: [{ t: 'key', v: '  hobbies' }, { t: 'op', v: ': [' }, { t: 'str', v: '"Cinematography"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Gaming"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Listening Podcast"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Travelling"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Tech Geek"' }, { t: 'op', v: '],' }] },
  { n: 8, tokens: [{ t: 'op', v: '};' }] },
]

const tokenColor: Record<string, string> = {
  keyword: '#c792ea', var: '#00d4ff', key: '#00d4ff',
  str: '#a5f3a5', op: '#94a3b8', num: '#fbbf24',
}

export default function About() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">

      {/* Header comment + socials row */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-sm font-mono">
          <span className="text-[#475569]">// About.tsx</span>
          <span className="text-[#1e2d40]"> — profile data & bio</span>
        </div>

        {/* Social icons top right */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="w-8 h-8 flex items-center justify-center rounded border border-[#1e2d40] bg-[#0d1321] transition-all hover:bg-[#0f1a27]"
              style={{ color: '#475569' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = s.color
                e.currentTarget.style.borderColor = s.color + '60'
                e.currentTarget.style.boxShadow = `0 0 10px ${s.color}25`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#475569'
                e.currentTarget.style.borderColor = '#1e2d40'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main layout: left content, right photo */}
      <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start">

        {/* LEFT — all content */}
        <div className="space-y-6">

          {/* Name + title */}
          <div>
            <div className="text-[#475569] text-sm font-mono mb-1">// hello, i'm</div>
            <h1 className="text-[#e2e8f0] text-4xl font-bold leading-tight">
              Sharjil Shabab Khan
            </h1>
            <div className="text-[#00d4ff] font-mono text-sm mt-2">
              Full-Stack Developer & AI/RL Enthusiast
            </div>
            <div className="text-[#334155] text-xs font-mono mt-1">📍 Dhaka, Bangladesh 🇧🇩</div>
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-3 text-sm text-[#94a3b8] leading-relaxed">
            <p>
              I build <span className="text-[#e2e8f0] font-medium">scalable web applications</span> using the MERN stack and Next.js ecosystem. I specialize in turning complex problems into clean, functional products.
            </p>
            <p>
              Currently exploring <span className="text-[#00d4ff]">System Design, AI, and Reinforcement Learning</span> — building experiments like card game AI and intelligent agents.
            </p>
            <p>
              When I'm not coding, I work in <span className="text-[#fbbf24]">cinematography and creative production</span> — I shoot brand films, visual stories, and run ShutterArc Studios.
            </p>
          </div>

          {/* Code block */}
          <div className="rounded-lg overflow-hidden border border-[#1e2d40]">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1321] border-b border-[#1e2d40] text-xs text-[#475569]">
              <span className="text-[#00d4ff]">⚛</span>
              <span>developer.ts</span>
            </div>
            <div className="bg-[#080c16] p-4 font-mono text-xs">
              {codeLines.map((line) => (
                <div key={line.n} className="flex leading-6">
                  <span className="w-5 text-right text-[#1e2d40] mr-4 select-none">{line.n}</span>
                  <span>
                    {line.tokens.map((tok, i) => (
                      <span key={i} style={{ color: tokenColor[tok.t] || '#e2e8f0' }}>
                        {tok.v}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* What I do */}
          <div className="border border-[#1e2d40] rounded-lg p-4 bg-[#0d1321]">
            <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-3">// what i do</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '🌐', label: 'Full-Stack Development', sub: 'React / Next.js / Node.js / Express' },
                { icon: '🗄️', label: 'Backend & Databases', sub: 'PostgreSQL / MongoDB / MySQL' },
                { icon: '🧠', label: 'AI / Reinforcement Learning', sub: 'Agents, Game Strategy, ML Experiments' },
                { icon: '🎬', label: 'Cinematography', sub: 'Brand Videos & Creative Production' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2 p-2 rounded hover:bg-white/[0.02] transition-all">
                  <span className="text-sm mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-xs text-[#e2e8f0]">{item.label}</div>
                    <div className="text-[10px] text-[#475569]">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="relative border border-[#1e2d40] rounded-lg p-3 bg-[#0d1321] text-center transition-all duration-300 group overflow-hidden cursor-default"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = m.color + '55'
                  e.currentTarget.style.boxShadow = `0 0 20px ${m.color}20, inset 0 0 20px ${m.color}05`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#1e2d40'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                {/* bg glow blob */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: m.color + '25', transform: 'translate(-50%, -40%)' }}
                />
                <div className="text-2xl font-bold font-mono transition-colors duration-200 relative z-10" style={{ color: m.color }}>
                  <Counter target={m.value} suffix={m.suffix} />
                </div>
                <div className="text-[10px] text-[#475569] mt-1 relative z-10">{m.label}</div>
                {/* bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b"
                  style={{ background: `linear-gradient(90deg, ${m.color}00, ${m.color}, ${m.color}00)` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — large photo */}
        <div className="flex flex-col items-center gap-5 md:sticky md:top-6">

          {/* Large photo */}
          {/* Outer rectangle — binary rain fills this, brackets sit on corners */}
          <div className="relative p-6 bg-[#080c16] border border-[#1e2d40]/60 rounded-sm">

            {/* Binary rain fills the whole rectangle */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-sm">
              <BinaryRain />
            </div>

            {/* Dark overlay so rain is subtle */}
            <div className="absolute inset-0 z-10 bg-[#080c16]/40 rounded-sm pointer-events-none" />

            {/* Blueprint corner brackets — on top of rain */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#00d4ff]/70 z-20" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#00d4ff]/70 z-20" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#00d4ff]/70 z-20" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#00d4ff]/70 z-20" />

            {/* Available badge — top center */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0d1321] border border-[#4ade80]/40 rounded-full px-3 py-1 whitespace-nowrap shadow-lg z-30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-[10px] font-mono text-[#4ade80]">available for work</span>
            </div>

            {/* Circle photo — centered inside rectangle, above rain */}
            <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 border-[#00d4ff]/40 shadow-[0_0_40px_rgba(0,212,255,0.2)] z-20">
              <img
                src="/profile.jpg"
                alt="Sharjil"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 75%' }}
              />
            </div>
          </div>

          {/* Info pills below photo */}
          <div className="flex flex-col gap-2 w-full mt-4">
            {[
              { label: 'CSE Graduate', icon: '🎓', color: '#00d4ff' },
              { label: 'Full-Stack Developer', icon: '💻', color: '#00d4ff' },
              { label: 'Android Application Developer', icon: '📱', color: '#00d4ff' },
              { label: 'Cinematographer', icon: '🎬', color: '#fbbf24' },
              { label: 'Open Source', icon: '⬡', color: '#a5f3a5' },
            ].map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-2.5 px-3 py-2 rounded border border-[#1e2d40] bg-[#0d1321] text-xs font-mono"
              >
                <span>{pill.icon}</span>
                <span style={{ color: pill.color }}>{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}