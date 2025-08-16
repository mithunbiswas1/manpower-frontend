"use client";

import Image from "next/image";
import { ButtonSeeAll } from "@/components/custom/ButtonSeeAll";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import AlQabdahLogo from "@/resource/clients.png";
import StrabagLogo from "@/resource/clients2.png";
import ShapoorjiLogo from "@/resource/clients.png";
import DutcoLogo from "@/resource/clients2.png";
import Link from "next/link";

export const HomeClients = () => {
  const clientLogos = [
    AlQabdahLogo,
    StrabagLogo,
    ShapoorjiLogo,
    DutcoLogo,
    AlQabdahLogo,
    StrabagLogo,
    ShapoorjiLogo,
    DutcoLogo,
    AlQabdahLogo,
    StrabagLogo,
    ShapoorjiLogo,
    DutcoLogo,
  ];

  return (
    <section className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-16 text-center">
        <SectionTitle className="mb-2 text-center">Clients</SectionTitle>
        <SectionSubHeading className="mb-6 justify-center text-center">
          See Our Honorable Clients
        </SectionSubHeading>

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="mx-auto"
        >
          {clientLogos.map((logo, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <a href="https://www.google.com" target="_blank" className="">
                <Image
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="h-full w-full object-contain p-4 m-2 bg-white"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-10">
          <ButtonSeeAll href="/clients" text="See All Clients" />
        </div>
      </div>
    </section>
  );
};
