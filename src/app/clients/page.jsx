// app/about-us/page.jsx

import { ClientsComponents } from "@/components/pages/clients/ClientsComponents";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/home_banner/flexible_temporary_staffing.jpg";

export default function ClientsPage() {
  const bannerData = {
    title: "Clients",
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

      <ClientsComponents />
    </div>
  );
}
