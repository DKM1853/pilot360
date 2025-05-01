"use client";
import React from "react";
import Image from "next/image";

// Import images for the section
import img1 from "../assets/CPL.png";
import img2 from "../assets/ATPL.png";
import img3 from "../assets/RTR.png";
import img4 from "../assets/airline.png";

const trainingPrograms = [
  { id: 1, title: "DGCA CPL GROUND CLASSES", image: img1 },
  { id: 2, title: "DCCA ATPL GROUND CLASSES", image: img2 },
  { id: 3, title: "RTR(A) CLASSES", image: img3 },
  { id: 4, title: "AIRLINE PREPARATION CLASSES", image: img4 },
];

export default function GroundTrainingSection() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-10 lg:px-20 mt-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
        Explore Our Ground School Training Programs
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainingPrograms.map((program) => (
          <div key={program.id} className="relative overflow-hidden rounded-lg">
            <Image
              src={program.image}
              alt={program.title}
              className="w-full h-[220px] md:h-[320px] object-cover rounded-lg"
            />
            <p className="text-start mt-2 font-semibold text-lg md:text-base lg:text-2xl">
              ✶ {program.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
