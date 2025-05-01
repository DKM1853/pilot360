"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "../assets/HowToBecomePilot.png"; // Background image path
import { useRouter } from "next/navigation";

const PilotSection = () => {
  const router = useRouter(); // Use next/navigation router

  const [counters, setCounters] = useState({ students: 0, stories: 0 });

  useEffect(() => {
    const targetValues = { students: 500, stories: 500 };
    const duration = 2000;
    const interval = 50;
    const increments = {
      students: Math.ceil(targetValues.students / (duration / interval)),
      stories: Math.ceil(targetValues.stories / (duration / interval)),
    };

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters = {
          students: Math.min(
            prev.students + increments.students,
            targetValues.students
          ),
          stories: Math.min(
            prev.stories + increments.stories,
            targetValues.stories
          ),
        };
        if (
          newCounters.students === targetValues.students &&
          newCounters.stories === targetValues.stories
        ) {
          clearInterval(timer);
        }
        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white w-full px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-[1200px] mx-auto p-8 bg-[#F2F4F7] rounded-[20px] shadow-md">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={image} // Replace with the actual image path
            alt="Pilot Image"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h2 className="text-[30px] md:text-[35px] lg:text-[60px] font-bold text-[#344054]">
          How To Become a<span className="text-[#801B2B]"> Pilot?</span>
          </h2>
          <p className="text-[#19182580] text-base md:text-lg">
            Pilot 360 guides aspiring pilots through every step, from career
            counseling, DGCA medicals, and computer number assistance to flight
            school selection, training, exams, and license conversion, ensuring
            a smooth journey to becoming a pilot.
          </p>

          {/* Counter Section */}
          <div className="flex gap-14 mt-4">
            <div>
              <p className="text-2xl font-bold text-[#1D2939]">
                {counters.students}+
              </p>
              <p className="text-sm text-[#667085]">Successful Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1D2939]">
                {counters.stories}+
              </p>
              <p className="text-sm text-[#667085]">Success Stories</p>
            </div>
          </div>

          {/* View Details Button */}
          <li
            onClick={() => {
              router.push("/How-to-become-pilot");
            }}
            className="list-none"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-10 py-4 text-[#151515] border border-[#151515] font-bold rounded-full hover:bg-[#151515] hover:text-white transition-all"
            >
              <div className="flex flex-row items-center text-xl">
                View Complete Path
                <svg
                  className="ms-2 hover:text-white"
                  width="30"
                  height="30"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.292 29.4463L29.3753 12.363"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.292 12.363L29.3753 12.363L29.3753 29.4463"
                    stroke="#151515"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.button>
          </li>
        </div>
      </div>
    </section>
  );
};

export default PilotSection;
