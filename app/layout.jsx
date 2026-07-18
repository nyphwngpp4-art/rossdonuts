import { Bitter, DM_Sans } from "next/font/google";
import { site } from "../lib/site";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Brownwood, TX`,
  description: site.description,
  openGraph: {
    title: `${site.name} · Brownwood, TX`,
    description: site.subtext,
    type: "website",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: `${site.name} and Coffee`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.stateCode,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  telephone: site.phoneHref.replace("tel:", ""),
  servesCuisine: "Donuts, Kolaches, Breakfast, Coffee",
  priceRange: "$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: site.opens,
    closes: site.closes,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bitter.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
