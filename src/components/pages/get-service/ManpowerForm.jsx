// ManpowerForm.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Paragraph } from "@/components/custom/Paragraph";

export const ManpowerForm = ({
  serviceData,
  selectedService,
  booking,
  onBookingUpdate,
  onFormInteraction,
  serviceImage,
}) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    serviceData.forEach((role) => {
      initialQuantities[role.name] =
        booking[selectedService]?.[role.name] || "";
    });
    setQuantities(initialQuantities);
  }, [selectedService, serviceData, booking]);

  const handleQuantityChange = (roleName, value) => {
    const newQuantity = Math.max(0, parseInt(value, 10) || 0);
    setQuantities((prev) => ({ ...prev, [roleName]: newQuantity }));
    onFormInteraction();
  };

  const handleAddRemove = (roleName) => {
    const quantity = quantities[roleName];
    onBookingUpdate(selectedService, roleName, quantity);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-40 bg-gray-100 text-white md:p-4 mb-4 flex items-center justify-between space-x-2 overflow-hidden">
        {/* Left side: Service Title */}
        <h2 className="w-2/3 text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 px-2">
          {selectedService}
        </h2>

        {/* Right side: Service Image */}
        <div className="h-full w-1/3">
          <Image
            src={serviceImage}
            alt={selectedService}
            height={400}
            width={300}
            className="object-cover object-center h-full w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
        {serviceData.map((role) => (
          <div
            key={role.name}
            className="flex flex-col items-center text-center p-4 "
          >
            <div className="h-15 w-15 flex items-center justify-center mb-2 text-primary">
              <Image
                src="https://image.winudf.com/v2/image1/Y29tLmZvcmJpdGJkLmNvbnN0cnVjdGlvbm1hbmFnZXJfaWNvbl8xNjAzODc0Nzk1XzA5NA/icon.png?w=156&fakeurl=1"
                alt="image"
                height={80}
                width={80}
              />
            </div>
            <Paragraph className="!font-bold !text-sm">{role.name}</Paragraph>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <input
                type="number"
                placeholder="Qty"
                value={quantities[role.name] || ""}
                onChange={(e) =>
                  handleQuantityChange(role.name, e.target.value)
                }
                onFocus={onFormInteraction}
                min="0"
                className="w-12 lg:w-20 h-6 p-1 text-[10px] text-center border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {booking[selectedService]?.[role.name] ? (
                <button
                  onClick={() =>
                    onBookingUpdate(selectedService, role.name, "")
                  }
                  className="w-12 py-1 text-[10px] bg-secondary text-white hover:bg-secondary transition-colors"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => handleAddRemove(role.name)}
                  className="w-12 py-1 text-xs bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
