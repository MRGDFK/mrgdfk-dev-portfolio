'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const links = [
  { label: 'sharjilskhan3771@gmail.com', href: 'mailto:sharjilskhan3771@gmail.com', icon: FiMail, color: '#f472b6' },
  { label: 'linkedin.com/in/sharjilskhan', href: 'https://www.linkedin.com/in/sharjilskhan/', icon: FaLinkedin, color: '#3b82f6' },
  { label: 'github.com/MRGDFK', href: 'https://github.com/MRGDFK', icon: FaGithub, color: '#94a3b8' },
]

export default function ContactSection() {
  const navigate = () => window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))

  return (
    <div className="border border-[#1e2d40] rounded-xl bg-[#0d1321] p-6 md:p-10 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
        <span className="text-[#4ade80] text-xs font-mono">available for work</span>
      </div>

      <h2 className="text-[#e2e8f0] text-2xl md:text-3xl font-bold max-w-xl mx-auto">
        Let&apos;s build something great together.
      </h2>
      <p className="text-[#94a3b8] text-sm mt-3 max-w-md mx-auto leading-relaxed">
        Open to full-time roles, freelance work, or interesting collaborations — always happy to talk shop.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
        {links.map(({ label, href, icon: Icon, color }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="flex items-center gap-2 px-3 py-2 rounded border border-[#1e2d40] bg-[#080c16] text-xs font-mono text-[#94a3b8] hover:text-[#e2e8f0] transition-all"
            onMouseEnter={e => { e.currentTarget.style.borderColor = color + '60' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e2d40' }}
          >
            <Icon size={14} style={{ color }} />
            {label}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        <a
          href="mailto:sharjilskhan3771@gmail.com"
          className="px-5 py-2.5 text-sm border border-[#00d4ff] rounded text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:shadow-[0_0_16px_rgba(0,212,255,0.2)] transition-all font-mono flex items-center gap-2"
        >
          <span>⚡</span> send_message()
        </a>
        <button
          onClick={navigate}
          className="px-5 py-2.5 text-sm border border-[#1e2d40] rounded text-[#475569] hover:text-[#94a3b8] hover:border-[#2a3a50] transition-all font-mono"
        >
          open contact form →
        </button>
      </div>
    </div>
  )
}
