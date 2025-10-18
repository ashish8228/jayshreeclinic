// src/app/head.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jayshree Skin Clinic",
  description: "Dermatology clinic - skin care, acne, pigmentation, hair loss treatments",
  authors: [
    { name: "Dr. Seepika Jaiswal", url: "https://ashish8228.github.io/jayshreeclinic/" },
    { name: "Dr. Hari Mohan Rai" },
  ],
  keywords: [
    "Dermatology clinic",
    "Clinic in Lucknow",
    "Dermatologist in Lucknow",
    "Skincare in Lucknow",
  ],
  openGraph: {
    title: "Jayshree Skin Clinic",
    description: "Dermatology clinic - skin care, acne, pigmentation, hair loss treatments",
    url: "https://yourdomain.com",
    siteName: "Jayshree Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayshree Skin Clinic",
    description: "Dermatology clinic - skin care, acne, pigmentation, hair loss treatments",
  },
};

export default function HeadTags() {
  return (
    <>
      {/* Preconnect & Font Preload */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Dr. Seepika Jaiswal",
            url: "https://yourdomain.com",
            telephone: "+91-8957132986",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4/528, Vivek Khand 4",
              addressLocality: "Gomti Nagar",
              addressRegion: "Uttar Pradesh",
              postalCode: "226010",
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 11:00-13:00, Mo-Sa 16:00-19:00",
            sameAs: [
              "https://maps.app.goo.gl/tPGcMFLpXnBU8cEA9",
              "https://facebook.com/your",
              "https://www.instagram.com/seepiseeps?igsh=aTV4cHl2cTRpd3hu",
              "https://www.youtube.com/@DrSeepikaJaiswal",
            ],
            priceRange: "₹ 1,000",
          }),
        }}
      />
    </>
  );
}
