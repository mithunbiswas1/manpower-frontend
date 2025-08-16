"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import logo from "@/resource/logo.jpg";
import { ButtonDefault } from "../custom/ButtonDefault";
import { ButtonSecondary } from "../custom/ButtonSecondary";

// --- Modal with Booking-style Form ---
const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    email: "",
    // tradeLicense: null,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prev) => ({ ...prev, tradeLicense: file }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      contact: "",
      email: "",
      // tradeLicense: null,
      message: "",
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-white rounded-lg shadow-xl w-5/6 md:w-4/6 max-w-5xl mx-4 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-primary">
                Request Quotation
              </h2>
              <ButtonDefault
                onClick={handleClose}
                className="text-gray-500 cursor-pointer hover:bg-secondary rounded-sm hover:text-white transition-all duration-200"
              >
                <X size={24} />
              </ButtonDefault>
            </div>

            {/* Form / Booking-style layout */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
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
                </div>
                {/* 
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Trade License
                  </label>
                  <input
                    type="file"
                    name="tradeLicense"
                    onChange={handleFileChange}
                    className="border rounded px-3 py-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                  />
                </div> */}

                <textarea
                  name="message"
                  placeholder="Message / Instructions"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border rounded px-3 py-2 w-full"
                  rows={3}
                />

                <ButtonSecondary type="submit" className="w-full mt-2">
                  Submit Request
                </ButtonSecondary>
              </form>
            ) : (
              <div className="text-center py-10">
                <p className="text-green-600 text-lg font-semibold">
                  ✅ Your request has been submitted successfully!
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
  );
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/get-service" },
    { name: "Projects", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "Career", path: "/career" },
    { name: "Reach Us", path: "/reach-us" },
  ];

  const closeAllMenus = () => {
    setDrawerOpen(false);
    setSubmenuOpen(null);
    setDesktopSubmenuOpen(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
    setSubmenuOpen(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeAllMenus();
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-semibold">
        <div className="_max_width">
          <div className="flex items-center justify-between h-16">
            <div>
              <Link href="/" onClick={closeAllMenus}>
                <Image
                  src={logo}
                  height={184}
                  width={768}
                  className="h-12 w-full"
                  alt="Company Logo"
                />
              </Link>
            </div>

            <div className="hidden lg:flex space-x-8 text-gray-700 font-semibold">
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.path} onClick={closeAllMenus}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <ButtonDefault onClick={openModal}>
                Request Quotation
              </ButtonDefault>
            </div>

            <div className="lg:hidden">
              <button onClick={toggleDrawer} className="text-primary">
                {drawerOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-40 shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="text-xl font-bold text-primary">MyClinic</div>
              <button onClick={toggleDrawer}>
                <X size={28} className="text-primary" />
              </button>
            </div>

            <ul className="space-y-4 text-gray-800 text-lg font-semibold">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} onClick={closeAllMenus}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={openModal} className="w-full">
                  Request Quotation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
