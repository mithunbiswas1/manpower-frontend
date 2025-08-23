// src/app/layout.js

import "@/app/globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import ReduxProvider from "@/redux/reduxProvider/ReduxProvider";

export const metadata = {
  title: "Welcome to Box Craft Packing Services",
  description: "Reliable Manpower Solutions in the UAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="antialiased">
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
          {/* <WhatsAppChatButton /> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
