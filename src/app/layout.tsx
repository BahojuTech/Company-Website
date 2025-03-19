import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument_sans = Instrument_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "BahojuTech",
    template: "%s - Bahujutech"
  },
  description:
    "BahojuTech offers expert Digital Marketing, Web Design, App Development, Cloud Computing & Branding solutions. Hire professionals in Lagos today!",
  keywords:
    "Digital Marketing Services, Web Design, App Development, Cloud Solutions, Business Branding, SEO services, Social Media Marketing, Affordable software development, E-commerce website development",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrument_sans} ${geistMono}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
