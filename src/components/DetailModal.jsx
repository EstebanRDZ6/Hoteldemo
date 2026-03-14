function DetailModal({ item, t, onClose }) {
  if (!item) {
    return null
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button type="button" className="modal-close" onClick={onClose}>
          {t.labels.close}
        </button>
        <img src={item.image} alt={item.title} className="modal-image" />
        <div className="modal-content">
          <span className="pill">{item.typeLabel}</span>
          <h3>{item.title}</h3>
          <p>{item.details}</p>
          <ul className="feature-list">
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <strong className="modal-price">
            ${item.price}
            <span>{t.cards.perNight}</span>
          </strong>
        </div>
      </div>
    </div>
  )
}

export default DetailModal