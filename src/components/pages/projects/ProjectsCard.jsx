"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useGetAllProjectsQuery } from "@/redux/features/projectsApi";
import { baseUriBackend } from "@/redux/endPoints/url";
import { ButtonSeeAll } from "@/components/custom/ButtonSeeAll";
import { Paragraph } from "@/components/custom/Paragraph";

export const ProjectsCard = () => {
  const { data, isLoading } = useGetAllProjectsQuery();
  const projects = data?.data || [];

  return (
    <section className="">
      <div className="py-16 _max_width">
        <SectionTitle className="mb-2 text-center">Projects</SectionTitle>
        <SectionSubHeading className="mb-10 justify-center text-center">
          Our Most Popular Man Power Services For You
        </SectionSubHeading>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="h-80 2xl:h-96 bg-gray-200 rounded-lg animate-pulse" />
                <div className="mt-2">
                  <div className="h-4 w-3/4 mx-auto bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-1/2 mx-auto mt-2 bg-gray-200 rounded animate-pulse" />
                </div>
              </SwiperSlide>
            ))
          ) : projects.length === 0 ? (
            <div className="text-center w-full py-10 text-gray-500">
              <Paragraph>No projects available at the moment.</Paragraph>
            </div>
          ) : (
            projects.map((item, index) => (
              <SwiperSlide key={item._id}>
                <motion.div
                  variants={fadeIn("up", 0.1 + index * 0.05)}
                  initial="hidden"
                  whileInView="show"
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="relative group block h-80 2xl:h-96 overflow-hidden hover:shadow-lg transition-shadow duration-200"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${baseUriBackend}${item.image})`,
                        }}
                      />
                    </Link>
                  ) : (
                    <div className="relative group block h-80 2xl:h-96 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${baseUriBackend}${item.image})`,
                        }}
                      />
                    </div>
                  )}

                  <div className="mt-2">
                    <h6 className="_h6 text-center text-gray-600 !font-semibold">
                      {item.title}
                    </h6>
                    <Paragraph className="text-center my-2">
                      {item.location}
                    </Paragraph>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        <div className="flex justify-center mt-10">
          <ButtonSeeAll href="/projects" text="See All Projects" />
        </div>
      </div>
    </section>
  );
};
