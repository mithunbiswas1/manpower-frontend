// GetServicePage.jsx
"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ServiceSelection } from "@/components/pages/get-service/ServiceSelection";
import { ManpowerForm } from "@/components/pages/get-service/ManpowerForm";
import { BookingSummary } from "@/components/pages/get-service/BookingSummary";
import { BookingStepper } from "@/components/pages/get-service/BookingStepper";

import { baseUriBackend } from "@/redux/endPoints/url";
import { useGetAllServicesQuery } from "@/redux/features/servicesApi";

import expert_factory_workforce from "@/resource/home_banner/expert_factory_workforce.jpg";
import professional_leaning_services from "@/resource/home_banner/professional_leaning_services.jpg";
import trusted_security_personnel from "@/resource/home_banner/trusted_security_personnel.jpg";
import hotel_catering_taffing from "@/resource/home_banner/hotel_catering_taffing.jpg";
import certified_safety_officers from "@/resource/home_banner/certified_safety_officers.jpg";
import permanent_staffing_solutions from "@/resource/home_banner/permanent_staffing_solutions.jpg";

export const GetServicePage = () => {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState(
    "Warehouse & Packing Helpers"
  );
  const [booking, setBooking] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, error, isLoading } = useGetAllServicesQuery();
  const services = data?.data || [];
  console.log("Fetched Services:", services);

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setSelectedService(decodeURIComponent(serviceFromUrl));
    }
  }, [searchParams]);

  useEffect(() => {
    const hasBookings = Object.values(booking).some(
      (service) => Object.keys(service).length > 0
    );

    if (isModalOpen) {
      setActiveStep(4);
    } else if (hasBookings) {
      setActiveStep(3);
    } else if (selectedService) {
      setActiveStep(1);
    }
  }, [booking, selectedService, isModalOpen]);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setActiveStep(1);
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

  const handleFormInteraction = () => {
    setActiveStep(2);
  };

  const handleBookNow = () => {
    setIsModalOpen(true);
    setActiveStep(4);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmission = () => {
    setActiveStep(5);
  };

  return (
    <div className="pb-16">
      <BookingStepper activeStep={activeStep} />

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
        <div className="md:col-span-6 px-4">
          <ManpowerForm
            serviceData={serviceData[selectedService]?.roles || []}
            selectedService={selectedService}
            booking={booking}
            onBookingUpdate={handleBookingUpdate}
            onFormInteraction={handleFormInteraction}
            serviceImage={serviceData[selectedService]?.imageUrl}
          />
        </div>

        {/* Right Sidebar Summary */}
        <div className="md:col-span-3 bg-gray-100 p-4 border-l border-gray-200">
          <BookingSummary
            booking={booking}
            onBookNow={handleBookNow}
            onClose={handleModalClose}
            onSubmission={handleSubmission}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

// Updated serviceData
const serviceData = {
  "Warehouse & Packing Helpers": {
    imageUrl: expert_factory_workforce,
    roles: [
      { name: "Supervisor", defaultQty: 0 },
      { name: "Foreman", defaultQty: 0 },
      { name: "Chargehand", defaultQty: 0 },
    ],
  },
  "Cleaning Staff": {
    imageUrl: professional_leaning_services,
    roles: [
      { name: "Team Lead", defaultQty: 0 },
      { name: "Cleaning Staff", defaultQty: 0 },
      { name: "Sanitation Expert", defaultQty: 0 },
    ],
  },
  "Construction Labour": {
    imageUrl: trusted_security_personnel,
    roles: [
      { name: "Mason", defaultQty: 0 },
      { name: "Helper", defaultQty: 0 },
      { name: "Welder", defaultQty: 0 },
    ],
  },
  "Hospitality Workers": {
    imageUrl: hotel_catering_taffing,
    roles: [
      { name: "Chef", defaultQty: 0 },
      { name: "Waiter", defaultQty: 0 },
      { name: "Housekeeping", defaultQty: 0 },
    ],
  },
  "Factory & General Helpers": {
    imageUrl: certified_safety_officers,
    roles: [
      { name: "Factory Helper", defaultQty: 0 },
      { name: "General Worker", defaultQty: 0 },
    ],
  },
  "Others Labour & Workers": {
    imageUrl: permanent_staffing_solutions,
    roles: [
      { name: "Temp Staff", defaultQty: 0 },
      { name: "Project Lead", defaultQty: 0 },
    ],
  },
};
