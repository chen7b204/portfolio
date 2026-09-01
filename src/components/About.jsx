import { useState, useRef, useEffect } from 'react'
import { PROFILE } from '../constants/profile'
import { ASSETS } from '../constants/assets'
import { STATS } from '../constants/stats'
import { TIMELINE } from '../constants/timeline'
import { useCountUp } from '../hooks'

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const value = useCountUp(stat.value, 1500, started)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stat-card reveal" ref={ref} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="stat-number">
        {value}{stat.suffix || ''}
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-sub">{stat.sub}</div>
    </div>
  )
}

export default function About({ onImageClick }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="section">
      <video className="section-bg-video" autoPlay muted loop playsInline preload="auto">
        <source src={ASSETS.sectionVideo} type="video/mp4" />
      </video>
      <div className="section-bg-overlay" />

      <div className="container">
        <div className="section-header reveal">
          <div className="section-number">01 / ABOUT</div>
          <h2 className="section-title">关于我</h2>
        </div>

        <div className="about-grid">
          {/* 人物图 */}
          <div className="about-image-wrap reveal">
            <img src={ASSETS.portrait} alt={PROFILE.name} loading="lazy" />
            <div className="about-image-overlay" />
          </div>

          {/* 文字内容 */}
          <div className="about-text reveal">
            <h3>{PROFILE.name}</h3>
            <p className="about-role">{PROFILE.school} · {PROFILE.major}在读</p>
            <p className="about-bio">{PROFILE.bio}</p>

            {/* 扩展简介段落 */}
            <div className="about-extended">
              {PROFILE.bioExtended.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* 联系方式 */}
            <div className="contact-card">
              <div className="contact-avatar">
                <img src={ASSETS.avatar} alt={PROFILE.name} loading="lazy" />
              </div>
              <div className="contact-info">
                <p>
                  📞 <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
                </p>
                <p>
                  ✉ <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                  <button
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopyEmail}
                  >
                    {copied ? '已复制' : '复制'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* 性格特点 */}
        <div className="personality-section reveal">
          <div className="certs-title">性格特点 / PERSONALITY</div>
          <div className="personality-grid">
            {PROFILE.personality.map((p, i) => (
              <div className="personality-card" key={i}>
                <div className="personality-tag">{p.tag}</div>
                <div className="personality-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 个人兴趣 */}
        <div className="interests-section reveal">
          <div className="certs-title">个人兴趣 / INTERESTS</div>
          <div className="interests-grid">
            {PROFILE.interests.map((item, i) => (
              <div className="interest-card" key={i}>
                <div className="interest-icon">{item.icon}</div>
                <div className="interest-name">{item.name}</div>
                <div className="interest-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 证书展示 */}
        <div className="certs-section reveal">
          <div className="certs-title">证书与成就 / CERTIFICATES</div>
          <div className="certs-grid">
            <div className="cert-card" onClick={() => onImageClick(ASSETS.certificate1)}>
              <img src={ASSETS.certificate1} alt="AI训练师初级证书" loading="lazy" />
              <div className="cert-label">AI 训练师 · 初级认证</div>
            </div>
            <div className="cert-card" onClick={() => onImageClick(ASSETS.certificate2)}>
              <img src={ASSETS.certificate2} alt="AI训练师高级证书" loading="lazy" />
              <div className="cert-label">AI 训练师 · 高级认证</div>
            </div>
          </div>
        </div>

        {/* 时间线 */}
        <div className="reveal">
          <div className="certs-title">经历时间线 / TIMELINE</div>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
