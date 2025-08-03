// components/custom/JobCard.jsx
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  DollarSign,
  Tag,
  BriefcaseBusiness,
  GraduationCap,
  Hourglass,
  Bookmark,
} from "lucide-react";

import { fadeIn } from "@/ultils/motion";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import Image from "next/image";
export const JobCard = ({ job, index }) => {
  const {
    id,
    title,
    department,
    site,
    jobType,
    experienceLevel,
    yearsExperience,
    salaryRange,
    description,
    image,
  } = job;

  return (
    <motion.div
      variants={fadeIn("up", 0.1 + index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-6 pt-10 md:col-span-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
            {title}
          </h3>

          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-700 mb-6">
            {department && (
              <div className="flex items-center">
                <Tag size={16} className="mr-2 text-primary" /> {department}
              </div>
            )}
            {site && (
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" /> {site}
              </div>
            )}
            {jobType && (
              <div className="flex items-center">
                <BriefcaseBusiness size={16} className="mr-2 text-primary" />{" "}
                {jobType}
              </div>
            )}
            {experienceLevel && (
              <div className="flex items-center">
                <GraduationCap size={16} className="mr-2 text-primary" />{" "}
                {experienceLevel}
              </div>
            )}
            {yearsExperience && (
              <div className="flex items-center">
                <Hourglass size={16} className="mr-2 text-primary" />{" "}
                {yearsExperience}
              </div>
            )}
            {salaryRange && (
              <div className="flex items-center">
                <DollarSign size={16} className="mr-2 text-primary" />{" "}
                {salaryRange}
              </div>
            )}
          </div>
          <p className="text-gray-700 text-base mb-6 line-clamp-3">
            {description}
          </p>
          {/* Button always links to internal details page */}
          <ButtonPrimary link={`/career/${id}`} className="w-full">
            View & Apply
          </ButtonPrimary>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-48 md:h-auto overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};
