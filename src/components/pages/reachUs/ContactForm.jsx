"use client";

import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    text: "",
  });

  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Phone / Mobile Number",
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "Enter your address",
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Static success response simulation
    try {
      console.log("Form submitted:", formData);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        text: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="py-8 px-4 bg-primary backdrop-blur-md rounded-lg shadow-md text-white">
      <div className="max-w-screen-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fields.map((field) => (
              <div key={field.name}>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full border border-primary bg-white text-black placeholder-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Please provide more details..."
              rows="4"
              className="w-full border border-primary bg-white text-black placeholder-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="flex justify-center">
            <ButtonPrimary className="bg-white">Sent</ButtonPrimary>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
