"use client";
import React from "react";

export default function AviationSection({
  country,
  AviationTraining,
  AviationTraining1,
  WeatherConditions,
  LifeIn,
}) {
  const BorderWithCircle = ({ color }) => {
    return (
      <div
        className="relative w-90 h-1 mt-2 mb-4"
        style={{ backgroundColor: color }}
      >
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: color,
            right: "-10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
    );
  };

  const BorderWithCircleViolateColor = ({ color }) => {
    return (
      <div
        className="relative w-[15rem] md:w-80 h-1 mt-2 mb-4"
        style={{ backgroundColor: color }}
      >
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: color,
            right: "-10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        ></div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-12 lg:px-20 py-10 bg-white">
      {/* Large Container */}
      <div className="bg-[#E6D1D5] rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg w-full max-w-5xl relative">
        <h1 className="text-[#801B2B] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Aviation Training
        </h1>
        <BorderWithCircleViolateColor color="#801B2B" />
        <p className="text-[#801B2B] text-[15px] md:text-lg leading-relaxed">
          {AviationTraining}
        </p>
        <p className="text-[#801B2B] text-[15px] md:text-lg leading-relaxed mt-4 mb-4">
          {AviationTraining1}
        </p>
      </div>

      {/* Two Small Containers (Stacked in Mobile, Side-by-Side in Larger Screens) */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl mt-[-3%] gap-6">
        {/* Weather Conditions */}
        <div className="bg-[#F4F6F5] rounded-2xl p-6 md:p-8 shadow-lg w-full md:w-1/2 border border-gray-300 relative">
          <h2 className="text-[#2353AB] text-xl md:text-2xl font-bold mb-2">
            Weather Conditions
          </h2>
          <BorderWithCircle color="#2353AB" />
          <p className="text-[#4A3E3E] text-[14px] md:text-lg leading-relaxed">
            {WeatherConditions}
          </p>
        </div>

        {/* Life in United States */}
        <div className="bg-[#F4F6F5] rounded-2xl p-6 md:p-8 shadow-lg w-full md:w-1/2 border border-gray-300 relative">
          <h2 className="text-[#2353AB] text-xl md:text-2xl font-bold mb-2">
            Life in {country}
          </h2>
          <BorderWithCircle color="#2353AB" />
          <p className="text-[#4A3E3E] text-[14px] md:text-lg leading-relaxed">
            {LifeIn}
          </p>
        </div>
      </div>
    </div>
  );
}
