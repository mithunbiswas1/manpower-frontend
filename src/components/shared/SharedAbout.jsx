"use client";
import { Factory, BoomBox, Sparkles } from "lucide-react";
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
      alt: "ABox Craft Packing Services",
    },
    mainContent: {
      subHeading: "Box Craft Packing Services",
      title: "Connecting Skilled People with Smart Companies",
      paragraph:
        "Box Craft Packing Services is a licensed manpower supply company based in the UAE, specializing in providing fully compliant, trained, and reliable labor across packing, construction, hospitality, industrial, and cleaning sectors.",
    },
  };

  const differentiators = [
    {
      text: "100% compliant with UAE labour law & visa regulations",
      icon: Sparkles,
    },
    {
      text: "Multi-national recruitment sourcing (Bangladesh, India, Nepal, etc.)",
      icon: Sparkles,
    },
    { text: "End-to-end HR and PRO services", icon: Sparkles },
    { text: "Real-time site supervision and reporting", icon: Sparkles },
    {
      text: "Custom staffing solutions based on your workflow",
      icon: Sparkles,
    },
  ];

  const { image, mainContent } = aboutSectionData;

  return (
    <div className="_max_width grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 px-4 md:px-14 2xl:px-20 items-center">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-6">
        <SectionTitle className="text-left !mx-0">
          {mainContent.subHeading}
        </SectionTitle>
        <SectionSubHeading className="text-primary-600">
          {mainContent.title}
        </SectionSubHeading>
        <Paragraph>{mainContent.paragraph}</Paragraph>

        {/* Differentiators Section */}
        <div className="mt-4">
          <SectionSubHeading className="text-gray-800 !text-lg mb-2">
            What Sets Us Apart:
          </SectionSubHeading>
          <ul className="space-y-3">
            {differentiators.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <point.icon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                <Paragraph>{point.text}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
