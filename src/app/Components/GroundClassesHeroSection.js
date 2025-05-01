import Image from "next/image";
import plane from "../assets/plane.png";
import pilot from "../assets/pilot.png";

const GroundClassesHeroSection = ({
  mainTitle,
  description,
  secondTitle,
  secondDescription,
}) => {
  return (
    <div className="relative">
      {/* Plane Section */}
      <div className="relative w-full h-[80vh] sm:h-[90vh] flex flex-col items-center justify-start pt-[8vh] sm:pt-[12vh]">
        {/* Background Plane Image */}
        <div className="absolute inset-0 flex justify-center items-start">
          <Image
            src={plane}
            alt="Background Plane"
            width={1200}
            height={500}
            className="object-cover h-full"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="relative text-center px-4 sm:px-6 md:px-8 lg:px-10 z-10 mt-[20%] md:mt-0">
          <h1 className="text-[24px] md:text-[54px] lg:text-[64px] font-bold text-[#183B56] mb-3 sm:mb-4">
            {mainTitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#183B56] mb-4 sm:mb-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
            {description}
          </p>
        </div>
      </div>
      {/* Blue Section (Card) Positioned Over the Plane */}
      <div className="relative bg-[#2353AB] text-white py-12 sm:py-10 md:py-20 lg:py-12 xl:py-20 2xl:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16 rounded-t-[40px] -mt-[40%] sm:-mt-[28%] md:-mt-[24%] lg:-mt-[18%]  xl:-mt-[18%] z-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Adjusted Layout for Small Screens & Kept Original for md+ */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            {/* Pilot Image - Adjusted for `sm` Screens */}
            <div className="w-full md:w-1/2 flex justify-center md:relative">
              <div className="relative w-2/3 sm:w-1/2 md:w-3/4 lg:w-2/3 xl:w-2/3 2xl:w-2/3 md:absolute md:-left-[4.1rem] sm:left-[1rem] lg:-left-[5rem] xl:-left-[8rem] left-6 -bottom-[3rem] sm:-bottom-10 md:-bottom-[11.5rem] lg:-bottom-[10.4rem] xl:-bottom-[10.5rem] sm:relative">
                <Image
                  src={pilot}
                  alt="Pilot"
                  width={700} // Same for large screens
                  height={700}
                  className="object-contain sm:-mt-10 md:static"
                  priority
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
              {/* Institute Badge */}
              <div className="bg-white text-[#1e3a8a] rounded-[20px] px-4 sm:px-6 py-2 inline-flex items-center justify-center mb-4">
                <svg
                  width="45"
                  height="40"
                  viewBox="0 0 51 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3152 50L13.5344 37.3973L0.931641 30.6164L5.79465 25.8219L15.7262 27.5342L22.7125 20.5479L1.00013 11.3014L6.75356 5.41096L33.1234 10.0685L41.6166 1.57534C42.6668 0.525114 43.9682 0 45.5207 0C47.0732 0 48.3746 0.525114 49.4248 1.57534C50.475 2.62557 51.0001 3.91553 51.0001 5.44521C51.0001 6.97489 50.475 8.26484 49.4248 9.31507L40.8631 17.8767L45.5207 44.1781L39.6988 50L30.3837 28.2877L23.3974 35.274L25.1782 45.137L20.3152 50Z"
                    fill="#2353AB"
                  />
                </svg>
                <span className="font-medium text-sm sm:text-base">
                  India&apos;s no.1 Pilot Training Institute
                </span>
              </div>

              {/* Main Content */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
                {secondTitle}
              </h2>
              <p className="text-lg sm:text-xl">{secondDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundClassesHeroSection;
