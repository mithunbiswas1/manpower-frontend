"use client";

import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { ButtonSubmit } from "../custom/ButtonSubmit";

import { useCreateContactApiMutation } from "@/redux/features/contactApi";
import { useGetAllBusinessSettingQuery } from "@/redux/features/businessSettingApi";

export const socialLinks = [
  { id: 1, name: "Facebook", href: "#", icon: Facebook },
  { id: 2, name: "Instagram", href: "#", icon: Instagram },
  { id: 3, name: "Linkdin", href: "#", icon: Linkedin },
  { id: 4, name: "Twitter", href: "#", icon: Twitter },
  { id: 5, name: "YouTube", href: "#", icon: Youtube },
];

export const SharedContact = () => {
  const formRef = useRef(null);
  const [createContact, { isLoading }] = useCreateContactApiMutation();
  const { data: businessSettingData } = useGetAllBusinessSettingQuery();
  const businessSetting = businessSettingData?.data || {};
  console.log(businessSetting, "businessSettingData");

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    company: Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    phone: "",
    company: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await createContact(values).unwrap();
      toast.success("Contact submitted successfully!");
      resetForm();
    } catch (err) {
      console.error("Contact form submission error:", err);
      toast.error("Failed to submit contact form.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
        Let us know how we may help you?
      </h2>
      <p className="text-gray-700 mb-2">Thank you for visiting our page!</p>
      <p className="text-gray-700 mb-2">
        Dial <span className="font-semibold">Box Craft</span> or send us an
        email now! <br />
        Our team will be glad to assist you.
      </p>
      <p className="text-gray-700 mb-6">
        Follow us on social media for our latest posts and events.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4 mb-10">
        {socialLinks
          .filter((item) => businessSetting[item.name.toLowerCase()]) // Only show if data exists
          .map((item) => {
            const Icon = item.icon;
            const href = businessSetting[item.name.toLowerCase()]; // Get value from API
            return (
              <a
                key={item.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-md bg-primary hover:bg-primary/90 transition"
                aria-label={item.name}
              >
                <Icon size={20} className="text-white" />
              </a>
            );
          })}
      </div>

      {/* Contact Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formRef}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-2xl space-y-6 text-left">
            {/* Name */}
            <div>
              <label className="text-gray-700 block">Name</label>
              <Field
                name="name"
                type="text"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-500 block">Phone</label>
              <Field
                name="phone"
                type="text"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Company */}
            <div>
              <label className="text-gray-500 block">Company</label>
              <Field
                name="company"
                type="text"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
              <ErrorMessage
                name="company"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-500 block">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-500 block">Message</label>
              <Field
                as="textarea"
                name="message"
                rows="3"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <ButtonSubmit
                type="submit"
                className="!bg-primary"
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? "Sending..." : "Submit"}
              </ButtonSubmit>
            </div>
          </Form>
        )}
      </Formik>

      {/* Corporate Office Section */}
      <div className="mt-20 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-gray-700">Corporate Office</h3>
        <p className="mt-2 mb-8 text-sm text-gray-600 md:text-base">
          {businessSetting.address} <br />
          Phone:{" "}
          <a
            href={`tel:${businessSetting.phone}`}
            className="text-primary hover:underline"
          >
            {businessSetting.phone}
          </a>
          <br />
          Email:{" "}
          <a
            href={`mailto:${businessSetting.email}`}
            className="text-primary hover:underline"
          >
            {businessSetting.email}
          </a>
        </p>

        {businessSetting.map && (
          <iframe
            src={businessSetting.map}
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};
