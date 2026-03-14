function GallerySection({ title, text, items, lang }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Visuals</span>
            <h2>{title}</h2>
          </div>
          <p>{text}</p>
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <figure className="gallery-card" key={item.image}>
              <img src={item.image} alt={item.category[lang]} />
              <figcaption>{item.category[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection