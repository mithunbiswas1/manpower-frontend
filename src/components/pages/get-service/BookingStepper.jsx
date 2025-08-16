"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";

const steps = [
  { id: 1, text: "Choose category" },
  { id: 2, text: "Choose trade" },
  { id: 3, text: "Enter quantity and click add" },
  { id: 4, text: "Review booking summary and click on 'book now'" },
  { id: 5, text: "Fill in details and click proceed" },
];
export const BookingStepper = ({ activeStep }) => {
  return (
    <section className="_max_width py-16 px-4 md:px-10 bg-white">
      {/* Heading */}
      <SectionTitle className="mb-2 text-center">
        Welcome to our online booking services
      </SectionTitle>
      <SectionSubHeading className="mb-14 justify-center text-center max-w-2xl mx-auto">
        Follow the instructions to make your bookings effortless
      </SectionSubHeading>

      {/* Stepper */}
      <div className="grid grid-cols-2 md:flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={fadeIn("up", 0.3 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center text-center relative md:w-1/5"
          >
            {/* Step Number */}
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary font-bold text-lg relative z-10 transition-colors duration-300
                ${
                  activeStep >= step.id
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                }`}
            >
              {step.id}
            </div>

            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-gray-300 -z-0" />
            )}

            {/* Step Text */}
            <div className="mt-4">
              <h6 className="font-semibold text-gray-800">{`Step ${step.id}`}</h6>
              <Paragraph className="mt-2 text-gray-600 px-2 md:px-0">
                {step.text}
              </Paragraph>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
