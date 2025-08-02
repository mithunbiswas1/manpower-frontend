"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import mission_vision from "@/resource/banner_image_1.jpg";
import { PhoneCall, Mail, FileText, Sparkles } from "lucide-react";
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
      <div className="w-full bg-black/60 text-white">
        <div className="max-w-screen-xl mx-auto py-16 px-4">
          <motion.div>
            <SectionSubHeading
              iconClass="text-white"
              titleClass="text-white"
              icon={Sparkles}
              className="my-2 justify-center"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <PhoneCall className="w-10 h-10 text-white mb-2" />
              <p className="text-lg">Reach us</p>
              <p className="font-semibold text-xl mt-1 tracking-wide">
                800 82 22 726
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Mail className="w-10 h-10 text-white mb-2" />
              <p className="text-lg">Quick Mail</p>
              <p className="font-semibold text-xl mt-1 tracking-wide">
                info@tabascouae.com
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FileText className="w-10 h-10 text-white mb-2" />
              <p className="text-lg">Get Quote</p>
              <p className="font-semibold text-xl mt-1 tracking-wide">
                Book Online
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
