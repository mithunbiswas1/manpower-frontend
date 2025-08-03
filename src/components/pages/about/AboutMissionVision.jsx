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
      <div className="_max_width grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-start">
        {/* Vision Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <SectionSubHeading icon={visionData.icon} className="my-2">
            {visionData.subHeading}
          </SectionSubHeading>
          <SectionTitle className="mb-4">{visionData.title}</SectionTitle>
          <Paragraph>{visionData.paragraph}</Paragraph>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <SectionSubHeading icon={missionData.icon} className="my-2">
            {missionData.subHeading}
          </SectionSubHeading>
          <SectionTitle className="mb-4">{missionData.title}</SectionTitle>
          <Paragraph>{missionData.paragraph}</Paragraph>
        </motion.div>
      </div>
    </section>
  );
};
