"use client";

import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { ButtonSubmit } from "../custom/ButtonSubmit";

import { useCreateContactApiMutation } from "@/redux/features/contactApi";

export const socialLinks = [
  { id: 1, name: "LinkedIn", href: "#", icon: Linkedin },
  { id: 2, name: "Instagram", href: "#", icon: Instagram },
  { id: 3, name: "Facebook", href: "#", icon: Facebook },
  { id: 4, name: "Twitter", href: "#", icon: Twitter },
  { id: 5, name: "YouTube", href: "#", icon: Youtube },
];

export const SharedContact = () => {
  const [createContact, { isLoading }] = useCreateContactApiMutation();
  const formRef = useRef(null);

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
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
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
          8ᵗʰ Floor, Damas Tower, Sharjah, United Arab Emirates.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338553.8078434383!2d54.2289643279561!3d24.386473916422997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1755348364412!5m2!1sen!2sbd"
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
