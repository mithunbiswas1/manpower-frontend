"use client";

import Link from "next/link";
import { Sparkles, Plus } from "lucide-react";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import image1 from "@/resource/service1.jpg";
import image2 from "@/resource/service2.jpg";
import image3 from "@/resource/service3.jpg";

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
    imageUrl: image1,
    link: "#",
  },
  {
    id: 5,
    title: "Carpet & Upholstery Cleaning",
    imageUrl: image2,
    link: "#",
  },
  {
    id: 6,
    title: "Carpet & Upholstery Cleaning",
    imageUrl: image3,
    link: "#",
  },
];

export const HomeService = () => {
  return (
    <section className="bg-gray-300">
      <div className="py-20 _max_width">
        <SectionSubHeading icon={Sparkles} className="my-2 justify-center">
          What We Do
        </SectionSubHeading>

        <SectionTitle className="mb-10 text-center">
          Our Most Popular Cleaning Services For You
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ id, title, imageUrl, link }) => (
            <Link
              key={id}
              href={link}
              className="relative group block h-96 overflow-hidden shadow-lg rounded-lg"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${imageUrl.src})` }}
                aria-hidden="true"
              />

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/6 m-4 group-hover:h-3/5 bg-black/70 flex flex-col justify-end text-white transition-all duration-300 ease-in-out rounded-lg p-4 overflow-hidden">
                {/* Plus Icon in Top Right */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="bg-white hover:bg-secondary text-black rounded-full p-1 shadow-md transition duration-300">
                    <Plus className="size-10" />
                  </div>
                </div>

                {/* X and Y white lines */}
                <div className="absolute inset-0 flex">
                  {/* Vertical line */}
                  <div className="w-0.5 h-full ml-6 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  {/* Horizontal line */}
                  <div className="absolute w-2/4 bottom-14 h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl group-hover:text-2xl font-semibold z-10 text-right mb-6 transition-all duration-300 ml-20">
                  {title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
