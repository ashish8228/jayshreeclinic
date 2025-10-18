import type { Metadata } from "next";
import { Lato, Montserrat, Playfair_Display } from 'next/font/google';
import "./globals.css";


<script type="application/ld+json" suppressHydrationWarning>
  {`{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Seepika Jaiswal",
  "url": "https://yourdomain.com",
  "telephone": "+91-8957132986",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4/528, Vivek Khand 4",
    "addressLocality": "Gomti Nagar",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226010",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Sa 11:00-13:00, Mo-Sa 16:00-19:00",
  "sameAs": [
    "https://maps.app.goo.gl/tPGcMFLpXnBU8cEA9",
    "https://facebook.com/your",
    "https://instagram.com/your"
  ],
  "priceRange": "₹ 1,000"
}`}
</script>


// Lato for body text
const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-lato'
});

// Montserrat for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});


export const metadata: Metadata = {
  title: 'Dr. Jayshree Skin Clinic',
  description: 'Dermatology clinic - skin care, acne, pigmentation, hair loss treatments',
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en"
      className={`${lato.variable} ${montserrat.variable} ${playfair.variable} antialiased`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
