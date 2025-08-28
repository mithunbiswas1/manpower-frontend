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

export const GetServicePage = () => {
  const searchParams = useSearchParams();
  const { data, error, isLoading } = useGetAllServicesQuery();
  const services = data?.data || [];

  const [selectedService, setSelectedService] = useState(
    "Warehouse & Packing Helpers"
  );
  const [booking, setBooking] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentService = services.find((s) => s.name === selectedService);

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
            services={services.map((s) => s.name)}
            selectedService={selectedService}
            onSelectService={handleSelectService}
          />
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-6 px-4">
          <ManpowerForm
            serviceData={currentService?.roles || []}
            selectedService={selectedService}
            booking={booking}
            onBookingUpdate={handleBookingUpdate}
            onFormInteraction={handleFormInteraction}
            serviceImage={`${baseUriBackend}${currentService?.image}`}
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
