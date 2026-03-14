function HeroSection({ t, search, onSearchChange, onSearchSubmit }) {
  return (
    <section className="hero" id="home">
      <div className="hero-backdrop" />
      <div className="container hero-grid">
        <div className="hero-copy fade-up">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.text}</p>
          <div className="hero-stats">
            {t.hero.stats.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <form className="booking-panel fade-up delay-1" onSubmit={onSearchSubmit}>
          <div className="booking-panel__header">
            <h2>{t.hero.searchTitle}</h2>
          </div>

          <div className="booking-grid">
            <label>
              <span>{t.hero.checkIn}</span>
              <input
                type="date"
                name="checkIn"
                value={search.checkIn}
                onChange={onSearchChange}
              />
            </label>

            <label>
              <span>{t.hero.checkOut}</span>
              <input
                type="date"
                name="checkOut"
                value={search.checkOut}
                onChange={onSearchChange}
              />
            </label>

            <label>
              <span>{t.hero.guests}</span>
              <input
                type="number"
                name="guests"
                min="1"
                max="10"
                value={search.guests}
                onChange={onSearchChange}
              />
            </label>

            <label>
              <span>{t.hero.type}</span>
              <select name="type" value={search.type} onChange={onSearchChange}>
                <option value="all">{t.hero.all}</option>
                <option value="room">{t.hero.room}</option>
                <option value="cabin">{t.hero.cabin}</option>
              </select>
            </label>
          </div>

          <button className="btn btn-primary" type="submit">
            {t.hero.search}
          </button>
        </form>
      </div>
    </section>
  )
}

export default HeroSection