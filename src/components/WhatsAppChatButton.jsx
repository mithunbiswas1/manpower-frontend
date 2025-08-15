"use client";

import { useState } from "react";
import { PhoneCall, X } from "lucide-react";
import { Whatsapp } from "./custom/icons/WhatsApp";

export default function WhatsAppChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+0000000000";

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=Hello!`;
    window.open(url, "_blank", "width=400,height=600");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white shadow-2xl rounded-xl w-72 p-4 mb-3 border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <a
              href={`https://wa.me/${phoneNumber}?call=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 font-medium hover:underline"
            >
              <PhoneCall className="mr-2 h-4 w-4" /> Call on WhatsApp
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Button */}
          <button
            onClick={openWhatsAppChat}
            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-green-700 transition"
          >
            <Whatsapp className="h-5 w-5" />
            Start Chat
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-xl transition flex items-center justify-center"
      >
        <Whatsapp className="w-6 h-6" />
      </button>
    </div>
  );
}
