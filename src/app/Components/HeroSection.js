import React from "react";
import heroImage from "../assets/hero-pilot.png"; // Ensure this path is correct.
import flyingPlane from "../assets/flying-plane.png"; // Ensure this path is correct.
import Image from "next/image";
// import logo from "../assets/pilot360-logo.png"; // Ensure this path is correct.
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mt-4 w-full h-auto">
      <div className="text-center px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center">
         
        </div>
        <div className="relative">
         
          <h1 className="text-3xl md:text-[65px] lg:text-[65px] font-bold mt-2 leading-snug text-[#171717]">
            Become an <span className="text-[#801B2B]">Airline Pilot</span>
            <br />
            with Pilot 360
          </h1>

          {/* SVG Icon */}
          <svg
            width="74"
            height="85"
            viewBox="0 0 74 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-45%] md:bottom-[-25%] lg:bottom-[-20%] right-0 md:right-[3%] lg:right-[23%] w-8 md:w-12 lg:w-20" // Positions the icon at the bottom right
          >
            <path
              d="M2.88839 36.2314C4.57073 43.8914 15.5954 57.529 12.9824 82.1913M20.0756 23.0889C33.4766 31.2977 61.7987 52.1992 67.879 70.1346M23.8102 3.53325C30.619 2.03784 49.6179 1.61227 71.1422 11.8733"
              stroke="#4D76BC"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Layout for content */}
      <div className="flex flex-col lg:flex-row justify-between px-4 md:px-8 lg:px-4 mt-8 lg:mt-0">
        {/* Left Text Content */}
        <div className="text-center lg:text-left max-w-sm md:max-w-xl lg:relative left-[5%] hidden lg:block lg:mt-0">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.135 17.445H5.1C5.22 10.44 6.6 9.28499 10.905 6.73499C11.4 6.43499 11.565 5.80499 11.265 5.29499C10.98 4.79999 10.335 4.63499 9.84 4.93499C4.77 7.93499 3 9.76499 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
              fill="#344054"
            />
            <path
              d="M28.365 17.445H21.33C21.45 10.44 22.83 9.28499 27.135 6.73499C27.63 6.43499 27.795 5.80499 27.495 5.29499C27.195 4.79999 26.565 4.63499 26.055 4.93499C20.985 7.93499 19.215 9.76499 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
              fill="#344054"
            />
          </svg>
          <p className="text-[#344054] text-2xl leading-relaxed">
            🏅 DGCA Approved with 17+ Years of Experience. 🤝 Complete
            Assistance from Start to Finish.
          </p>
        
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center z-[5] relative left-0 lg:left-[6%]">
          <Image
            className="lg:w-[70%]"
            src={heroImage}
            alt="Pilot 360"
            priority={true}
          />
        </div>
        {/* flying plane Image */}
        <div className="relative -left-[6%] -top-[7%] hidden lg:flex z-[1]">
          <Image
            src={flyingPlane}
            alt="Pilot 360"
            // layout="fill"
            //   objectFit="contain"
            priority={true}
          />
        </div>
        {/* Right Text Content */}
        <div className="text-center md:mt-[50px] lg:mt-[0px] lg:relative lg:right-[3%] hidden lg:flex">
          <div className="flex flex-col items-center">
            {/* 10 Years */}
            <p className="text-gray-800 font-bold text-lg">
              🌍 Global Training Locations with Accomodations.🎓 100% Finance,
              Placement & Scholarship Support
            </p>
          
          </div>
        </div>
        {/* Description and Stars (Mobile and Tablet Only) */}
        <div className="lg:hidden items-center text-start mt-4 gap-4 bg-white">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.135 17.445H5.1C5.22 10.44 6.6 9.28499 10.905 6.73499C11.4 6.43499 11.565 5.80499 11.265 5.29499C10.98 4.79999 10.335 4.63499 9.84 4.93499C4.77 7.93499 3 9.76499 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
              fill="#344054"
            />
            <path
              d="M28.365 17.445H21.33C21.45 10.44 22.83 9.28499 27.135 6.73499C27.63 6.43499 27.795 5.80499 27.495 5.29499C27.195 4.79999 26.565 4.63499 26.055 4.93499C20.985 7.93499 19.215 9.76499 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
              fill="#344054"
            />
          </svg>
          <ul className="ms-2 text-gray-600 leading-relaxed">
            <li className="text-[14px]">
              🏅 DGCA Approved with 17+ Years of Experience.
            </li>
            <li className="text-[14px]">
              🤝 Complete Assistance from Start to Finish.
            </li>
            <li className="text-[14px]">
              🌍 Global Training Locations with Accomodations.
            </li>
            <li className="text-[14px]">
              🎓 100% Finance, Placement & Scholarship Support
            </li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center px-4 md:px-16 lg:px-32 lg:relative lg:mt-[-5%] z-10">
        {/* First Button */}
        <button className="bg-[#EDEDED] text-gray-800 px-4 py-3 rounded-l-full rounded-r-none shadow-md hover:bg-[#991E33] flex items-center">
          Start Your Pilot Journey
        </button>

        {/* Second Button */}
        <Link href="/Contact-us">
          <button className="bg-[#801B2B] text-white px-8 py-3 rounded-r-full rounded-l-none shadow-md hover:bg-gray-300 flex">
            Get in Touch!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15.75l7.5-7.5m0 0H9m6.75 0v6.75"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
