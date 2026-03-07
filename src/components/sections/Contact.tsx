'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Simulate send — wire up to your API/emailjs/formspree
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
  }

  const inputClass = (field: string) =>
    `w-full bg-[#080c16] border rounded px-4 py-2.5 text-sm font-mono text-[#e2e8f0] outline-none transition-all placeholder-[#334155] ${
      focused === field
        ? 'border-[#00d4ff] shadow-[0_0_0_1px_rgba(0,212,255,0.2)]'
        : 'border-[#1e2d40] hover:border-[#2a3a50]'
    }`

  const codePreview = `const message = {
  from: "${form.name || 'your.name'}",
  email: "${form.email || 'your@email.com'}",
  subject: "${form.subject || 'Hello Sharjil'}",
  body: \`${form.message || 'Your message here...'}\`,
};

await sendTo("sharjilskhan3771@gmail.com");`

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="text-[#334155] text-sm mb-6 font-mono">
        <span className="text-[#475569]">// Contact.tsx</span>
        <span className="text-[#1e2d40]"> — send a message</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-4">
          <div className="mb-6">
            <h2 className="text-[#e2e8f0] text-xl font-bold mb-1">Get In Touch</h2>
            <p className="text-[#475569] text-sm">Open for opportunities, collaborations, or just a chat.</p>
          </div>

          {status === 'sent' ? (
            <div className="border border-[#1a2e1a] rounded-lg p-6 bg-[#0d1321] text-center">
              <div className="text-[#4ade80] text-3xl mb-3">✓</div>
              <div className="text-[#e2e8f0] font-mono mb-1">Message sent!</div>
              <div className="text-[#475569] text-sm">I'll get back to you soon.</div>
              <button
                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="mt-4 text-xs text-[#00d4ff] hover:underline font-mono"
              >
                send another →
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="text-[10px] text-[#334155] uppercase tracking-widest font-mono block mb-1.5">name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your name"
                  className={inputClass('name')}
                />
              </div>
              <div>
                <label className="text-[10px] text-[#334155] uppercase tracking-widest font-mono block mb-1.5">email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="you@example.com"
                  className={inputClass('email')}
                />
              </div>
              <div>
                <label className="text-[10px] text-[#334155] uppercase tracking-widest font-mono block mb-1.5">subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  placeholder="What's this about?"
                  className={inputClass('subject')}
                />
              </div>
              <div>
                <label className="text-[10px] text-[#334155] uppercase tracking-widest font-mono block mb-1.5">message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your message..."
                  rows={5}
                  className={`${inputClass('message')} resize-none`}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending' || !form.name || !form.email || !form.message}
                className={`w-full py-2.5 rounded border font-mono text-sm transition-all flex items-center justify-center gap-2 ${
                  !form.name || !form.email || !form.message
                    ? 'border-[#1e2d40] text-[#334155] cursor-not-allowed'
                    : 'border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 cursor-pointer'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                    sending...
                  </>
                ) : (
                  <>
                    <span>⚡</span>
                    send_message()
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Right: code preview + links */}
        <div className="space-y-5">
          {/* Live code preview */}
          <div className="border border-[#1e2d40] rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1321] border-b border-[#1e2d40] text-xs text-[#475569]">
              <span className="text-[#c792ea]">⚛</span>
              <span>message.preview.ts</span>
              <span className="ml-auto text-[#28c840] text-[10px]">● live</span>
            </div>
            <pre className="bg-[#080c16] p-4 text-xs font-mono text-[#94a3b8] overflow-auto leading-6">
              {codePreview.split('\n').map((line, i) => (
                <div key={i}>
                  <span className="text-[#1e2d40] text-[10px] mr-4 select-none">{String(i + 1).padStart(2)}</span>
                  <span className={
                    line.includes('const') || line.includes('await') ? 'text-[#c792ea]' :
                    line.match(/"[^"]*":/) ? 'text-[#00d4ff]' :
                    line.includes('"') && !line.includes(':') ? 'text-[#a5f3a5]' :
                    'text-[#94a3b8]'
                  }>
                    {line || '\u00A0'}
                  </span>
                </div>
              ))}
            </pre>
          </div>

          {/* Contact links */}
          <div>
            <div className="text-[10px] text-[#334155] uppercase tracking-widest mb-3">// or reach out directly</div>
            <div className="space-y-2">
              {[
                { icon: '✉', label: 'sharjilskhan3771@gmail.com', href: 'mailto:sharjilskhan3771@gmail.com', color: '#f472b6' },
                { icon: '⬡', label: 'github.com/MRGDFK', href: 'https://github.com/MRGDFK', color: '#94a3b8' },
                { icon: '◈', label: 'linkedin.com/in/sharjilskhan', href: 'https://www.linkedin.com/in/sharjilskhan/', color: '#3b82f6' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded border border-[#1e2d40] hover:border-[#2a3a50] bg-[#0d1321] hover:bg-[#0f1a27] transition-all group"
                >
                  <span style={{ color: link.color }} className="text-sm">{link.icon}</span>
                  <span className="text-sm text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors font-mono text-xs">
                    {link.label}
                  </span>
                  <span className="ml-auto text-[#334155] group-hover:text-[#475569] text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="border border-[#1e2d40] rounded-lg p-4 bg-[#0d1321]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-[#4ade80] text-sm font-mono">Available for work</span>
            </div>
            <p className="text-xs text-[#475569]">Open to full-time roles, freelance, or interesting collaborations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
