"use client";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";

export const HomeAbout = () => {
  return (
    <div className="_max_width pt-20 pb-16 px-4 md:px-10">
      <SectionTitle className="mb-4 text-center">
        WELCOME TO BOX CRAFT PACKING SERVICES
      </SectionTitle>
      <Paragraph className="text-center md:max-w-8/10 mx-auto">
        Manpower Supply Packing and Cleaning Services is a premier provider of
        skilled labor solutions, specializing in packing and cleaning services
        for various industries. Our company is dedicated to offering reliable,
        efficient, and professional manpower that caters to the specific needs
        of our clients, ensuring seamless operations and a clean, safe working
        environment. Founded with a mission to bridge the gap between demand and
        supply in the labor market, we have quickly become a trusted partner for
        businesses seeking high-quality packing and cleaning services. Our team
        is trained to the highest standards, delivering exceptional service that
        enhances productivity and maintains a spotless workplace.
      </Paragraph>
    </div>
  );
};
