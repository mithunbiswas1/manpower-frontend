// components/pages/about/SharedMissionVision.jsx
"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { Eye, Target } from "lucide-react"; // Importing icons for Vision and Mission

export const AboutMissionVision = () => {
  const visionData = {
    title: "Our Vision",
    paragraph:
      "To deploy 5,000+ quality workers annually by 2027 while maintaining the highest compliance and service standards. ",
  };

  const missionData = {
    title: "Our Mission",
    paragraph:
      "To be the most reliable workforce partner for industries in the UAE. ",
  };

  return (
    <section className="py-16">
      <div className="_max_width md:!px-20 2xl:!px-32">
        <div className="w-full md:w-1/2">
          <SectionTitle className="mb-4">{visionData.title}</SectionTitle>
          <Paragraph className="flex-1">{visionData.paragraph}</Paragraph>
        </div>

        <div className="text-right pt-16">
          <SectionTitle className="mb-4 !mr-0">
            {missionData.title}
          </SectionTitle>
          <Paragraph className="">{missionData.paragraph}</Paragraph>
        </div>
      </div>
    </section>
  );
};
