"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import "swiper/css";

import expert_factory_workforce from "@/resource/home_banner/expert_factory_workforce.jpg";
import professional_leaning_services from "@/resource/home_banner/professional_leaning_services.jpg";
import trusted_security_personnel from "@/resource/home_banner/trusted_security_personnel.jpg";
import hotel_catering_taffing from "@/resource/home_banner/hotel_catering_taffing.jpg";
import certified_safety_officers from "@/resource/home_banner/certified_safety_officers.jpg";
import permanent_staffing_solutions from "@/resource/home_banner/permanent_staffing_solutions.jpg";
import flexible_temporary_staffing from "@/resource/home_banner/flexible_temporary_staffing.jpg";

const slides = [
  {
    id: 1,
    image: expert_factory_workforce,
    title: "Expert Factory Workforce",
    description:
      "From machine operators to general helpers, we provide reliable manpower for all factory needs.",
    buttonText: "Hire Factory Staff",
  },
  {
    id: 2,
    image: professional_leaning_services,
    title: "Professional Cleaning Services",
    description:
      "Keep your workspace spotless with our routine and specialized cleaning teams.",
    buttonText: "Book Cleaning",
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
    title: "Hotel & Catering Staffing",
    description:
      "Deliver excellent guest experiences with our professional hospitality staff.",
    buttonText: "Get Hospitality Staff",
  },
  {
    id: 5,
    image: certified_safety_officers,
    title: "Certified Safety Officers",
    description:
      "We provide trained safety officers to help you meet compliance and safety standards.",
    buttonText: "Ensure Safety",
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
    image: flexible_temporary_staffing,
    title: "Flexible Temporary Staffing",
    description:
      "Scale your workforce efficiently during peak periods with our short-term staffing options.",
    buttonText: "Hire Temporarily",
  },
];

export const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // This state will force the image motion.div to re-render and restart animation
  const [animationKey, setAnimationKey] = useState(0);
  const swiperRef = useRef(null);

  return (
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

      {/* Swiper with motion enhancements */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          // Crucial: Update animationKey when the slide changes
          setAnimationKey(swiper.realIndex);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Zoom-in background image */}
              <motion.div
                // Use the animationKey combined with slide.id to ensure re-mount on every slide change
                key={`${slide.id}-${animationKey}`}
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 6,
                  ease: "easeOut",
                  repeat: 0,
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Overlay with motion text */}
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
                    >
                      <ButtonPrimary link="/reach-us">Book Now</ButtonPrimary>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
