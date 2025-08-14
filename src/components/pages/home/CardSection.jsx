"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Sparkle } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Boost Efficiency in Your Factory",
    subtitle: "Experienced Operators & Helpers",
    description:
      "Our factory workforce is trained to handle packing, machine operation, and support roles — reducing downtime.",
    buttonText: "Get Factory Help",
    href: "/services",
  },
  {
    id: 2,
    title: "Create a Cleaner Workplace",
    subtitle: "Hygienic & Well-Maintained Spaces",
    description:
      "Let your staff and customers enjoy a spotless environment with our reliable and well-trained cleaning personnel.",
    buttonText: "Book Cleaning Service",
    href: "/services",
  },
  {
    id: 3,
    title: "Secure Your Business Today",
    subtitle: "Professional Security Guards",
    description:
      "Our licensed guards provide around-the-clock protection, enhancing safety across your residential, retail, or industrial property.",
    buttonText: "Request Security",
    href: "/services",
  },
  {
    id: 4,
    title: "Deliver Outstanding Experiences",
    subtitle: "Skilled Hotel & Catering",
    description:
      "From front desk to kitchen support, we supply staff who elevate service standards and leave lasting impressions.",
    buttonText: "Hire Hospitality Staff",
    href: "/services",
  },
];

export const CardSection = () => {
  return (
    <section className="pt-16 pb-16 bg-gray-50">
      <div className="_max_width">
        <SectionTitle className=" text-center mb-2">Feature</SectionTitle>
        <SectionSubHeading className="mb-8 justify-center">
          What we provide you
        </SectionSubHeading>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 2xl:gap-8"
        >
          {cardData.map((item, index) => (
            <motion.div
              key={item.id} // Added key here for better React performance
              variants={fadeIn("up", 0.1 + index * 0.1)} // Corrected stagger delay
              initial="hidden"
              whileInView="show"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl duration-300 transform hover:-translate-y-1 relative overflow-hidden group transition-all">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary "></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                <h4 className="text-sm uppercase font-semibold text-primary mb-2">
                  {item.subtitle}
                </h4>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {item.description}
                </p>

                <ButtonPrimary link={item.href} className="">
                  {item.buttonText}
                </ButtonPrimary>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
