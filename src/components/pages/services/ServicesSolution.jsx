// components/pages/services/ServicesSolution.jsx
"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import {
  Sparkles,
  Factory,
  ShieldCheck,
  Brush, // Changed from Dumbbell to Brush
  Hotel,
  User,
  Clock,
  FileBadge,
} from "lucide-react";
import Image from "next/image";

// Import all service images (ensure these paths are correct in your project)
import expert_factory_workforce from "@/resource/home_banner/expert_factory_workforce.jpg";
import professional_leaning_services from "@/resource/home_banner/professional_leaning_services.jpg";
import trusted_security_personnel from "@/resource/home_banner/trusted_security_personnel.jpg";
import hotel_catering_taffing from "@/resource/home_banner/hotel_catering_taffing.jpg";
import certified_safety_officers from "@/resource/home_banner/certified_safety_officers.jpg";
import permanent_staffing_solutions from "@/resource/home_banner/permanent_staffing_solutions.jpg";
import flexible_temporary_staffing from "@/resource/home_banner/flexible_temporary_staffing.jpg";

import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { Paragraph } from "@/components/custom/Paragraph";

const services = [
  {
    id: 1,
    title: "Factory Workers",
    description:
      "We provide skilled and highly qualified personnel for factories of any magnitude, trade, or type. Our workforce includes machine operators, goods packers, and general helpers to ensure smooth production.",
    icon: Factory,
    image: expert_factory_workforce,
  },
  {
    id: 2,
    title: "Cleaning Services",
    description:
      "Our cleaning services maintain a pristine and hygienic workplace. We offer routine and specialized cleaning solutions tailored to the specific needs of your commercial, industrial, or residential facility.",
    icon: Brush, // Changed icon here
    image: professional_leaning_services,
  },
  {
    id: 3,
    title: "Security Guard",
    description:
      "Our licensed and highly trained security professionals ensure the safety and peace of mind of our clients. We provide top-tier security solutions for residential, commercial, and industrial properties.",
    icon: ShieldCheck,
    image: trusted_security_personnel,
  },
  {
    id: 4,
    title: "Hotel & Catering Staff",
    description:
      "With an extensive repository of expertise, our service-oriented staff can help maintain the high-quality standards of hotels and restaurants, ensuring excellent customer satisfaction.",
    icon: Hotel,
    image: hotel_catering_taffing,
  },
  {
    id: 5,
    title: "Safety Officer",
    description:
      "Safety is paramount. We provide trained safety officers who are well-versed in the latest safety and hygiene protocols, helping your business maintain a secure and compliant work environment.",
    icon: FileBadge,
    image: certified_safety_officers,
  },
  {
    id: 6,
    title: "Permanent Staffing",
    description:
      "For long-term needs, we offer a thorough selection process to find the best candidates for your packing and cleaning operations, ensuring a perfect fit with your organizational culture.",
    icon: User,
    image: permanent_staffing_solutions,
  },
  {
    id: 7,
    title: "Temporary Staffing",
    description:
      "Whether you need short-term manpower for peak periods or specific projects, our flexible and cost-effective temporary staffing solutions keep your operations running smoothly without delays.",
    icon: Clock,
    image: flexible_temporary_staffing,
  },
];

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
                  <ButtonPrimary
                    link={`/get-service?service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="w-full"
                  >
                    Get Services
                  </ButtonPrimary>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}