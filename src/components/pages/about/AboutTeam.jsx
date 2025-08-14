"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import about from "@/resource/banner_image_1.jpg";
import Image from "next/image";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Sparkles } from "lucide-react";

export const AboutTeam = () => {
  const teamData = [
    {
      id: 1,
      title: "John Smith",
      sub_title: "HVAC Specialist",
      image: about,
    },
    {
      id: 2,
      title: "Sarah Johnson",
      sub_title: "Man Power Technician",
      image: about,
    },
    {
      id: 3,
      title: "Michael Brown",
      sub_title: "Installation Expert",
      image: about,
    },
    {
      id: 4,
      title: "Emily Davis",
      sub_title: "Customer Service",
      image: about,
    },
    {
      id: 5,
      title: "John Smith",
      sub_title: "HVAC Specialist",
      image: about,
    },
    {
      id: 6,
      title: "Sarah Johnson",
      sub_title: "Man Power Technician",
      image: about,
    },
    {
      id: 7,
      title: "Michael Brown",
      sub_title: "Installation Expert",
      image: about,
    },
    {
      id: 8,
      title: "Emily Davis",
      sub_title: "Customer Service",
      image: about,
    },
  ];

  return (
    <section>
      <div className="w-full bg-primary/10">
        <div className="py-16 _max_width">
          <div className="max-w-6xl mx-auto">
            <SectionTitle className="mb-2 text-center">
              Meet Our Team
            </SectionTitle>
            <SectionSubHeading className="mb-6 justify-center text-center">
              Our team of professionals is skilled
            </SectionSubHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {teamData.map((member, index) => (
              <div key={member.id} className="group">
                <motion.div
                  variants={fadeIn("up", 0.1 * (index + 1))}
                  initial="hidden"
                  whileInView="show"
                  className="bg-white rounded overflow-hidden shadow-lg p-3"
                >
                  <Image
                    src={member.image}
                    alt={member.title}
                    className="w-full h-64 object-cover transition-all duration-300 grayscale group-hover:grayscale-0"
                    width={800}
                    height={800}
                  />
                  <div className="pt-4 text-center">
                    <h3 className="text-xl font-bold text-cl-primary mb-1">
                      {member.title}
                    </h3>
                    <h5 className="text-gray-600">{member.sub_title}</h5>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
