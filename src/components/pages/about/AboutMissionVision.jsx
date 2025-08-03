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
    icon: Eye,
    subHeading: "What drives us forward",
    title: "Our Vision",
    paragraph:
      "To be the leading manpower supply company in the industry, recognized for our commitment to quality, reliability, and customer satisfaction.",
  };

  const missionData = {
    icon: Target,
    subHeading: "Our core purpose",
    title: "Our Mission",
    paragraph:
      "To provide top-tier manpower solutions in packing and cleaning that help businesses maintain efficiency, cleanliness, and order in their operations.",
  };

  return (
    <section className="bg-primary py-16">
      <div className="_max_width grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-14 2xl:px-8 justify-center items-start">
        {/* Vision Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl duration-300 transform hover:-translate-y-1 relative overflow-hidden group transition-all">
            {/* Animated top bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
            <div className="absolute top-0 left-0 w-full h-2  bg-yellow-400  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-300"></div>

            <div className="mb-4">
              <SectionSubHeading icon={visionData.icon} className="my-2">
                {visionData.subHeading}
              </SectionSubHeading>
            </div>

            <SectionTitle className="mb-4">{visionData.title}</SectionTitle>
            <Paragraph>{visionData.paragraph}</Paragraph>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl duration-300 transform hover:-translate-y-1 relative overflow-hidden group transition-all">
            {/* Animated top bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out delay-300"></div>

            <div className="mb-4">
              <SectionSubHeading icon={missionData.icon} className="my-2">
                {missionData.subHeading}
              </SectionSubHeading>
            </div>

            <SectionTitle className="mb-4">{missionData.title}</SectionTitle>
            <Paragraph>{missionData.paragraph}</Paragraph>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
