"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { CheckCircle } from "lucide-react";

export const SharedAbout2 = () => {
  const highlights = [
    "Integrity & Transparency",
    "Quality & Efficiency",
    "Safety & Compliance",
    "Client Satisfaction",
  ];

  return (
    <section>
      <div className="bg-gray-100">
        <div className="_max_width pt-20 pb-16">
          <SectionTitle className="mb-4 text-center">Core Values:</SectionTitle>
          <ul className="space-y-4 max-w-60 mx-auto">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <CheckCircle className="text-primary w-5 h-5 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
