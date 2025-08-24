"use client";

import Image from "next/image";
import { ButtonSeeAll } from "@/components/custom/ButtonSeeAll";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { baseUriBackend } from "@/redux/endPoints/url";
import { useGetAllClientsQuery } from "@/redux/features/clientsApi";

export const HomeClients = () => {
  const { data, isLoading, isError } = useGetAllClientsQuery();
  const clientsData = data?.data || [];

  return (
    <section className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-16 text-center">
        <SectionTitle className="mb-2 text-center">
          Clients &amp; Partners
        </SectionTitle>
        <SectionSubHeading className="mb-6 justify-center text-center">
          We are proud to serve various reputable companies in the UAE,
          including:
        </SectionSubHeading>

        {isLoading ? (
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
            {[...Array(6)].map((_, idx) => (
              <SwiperSlide
                key={idx}
                className="flex items-center justify-center "
              >
                <div className="size-40 p-4 m-4 bg-gray-300 rounded-lg animate-pulse" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
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
            {clientsData.map((logo, idx) => (
              <SwiperSlide
                key={idx}
                className="flex items-center justify-center"
              >
                {logo.link ? (
                  <a
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Image
                      src={`${baseUriBackend}${logo.image}`}
                      alt={`Client ${idx + 1}`}
                      height={200}
                      width={200}
                      className="h-full w-full object-contain p-4 m-2 bg-white"
                    />
                  </a>
                ) : (
                  <Image
                    src={`${baseUriBackend}${logo.image}`}
                    alt={`Client ${idx + 1}`}
                    height={200}
                    width={200}
                    className="h-full w-full object-contain p-4 m-2 bg-white"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="flex justify-center mt-10">
          <ButtonSeeAll href="/clients" text="See All Clients" />
        </div>
      </div>
    </section>
  );
};
