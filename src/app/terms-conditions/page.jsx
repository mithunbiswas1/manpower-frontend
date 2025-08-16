"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { Paragraph } from "@/components/custom/Paragraph";
import { SharedBanner } from "@/components/shared/SharedBanner";
import banner_image from "@/resource/banner_image_3.jpg";

export default function TermsAndConditions() {
  const bannerData = {
    title: "Terms and Conditions",
    description:
      "Explore our portfolio of successful projects showcasing our expertise, innovative solutions.",
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
        <SectionTitle className="mb-8 text-center">
          Terms and Conditions
        </SectionTitle>

        <div className="space-y-10 max-w-4xl mx-auto text-justify">
          {/* Introduction */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              1. Introduction
            </h4>
            <Paragraph>
              Welcome to Box Craft Packing Services. By accessing or using our
              services, you agree to be bound by these Terms and Conditions. If
              you do not agree, please discontinue using our website and
              services.
            </Paragraph>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              2. Services
            </h4>
            <Paragraph>
              We provide manpower supply, packing, and cleaning services in the
              UAE. All services are delivered according to applicable laws and
              company policies. We reserve the right to update, modify, or
              discontinue services without prior notice.
            </Paragraph>
          </div>

          {/* User Responsibilities */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              3. User Responsibilities
            </h4>
            <Paragraph>
              Clients are responsible for providing accurate information,
              complying with UAE laws, and ensuring a safe work environment for
              supplied manpower. Misuse of our services may lead to termination
              of the agreement.
            </Paragraph>
          </div>

          {/* Payments */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              4. Payments
            </h4>
            <Paragraph>
              Payment terms will be agreed upon prior to service commencement.
              Late payments may result in service suspension and applicable
              penalties. All payments must be made in accordance with UAE
              financial regulations.
            </Paragraph>
          </div>

          {/* Liability */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              5. Limitation of Liability
            </h4>
            <Paragraph>
              While we ensure the highest standards of service, Box Craft
              Packing Services will not be held liable for indirect, incidental,
              or consequential damages arising from the use of our services.
            </Paragraph>
          </div>

          {/* Termination */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              6. Termination
            </h4>
            <Paragraph>
              We reserve the right to terminate services in case of breach of
              these Terms and Conditions, non-payment, or unlawful use of our
              manpower and resources.
            </Paragraph>
          </div>

          {/* Governing Law */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              7. Governing Law
            </h4>
            <Paragraph>
              These Terms and Conditions are governed by the laws of the United
              Arab Emirates. Any disputes will be resolved under UAE
              jurisdiction.
            </Paragraph>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              8. Contact Us
            </h4>
            <Paragraph>
              For any questions regarding these Terms and Conditions, please
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
