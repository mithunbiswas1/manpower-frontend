"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { baseUriBackend } from "@/redux/endPoints/url";
import { useGetAllClientsQuery } from "@/redux/features/clientsApi";

export const ClientsComponents = () => {
  const { data, isLoading, isError } = useGetAllClientsQuery();
  const clientsData = data?.data || [];

  return (
    <section className="_max_width bg-white py-16 text-center">
      <SectionTitle className="mb-2 text-center">
        Clients & Partners
      </SectionTitle>
      <SectionSubHeading className="mb-6 justify-center text-center">
        See Our Honorable Clients & Partners
      </SectionSubHeading>

      {isLoading ? (
        <div className="max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="size-32 bg-gray-300 rounded-lg animate-pulse p-3 m-2"
            />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
          {clientsData.map((logo, idx) =>
            logo.link ? (
              <a
                key={idx}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${baseUriBackend}${logo.image}`}
                  alt={`Client ${idx + 1}`}
                  height={200}
                  width={200}
                  className="h-full w-full object-contain p-3 m-2 bg-white rounded-lg"
                />
              </a>
            ) : (
              <Image
                key={idx}
                src={`${baseUriBackend}${logo.image}`}
                alt={`Client ${idx + 1}`}
                height={200}
                width={200}
                className="h-full w-full object-contain p-3 m-2 bg-white rounded-lg"
              />
            )
          )}
        </div>
      )}

      <SectionSubHeading className="mt-12 justify-center text-center border-b-2 border-gray-400 max-w-3xl mx-auto pb-4">
        Become one of our valued partners today!
      </SectionSubHeading>
    </section>
  );
};
