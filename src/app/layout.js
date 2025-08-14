// src/app/layout.js
import "@/app/globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: "Empowering Your Business with Skilled & Compliant Manpower.",
  description:
    "Fast deployment. Legal workforce. Flexible contracts. Trusted by top UAE companies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
