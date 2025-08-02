"use client";
import { Sparkles, Building2, Car } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import Image from "next/image";
import image1 from "@/resource/banner_image_1.jpg";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { HighlightServiceCard } from "@/components/custom/HighlightServiceCard";

export const SharedAbout = () => {
  const aboutSectionData = {
    image: {
      src: image1,
      alt: "About AL-SAHARA GROUP",
    },
    mainContent: {
      subHeading: "About AL-SAHARA GROUP",
      title: "We Are A Highly Experienced Cleaning Service Company",
      paragraph:
        "At AL-SAHARA GROUP, we pride ourselves on being a highly experienced and dedicated team providing top-tier cleaning services. Our commitment to excellence ensures that every space we touch is transformed into a spotless and refreshing environment. ",
    },
    highlightServices: [
      {
        id: 1,
        iconComponent: Building2,
        title: "Commercial Cleaning Excellence",
        paragraph:
          "AL-SAHARA GROUP specializes in comprehensive commercial cleaning solutions tailored to businesses of all sizes. From office spaces to retail environments.",
      },
      {
        id: 2,
        iconComponent: Car,
        title: "Residential Cleaning Solutions",
        paragraph:
          "For homes and apartments, AL-SAHARA GROUP offers meticulous residential cleaning. We handle everything from deep cleans to regular maintenance.",
      },
    ],
  };

  const { image, mainContent, highlightServices } = aboutSectionData;

  return (
    <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 px-4 md:px-6 lg:px-8 justify-center items-center">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        className="relative group perspective mt-10"
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
