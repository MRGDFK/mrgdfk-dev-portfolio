'use client'
import { useEffect, useState } from 'react'

const metrics = [
  { label: 'Repositories', value: 14, suffix: '+', color: '#00d4ff' },
  { label: 'Tech Skills', value: 20, suffix: '+', color: '#a5f3a5' },
  { label: 'Projects Built', value: 10, suffix: '+', color: '#fbbf24' },
  { label: 'Years Coding', value: 4, suffix: '+', color: '#f472b6' },
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
  { n: 4, tokens: [{ t: 'key', v: '  passion' }, { t: 'op', v: ': ' }, { t: 'str', v: '"AI/RL Experiments"' }, { t: 'op', v: ',' }] },
  { n: 5, tokens: [{ t: 'key', v: '  location' }, { t: 'op', v: ': ' }, { t: 'str', v: '"Dhaka, Bangladesh 🇧🇩"' }, { t: 'op', v: ',' }] },
  { n: 6, tokens: [{ t: 'key', v: '  education' }, { t: 'op', v: ': ' }, { t: 'str', v: '"CSE Graduate"' }, { t: 'op', v: ',' }] },
  { n: 7, tokens: [{ t: 'key', v: '  hobbies' }, { t: 'op', v: ': [' }, { t: 'str', v: '"Cinematography"' }, { t: 'op', v: ', ' }, { t: 'str', v: '"Creative Production"' }, { t: 'op', v: '],' }] },
  { n: 8, tokens: [{ t: 'op', v: '};' }] },
]

const tokenColor: Record<string, string> = {
  keyword: '#c792ea',
  var: '#00d4ff',
  key: '#00d4ff',
  str: '#a5f3a5',
  op: '#94a3b8',
  num: '#fbbf24',
}

export default function About() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      {/* Header comment */}
      <div className="text-[#334155] text-sm mb-6 font-mono">
        <span className="text-[#475569]">// About.tsx</span>
        <span className="text-[#1e2d40]"> — profile data & bio</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Code block left */}
        <div>
          <div className="rounded-lg overflow-hidden border border-[#1e2d40]">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1321] border-b border-[#1e2d40] text-xs text-[#475569]">
              <span className="text-[#00d4ff]">⚛</span>
              <span>developer.ts</span>
            </div>
            <div className="bg-[#080c16] p-5 font-mono text-sm">
              {codeLines.map((line) => (
                <div key={line.n} className="flex leading-7">
                  <span className="w-6 text-right text-[#1e2d40] text-xs mr-4 select-none">{line.n}</span>
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

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border border-[#1e2d40] rounded-lg p-4 bg-[#0d1321] hover:border-opacity-60 transition-all"
                style={{ '--hover-border': m.color } as React.CSSProperties}
              >
                <div className="text-2xl font-bold" style={{ color: m.color }}>
                  <Counter target={m.value} suffix={m.suffix} />
                </div>
                <div className="text-xs text-[#475569] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio right */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#00d4ff]/40 shrink-0 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
    <img
      src="/profile.jpg"
      alt="Sharjil"
      className="object-cover"
    />
  </div>
  <div>
    <h2 className="text-[#e2e8f0] text-xl font-bold mb-1">
      Hey, I'm <span className="text-[#00d4ff]">Sharjil</span> 👋
    </h2>
    <p className="text-[#475569] text-xs">Full-Stack Developer & AI Enthusiast from Bangladesh</p>
  </div>
</div>

          <div className="space-y-4 text-sm text-[#94a3b8] leading-relaxed">
            <p>
              I build <span className="text-[#e2e8f0]">scalable web applications</span> using the MERN stack and Next.js ecosystem. I specialize in turning complex problems into clean, functional products.
            </p>
            <p>
              Currently exploring <span className="text-[#00d4ff]">System Design, AI, and Reinforcement Learning</span> — building experiments like card game AI and intelligent agents.
            </p>
            <p>
              When I'm not coding, I work in <span className="text-[#fbbf24]">cinematography and creative production</span> — I shoot brand films, visual stories, and run ShutterArc Studios.
            </p>
          </div>

          {/* What I do list */}
          <div className="border border-[#1e2d40] rounded-lg p-4 bg-[#0d1321]">
            <div className="text-xs text-[#334155] uppercase tracking-widest mb-3">// what i do</div>
            {[
              { icon: '🌐', label: 'Full-Stack Development', sub: 'React / Next.js / Node.js / Express' },
              { icon: '🗄️', label: 'Backend & Databases', sub: 'PostgreSQL / MongoDB / MySQL' },
              { icon: '🧠', label: 'AI / Reinforcement Learning', sub: 'Agents, Game Strategy, ML Experiments' },
              { icon: '🎬', label: 'Cinematography', sub: 'Brand Videos & Creative Production' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 py-2 border-b border-[#0f1a27] last:border-0">
                <span className="text-base mt-0.5">{item.icon}</span>
                <div>
                  <div className="text-sm text-[#e2e8f0]">{item.label}</div>
                  <div className="text-xs text-[#475569]">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/sharjilskhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-[#1e2d40] rounded text-[#94a3b8] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all"
            >
              <span>LinkedIn</span>
              <span className="text-xs opacity-50">↗</span>
            </a>
            <a
              href="https://github.com/MRGDFK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-[#1e2d40] rounded text-[#94a3b8] hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all"
            >
              <span>GitHub</span>
              <span className="text-xs opacity-50">↗</span>
            </a>
            <a
              href="mailto:sharjilskhan3771@gmail.com"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-[#00d4ff]/30 rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all"
            >
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
