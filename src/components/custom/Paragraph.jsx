// components/custom/Paragraph.jsx

export const Paragraph = ({ children, className }) => {
  return (
    <p className={`_p text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};
