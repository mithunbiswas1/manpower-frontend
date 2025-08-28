"use client";
import Image from "next/image";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { baseUriBackend } from "@/redux/endPoints/url";
import React from "react";

export const AboutChaiman = ({ image, message, name }) => {
  return (
    <section className="py-16 bg-gray-100">
      <SectionTitle className="pb-8 text-center">
        A letter from the Chairman
      </SectionTitle>
      <div className="_max_width grid grid-cols-1 lg:grid-cols-2 gap-12 md:!px-20 2xl:!px-32">
        {/* Image Section */}
        <Image
          src={`${baseUriBackend}${image}`}
          alt={name || "Chairman"}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="flex flex-col">
          <Paragraph className="text-justify">{message}</Paragraph>
          <div className="mt-auto">
            <h2 className="_h2 text-gray-500">
              {name
                ? name.split(" ").map((word, index) =>
                    index === 1 ? (
                      <React.Fragment key={index}>
                        <br />
                        {word}
                      </React.Fragment>
                    ) : (
                      <React.Fragment key={index}>{word}</React.Fragment>
                    )
                  )
                : ""}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
