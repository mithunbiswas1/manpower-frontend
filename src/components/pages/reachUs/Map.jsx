"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Sparkles } from "lucide-react";

export const Map = () => {
  return (
    <div className="w-full text-se-white bg-primary/80">
      <div className="max-w-screen-xl mx-auto py-16 px-4">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <SectionSubHeading
            icon={Sparkles}
            className="my-2 justify-center"
            iconClass="text-white"
            titleClass="text-white"
          >
            Find our location on map
          </SectionSubHeading>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
        >
          <SectionTitle className="mb-4 text-center text-white">
            Location Map
          </SectionTitle>
        </motion.div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.79599800997!2d54.498342799999996!3d24.3460947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40959abf84c7%3A0xd3bf4d1546f8a989!2sAl%20Sahraa%20Group!5e1!3m2!1sen!2sbd!4v1754202002759!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
