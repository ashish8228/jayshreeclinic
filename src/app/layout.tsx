import type { Metadata } from "next";
import { Lato, Montserrat, Playfair_Display } from 'next/font/google';
import "./globals.css";

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
