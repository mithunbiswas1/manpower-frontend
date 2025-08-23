// components/pages/about/SharedMissionVision.jsx
"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { Eye, Target } from "lucide-react"; // Importing icons for Vision and Mission

export const AboutMissionVision = () => {
  const visionData = {
    title: "Our Vision",
    paragraph:
      "To be the most trusted and respected manpower supply company in the GCC region.",
  };

  const missionData = {
    title: "Our Mission",
    paragraph:
      "To deliver qualified manpower that meets client requirements with precision, punctuality, and professionalism.",
  };

  return (
    <section className="py-16">
      <div className="_max_width md:!px-20 2xl:!px-32 gri">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <SectionTitle className="mb-4">{visionData.title}</SectionTitle>
            <Paragraph className="flex-1">{visionData.paragraph}</Paragraph>
          </div>
          <div className=""></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=""></div>
          <div className="text-right pt-16">
            <SectionTitle className="mb-4 !mr-0">
              {missionData.title}
            </SectionTitle>
            <Paragraph className="">{missionData.paragraph}</Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};
