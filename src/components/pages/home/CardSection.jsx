"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";

const cardData = [
  {
    id: 1,
    title: "Holdings",
    subtitle: "Tabasco",
    description:
      "We are a diverse conglomerate built up over the years. Our business interests are Human Capital, Construction, Real Estate, Hospitality and Businessmen services.",
    buttonText: "See Holdings",
    href: "/holdings",
  },
  {
    id: 2,
    title: "Projects",
    subtitle: "Tabasco",
    description:
      "Our footprint spans several iconic projects exhibiting our expertise in various fields such as Civil, MEP, interior & fit-out, metal, landscaping and logistics. See our projects page to explore further.",
    buttonText: "See Projects",
    href: "/projects",
  },
  {
    id: 3,
    title: "Holdings",
    subtitle: "Tabasco",
    description:
      "We are a diverse conglomerate built up over the years. Our business interests are Human Capital, Construction, Real Estate, Hospitality and Businessmen services.",
    buttonText: "See Holdings",
    href: "/holdings",
  },
  {
    id: 4,
    title: "Projects",
    subtitle: "Tabasco",
    description:
      "Our footprint spans several iconic projects exhibiting our expertise in various fields such as Civil, MEP, interior & fit-out, metal, landscaping and logistics. See our projects page to explore further.",
    buttonText: "See Projects",
    href: "/projects",
  },
];

export const CardSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {cardData.map((item) => (
            <div key={item.id} className="text-center mb-8">
              <h4 className="text-gray-500 text-lg">{item.subtitle}</h4>
              <h3 className="text-4xl font-bold text-gray-700 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <ButtonPrimary>{item.buttonText}</ButtonPrimary>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
