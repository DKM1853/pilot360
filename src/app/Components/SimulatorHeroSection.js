import Image from "next/image";
import plane from "../assets/plane.png";
import pilot from "../assets/pilot.png";
import grid from "../assets/Simulator-grid.png";

const SimulatorHeroSection = ({
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
      <div className="relative -mt-[40%] sm:-mt-[28%] md:-mt-[24%] lg:-mt-[15%] xl:-mt-[18%] z-20">
        {/* Blue Background Layer */}
        <div className="absolute inset-0 w-full h-full bg-[#2353AB] rounded-t-[60px]"></div>

        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={grid}
            alt="Flight Simulator Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-70" // Adjust opacity as needed
          />
        </div>

        {/* Content Layer (Ensures text is readable) */}
        <div className="relative text-white py-12 sm:py-10 md:py-20 lg:py-12 xl:py-20 2xl:py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-16 rounded-t-[40px]">
          <div className="max-w-7xl mx-auto text-center">
            {/* Adjusted Layout for Small Screens & Kept Original for md+ */}
            <div className="flex flex-col justify-between items-center gap-6">
              <p className="text-white text-[24px] md:text-[48px]">
                {secondTitle}
              </p>
              <p className="text-white text-[14px] md:text-[24px]">
                {secondDescription}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SimulatorHeroSection;
