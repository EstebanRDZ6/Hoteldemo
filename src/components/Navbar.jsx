function Navbar({ lang, setLang, nav, brand, menuLabel, mobileOpen, setMobileOpen }) {
  const links = [
    { href: '#home', label: nav.home },
    { href: '#rooms', label: nav.rooms },
    { href: '#cabins', label: nav.cabins },
    { href: '#amenities', label: nav.amenities },
    { href: '#reservations', label: nav.reservations },
    { href: '#contact', label: nav.contact },
  ]

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand-mark" href="#home" onClick={handleLinkClick}>
          <span className="brand-mark__icon">AR</span>
          <span>
            <strong>{brand}</strong>
            <small>Hotels + Cabins</small>
          </span>
        </a>

        <nav className={`main-nav ${mobileOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-switcher" aria-label="Language switcher">
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <span>|</span>
            <button
              type="button"
              className={lang === 'es' ? 'is-active' : ''}
              onClick={() => setLang('es')}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={menuLabel}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar