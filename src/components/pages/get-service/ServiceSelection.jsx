// components/pages/get-service/ServiceSelection.jsx
"use client";
import {
  Factory,
  Brush,
  Shield,
  Hotel,
  LifeBuoy,
  Users,
  Clock,
} from "lucide-react";

// Map your service names to icons
const serviceIcons = {
  "Factory Workers": Factory,
  "Cleaning Services": Brush,
  "Security Guard": Shield,
  "Hotel & Catering": Hotel,
  "Safety Officer": LifeBuoy,
  "Permanent Staffing": Users,
  "Temporary Staffing": Clock,
};

export const ServiceSelection = ({
  services,
  selectedService,
  onSelectService,
}) => {
  return (
    <nav>
      <ul>
        {services.map((serviceName) => {
          const Icon = serviceIcons[serviceName];
          return (
            <li
              key={serviceName}
              onClick={() => onSelectService(serviceName)}
              className={`p-2 mb-2 flex gap-2 items-center cursor-pointer transition-colors duration-300 rounded-lg ${
                selectedService === serviceName
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {Icon && <Icon size={24} className="mb-1" />}
              <span className="text-sm font-semibold">{serviceName}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
