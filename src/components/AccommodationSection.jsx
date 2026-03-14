function AccommodationSection({ id, title, text, items, t, onReserve, onViewDetails }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t.labels.details}</span>
            <h2>{title}</h2>
          </div>
          <p>{text}</p>
        </div>

        <div className="cards-grid cards-grid--three">
          {items.map((item) => (
            <article className="stay-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="stay-card__body">
                <div className="stay-card__topline">
                  <span className="pill">{item.typeLabel}</span>
                  <span className="pill pill-soft">
                    {t.cards.maxGuests} {item.capacity} {t.cards.guests}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <ul className="feature-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="stay-card__footer">
                  <div>
                    <small>{t.cards.from}</small>
                    <strong>
                      ${item.price}
                      <span>{t.cards.perNight}</span>
                    </strong>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-secondary" type="button" onClick={() => onViewDetails(item)}>
                      {t.cards.viewDetails}
                    </button>
                    <button className="btn btn-primary" type="button" onClick={() => onReserve(item)}>
                      {t.cards.reserveNow}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccommodationSection