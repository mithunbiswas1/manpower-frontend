// app/about-us/page.jsx
"use client";

import { AboutChaiman } from "@/components/pages/about/AboutChaiman";
import { AboutMissionVision } from "@/components/pages/about/AboutMissionVision";
import { SharedAbout } from "@/components/shared/SharedAbout";
import { SharedAbout2 } from "@/components/shared/SharedAbout2";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/home_banner/flexible_temporary_staffing.jpg";

import { useGetAllAboutQuery } from "@/redux/features/aboutApi";

export default function AboutUsPage() {
  const bannerData = {
    title: "About Us",
    description:
      "Discover how Box Craft Packing Services delivers professional manpower and packing solutions across the UAE with excellence and reliability.",
    image: banner_image,
  };

  const { data, isLoading, isError } = useGetAllAboutQuery();
  const aboutData = data?.data;

  return (
    <div>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />
      <SharedAbout about={aboutData?.about} />
      <AboutChaiman
        image={aboutData?.image}
        message={aboutData?.message}
        name={aboutData?.name}
      />
      <AboutMissionVision
        vision={aboutData?.vision}
        mission={aboutData?.mission}
      />
      <SharedAbout2 points={aboutData?.points || []} />
      {/* <AboutTeam /> */}
    </div>
  );
}
