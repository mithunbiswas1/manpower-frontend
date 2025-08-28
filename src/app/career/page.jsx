// app/career/page.jsx

"use client";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_4.png";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Linkedin } from "lucide-react";
import { Paragraph } from "@/components/custom/Paragraph";
import { useCreateCvApiMutation } from "@/redux/features/cvApi";
import { useGetAllJobsQuery } from "@/redux/features/jobsApi";
import Link from "next/link";

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("");
  const fileInputRef = useRef(null);
  const [createCv, { isLoading }] = useCreateCvApiMutation();
  const { data, isLoading: jobLoading } = useGetAllJobsQuery();
  const jobs = data?.data || [];
  console.log("Job Data:", data);

  const bannerData = {
    title: "Career Opportunities",
    description: "Explore exciting career opportunities and grow with us.",
    image: banner_image,
  };

  // Validation Schema
  const validationSchema = Yup.object({
    job_type: Yup.string().required("Please select a job"),
    tital: Yup.string(),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    image: Yup.mixed().required("Please upload your resume/CV"),
  });

  // Initial Values
  const initialValues = {
    job_type: "",
    tital: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    image: null,
  };

  const handleSubmit = async (values, { resetForm }) => {
    const fd = new FormData();
    fd.append("job_type", values.job_type);
    fd.append("tital", values.tital);
    fd.append("first_name", values.first_name);
    fd.append("last_name", values.last_name);
    fd.append("email", values.email);
    fd.append("phone", values.phone);
    if (values.image) {
      fd.append("image", values.image);
    }

    try {
      const res = await createCv(fd).unwrap();
      console.log("CV Submitted:", res);

      toast.success("Application submitted successfully");
      resetForm();
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to submit application");
    }
  };

  return (
    <>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />

      <section className="py-20 bg-white">
        <div className="max-w-screen-md mx-auto px-4">
          <SectionTitle className="mb-2 text-center">
            Current Job Openings
          </SectionTitle>
          <Paragraph className="text-center max-w-3xl mx-auto">
            Box Craft Packing Services is a licensed manpower supply company
            based in the UAE, specializing in providing fully compliant,
            trained, and reliable labor across packing, construction,
            hospitality, industrial, and cleaning sectors.
          </Paragraph>

          {/* Tabs */}
          <div className="flex justify-center my-12 space-x-2">
            <button
              className={`px-6 py-2 font-medium ${
                activeTab === "jobs"
                  ? "bg-secondary text-white"
                  : "bg-primary text-white"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              Current opportunities
            </button>
            <button
              className={`px-6 py-2 font-medium ${
                activeTab === "form"
                  ? "bg-secondary text-white"
                  : "bg-primary text-white"
              }`}
              onClick={() => setActiveTab("form")}
            >
              Find Your opportunities
            </button>
          </div>
          {/* Job List */}
          {activeTab === "jobs" && (
            <div className="space-y-12 text-center">
              {jobLoading ? (
                <div className="animate-pulse space-y-2 py-4 border-b border-gray-200">
                  <div className="h-5 bg-gray-300 rounded w-1/2 mx-auto"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto mt-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto mt-1"></div>
                </div>
              ) : jobs.length > 0 ? (
                jobs.map((job, index) => (
                  <div key={job._id}>
                    <Link
                      href={`/career/${job._id}`}
                      className="_h5 text-gray-500 hover:underline"
                    >
                      {index + 1}. {job.title}
                    </Link>
                    <p className="_p mt-2 !text-gray-500 !font-semibold">
                      Requirements:
                    </p>
                    <ul className="text-gray-600 mb-4 text-xs md:text-sm">
                      {job.sub_tital}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 my-10">
                  No jobs available at the moment.
                </p>
              )}
            </div>
          )}

          {/* Application Form */}
          {activeTab === "form" && (
            <div className="bg-white max-w-lg mx-auto mt-8">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form className="grid gap-4">
                    <div className="space-y-4">
                      {/* Job Select */}
                      <Field
                        as="select"
                        name="job_type"
                        className="border rounded px-3 py-2 w-full"
                      >
                        <option value="">Select Job</option>
                        {jobs.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="job_type"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <Field
                        type="text"
                        name="tital"
                        placeholder="Title (Mr., Ms., Dr., etc.)"
                        className="border rounded px-3 py-2 w-full"
                      />

                      <Field
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        className="border rounded px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <Field
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        className="border rounded px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="border rounded px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        className="border rounded px-3 py-2 w-full"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Resume/CV
                      </label>
                      <input
                        type="file"
                        name="image"
                        ref={fileInputRef}
                        onChange={(e) =>
                          setFieldValue("image", e.currentTarget.files[0])
                        }
                        className="border rounded px-3 py-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                      />

                      <ErrorMessage
                        name="image"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary text-white py-3 rounded-sm uppercase font-medium hover:bg-secondary transition-colors duration-200"
                    >
                      {isLoading ? "Sending..." : "Send"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          )}

          {/* External Apply Buttons */}
          {activeTab !== "form" && (
            <div className="flex justify-center gap-2 mt-8">
              <a
                href="#"
                className="flex items-center gap-2 bg-primary text-white font-semibold border border-primary"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-white">
                  {/* Indeed Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="primary"
                    className="w-4 h-4"
                  >
                    <path d="M10.824 16.516c-1.397.042-2.793-.414-3.832-1.285..."></path>
                  </svg>
                </span>
                <span className="max-w-32 text-sm ">Apply Now on Indeed</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-[#0a66c2] text-white font-semibold border border-[#0a66c2]"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-white">
                  <Linkedin className="text-[#0a66c2]" size={18} />
                </span>
                <span className="max-w-32 text-sm ">Apply Now on LinkedIn</span>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
