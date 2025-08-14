import Link from "next/link";

export const ButtonSeeAll = ({ href = "#", text = "Hover me" }) => {
  return (
    <Link
      href={href}
      className="
        group relative inline-flex 
        h-[calc(40px+8px)] md:h-[calc(44px+8px)] lg:h-[calc(48px+8px)] 2xl:h-[calc(52px+8px)] 
        items-center justify-center 
        rounded-full 
        bg-gray-700 
        py-1 
        pl-4 md:pl-5 lg:pl-6 2xl:pl-8 
        pr-10 md:pr-12 lg:pr-14 2xl:pr-16 
        font-medium 
        text-sm md:text-base lg:text-lg 2xl:text-xl 
        text-neutral-50
      "
    >
      <span className="z-10 pr-2">{text}</span>

      <div
        className="
        absolute right-1 inline-flex 
        h-[calc(32px+0px)] md:h-[36px] lg:h-12 2xl:h-14 
        w-[calc(32px+0px)] md:w-[36px] lg:w-12 2xl:w-14 
        items-center justify-end 
        rounded-full bg-gray-500 
        transition-[width] group-hover:w-[calc(100%-8px)]
      "
      >
        <div className="mr-2 md:mr-3.5 flex items-center justify-center">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-50 h-3.5 md:h-4 lg:h-5 2xl:h-6 w-3.5 md:w-4 lg:w-5 2xl:w-6"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
