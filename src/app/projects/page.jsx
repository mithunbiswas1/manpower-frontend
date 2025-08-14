// app/projects/page.jsx
"use client";

import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";
import Link from "next/link";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";

import expert_factory_workforce from "@/resource/home_banner/expert_factory_workforce.jpg";
import professional_leaning_services from "@/resource/home_banner/professional_leaning_services.jpg";
import trusted_security_personnel from "@/resource/home_banner/trusted_security_personnel.jpg";
import hotel_catering_taffing from "@/resource/home_banner/hotel_catering_taffing.jpg";
import certified_safety_officers from "@/resource/home_banner/certified_safety_officers.jpg";
import permanent_staffing_solutions from "@/resource/home_banner/permanent_staffing_solutions.jpg";
import flexible_temporary_staffing from "@/resource/home_banner/flexible_temporary_staffing.jpg";

export default function ProjectsPage() {
  const bannerData = {
    title: "Projects",
    description:
      "Explore our portfolio of successful projects showcasing our expertise, innovative solutions.",
    image: banner_image,
  };

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
  ];

  return (
    <div>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />

      {/* Projects Section */}
      <section className="bg-gray-100">
        <div className="pt-18 pb-20 _max_width">
          <SectionTitle className="mb-2 text-center">
            Real Time Projects
          </SectionTitle>
          <SectionSubHeading className="mb-10 justify-center">
            Our Most Popular Man Power Services For You
          </SectionSubHeading>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeIn("up", 0.1 + index * 0.05)}
                initial="hidden"
                whileInView="show"
              >
                <Link
                  href={item.link}
                  className="relative group block h-80 2xl:h-96 overflow-hidden shadow-lg"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.imageUrl.src})` }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 m-2 flex items-end justify-center overflow-hidden">
                    <div className="w-full h-0 group-hover:h-7/10 bg-black/70 text-white p-4 transition-all duration-500 ease-in-out transform origin-bottom rotate-x-90 group-hover:rotate-x-0">
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="bg-secondary text-black rounded-full p-1">
                          <Plus className="size-10" />
                        </div>
                      </div>

                      <h3 className="absolute _h4 opacity-0 group-hover:opacity-100 group-hover:text-2xl font-semibold z-10 p-4 bottom-10 left-2 transition-all duration-300">
                        {item.title}
                      </h3>
                      <h6 className="absolute _h6 opacity-0 group-hover:opacity-100 group-hover:text-lg font-semibold z-10 p-4 bottom-2 left-2 transition-all duration-300">
                        {item.location}
                      </h6>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
