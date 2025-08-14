import { HomeBanner } from "@/components/pages/home/HomeBanner";
import { HomeService } from "@/components/pages/home/HomeService";
import { CardSection } from "@/components/pages/home/CardSection";
import { HomeTestimonial } from "@/components/pages/home/HomeTestimonial";
import { HomeFaqSection } from "@/components/pages/home/HomeFaqSection";
import { HomeContact } from "@/components/pages/home/HomeContact";
import { HomeAbout } from "@/components/pages/home/HomeAbout";
import { ProjectsCard } from "@/components/pages/projects/ProjectsCard";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeContact />
      <HomeService />
      <CardSection />
      <ProjectsCard />
      <HomeTestimonial />
    </>
  );
}
