"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonSecondary } from "@/components/custom/ButtonSecondary";
import { ButtonDefault } from "@/components/custom/ButtonDefault";
import { ShoppingCart, X } from "lucide-react";

export const BookingSummary = ({
  booking,
  onBookNow,
  onClose,
  onSubmission,
  isModalOpen,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    email: "",
    tradeLicense: null, // New field for the file upload
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const hasBookings = Object.keys(booking).length > 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, tradeLicense: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Request Submitted:", formData);
    // You would typically send the formData to a server here, including the file.
    setSubmitted(true);
    onSubmission();
  };

  const handleClose = () => {
    onClose();
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      contact: "",
      email: "",
      tradeLicense: null,
      message: "",
    });
  };

  return (
    <>
      {/* Booking Summary Card */}
      <div className="p-4 rounded-lg bg-white shadow-md flex flex-col">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ShoppingCart size={24} /> Booking Summary
        </h3>
        <div className="flex-grow space-y-2">
          {hasBookings ? (
            Object.keys(booking).map((serviceName) => (
              <div key={serviceName} className="border-b pb-2 mb-2">
                <h4 className="font-semibold text-gray-800 mb-1">
                  {serviceName}
                </h4>
                <ul className="pl-4">
                  {Object.keys(booking[serviceName]).map((roleName) => (
                    <li key={roleName} className="text-sm text-gray-600">
                      {roleName} - Qty {booking[serviceName][roleName]}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 italic mt-8 mb-4">
              Your booking summary will appear here.
            </p>
          )}
        </div>
        <div className="mt-auto pt-4 border-t">
          <ButtonSecondary
            onClick={onBookNow}
            className="w-full"
            disabled={!hasBookings}
          >
            Book Now
          </ButtonSecondary>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-xl w-5/6 md:w-4/6 max-w-5xl mx-4 p-6 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-primary">
                  Custom Quote Form
                </h2>
                <ButtonDefault
                  onClick={handleClose}
                  className="text-gray-500 cursor-pointer hover:bg-secondary rounded-sm hover:text-white transition-all duration-200"
                >
                  <X size={24} />
                </ButtonDefault>
              </div>

              {!submitted ? (
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border rounded px-3 py-2 w-full"
                      required
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border rounded px-3 py-2 w-full"
                      required
                    />
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      value={formData.contact}
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
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Trade License
                      </label>
                      <input
                        type="file"
                        name="tradeLicense"
                        onChange={handleFileChange}
                        className="border rounded px-3 py-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message / Special Instructions"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border rounded px-3 py-2 w-full"
                    rows={3}
                  />
                  <ButtonSecondary type="submit" className="w-full mt-2">
                    Get My Custom Quote Now
                  </ButtonSecondary>
                </form>
              ) : (
                <div className="text-center py-10">
                  <p className="text-green-600 text-lg font-semibold">
                    ✅ Thank you. Our team will respond with a quotation within
                    24 hours.
                  </p>
                  <ButtonSecondary onClick={handleClose} className="mt-4">
                    Close
                  </ButtonSecondary>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
