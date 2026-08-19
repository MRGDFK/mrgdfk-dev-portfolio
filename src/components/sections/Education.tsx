'use client'

const workHistory = [
  {
    date: 'Jun 2026 - Present',
    title: 'Trainee Software Engineer',
    company: 'ADN DigiNet Ltd. — Mohakhali, Dhaka',
    bullets: [
      'Engineered the backend of ADN Tender App using Django REST Framework and PostgreSQL; built production Scrapy crawlers for government procurement portals with session-based auth, OCR extraction, and daily Celery Beat scheduling.',
      'Designed a two-layer AI Matching Engine combining RapidFuzz lexical scoring with a Gemma 4 31B LLM validation layer, plus an async AI Summary pipeline and Kanban-style Bid Pipeline with automated notifications.',
      'Contributed to the Next.js 14 frontend, building admin dashboard components with AI health panels and crawler stat visualisations using Recharts; integrated Microsoft MSAL OAuth for role-based access control.',
    ],
  },
]

export default function Education() {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">

      {/* Section header */}
      <div className="mb-10">
        <div className="text-[11px] text-[#334155] font-mono tracking-widest mb-2">// 03 — career_timeline</div>
        <h2 className="text-[#e2e8f0] text-2xl md:text-3xl font-bold">Work History</h2>
      </div>

      {/* Timeline */}
      <div className="relative space-y-12">
        {/* Vertical connecting line */}
        <div className="absolute left-[4.5px] top-3 bottom-3 w-px bg-[#1e2d40]" />

        {workHistory.map((entry, i) => (
          <div key={i} className="relative flex gap-5">
            {/* Timeline marker */}
            <div className="flex flex-col items-center shrink-0 pt-1.5 relative z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.5)]" />
            </div>

            {/* Entry content */}
            <div className="space-y-2">
              <div className="text-xs text-[#475569] font-mono">{entry.date}</div>
              <div className="text-[#e2e8f0] font-bold text-lg">{entry.title}</div>
              <div className="text-xs text-[#475569] font-mono">{entry.company}</div>
              <div className="space-y-1.5 pt-1">
                {entry.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                    <span className="text-[#475569] shrink-0 mt-0.5">&gt;</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
