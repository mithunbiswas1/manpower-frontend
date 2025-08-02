// app/projects/page.jsx

import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";

export default function ProjectsPage() {
  const bannerData = {
    title: "Projects",
    description:
      "Explore our portfolio of successful projects showcasing our expertise, innovative solutions.",
    image: banner_image,
  };

  return (
    <div>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />
    </div>
  );
}
