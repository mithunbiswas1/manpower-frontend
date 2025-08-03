"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import mission_vision from "@/resource/banner_image_1.jpg";
import { PhoneCall, Mail, MessageCircle, Sparkles } from "lucide-react";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

export const HomeContactService = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${mission_vision.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full bg-black/40 text-white">
        <div className="max-w-screen-xl mx-auto py-16 px-4">
          <motion.div>
            <SectionSubHeading
              icon={Sparkles}
              className="my-2 justify-center"
              iconClass="text-white"
              titleClass="text-white"
            >
              We are Honest & our work make you Satisified
            </SectionSubHeading>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <SectionTitle className="text-white text-center mb-10">
              Contact Us
            </SectionTitle>
          </motion.div>

          <motion.div
            variants={fadeIn("fade", 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <ButtonPrimary
              text="02 8530 7148"
              href="tel:02 8530 7148"
              width="w-64"
              icon={<PhoneCall />}
            />
            <ButtonPrimary text="test@gmail.com" href="#" icon={<Mail />} />
            <ButtonPrimary
              text="Get a Quote"
              href="contact-us"
              width="w-64"
              icon={<MessageCircle />}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
