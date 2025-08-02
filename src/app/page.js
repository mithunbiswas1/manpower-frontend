import { CardSection } from "@/components/pages/home/CardSection";
import HomeBanner from "@/components/pages/home/HomeBanner";
import { HomeContactService } from "@/components/pages/home/HomeContactService";
import { HomeDifference } from "@/components/pages/home/HomeDifference";
import { HomeFaqSection } from "@/components/pages/home/HomeFaqSection";
import { HomeService } from "@/components/pages/home/HomeService";
import HomeTestimonial from "@/components/pages/home/HomeTestimonial";
import { SectionModel1 } from "@/components/shared/SectionModel1";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SectionModel1 />
      <HomeService />
      <HomeDifference />
      <CardSection />
      <HomeTestimonial />
      <HomeFaqSection />
      <HomeContactService />
    </>
  );
}
