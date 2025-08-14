// components/custom/SectionSubHeading.jsx
"use client";

export const SectionSubHeading = ({
  icon: Icon,
  className,
  iconClass,
  titleClass,
  children,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {Icon && <Icon className={`text-primary w-6 h-6 mr-2 ${iconClass}`} />}
      <h2 className={`_h3 !text-gray-500 !font-light ${titleClass}`}>
        {children}
      </h2>
    </div>
  );
};
