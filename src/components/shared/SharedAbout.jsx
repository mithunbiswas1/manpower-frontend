"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { SectionSubHeading } from "../custom/SectionSubHeading";

export const SharedAbout = () => {
  return (
    <section>
      <div className="_max_width pt-20 pb-16">
        <SectionTitle className="mb-4 text-center">
          Box Craft Packing Services
        </SectionTitle>

        <SectionSubHeading className="mb-8 justify-center">
          Connecting Skilled People with Smart Companies
        </SectionSubHeading>

        <Paragraph className="text-center max-w-3xl mx-auto">
          Box Craft Packing Services is a licensed manpower supply company based
          in the UAE, specializing in providing fully compliant, trained, and
          reliable labor across packing, construction, hospitality, industrial,
          and cleaning sectors.
        </Paragraph>
      </div>
    </section>
  );
};
