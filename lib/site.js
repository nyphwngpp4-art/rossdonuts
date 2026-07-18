/*
  Every fact on the website lives in this one file.
  To change hours, phone, menu wording, or reviews, edit here only.
*/

export const site = {
  name: "Ross Donuts",
  // PLACEHOLDER domain: update when the real domain is purchased,
  // then sitemap.xml, robots.txt, and Open Graph tags all update with it.
  url: "https://rossdonutsbrownwood.com",
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
    Photo gallery. Empty = the section does not render at all.
    After the photo session, drop files into public/images/ and list
    them here, e.g.:
      photos: [
        { src: "/images/owner-counter.jpg", alt: "The owner behind the counter at Ross Donuts" },
        { src: "/images/display-case.jpg", alt: "The full donut display case" },
      ],
    Six to nine photos is the sweet spot.

    Two photos from the shop's Google listing are expected first; once the
    files exist in public/images/, uncomment these lines:
      { src: "/images/display-case.jpg", alt: "The donut display case at Ross Donuts, full of glazed, iced, and sprinkle-topped donuts" },
      { src: "/images/kolache-warmer.jpg", alt: "Fresh sausage kolaches in the warmer at Ross Donuts" },
  */
  photos: [],
};
