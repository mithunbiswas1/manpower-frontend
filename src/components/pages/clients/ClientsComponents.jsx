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

export const ClientsComponents = () => {
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
    <section className="_max_width bg-white py-16 text-center">
      <SectionTitle className="mb-2 text-center">Clients</SectionTitle>
      <SectionSubHeading className="mb-6 justify-center text-center">
        See Our Honorable Clients
      </SectionSubHeading>

      <div className="max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
        {clientLogos.map((logo, idx) => (
          <Image
            src={logo}
            alt={`Client ${idx + 1}`}
            className="h-full w-full object-contain p-3 m-2 bg-white rounded-lg "
          />
        ))}
      </div>
    </section>
  );
};
