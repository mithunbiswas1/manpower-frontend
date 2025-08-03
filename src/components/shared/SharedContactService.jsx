import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { PhoneCall, Mail, FileText, Sparkles } from "lucide-react";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

import contact_backgeound from "@/resource/contact-backgeound.jpg";
import Link from "next/link";

export const SharedContactService = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${contact_backgeound.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full bg-black/60 text-white">
        <div className="max-w-screen-xl mx-auto py-16 px-4">
          <motion.div
            ariants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <SectionSubHeading
              iconClass="text-white"
              titleClass="text-white"
              icon={Sparkles}
              className="my-2 justify-center"
            >
              We are Honest & our work.
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
              <p className="text-lg">Call Us</p>
              <a
                href="tel:+97143535837"
                className="font-semibold text-xl mt-1 tracking-wide hover:underline"
              >
                04-3535837
              </a>
            </div>

            <div className="flex flex-col items-center">
              <Mail className="w-10 h-10 text-white mb-2" />
              <p className="text-lg">Email Us</p>
              <a
                href="mailto:info@alsaharagroup.com"
                className="font-semibold text-xl mt-1 tracking-wide hover:underline"
              >
                info@alsaharagroup.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <FileText className="w-10 h-10 text-white mb-2" />
              <p className="text-lg">Request a Quote</p>
              <Link
                href="/reach-us"
                rel="noopener noreferrer"
                className="font-semibold text-xl mt-1 tracking-wide hover:underline"
              >
                Book Online
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
