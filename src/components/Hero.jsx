import { PROFILE } from '../constants/profile'
import { ASSETS } from '../constants/assets'

// Hero 信息框数据
const ORBIT_CARDS = [
  { num: '01', en: 'ABOUT', title: '关于我', desc: '通信工程在读 · 视觉与AI设计师', target: 'about', angle: 45 },
  { num: '02', en: 'WORKS', title: '精选作品', desc: '品牌 · AI实验 · 演讲设计', target: 'works', angle: 135 },
  { num: '03', en: 'SKILLS', title: '个人优势', desc: '跨学科思维 · AI工具 · 快速学习', target: 'skills', angle: 225 },
  { num: '04', en: 'CONTACT', title: '联系合作', desc: '让我们一起做点有意思的事', target: 'contact', angle: 315 },
]

const RADIUS = 'clamp(240px, 30vw, 360px)'

export default function Hero() {
  const handleCardClick = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* 背景视频 */}
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={ASSETS.works.ai}
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>

      {/* 暗色遮罩 */}
      <div className="hero-overlay" />

      {/* 网格叠加 */}
      <div className="hero-grid" />

      {/* 左上角标签 */}
      <div className="hero-eyebrow">
        <div className="line" />
        <p>HELLO, I'M</p>
        <p>{PROFILE.nameEn}</p>
      </div>

      {/* 中心标题 */}
      <div className="hero-content">
        <h1 className="hero-title">{PROFILE.name}</h1>
        <p className="hero-subtitle">{PROFILE.subtitle}</p>

        {/* 移动端信息框（静态排列） */}
        <div className="hero-mobile-cards">
          {ORBIT_CARDS.map((card) => (
            <div
              key={card.num}
              className="hud-card"
              onClick={() => handleCardClick(card.target)}
            >
              <div className="hud-card-header">
                <span className="hud-card-dot" />
                <span className="hud-card-num">{card.num}</span>
                <span className="hud-card-en">{card.en}</span>
              </div>
              <div className="hud-card-title">{card.title}</div>
              <div className="hud-card-desc">{card.desc}</div>
              <div className="hud-card-enter">ENTER →</div>
            </div>
          ))}
        </div>
      </div>

      {/* PC端旋转信息框 */}
      <div className="orbit-stage">
        <div className="orbit-ring" />
        <div className="orbit-container">
          {ORBIT_CARDS.map((card) => (
            <div
              key={card.num}
              className="orbit-card-pos"
              style={{
                transform: `rotate(${card.angle}deg) translateX(${RADIUS})`,
              }}
            >
              <div className="orbit-card-inner">
                <div
                  className="hud-card"
                  onClick={() => handleCardClick(card.target)}
                >
                  <div className="hud-card-header">
                    <span className="hud-card-dot" />
                    <span className="hud-card-num">{card.num}</span>
                    <span className="hud-card-en">{card.en}</span>
                  </div>
                  <div className="hud-card-title">{card.title}</div>
                  <div className="hud-card-desc">{card.desc}</div>
                  <div className="hud-card-enter">ENTER →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="hero-scroll">
        SCROLL
        <span className="arrow">↓</span>
      </div>
    </section>
  )
}
