"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { X } from "lucide-react";

import expert_factory_workforce from "@/resource/home_banner/expert_factory_workforce.jpg";
import professional_leaning_services from "@/resource/home_banner/professional_leaning_services.jpg";
import trusted_security_personnel from "@/resource/home_banner/trusted_security_personnel.jpg";
import hotel_catering_taffing from "@/resource/home_banner/hotel_catering_taffing.jpg";
import certified_safety_officers from "@/resource/home_banner/certified_safety_officers.jpg";
import permanent_staffing_solutions from "@/resource/home_banner/permanent_staffing_solutions.jpg";
import flexible_temporary_staffing from "@/resource/home_banner/flexible_temporary_staffing.jpg";

import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { ButtonDefault } from "@/components/custom/ButtonDefault";
import { ButtonSecondary } from "@/components/custom/ButtonSecondary";

// --- Booking-style Modal ---
const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    email: "",
    message: "",
    tradeLicense: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, tradeLicense: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      contact: "",
      email: "",
      message: "",
      tradeLicense: null,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl w-5/6 md:w-4/6 max-w-5xl mx-4 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-primary">
                Request Quotation
              </h2>
              <ButtonDefault
                onClick={handleClose}
                className="text-gray-500 cursor-pointer hover:bg-secondary rounded-sm hover:text-white transition-all duration-200"
              >
                <X size={24} />
              </ButtonDefault>
            </div>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Trade License
                  </label>
                  <input
                    type="file"
                    name="tradeLicense"
                    onChange={handleFileChange}
                    className="border rounded px-3 py-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message / Instructions"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border rounded px-3 py-2 w-full"
                  rows={3}
                />

                <ButtonSecondary type="submit" className="w-full mt-2">
                  Submit Request
                </ButtonSecondary>
              </form>
            ) : (
              <div className="text-center py-10">
                <p className="text-green-600 text-lg font-semibold">
                  ✅ Your request has been submitted successfully!
                </p>
                <ButtonSecondary onClick={handleClose} className="mt-4">
                  Close
                </ButtonSecondary>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const slides = [
  {
    id: 1,
    image: certified_safety_officers,
    title: "Certified Safety Officers",
    description:
      "We provide trained safety officers to help you meet compliance and safety standards.",
    buttonText: "Ensure Safety",
  },
  {
    id: 2,
    image: flexible_temporary_staffing,
    title: "Flexible Temporary Staffing",
    description:
      "Scale your workforce efficiently during peak periods with our short-term staffing options.",
    buttonText: "Hire Temporarily",
  },
  {
    id: 3,
    image: trusted_security_personnel,
    title: "Trusted Security Personnel",
    description:
      "Ensure the safety of your premises with our trained and licensed security guards.",
    buttonText: "Request Security",
  },
  {
    id: 4,
    image: hotel_catering_taffing,
    title: "Hotel & Catering",
    description:
      "Deliver excellent guest experiences with our professional hospitality staff.",
    buttonText: "Get Hospitality Staff",
  },
  {
    id: 5,
    image: expert_factory_workforce,
    title: "Expert Factory Workforce",
    description:
      "From machine operators to general helpers, we provide reliable manpower for all factory needs.",
    buttonText: "Hire Factory Staff",
  },
  {
    id: 6,
    image: permanent_staffing_solutions,
    title: "Permanent Staffing Solutions",
    description:
      "Hire long-term packing and cleaning professionals tailored to your business culture.",
    buttonText: "Find Candidates",
  },
  {
    id: 7,
    image: professional_leaning_services,
    title: "Professional Cleaning Services",
    description:
      "Keep your workspace spotless with our routine and specialized cleaning teams.",
    buttonText: "Book Cleaning",
  },
];

export const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const swiperRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative h-screen w-full flex mt-8 ">
        {/* Left-side bullets */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center space-y-4">
          <div className="h-20 2xl:h-28 w-2 bg-gradient-to-b from-transparent to-white" />
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                if (swiperRef.current && swiperRef.current.swiper) {
                  swiperRef.current.swiper.slideTo(index);
                  setActiveIndex(index);
                  setAnimationKey(index);
                }
              }}
              className={`size-3 border-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "border-white bg-white"
                  : "border-white/50 bg-transparent"
              }`}
            />
          ))}
          <div className="h-20 2xl:h-28 w-2 bg-gradient-to-b from-white to-transparent" />
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="h-full w-full"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            setAnimationKey(swiper.realIndex);
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full overflow-hidden">
                <motion.div
                  key={`${slide.id}-${animationKey}`}
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 6, ease: "easeOut", repeat: 0 }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                <div className="absolute inset-0 bg-black/50 flex items-center">
                  <div className="container mx-auto pl-0 pr-4 md:px-4 lg:px-6 2xl:px-8">
                    <div className="max-w-2xl 2xl:max-w-4xl ml-20">
                      <motion.p
                        key={`${slide.description}-${animationKey}`}
                        className="_h5 text-white mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>

                      <motion.h1
                        key={`${slide.title}-${animationKey}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="_h1 text-white mb-8"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.div
                        key={`${slide.buttonText}-${animationKey}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="space-x-3"
                      >
                        <ButtonDefault onClick={openModal}>
                          Request Quotation
                        </ButtonDefault>
                        <ButtonPrimary
                          className="bg-secondary"
                          link="/get-service"
                        >
                          Get Services
                        </ButtonPrimary>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Render Booking-style Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
