"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { SectionSubHeading } from "../custom/SectionSubHeading";

export const SharedAbout = ({ about }) => {
  return (
    <section>
      <div className="_max_width pt-20 pb-16">
        <SectionTitle className="mb-4 text-center">Who We Are</SectionTitle>

        <Paragraph className="text-center max-w-3xl mx-auto">{about}</Paragraph>
      </div>
    </section>
  );
};
