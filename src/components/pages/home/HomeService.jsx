"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import "swiper/css";

import { baseUriBackend } from "@/redux/endPoints/url";
import { useGetAllServicesQuery } from "@/redux/features/servicesApi";

export const HomeService = () => {
  const { data, error, isLoading } = useGetAllServicesQuery();
  const services = data?.data || [];

  return (
    <section className="bg-gray-100">
      <div className="py-16 _max_width">
        <SectionTitle className=" text-center mb-2">Services</SectionTitle>
        <SectionSubHeading className="mb-8 justify-center">
          Let's Talk Manpower Services
        </SectionSubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ _id, name, image }) => (
            <Link
              href={`/get-service?service=${encodeURIComponent(name)}`}
              key={_id}
              className="relative group block max-w-screen h-[450px] md:w-auto 2xl:h-[500px] overflow-hidden shadow-lg"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${baseUriBackend}${image})` }}
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
                    {name}
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
