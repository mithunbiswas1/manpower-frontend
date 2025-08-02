"use client";

import { motion, useAnimationControls } from "framer-motion";
import { CardTitle } from "@/components/custom/CardTitle";
import { Paragraph } from "@/components/custom/Paragraph";

export const HighlightServiceCard = ({ service }) => {
  const controls = useAnimationControls();

  const handleMouseEnter = async () => {
    await controls.start({
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    });
    setTimeout(() => {
      controls.start({
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      });
    }, 10);
  };

  const ServiceIcon = service.iconComponent;

  return (
    <div
      className="group flex items-start gap-4 cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      {/* The div below will now have the ripple effect */}
      <div className="relative flex-shrink-0 bg-primary p-3 rounded-lg overflow-hidden">
        {ServiceIcon && (
          <motion.div animate={controls} className="relative z-10">
            <ServiceIcon className="text-white size-8" />
          </motion.div>
        )}

        {/* Hover ripple animation */}
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-secondary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        </span>
      </div>

      <div>
        <CardTitle>{service.title}</CardTitle>
        <Paragraph className="mt-2">{service.paragraph}</Paragraph>
      </div>
    </div>
  );
};
