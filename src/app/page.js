import { HomeBanner } from "@/components/pages/home/HomeBanner";
import { SharedAbout } from "@/components/shared/SharedAbout";
import { HomeService } from "@/components/pages/home/HomeService";
import { SharedDifference } from "@/components/shared/SharedDifference";
import { CardSection } from "@/components/pages/home/CardSection";
import { HomeTestimonial } from "@/components/pages/home/HomeTestimonial";
import { HomeFaqSection } from "@/components/pages/home/HomeFaqSection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SharedAbout />
      <HomeService />
      <SharedDifference />
      <CardSection />
      <HomeTestimonial />
      <HomeFaqSection />
    </>
  );
}
