// app/about-us/page.jsx

import { ReachUsTeam } from "@/components/pages/reachUs/ReachUsTeam";
import { SharedAbout } from "@/components/shared/SharedAbout";
import { SharedBanner } from "@/components/shared/SharedBanner";
import { SharedClients } from "@/components/shared/SharedClients";
import { SharedContact } from "@/components/shared/SharedContact";
import { SharedDifference } from "@/components/shared/SharedDifference";
import banner_image from "@/resource/banner_image_3.jpg";

export default function AboutUsPage() {
  const bannerData = {
    title: "About Us",
    description:
      "Learn more about our company's vision, mission, and the team behind our success.",
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
      <SharedDifference />
      <SharedClients />
      <SharedContact />
      <ReachUsTeam />
    </div>
  );
}
