import { useEffect } from 'react'

export default function ProjectModal({ work, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!work) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          ✕
        </button>

        <div className="modal-media">
          {work.video ? (
            <video src={work.video} controls preload="metadata" />
          ) : (
            <img src={work.cover} alt={work.title} />
          )}
        </div>

        <div className="modal-body">
          <h3 className="modal-title">{work.title}</h3>
          <div className="modal-meta">
            {work.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
            <span>工具：{work.tools.join(' / ')}</span>
          </div>
          <p className="modal-desc">{work.fullDesc}</p>
        </div>
      </div>
    </div>
  )
}
