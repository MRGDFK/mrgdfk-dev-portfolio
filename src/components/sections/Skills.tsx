'use client'
import { useState } from 'react'

const skillsData = {
  frontend: {
    label: 'Frontend',
    color: '#61dafb',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  backend: {
    label: 'Backend',
    color: '#a5f3a5',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'ASP.NET', level: 75 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Auth', level: 82 },
      { name: 'PHP', level: 70 },
    ],
  },
  database: {
    label: 'Databases',
    color: '#fbbf24',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'SQLite', level: 75 },
    ],
  },
  languages: {
    label: 'Languages',
    color: '#c084fc',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 78 },
      { name: 'Python', level: 72 },
      { name: 'C/C++', level: 68 },
      { name: 'C#', level: 70 },
    ],
  },
  tools: {
    label: 'Tools & Others',
    color: '#fb7185',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 72 },
      { name: 'Postman', level: 85 },
      { name: 'Android Studio', level: 75 },
      { name: 'VS Code', level: 95 },
    ],
  },
  ai: {
    label: 'AI / ML',
    color: '#00d4ff',
    skills: [
      { name: 'Reinforcement Learning', level: 60 },
      { name: 'Game AI', level: 65 },
      { name: 'NumPy', level: 68 },
      { name: 'System Design', level: 58 },
    ],
  },
}

type Category = keyof typeof skillsData

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('frontend')
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    frontend: true, backend: true, database: false, languages: false, tools: false, ai: false,
  })

  const cat = skillsData[activeCategory]

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="text-[#334155] text-sm mb-6 font-mono">
        <span className="text-[#475569]">// Skills.json</span>
        <span className="text-[#1e2d40]"> — tech proficiency data</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* JSON tree left */}
        <div className="border border-[#1e2d40] rounded-lg overflow-hidden min-h-0">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1321] border-b border-[#1e2d40] text-xs text-[#475569]">
            <span className="text-[#a5f3a5]">{'{}'}</span>
            <span>Skills.json</span>
          </div>
          <div className="bg-[#080c16] p-4 font-mono text-xs leading-7 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <div><span className="text-[#94a3b8]">{'{'}</span></div>
            {(Object.entries(skillsData) as [Category, typeof skillsData[Category]][]).map(([key, val]) => (
              <div key={key} className="ml-2">
                <button
                  className="flex items-center gap-1 hover:text-[#e2e8f0] transition-colors w-full text-left"
                  onClick={() => {
                    setExpanded(e => ({ ...e, [key]: !e[key] }))
                    setActiveCategory(key)
                  }}
                >
                  <span className="text-[#334155] text-[10px] w-4">{expanded[key] ? '▾' : '▸'}</span>
                  <span
                    className="json-key"
                    style={{ color: activeCategory === key ? val.color : '#00d4ff' }}
                  >
                    "{key}"
                  </span>
                  <span className="text-[#94a3b8]">: {'{'}</span>
                  {!expanded[key] && <span className="text-[#334155]"> ... {'}'}{','}</span>}
                </button>

                {expanded[key] && (
                  <div className="ml-4">
                    <div>
                      <span className="json-key">"label"</span>
                      <span className="text-[#94a3b8]">: </span>
                      <span className="json-string">"{val.label}"</span>
                      <span className="text-[#94a3b8]">,</span>
                    </div>
                    <div>
                      <span className="json-key">"skills"</span>
                      <span className="text-[#94a3b8]">: [</span>
                    </div>
                    {val.skills.map((s, i) => (
                      <div key={s.name} className="ml-4">
                        <span className="text-[#94a3b8]">{'{ '}</span>
                        <span className="json-key">"name"</span>
                        <span className="text-[#94a3b8]">: </span>
                        <span className="json-string">"{s.name}"</span>
                        <span className="text-[#94a3b8]">, </span>
                        <span className="json-key">"level"</span>
                        <span className="text-[#94a3b8]">: </span>
                        <span className="json-number">{s.level}</span>
                        <span className="text-[#94a3b8]">{' }'}{i < val.skills.length - 1 ? ',' : ''}</span>
                      </div>
                    ))}
                    <div><span className="text-[#94a3b8]">]</span></div>
                    <div><span className="text-[#94a3b8]">{'}'}{','}</span></div>
                  </div>
                )}
              </div>
            ))}
            <div><span className="text-[#94a3b8]">{'}'}</span></div>
          </div>
        </div>

        {/* Visual right */}
        <div>
          {/* Category selector */}
          <div className="flex flex-wrap gap-2 mb-5">
            {(Object.entries(skillsData) as [Category, typeof skillsData[Category]][]).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 py-1.5 text-xs rounded border font-mono transition-all ${
                  activeCategory === key
                    ? 'border-current text-current bg-white/5'
                    : 'border-[#1e2d40] text-[#475569] hover:text-[#94a3b8]'
                }`}
                style={{ color: activeCategory === key ? val.color : undefined, borderColor: activeCategory === key ? val.color : undefined }}
              >
                {val.label}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="space-y-4">
            {cat.skills.map((skill, i) => (
              <div key={skill.name} style={{ animationDelay: `${i * 60}ms` }} className="animate-fade-in">
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm text-[#e2e8f0] font-mono">{skill.name}</span>
                  <span className="text-xs text-[#475569]">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-[#1e2d40] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${cat.color}88, ${cat.color})`,
                      boxShadow: `0 0 8px ${cat.color}66`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Badge wall */}
          <div className="mt-8">
            <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-3">// all technologies</div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(skillsData).flatMap(([catKey, c]) => c.skills.map(s => ({ name: s.name, color: c.color, key: `${catKey}-${s.name}` }))).map((item) => (
                <span
                  key={item.key}
                  className="text-xs px-2.5 py-1 rounded border border-[#1e2d40] text-[#475569] hover:border-opacity-60 transition-all font-mono cursor-default"
                  style={{ '--hover-color': item.color } as React.CSSProperties}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.borderColor = item.color + '66'
                    ;(e.target as HTMLElement).style.color = item.color
                  }}
                  onMouseLeave={e => {
                    ;(e.target as HTMLElement).style.borderColor = ''
                    ;(e.target as HTMLElement).style.color = ''
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
