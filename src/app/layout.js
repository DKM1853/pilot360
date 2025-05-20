import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
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
            })(window,document,'script','dataLayer','GTM-KWV5ZGC4');`,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pilot 360",
              url: "https://pilot360.co",
              logo: "https://pilot360.co/logo.png",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWV5ZGC4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <Navbar /> */}
        <main>{children}</main> {/* Dynamic content based on route */}
        {/* WhatsApp Floating Button */}
        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ripple"></span>
          <a
            href="https://wa.me/918490008834"
            className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp className="text-2xl md:text-3xl z-10" />
          </a>
        </div>
        <Footer />
      </body>
    </html>
  );
}
