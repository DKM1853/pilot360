/** @jsxImportSource react */
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import bgImage from "../assets/bg-2.jpeg";
import usaFlag from "../assets/USA.png";
import europeFlag from "../assets/europe.jpg";
import SAFlag from "../assets/south_african.png";
import canadaFlag from "../assets/canada.svg";
import NZFlag from "../assets/newzealand-flag.svg";
import ausFlag from "../assets/aus.png";
import indFlag from "../assets/india.svg";
import { useRouter } from "next/navigation"; // Use next/navigation in Next.js 13+

const CountryCard = ({ countryName, flagImage }) => {
  const router = useRouter();

  const handleLearnMore = () => {
    const countrySlug = countryName.replace(/\s+/g, "-");
    router.push(`/Pilot-Training-in-${countrySlug}`);
  };
  return (
    <div className="min-w-[250px] lg:min-w-[30%] h-[235px] bg-[#A5A5A5] bg-opacity-20 border-2 border-[#A5A5A5] text-white rounded-[24px] p-6 flex flex-col justify-between snap-center">
      <div className="flex items-center space-x-4 mt-[6%] ms-2">
        <Image
          src={flagImage}
          alt="Pilot 360"
          className="w-[60px] h-[45px] bg-[#F0F5FF] p-[5px] border rounded-[8px]"
        />
        <h3 className="text-lg font-semibold">{countryName}</h3>
      </div>
      <button
        onClick={handleLearnMore}
        className="flex items-center justify-between bg-[#801B2B] text-white px-4 py-2 rounded-[16px] shadow hover:bg-[#991E33] w-full h-[60px]"
      >
        Learn More
        <div className="bg-white rounded-full p-[6px]">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17.3086L17 7.30859"
              stroke="#801B2B"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7.30859H17V17.3086"
              stroke="#801B2B"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};
const TrainingSection = () => {
  const countries = [
    { name: "USA", flag: usaFlag },
    { name: "South Africa", flag: SAFlag },
    { name: "Canada", flag: canadaFlag },
    { name: "NZ", flag: NZFlag },
    { name: "Australia", flag: ausFlag },
    { name: "Europe", flag: europeFlag },
    { name: "India", flag: indFlag },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef(null);
  const [dotCount, setDotCount] = useState(7);

  useEffect(() => {
    const updateDotCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setDotCount(5); // Laptop
      else if (width >= 768) setDotCount(6); // Tablet
      else setDotCount(7); // Mobile
    };

    updateDotCount(); // Initial set
    window.addEventListener("resize", updateDotCount);
    return () => window.removeEventListener("resize", updateDotCount);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.firstChild.offsetWidth;
        const slideIndex = Math.round(scrollLeft / cardWidth);
        setActiveSlide(slideIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSlide = (index) => {
    setActiveSlide(index);
    const scrollContainer = scrollContainerRef.current;
    const cardWidth = scrollContainer.firstChild.offsetWidth;
    scrollContainer.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full h-auto bg-cover bg-repeat px-4 py-12 rounded-3xl relative z-[20] mt-5"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mb-8">
        <h2 className="text-white text-xl md:text-3xl font-bold mb-4 lg:mb-0">
          Our Partnered Pilot Training Schools{" "}
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex lg:space-x-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-4 md:gap-8 md:mx-6"
        >
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              countryName={country.name}
              flagImage={country.flag}
            />
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: dotCount }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeSlide === index ? "bg-[#801B2B]" : "bg-gray-400"
            }`}
            onClick={() => handleSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;
