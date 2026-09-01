import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import BackToTop from './components/BackToTop'
import { useScrollSpy, useReveal } from './hooks'

export default function App() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [viewImage, setViewImage] = useState(null)
  const activeId = useScrollSpy(['about', 'works', 'skills', 'contact'])

  useReveal()

  // 图片查看器 ESC 关闭
  useEffect(() => {
    if (!viewImage) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') setViewImage(null)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [viewImage])

  return (
    <>
      <Navbar activeId={activeId} />
      <Hero />
      <About onImageClick={setViewImage} />
      <Works onWorkClick={setSelectedWork} />
      <Skills />
      <Contact />
      <BackToTop />

      {selectedWork && (
        <ProjectModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}

      {viewImage && (
        <div className="image-viewer" onClick={() => setViewImage(null)}>
          <img src={viewImage} alt="预览" />
        </div>
      )}
    </>
  )
}
