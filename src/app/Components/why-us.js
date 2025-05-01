"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bgimage from "../assets/why-us-bg.png";

// Import unique background images for each card
import bg1 from "../assets/image 20.png";
import bg2 from "../assets/image 20.png";
import bg3 from "../assets/image 20.png";
import bg4 from "../assets/image 20.png";

export default function WhyUs() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Accreditation & Certification",
      description:
        "Pilot 360 flight school is fully certified by globally recognized aviation authorities, including EASA (European Union Aviation Safety Agency), FAA (Federal Aviation Administration), DGCA (Directorate General of Civil Aviation), and ICAO (International Civil Aviation Organization). These accreditations ensure that our pilot training programs meet the highest international standards, allowing graduates to pursue careers in aviation worldwide.",
      zIndex: 70,
      image: bg1, // Assign image directly to each card
    },
    {
      id: 2,
      title: "Fleet & Aircraft Condition",
      description:
        "We operate a modern, well-maintained fleet that aligns with commercial aviation requirements. Our aircraft are regularly inspected, maintained, and upgraded to comply with the latest aviation safety standards. Students train on aircraft that are globally recognised, providing them with hands-on experience relevant to the industry.",
      zIndex: 60,
      image: bg2,
    },
    {
      id: 3,
      title: "Experienced Instructors",
      description:
        "Pilot 360 instructors include highly experienced airline pilots and certified flight trainers with extensive backgrounds in aviation. They bring real-world experience, ensuring that students receive top-tier guidance in theoretical knowledge, flight techniques, and aviation best practices. Our faculty is dedicated to mentoring aspiring pilots, equipping them with the skills needed for a successful aviation career.",
      zIndex: 50,
      image: bg3,
    },
    {
      id: 4,
      title: "Real Flight Hours & Simulator Training",
      description:
        "Our training program includes the required real flight hours and advanced simulator training to prepare students for commercial aviation. We use state-of-the-art simulators that replicate real-world flying conditions, helping students develop confidence and proficiency before stepping into an actual cockpit. The curriculum is structured to provide a balance between flight experience and advanced training simulations, ensuring comprehensive learning.",
      zIndex: 40,
      image: bg4,
    },
    {
      id: 5,
      title: "Location & Weather Conditions",
      description:
        "The school is strategically located in a region with stable weather conditions, minimal disruptions, and year-round flying opportunities. Consistent weather allows students to complete their training without delays, ensuring smooth progression from ground school to real flight experience.",
      zIndex: 30,
      image: bg4,
    },
    {
      id: 6,
      title: "Cost & Financing Options",
      description:
        "We offer affordable tuition fees with complete transparency—no hidden costs or unexpected charges. Additionally, financing options and sponsorship programs may be available for eligible students, helping them manage their educational expenses while pursuing their dream of becoming a pilot.",
      zIndex: 20,
      image: bg4,
    },
    {
      id: 7,
      title: "Class Size & Student Support",
      description:
        "Our smaller class sizes enable personalized instruction and greater student-instructor interaction, ensuring that each trainee gets the attention they need. We also provide comprehensive career support and mentorship, helping students with job placement, airline interviews, and career guidance as they transition from training to professional aviation roles.",
      zIndex: 10,
      image: bg4,
    },
  ]);

  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile"); // Phones
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet"); // Tablets
      } else {
        setScreenSize("desktop"); // Laptops
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getTopValue = (zIndex) => {
    if (screenSize === "mobile") return `${(zIndex - 10) * 0.2}rem`; // Phones
    if (screenSize === "tablet") return `${(zIndex - 10) * 0.2}rem`; // Tablets
    return `${(zIndex - 10) * 0.4}rem`; // Laptops (Default)
  };

  const handleCardClick = (id) => {
    setCards((prevCards) => {
      const currentIndex = prevCards.findIndex((card) => card.id === id);
      const newCards = [...prevCards];

      if (currentIndex === 0) {
        const lastCard = newCards[newCards.length - 1];
        for (let i = newCards.length - 1; i > 0; i--) {
          newCards[i] = newCards[i - 1];
        }
        newCards[0] = lastCard;
      } else {
        const clickedCard = newCards.splice(currentIndex, 1)[0];
        newCards.unshift(clickedCard);
      }

      return newCards.map((card, index) => ({
        ...card,
        zIndex: 70 - index * 10,
      }));
    });
  };

  return (
    <div
      className="relative min-h-[125vh] md:min-h-[130vh] lg:min-h-[135vh] mb-[10px] bg-white"
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="text-center py-8">
        <h2 className="text-[27px] md:text-[50px] lg:text-[50px] font-bold text-black">
          Why Pilot 360 Is the Top Choice for
        </h2>
        <h2 className="text-[30px] md:text-[50px] lg:text-[50px] font-bold text-[#801B2B]">
          Flying Training
        </h2>
      </div>
      <div className="relative  z-10 text-white">
        <div className="relative w-full flex justify-center ">
          {cards.map((card) => {
            // let headerBgColor = "bg-[#E299A5]";
            let headerBgColor = "bg-[#E6D1D5]";
            let headerTextColor = "text-[#801B2B]";

            if (card.id === 2) {
              headerBgColor = "bg-[#E299A5]";
              headerTextColor = "text-[#801B2B]";
            } else if (card.id === 3) {
              headerBgColor = "bg-[#D97F8E]";
            } else if (card.id === 4) {
              headerBgColor = "bg-[#D8354F]";
              headerTextColor = "text-white";
            } else if (card.id === 5) {
              headerBgColor = "bg-[#BD001E]";
              headerTextColor = "text-white";
            } else if (card.id === 6) {
              headerBgColor = "bg-[#A84A59]";
              headerTextColor = "text-white";
            } else if (card.id === 7) {
              headerBgColor = "bg-[#801B2B]";
              headerTextColor = "text-white";
              // headerTextColor = "text-[#801B2B]";
            }

            return (
              <div
                key={card.id}
                className="absolute w-[97%] md:w-[700px] lg:w-[70%] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
                style={{
                  zIndex: card.zIndex,
                  top: getTopValue(card.zIndex), // Dynamically set top value
                }}
                onClick={() => handleCardClick(card.id)}
              >
                {/* Header */}
                <div
                  className={`${headerBgColor} rounded-t-[3rem] px-6 pb-[12%] md:pb-[7%] lg:pb-[4%] flex`}
                >
                  <div className="flex items-center justify-center gap-2 flex-1">
                    <h2
                      className={`text-[14px] sm:text-[15px] lg:text-[45px] font-normal md:font-bold ${headerTextColor} text-center  ${
                        card.zIndex === 70
                          ? "mt-4 md:mt-4 lg:mt-4 -mb-8 md:-mb-6 lg:-mb-6"
                          : "mt-2"
                      }`}
                    >
                      {card.title}
                    </h2>

                    {/* Conditional SVG Icon */}
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 hidden md:block ${
                        card.zIndex === 70
                          ? "mt-4 md:mt-4 lg:mt-4 -mb-8 md:-mb-6 lg:-mb-6"
                          : "mt-0"
                      }`}
                    >
                      <mask
                        id="mask0_529_150"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="18"
                        height="17"
                      >
                        <rect
                          x="0.782471"
                          y="0.497803"
                          width="16.4886"
                          height="16.4886"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_529_150)">
                        <path
                          d="M7.60129 15.0112L5.90091 11.8509L2.7406 10.1505L3.96007 8.94821L6.45052 9.3776L8.20243 7.62569L2.75778 5.30699L4.20052 3.82989L10.8131 4.99783L12.9429 2.86806C13.2063 2.6047 13.5326 2.47302 13.9219 2.47302C14.3112 2.47302 14.6375 2.6047 14.9009 2.86806C15.1643 3.13142 15.2959 3.45489 15.2959 3.83848C15.2959 4.22207 15.1643 4.54554 14.9009 4.8089L12.754 6.95585L13.9219 13.5513L12.462 15.0112L10.1261 9.56653L8.37419 11.3184L8.82075 13.7917L7.60129 15.0112Z"
                          fill={
                            card.id === 1
                              ? "white"
                              : card.id === 3
                              ? "white"
                              : card.id === 5
                              ? "white"
                              : card.id === 7
                              ? "white"
                              : "#801B2B"
                          }
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Content with Dynamic Background Image */}
                <div className="relative text-white rounded-b-lg h-[350px] md:h-[300px] lg:h-[300px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt="Card Background"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-b-lg"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative p-10 rounded-b-lg">
                    <p className="text-[90%] md:text-[21px] lg:text-[25px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
