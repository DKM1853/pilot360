// import Image from "next/image";

// export default function PsychologyHeroSection() {
//   return (
//     <div className="flex flex-col items-center text-center px-4 py-12 my-16 md:my-24">
//       {/* Title */}
//       <h2 className="text-[24px] md:text-[50px] lg:text-[64px] font-bold mb-4 text-gray-900">
//         Psychology & Aptitude Training at Pilot 360
//       </h2>

//       {/* Description */}
//       <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-7xl">
//         Preparing Aspiring Pilots for Success Pilot 360 offers specialized
//         psychology and aptitude training designed to help aspiring pilots
//         develop the cognitive, emotional, and decision-making skills essential
//         for a successful aviation career. This training is particularly useful
//         before starting flight school, ensuring candidates are mentally and
//         psychologically prepared for the challenges ahead.
//       </p>
//       <button
//         className={`px-6 py-3 text-[24px] text-[#2353AB] font-semibold rounded-lg border border-[#A5A5A5] transition hover:bg-[#2353AB] hover:text-white`}
//       >
//         Contact Now
//       </button>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import bgImg from "../assets/how-to-become-bg.png";
import Navbar from "../Components/Navbar";
import plane from "../assets/service-plane.png";

export default function PsychologyHeroSection({ mainTitle, description }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation immediately on mount
    setAnimate(true);
  }, []);

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative pt-[10px] lg:pt-[20px] overflow-hidden"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navbar */}
        <div id="navbar">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center px-4 py-12 my-16 md:my-24">
          <h2 className="text-[24px] md:text-[50px] lg:text-[64px] font-bold mb-4 text-gray-900">
            {mainTitle}{" "}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-7xl">
            {description}
          </p>
          <button className="px-6 py-3 text-[24px] text-[#2353AB] font-semibold rounded-lg border border-[#A5A5A5] transition hover:bg-[#2353AB] hover:text-white">
            Contact Now
          </button>
        </div>

        {/* Floating Image (Moves on Page Load Immediately) */}
        <div
          className={`absolute left-1/2 bottom-[-100px] -translate-x-1/2 transition-all duration-[4s] opacity-400 ${
            animate ? "animate-move-up" : ""
          }`}
        >
          <Image
            src={plane}
            alt="Floating Image"
            width={700} // Slightly larger for better visibility
            height={700}
          />
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes moveUp {
          from {
            transform: translateY(0) translateX(-50%) scale(1);
            opacity: 0.5;
          }
          to {
            transform: translateY(-1200px) translateX(-50%) scale(0.6);
            opacity: 0;
          }
        }
        .animate-move-up {
          animation: moveUp 6s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
