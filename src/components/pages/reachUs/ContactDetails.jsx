"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactDetails = () => {
  const contactData = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@example.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Main St, City, Country",
      link: "https://maps.app.goo.gl/MoDgZv7zZnMQRxHR9",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 5PM",
      link: "#working-hours",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-6">
        {contactData.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target={item.title === "Location" ? "_blank" : undefined}
              rel={
                item.title === "Location" ? "noopener noreferrer" : undefined
              }
              className="flex flex-col md:flex-row text-center md:text-left items-center gap-2 md:gap-8 group"
            >
              <span className="mb-4 text-white group-hover:text-primary transition-all duration-300 text-3xl bg-primary group-hover:bg-primary/0 p-3 rounded-lg border-2 border-primary">
                <Icon className="w-6 h-6" />
              </span>
              <span className="-mt-4">
                <h3 className="text-black _h3 mb-1">{item.title}</h3>
                <p className="text-black text-lg">{item.content}</p>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};
