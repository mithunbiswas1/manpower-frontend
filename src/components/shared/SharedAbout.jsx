"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { SectionSubHeading } from "../custom/SectionSubHeading";

export const SharedAbout = () => {
  return (
    <section>
      <div className="_max_width pt-20 pb-16">
        <SectionTitle className="mb-4 text-center">Who We Are</SectionTitle>

        <Paragraph className="text-center max-w-3xl mx-auto">
          <strong>Box Craft Packing Services</strong> was founded with a vision
          to become the leading manpower supply partner in the UAE. With years
          of experience and a team of HR and recruitment experts, we specialize
          in providing labor solutions for logistics, packing, construction,
          cleaning, hospitality, and general factory operations.
        </Paragraph>
      </div>
    </section>
  );
};
