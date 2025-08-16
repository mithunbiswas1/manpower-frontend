"use client";

export const ButtonSecondary = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden rounded-md bg-primary px-4 lg:px-6 2xl:px-8 py-1 lg:py-2.5 2xl:py-3 text-white transition-all duration-200
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"}
        ${className}`}
    >
      {/* Button content */}
      <span className="relative z-10">{children}</span>

      {/* Shine animation */}
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-secondary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
          <div className="relative h-full w-8 bg-white/30"></div>
        </div>
      </span>
    </button>
  );
};
