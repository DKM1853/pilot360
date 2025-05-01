/** @jsxImportSource react */
"use client";
import Image from "next/image";
import icon1 from "../assets/computer.svg"; // Background image path
import icon2 from "../assets/flight-simulator.svg"; // Background image path
import icon3 from "../assets/medicals-icon.svg"; // Background image path
import icon4 from "../assets/flight-practice.svg"; // Background image path
import icon5 from "../assets/training.svg"; // Background image path
import icon6 from "../assets/cadet.svg"; // Background image path

const OurService = () => {
  const features = [
    {
      title: "DGCA Computer Number",
      description:
        "Pilot 360 ensures a smooth and hassle-free experience, helping you get your DGCA Computer Number with ease.",
      icon: icon1,
    },

    {
      title: "Flight Simulator Training",
      description:
        "Get hands-on experience with advanced flight simulators to enhance your skills and prepare for real-world flying scenarios.",
      icon: icon2,
    },
    {
      title: "DGCA Medicals",
      description:
        "Complete assistance for DGCA Class 1 & 2 medical appointments, documentation, and fitness requirements to ensure hassle-free approvals.",
      icon: icon3,
    },
    {
      title: "License Conversion",
      description:
        "Expert guidance for converting foreign pilot licenses to DGCA-compliant licenses, ensuring a seamless transition to flying in India.",
      icon: icon4,
    },

    {
      title: "Psychometric & Aptitude Training",
      description:
        "Pilot 360 tailored assessments and training to help pilots excel in airline psychometric tests, aptitude evaluations, and cognitive skills.",
      icon: icon5,
    },
    {
      title: "Aviation English",
      description:
        "Specialized training to enhance aviation communication skills, meeting ICAO proficiency standards for pilots and aircrew.",
      icon: icon6,
    },
  ];

  return (
    <div className="w-full md:w-[98%] bg-[#181818] py-12 px-4 mx-auto rounded-[20px] mt-12">
      <div className="container mx-auto">
        {/* Main Section Title */}
        <div className="relative text-center mb-10">
          {/* Title */}
          <h2
            className="text-[30px] md:text-[60px] font-bold text-white"
            style={{ fontFamily: "Nunito" }}
          >
            Our Services
          </h2>
        </div>

        {/* Features Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#4A3E3E] border border-[#A5A5A5] flex flex-col justify-between p-6 rounded-lg 
             hover:bg-[#801B2B] hover:border-[#801B2B] hover:scale-105 transform transition-transform 
             duration-300 ease-in-out shadow-sm hover:shadow-lg"
            >
              {/* Icon with Blue Background */}
              <div
                className="flex mb-2 font-black"
                style={{ width: "70px", height: "60px" }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain" // Retained Tailwind classes for styling
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Nunito" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#B7B7B7] text-base mt-4"
                style={{ fontFamily: "Nunito Sans" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
