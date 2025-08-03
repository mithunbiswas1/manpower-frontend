// app/career/[id]/page.jsx
"use client"; // This MUST be the very first line of code

import { useState, use } from "react"; // Add 'use' to the imports
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import {
  MapPin,
  DollarSign,
  BriefcaseBusiness,
  GraduationCap,
  Hourglass,
  ListTodo,
  Sparkles,
  Tag,
  BookOpen,
  FileText,
} from "lucide-react";
import { SharedBanner } from "@/components/shared/SharedBanner";
import { jobListings } from "@/data/jobListings"; // Ensure this path is correct
import { ApplyModal } from "@/components/pages/career/ApplyModal";
import { ButtonDefault } from "@/components/custom/ButtonDefault";

export default function JobDetailsPage({ params }) {
  // Unwrap the params promise using use()
  const { id } = use(params); // This is the key change needed

  // Find the job in the local data
  const job = jobListings.find((j) => j.id === id);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!job) {
    notFound();
  }

  const bannerData = {
    title: job.title,
    description: `Department: ${job.department} | ${job.site}`,
    image: job.image,
  };

  return (
    <>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />
      <section className="py-20 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <SectionTitle className="mb-6 text-gray-900">
            {job.title}
          </SectionTitle>

          {/* Key Job Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-lg text-gray-700 mb-8">
            {job.department && (
              <span className="flex items-center">
                <Tag size={20} className="mr-2 text-primary" />
                Department: {job.department}
              </span>
            )}
            {job.site && (
              <span className="flex items-center">
                <MapPin size={20} className="mr-2 text-primary" />
                Location: {job.site}
              </span>
            )}
            {job.jobType && (
              <span className="flex items-center">
                <BriefcaseBusiness size={20} className="mr-2 text-primary" />
                Type: {job.jobType}
              </span>
            )}
            {job.experienceLevel && (
              <span className="flex items-center">
                <GraduationCap size={20} className="mr-2 text-primary" />
                Level: {job.experienceLevel}
              </span>
            )}
            {job.yearsExperience && (
              <span className="flex items-center">
                <Hourglass size={20} className="mr-2 text-primary" />
                Experience: {job.yearsExperience}
              </span>
            )}
            {job.salaryRange && (
              <span className="flex items-center">
                <DollarSign size={20} className="mr-2 text-primary" />
                Salary: {job.salaryRange}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Job Overview
          </h3>
          <Paragraph className="mb-8 leading-relaxed text-lg text-gray-800">
            {job.fullDescription || job.description}
          </Paragraph>

          {job.responsibilities && job.responsibilities.length > 0 && (
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <ListTodo size={24} className="mr-2 text-primary" />
                Responsibilities
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                {job.responsibilities.map((item, i) => (
                  <li key={`resp-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.qualifications && job.qualifications.length > 0 && (
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <ListTodo size={24} className="mr-2 text-primary" />
                Qualifications
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                {job.qualifications.map((item, i) => (
                  <li key={`qual-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.education && job.education.length > 0 && (
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen size={24} className="mr-2 text-primary" />
                Education
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                {job.education.map((item, i) => (
                  <li key={`edu-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.benefits && job.benefits.length > 0 && (
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles size={24} className="mr-2 text-primary" />
                Benefits
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                {job.benefits.map((item, i) => (
                  <li key={`benefit-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {job.applyInstructions && (
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FileText size={24} className="mr-2 text-primary" />
                How to Apply
              </h4>
              <Paragraph className="text-gray-700">
                {job.applyInstructions}
              </Paragraph>
            </div>
          )}

          <div className="mt-10 flex justify-center">
            {/* The ButtonPrimary now opens the modal */}
            {/* Make sure this is your custom ButtonPrimary component */}
            <ButtonDefault
              onClick={() => setIsModalOpen(true)} // Set state to open modal
            >
              Apply Now
            </ButtonDefault>
          </div>
        </div>
      </section>

      {/* The Apply Modal component */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={job.title}
      />
    </>
  );
}
