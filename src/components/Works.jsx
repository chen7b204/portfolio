import { WORKS } from '../constants/works'

export default function Works({ onWorkClick }) {
  // 分两行：第一行大+小，第二行小+大（错位）
  const row1 = [WORKS[0], WORKS[1]]
  const row2 = [WORKS[2], WORKS[3]]

  return (
    <section id="works" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-number">02 / WORK</div>
          <h2 className="section-title">精选项目</h2>
        </div>

        <div className="works-grid">
          <div className="works-row">
            {row1.map((work, i) => (
              <div
                key={work.id}
                className={`work-card reveal ${i === 0 ? 'large' : 'small'}`}
                onClick={() => onWorkClick(work)}
              >
                <div className="work-cover">
                  <img src={work.cover} alt={work.title} loading="lazy" />
                  <div className="work-cover-overlay" />
                </div>
                <div className="work-info">
                  <div className="work-num">{work.number} / {work.titleEn}</div>
                  <h3 className="work-title">{work.title}</h3>
                  <div className="work-tags">
                    {work.tags.map((tag) => (
                      <span key={tag} className="work-tag">#{tag}</span>
                    ))}
                  </div>
                  <p className="work-desc">{work.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="works-row">
            {row2.map((work, i) => (
              <div
                key={work.id}
                className={`work-card reveal ${i === 0 ? 'small' : 'large'}`}
                onClick={() => onWorkClick(work)}
              >
                <div className="work-cover">
                  <img src={work.cover} alt={work.title} loading="lazy" />
                  <div className="work-cover-overlay" />
                </div>
                <div className="work-info">
                  <div className="work-num">{work.number} / {work.titleEn}</div>
                  <h3 className="work-title">{work.title}</h3>
                  <div className="work-tags">
                    {work.tags.map((tag) => (
                      <span key={tag} className="work-tag">#{tag}</span>
                    ))}
                  </div>
                  <p className="work-desc">{work.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
