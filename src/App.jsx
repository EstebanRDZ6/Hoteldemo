import { useMemo, useState } from 'react'
import AccommodationSection from './components/AccommodationSection'
import AmenitiesSection from './components/AmenitiesSection'
import ContactSection from './components/ContactSection'
import DetailModal from './components/DetailModal'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PaymentSection from './components/PaymentSection'
import ReservationSection from './components/ReservationSection'
import { accommodations, amenities, copy, galleryItems, paymentMethods } from './data/content'
import './App.css'

const defaultSearch = {
  checkIn: '',
  checkOut: '',
  guests: '2',
  type: 'all',
}

const defaultReservationForm = {
  name: '',
  email: '',
  phone: '',
  guests: '2',
  requests: '',
}

function overlaps(rangeStart, rangeEnd, checkIn, checkOut) {
  if (!checkIn || !checkOut) {
    return false
  }

  const existingStart = new Date(rangeStart)
  const existingEnd = new Date(rangeEnd)
  const nextStart = new Date(checkIn)
  const nextEnd = new Date(checkOut)

  return nextStart <= existingEnd && nextEnd >= existingStart
}

function isAccommodationAvailable(item, checkIn, checkOut) {
  if (!checkIn || !checkOut) {
    return true
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    return false
  }

  return !item.unavailable.some(([start, end]) => overlaps(start, end, checkIn, checkOut))
}

function localizeAccommodation(item, lang, t) {
  return {
    ...item,
    title: item.title[lang],
    summary: item.summary[lang],
    details: item.details[lang],
    features: item.features[lang],
    typeLabel: item.type === 'room' ? t.hero.room : t.hero.cabin,
  }
}

function App() {
  const [lang, setLang] = useState('en')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState(defaultSearch)
  const [selectedAccommodation, setSelectedAccommodation] = useState(null)
  const [detailAccommodation, setDetailAccommodation] = useState(null)
  const [reservationForm, setReservationForm] = useState(defaultReservationForm)
  const [reservationSuccess, setReservationSuccess] = useState(false)

  const t = copy[lang]

  const localizedAccommodations = useMemo(
    () => accommodations.map((item) => localizeAccommodation(item, lang, t)),
    [lang, t],
  )

  const availableOptions = useMemo(() => {
    return localizedAccommodations.filter((item) => {
      const typeMatches = search.type === 'all' || item.type === search.type
      const guestMatches = Number(search.guests) <= item.capacity
      const availableMatches = isAccommodationAvailable(item, search.checkIn, search.checkOut)

      return typeMatches && guestMatches && availableMatches
    })
  }, [localizedAccommodations, search])

  const roomItems = localizedAccommodations.filter((item) => item.type === 'room')
  const cabinItems = localizedAccommodations.filter((item) => item.type === 'cabin')

  const handleSearchChange = (event) => {
    const { name, value } = event.target
    setSearch((current) => ({ ...current, [name]: value }))
    setReservationSuccess(false)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleReserveClick = (item) => {
    setSelectedAccommodation(item)
    setReservationForm((current) => ({
      ...current,
      guests: String(Math.max(Number(current.guests) || 1, 1)),
    }))
    setSearch((current) => ({
      ...current,
      type: item.type,
      guests: String(Math.min(Number(current.guests) || 2, item.capacity)),
    }))
    setReservationSuccess(false)
    document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleReservationChange = (event) => {
    const { name, value } = event.target
    setReservationForm((current) => ({ ...current, [name]: value }))
  }

  const handleReservationSubmit = (event) => {
    event.preventDefault()

    if (!selectedAccommodation) {
      return
    }

    setReservationSuccess(true)
    setReservationForm({
      ...defaultReservationForm,
      guests: search.guests,
    })
  }

  return (
    <div className="app-shell">
      <Navbar
        lang={lang}
        setLang={setLang}
        nav={t.nav}
        brand={t.brand}
        menuLabel={t.labels.menu}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        <HeroSection t={t} search={search} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />

        <AccommodationSection
          id="rooms"
          title={t.sections.roomsTitle}
          text={t.sections.roomsText}
          items={roomItems}
          t={t}
          onReserve={handleReserveClick}
          onViewDetails={setDetailAccommodation}
        />

        <AccommodationSection
          id="cabins"
          title={t.sections.cabinsTitle}
          text={t.sections.cabinsText}
          items={cabinItems}
          t={t}
          onReserve={handleReserveClick}
          onViewDetails={setDetailAccommodation}
        />

        <AmenitiesSection
          title={t.sections.amenitiesTitle}
          text={t.sections.amenitiesText}
          items={amenities}
          lang={lang}
        />

        <GallerySection title={t.sections.galleryTitle} text={t.sections.galleryText} items={galleryItems} lang={lang} />

        <PaymentSection
          title={t.sections.paymentsTitle}
          text={t.sections.paymentsText}
          items={paymentMethods}
          lang={lang}
          badges={t.paymentBadges}
        />

        <ReservationSection
          t={t}
          search={search}
          onSearchChange={handleSearchChange}
          availableOptions={availableOptions}
          selectedAccommodation={selectedAccommodation}
          onSelectAccommodation={setSelectedAccommodation}
          reservationForm={reservationForm}
          onReservationChange={handleReservationChange}
          onReservationSubmit={handleReservationSubmit}
          reservationSuccess={reservationSuccess}
        />

        <ContactSection t={t} lang={lang} />
      </main>

      <Footer t={t} />

      <DetailModal item={detailAccommodation} t={t} onClose={() => setDetailAccommodation(null)} />
    </div>
  )
}

export default App