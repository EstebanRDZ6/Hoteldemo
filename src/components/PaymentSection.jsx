function PaymentSection({ title, text, items, lang, badges }) {
  const getLabel = (item) => {
    if (typeof item.label === 'string') {
      return item.label
    }

    return item.label[lang]
  }

  const getBadge = (key) => {
    if (key === 'mercado-pago') {
      return 'MP'
    }

    if (key === 'cash') {
      return badges.cash
    }

    return badges.cards
  }

  return (
    <section className="section section-payments" id="payments">
      <div className="container payments-shell">
        <div className="section-heading section-heading--stacked">
          <span className="eyebrow">Checkout</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="payment-grid">
          {items.map((item) => (
            <article className="payment-card" key={item.key}>
              <span className="payment-badge">{getBadge(item.key)}</span>
              <h3>{getLabel(item)}</h3>
              <p>{item.description[lang]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentSection