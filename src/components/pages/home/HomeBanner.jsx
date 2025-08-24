"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { ButtonDefault } from "@/components/custom/ButtonDefault";
import { ButtonSecondary } from "@/components/custom/ButtonSecondary";

import { baseUriBackend } from "@/redux/endPoints/url";
import { useGetAllBannerQuery } from "@/redux/features/bannerApi";
import { useCreatequotationApiMutation } from "@/redux/features/quotationApi";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// --- Booking-style Modal ---
const AppointmentModal = ({ isOpen, onClose }) => {
  const [createQuotation, { isLoading }] = useCreatequotationApiMutation();

  const initialValues = {
    job_type: "",
    tital: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    image: null,
  };

  const validationSchema = Yup.object().shape({
    job_type: Yup.string().required("Job type is required"),
    tital: Yup.string().required("Title is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      await createQuotation(formData).unwrap();
      toast.success("Submitted successfully!");
      resetForm();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit. Please try again.");
    }
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
          onClick={onClose}
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
                onClick={onClose}
                className="text-gray-500 cursor-pointer hover:bg-secondary rounded-sm hover:text-white transition-all duration-200"
              >
                <X size={24} />
              </ButtonDefault>
            </div>

            {/* Formik Form */}
            <div className="p-6">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Field
                          type="text"
                          name="job_type"
                          placeholder="Job Type"
                          className="border rounded px-3 py-2 w-full"
                        />
                        <ErrorMessage
                          name="job_type"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Field
                          type="text"
                          name="tital"
                          placeholder="Title"
                          className="border rounded px-3 py-2 w-full"
                        />
                        <ErrorMessage
                          name="tital"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Field
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          className="border rounded px-3 py-2 w-full"
                        />
                        <ErrorMessage
                          name="first_name"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Field
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          className="border rounded px-3 py-2 w-full"
                        />
                        <ErrorMessage
                          name="last_name"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="border rounded px-3 py-2 w-full"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          className="border rounded px-3 py-2 w-full"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1 font-medium text-gray-700">
                        Trade License
                      </label>
                      <input
                        type="file"
                        name="image"
                        onChange={(e) =>
                          setFieldValue("image", e.target.files[0])
                        }
                        className="border rounded px-3 py-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      />
                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <ButtonSecondary
                      type="submit"
                      className="w-full mt-2"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Submit Request"}
                    </ButtonSecondary>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- HomeBanner Component ---
export const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const swiperRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { data, error, isLoading } = useGetAllBannerQuery();
  const slides = data?.data || [];

  return (
    <>
      <div className="relative h-screen w-full flex mt-8 ">
        {/* Left-side bullets */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center space-y-4">
          <div className="h-20 2xl:h-28 w-2 bg-gradient-to-b from-transparent to-white" />
          {slides.map((slide, index) => (
            <button
              key={slide._id}
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
            <SwiperSlide key={slide._id}>
              <div className="relative h-full w-full overflow-hidden">
                <motion.div
                  key={`${slide._id}-image-${animationKey}`}
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 6, ease: "easeOut", repeat: 0 }}
                >
                  <Image
                    src={`${baseUriBackend}${slide.image}`}
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
                        key={`${slide._id}-sub-${animationKey}`}
                        className="_h5 text-white mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        {slide.sub_tital}
                      </motion.p>

                      <motion.h1
                        key={`${slide._id}-title-${animationKey}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="_h1 text-white mb-8"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.div
                        key={`${slide._id}-buttons-${animationKey}`}
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

      {/* Render Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
