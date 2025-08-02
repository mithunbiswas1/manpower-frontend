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
      <h5 className={`_h5 text-gray-700 ${titleClass}`}>{children}</h5>
    </div>
  );
};
