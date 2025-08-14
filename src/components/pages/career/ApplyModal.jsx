// components/pages/career/ApplyModal.jsx
"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X, UploadCloud, CheckCircle, Loader2 } from "lucide-react";

export const ApplyModal = ({ isOpen, onClose, jobTitle, positions = [] }) => {
  const [filePreview, setFilePreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      nationality: "",
      mobile: "",
      email: "",
      age: "",
      position: jobTitle || "",
      experience: "",
      cv: null,
      notes: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      nationality: Yup.string().required("Nationality is required"),
      mobile: Yup.string()
        .matches(/^[0-9+() -]*$/, "Invalid mobile number")
        .required("Mobile Number is required"),
      email: Yup.string().email("Invalid email address"),
      age: Yup.number()
        .typeError("Age must be a number")
        .positive("Age must be positive")
        .integer("Age must be a whole number")
        .required("Age is required"),
      position: Yup.string().required("Position is required"),
      experience: Yup.string().required("Work Experience Summary is required"),
      cv: Yup.mixed()
        .required("CV is required")
        .test(
          "fileType",
          "Only PDF or DOC files are allowed",
          (value) =>
            value &&
            (value.type === "application/pdf" ||
              value.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
              value.type === "application/msword")
        )
        .test(
          "fileSize",
          "File size too large (max 5MB)",
          (value) => value && value.size <= 5 * 1024 * 1024
        ),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });

        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.success(
          `Application for "${values.position}" submitted successfully!`
        );
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

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("cv", file);
      setFilePreview(file.name);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
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
        className={`relative bg-white rounded-lg shadow-xl w-full max-w-8/10 max-h-[90vh] overflow-y-auto transition-all transform ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex justify-between items-center p-4 lg:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Apply for {jobTitle || "Position"}
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
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("fullName")}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>

              {/* Nationality */}
              <div>
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("nationality")}
                />
                {formik.touched.nationality && formik.errors.nationality && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.nationality}
                  </div>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("mobile")}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.mobile}
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              {/* Age */}
              <div>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("age")}
                />
                {formik.touched.age && formik.errors.age && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.age}
                  </div>
                )}
              </div>

              {/* Position Dropdown */}
              <div>
                <select
                  name="position"
                  className="w-full border border-gray-300 bg-white text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...formik.getFieldProps("position")}
                >
                  <option value="">Select Position</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                {formik.touched.position && formik.errors.position && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.position}
                  </div>
                )}
              </div>
            </div>

            {/* Work Experience Summary */}
            <div>
              <textarea
                name="experience"
                placeholder="Work Experience Summary"
                rows={4}
                className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                {...formik.getFieldProps("experience")}
              />
              {formik.touched.experience && formik.errors.experience && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.experience}
                </div>
              )}
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Upload CV (PDF/DOC only, max 5MB)
              </label>
              <label
                htmlFor="cv-upload"
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
                id="cv-upload"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              {formik.touched.cv && formik.errors.cv && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.cv}
                </div>
              )}
            </div>

            {/* Additional Notes */}
            <div>
              <textarea
                name="notes"
                placeholder="Additional Notes (optional)"
                rows={3}
                className="w-full border border-gray-300 bg-white text-gray-800 placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                {...formik.getFieldProps("notes")}
              />
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
  );
};
