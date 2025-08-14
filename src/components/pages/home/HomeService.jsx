"use client";

import Link from "next/link";
import { Sparkles, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import expert_factory_workforce from "@/resource/home_banner/expert_factory_workforce.jpg";
import professional_leaning_services from "@/resource/home_banner/professional_leaning_services.jpg";
import trusted_security_personnel from "@/resource/home_banner/trusted_security_personnel.jpg";
import hotel_catering_taffing from "@/resource/home_banner/hotel_catering_taffing.jpg";
import certified_safety_officers from "@/resource/home_banner/certified_safety_officers.jpg";
import permanent_staffing_solutions from "@/resource/home_banner/permanent_staffing_solutions.jpg";
import flexible_temporary_staffing from "@/resource/home_banner/flexible_temporary_staffing.jpg";

const services = [
  {
    id: 1,
    title: "Factory & Industrial Staffing",
    imageUrl: expert_factory_workforce,
    link: "#",
  },
  {
    id: 2,
    title: "Professional Cleaning Services",
    imageUrl: professional_leaning_services,
    link: "#",
  },
  {
    id: 3,
    title: "Licensed Security Personnel",
    imageUrl: trusted_security_personnel,
    link: "#",
  },
  {
    id: 4,
    title: "Hotel & Catering",
    imageUrl: hotel_catering_taffing,
    link: "#",
  },
  {
    id: 5,
    title: "Certified Safety Officers",
    imageUrl: certified_safety_officers,
    link: "#",
  },
  {
    id: 6,
    title: "Permanent Staffing Solutions",
    imageUrl: permanent_staffing_solutions,
    link: "#",
  },
];

export const HomeService = () => {
  return (
    <section className="bg-gray-100">
      <div className="py-16 _max_width">
        <SectionTitle className=" text-center mb-2">Services</SectionTitle>
        <SectionSubHeading className="mb-8 justify-center">
          Let's Talk Manpower Services
        </SectionSubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ id, title, imageUrl, link }, index) => (
            <Link
              href={link}
              key={id}
              className="relative group block max-w-screen h-[450px] md:w-auto 2xl:h-[500px] overflow-hidden shadow-lg"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${imageUrl.src})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-primary/0 transition-all duration-300"></div>

              {/* Overlay with flip animation */}
              <div className="w-full h-0 group-hover:h-full bg-black/30 text-white transition-all duration-500 ease-in-out transform origin-bottom group-hover:rotate-x-0"></div>
              <div className="absolute inset-0 m-2 flex items-end justify-center overflow-hidden">
                <div className="w-full h-0 group-hover:h-7/10 bg-black/70 text-white p-4 transition-all duration-500 ease-in-out transform origin-bottom rotate-x-90 group-hover:rotate-x-0">
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-secondary text-black rounded-full p-1">
                      <Plus className="size-10" />
                    </div>
                  </div>

                  {/* X and Y white lines */}
                  <div className="absolute inset-0 flex">
                    <div className="w-0.5 h-full ml-6 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute w-2/5 xl:w-1/5 bottom-12 md:bottom-14 h-0.5 bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Title */}
                  <h4 className="absolute _h4 opacity-0 group-hover:opacity-100 group-hover:text-2xl font-semibold z-10 text-right bottom-10 right-10 transition-all duration-300 ml-20">
                    {title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
