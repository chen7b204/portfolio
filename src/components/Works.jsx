import { WORKS } from '../constants/works'

export default function Works({ onWorkClick }) {
  // 分三行：前两行大+小错位，第三行游戏独占
  const row1 = [WORKS[0], WORKS[1]]
  const row2 = [WORKS[2], WORKS[3]]
  const game = WORKS[4]

  const handleCardClick = (work) => {
    if (work.isGame) {
      window.open(work.gameUrl, '_blank')
    } else {
      onWorkClick(work)
    }
  }

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
                onClick={() => handleCardClick(work)}
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
                onClick={() => handleCardClick(work)}
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

          {/* 游戏卡片 - 独占一行 */}
          <div className="works-row">
            <div
              className="work-card reveal game-card"
              onClick={() => handleCardClick(game)}
            >
              <div className="work-cover">
                <img src={game.cover} alt={game.title} loading="lazy" />
                <div className="work-cover-overlay" />
                <div className="game-play-badge">▶ 点击开始游戏</div>
              </div>
              <div className="work-info">
                <div className="work-num">{game.number} / {game.titleEn}</div>
                <h3 className="work-title">{game.title}</h3>
                <div className="work-tags">
                  {game.tags.map((tag) => (
                    <span key={tag} className="work-tag">#{tag}</span>
                  ))}
                </div>
                <p className="work-desc">{game.shortDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
