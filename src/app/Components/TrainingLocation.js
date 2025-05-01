/** @jsxImportSource react */
"use client";

import React from "react";
import Image from "next/image";
import mapImage from "../assets/training-location-map.png"; // Replace with your uploaded map image path
import bgImage from "../assets/training-location-bg.svg";

const TrainingLocation = () => {
  return (
    <div
      className="py-2 md:py-8 bg-white"
      style={{
        backgroundImage: `url(${bgImage.src})`, // Correctly applying the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full md:w-[80%] md:px-4 bg-[#F4F6F5] rounded-[60px] mx-auto text-center mt-12 pb-6 pt-4">
        <div className="">
          {/* Title */}
          {/* <div className="container mx-auto text-center mb-6 lg:mb-10"> */}
          <h2 className="text-[35px] md:text-[50px] lg:text-[64px] font-bold mb-6 text-[#344054]">
            Training <span className="text-[#801B2B]">Locations</span>
          </h2>
          {/* </div> */}

          {/* Map Image */}
          <div className="container mx-auto flex justify-center">
            <Image
              src={mapImage}
              alt="Pilot 360"
              style={{ width: "100%", height: "auto", maxWidth: "1200px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingLocation;
