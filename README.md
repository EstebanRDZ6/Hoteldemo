# Azure Retreats Demo

Professional React + Vite demo website for a tourism company that offers hotel rooms and cabins.

## Features

- Responsive modern landing page inspired by booking platforms
- Dynamic bilingual content: English and Spanish
- Hero booking search bar with availability filtering
- Separate room and cabin sections with CTA actions
- Demo reservation system with simulated availability and confirmation state
- Amenities, gallery, payment methods, contact area, and polished footer
- Basic SEO and Open Graph tags in the HTML entry point

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
  components/
    AccommodationSection.jsx
    AmenitiesSection.jsx
    ContactSection.jsx
    DetailModal.jsx
    Footer.jsx
    GallerySection.jsx
    HeroSection.jsx
    Navbar.jsx
    PaymentSection.jsx
    ReservationSection.jsx
  data/
    content.js
  App.css
  App.jsx
  index.css
  main.jsx
index.html
vite.config.js
package.json
```