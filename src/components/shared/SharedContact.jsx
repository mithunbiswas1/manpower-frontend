"use client";

import { Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Formik, Form, Field } from "formik";

export const SharedContact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
        Let us know how we may help you?
      </h2>
      <p className="text-gray-700 mb-2">Thank you for visiting our page!</p>
      <p className="text-gray-700 mb-2">
        Dial <span className="font-semibold">800-TABASCO</span> or send us an
        email now! <br />
        Our team will be glad to assist you.
      </p>
      <p className="text-gray-700 mb-6">
        Follow us on social media for our latest posts and events.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4 mb-10">
        <a
          href="#"
          className="p-3 border rounded-md hover:bg-gray-100 transition"
        >
          <Linkedin size={20} className="text-gray-600" />
        </a>
        <a
          href="#"
          className="p-3 border rounded-md hover:bg-gray-100 transition"
        >
          <Instagram size={20} className="text-gray-600" />
        </a>
        <a
          href="#"
          className="p-3 border rounded-md hover:bg-gray-100 transition"
        >
          <Facebook size={20} className="text-gray-600" />
        </a>
        <a
          href="#"
          className="p-3 border rounded-md hover:bg-gray-100 transition"
        >
          <Twitter size={20} className="text-gray-600" />
        </a>
        <a
          href="#"
          className="p-3 border rounded-md hover:bg-gray-100 transition"
        >
          <Youtube size={20} className="text-gray-600" />
        </a>
      </div>

      {/* Contact Form */}
      <Formik
        initialValues={{
          name: "",
          contact: "",
          company: "",
          email: "",
          message: "",
        }}
        onSubmit={(values) => {
          console.log("Form Values:", values);
        }}
      >
        {() => (
          <Form className="w-full max-w-2xl space-y-6 text-left">
            {/* Name */}
            <div>
              <label className="text-gray-700 block">Name</label>
              <Field
                name="name"
                type="text"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="text-gray-500 block">Contact</label>
              <Field
                name="contact"
                type="text"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
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
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-500 block">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-500 block">Message</label>
              <Field
                as="textarea"
                name="message"
                rows="1"
                className="w-full border-b border-gray-300 outline-none py-0.5 px-2 focus:border-gray-600"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Corporate Office Section */}
      <div className="mt-20 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-gray-700">Corporate Office</h3>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          8ᵗʰ Floor, Damas Tower, Sharjah, United Arab Emirates.
        </p>
        <div className="mt-6">
          {/* Replace this with an actual map icon from lucid-react or a custom SVG */}
          <svg
            className="h-12 w-12 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
