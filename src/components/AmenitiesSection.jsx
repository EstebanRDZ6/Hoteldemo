import {
  Coffee,
  ParkingCircle,
  Sparkles,
  Trees,
  UtensilsCrossed,
  Waves,
  Wifi,
} from 'lucide-react'

const iconMap = {
  Coffee,
  ParkingCircle,
  Sparkles,
  Trees,
  UtensilsCrossed,
  Waves,
  Wifi,
}

function AmenitiesSection({ title, text, items, lang }) {
  return (
    <section className="section section-alt" id="amenities">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Experience</span>
            <h2>{title}</h2>
          </div>
          <p>{text}</p>
        </div>

        <div className="cards-grid cards-grid--four">
          {items.map((item) => {
            const Icon = iconMap[item.icon]

            return (
              <article className="amenity-card" key={item.title[lang]}>
                <div className="icon-wrap">
                  <Icon size={22} />
                </div>
                <h3>{item.title[lang]}</h3>
                <p>{item.text[lang]}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection