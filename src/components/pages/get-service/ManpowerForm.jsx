"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react"; // Import the user icon

export const ManpowerForm = ({
  serviceData,
  selectedService,
  booking,
  onBookingUpdate,
}) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Reset quantities when the service changes
    const initialQuantities = {};
    serviceData.forEach((role) => {
      initialQuantities[role.name] =
        booking[selectedService]?.[role.name] || role.defaultQty;
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
      <div className="bg-primary text-white p-6 rounded-lg mb-8 relative">
        <h2 className="text-3xl font-bold">{selectedService}</h2>
        <div className="absolute top-0 right-0 h-full w-1/3 overflow-hidden rounded-r-lg">
          <Image
            src="https://images.pexels.com/photos/16697843/pexels-photo-16697843/free-photo-of-factory-worker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={selectedService}
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((role) => (
          <div
            key={role.name}
            className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm"
          >
            <div className="h-20 w-20 flex items-center justify-center mb-4 text-primary">
              <UserRound size={80} /> {/* Replaced Image with UserRound icon */}
            </div>
            <h4 className="font-semibold text-lg">{role.name}</h4>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                value={quantities[role.name] || ""}
                onChange={(e) =>
                  handleQuantityChange(role.name, e.target.value)
                }
                min="0"
                className="w-20 p-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {booking[selectedService]?.[role.name] ? (
                <button
                  onClick={() =>
                    onBookingUpdate(selectedService, role.name, "")
                  }
                  className="px-4 py-2 text-sm bg-secondary text-white rounded-md hover:bg-secondary transition-colors"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => handleAddRemove(role.name)}
                  className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
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
