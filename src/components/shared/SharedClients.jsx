"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import bgImage from "@/resource/service_img1.jpg";

import al_naboodah_group_enterprises from "@/resource/about_client/al_naboodah_group_enterprises.jpg";
import dulsco from "@/resource/about_client/dulsco.jpg";
import efs_facilities_services from "@/resource/about_client/efs_facilities_services.jpg";
import emrill_services from "@/resource/about_client/emrill_services.jpg";
import farnek_services from "@/resource/about_client/farnek_services.jpg";
import khidmah_llc from "@/resource/about_client/khidmah_llc.jpg";
import raq_contracting from "@/resource/about_client/raq_contracting.jpg";
import transguard_group from "@/resource/about_client/transguard_group.jpg";

import { Sparkles } from "lucide-react";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

export const SharedClients = () => {
  const sections = [
    {
      title: "Our Partners",
      logos: [
        al_naboodah_group_enterprises,
        dulsco,
        efs_facilities_services,
        emrill_services,
        farnek_services,
        khidmah_llc,
        raq_contracting,
        transguard_group,
        al_naboodah_group_enterprises,
        dulsco,
        efs_facilities_services,
        emrill_services,
        farnek_services,
        khidmah_llc,
        raq_contracting,
        transguard_group,
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
    <section className="relative bg-primary py-12 pb-8">
      {/* Content */}
      <div className="relative _max_width mb-12">
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
            Popular Brands Od Our Product
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
