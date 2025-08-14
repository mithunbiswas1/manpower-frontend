import React from "react";

const QuickStats = () => {
  const stats = [
    { value: "15,000+", label: "Workers Deployed" },
    { value: "20+", label: "Sectors Served" },
    { value: "15+", label: "Years of Experience" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-6"
            >
              <span className="_h2 font-bold text-primary">{stat.value}</span>
              <span className="mt-2 _p">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
