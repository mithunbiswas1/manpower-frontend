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
          <motion.div
            variants={fadeIn("top", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <SectionSubHeading icon={Sparkles} className="my-2 justify-center">
              Join Our Team
            </SectionSubHeading>
          </motion.div>
          <motion.div
            variants={fadeIn("top", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <SectionTitle className="mb-16 text-center text-gray-800">
              Current Job Openings
            </SectionTitle>
          </motion.div>

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
