"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { X, UploadCloud, CheckCircle, Loader2 } from "lucide-react";
import { useCreateApplicationApiMutation } from "@/redux/features/applicationApi";

// Updated Yup validation schema without nationality, age, experience
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9+() -]*$/, "Invalid mobile number")
    .required("Mobile Number is required"),
  email: Yup.string().email("Invalid email address"),
  position: Yup.string().required("Position is required"),
  image: Yup.mixed()
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
});

export const ApplyModal = ({ isOpen, onClose, jobTitle, positions = [] }) => {
  const [filePreview, setFilePreview] = useState(null);

  // RTK Mutation
  const [createApplicationApi, { isLoading }] =
    useCreateApplicationApiMutation();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobile: "",
      email: "",
      position: jobTitle || "",
      image: null,
      notes: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) =>
          formData.append(key, value)
        );

        await createApplicationApi(formData).unwrap();

        toast.success(
          `Application for "${values.position}" submitted successfully!`
        );
        resetForm();
        setFilePreview(null);
        onClose();
      } catch (error) {
        toast.error(
          error?.data?.message ||
            "Failed to submit application. Please try again."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      setFilePreview(file.name);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl w-5/6 md:w-4/6 max-w-5xl mx-4 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-primary text-center">
                Apply for {jobTitle || "Position"}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 cursor-pointer hover:bg-secondary rounded-sm hover:text-white transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={formik.handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border rounded px-3 py-2 w-full"
                    {...formik.getFieldProps("fullName")}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="border rounded px-3 py-2 w-full"
                    {...formik.getFieldProps("mobile")}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border rounded px-3 py-2 w-full"
                    {...formik.getFieldProps("email")}
                  />
                  <select
                    className="border rounded px-3 py-2 w-full"
                    {...formik.getFieldProps("position")}
                  >
                    <option value="">Select Position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
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
                    name="image"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {formik.touched.image && formik.errors.image && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.image}
                    </div>
                  )}
                </div>

                <textarea
                  placeholder="Additional Notes (optional)"
                  rows={3}
                  className="border rounded px-3 py-2 w-full mt-4"
                  {...formik.getFieldProps("notes")}
                />

                <button
                  type="submit"
                  disabled={formik.isSubmitting || isLoading}
                  className="w-full mt-4 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors flex justify-center items-center"
                >
                  {formik.isSubmitting || isLoading ? (
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
