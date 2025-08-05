// components/pages/services/ServicesSolution.jsx
"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Sparkles } from "lucide-react";
import Image from "next/image";

import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { Paragraph } from "@/components/custom/Paragraph";
import { services } from "@/data/services"; // Import from the new data file

export default function ServicesSolution() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="_max_width px-4 md:px-8">
        <motion.div
          variants={fadeIn("top", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionSubHeading icon={Sparkles} className="my-2 justify-center">
            Our Services
          </SectionSubHeading>
        </motion.div>
        <motion.div
          variants={fadeIn("top", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SectionTitle className="mb-16 text-center text-gray-800">
            Professional Manpower Solutions
          </SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeIn("up", 0.1 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/50 transition-colors duration-300" />
                  <div className="absolute top-8 left-8 p-4 bg-white text-primary rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <Paragraph className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </Paragraph>
                  <div className="flex gap-4">
                    <ButtonPrimary
                      link={`/get-service?service=${encodeURIComponent(
                        service.title
                      )}`}
                      className="w-full flex-1"
                    >
                      Get Services
                    </ButtonPrimary>
                    <a
                      href={`/service/${service.id}`}
                      className="w-full flex-1 text-center py-3 px-6 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-semibold"
                    >
                      See More
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
