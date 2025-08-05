// app/services/[id]/page.jsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { services } from "@/data/services"; // Import the shared data
import { ButtonPrimary } from "@/components/custom/ButtonPrimary";
import { Paragraph } from "@/components/custom/Paragraph";

export default function ServiceDetailPage() {
  const router = useRouter();
  const params = useParams();
  const serviceId = parseInt(params.id, 10);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Service Not Found
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          The service you are looking for does not exist.
        </p>
        <ButtonPrimary onClick={() => router.push("/")}>
          Go to Home
        </ButtonPrimary>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
          <div className="p-4 bg-white text-primary rounded-full shadow-lg mb-4">
            <Icon size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center p-4">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="_max_width px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Our {service.title}
            </h2>
            <Paragraph className="text-gray-600 leading-relaxed text-lg mb-6">
              {service.description}
            </Paragraph>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our commitment to providing skilled and reliable {service.title}{" "}
              is unmatched. We ensure all personnel are thoroughly vetted and
              trained to meet your specific needs, guaranteeing high-quality
              results and seamless operations.
            </p>
            <div className="flex mt-8 gap-4">
              {/* This is the button you asked about */}
              <ButtonPrimary
                link={`/get-service?service=${encodeURIComponent(
                  service.title
                )}`}
                className=""
              >
                Get Services
              </ButtonPrimary>
              <button
                onClick={() => router.back()}
                className="px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-200 transition-colors font-semibold"
              >
                Go Back
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Key Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <Icon size={20} />
                <span>Customizable Solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon size={20} />
                <span>Thoroughly Vetted Personnel</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon size={20} />
                <span>Flexible Staffing Options</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon size={20} />
                <span>Dedicated Support Team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
