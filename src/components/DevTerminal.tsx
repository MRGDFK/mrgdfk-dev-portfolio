'use client'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const jsonFields: [string, string][] = [
  ['name', 'Sharjil'],
  ['role', 'Full-Stack Developer'],
  ['location', 'Dhaka, Bangladesh'],
  ['status', 'Open for collaboration'],
]

const jsonRawLines = [
  '{',
  ...jsonFields.map(([k, v], i) => `  "${k}": "${v}"${i < jsonFields.length - 1 ? ',' : ''}`),
  '}',
]

const TYPE_SPEED = 35
const LINE_PAUSE = 220

type Phase = 'json' | 'divider' | 'cmd' | 'spinner' | 'output' | 'cursor'

function TypingCursor() {
  return <span className="inline-block w-1.5 h-3.5 bg-[#00d4ff] animate-[blink_1s_step-end_infinite] ml-0.5 align-middle" />
}

function renderJsonLine(raw: string) {
  if (raw === '{' || raw === '}') return <span className="text-[#94a3b8]">{raw}</span>
  const m = raw.match(/^(\s*)"([^"]+)":\s*"([^"]*)"(,?)$/)
  if (!m) return <span className="text-[#e2e8f0]">{raw}</span>
  const [, indent, key, value, comma] = m
  return (
    <>
      <span>{indent}</span>
      <span className="text-[#00d4ff]">"{key}"</span>
      <span className="text-[#94a3b8]">: </span>
      <span className="text-[#a5f3a5]">"{value}"</span>
      <span className="text-[#94a3b8]">{comma}</span>
    </>
  )
}

const profiles = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharjilskhan/', icon: FaLinkedin, color: '#3b82f6' },
  { label: 'GitHub', href: 'https://github.com/MRGDFK', icon: FaGithub, color: '#94a3b8' },
  { label: 'Email', href: 'mailto:sharjilskhan3771@gmail.com', icon: FiMail, color: '#f472b6' },
]

export default function DevTerminal() {
  const [completedJsonLines, setCompletedJsonLines] = useState(0)
  const [currentTyped, setCurrentTyped] = useState('')
  const [replayCount, setReplayCount] = useState(0)
  const [animStarted, setAnimStarted] = useState(false)
  const [phase, setPhase] = useState<Phase>('json')
  const [cmdTyped, setCmdTyped] = useState('')

  useEffect(() => {
    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []

    setCompletedJsonLines(0)
    setCurrentTyped('')
    setAnimStarted(false)
    setPhase('json')
    setCmdTyped('')

    const startPostJson = () => {
      const cmd = '$ npm run dev'
      timeouts.push(setTimeout(() => {
        if (cancelled) return
        setPhase('cmd')
        let ci = 0
        const typeCmdChar = () => {
          if (cancelled) return
          if (ci <= cmd.length) {
            setCmdTyped(cmd.slice(0, ci))
            ci++
            timeouts.push(setTimeout(typeCmdChar, TYPE_SPEED))
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
        typeCmdChar()
      }, 300))
    }

    const typeJsonLine = (lineIdx: number, charIdx: number) => {
      if (cancelled) return
      if (lineIdx >= jsonRawLines.length) {
        timeouts.push(setTimeout(() => {
          if (cancelled) return
          setPhase('divider')
          startPostJson()
        }, LINE_PAUSE))
        return
      }
      const line = jsonRawLines[lineIdx]
      if (lineIdx === 0 && charIdx === 0) {
        setAnimStarted(true)
      }
      setCurrentTyped(line.slice(0, charIdx))
      if (charIdx >= line.length) {
        timeouts.push(setTimeout(() => {
          if (cancelled) return
          setCompletedJsonLines(lineIdx + 1)
          setCurrentTyped('')
          typeJsonLine(lineIdx + 1, 0)
        }, LINE_PAUSE))
      } else {
        timeouts.push(setTimeout(() => typeJsonLine(lineIdx, charIdx + 1), TYPE_SPEED))
      }
    }

    typeJsonLine(0, 0)

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [replayCount])

  return (
    <div className="space-y-5">
      {/* Terminal window */}
      <div className="rounded-xl overflow-hidden border border-[#1e2d40] bg-[#0d1321] shadow-2xl shadow-black/40">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1321] border-b border-[#1e2d40]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-[#475569] font-mono">developer.json</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-[#080c16] text-[#fbbf24] border border-[#1e2d40]">JSON</span>
          <button
            onClick={() => setReplayCount(c => c + 1)}
            title="Replay animation"
            className="ml-auto flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-[#475569] hover:text-[#00d4ff] hover:bg-white/5 rounded transition-colors"
          >
            <span>↺</span> replay
          </button>
        </div>

        {/* Body */}
        <div className="bg-[#080c16] p-4 md:p-5 font-mono text-xs leading-7 min-h-[220px]">
          {/* Completed JSON lines */}
          {animStarted && jsonRawLines.slice(0, completedJsonLines).map((raw, i) => (
            <div key={i}>{renderJsonLine(raw)}</div>
          ))}

          {/* Currently typing JSON line */}
          {animStarted && phase === 'json' && completedJsonLines < jsonRawLines.length && (
            <span className="text-[#e2e8f0]">{currentTyped}<TypingCursor /></span>
          )}

          {/* Divider */}
          {phase !== 'json' && (
            <div className="border-t border-white/10 my-4" />
          )}

          {/* Command line */}
          {(phase === 'cmd' || phase === 'spinner' || phase === 'output' || phase === 'cursor') && (
            <div className="flex items-center gap-1">
              <span className="text-[#00d4ff]">$</span>
              <span className="text-[#e2e8f0] ml-1">{cmdTyped}</span>
              {phase === 'cmd' && <TypingCursor />}
              {phase === 'spinner' && (
                <span className="inline-block w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin ml-1" />
              )}
            </div>
          )}

          {/* Output */}
          {(phase === 'output' || phase === 'cursor') && (
            <div className="text-[#4ade80] pl-4">✓ [local server active at http://localhost:3000]</div>
          )}

          {/* Blinking cursor */}
          {phase === 'cursor' && (
            <div className="pl-4">
              <span className="inline-block w-1.5 h-3.5 bg-[#00d4ff] animate-[blink_1s_step-end_infinite] align-middle" />
            </div>
          )}
        </div>
      </div>

      {/* Profiles */}
      <div>
        <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-3 font-mono">// profiles</div>
        <div className="flex flex-wrap gap-2.5">
          {profiles.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e2d40] bg-[#0d1321] text-xs font-mono text-[#94a3b8] transition-all"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color + '60'
                e.currentTarget.style.color = color
                e.currentTarget.style.boxShadow = `0 0 12px ${color}20`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e2d40'
                e.currentTarget.style.color = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
