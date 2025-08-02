"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import mission_vision from "@/resource/banner_image_1.jpg";

// Lucide icons
import {
  Clock8,
  Handshake,
  Award,
  BadgeDollarSign,
  ShieldAlert,
  Home,
  Smile,
  Users,
} from "lucide-react";

const data = [
  {
    title: "Locally Owned and Operated",
    description:
      "We are an Australian company. We take pleasure in serving both homes and businesses. We provide the most reliable, dependable, and trustworthy services. Everybody can count it on.",
    icon: Clock8,
  },
  {
    title: "Skilled and Certified Technicians",
    description:
      "Our team has received the best training. They are also experienced and able to handle any task. Whether a small one or a big one, we never do things by halves.",
    icon: Handshake,
  },
  {
    title: "Advanced Cleaning Tools",
    description:
      "Our equipment is the best. We can help to perform the in-depth cleaning of ducts, vents, coils and exhaust systems.",
    icon: Award,
  },
  {
    title: "Fair and Transparent Pricing",
    description:
      "No hidden fees. No upselling. Only clear quotes and top-notch work, every single time.",
    icon: BadgeDollarSign,
  },
  {
    title: "Same-Day and Emergency Service",
    description:
      "We are ready to deal with a situation in a hurry. Call us! Whenever possible, we provide same-day service in Sydney and the nearby areas.",
    icon: ShieldAlert,
  },
  {
    title: "Safe for Families and Pets",
    description:
      "The cleaning methods we employ are environmentally friendly and safe. Your home, air, and loved ones are provided protection.",
    icon: Home,
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "Are you not satisfied with the service? We will correct it. We are committed to our work because the most important thing to us is the satisfaction of our customers.",
    icon: Smile,
  },
  {
    title: "Over 1,000 Happy Clients",
    description:
      "We have been instrumental in helping thousands of Aussie families and businesses to purify their air.",
    icon: Users,
  },
];

export const HomeDifference = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${mission_vision.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full bg-primary/80 text-white">
        <div className="max-w-screen-xl mx-auto py-16 px-4">
          <div className="pb-2">
            <motion.h5
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              className="_h5 text-white uppercase text-center "
            >
              Why Choose?
            </motion.h5>
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              className="_h2 mt-3 pb-12 text-center "
            >
              Why Choose Aussie HVAC Cleaning Services?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    variants={fadeIn("fade", 0.1 * (index + 1))}
                    initial="hidden"
                    whileInView="show"
                    key={index}
                    className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left group bg-primary rounded-lg p-4"
                  >
                    <div className="h-20 w-20 text-white p-4 rounded-lg flex items-center justify-center text-3xl mt-1 border-2 border-white group-hover:border-transparent transition-all duration-300 group-hover:bg-transparent animate-flicker group-hover:bg-white">
                      <Icon className="h-20 w-20 text-white group-hover:text-primary transition-all duration-200" />
                    </div>
                    <div>
                      <h4 className="_h4 font-medium uppercase">
                        {item.title}
                      </h4>
                      <p className="_p text-gray-300 mt-2">
                        {item.description}
                      </p>
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
