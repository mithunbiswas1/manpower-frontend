// app/career/page.jsx

"use client";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { JobCard } from "@/components/pages/career/JobCard";
import { jobListings } from "@/data/jobListings.js";

export default function CareerPage() {
  const bannerData = {
    title: "Career Opportunities",
    description: "Explore exciting career opportunities and grow with us.",
    image: banner_image,
  };

  return (
    <>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <SectionTitle className="mb-2 text-center">
            Current Job Openings
          </SectionTitle>
          <SectionSubHeading className="mb-10 justify-center">
            Join Our Team
          </SectionSubHeading>

          <div className="grid grid-cols-1 gap-8">
            {jobListings.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
