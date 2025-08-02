"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Sparkles } from "lucide-react";

const faqData = [
  {
    id: 1,
    title: "What services do you offer?",
    text: "We offer a wide range of recruitment services including staffing, executive search, and workforce management solutions.",
  },
  {
    id: 2,
    title: "How can I apply for a job?",
    text: "You can apply by visiting our Careers page, selecting a job that fits your profile, and submitting your resume through our application form.",
  },
  {
    id: 3,
    title: "Do you offer support after placement?",
    text: "Yes, we provide post-placement support to both employers and employees to ensure a smooth transition and integration.",
  },
  {
    id: 4,
    title: "What services do you offer?",
    text: "We offer a wide range of recruitment services including staffing, executive search, and workforce management solutions.",
  },
  {
    id: 5,
    title: "How can I apply for a job?",
    text: "You can apply by visiting our Careers page, selecting a job that fits your profile, and submitting your resume through our application form.",
  },
  {
    id: 6,
    title: "Do you offer support after placement?",
    text: "Yes, we provide post-placement support to both employers and employees to ensure a smooth transition and integration.",
  },
];

export const HomeFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundImage: `url(/faq-bg.jpg)`, // Replace with your static image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full bg-cl-primary/80">
        <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col justify-center items-center text-cl-white">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <SectionSubHeading icon={Sparkles} className="my-2 justify-center">
              Customers Love About Us!
            </SectionSubHeading>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <SectionTitle className="mb-10 text-center">Faq</SectionTitle>
          </motion.div>

          <div className="flex flex-col items-center w-full">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                className="overflow-hidden border-b border-cl-gray50 w-full"
                variants={fadeIn("fade", 0.1 * (index + 2))}
                initial="hidden"
                whileInView="show"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 flex justify-between items-center transition-all duration-300 ease-in-out text-cl-white-light"
                >
                  <h4 className="cl-h4 font-semibold">{item.title}</h4>
                  <span className="cl-h4 font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="py-4 border-t border-cl-gray50">
                    <p className="cl-p text-cl-white">{item.text}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
