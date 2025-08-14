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
import { ButtonSeeAll } from "@/components/custom/ButtonSeeAll";

const project = [
  {
    id: 1,
    title: "Factory & Industrial Staffing",
    imageUrl: expert_factory_workforce,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 2,
    title: "Professional Cleaning Services",
    imageUrl: professional_leaning_services,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 3,
    title: "Licensed Security Personnel",
    imageUrl: trusted_security_personnel,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 4,
    title: "Hotel & Catering",
    imageUrl: hotel_catering_taffing,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 5,
    title: "Certified Safety Officers",
    imageUrl: certified_safety_officers,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 6,
    title: "Permanent Staffing Solutions",
    imageUrl: permanent_staffing_solutions,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 7,
    title: "Temporary Staffing Services",
    imageUrl: flexible_temporary_staffing,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 8,
    title: "Certified Safety Officers",
    imageUrl: certified_safety_officers,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 9,
    title: "Permanent Staffing Solutions",
    imageUrl: permanent_staffing_solutions,
    location: "Abu Dhabi",
    link: "#",
  },
  {
    id: 10,
    title: "Temporary Staffing Services",
    imageUrl: flexible_temporary_staffing,
    location: "Abu Dhabi",
    link: "#",
  },
];

export const ProjectsCard = () => {
  return (
    <section className="bg-gray-100">
      <div className="py-16 _max_width">
        <SectionTitle className="mb-2 text-center">
          Real Time Projects
        </SectionTitle>
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
          {project.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={fadeIn("up", 0.1 + index * 0.0)}
                initial="hidden"
                whileInView="show"
              >
                <Link
                  href={item.link}
                  key={index}
                  className="relative group block h-80 2xl:h-96 overflow-hidden shadow-lg"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.imageUrl.src})` }}
                    aria-hidden="true"
                  />

                  {/* Overlay with flip animation */}
                  <div className="w-full h-0 group-hover:h-full bg-black/30 text-white transition-all duration-500 ease-in-out transform origin-bottom group-hover:rotate-x-0"></div>
                  <div className="absolute inset-0 m-2 flex items-end justify-center overflow-hidden">
                    <div className="w-full h-0 group-hover:h-7/10 bg-black/70 text-white p-4 transition-all duration-500 ease-in-out transform origin-bottom rotate-x-90 group-hover:rotate-x-0">
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="bg-secondary text-black rounded-full p-1">
                          <Plus className="size-10" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="absolute _h4 opacity-0 group-hover:opacity-100 group-hover:text-2xl font-semibold z-10 p-4 bottom-10 left-2 transition-all duration-300">
                        {item.title}
                      </h3>
                      <h6 className="absolute _h6 opacity-0 group-hover:opacity-100 group-hover:text-2xl font-semibold z-10 p-4 bottom-2 left-2 transition-all duration-300">
                        {item.location}
                      </h6>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-10">
          <ButtonSeeAll href="/projects" text="See All Projects" />
        </div>
      </div>
    </section>
  );
};
