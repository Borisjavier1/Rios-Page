import { ArrowUpRight, Camera, Disc3, MapPin, Music2, Share2, Video } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import { artist } from './artist'
import './styles.css'

const iconFor = (label) => {
  if (label === 'Instagram') return Camera
  if (label === 'YouTube') return Video
  if (label === 'Spotify') return Disc3
  return Music2
}

function App() {
  const currentYear = new Date().getFullYear()

  const copyLink = async (event) => {
    const pageUrl = window.location.href
    const button = event.currentTarget
    try {
      try {
        await navigator.clipboard.writeText(pageUrl)
      } catch {
        const textArea = document.createElement('textarea')
        textArea.value = pageUrl
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        textArea.remove()
      }
      button.setAttribute('aria-label', 'Enlace copiado')
      button.setAttribute('title', 'Enlace copiado')
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>'
      window.setTimeout(() => {
        button.setAttribute('aria-label', 'Copiar enlace de la página')
        button.setAttribute('title', 'Compartir página')
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49" /></svg>'
      }, 2200)
    } catch {
      button.setAttribute('aria-label', 'No se pudo copiar el enlace')
    }
  }

  return (
    <main className="page" style={{ '--artist-image': `url(${artist.backgroundImage})` }}>
      <div className="image-layer" aria-hidden="true" />
      <div className="shade" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <img className="broccoli-watermark" src="/brocoli.avif" alt="" aria-hidden="true" />

      <nav className="topbar" aria-label="Navegación principal">
        <span className="brand-mark">R / 01</span>
        <button className="share-button" type="button" onClick={copyLink} aria-label="Copiar enlace de la página" title="Compartir página">
          <Share2 size={18} strokeWidth={1.7} />
        </button>
      </nav>

      <section className="content">
        <header className="artist-header">
          <div className="status"><img className="broccoli-mark" src="/brocoli.avif" alt="" /><span className="status-dot" /> Disponible ahora</div>
          <h1>{artist.name}</h1>
          <p className="handle">{artist.handle}</p>
          <p className="bio">{artist.bio}</p>
          <p className="location"><MapPin size={14} /> {artist.location}</p>
        </header>

        <div className="links" aria-label="Links del artista">
          {artist.links.map((link) => {
            const Icon = iconFor(link.label)
            return (
              <a className={`link-card ${link.featured ? 'featured' : ''}`} href={link.url} key={link.label}>
                <span className="link-icon"><Icon size={19} strokeWidth={1.8} /></span>
                <span className="link-copy"><strong>{link.label}</strong><small>{link.meta}</small></span>
                <ArrowUpRight className="arrow" size={19} strokeWidth={1.7} />
              </a>
            )
          })}
        </div>

        <footer><span>© {currentYear} RÍOS SKILLS</span><span className="footer-line" /><span>Hecho para sonar</span></footer>
      </section>
    </main>
  )
}

export default App

createRoot(document.getElementById('root')).render(<App />)
