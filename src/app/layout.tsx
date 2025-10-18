// src/app/layout.tsx
import { ReactNode } from "react";
import { Lato, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable} ${playfair.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
