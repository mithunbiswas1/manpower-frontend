// components /pages /get-service / GetServicePage.jsx
"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ServiceSelection } from "@/components/pages/get-service/ServiceSelection";
import { ManpowerForm } from "@/components/pages/get-service/ManpowerForm";
import { BookingSummary } from "@/components/pages/get-service/BookingSummary";
import { BookingStepper } from "./BookingStepper";

export const GetServicePage = () => {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("Factory Workers");
  const [booking, setBooking] = useState({});

  useEffect(() => {
    // Read the 'service' parameter from the URL
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      // Decode the URL component and set the selected service
      setSelectedService(decodeURIComponent(serviceFromUrl));
    }
  }, [searchParams]);

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleBookingUpdate = (service, role, quantity) => {
    setBooking((prevBooking) => {
      const updatedServiceBooking = {
        ...(prevBooking[service] || {}),
        [role]: quantity,
      };

      if (quantity === 0 || quantity === "") {
        delete updatedServiceBooking[role];
      }

      const newBooking = {
        ...prevBooking,
        [service]: updatedServiceBooking,
      };

      if (Object.keys(newBooking[service]).length === 0) {
        delete newBooking[service];
      }

      return newBooking;
    });
  };

  return (
    <div className="pb-16">
      <BookingStepper />

      <div className="_max_width bg-white grid grid-cols-1 md:grid-cols-11">
        {/* Left Navigation */}
        <div className="md:col-span-2 bg-gray-100 p-4 border-r border-gray-200">
          <ServiceSelection
            services={Object.keys(serviceData)}
            selectedService={selectedService}
            onSelectService={handleSelectService}
          />
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-6 p-4">
          <ManpowerForm
            serviceData={serviceData[selectedService]}
            selectedService={selectedService}
            booking={booking}
            onBookingUpdate={handleBookingUpdate}
          />
        </div>

        {/* Right Sidebar Summary */}
        <div className="md:col-span-3 bg-gray-100 p-4 border-l border-gray-200">
          <BookingSummary booking={booking} />
        </div>
      </div>
    </div>
  );
};

// This data powers the components
const serviceData = {
  "Factory Workers": [
    { name: "Supervisor", defaultQty: 0 },
    { name: "Foreman", defaultQty: 0 },
    { name: "Chargehand", defaultQty: 0 },
    { name: "Safety Officer", defaultQty: 0 },
    { name: "Scaffolder Certified", defaultQty: 0 },
    { name: "Scaffolder Normal", defaultQty: 0 },
  ],
  "Cleaning Services": [
    { name: "Team Lead", defaultQty: 0 },
    { name: "Cleaning Staff", defaultQty: 0 },
    { name: "Sanitation Expert", defaultQty: 0 },
  ],
  "Security Guard": [
    { name: "Head Guard", defaultQty: 0 },
    { name: "Security Guard", defaultQty: 0 },
  ],
  "Hotel & Catering": [
    { name: "Chef", defaultQty: 0 },
    { name: "Waiter", defaultQty: 0 },
    { name: "Housekeeping", defaultQty: 0 },
  ],
  "Safety Officer": [
    { name: "Safety Supervisor", defaultQty: 0 },
    { name: "Safety Officer", defaultQty: 0 },
  ],
  "Permanent Staffing": [
    { name: "Hiring Manager", defaultQty: 0 },
    { name: "Recruiter", defaultQty: 0 },
  ],
  "Temporary Staffing": [
    { name: "Temp Staff", defaultQty: 0 },
    { name: "Project Lead", defaultQty: 0 },
  ],
};
