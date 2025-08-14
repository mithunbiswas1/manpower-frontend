"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactDetails = () => {
  const contactData = [
    {
      icon: Phone,
      title: "Phone/WhatsApp",
      content: "+971 [Your Number]",
      link: "tel:+971[YourNumber]",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@boxcraftuae.com",
      link: "mailto:info@boxcraftuae.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Warehouse No. XX, Industrial Area 11, Sharjah, UAE",
      link: "https://goo.gl/maps/your-google-map-link",
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
