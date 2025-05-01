"use client";
import { useState } from "react";
import Image from "next/image";
import airplane1 from "../assets/Cessna 172.png";
import airplane2 from "../assets/Piper Archer.png";
import airplane3 from "../assets/Piper PA-34 Seneca.png";
import airplane4 from "../assets/Diamond-DA40.png";
import airplane5 from "../assets/Diamond-DA42.png";

export default function PartnerFlyingSchools() {
  const [selectedLocation, setSelectedLocation] = useState("Florida");
  const [currentAircraftIndex, setCurrentAircraftIndex] = useState(0);

  const schools = [
    {
      id: 1,
      name: "Flying School 1",
      location: "Florida",
      duration: "10 to 12 Months",
      fleet: "26 Aircrafts",
      types: "Cessna 152, Cessna 172",
      hours: "260 Total Flying Hours",
      image: airplane1,
    },
    {
      id: 2,
      name: "Flying School 2",
      location: "Texas",
      duration: "8 to 10 Months",
      fleet: "30 Aircrafts",
      types: "Piper PA-28, Diamond DA42",
      hours: "300 Total Flying Hours",
      image: airplane2,
    },
    {
      id: 3,
      name: "Flying School 2",
      location: "kjvdi",
      duration: "8 to 10 Months",
      fleet: "30 Aircrafts",
      types: "Piper PA-28, Diamond DA42",
      hours: "300 Total Flying Hours",
      image: airplane2,
    },
    {
      id: 4,
      name: "Flying School 2",
      location: "jdbvisdb",
      duration: "8 to 10 Months",
      fleet: "30 Aircrafts",
      types: "Piper PA-28, Diamond DA42",
      hours: "300 Total Flying Hours",
      image: airplane2,
    },
  ];

  const aircrafts = [
    {
      id: 1,
      name: "Cessna 172",
      description:
        "The Cessna 172 Skyhawk is a four-seat, single-engine, high-wing aircraft and one of the most widely used planes for pilot training and general aviation. First introduced in 1956 by Cessna, it remains a top choice for flight schools due to its reliability, simplicity, and forgiving handling characteristics.",
      image: airplane1,
    },
    {
      id: 2,
      name: "Piper Archer",
      description:
        "The Piper Archer, also known as the Piper PA-28-181 Archer, is a popular four-seat, single-engine, low-wing aircraft manufactured by Piper Aircraft, Inc. Known for its durability, stability, and ease of handling, it is widely used for pilot training, personal flying, and cross-country trips.",
      image: airplane2,
    },
    {
      id: 3,
      name: "Piper PA-34 Seneca",
      description:
        "The Piper PA-34 Seneca is a six-seat, twin-engine, low-wing aircraft manufactured by Piper Aircraft, Inc. It is widely recognized for its powerful performance, spacious cabin, and reliability. The Seneca is a popular choice for advanced flight training, business travel, and personal aviation.",
      image: airplane3,
    },
    {
      id: 4,
      name: "Diamond DA40",
      description:
        "The Diamond DA40 is a four-seat, single-engine, low-wing aircraft designed and manufactured by Diamond Aircraft Industries. Known for its sleek composite design, advanced avionics, and impressive fuel efficiency, the DA40 is popular for pilot training, cross-country travel, and general aviation.",
      image: airplane4,
    },
    {
      id: 5,
      name: "Diamond DA42",
      description:
        "The Diamond DA42 Twin Star is a sleek, four-seat, twin-engine aircraft manufactured by Diamond Aircraft Industries. It combines cutting-edge design, advanced avionics, and superior performance, making it a favorite for multi-engine training, private aviation, and surveillance operations.",
      image: airplane5,
    },
  ];

  const locations = [...new Set(schools.map((school) => school.location))];
  const filteredSchools = schools.filter(
    (school) => school.location === selectedLocation
  );

  const handleNextAircraft = () => {
    setCurrentAircraftIndex((prev) => (prev + 1) % aircrafts.length);
  };

  const handlePreviousAircraft = () => {
    setCurrentAircraftIndex(
      (prev) => (prev - 1 + aircrafts.length) % aircrafts.length
    );
  };

  return (
    <div className="">
      {/* <div className="bg-white pt-10 mt-[5%]"> */}
      {/* Background Section */}
      {/* <div className="relative" style={{ paddingTop: "50px" }}> */}
      {/* Partner Flying Schools Section */}
      {/* <div className="rounded-lg mx-auto relative z-10">
          <h2 className="text-[24px] md:text-[50px] lg:text-[60px] font-bold text-center text-black mb-8">
            Partner <span className="text-[#801B2B]">flying school</span>
          </h2>

          <div className="grid grid-row-6 gap-8 mx-auto w-[98%] lg:w-[70%]">
            {filteredSchools.map((school) => (
              <div
                key={school.id}
                className="bg-blue-50 py-2 lg:p-6 rounded-lg"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 justify-items-center">
                  {locations.map((location, index) => (
                    <button
                      key={location}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 w-full ${
                        selectedLocation === location
                          ? "bg-[#2353AB] text-white shadow-lg"
                          : "bg-white text-black hover:bg-gray-300 border border-[#A5A5A5]"
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="flex flex-col justify-start text-center">
                        <p className="font-semibold">{index + 1}</p>
                        <p className="mt-1">{location}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div>
                  <Image
                    src={school.image}
                    alt={school.name}
                    className="mt-4 w-full lg:w-[50%] justify-center mx-auto"
                  />
                </div>
                <div className="mt-4 px-2">
                  <h4 className="text-lg font-bold mb-2">About Course</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-[#2353AB]">
                    <div className="bg-white px-4 py-2 rounded-lg border border-[#75A5FD]">
                      <p className="font-bold text-sm md:text-md lg:text-lg">
                        {school.duration}
                      </p>
                      <p className="text-xs mt-2">Course Duration</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-[#75A5FD]">
                      <p className="font-bold text-sm md:text-md lg:text-lg">
                        {school.fleet}
                      </p>
                      <p className="text-xs mt-2">Fleet Details</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-[#75A5FD]">
                      <p className="font-bold text-sm md:text-md lg:text-lg">
                        {school.types}
                      </p>
                      <p className="text-xs mt-2">Aircraft Types</p>
                    </div>
                    <div className="bg-white  px-4 py-2 rounded-lg border border-[#75A5FD]">
                      <p className="font-bold text-sm md:text-md lg:text-lg">
                        {school.hours}
                      </p>
                      <p className="text-xs mt-2">Total Flying Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      {/* Aircraft Overview Section */}
      <div className="bg-[#2353AB] py-10 relative">
        <h2 className="text-white text-[24px] md:text-[50px] lg:text-[60px] font-bold text-center mb-6">
          Aircraft Overview
        </h2>
        <div className="relative flex justify-center items-center">
          <button
            className="absolute left-4 text-[#2353AB] bg-white p-2 rounded-full"
            onClick={handlePreviousAircraft}
          >
            ◀
          </button>
          <div className="flex flex-col items-center">
            <Image
              src={aircrafts[currentAircraftIndex].image}
              alt={aircrafts[currentAircraftIndex].name}
              className="w-[750px] h-auto"
            />
            <h3 className="text-[#2353AB] text-[24px] md:text-[50px] lg:text-[60px] mt-4 bg-white rounded-[400000px] py-4 px-8 font-bold">
              {aircrafts[currentAircraftIndex].name}
            </h3>
            <p className="text-white mt-2 text-center w-[96%] md:w-[70%] mt-4">
              {aircrafts[currentAircraftIndex].description}
            </p>
          </div>
          <button
            className="absolute right-4 text-[#2353AB] bg-white p-2 rounded-full"
            onClick={handleNextAircraft}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
