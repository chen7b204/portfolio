import { SKILLS } from '../constants/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-number">03 / SKILLS</div>
          <h2 className="section-title">个人优势</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.number}
              className="skill-card reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="skill-num">{skill.number}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <div className="skill-en">{skill.titleEn}</div>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
