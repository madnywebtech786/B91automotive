import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./sections/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B91 Automotic | Calgary’s Trusted Auto Repair & Autobody Experts",
  description: "B91 Automotic provides top-rated auto repair and autobody services in Calgary. From engine diagnostics and transmission repair to collision restoration and windshield replacement, our certified professionals deliver high quality, affordable, and reliable solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>B91 Automotic | Calgary’s Trusted Auto Repair & Autobody Experts</title>
        <meta
          name="description"
          content="B91 Automotic provides top-rated auto repair and autobody services in Calgary. From engine diagnostics and transmission repair to collision restoration and windshield replacement, our certified professionals deliver high quality, affordable, and reliable solutions."
        />
        <meta
          name="keywords"
          content="Calgary auto repair, Calgary autobody, auto repair Calgary, autobody Calgary, engine diagnostics, transmission repair, collision restoration, windshield replacement, auto parts Calgary, insurance claims, B91 Automotic"
        />
        <meta property="og:title" content="B91 Automotic | Calgary’s Trusted Auto Repair & Autobody Experts" />
        <meta
          property="og:description"
          content="At B91 Automotic, we ensure your vehicle runs smoothly and looks its best with expert auto repair, maintenance, and autobody services in Calgary."
        />
        <meta property="og:image" content="/path/to/your/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B91 Automotic | Calgary’s Trusted Auto Repair & Autobody Experts" />
        <meta
          name="twitter:description"
          content="Discover high quality auto repair, maintenance, and autobody services in Calgary. Trust B91 Automotic for engine diagnostics, collision restoration, and more."
        />
        <meta name="twitter:image" content="/path/to/your/twitter-image.jpg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
