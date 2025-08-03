export const SharedBanner = ({ title, description, bgImage }) => {
  return (
    <div
      className="relative bg-white h-screen max-h-[600px] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>

      {/* Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-4xl">
          <div className="text-center text-white">
            <h1 className="_h1 mb-8">{title}</h1>
            {description && <h3 className="_h3 font-medium">{description}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};
