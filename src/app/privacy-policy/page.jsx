"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";

export default function PrivacyPolicy() {
  const bannerData = {
    title: "Privacy Policy",
    description:
      "Learn how Box Craft Packing Services collects, uses, and protects your personal information.",
    image: banner_image,
  };

  return (
    <>
      <SharedBanner
        title={bannerData.title}
        description={bannerData.description}
        bgImage={bannerData.image.src}
      />

      <section className="_max_width pt-20 pb-16">
        {/* Page Title */}
        <SectionTitle className="mb-8 text-center">Privacy Policy</SectionTitle>

        <div className="space-y-10 max-w-4xl mx-auto text-justify">
          {/* Introduction */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              1. Introduction
            </h3>
            <Paragraph>
              At Box Craft Packing Services, we respect your privacy and are
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, and safeguard your information when
              you use our website and services.
            </Paragraph>
          </div>

          {/* Information We Collect */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2. Information We Collect
            </h3>
            <Paragraph>
              We may collect personal information such as your name, email,
              phone number, and service details when you contact us or use our
              services. We may also collect non-personal data like browser type,
              device information, and usage statistics.
            </Paragraph>
          </div>

          {/* How We Use Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3. How We Use Your Information
            </h3>
            <Paragraph>The information we collect is used to:</Paragraph>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Provide and improve our services</li>
              <li>Process bookings and payments</li>
              <li>Respond to inquiries and customer support</li>
              <li>Comply with UAE legal requirements</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4. Sharing of Information
            </h3>
            <Paragraph>
              We do not sell or trade your personal information. Data may only
              be shared with trusted third parties when necessary for service
              delivery, payment processing, or to comply with UAE laws.
            </Paragraph>
          </div>

          {/* Data Security */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              5. Data Security
            </h3>
            <Paragraph>
              We implement security measures to protect your data against
              unauthorized access, alteration, or disclosure. However, no online
              method of transmission is completely secure, and we cannot
              guarantee absolute protection.
            </Paragraph>
          </div>

          {/* Cookies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              6. Cookies
            </h3>
            <Paragraph>
              Our website may use cookies to improve your browsing experience.
              You may choose to disable cookies in your browser settings, but
              this may affect site functionality.
            </Paragraph>
          </div>

          {/* Your Rights */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              7. Your Rights
            </h3>
            <Paragraph>
              You have the right to access, update, or request deletion of your
              personal data. To exercise these rights, please contact us using
              the details below.
            </Paragraph>
          </div>

          {/* Changes to Policy */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              8. Changes to this Privacy Policy
            </h3>
            <Paragraph>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </Paragraph>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              9. Contact Us
            </h3>
            <Paragraph>
              If you have any questions about this Privacy Policy, please
              contact Box Craft Packing Services at{" "}
              <span className="font-medium text-gray-800">
                info@boxcraftuae.com
              </span>
              .
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
}
