"use client";

import about from "@/resource/banner_image_1.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import Link from "next/link";
import { ContactDetails } from "@/components/pages/reachUs/ContactDetails";
import ContactForm from "@/components/pages/reachUs/ContactForm";
import { Facebook, Linkedin, Youtube, Instagram, Sparkles } from "lucide-react";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

export const SharedContact = () => {
  const SocialIcons = [
    {
      icon: Facebook,
      href: "#",
      alt: "Facebook",
    },
    {
      icon: Linkedin,
      href: "#",
      alt: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "#",
      alt: "YouTube",
    },
    {
      icon: Instagram,
      href: "#",
      alt: "Instagram",
    },
  ];

  return (
    <section>
      <div className="_max_width py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <SectionSubHeading icon={Sparkles} className="my-2 justify-center">
              Are you ready to start your Man Power journey?
            </SectionSubHeading>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <SectionTitle className="mb-4 text-center">
              Contact With Us
            </SectionTitle>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
          <div className="w-full md:w-2/5 py-6">
            <ContactDetails />
          </div>
          <div className="py-1 text-white w-full md:w-3/5">
            <ContactForm />
          </div>
        </div>

        <div className="block md:hidden">
          <h3 className="text-primary _h3 my-2 pt-10 text-center">
            Connect with us
          </h3>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="flex gap-4 w-full justify-center"
          >
            {SocialIcons.map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full bg-primary hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 text-white" />
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
