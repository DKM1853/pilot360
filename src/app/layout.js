import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pilot 360 - Simplifying Your Path to Becoming a Pilot",
  description:
    "Pilot 360 Offers Expert Pilot Training With DGCA-Approved Guidance. Join Pilot 360 for Global Training, Finance, Scholarships, and Complete Career Support.",
  keywords: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
  openGraph: {
    title: "Pilot 360 - Simplifying Your Path to Becoming a Pilot",
    description:
      "Pilot 360 Offers Expert Pilot Training With DGCA-Approved Guidance. Join Pilot 360 for Global Training, Finance, Scholarships, and Complete Career Support.",
    url: "https://pilot360.co/",
    siteName: "Pilot360",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TS7QX2DT');`,
          }}
        />

        {/* Local Business Schema — Delhi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pilot360",
              image:
                "https://pilot360.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.08c3e418.png&w=1920&q=75",
              "@id": "",
              url: "https://pilot360.co/",
              telephone: "9217663195",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "D-416, Ramphal Chowk Rd, Block D, Sector 7 Dwarka, Dwarka, New Delhi",
                addressLocality: "Delhi",
                postalCode: "110077",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.5841601,
                longitude: 77.0711935,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              sameAs: [
                "https://www.facebook.com/pilot360.official",
                "https://www.instagram.com/pilot360.official/",
              ],
            }),
          }}
        />

        {/* Local Business Schema — Thaltej, Ahmedabad */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pilot360",
              image:
                "https://pilot360.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.08c3e418.png&w=1920&q=75",
              "@id": "",
              url: "https://pilot360.co/",
              telephone: "7600534858",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Shreeya Amalga 405, Above Chroma, off Sindhubhavan Road, Thaltej",
                addressLocality: "Ahmedabad",
                postalCode: "380059",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.0472541,
                longitude: 72.5079578,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              sameAs: [
                "https://www.facebook.com/pilot360.official",
                "https://www.instagram.com/pilot360.official/",
              ],
            }),
          }}
        />

        {/* Logo / Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pilot360",
              url: "https://pilot360.co/",
              logo: "https://pilot360.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.08c3e418.png&w=1920&q=75",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "9217663195",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/pilot360.official",
                "https://www.instagram.com/pilot360.official/",
              ],
            }),
          }}
        />

        {/* Review / Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Pilot360",
              description:
                "Pilot 360 is your trustworthy partner at every step of your pilot journey. With 17 years of experience, we offer comprehensive commercial pilot training through our globally certified partner schools. Our services include assistance with DGCA Computer Number, DGCA medicals, DGCA Ground Classes, Flight Simulator Training, Flying Training, License conversion, Type Rating, Psychometric & aptitude training, Airline Preparation. Join us to turn your aviation dreams into reality.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                ratingCount: "35",
              },
            }),
          }}
        />

        {/* Geo Tags — Thaltej, Ahmedabad */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0472541;72.5079578" />
        <meta name="ICBM" content="23.0472541, 72.5079578" />

        {/* Geo Tags — Delhi */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.5841601;77.0711935" />
        <meta name="ICBM" content="28.5841601, 77.0711935" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TS7QX2DT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <Navbar /> */}
        <main className="pb-[420px] lg:pb-0">{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918490008834"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] transition-colors lg:bottom-8 lg:right-8"
          style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.5)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8"
            fill="white"
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.469-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.94 22.418c-.332.933-1.94 1.832-2.67 1.948-.683.108-1.545.153-2.492-.156-.574-.19-1.312-.444-2.257-.869-3.97-1.715-6.566-5.71-6.765-5.978-.198-.267-1.616-2.149-1.616-4.099 0-1.95 1.023-2.91 1.385-3.307.362-.396.79-.496 1.054-.496.264 0 .527.002.758.014.242.013.567-.092.888.676.332.793 1.128 2.743 1.227 2.941.1.198.165.43.033.692-.133.264-.199.43-.397.662-.199.232-.419.52-.597.697-.198.198-.405.413-.174.809.232.397 1.03 1.698 2.212 2.75 1.52 1.354 2.8 1.773 3.196 1.971.397.198.628.165.86-.1.232-.264.993-1.156 1.258-1.553.264-.397.528-.33.89-.198.362.132 2.3 1.085 2.696 1.283.397.198.66.297.76.462.099.165.099.957-.233 1.89z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}