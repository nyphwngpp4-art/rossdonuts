/*
  Every fact on the website lives in this one file.
  To change hours, phone, menu wording, or reviews, edit here only.
*/

export const site = {
  name: "Ross Donuts",
  url: "https://rossdonuts.agaviai.com",
  tagline: "Good mornings start at Ross Donuts.",
  subtext:
    "Fresh donuts, breakfast favorites, coffee, and a friendly welcome in Brownwood.",
  description:
    "Fresh donuts, kolaches, hot breakfast, and coffee made every morning in Brownwood, Texas. Open daily 5:00 AM to noon at 1417 Austin Ave.",

  phone: "(325) 642-3277",
  phoneHref: "tel:+13256423277",

  address: {
    street: "1417 Austin Avenue",
    city: "Brownwood",
    state: "Texas",
    stateCode: "TX",
    zip: "76801",
  },
  directionsUrl:
    "https://maps.google.com/?q=Ross+Donuts+1417+Austin+Ave+Brownwood+TX+76801",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Ross+Donuts,+1417+Austin+Ave,+Brownwood,+TX+76801&output=embed",

  // Confirm with the owner before launch. Public listings disagree (5 AM vs 6 AM open).
  hoursLine: "Open daily · 5:00 AM to 12:00 PM",
  hoursShort: "5:00 AM to noon",
  opens: "05:00",
  closes: "12:00",

  menu: [
    {
      title: "Fresh Donuts",
      text: "Glazed, iced, filled, cake donuts, donut holes and daily favorites.",
    },
    {
      title: "Breakfast Favorites",
      text: "Kolaches, croissants, biscuits and other hot breakfast options.",
    },
    {
      title: "Coffee & Drinks",
      text: "Hot coffee, iced coffee and cold drinks.",
    },
  ],

  rating: {
    line: "4.7 stars on Google",
    sub: "Known for fresh food, friendly service, and an owner who takes care of his customers.",
    reviewsUrl:
      "https://maps.google.com/?q=Ross+Donuts+1417+Austin+Ave+Brownwood+TX+76801",
  },

  // Short excerpts seen in public Google reviews. Before launch, verify the
  // exact wording against the live reviews and do not rewrite them.
  reviews: [
    "The friendliest donut guy in town.",
    "Light, fresh, and fluffy with the perfect amount of glaze.",
    "The boudin kolache is great.",
  ],

  /*
    Photo gallery. Files live in public/images/; adding an entry here makes
    it appear on the site (an empty list hides the whole section).
    Six to nine photos is the sweet spot. Still wanted from the next visit:
    the owner behind the counter (that one should become the hero image),
    the full display case, and fresh kolaches.
  */
  photos: [
    {
      src: "/images/storefront.jpg",
      alt: "The Ross Donuts sign glowing over the storefront on Austin Avenue before sunrise",
    },
    {
      src: "/images/latte.jpg",
      alt: "An iced latte with the Ross Donuts sticker, with trays of fresh glazed donuts behind it",
    },
    {
      src: "/images/breakfast.jpg",
      alt: "A bacon, egg, and cheese croissant with an iced coffee at Ross Donuts",
    },
  ],
};
