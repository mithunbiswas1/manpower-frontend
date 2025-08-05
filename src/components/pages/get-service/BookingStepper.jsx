// components/pages/get-service/BookingStepper.jsx
"use client";
import { CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

const steps = [
  { id: 1, text: "Choose category" },
  { id: 2, text: "Choose trade" },
  { id: 3, text: "Enter quantity and click add" },
  { id: 4, text: "Review booking summary and click on 'book now'" },
  { id: 5, text: "Fill in details and click proceed" },
];

export const BookingStepper = () => {
  return (
    <div className="_max_width py-12 bg-white text-center">
      <motion.div
        variants={fadeIn("top", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="text-3xl font-bold text-gray-800 mb-2"
      >
        <SectionSubHeading icon={Sparkles} className="my-2 justify-center">
          Welcome to our online booking services.
        </SectionSubHeading>
      </motion.div>
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="text-lg text-gray-600 mb-12"
      >
        <SectionTitle className="mb-4">
          Follow the instructions to make your bookings effortless.
        </SectionTitle>
      </motion.div>

      <div className="flex flex-wrap justify-center items-start gap-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={fadeIn("up", 0.3 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative flex flex-col items-center w-1/3 md:w-1/4 lg:w-1/5"
          >
            {/* Step Icon */}
            <div className="flex items-center justify-center p-4 rounded-full transition-colors duration-300 text-white bg-primary">
              <CheckCircle size={32} />
            </div>

            {/* Horizontal Line between steps (hidden on mobile) */}
            <div className="my-4 w-full h-0.5 bg-gray-700 " />

            {/* Step Text */}
            <div className="text-center text-gray-800">
              <h6 className="font-semibold">{`Step ${step.id}`}</h6>
              <p className="_p mt-1 px-4">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
