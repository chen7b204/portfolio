import { PROFILE } from '../constants/profile'
import { ASSETS } from '../constants/assets'
import { SOCIALS } from '../constants/socials'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* 背景视频 */}
      <video
        className="contact-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={ASSETS.sectionVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="container">
        <h2 className="contact-title reveal">
          让我们合作<span className="dot">。</span>
        </h2>
        <p className="contact-en reveal">LET'S WORK TOGETHER</p>
        <p className="contact-tagline reveal">
          如果你也相信技术和美学可以共存，我们聊聊。
        </p>

        <a href={`mailto:${PROFILE.email}`} className="contact-email-btn reveal">
          ✉ 发送邮件 →
        </a>

        <div className="contact-direct reveal">
          <a href={`tel:${PROFILE.phone}`}>📞 {PROFILE.phone}</a>
          <a href={`mailto:${PROFILE.email}`}>✉ {PROFILE.email}</a>
        </div>

        <div className="contact-socials reveal">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 {PROFILE.name} · 用 React + Vite 构建</span>
        <span>视觉 × AI × 品牌设计</span>
      </footer>
    </section>
  )
}
