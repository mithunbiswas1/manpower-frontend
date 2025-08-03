"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/ultils/motion";
import bgImage from "@/resource/service_img1.jpg";
import daikin from "@/resource/service_img1.jpg";
import mitsubishi_electric from "@/resource/service_img1.jpg";
import mitsubishi_heavy_industries from "@/resource/service_img1.jpg";
import fujitsu from "@/resource/service_img1.jpg";
import panasonic from "@/resource/service_img1.jpg";
import hitachi from "@/resource/service_img1.jpg";
import air_smart from "@/resource/service_img1.jpg";
import samsung from "@/resource/service_img1.jpg";
import hisense from "@/resource/service_img1.jpg";
import lg from "@/resource/service_img1.jpg";
import { Sparkles } from "lucide-react";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

export const SharedClients = () => {
  const sections = [
    {
      title: "Our Partners",
      logos: [
        daikin,
        mitsubishi_electric,
        mitsubishi_heavy_industries,
        fujitsu,
        panasonic,
        hitachi,
        air_smart,
        samsung,
        hisense,
        lg,
      ],
    },
  ];

  const swiperSettings = {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 50,
    centeredSlides: false,
    breakpoints: {
      350: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
    },
    modules: [Autoplay],
  };

  return (
    <section
      className="relative bg-white py-12 pb-8"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary "></div>

      {/* Content */}
      <div className="relative w-full max-w-screen-xl mx-auto px-4 mb-12">
        <motion.div
          variants={fadeIn("top", 0.1)}
          initial="hidden"
          whileInView="show"
        >
          <SectionSubHeading
            icon={Sparkles}
            className="my-2 justify-center"
            iconClass="text-white"
            titleClass="text-white"
          >
            Our Products
          </SectionSubHeading>
        </motion.div>
        <motion.div
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <SectionTitle className="mb-10 text-center text-white">
            Popular Aircon Brands
          </SectionTitle>
        </motion.div>

        {sections.map(({ title, logos }, index) => (
          <div key={index} className="mb-12">
            <Swiper {...swiperSettings}>
              {logos.map((logo, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={logo}
                    alt={`${title} Logo`}
                    height={64}
                    width={240}
                    className="h-16 w-60 object-contain cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};
