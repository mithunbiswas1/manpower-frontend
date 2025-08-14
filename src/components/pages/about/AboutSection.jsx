"use client";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";

export const AboutSection = () => {
  return (
    <div className="_max_width pt-20 px-4 md:px-10">
      <SectionTitle className="text-center">
        Box Craft Packing Services
      </SectionTitle>
      <SectionSubHeading className="mb-6 justify-center text-center">
        Connecting Skilled People with Smart Companies
      </SectionSubHeading>

      <Paragraph className="text-center md:max-w-8/10 mx-auto">
        Box Craft Packing Services is a licensed manpower supply company based
        in the UAE, specializing in providing fully compliant, trained, and
        reliable labor across packing, construction, hospitality, industrial,
        and cleaning sectors.
      </Paragraph>
    </div>
  );
};
