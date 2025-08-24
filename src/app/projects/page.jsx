// app/projects/page.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SharedBanner } from "@/components/shared/SharedBanner";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Paragraph } from "@/components/custom/Paragraph";
import banner_image from "@/resource/banner_image_3.jpg";

import { useGetAllProjectsQuery } from "@/redux/features/projectsApi";
import { baseUriBackend } from "@/redux/endPoints/url";

const bannerData = {
  title: "Projects",
  description:
    "Explore our portfolio of successful projects showcasing our expertise, innovative solutions.",
  image: banner_image,
};
//   {
//     id: 1,
//     title: "Factory & Industrial Staffing",
//     imageUrl: expert_factory_workforce,
//     location: "Abu Dhabi",
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Professional Cleaning Services",
//     imageUrl: professional_leaning_services,
//     location: "Abu Dhabi",
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Licensed Security Personnel",
//     imageUrl: trusted_security_personnel,
//     location: "Abu Dhabi",
//     link: "#",
//   },
//   {
//     id: 4,
//     title: "Hotel & Catering",
//     imageUrl: hotel_catering_taffing,
//     location: "Abu Dhabi",
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "Certified Safety Officers",
//     imageUrl: certified_safety_officers,
//     location: "Abu Dhabi",
//     link: "#",
//   },
//   {
//     id: 6,
//     title: "Permanent Staffing Solutions",
//     imageUrl: permanent_staffing_solutions,
//     location: "Abu Dhabi",
//     link: "#",
//   },
//   {
//     id: 7,
//     title: "Temporary Staffing Services",
//     imageUrl: flexible_temporary_staffing,
//     location: "Abu Dhabi",
//     link: "#",
//   },
//   {
//     id: 8,
//     title: "Certified Safety Officers",
//     imageUrl: certified_safety_officers,
//     location: "Abu Dhabi",
//     link: "#",
//   },
// ];

export default function ProjectsPage() {
  const { data, isLoading } = useGetAllProjectsQuery();
  const project = data?.data || [];

  return (
    <div>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />

      {/* Projects Section */}
      <section className="bg-white">
        <div className="pt-18 pb-20 _max_width">
          <SectionTitle className="mb-2 text-center">Projects</SectionTitle>
          <SectionSubHeading className="mb-10 justify-center">
            Our Most Popular Man Power Services For You
          </SectionSubHeading>

          {/* Grid Layout */}

          <div
            className={` ${
              project.length !== 0
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                : " "
            }`}
          >
            {isLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <div className="relative group block h-80 2xl:h-96 overflow-hidden bg-gray-200 rounded-lg animate-pulse" />
                  <div className="mt-2">
                    <div className="h-4 w-3/4 mx-auto bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-1/2 mx-auto mt-2 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))
            ) : project.length === 0 ? (
              <div className="text-center w-full py-10 text-gray-500">
                <Paragraph>No projects available at the moment.</Paragraph>
              </div>
            ) : (
              project.map((item, index) => (
                <motion.div
                  key={item._id}
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
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
