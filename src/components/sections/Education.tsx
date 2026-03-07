'use client'

const education = {
  institution: 'Ahsanullah University of Science and Technology',
  short: 'AUST',
  degree: 'B.Sc. in Computer Science and Engineering',
  date: 'December, 2025',
  cgpa: '3.236',
  cgpaMax: '4.00',
  focusAreas: [
    'Artificial Intelligence',
    'Data Structures',
    'Algorithms',
    'Software Engineering',
    'Database Systems',
    'Computer Networks',
  ],
}

const certifications = [
  {
    id: 'cert-01',
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera (IBM)',
    date: 'Oct 2023',
    color: '#fbbf24',
    url: 'https://courses.cognitiveclass.ai/certificates/a6642849bc9d4067b8adb372ff34fc09',
    lines: [
      '// IBM — Coursera Certification',
      'const cert = {',
      '  topic: "Python for Data Science",',
      '  skills: ["Python", "AI", "Pandas"],',
    ],
  },
  {
    id: 'cert-02',
    title: 'Full Stack Web Development',
    issuer: 'Ostad',
    date: 'Dec 2025',
    color: '#a5f3a5',
    url: 'https://www.coursera.org/account/accomplishments/verify/E32TTHEAP2T4',
    lines: [
      '// Ostad Certification',
      'const cert = {',
      '  topic: "Full Stack Web Dev",',
      '  skills: ["Python","Django","React"],',
    ],
  },
]

const eduCodeLines = [
  { n: 1,  tokens: [{ t: 'comment', v: '// education record' }] },
  { n: 2,  tokens: [] },
  { n: 3,  tokens: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'education' }, { t: 'op', v: ' = {' }] },
  { n: 4,  tokens: [{ t: 'key', v: '  institution' }, { t: 'op', v: ': ' }, { t: 'str', v: '"AUST"' }, { t: 'op', v: ',' }] },
  { n: 5,  tokens: [{ t: 'key', v: '  degree' }, { t: 'op', v: ': ' }, { t: 'str', v: '"B.Sc. CSE"' }, { t: 'op', v: ',' }] },
  { n: 6,  tokens: [{ t: 'key', v: '  graduated' }, { t: 'op', v: ': ' }, { t: 'str', v: '"December 2025"' }, { t: 'op', v: ',' }] },
  { n: 7,  tokens: [{ t: 'key', v: '  cgpa' }, { t: 'op', v: ': ' }, { t: 'num', v: '3.15' }, { t: 'op', v: ' / ' }, { t: 'num', v: '4.00' }, { t: 'op', v: ',' }] },
  { n: 8,  tokens: [{ t: 'op', v: '}' }] },
]

const tokenColor: Record<string, string> = {
  keyword: '#c792ea', var: '#00d4ff', key: '#00d4ff',
  str: '#a5f3a5', op: '#94a3b8', num: '#fbbf24', comment: '#334155',
}

function SectionHeading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#00d4ff]">{icon}</span>
      <h2 className="text-[#e2e8f0] text-2xl font-bold tracking-tight">{label}</h2>
      <div className="flex-1 h-px bg-[#1e2d40] ml-2" />
    </div>
  )
}

export default function Education() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-14">

      {/* File header */}
      <div className="text-sm font-mono">
        <span className="text-[#475569]">// Education.tsx</span>
        <span className="text-[#1e2d40]"> — academic background & certifications</span>
      </div>

      {/* ── EDUCATION SECTION ─────────────────────────────────── */}
      <section>
        <SectionHeading
          label="Education"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          }
        />

        <div className="grid md:grid-cols-2 gap-6">

          {/* Code block */}
          <div className="rounded-lg overflow-hidden border border-[#1e2d40]">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1321] border-b border-[#1e2d40] text-xs text-[#475569] font-mono">
              <span className="text-[#00d4ff]">⚛</span>
              <span>education.ts</span>
              <span className="ml-auto text-[#1e2d40]">8 lines</span>
            </div>
            <div className="bg-[#080c16] p-4 font-mono text-xs leading-7">
              {eduCodeLines.map((line) => (
                <div key={line.n} className="flex hover:bg-white/[0.015] rounded">
                  <span className="w-5 text-right text-[#1e2d40] mr-4 select-none">{line.n}</span>
                  <span>
                    {line.tokens.length === 0
                      ? <span>&nbsp;</span>
                      : line.tokens.map((tok, i) => (
                          <span key={i} style={{ color: tokenColor[tok.t] || '#e2e8f0' }}>{tok.v}</span>
                        ))
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Degree card */}
          <div className="border border-[#1e2d40] rounded-lg bg-[#0d1321] overflow-hidden hover:border-[#00d4ff]/25 transition-colors">
            {/* Fake window chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#080c16] border-b border-[#1e2d40]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
              </div>
              <span className="text-[10px] text-[#475569] font-mono ml-2">degree.json</span>
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded font-mono bg-[#0a0e1a] text-[#00d4ff] border border-[#00d4ff]/20">
                B.Sc.
              </span>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <div className="text-[10px] text-[#334155] uppercase tracking-widest font-mono mb-1.5">institution</div>
                <div className="text-[#e2e8f0] font-bold text-base leading-snug">{education.institution}</div>
                <div className="text-[#00d4ff] text-xs font-mono mt-1">({education.short})</div>
              </div>

              <div className="border-t border-[#1e2d40] pt-4">
                <div className="text-[10px] text-[#334155] uppercase tracking-widest font-mono mb-1.5">degree</div>
                <div className="text-[#a5f3a5] text-sm font-mono">{education.degree}</div>
              </div>

              <div className="border-t border-[#1e2d40] pt-4 flex items-end justify-between">
                <div>
                  <div className="text-[10px] text-[#334155] uppercase tracking-widest font-mono mb-1">graduated</div>
                  <div className="text-[#94a3b8] text-sm font-mono">{education.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#334155] uppercase tracking-widest font-mono mb-1">cgpa</div>
                  <div className="text-[#fbbf24] font-bold font-mono text-lg">
                    {education.cgpa}<span className="text-[#334155] text-sm">/{education.cgpaMax}</span>
                  </div>
                </div>
              </div>

              {/* CGPA bar */}
              <div className="pt-1">
                <div className="h-1.5 bg-[#1e2d40] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(parseFloat(education.cgpa) / parseFloat(education.cgpaMax)) * 100}%`,
                      background: 'linear-gradient(90deg, #fbbf2466, #fbbf24)',
                      boxShadow: '0 0 8px rgba(251,191,36,0.4)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Focus areas terminal */}
        <div className="mt-5 border border-[#1e2d40] rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1321] border-b border-[#1e2d40] text-xs font-mono text-[#475569]">
            <span className="text-[#28c840]">$</span>
            <span>cat focus_areas.txt</span>
          </div>
          <div className="bg-[#080c16] p-5 font-mono text-xs">
            <div className="text-[#475569] mb-3">
              <span className="text-[#00d4ff]">➜</span> <span className="text-[#475569]">~/aust/cse</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {education.focusAreas.map((area, i) => (
                <span key={area} className="flex items-center gap-1.5">
                  <span className="text-[#00d4ff]">[{String(i).padStart(2, '0')}]</span>
                  <span className="text-[#a5f3a5]">{area}</span>
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1 text-[#334155]">
              <span className="text-[#00d4ff]">➜</span>
              <span className="text-[#475569] ml-1">~/aust/cse</span>
              <span className="text-[#00d4ff] ml-1">$</span>
              <span className="inline-block w-1.5 h-3.5 bg-[#00d4ff] animate-[blink_1s_step-end_infinite] ml-1 align-middle opacity-70" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS SECTION ────────────────────────────── */}
      <section>
        <SectionHeading
          label="Certifications"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
          }
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-[#1e2d40] rounded-lg overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
              onMouseEnter={e => e.currentTarget.style.borderColor = cert.color + '45'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1e2d40'}
            >
              {/* Code block header */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1321] border-b border-[#1e2d40] text-[10px] font-mono text-[#475569]">
                <span style={{ color: cert.color }}>◈</span>
                <span>{cert.id}.ts</span>
                <span className="ml-auto font-mono" style={{ color: cert.color + 'cc' }}>{cert.date}</span>
              </div>

              {/* Mini code preview */}
              <div className="bg-[#080c16] px-4 py-3 font-mono text-[11px] leading-6 border-b border-[#1e2d40]">
                {cert.lines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-4 text-right text-[#1e2d40] mr-3 select-none text-[10px]">{i + 1}</span>
                    <span className={
                      line.startsWith('//') ? 'text-[#334155]' :
                      line.includes('const') ? 'text-[#c792ea]' :
                      line.includes('"') ? 'text-[#a5f3a5]' :
                      'text-[#94a3b8]'
                    }>{line}</span>
                  </div>
                ))}
              </div>

              {/* Info + verify */}
              <div className="p-4 bg-[#0a0e1a] flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-[#e2e8f0] text-sm font-semibold leading-snug mb-1">{cert.title}</div>
                  <div className="text-[#475569] text-xs font-mono">{cert.issuer}</div>
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded border transition-all"
                  style={{ color: cert.color, borderColor: cert.color + '40' }}
                  onMouseEnter={e => { e.currentTarget.style.background = cert.color + '15' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
