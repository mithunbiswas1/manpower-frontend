export const ButtonLink = ({
  text,
  icon,
  href,
  width = "w-auto",
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-primary px-4 lg:px-6 2xl:px-8 py-1 lg:py-2.5 2xl:py-3 text-white ${width} ${className}`}
    >
      {/* Content with icon and text */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span>{text}</span>
      </span>

      {/* Shine animation */}
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-secondary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
          <div className="relative h-full w-8 bg-white/30"></div>
        </div>
      </span>
    </a>
  );
};
