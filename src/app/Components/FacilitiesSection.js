import img1 from "../assets/ATPL.png";
import Image from "next/image";
import bgImage from "../assets/Facilities-bg.png";
import fac1 from "../assets/accomodation.jpg";
import fac2 from "../assets/transport.jpg";
import fac3 from "../assets/clubhouse.png";
import fac4 from "../assets/swimming.jpg";
import fac5 from "../assets/gym.jpg";

export default function FacilitiesSection({ country, FacilitiesDescription }) {
  return (
    <div
      className="relative py-12 px-4 md:px-12 rounded-[50px] bg-blue"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover", // Ensures the image covers the full container
        backgroundPosition: "center", // Centers the background
      }}
    >
      {/* Overlay for better readability */}
      <div className="">
        {/* Title and Description */}
        <div className="text-center mb-10 text-white">
          <h2 className="text-[24px] md:text-[60px] lg:text-[100px] font-bold">
            Facilities in {country}
          </h2>
          <p className="mt-4 w-full md:w-[90%] mx-auto text-gray-200">
            {FacilitiesDescription}
          </p>
        </div>

        {/* Chips Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-10 mx-0 ld:mx-28 mx-0 lg:mx-[5%]">
          {[
            "Private accommodation",
            "Transportation",
            "Clubhouse",
            "Swimming Pool",
            "Gym",
            "Recreation Pool",
          ].map((chip, index) => (
            <div
              key={index}
              className="bg-white text-[#801B2B] text-[12px] md:text-[16px] px-4 py-2 rounded-full text-center items-center"
            >
              {chip}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={fac1}
              alt="Pilot Training Facility 1"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src={fac2}
              alt="Pilot Training Facility 2"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={fac3}
              alt="Pilot Training Facility 1"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src={fac4}
              alt="Pilot Training Facility 2"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={fac5}
              alt="Pilot Training Facility 1"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
