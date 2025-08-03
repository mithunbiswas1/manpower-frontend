// components/pages/career/ApplyModal.jsx
"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X, UploadCloud, CheckCircle, Loader2 } from "lucide-react";

export const ApplyModal = ({ isOpen, onClose, jobTitle }) => {
  const [filePreview, setFilePreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      resume: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9+() -]*$/, "Invalid phone number")
        .required("Phone number is required"),
      resume: Yup.mixed()
        .required("Resume is required")
        .test(
          "fileType",
          "Only PDF files are allowed",
          (value) => value && value.type === "application/pdf"
        )
        .test(
          "fileSize",
          "File size too large (max 5MB)",
          (value) => value && value.size <= 5 * 1024 * 1024
        ),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Create FormData for file upload
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("resume", values.resume);
        formData.append("jobTitle", jobTitle);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success(`Application for "${jobTitle}" submitted successfully!`);
        resetForm();
        setFilePreview(null);
        onClose();
      } catch (error) {
        toast.error("Failed to submit application. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Handle file change
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("resume", file);
      setFilePreview(file.name);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />

        {/* Modal Content */}
        <div
          className={`relative bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto transition-all transform ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex justify-between items-center p-4 lg:px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Apply for {jobTitle}
            </h2>
            <button
              onClick={onClose}
              className="absolute right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-4 md:p-6">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Form fields remain the same as your original */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>

              {/* Improved File Upload */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Upload Resume (PDF only, max 5MB)
                </label>
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-between border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-primary transition-all cursor-pointer"
                >
                  <div className="flex items-center">
                    {filePreview ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle size={20} className="mr-2" />
                        {filePreview}
                      </span>
                    ) : (
                      <span className="flex items-center text-gray-500">
                        <UploadCloud size={20} className="mr-2" />
                        Choose File...
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-primary">Browse</span>
                </label>
                <input
                  id="resume-upload"
                  name="resume"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {formik.touched.resume && formik.errors.resume && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.resume}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors flex justify-center items-center"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
