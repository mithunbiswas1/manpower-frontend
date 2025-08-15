"use client";

import { SectionTitle } from "@/components/custom/SectionTitle";
import { CheckCircle } from "lucide-react";

export const SharedAbout2 = () => {
  const highlights = [
    "100% compliant with UAE labour law & visa regulations",
    "Multi-national recruitment sourcing (Bangladesh, India, Nepal, etc.)",
    "End-to-end HR and PRO services",
    "Real-time site supervision and reporting",
    "Custom staffing solutions based on your workflow",
  ];

  return (
    <section>
      <div className="bg-gray-100">
        <div className="_max_width pt-20 pb-16">
          <SectionTitle className="mb-4 text-center">
            What Sets Us Apart
          </SectionTitle>
          <ul className="space-y-4 max-w-xl mx-auto">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 leading-relaxed"
              >
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
