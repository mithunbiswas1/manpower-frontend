import { HomeBanner } from "@/components/pages/home/HomeBanner";
import { AboutSection } from "@/components/shared/AboutSection";
import { HomeService } from "@/components/pages/home/HomeService";
import { HomeDifference } from "@/components/pages/home/HomeDifference";
import { CardSection } from "@/components/pages/home/CardSection";
import { HomeTestimonial } from "@/components/pages/home/HomeTestimonial";
import { HomeFaqSection } from "@/components/pages/home/HomeFaqSection";
import { HomeContactService } from "@/components/pages/home/HomeContactService";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <HomeService />
      <HomeDifference />
      <CardSection />
      <HomeTestimonial />
      <HomeFaqSection />
      <HomeContactService />
    </>
  );
}
