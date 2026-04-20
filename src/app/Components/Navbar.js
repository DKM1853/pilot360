"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.png"; // Ensure this path is correct.

const Navbar = () => {
  const router = useRouter(); // Use next/navigation router
  const pathname = usePathname(); // Get current path
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPilotTrainingPage = pathname.includes("Pilot-Training-in");
  const isTypeRatingPage = pathname.includes("Type-Rating");
  const isClasses = pathname.includes("classes");

  // Dropdown visibility states
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Show dropdown with a slight delay
  let dropdownTimer;

  const handleMouseEnter = (menu) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => setActiveDropdown(null), 100);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="relative bg-white shadow-md mx-auto rounded-[50px] border-t border-gray-300 w-[100%] md:w-[95%] mt-4 flex items-center justify-center font-onest">
      <div className="flex items-center justify-between w-full px-4 md:px-10">
        {/* Mobile Menu Toggle Button */}
        <div className="flex justify-center items-center lg:hidden">
          <Image
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/");
            }}
            src={logo}
            alt="Pilot 360 Logo"
            className="w-[80px] h-14 object-contain ms-2 py-1 cursor-pointer"
          />
        </div>
        <button
          className="text-3xl lg:hidden me-4 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center w-full justify-center text-[#2353AB] font-medium space-x-6 justify-between">
          {/* Left Options */}
          <li
            className={`text-[18px] relative cursor-pointer p-4 rounded-[60px] z-20  ${
              isClasses
                ? "bg-[#2353AB] text-white" // Different background color for "pilot-training"
                : activeDropdown === 1
                ? "bg-[#2353AB] hover:text-white"
                : " text-[#2353AB]"
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            Ground Subject Training
            <span
              className='ml-1 text-sm ${
      activeDropdown === 1 ? "text-white" : "text-[#2353AB]"
    }'
            >
              ▼
            </span>
            {activeDropdown === 1 && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg p-2 grid grid-cols-2 gap-4 w-[29rem]">
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/DGCA-CPL-ground-classes");
                  }}
                  className={`p-4 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/DGCA-CPL-ground-classes")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  DGCA CPL ground classes
                </li>
                {/* <li className="p-4 rounded-[60px] text-black hover:bg-[#2353AB] hover:text-white cursor-pointer text-center"></li> */}
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/DGCA-ATPL-ground-classes");
                  }}
                  className={`p-4 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/DGCA-ATPL-ground-classes")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  DGCA ATPL ground classes
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/RTR(A)-classes");
                  }}
                  className={`p-6 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/RTR(A)-classes")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  RTR(A) classes
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Airline-preparatory-classes");
                  }}
                  className={`p-4 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Airline-preparatory-classes")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  Airline Preparatory Classes
                </li>
                {/* <li className="p-4 rounded-[60px] text-black hover:bg-[#2353AB] hover:text-white cursor-pointer text-center">
                  EASA ATPL Preparation
                </li> */}
              </ul>
            )}
          </li>
          <li
            className={`text-[18px] relative cursor-pointer p-4 rounded-[60px] z-20 ${
              activeDropdown === 4 ? "bg-[#2353AB] hover:text-white" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            Services{" "}
            <span
              className='ml-1 text-sm ${
      activeDropdown === 4 ? "text-white" : "text-[#2353AB]"
    }'
            >
              ▼
            </span>
            {activeDropdown === 4 && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg p-2 grid grid-cols-2 gap-4 w-[28rem]">
                {/* <li className="p-4 rounded-[60px] text-black hover:bg-[#2353AB] hover:text-white cursor-pointer text-center">
                  License conversion
                </li> */}
                {/* <li className="p-4 rounded-[60px] text-black hover:bg-[#2353AB] hover:text-white cursor-pointer text-center"></li> */}
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/DGCA-Medicals");
                  }}
                  className={`p-4 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/DGCA-Medicals")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  Class 1-2 Medicals
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/DGCA-computer-number");
                  }}
                  className={`p-4 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/DGCA-computer-number")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  DGCA computer number
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Flight-simulator-practice");
                  }}
                  className={`p-4 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Flight-simulator-practice")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  Flight simulator practice
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Psychometric-and-Aptitude-test");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Psychometric-and-Aptitude-test")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  Psychometric and Aptitude test
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Cadet-pilot-training");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Cadet-pilot-training")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  Cadet Pilot Training
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => router.push("/Contact-us")}
            className={`cursor-pointer text-[18px] p-4 rounded-[60px] ${
              isActive("/Contact-us") ? "bg-[#2353AB] text-white" : ""
            } p-2 hover:bg-[#2353AB] hover:text-white`}
          >
            Contact us
          </li>
          {/* Centered Logo */}
          <div className="flex justify-center items-center mx-6">
            <Image
              onClick={() => router.push("/")}
              src={logo}
              alt="Pilot 360 Logo"
              className="w-[100px] h-[100px] object-contain cursor-pointer"
            />
          </div>
          {/* Right Options */}
          <li
            className={`text-[18px] relative cursor-pointer p-4 rounded-[60px] z-20  ${
              isTypeRatingPage
                ? "bg-[#2353AB] text-white" // Different background color for "pilot-training"
                : activeDropdown === 3
                ? "bg-[#2353AB] hover:text-white"
                : " text-[#2353AB]"
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            Type Rating{" "}
            <span
              className='ml-1 text-sm ${
      activeDropdown === 3 ? "text-white" : "text-[#2353AB]"
    }'
            >
              ▼
            </span>
            {activeDropdown === 3 && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg p-2 grid grid-cols-2 gap-4 w-[20rem]">
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Airbus-A320-Type-Rating");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Airbus-A320-Type-Rating")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  Airbus A320
                </li>

                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Boeing-737-Type-Rating");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Boeing-737-Type-Rating")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  Boeing 737
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/ATR-Type-Rating");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/ATR-Type-Rating")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  ATR
                </li>
              </ul>
            )}
          </li>
          <li
            className={`text-[18px] relative cursor-pointer p-4 rounded-[60px] z-20   ${
              isPilotTrainingPage
                ? "bg-[#2353AB] text-white" // Different background color for "pilot-training"
                : activeDropdown === 2
                ? "bg-[#2353AB] hover:text-white"
                : " text-[#2353AB]"
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            Flight Training{" "}
            <span
              className='ml-1 text-sm ${
      activeDropdown === 2 ? "text-white" : "text-[#2353AB]"
    }'
            >
              ▼
            </span>{" "}
            {activeDropdown === 2 && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg p-2 grid grid-cols-2 gap-4 w-72">
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Pilot-Training-in-USA");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Pilot-Training-in-USA")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  USA
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Pilot-Training-in-South-Africa");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Pilot-Training-in-South-Africa")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  South Africa
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Pilot-Training-in-Canada");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Pilot-Training-in-Canada")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  Canada
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Pilot-Training-in-NZ");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Pilot-Training-in-NZ")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  NZ
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Pilot-Training-in-Australia");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Pilot-Training-in-Australia")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  Australia
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Pilot-Training-in-Europe");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Pilot-Training-in-Europe")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  Europe
                </li>
                <li
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/Pilot-Training-in-India");
                  }}
                  className={`p-2 rounded-[60px] text-black hover:border-[#2353AB] hover:border cursor-pointer text-center ${
                    isActive("/Pilot-Training-in-India")
                      ? "bg-[#2353AB] text-white"
                      : "text-black"
                  } `}
                >
                  {" "}
                  India
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => router.push("/How-to-become-pilot")}
            className={`cursor-pointer text-[18px] p-4 rounded-[60px] ${
              isActive("/How-to-become-pilot") ? "bg-[#2353AB] text-white" : ""
            } p-2 hover:bg-[#2353AB] hover:text-white`}
          >
            How To Become a Pilot
          </li>
          <li
            onClick={() => window.open("https://claude.ai/public/artifacts/329816fd-bb36-4092-8b26-f43851ca931a", "_blank")}
            className="cursor-pointer text-[18px] p-4 rounded-[60px] hover:bg-[#2353AB] hover:text-white"
          >
            Cost Calculator
          </li>
        </ul>

        {/* Mobile Sidebar Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
            <button
              className="text-2xl absolute top-4 right-4 text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="space-y-4 mt-10">
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  isClasses
                    ? "bg-[#2353AB] text-white" // Different background color for "pilot-training"
                    : activeDropdown === 1
                    ? "bg-[#2353AB] hover:text-white"
                    : " text-black"
                }`}
                onClick={() =>
                  setActiveDropdown(activeDropdown === 1 ? null : 1)
                }
              >
                Ground Subject Training
                <span
                  className='ml-1 text-sm ${
      activeDropdown === 1 ? "text-white" : "text-[#2353AB]"
    }'
                >
                  ▼
                </span>
                {activeDropdown === 1 && (
                  <ul className="mt-2 bg-white shadow-md rounded-lg p-2 text-black">
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/DGCA-CPL-ground-classes");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/DGCA-CPL-ground-classes")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      DGCA CPL ground classes
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/DGCA-ATPL-ground-classes");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/DGCA-ATPL-ground-classes")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      DGCA ATPL ground classes
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/RTR(A)-classes");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/RTR(A)-classes")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      RTR(A) classes
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Airline-preparatory-classes");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Airline-preparatory-classes")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Airline preparation classes
                    </li>
                    {/* <li className="p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer">
                      EASA ATPL Preparation
                    </li> */}
                  </ul>
                )}
              </li>
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  isPilotTrainingPage
                    ? "bg-[#2353AB] text-white" // Different background color for "pilot-training"
                    : activeDropdown === 2
                    ? "bg-[#2353AB] hover:text-white"
                    : " text-black"
                }`}
                onClick={() =>
                  setActiveDropdown(activeDropdown === 2 ? null : 2)
                }
              >
                Flight Training{" "}
                <span
                  className='ml-1 text-sm ${
      activeDropdown === 2 ? "text-white" : "text-[#2353AB]"
    }'
                >
                  ▼
                </span>{" "}
                {activeDropdown === 2 && (
                  <ul className="mt-2 bg-white shadow-md rounded-lg p-2 text-black">
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Pilot-Training-in-USA");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Pilot-Training-in-USA")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      USA
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Pilot-Training-in-South-Africa");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Pilot-Training-in-South-Africa")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      South Africa
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Pilot-Training-in-Canada");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Pilot-Training-in-Canada")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Canada
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Pilot-Training-in-NZ");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Pilot-Training-in-NZ")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      NZ
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Pilot-Training-in-Australia");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Pilot-Training-in-Australia")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Australia
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Pilot-Training-in-Europe");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Pilot-Training-in-Europe")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Europe
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Pilot-Training-in-India");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Pilot-Training-in-India")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      India
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  isTypeRatingPage
                    ? "bg-[#2353AB] text-white" // Different background color for "pilot-training"
                    : activeDropdown === 3
                    ? "bg-[#2353AB] hover:text-white"
                    : " text-black"
                }`}
                onClick={() =>
                  setActiveDropdown(activeDropdown === 3 ? null : 3)
                }
              >
                Type Rating{" "}
                <span
                  className='ml-1 text-sm ${
      activeDropdown === 3 ? "text-white" : "text-[#2353AB]"
    }'
                >
                  ▼
                </span>{" "}
                {activeDropdown === 3 && (
                  <ul className="mt-2 bg-white shadow-md rounded-lg p-2 text-black">
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Airbus-A320-Type-Rating");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Airbus-A320-Type-Rating")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Airbus A320
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Boeing-737-Type-Rating");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Boeing-737-Type-Rating")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Boeing 737
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/ATR-Type-Rating");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/ATR-Type-Rating")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      ATR
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  activeDropdown === 4
                    ? "bg-[#2353AB] text-white"
                    : "text-black"
                }`}
                onClick={() =>
                  setActiveDropdown(activeDropdown === 4 ? null : 4)
                }
              >
                Services
                <span
                  className='ml-1 text-sm ${
      activeDropdown === 4 ? "text-white" : "text-[#2353AB]"
    }'
                >
                  ▼
                </span>{" "}
                {activeDropdown === 4 && (
                  <ul className="mt-2 bg-white shadow-md rounded-lg p-2 text-black">
                    {/* <li className="p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer">
                      License conversion
                    </li> */}

                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/DGCA-Medicals");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/DGCA-Medicals")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Class 1-2 Medicals
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/DGCA-computer-number");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/DGCA-computer-number")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      DGCA computer number
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Flight-simulator-practice");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Flight-simulator-practice")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Flight simulator practice
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Psychometric-and-Aptitude-test");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Psychometric-and-Aptitude-test")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Psychometric and Aptitude-test
                    </li>
                    <li
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push("/Cadet-pilot-training");
                      }}
                      className={`p-2 hover:bg-[#2353AB] rounded-lg hover:text-white cursor-pointer ${
                        isActive("/Cadet-pilot-training")
                          ? "bg-[#2353AB] text-white"
                          : "text-black"
                      } `}
                    >
                      Cadet Pilot Training
                    </li>
                  </ul>
                )}
              </li>
              <li
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/Contact-us");
                }}
                className={`cursor-pointer p-4 text-[15px]  text-black ${
                  isActive("/Contact-us") ? "bg-[#2353AB] text-white" : ""
                } rounded-lg hover:bg-[#2353AB] hover:text-white`}
              >
                Contact us
              </li>
              <li
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/How-to-become-pilot");
                }}
                className={`cursor-pointer p-4 text-[15px] text-black ${
                  isActive("/How-to-become-pilot")
                    ? "bg-[#2353AB] text-white"
                    : ""
                } rounded-lg hover:bg-[#2353AB] hover:text-white`}
              >
                How To Become a Pilot
              </li>
              <li
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open("https://claude.ai/public/artifacts/329816fd-bb36-4092-8b26-f43851ca931a", "_blank");
                }}
                className="cursor-pointer p-4 text-[15px] text-black rounded-lg hover:bg-[#2353AB] hover:text-white"
              >
                Cost Calculator
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
