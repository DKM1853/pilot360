"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import plane from "../assets/duration_bg.png";

export default function TypeRatingDuration({
  trainingTitle,
  trainingDescription,
  hours,
  days,
}) {
  return (
    <div className="relative bg-white py-16 mt-36 font-onest">
      {/* First Container - Title & Description */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-[#181818] text-white rounded-xl px-6 py-8 md:py-10 md:px-12 text-center mx-auto shadow-lg z-20 w-[97%] md:w-[80%] lg:w-[65%]">
        <h2 className="text-[24px] md:text-[54px] font-bold">
          {trainingTitle}
        </h2>
        <p className="mt-3 text-[22px] md:text-base text-white">
          {trainingDescription}
        </p>
      </div>

      {/* Second Container - Duration & Animated Background */}
      <div className="relative bg-gradient-to-r from-[#801B2B] to-[#5E101D] rounded-xl text-white text-center overflow-hidden py-[9rem] lg:py-25 xl:py-26">
        {/* Background Image Animation */}
        {/* Desktop Animation (Left to Right) */}
        <motion.div
          initial={{ x: "-100%", y: 0, rotate: 0 }} // Start from left
          animate={{
            x: ["-100%", "100%"], // Move fully left to right
            y: [0, 0], // No vertical movement
            rotate: 0, // Keep normal
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute left-0 w-full flex justify-center md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-[-30%] hidden md:flex"
        >
          <Image
            src={plane}
            alt="Airplane"
            className="w-auto md:max-w-[500px] lg:max-w-[600px] opacity-50"
          />
        </motion.div>

        {/* Mobile Animation (Top to Bottom) with Rotation */}
        <motion.div
          initial={{ y: "-100%", x: 90, rotate: 90 }} // Start from top & rotated
          animate={{
            y: ["-100%", "100%"], // Move top to bottom
            x: [0, 0], // Stay centered horizontally
            rotate: 90, // Keep rotated at 90 degrees
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute top-0 w-full flex justify-center md:hidden"
        >
          <Image
            src={plane}
            alt="Airplane"
            className="w-auto max-w-[300px] opacity-50"
          />
        </motion.div>

        {/* Title */}
        <h3 className="text-[24px] md:text-[54px] font-bold z-10 relative mt-12">
          TOTAL DURATION
        </h3>

        {/* Duration */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-6 z-10 relative md:space-x-20 space-y-6 md:space-y-0">
          {/* Hours Block */}
          <div className="flex flex-row items-center justify-center">
            <p className="text-[54px] font-bold">184</p>
            <p className="text-[38px] text-[#DC8996] ms-4">hours</p>
          </div>
          {/* Separator */}
          <svg
            width="24"
            height="143"
            viewBox="0 0 24 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33333 11C1.33333 16.891 6.10896 21.6667 12 21.6667C17.891 21.6667 22.6667 16.891 22.6667 11C22.6667 5.10896 17.891 0.333333 12 0.333333C6.10896 0.333333 1.33333 5.10896 1.33333 11ZM12 142.547L23.547 131L12 119.453L0.452994 131L12 142.547ZM10 11V131H14V11H10Z"
              fill="#DC8996"
            />
          </svg>

          {/* Days Block */}
          <div className="flex flex-row items-center">
            <p className="text-[54px] font-bold">42</p>
            <p className="text-[38px] text-[#DC8996] ms-4">Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
