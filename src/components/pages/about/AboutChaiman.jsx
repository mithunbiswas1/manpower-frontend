"use client";
import Image from "next/image";
import image1 from "@/resource/service1.jpg";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";

export const AboutChaiman = () => {
  const aboutSectionData = {
    image: {
      src: image1,
      alt: "ABox Craft Packing Services",
    },
    mainContent: {
      subHeading: "Box Craft Packing Services",
      title: "Connecting Skilled People with Smart Companies",
      paragraph:
        "Box Craft Packing Services is a licensed manpower supply company based in the UAE, specializing in providing fully compliant, trained, and reliable labor across packing, construction, hospitality, industrial, and cleaning sectors. ox Craft Packing Services is a licensed manpower supply company based in the UAE, specializing in providing fully compliant, trained, and reliable labor across packing, construction, hospitality, industrial, and cleaning sectors. ox Craft Packing Services is a licensed manpower supply company based in the UAE, specializing in providing fully compliant, trained, and reliable labor across packing, construction, hospitality, industrial, and cleaning sectors. ox Craft Packing Services is a licensed manpower supply company based in the UAE, specializing in providing fully compliant, trained, and reliable labor across packing, construction, hospitality, industrial, and cleaning sectors.",
    },
  };

  const { image, mainContent } = aboutSectionData;

  return (
    <section className="py-16 bg-gray-100">
      <SectionTitle className="pb-8 text-center">
        A letter from the Chairman
      </SectionTitle>
      <div className="_max_width grid grid-cols-1 lg:grid-cols-2 gap-12 md:!px-20 2xl:!px-32">
        {/* Image Section */}
        <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="flex flex-col">
          <Paragraph className="text-justify">
            {mainContent.paragraph}
          </Paragraph>
          <div className="mt-auto">
            <h2 className="_h2 text-gray-500">
              ethical
              <br />
              standards
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
