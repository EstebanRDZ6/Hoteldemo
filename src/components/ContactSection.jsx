import { Mail, MapPinned, MessageCircle, Phone } from 'lucide-react'

function ContactSection({ t, lang }) {
  return (
    <section className="section" id="contact">
      <div className="container contact-layout">
        <div className="contact-info-card">
          <div className="section-heading section-heading--stacked">
            <span className="eyebrow">Direct contact</span>
            <h2>{t.sections.contactTitle}</h2>
            <p>{t.sections.contactText}</p>
          </div>

          <div className="contact-item">
            <Mail size={20} />
            <div>
              <strong>{t.contact.emailLabel}</strong>
              <a href="mailto:info@demo-hotel.com">info@demo-hotel.com</a>
            </div>
          </div>

          <div className="contact-item">
            <Phone size={20} />
            <div>
              <strong>{t.contact.whatsappLabel}</strong>
              <a href="https://wa.me/5493760000000" target="_blank" rel="noreferrer">
                +54 9 376 000 0000
              </a>
            </div>
          </div>

          <div className="contact-item">
            <MapPinned size={20} />
            <div>
              <strong>{t.contact.addressLabel}</strong>
              <span>{t.contact.address}</span>
            </div>
          </div>

          <div className="contact-cta-row">
            <a className="btn btn-primary" href="mailto:info@demo-hotel.com">
              {t.contact.sendEmail}
            </a>
            <a className="btn btn-secondary" href="https://wa.me/5493760000000" target="_blank" rel="noreferrer">
              {t.contact.chatWhatsApp}
            </a>
          </div>
        </div>

        <div className="contact-stack">
          <form className="contact-form contact-form--plain">
            <label>
              <span>{t.contact.formName}</span>
              <input type="text" placeholder={t.contact.formName} />
            </label>
            <label>
              <span>{t.contact.emailLabel}</span>
              <input type="email" placeholder="info@demo-hotel.com" />
            </label>
            <label>
              <span>{t.contact.formMessage}</span>
              <textarea rows="5" placeholder={lang === 'en' ? 'Tell us about your stay...' : 'Contanos sobre tu viaje...'} />
            </label>
            <button className="btn btn-primary btn-block" type="button">
              <MessageCircle size={18} />
              {t.contact.formButton}
            </button>
          </form>

          <div className="map-card">
            <div>
              <span className="eyebrow">Map</span>
              <h3>{t.contact.mapTitle}</h3>
              <p>{t.contact.mapText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection