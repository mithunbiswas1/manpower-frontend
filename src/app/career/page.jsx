// app/career/page.jsx

"use client";
import { useState } from "react";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { Linkedin, Info } from "lucide-react";

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [formData, setFormData] = useState({
    jobTitle: "",
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    resume: null,
  });

  const bannerData = {
    title: "Career Opportunities",
    description: "Explore exciting career opportunities and grow with us.",
    image: banner_image,
  };

  const jobs = [
    {
      id: 1,
      title: "Sales Executive",
      requirements: [
        "5 Years Experience in Manpower Domain",
        "Valid UAE Driving License",
      ],
    },
    {
      id: 2,
      title: "HR Manager",
      requirements: ["7 Years Experience in HR Domain", "MBA Preferred"],
    },
    {
      id: 3,
      title: "Marketing Specialist",
      requirements: [
        "3 Years Experience in Digital Marketing",
        "Strong communication skills",
      ],
    },
    {
      id: 4,
      title: "IT Support Engineer",
      requirements: [
        "2 Years Experience in IT Support",
        "Knowledge of Networking",
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here
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
          <SectionSubHeading className="mb-10 justify-center">
            Join Our Team
          </SectionSubHeading>

          {/* Tabs */}
          <div className="flex justify-center mb-12 space-x-2">
            <button
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === "jobs"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              Current opportunities
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === "form"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => setActiveTab("form")}
            >
              Find Your opportunities
            </button>
          </div>

          {/* Job List */}
          {activeTab === "jobs" && (
            <div className="space-y-12 text-center">
              {jobs.map((job) => (
                <div key={job.id}>
                  <h3 className="text-xl font-semibold mb-3">
                    {job.id}. {job.title}
                  </h3>
                  <p className="font-medium mb-2 text-gray-700">
                    Requirements:
                  </p>
                  <ul className="text-gray-600 mb-4">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <div className="flex justify-center gap-2">
                    <a
                      href="#"
                      className="flex items-center gap-2 bg-[#0074e6] text-white px-4 py-2 rounded-sm font-semibold"
                    >
                      {/* Indeed Icon */}
                      <span className="w-5 h-5 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M10.824 16.516c-1.397.042-2.793-.414-3.832-1.285-.595-.506-1.127-1.11-1.583-1.812-.456-.702-.82-1.493-1.092-2.348-.272-.855-.443-1.765-.512-2.709-.07-.944.004-1.9.22-2.827.217-.927.568-1.802 1.054-2.585.485-.783 1.09-1.468 1.8-2.03.71-.56 1.523-.993 2.408-1.296.885-.303 1.834-.473 2.798-.485 1.488-.016 2.973.35 4.316 1.098 1.344.748 2.502 1.803 3.407 3.093.905 1.29 1.558 2.768 1.91 4.33.353 1.562.402 3.167.147 4.75-.255 1.583-.873 3.102-1.815 4.463-.942 1.36-2.203 2.5-3.69 3.385-1.487.884-3.178 1.455-4.935 1.691-.013.003-.028.003-.042.004h-.01c-1.18.06-2.36-.024-3.52-.258-1.16-.233-2.28-.66-3.32-1.258-.027-.015-.055-.03-.082-.045zm3.17-10.457c-.896-.007-1.78.18-2.6.55s-1.56.88-2.17 1.54c-.61.66-1.06 1.43-1.34 2.27s-.4 1.76-.32 2.65c.08.89.37 1.76.85 2.53.48.77 1.1 1.43 1.83 1.96.73.53 1.55.93 2.42 1.18.88.25 1.8.34 2.73.27.93-.07 1.84-.33 2.7-.79.86-.46 1.63-1.12 2.29-1.95.66-.83 1.2-1.78 1.58-2.8.38-1.02.5-2.11.36-3.19-.14-1.08-.54-2.13-1.18-3.08-.64-.95-1.5-1.78-2.52-2.42-1.02-.64-2.16-1.03-3.35-1.17-.05-.005-.1-.01-.15-.015z" />
                        </svg>
                      </span>
                      Apply Now on Indeed
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 bg-[#2D5B7B] text-white px-4 py-2 rounded-sm font-semibold"
                    >
                      <Linkedin size={18} />
                      Apply Now on LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Application Form */}
          {activeTab === "form" && (
            <div className="bg-white max-w-lg mx-auto mt-8">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="">
                    <select
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="border rounded px-3 py-2 w-full"
                    >
                      <option value="">Select Job</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title (Mr., Ms., Dr., etc.)"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                  />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume/CV
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    className="border rounded px-3 py-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-800"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white py-3 rounded-sm uppercase font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
