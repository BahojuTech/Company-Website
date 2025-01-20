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
  description: "At Bahoju, we empower brands to elevate customer experiences through innovative solutions. Our offerings include strategic digital marketing services to boost online presence and drive engagement, software and mobile app development to create seamless user experiences, business branding to craft unique and memorable identities, and cloud computing solutions for scalable and secure data access. Partner with us to unlock your brand's full potential with technology and creativity.",
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
