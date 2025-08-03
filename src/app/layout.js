// src/app/layout.js
import "@/app/globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: "Box Craft Packing Service, Concern of AL Shahara Group",
  description:
    "Box Craft Packing Service provides reliable manpower and expert packing solutions across the UAE. From residential to corporate needs, we ensure safe, efficient, and hassle-free moving and logistics support tailored to your satisfaction.",
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
