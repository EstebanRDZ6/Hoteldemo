function ReservationSection({
  t,
  search,
  onSearchChange,
  availableOptions,
  selectedAccommodation,
  onSelectAccommodation,
  reservationForm,
  onReservationChange,
  onReservationSubmit,
  reservationSuccess,
}) {
  return (
    <section className="section section-alt" id="reservations">
      <div className="container reservation-layout">
        <div className="reservation-panel">
          <div className="section-heading section-heading--stacked">
            <span className="eyebrow">Booking</span>
            <h2>{t.sections.reservationsTitle}</h2>
            <p>{t.sections.reservationsText}</p>
          </div>

          <div className="booking-grid booking-grid--compact">
            <label>
              <span>{t.hero.checkIn}</span>
              <input type="date" name="checkIn" value={search.checkIn} onChange={onSearchChange} />
            </label>
            <label>
              <span>{t.hero.checkOut}</span>
              <input type="date" name="checkOut" value={search.checkOut} onChange={onSearchChange} />
            </label>
            <label>
              <span>{t.hero.guests}</span>
              <input type="number" name="guests" min="1" max="10" value={search.guests} onChange={onSearchChange} />
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

          <div className="availability-list">
            <div className="availability-list__header">
              <h3>{t.reservation.filtersTitle}</h3>
              <span>
                {availableOptions.length} {t.reservation.available}
              </span>
            </div>

            {availableOptions.length ? (
              availableOptions.map((item) => (
                <button
                  type="button"
                  className={`availability-item ${selectedAccommodation?.id === item.id ? 'is-selected' : ''}`}
                  key={item.id}
                  onClick={() => onSelectAccommodation(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.summary}</p>
                  </div>
                  <span>
                    ${item.price}
                    <small>{t.cards.perNight}</small>
                  </span>
                </button>
              ))
            ) : (
              <div className="availability-empty">
                <p>{t.reservation.choosePrompt}</p>
                <small>{t.reservation.unavailable}</small>
              </div>
            )}
          </div>
        </div>

        <div className="reservation-form-card">
          <div className="reservation-summary">
            <span className="eyebrow">{t.reservation.summary}</span>
            {selectedAccommodation ? (
              <>
                <h3>{selectedAccommodation.title}</h3>
                <p>
                  {t.reservation.selectStay}: ${selectedAccommodation.price}
                  {t.cards.perNight}
                </p>
              </>
            ) : (
              <p>{t.reservation.noStaySelected}</p>
            )}
          </div>

          <form className="contact-form" onSubmit={onReservationSubmit}>
            <h3>{t.reservation.formTitle}</h3>
            <label>
              <span>{t.reservation.name}</span>
              <input
                type="text"
                name="name"
                value={reservationForm.name}
                onChange={onReservationChange}
                required
              />
            </label>
            <label>
              <span>{t.reservation.email}</span>
              <input
                type="email"
                name="email"
                value={reservationForm.email}
                onChange={onReservationChange}
                required
              />
            </label>
            <label>
              <span>{t.reservation.phone}</span>
              <input
                type="tel"
                name="phone"
                value={reservationForm.phone}
                onChange={onReservationChange}
                required
              />
            </label>
            <label>
              <span>{t.reservation.numberOfGuests}</span>
              <input
                type="number"
                name="guests"
                min="1"
                max="10"
                value={reservationForm.guests}
                onChange={onReservationChange}
                required
              />
            </label>
            <label>
              <span>{t.reservation.requests}</span>
              <textarea
                name="requests"
                rows="4"
                value={reservationForm.requests}
                onChange={onReservationChange}
                placeholder={t.reservation.requestsPlaceholder}
              />
            </label>

            <button className="btn btn-primary btn-block" type="submit" disabled={!selectedAccommodation}>
              {t.reservation.confirm}
            </button>

            {reservationSuccess ? <p className="success-message">{t.reservation.success}</p> : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ReservationSection