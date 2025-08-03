"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";

// Lucide icons
import {
  PackageCheck,
  Users,
  Sparkles,
  ShieldCheck,
  Clock3,
  Handshake,
  BadgeCheck,
  ClipboardList,
  FileCheck2,
  UserCheck2,
  Building2,
  Smile,
} from "lucide-react";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

const data = [
  {
    title: "Specialized Packing Experts",
    description:
      "Our team is trained to handle all types of packing operations with precision, ensuring safe and secure handling every time.",
    icon: PackageCheck,
  },
  {
    title: "Skilled & Reliable Workforce",
    description:
      "We provide highly trained, dedicated manpower ready to deliver excellence across packing, cleaning, and logistics.",
    icon: Users,
  },
  {
    title: "Custom Manpower Solutions",
    description:
      "Whether it's short-term or long-term, we tailor our staffing to your unique business needs and scale.",
    icon: Sparkles,
  },
  {
    title: "Safety-First Operations",
    description:
      "Our personnel follow strict safety and hygiene standards to protect your workforce, property, and peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Deployment",
    description:
      "Need urgent staffing? We ensure quick mobilization to keep your operations running without delays.",
    icon: Clock3,
  },
  {
    title: "Client-Focused Approach",
    description:
      "We prioritize long-term partnerships by understanding your needs and consistently exceeding expectations.",
    icon: Handshake,
  },
  {
    title: "Certified & Compliant",
    description:
      "Fully compliant with UAE labor laws and ISO-certified practices for reliable, hassle-free manpower delivery.",
    icon: BadgeCheck,
  },
  {
    title: "Transparent Reporting",
    description:
      "We offer clear documentation, attendance tracking, and real-time workforce updates to keep you informed.",
    icon: ClipboardList,
  },
  {
    title: "Pre-Screened & Verified",
    description:
      "All our staff are thoroughly vetted, interviewed, and screened before deployment for quality assurance.",
    icon: FileCheck2,
  },
  {
    title: "Cultural Fit Recruitment",
    description:
      "We match candidates not only based on skills but on values and behavior that align with your company culture.",
    icon: UserCheck2,
  },
  {
    title: "Serving All Industries",
    description:
      "From factories and warehouses to hotels and offices—we have the manpower for every industry and scale.",
    icon: Building2,
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Your satisfaction is our mission. We go the extra mile to maintain trust and long-lasting collaboration.",
    icon: Smile,
  },
];

export const SharedDifference = () => {
  return (
    <section>
      <div className="w-full">
        <div className="_max_width py-16 ">
          <div className="pb-2">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
            >
              <SectionSubHeading
                icon={Sparkles}
                className="my-2 justify-center"
              >
                What We Do
              </SectionSubHeading>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
            >
              <SectionTitle className="mb-10 text-center">
                Our Most Popular Man Power Services For You
              </SectionTitle>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    variants={fadeIn("fade", 0.1 * (index + 0.5))}
                    initial="hidden"
                    whileInView="show"
                    key={index}
                    className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left group bg-primary rounded-lg p-8 hover:shadow-md"
                  >
                    <div className="h-20 w-20 text-white p-4 rounded-lg flex items-center justify-center text-3xl mt-1 border-2 border-white group-hover:border-transparent transition-all duration-300 group-hover:bg-transparent animate-flicker group-hover:bg-white">
                      <Icon className="h-20 w-20 text-white group-hover:text-primary transition-all duration-200" />
                    </div>
                    <div>
                      <h4 className="_h4 text-white font-medium uppercase">
                        {item.title}
                      </h4>
                      <p className="_p text-white mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
