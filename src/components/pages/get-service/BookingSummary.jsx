"use client";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { ShoppingCart } from "lucide-react";

export const BookingSummary = ({ booking }) => {
  const hasBookings = Object.keys(booking).length > 0;

  return (
    <div className="p-4 rounded-lg bg-white shadow-md h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <ShoppingCart size={24} /> Booking Summary
      </h3>
      <div className="flex-grow space-y-2">
        {hasBookings ? (
          Object.keys(booking).map((serviceName) => (
            <div key={serviceName} className="border-b pb-2 mb-2">
              <h4 className="font-semibold text-gray-800 mb-1">
                {serviceName}
              </h4>
              <ul className="pl-4">
                {Object.keys(booking[serviceName]).map((roleName) => (
                  <li key={roleName} className="text-sm text-gray-600">
                    {roleName} - Qty {booking[serviceName][roleName]}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 italic mt-8">
            Your booking summary will appear here.
          </p>
        )}
      </div>
      <div className="mt-auto pt-4 border-t">
        <ButtonPrimary link="/contact" className="w-full">
          Book Now
        </ButtonPrimary>
      </div>
    </div>
  );
};
