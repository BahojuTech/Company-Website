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
  metadataBase: new URL("https://bahojutech.com"),
  title: {
    default: "BahojuTech",
    template: "%s - BahojuTech",
  },
  description:
    "BahojuTech offers expert Digital Marketing, Web Design, App Development, Cloud Computing & Branding solutions. Hire professionals in Lagos today!",
  keywords:
    "Digital Marketing Services, Web Design, App Development, Cloud Solutions, Business Branding, SEO services, Social Media Marketing, Affordable software development, E-commerce website development",
  openGraph: {
    title: "BahojuTech",
    description:
      "BahojuTech offers expert Digital Marketing, Web Design, App Development, Cloud Computing & Branding solutions.",
    url: "https://bahojutech.com",
    siteName: "BahojuTech",
    images: [
      {
        url: "https://bahojutech.com/opengraph-image.png", // Update with your actual OG image
        width: 1200,
        height: 630,
        alt: "BahojuTech Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BahojuTech",
    description:
      "BahojuTech offers expert Digital Marketing, Web Design, App Development, Cloud Computing & Branding solutions.",
    images: ["https://bahojutech.com/twitter-image.jpg"], // Update with a real image
  },
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