import { Facebook, Instagram, Linkedin } from 'lucide-react'

function Footer({ t }) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand-mark brand-mark--footer" href="#home">
            <span className="brand-mark__icon">AR</span>
            <span>
              <strong>{t.brand}</strong>
              <small>{t.tagline}</small>
            </span>
          </a>
        </div>

        <div>
          <h4>{t.footer.quickLinks}</h4>
          <div className="footer-links">
            <a href="#rooms">{t.nav.rooms}</a>
            <a href="#cabins">{t.nav.cabins}</a>
            <a href="#amenities">{t.nav.amenities}</a>
            <a href="#reservations">{t.nav.reservations}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
        </div>

        <div>
          <h4>{t.nav.contact}</h4>
          <div className="footer-links">
            <a href="mailto:info@demo-hotel.com">info@demo-hotel.com</a>
            <a href="https://wa.me/5493760000000" target="_blank" rel="noreferrer">
              +54 9 376 000 0000
            </a>
            <span>Misiones, Argentina</span>
          </div>
        </div>

        <div>
          <h4>{t.footer.social}</h4>
          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          {year} {t.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

export default Footer