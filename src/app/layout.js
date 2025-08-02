// src/app/layout.js
import "@/app/globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: "AL Shahara Group",
  description:
    "AL Shahara Group offers expert medical care in dentistry, cardiology, pediatrics, and more. Experience compassionate, specialized healthcare tailored to your needs. Book your appointment today with trusted professionals.",
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
