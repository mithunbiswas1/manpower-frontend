"use client";
import { Factory, BoomBox, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import Image from "next/image";
import image1 from "@/resource/service1.jpg";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { HighlightServiceCard } from "@/components/custom/HighlightServiceCard";

export const SharedAbout = () => {
  const aboutSectionData = {
    image: {
      src: image1,
      alt: "About BOX CRAFT PACKING SERVICES",
    },
    mainContent: {
      subHeading: "About BOX CRAFT PACKING SERVICES",
      title: "Your Trusted Partner in Skilled Manpower Solutions",
      paragraph:
        "At BOX CRAFT, we take pride in delivering reliable and skilled manpower across various industries. From packing and cleaning to security and staffing, our experienced team ensures professional support that enhances your operational efficiency.",
    },
    highlightServices: [
      {
        id: 1,
        iconComponent: Factory,
        title: "Industrial & Factory Staffing",
        paragraph:
          "We provide well-trained workers including machine operators, helpers, and packers for factories of any size and trade, ensuring smooth production processes.",
      },
      {
        id: 2,
        iconComponent: BoomBox,
        title: "Cleaning & Facility Management",
        paragraph:
          "Our manpower excels in maintaining hygienic environments across commercial, industrial, and residential properties—offering routine and specialized cleaning services.",
      },
    ],
  };

  const { image, mainContent, highlightServices } = aboutSectionData;

  return (
    <div className="_max_width grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 px-4 md:!px-14 2xl:8px justify-center items-center">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        className="relative group perspective"
      >
        <Image
          src={image1.src}
          alt="About"
          width={1920}
          height={1080}
          loading="lazy"
          className="relative object-cover rounded-lg z-10 px4 md:px-10 md:pr-0 transition-transform duration-500 ease-in-out group-hover:rotate-[1deg] group-hover:scale-105 will-change-transform"
        />
        <div className="hidden md:block absolute right-0 md:-right-4 -top-4 size-16 md:size-32 border-4 border-primary"></div>
        <div className="hidden md:block absolute -left-4 -bottom-4 size-16 md:size-32 border-4 border-primary ml-10"></div>
        <div className="hidden md:block absolute -left-0 top-0 md:top-20 size-10 md:size-24 bg-primary ml-4 z-10 "></div>
        <div className="hidden md:block absolute right-20 -bottom-4 w-8 md:w-16 h-16 md:h-24 bg-primary ml-4 z-10 "></div>
      </motion.div>

      <div>
        <div className="">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <SectionSubHeading icon={Sparkles} className="my-2 ">
              {mainContent.subHeading}
            </SectionSubHeading>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
          >
            <SectionTitle className="mb-4">{mainContent.title}</SectionTitle>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
          >
            <Paragraph className="mb-10">{mainContent.paragraph}</Paragraph>
          </motion.div>
        </div>
        <div className="space-y-4 mb-6">
          {highlightServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn("left", 0.5 + index * 0.1)}
              initial="hidden"
              whileInView="show"
            >
              <HighlightServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          className="flex justify-center md:justify-start mt-10 md:mt-0"
        >
          <ButtonPrimary>Know more</ButtonPrimary>
        </motion.div>
      </div>
    </div>
  );
};
