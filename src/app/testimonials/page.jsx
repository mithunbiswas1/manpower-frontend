// app/projects/page.jsx
"use client";

import { TestimonialsComponents } from "@/components/pages/testimonials/TestimonialsComponents";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";

export default function TestimonialsPage() {
  const bannerData = {
    title: "Testimonials",
    description:
      "Explore our portfolio of successful Testimonials showcasing our expertise, innovative solutions.",
    image: banner_image,
  };

  return (
    <div>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />

      {/* Testimonials Section */}
      <TestimonialsComponents />
    </div>
  );
}
