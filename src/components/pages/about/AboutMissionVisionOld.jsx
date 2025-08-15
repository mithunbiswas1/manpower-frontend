// components/pages/about/SharedMissionVision.jsx
"use client";

import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
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
    <section className="bg-gray-100 py-16">
      <div className="_max_width grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-14 2xl:px-8">
        {/* Vision Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl duration-300 transform hover:-translate-y-1 relative overflow-hidden group transition-all flex flex-col h-full">
          {/* Animated top bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-300"></div>

          <div className="mb-4 flex justify-center">
            <Eye className="w-12 h-12 text-secondary" />
          </div>

          <SectionTitle className="mb-4">{visionData.title}</SectionTitle>
          <Paragraph className="flex-1 text-center">
            {visionData.paragraph}
          </Paragraph>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl duration-300 transform hover:-translate-y-1 relative overflow-hidden group transition-all flex flex-col h-full">
          <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-300"></div>

          <div className="mb-4 flex justify-center">
            <Target className="w-12 h-12 text-secondary" />
          </div>

          <SectionTitle className="mb-4">{missionData.title}</SectionTitle>
          <Paragraph className="flex-1 text-center">
            {missionData.paragraph}
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
