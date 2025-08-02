"use client";

import Link from "next/link";
import { Sparkles, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import image1 from "@/resource/service_img1.jpg";
import image2 from "@/resource/service_img2.jpg";
import image3 from "@/resource/service_img3.jpg";
import image4 from "@/resource/service_img4.jpg";

const services = [
  {
    id: 1,
    title: "Commercial Cleaning Excellence",
    imageUrl: image1,
    link: "#",
  },
  {
    id: 2,
    title: "Residential Cleaning Solutions",
    imageUrl: image2,
    link: "#",
  },
  {
    id: 3,
    title: "Window Cleaning Solutions",
    imageUrl: image3,
    link: "#",
  },
  {
    id: 4,
    title: "Carpet & Upholstery Cleaning",
    imageUrl: image4,
    link: "#",
  },
  {
    id: 5,
    title: "Carpet & Upholstery Cleaning",
    imageUrl: image1,
    link: "#",
  },
  {
    id: 6,
    title: "Carpet & Upholstery Cleaning",
    imageUrl: image2,
    link: "#",
  },
  {
    id: 7,
    title: "Commercial Cleaning Excellence",
    imageUrl: image1,
    link: "#",
  },
  {
    id: 8,
    title: "Residential Cleaning Solutions",
    imageUrl: image2,
    link: "#",
  },
];

export const HomeService = () => {
  return (
    <section className="bg-gray-300">
      <div className="py-20 _max_width">
        <motion.div
          variants={fadeIn("top", 0.1)}
          initial="hidden"
          whileInView="show"
        >
          <SectionSubHeading icon={Sparkles} className="my-2 justify-center">
            What We Do
          </SectionSubHeading>
        </motion.div>
        <motion.div
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <SectionTitle className="mb-10 text-center">
            Our Most Popular Cleaning Services For You
          </SectionTitle>
        </motion.div>

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
          {services.map(({ id, title, imageUrl, link }, index) => (
            <SwiperSlide key={id}>
              <motion.div
                variants={fadeIn("up", 0.0 + index * 0.0)}
                initial="show"
                whileInView="show"
              >
                <Link
                  href={link}
                  className="relative group block h-96 overflow-hidden shadow-lg"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${imageUrl.src})` }}
                    aria-hidden="true"
                  />

                  {/* Overlay with flip animation */}
                  <div className="w-full h-0 group-hover:h-full bg-black/30 text-white transition-all duration-500 ease-in-out transform origin-bottom group-hover:rotate-x-0"></div>
                  <div className="absolute inset-0 m-2 flex items-end justify-center overflow-hidden">
                    <div className="w-full h-0 group-hover:h-7/10 bg-black/70 text-white p-4 transition-all duration-500 ease-in-out transform origin-bottom rotate-x-90 group-hover:rotate-x-0">
                      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="bg-primary text-black rounded-full p-1">
                          <Plus className="size-10" />
                        </div>
                      </div>

                      {/* X and Y white lines */}
                      <div className="absolute inset-0 flex">
                        <div className="w-0.5 h-full ml-6 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute w-2/5 bottom-14 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>

                      {/* Title */}
                      <h3 className="absolute text-xl opacity-0 group-hover:opacity-100 group-hover:text-2xl font-semibold z-10 text-right bottom-10 right-10 transition-all duration-300 ml-10">
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
