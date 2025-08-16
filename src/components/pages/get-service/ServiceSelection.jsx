// components/pages/get-service/ServiceSelection.jsx
"use client";
import {
  Package, // for Warehouse & Packing Helpers
  BrushCleaning, // for Cleaning Staff
  Hammer, // for Construction Labour
  UtensilsCrossed, // for Hospitality Workers
  Factory, // for Factory & General Helpers
  Users, // for Others Labour & Workers
} from "lucide-react";

// Map your new service names to icons
const serviceIcons = {
  "Warehouse & Packing Helpers": Package,
  "Cleaning Staff": BrushCleaning,
  "Construction Labour": Hammer,
  "Hospitality Workers": UtensilsCrossed,
  "Factory & General Helpers": Factory,
  "Others Labour & Workers": Users,
};

export const ServiceSelection = ({
  services,
  selectedService,
  onSelectService,
}) => {
  return (
    <nav>
      <ul className="flex flex-row md:flex-col">
        {services.map((serviceName) => {
          const Icon = serviceIcons[serviceName];
          return (
            <li
              key={serviceName}
              onClick={() => onSelectService(serviceName)}
              className="p-0.5 md:p-2 flex flex-col gap-1 md:gap-2 items-center cursor-pointer transition-colors duration-300 rounded-lg"
            >
              {Icon && (
                <div
                  className={`p-2 md:p-3 rounded-full ${
                    selectedService === serviceName
                      ? "bg-primary text-white"
                      : "bg-gray-600 text-gray-700 hover:bg-primary"
                  }`}
                >
                  <Icon className="text-white size-4 md:size-8" />
                </div>
              )}
              <span className="text-[6px] md:text-sm font-semibold text-center">
                {serviceName}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
