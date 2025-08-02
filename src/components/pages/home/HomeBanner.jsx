"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import image3 from "@/resource/banner_image_1.jpg";
import image4 from "@/resource/banner_image_2.jpg";
import image2 from "@/resource/banner_image_3.jpg";
import image1 from "@/resource/service3.jpg";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";

const slides = [
  {
    id: 1,
    image: image1,
    title: "Your Job, Our Priority",
    description: "We provide world-class healthcare tailored just for you.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    image: image2,
    title: "Book Appointments Online",
    description: "Easily schedule visits with our expert doctors.",
    buttonText: "Book Now",
  },
  {
    id: 3,
    image: image3,
    title: "Modern Facilities",
    description: "State-of-the-art equipment for better diagnosis and care.",
    buttonText: "Our Services",
  },
  {
    id: 4,
    image: image4,
    title: "Book Appointments Online",
    description: "Easily schedule visits with our expert doctors.",
    buttonText: "Book Now",
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
                setAnimationKey(index); // Update animation key on manual click
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
