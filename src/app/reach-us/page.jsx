// app/reach-us/page.jsx

import { Map } from "@/components/pages/reachUs/Map";
import { SharedBanner } from "@/components/shared/SharedBanner";
import { SharedContact } from "@/components/shared/SharedContact";
import banner_image from "@/resource/banner_image_3.jpg";

export default function ReachUsPage() {
  const bannerData = {
    title: "Reach Us",
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
      <SharedContact />
    </div>
  );
}
