// src/app/layout.js

import Footer from "@/components/common/Footer";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: "MyClinic - Comprehensive Healthcare",
  description:
    "Your trusted partner for dental, cardiology, pediatrics, and more. Book your appointment today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Ensure cz-shortcut-listen="true" is removed if it's currently there in your file */}
      <body cz-shortcut-listen="true" className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
