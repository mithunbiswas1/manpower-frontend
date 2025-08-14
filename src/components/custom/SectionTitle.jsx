// components/custom/SectionTitle.jsx
"use client";

export const SectionTitle = ({ children, className }) => {
  return (
    <h3
      className={`_h2 max-w-5xl mx-auto text-gray-500 uppercase ${className}`}
    >
      {children}
    </h3>
  );
};
