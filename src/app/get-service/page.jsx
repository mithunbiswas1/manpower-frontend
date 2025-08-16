// app/get-service/page.jsx

import { Suspense } from "react";
import { GetServicePage } from "@/components/pages/get-service/GetServicePage";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";

export default function Page() {
  const bannerData = {
    title: "Services",
    description:
      "Select your required manpower from our wide range of services to receive a custom quote.",
    image: banner_image,
  };

  return (
    <div>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />

      <Suspense fallback={<div>Loading services...</div>}>
        <GetServicePage />
      </Suspense>
    </div>
  );
}
