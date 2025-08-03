"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import image1 from "@/resource/service1.jpg";
import image2 from "@/resource/service2.jpg";
import image3 from "@/resource/service3.jpg";

import { ButtonPrimary } from "@/components/custom/ButtonPrimary";

const services = [
  {
    id: 1,
    title: "Commercial Man Power Excellence",
    imageUrl: image1,
    link: "#",
  },
  {
    id: 2,
    title: "Residential Man Power Solutions",
    imageUrl: image2,
    link: "#",
  },
  {
    id: 3,
    title: "Window Man Power",
    imageUrl: image3,
    link: "#",
  },
  {
    id: 4,
    title: "Carpet & Upholstery Man Power",
    imageUrl: image1,
    link: "#",
  },
  {
    id: 5,
    title: "Carpet & Upholstery Man Power",
    imageUrl: image2,
    link: "#",
  },
  {
    id: 6,
    title: "Carpet & Upholstery Man Power",
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
          Our Most Popular Man Power Services For You
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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

              {/* Updated: Bottom-to-top overlay with centered content */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 group-hover:h-full bg-black/70 flex flex-col items-center justify-center p-6 text-white text-center transition-all duration-300 ease-in-out">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{title}</h3>

                {/* Button, only visible when overlay is fully extended */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 delay-150 -mb-14 group-hover:mb-0">
                  <ButtonPrimary className="cursor-pointer ">
                    View Details
                  </ButtonPrimary>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
