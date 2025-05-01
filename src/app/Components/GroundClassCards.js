"use client";
import { useState } from "react";
import bgImage from "../assets/DGCA-card-bg.png";

export default function GroundClassCards({
  subjectTitle,
  subjectDescription,
  subjectContent,
}) {
  const [cards, setCards] = useState(subjectContent);
  // Moves the last card to the front
  const rotateCards = () => {
    setCards((prevCards) => {
      const lastCard = prevCards[prevCards.length - 1];
      return [lastCard, ...prevCards.slice(0, prevCards.length - 1)];
    });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain", // Ensures the image covers the full container
        backgroundPosition: "center", // Centers the background
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 md:mt-16 sm:px-6 md:px-8 py-4">
        {/* Header */}
        <div className="text-center">
          <button className="bg-[#fff] text-black py-1 px-3 rounded-full text-[16px] md:text-[20px] uppercase tracking-wide border border-black">
            Why Choose Us
          </button>
          <h2 className="text-[24px] md:text-[54px] lg:text-[64px] font-bold mt-3 items-center px-2">
            {/* Subjects in <span className="text-[#801B2B]">DGCA CPL</span> Ground
            Classes */}
            {subjectTitle}
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mt-2 text-[15px] md:text-[24px]">
            {subjectDescription}
          </p>
        </div>

        {/* Card Container */}
        <div className="relative flex items-center justify-end mt-8 sm:pr-10">
          {/* Left Arrow */}
          <button
            onClick={rotateCards}
            className="absolute left-2 sm:left-0 z-20 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all duration-300"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" // Adjust SVG size based on screen size
              viewBox="0 0 62 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9204 31.4985L38.4016 40.9797L34.085 45.3735L20.21 31.4985L34.085 17.6235L38.4016 22.0172L28.9204 31.4985ZM31.0016 62.3318C35.2669 62.3318 39.2752 61.5224 43.0266 59.9037C46.778 58.285 50.0412 56.0881 52.8162 53.3131C55.5912 50.5381 57.7881 47.2749 59.4068 43.5235C61.0256 39.7721 61.835 35.7638 61.835 31.4985C61.835 27.2332 61.0256 23.2249 59.4068 19.4735C57.7881 15.7221 55.5912 12.4589 52.8162 9.68391C50.0412 6.90891 46.778 4.71204 43.0266 3.09329C39.2752 1.47454 35.2669 0.665161 31.0016 0.665161C26.7364 0.665161 22.728 1.47454 18.9766 3.09329C15.2252 4.71204 11.962 6.90891 9.18704 9.68391C6.41204 12.4589 4.21517 15.7221 2.59642 19.4735C0.977673 23.2249 0.168297 27.2332 0.168297 31.4985C0.168297 35.7638 0.977673 39.7721 2.59642 43.5235C4.21517 47.2749 6.41204 50.5381 9.18704 53.3131C11.962 56.0881 15.2252 58.285 18.9766 59.9037C22.728 61.5224 26.7364 62.3318 31.0016 62.3318ZM31.0016 56.1652C24.1155 56.1652 18.2829 53.7756 13.5037 48.9964C8.72454 44.2172 6.33496 38.3846 6.33496 31.4985C6.33496 24.6124 8.72454 18.7797 13.5037 14.0006C18.2829 9.22141 24.1155 6.83183 31.0016 6.83183C37.8877 6.83183 43.7204 9.22141 48.4995 14.0006C53.2787 18.7797 55.6683 24.6124 55.6683 31.4985C55.6683 38.3846 53.2787 44.2172 48.4995 48.9964C43.7204 53.7756 37.8877 56.1652 31.0016 56.1652Z"
                fill="#801B2B"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="relative flex w-full max-w-[90%] h-[400px] sm:h-[400px] md:h-[450px] justify-end items-center overflow-hidden">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#801B2B] text-white rounded-xl shadow-lg border-2 border-[#801B2B] absolute w-[280px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[400px] overflow-hidden transition-all duration-500"
                style={{
                  left: `${index * 200}px`, // Adjust spacing for different screen sizes
                  zIndex: `${cards.length - index}`,
                  //   opacity: `${1 - index * 0.1}`,
                  transform: `scale(1)`,
                  boxShadow: "10px 0px 20px rgba(255, 255, 255, 0.6)", // Right-side white shadow
                }}
              >
                {/* Card Header */}
                <div className="bg-[#E6D1D5] text-[#801B2B] py-3 sm:py-4 px-4 sm:px-6 font-bold text-lg sm:text-2xl text-center border-b border-[#801B2B]">
                  <div className="flex flex-row items-center text-center justify-center">
                    <p className="text-[24px] md:text-[38px]">{card.title}</p>
                    <svg
                      className="text-sm"
                      width="48"
                      height="48"
                      viewBox="0 0 55 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1668_978"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="48"
                        height="48"
                      >
                        <rect x="0.5" width="54" height="54" fill="#801B2B" />
                      </mask>
                      <g mask="url(#mask0_1668_978)">
                        <path
                          d="M22.8309 47.5312L17.2621 37.1813L6.91211 31.6125L10.9059 27.675L19.0621 29.0813L24.7996 23.3438L6.96836 15.75L11.6934 10.9125L33.3496 14.7375L40.3246 7.7625C41.1871 6.9 42.2559 6.46875 43.5309 6.46875C44.8059 6.46875 45.8746 6.9 46.7371 7.7625C47.5996 8.625 48.0309 9.68438 48.0309 10.9406C48.0309 12.1969 47.5996 13.2563 46.7371 14.1188L39.7059 21.15L43.5309 42.75L38.7496 47.5312L31.0996 29.7L25.3621 35.4375L26.8246 43.5375L22.8309 47.5312Z"
                          fill="#801B2B"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 text-sm sm:text-lg leading-relaxed text-gray-200">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
