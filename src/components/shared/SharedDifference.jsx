"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";

// Lucide icons
import {
  BarChart3,
  Home,
  Timer,
  BriefcaseBusiness,
  Users,
  CalendarCheck2,
  ShieldCheck,
  HeartHandshake,
  MoveRight,
  ClipboardList,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";

const data = [
  {
    title: "Best ROI",
    description:
      "We deliver optimal return on investment through efficient manpower deployment and strategic planning.",
    icon: BarChart3,
  },
  {
    title: "Home Grown",
    description:
      "A proudly home-grown company, we understand the local workforce and business environment inside-out.",
    icon: Home,
  },
  {
    title: "Speedy Deployment",
    description:
      "We ensure the fastest possible turnaround in placing skilled manpower to meet urgent client needs.",
    icon: Timer,
  },
  {
    title: "Professional Management",
    description:
      "Managed by experts with deep industry knowledge, we offer structured and scalable staffing solutions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Trained Workforce",
    description:
      "Our workforce is well-trained, skilled, and ready to contribute from day one on the job.",
    icon: Users,
  },
  {
    title: "Est. In 2004",
    description:
      "With over two decades of experience, Tabasco is a pioneer in delivering reliable manpower solutions.",
    icon: CalendarCheck2,
  },
  {
    title: "Safety Driven",
    description:
      "Safety is at the core of our operations. We strictly follow protocols and prioritize worker well-being.",
    icon: ShieldCheck,
  },
  {
    title: "Welfare Culture",
    description:
      "We promote a culture of welfare, ensuring the physical, emotional, and social well-being of workers.",
    icon: HeartHandshake,
  },
  {
    title: "Rapid Onboarding",
    description:
      "Our onboarding process is streamlined and efficient, ensuring minimal downtime for new hires.",
    icon: MoveRight,
  },
  {
    title: "Robust Workforce Management",
    description:
      "We use advanced tools and systems for efficient tracking, reporting, and workforce optimization.",
    icon: ClipboardList,
  },
  {
    title: "Recruitment Expertise",
    description:
      "Our recruitment process is rigorous and data-driven, ensuring only the best fit for your needs.",
    icon: BadgeCheck,
  },
  {
    title: "ISO Certified",
    description:
      "We maintain the highest standards of quality and compliance, as demonstrated by our ISO certification.",
    icon: BadgeCheck,
  },
];

export const SharedDifference = () => {
  return (
    <section>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto py-16 px-4">
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
