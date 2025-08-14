// app/about-us/page.jsx

import { AboutMissionVision } from "@/components/pages/about/AboutMissionVision";
import { AboutTeam } from "@/components/pages/about/AboutTeam";
import { SharedAbout } from "@/components/shared/SharedAbout";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/home_banner/flexible_temporary_staffing.jpg";

export default function AboutUsPage() {
  const bannerData = {
    title: "About Us",
    description:
      "Discover how Box Craft Packing Services delivers professional manpower and packing solutions across the UAE with excellence and reliability.",
    image: banner_image,
  };

  return (
    <div>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />
      <SharedAbout />
      <AboutMissionVision />
      <AboutTeam />
    </div>
  );
}
