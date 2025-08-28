// components/pages/about/SharedMissionVision.jsx
"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";

export const AboutMissionVision = ({ vision, mission }) => {
  return (
    <section className="py-16">
      <div className="_max_width md:!px-20 2xl:!px-32 gri">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <SectionTitle className="mb-4">Our Vision</SectionTitle>
            <Paragraph className="flex-1">{vision}</Paragraph>
          </div>
          <div className=""></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=""></div>
          <div className="text-right pt-16">
            <SectionTitle className="mb-4 !mr-0">Our Mission</SectionTitle>
            <Paragraph className="">{mission}</Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};
