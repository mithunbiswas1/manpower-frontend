"use client";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";

export const HomeAbout = () => {
  return (
    <div className="_max_width pt-20 pb-16 px-4 md:px-10">
      <SectionTitle className="mb-4 text-center">
        Welcome to Box Craft Packing Services
      </SectionTitle>
      <SectionSubHeading className="justify-center -mt-2 mb-5" icon={null}>
        Reliable Manpower Solutions in the UAE
      </SectionSubHeading>
      <Paragraph className="text-center md:max-w-8/10 mx-auto">
        Box Craft Packing Services is a trusted manpower supply company in the
        UAE, dedicated to delivering skilled, semi-skilled, and unskilled labor
        to a wide range of industries. With a commitment to excellence, safety,
        and productivity, we help businesses achieve operational efficiency
        through cost-effective workforce solutions.
      </Paragraph>
    </div>
  );
};
