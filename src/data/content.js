export const accommodations = [
  {
    id: 'ocean-suite',
    type: 'room',
    price: 220,
    capacity: 2,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    title: {
      en: 'Ocean Suite',
      es: 'Suite Océano',
    },
    summary: {
      en: 'Floor-to-ceiling views, king bed, and a private sunrise terrace.',
      es: 'Vista panorámica, cama king y una terraza privada para el amanecer.',
    },
    details: {
      en: 'An elevated room experience designed for couples seeking privacy, ocean light, and premium service.',
      es: 'Una experiencia elevada pensada para parejas que buscan privacidad, luz natural y servicio premium.',
    },
    features: {
      en: ['King bed', 'Private terrace', 'Breakfast included'],
      es: ['Cama king', 'Terraza privada', 'Desayuno incluido'],
    },
    unavailable: [
      ['2026-04-10', '2026-04-14'],
      ['2026-05-05', '2026-05-09'],
    ],
  },
  {
    id: 'garden-deluxe',
    type: 'room',
    price: 175,
    capacity: 3,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    title: {
      en: 'Garden Deluxe',
      es: 'Deluxe Jardín',
    },
    summary: {
      en: 'Warm materials, lounge area, and direct access to the botanical courtyard.',
      es: 'Materiales cálidos, sala de estar y acceso directo al patio botánico.',
    },
    details: {
      en: 'Ideal for relaxed stays with family or friends, featuring calm interiors and outdoor seating.',
      es: 'Ideal para estadías relajadas en familia o con amigos, con interiores tranquilos y área exterior.',
    },
    features: {
      en: ['Queen beds', 'Courtyard access', 'Rain shower'],
      es: ['Camas queen', 'Acceso al patio', 'Ducha tipo lluvia'],
    },
    unavailable: [['2026-04-18', '2026-04-22']],
  },
  {
    id: 'executive-loft',
    type: 'room',
    price: 260,
    capacity: 4,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    title: {
      en: 'Executive Loft',
      es: 'Loft Ejecutivo',
    },
    summary: {
      en: 'Double-height ceilings, workspace, and curated minibar for longer stays.',
      es: 'Techos altos, espacio de trabajo y minibar curado para estadías prolongadas.',
    },
    details: {
      en: 'For guests who want a premium blend of productivity and resort comfort.',
      es: 'Para huéspedes que buscan una combinación premium entre productividad y confort.',
    },
    features: {
      en: ['Workspace', 'Smart TV', 'Premium minibar'],
      es: ['Escritorio', 'Smart TV', 'Minibar premium'],
    },
    unavailable: [['2026-05-15', '2026-05-21']],
  },
  {
    id: 'forest-cabin',
    type: 'cabin',
    price: 205,
    capacity: 4,
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    title: {
      en: 'Forest Cabin',
      es: 'Cabaña Bosque',
    },
    summary: {
      en: 'Wood interiors, fireplace, and a deck wrapped by native trees.',
      es: 'Interiores en madera, chimenea y una terraza rodeada de árboles nativos.',
    },
    details: {
      en: 'A refined retreat for travelers who want cabin charm with boutique hotel polish.',
      es: 'Un refugio refinado para viajeros que buscan encanto de cabaña con acabado boutique.',
    },
    features: {
      en: ['Fireplace', 'Private deck', 'Kitchenette'],
      es: ['Chimenea', 'Deck privado', 'Kitchenette'],
    },
    unavailable: [['2026-04-25', '2026-04-28']],
  },
  {
    id: 'lake-cabin',
    type: 'cabin',
    price: 245,
    capacity: 5,
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    title: {
      en: 'Lakeview Cabin',
      es: 'Cabaña Vista Lago',
    },
    summary: {
      en: 'Panoramic deck, outdoor hot tub, and direct views over the water.',
      es: 'Deck panorámico, jacuzzi exterior y vistas directas sobre el lago.',
    },
    details: {
      en: 'Designed for slow mornings, private sunsets, and premium cabin stays.',
      es: 'Diseñada para mañanas lentas, atardeceres privados y una experiencia premium.',
    },
    features: {
      en: ['Hot tub', 'Lake views', 'BBQ area'],
      es: ['Jacuzzi', 'Vista al lago', 'Área de parrilla'],
    },
    unavailable: [['2026-05-01', '2026-05-04']],
  },
  {
    id: 'family-cabin',
    type: 'cabin',
    price: 280,
    capacity: 6,
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    title: {
      en: 'Family Panorama Cabin',
      es: 'Cabaña Panorama Familiar',
    },
    summary: {
      en: 'Two bedrooms, mountain outlooks, and generous social space indoors and out.',
      es: 'Dos dormitorios, vistas a la montaña y espacio social amplio adentro y afuera.',
    },
    details: {
      en: 'Perfect for families or group getaways who need space without sacrificing style.',
      es: 'Perfecta para familias o grupos que necesitan amplitud sin perder estilo.',
    },
    features: {
      en: ['2 bedrooms', 'Mountain view', 'Dining terrace'],
      es: ['2 dormitorios', 'Vista a la montaña', 'Terraza comedor'],
    },
    unavailable: [['2026-06-12', '2026-06-18']],
  },
]

export const amenities = [
  {
    icon: 'Waves',
    title: { en: 'Swimming pool', es: 'Piscina' },
    text: {
      en: 'Infinity-style pool with sun deck and lounge service.',
      es: 'Piscina estilo infinity con solárium y servicio de lounge.',
    },
  },
  {
    icon: 'Wifi',
    title: { en: 'Free WiFi', es: 'WiFi gratis' },
    text: {
      en: 'Fast coverage across rooms, cabins, and outdoor social spaces.',
      es: 'Cobertura rápida en habitaciones, cabañas y espacios sociales exteriores.',
    },
  },
  {
    icon: 'UtensilsCrossed',
    title: { en: 'Restaurant', es: 'Restaurante' },
    text: {
      en: 'Seasonal menu with local ingredients and signature cocktails.',
      es: 'Menú de temporada con ingredientes locales y coctelería de autor.',
    },
  },
  {
    icon: 'ParkingCircle',
    title: { en: 'Parking', es: 'Estacionamiento' },
    text: {
      en: 'Private on-site parking with gated access and night security.',
      es: 'Estacionamiento privado con acceso controlado y seguridad nocturna.',
    },
  },
  {
    icon: 'Sparkles',
    title: { en: 'Spa', es: 'Spa' },
    text: {
      en: 'Massage rooms, wellness rituals, and couples treatments.',
      es: 'Salas de masajes, rituales de bienestar y tratamientos en pareja.',
    },
  },
  {
    icon: 'Trees',
    title: { en: 'Nature views', es: 'Vistas naturales' },
    text: {
      en: 'Forest, lake, and mountain scenery built into every stay.',
      es: 'Bosque, lago y montaña integrados en cada experiencia.',
    },
  },
  {
    icon: 'Coffee',
    title: { en: 'Breakfast included', es: 'Desayuno incluido' },
    text: {
      en: 'Fresh bakery, fruit station, and specialty coffee every morning.',
      es: 'Panadería fresca, estación de frutas y café de especialidad cada mañana.',
    },
  },
]

export const galleryItems = [
  {
    category: { en: 'Hotel exterior', es: 'Exterior del hotel' },
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: { en: 'Hotel rooms', es: 'Habitaciones' },
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: { en: 'Cabins', es: 'Cabañas' },
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: { en: 'Swimming pool', es: 'Piscina' },
    image:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: { en: 'Restaurant', es: 'Restaurante' },
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: { en: 'Nature', es: 'Naturaleza' },
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
]

export const paymentMethods = [
  {
    key: 'mercado-pago',
    label: 'Mercado Pago',
    description: {
      en: 'Preferred in Argentina for quick confirmations and installment flexibility.',
      es: 'Ideal en Argentina para confirmaciones rápidas y flexibilidad en cuotas.',
    },
  },
  {
    key: 'cash',
    label: { en: 'Cash', es: 'Efectivo' },
    description: {
      en: 'Available for on-site settlement during check-in.',
      es: 'Disponible para pago presencial al momento del check-in.',
    },
  },
  {
    key: 'cards',
    label: { en: 'Credit / Debit Cards', es: 'Tarjetas crédito / débito' },
    description: {
      en: 'Visa, Mastercard, and regional debit cards accepted.',
      es: 'Se aceptan Visa, Mastercard y tarjetas de débito regionales.',
    },
  },
]

export const copy = {
  en: {
    brand: 'Azure Retreats',
    tagline: 'Hotels & cabins crafted for memorable stays',
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      cabins: 'Cabins',
      amenities: 'Amenities',
      reservations: 'Reservations',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Boutique hospitality demo',
      title: 'Stay between resort comfort and cabin calm.',
      text: 'A polished tourism website for hotels and cabins with smart search, premium presentation, and a reservation flow ready for client demos.',
      stats: ['4.9 guest rating', '24/7 concierge', 'Flexible payment methods'],
      searchTitle: 'Find your next stay',
      checkIn: 'Check-in date',
      checkOut: 'Check-out date',
      guests: 'Guests',
      type: 'Accommodation type',
      search: 'Search Availability',
      all: 'All stays',
      room: 'Hotel room',
      cabin: 'Cabin',
    },
    sections: {
      roomsTitle: 'Hotel rooms',
      roomsText: 'Refined spaces for business trips, couples escapes, and premium weekend stays.',
      cabinsTitle: 'Cabins',
      cabinsText: 'Nature-first accommodations with resort details and warm architectural character.',
      amenitiesTitle: 'Amenities designed to sell the stay',
      amenitiesText: 'Highlight the services that matter most during the booking decision.',
      galleryTitle: 'Photo gallery',
      galleryText: 'Professional imagery turns a listing into a premium destination.',
      paymentsTitle: 'Flexible payment methods',
      paymentsText: 'Designed for local tourism markets where convenience and trust drive conversions.',
      reservationsTitle: 'Demo booking system',
      reservationsText: 'Simulate real booking logic with date filters, availability, and reservation requests.',
      contactTitle: 'Contact & location',
      contactText: 'A conversion-ready footer and contact area for direct reservations and inquiries.',
    },
    cards: {
      from: 'From',
      perNight: '/ night',
      viewDetails: 'View details',
      reserveNow: 'Reserve now',
      maxGuests: 'Up to',
      guests: 'guests',
    },
    reservation: {
      filtersTitle: 'Check live availability',
      optionLabel: 'Select stay',
      choosePrompt: 'Choose dates and an accommodation type to see available options.',
      available: 'available options',
      unavailable: 'No options match those dates yet. Try adjusting the filters.',
      formTitle: 'Reservation request',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      numberOfGuests: 'Number of guests',
      requests: 'Special requests',
      requestsPlaceholder: 'Airport pickup, crib, vegetarian menu, late check-in...',
      confirm: 'Confirm Reservation',
      success: 'Reservation request sent successfully',
      selectStay: 'Selected stay',
      summary: 'Reservation summary',
      noStaySelected: 'Pick a room or cabin to complete the request.',
    },
    paymentBadges: {
      cash: 'Cash',
      cards: 'Cards',
    },
    contact: {
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      addressLabel: 'Location',
      address: 'Misiones, Argentina · demo destination',
      sendEmail: 'Send Email',
      chatWhatsApp: 'Chat on WhatsApp',
      formName: 'Full name',
      formMessage: 'Message',
      formButton: 'Send message',
      mapTitle: 'Interactive map placeholder',
      mapText: 'Replace this area with Google Maps, Mapbox, or a location embed in a production build.',
    },
    footer: {
      rights: 'All rights reserved.',
      quickLinks: 'Quick links',
      social: 'Social media',
    },
    labels: {
      guestsCount: 'Guests',
      nights: 'Flexible dates',
      reserve: 'Reserve',
      details: 'Details',
      menu: 'Menu',
      close: 'Close',
    },
  },
  es: {
    brand: 'Azure Retreats',
    tagline: 'Hoteles y cabañas pensados para estadías memorables',
    nav: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      cabins: 'Cabañas',
      amenities: 'Servicios',
      reservations: 'Reservas',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Demo de hospitalidad boutique',
      title: 'Hospedaje entre el confort de resort y la calma de una cabaña.',
      text: 'Un sitio turístico pulido para hoteles y cabañas con búsqueda inteligente, presentación premium y un flujo de reservas listo para mostrar a clientes.',
      stats: ['4.9 de calificación', 'Conserjería 24/7', 'Medios de pago flexibles'],
      searchTitle: 'Encontrá tu próxima estadía',
      checkIn: 'Fecha de ingreso',
      checkOut: 'Fecha de salida',
      guests: 'Huéspedes',
      type: 'Tipo de alojamiento',
      search: 'Buscar disponibilidad',
      all: 'Todos',
      room: 'Habitación',
      cabin: 'Cabaña',
    },
    sections: {
      roomsTitle: 'Habitaciones de hotel',
      roomsText: 'Espacios refinados para viajes de trabajo, escapadas en pareja y fines de semana premium.',
      cabinsTitle: 'Cabañas',
      cabinsText: 'Alojamientos inmersos en naturaleza con detalles de resort y carácter arquitectónico cálido.',
      amenitiesTitle: 'Servicios pensados para vender la experiencia',
      amenitiesText: 'Destacá los atributos que más pesan durante la decisión de reserva.',
      galleryTitle: 'Galería de fotos',
      galleryText: 'Las imágenes profesionales convierten una ficha en un destino aspiracional.',
      paymentsTitle: 'Medios de pago flexibles',
      paymentsText: 'Diseñado para mercados turísticos locales donde la conveniencia y la confianza impulsan conversiones.',
      reservationsTitle: 'Sistema de reservas demo',
      reservationsText: 'Simulá lógica real de reservas con filtros por fecha, disponibilidad y solicitudes.',
      contactTitle: 'Contacto y ubicación',
      contactText: 'Una sección lista para convertir consultas directas en reservas.',
    },
    cards: {
      from: 'Desde',
      perNight: '/ noche',
      viewDetails: 'Ver detalles',
      reserveNow: 'Reservar ahora',
      maxGuests: 'Hasta',
      guests: 'huéspedes',
    },
    reservation: {
      filtersTitle: 'Consultar disponibilidad',
      optionLabel: 'Seleccionar estadía',
      choosePrompt: 'Elegí fechas y un tipo de alojamiento para ver opciones disponibles.',
      available: 'opciones disponibles',
      unavailable: 'No hay opciones para esas fechas. Probá ajustando los filtros.',
      formTitle: 'Solicitud de reserva',
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      numberOfGuests: 'Cantidad de huéspedes',
      requests: 'Solicitudes especiales',
      requestsPlaceholder: 'Traslado, cuna, menú vegetariano, late check-in...',
      confirm: 'Confirmar reserva',
      success: 'Solicitud de reserva enviada con éxito',
      selectStay: 'Estadía seleccionada',
      summary: 'Resumen de reserva',
      noStaySelected: 'Elegí una habitación o cabaña para completar la solicitud.',
    },
    paymentBadges: {
      cash: 'Efectivo',
      cards: 'Tarjetas',
    },
    contact: {
      emailLabel: 'Correo',
      whatsappLabel: 'WhatsApp',
      addressLabel: 'Ubicación',
      address: 'Misiones, Argentina · destino demo',
      sendEmail: 'Enviar correo',
      chatWhatsApp: 'Chatear por WhatsApp',
      formName: 'Nombre completo',
      formMessage: 'Mensaje',
      formButton: 'Enviar mensaje',
      mapTitle: 'Placeholder de mapa interactivo',
      mapText: 'Reemplazá esta área por Google Maps, Mapbox o un embed real en producción.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      quickLinks: 'Accesos rápidos',
      social: 'Redes sociales',
    },
    labels: {
      guestsCount: 'Huéspedes',
      nights: 'Fechas flexibles',
      reserve: 'Reservar',
      details: 'Detalles',
      menu: 'Menú',
      close: 'Cerrar',
    },
  },
}