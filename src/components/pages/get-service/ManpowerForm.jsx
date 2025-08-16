"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo_img from "@/resource/man_logo.jpg";
import { Paragraph } from "@/components/custom/Paragraph";

export const ManpowerForm = ({
  serviceData,
  selectedService,
  booking,
  onBookingUpdate,
}) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Initialize with an empty string to show the placeholder, or with a booked quantity
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
  };

  const handleAddRemove = (roleName) => {
    const quantity = quantities[roleName];
    onBookingUpdate(selectedService, roleName, quantity);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-32 bg-primary text-white md:p-4 mb-4 relative">
        <h2 className="text-3xl font-bold absolute top-1/2 -translate-y-1/2 p-2">
          {selectedService}
        </h2>
        <div className="absolute top-0 right-0 h-full w-1/3 overflow-hidden rounded-r-lg">
          <Image
            src="https://images.pexels.com/photos/16697843/pexels-photo-16697843/free-photo-of-factory-worker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={selectedService}
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceData.map((role) => (
          <div
            key={role.name}
            className="flex flex-col items-center text-center p-4 "
          >
            <div className="h-15 w-15 flex items-center justify-center mb-2 text-primary">
              {/* <UserRound size={80} /> */}
              <Image
                // src="https://tabascouae.com/img/services/serman.svg"
                src={logo_img}
                alt="image"
                height={80}
                width={80}
                className=""
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
