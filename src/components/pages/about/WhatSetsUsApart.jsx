"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Paragraph } from "@/components/custom/Paragraph";

const services = [
  "100% compliant with UAE labour law & visa regulations",
  "Multi-national recruitment sourcing (Bangladesh, India, Nepal, etc.)",
  "End-to-end HR and PRO services",
  "Real-time site supervision and reporting",
  "Custom staffing solutions based on your workflow",
];

export const WhatSetsUsApart = () => {
  return (
    <section className="bg-white py-18 pb-20">
      <div className="_max_width text-center">
        <SectionTitle className="mb-2">What Sets Us Apart</SectionTitle>
        <SectionSubHeading className="justify-center">
          Our Key Differentiators
        </SectionSubHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="p-6 border border-gray-200 rounded-lg shadow-sm flex items-start"
            >
              <span className="text-primary-500 font-bold mr-3 text-xl">•</span>
              <Paragraph className="text-left flex-1 text-sm lg:text-base">
                {service}
              </Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
