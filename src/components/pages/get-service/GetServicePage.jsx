// components/pages/get-service/GetServicePage.jsx
"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // New import
import { ServiceSelection } from "./ServiceSelection";
import { ManpowerForm } from "./ManpowerForm";
import { BookingSummary } from "./BookingSummary";

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
    <div className="flex bg-white min-h-[calc(100vh-8rem)]">
      {/* Left Navigation */}
      <div className="w-1/5 bg-gray-100 p-4 pt-16 border-r border-gray-200">
        <ServiceSelection
          services={Object.keys(serviceData)}
          selectedService={selectedService}
          onSelectService={handleSelectService}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 pt-16">
        <ManpowerForm
          serviceData={serviceData[selectedService]}
          selectedService={selectedService}
          booking={booking}
          onBookingUpdate={handleBookingUpdate}
        />
      </div>

      {/* Right Sidebar Summary */}
      <div className="w-1/4 bg-gray-100 p-4 pt-16 border-l border-gray-200">
        <BookingSummary booking={booking} />
      </div>
    </div>
  );
};

// This data powers the components
const serviceData = {
  "Factory Workers": [
    { name: "Supervisor", defaultQty: 1 },
    { name: "Foreman", defaultQty: 2 },
    { name: "Chargehand", defaultQty: 5 },
    { name: "Safety Officer", defaultQty: 0 },
    { name: "Scaffolder Certified", defaultQty: 0 },
    { name: "Scaffolder Normal", defaultQty: 0 },
  ],
  "Cleaning Services": [
    { name: "Team Lead", defaultQty: 1 },
    { name: "Cleaning Staff", defaultQty: 5 },
    { name: "Sanitation Expert", defaultQty: 1 },
  ],
  "Security Guard": [
    { name: "Head Guard", defaultQty: 1 },
    { name: "Security Guard", defaultQty: 5 },
  ],
  "Hotel & Catering Staff": [
    { name: "Chef", defaultQty: 1 },
    { name: "Waiter", defaultQty: 5 },
    { name: "Housekeeping", defaultQty: 3 },
  ],
  "Safety Officer": [
    { name: "Safety Supervisor", defaultQty: 1 },
    { name: "Safety Officer", defaultQty: 3 },
  ],
  "Permanent Staffing": [
    { name: "Hiring Manager", defaultQty: 1 },
    { name: "Recruiter", defaultQty: 2 },
  ],
  "Temporary Staffing": [
    { name: "Temp Staff", defaultQty: 10 },
    { name: "Project Lead", defaultQty: 1 },
  ],
};
