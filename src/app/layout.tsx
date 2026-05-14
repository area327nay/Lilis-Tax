import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../index.css";
import { LanguageProvider } from "../LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import MobileActionBar from "../components/MobileActionBar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lili's Tax Services | Professional Tax & Bookkeeping in Union Gap",
  description: "Lili's Tax Services offers expert tax preparation, bookkeeping, and payroll services in Union Gap, Yakima, and surrounding areas. Bilingual support available.",
  keywords: "tax services, tax preparation, bookkeeping, payroll, Union Gap, Yakima, Mattawa, Othello, Quincy, Spanish speaking tax preparer",
  icons: {
    icon: "https://raw.githubusercontent.com/area327nay/Lilis-Tax/main/public/59a4a091-9797-4939-83e4-9d39172ef3bb.JPG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-gray-50 flex flex-col font-sans min-h-screen`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow pt-20">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <MobileActionBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
