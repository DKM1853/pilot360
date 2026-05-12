"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.png";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  let dropdownTimer;

  const handleMouseEnter = (menu) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (path) => pathname === path;

  const isServicePage = [
    "/DGCA-Medicals",
    "/DGCA-computer-number",
    "/Flight-simulator-practice",
    "/Psychometric-and-Aptitude-test",
    "/Cadet-pilot-training",
  ].includes(pathname);

  const isCareerPage = pathname.includes("classes");
  const isTypeRatingPage = pathname.includes("Type-Rating");
  const isFlightTrainingPage = pathname.includes("Pilot-Training-in");

  const navigate = (path) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    router.push(path);
  };

  const typeRatingLinks = [
    { label: "Airbus A320", path: "/Airbus-A320-Type-Rating" },
    { label: "Boeing 737", path: "/Boeing-737-Type-Rating" },
    { label: "ATR", path: "/ATR-Type-Rating" },
  ];

  const flightTrainingLinks = [
    { label: "USA", path: "/Pilot-Training-in-USA" },
    { label: "South Africa", path: "/Pilot-Training-in-South-Africa" },
    { label: "Canada", path: "/Pilot-Training-in-Canada" },
    { label: "New Zealand", path: "/Pilot-Training-in-NZ" },
    { label: "Australia", path: "/Pilot-Training-in-Australia" },
    { label: "Europe", path: "/Pilot-Training-in-Europe" },
    { label: "India", path: "/Pilot-Training-in-India" },
  ];

  const serviceLinks = [
    { label: "Class 1-2 Medicals", path: "/DGCA-Medicals" },
    { label: "DGCA Computer Number", path: "/DGCA-computer-number" },
    { label: "Flight Simulator Practice", path: "/Flight-simulator-practice" },
    { label: "Psychometric & Aptitude Test", path: "/Psychometric-and-Aptitude-test" },
    { label: "Cadet Pilot Training", path: "/Cadet-pilot-training" },
  ];

  const careerLinks = [
    { label: "DGCA CPL Ground Classes", path: "/DGCA-CPL-ground-classes" },
    { label: "DGCA ATPL Ground Classes", path: "/DGCA-ATPL-ground-classes" },
    { label: "RTR(A) Classes", path: "/RTR(A)-classes" },
    { label: "Airline Preparatory Classes", path: "/Airline-preparatory-classes" },
  ];

  const navItemClass = (active) =>
    `cursor-pointer text-[15px] px-3 py-3 rounded-[60px] whitespace-nowrap transition-colors ${
      active ? "bg-[#2353AB] text-white" : "text-[#2353AB] hover:bg-[#EEF3FF] hover:text-[#2353AB]"
    }`;

  return (
    <>
    {/* Top info bar */}
    <div className="w-full bg-[#2353AB] text-white font-onest">
      <div className="max-w-[95%] mx-auto px-4 md:px-6 py-2 flex items-center justify-end gap-6 text-sm">
        {/* Phone */}
        <a
          href="tel:08490008834"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          <span>08490008834</span>
        </a>

        {/* Email */}
        <a
          href="mailto:connect@pilot360.co"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span>connect@pilot360.co</span>
        </a>
      </div>
    </div>

    <nav className="relative bg-white shadow-md mx-auto rounded-[50px] border-t border-gray-300 w-[100%] md:w-[95%] mt-4 font-onest">
      <div className="flex items-center w-full px-4 md:px-6">

        {/* Logo — left side */}
        <div className="flex items-center flex-shrink-0">
          <Image
            onClick={() => navigate("/")}
            src={logo}
            alt="Pilot 360 Logo"
            className="w-[80px] h-[80px] object-contain cursor-pointer"
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-3xl lg:hidden ml-auto me-4 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center flex-1 justify-between font-medium pl-3">

          {/* 1. Home Page */}
          <li
            onClick={() => navigate("/")}
            className={navItemClass(isActive("/"))}
          >
            Home
          </li>

          {/* 2. How To Become a Pilot */}
          <li
            onClick={() => navigate("/How-to-become-pilot")}
            className={navItemClass(isActive("/How-to-become-pilot"))}
          >
            How To Become a Pilot
          </li>

          {/* 3. Services — mega-menu */}
          <li
            className={`text-[15px] relative cursor-pointer px-3 py-3 rounded-[60px] z-20 whitespace-nowrap transition-colors ${
              isServicePage || activeDropdown === "services"
                ? "bg-[#2353AB] text-white"
                : "text-[#2353AB] hover:bg-[#EEF3FF] hover:text-[#2353AB]"
            }`}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            Services <span className="ml-1 text-xs">▼</span>
            {activeDropdown === "services" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-2xl p-2 w-[260px] z-50 border border-gray-100 space-y-1">
                {serviceLinks.map(({ label, path }) => (
                  <li
                    key={path}
                    onClick={() => navigate(path)}
                    className={`px-4 py-3 rounded-xl cursor-pointer text-sm transition-colors ${
                      isActive(path)
                        ? "bg-[#2353AB] text-white"
                        : "text-gray-700 hover:bg-[#2353AB] hover:text-white"
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* 4. Career Management */}
          <li
            className={`text-[15px] relative cursor-pointer px-3 py-3 rounded-[60px] z-20 whitespace-nowrap transition-colors ${
              isCareerPage || activeDropdown === "career"
                ? "bg-[#2353AB] text-white"
                : "text-[#2353AB] hover:bg-[#EEF3FF] hover:text-[#2353AB]"
            }`}
            onMouseEnter={() => handleMouseEnter("career")}
            onMouseLeave={handleMouseLeave}
          >
            Career Management <span className="ml-1 text-xs">▼</span>
            {activeDropdown === "career" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-2xl p-3 w-[300px] z-50 border border-gray-100 space-y-1">
                {careerLinks.map(({ label, path }) => (
                  <li
                    key={path}
                    onClick={() => navigate(path)}
                    className={`px-4 py-3 rounded-xl cursor-pointer text-sm transition-colors ${
                      isActive(path)
                        ? "bg-[#2353AB] text-white"
                        : "text-gray-700 hover:bg-[#2353AB]/10 hover:text-[#2353AB]"
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* 5. Type Rating */}
          <li
            className={`text-[15px] relative cursor-pointer px-3 py-3 rounded-[60px] z-20 whitespace-nowrap transition-colors ${
              isTypeRatingPage || activeDropdown === "typeRating"
                ? "bg-[#2353AB] text-white"
                : "text-[#2353AB] hover:bg-[#EEF3FF] hover:text-[#2353AB]"
            }`}
            onMouseEnter={() => handleMouseEnter("typeRating")}
            onMouseLeave={handleMouseLeave}
          >
            Type Rating <span className="ml-1 text-xs">▼</span>
            {activeDropdown === "typeRating" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-2xl p-2 w-[200px] z-50 border border-gray-100 space-y-1">
                {typeRatingLinks.map(({ label, path }) => (
                  <li
                    key={path}
                    onClick={() => navigate(path)}
                    className={`px-4 py-3 rounded-xl cursor-pointer text-sm transition-colors ${
                      isActive(path)
                        ? "bg-[#2353AB] text-white"
                        : "text-gray-700 hover:bg-[#2353AB] hover:text-white"
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* 6. Flight Training */}
          <li
            className={`text-[15px] relative cursor-pointer px-3 py-3 rounded-[60px] z-20 whitespace-nowrap transition-colors ${
              isFlightTrainingPage || activeDropdown === "flightTraining"
                ? "bg-[#2353AB] text-white"
                : "text-[#2353AB] hover:bg-[#EEF3FF] hover:text-[#2353AB]"
            }`}
            onMouseEnter={() => handleMouseEnter("flightTraining")}
            onMouseLeave={handleMouseLeave}
          >
            Flight Training <span className="ml-1 text-xs">▼</span>
            {activeDropdown === "flightTraining" && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-2xl p-2 w-[200px] z-50 border border-gray-100 space-y-1">
                {flightTrainingLinks.map(({ label, path }) => (
                  <li
                    key={path}
                    onClick={() => navigate(path)}
                    className={`px-4 py-3 rounded-xl cursor-pointer text-sm transition-colors ${
                      isActive(path)
                        ? "bg-[#2353AB] text-white"
                        : "text-gray-700 hover:bg-[#2353AB] hover:text-white"
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* 8. Contact Us */}
          <li
            onClick={() => navigate("/Contact-us")}
            className={navItemClass(isActive("/Contact-us"))}
          >
            Contact Us
          </li>

          {/* Cost Calculator — CTA */}
          <li
            onClick={() => navigate("/cost-calculator")}
            className={`cursor-pointer text-[15px] px-4 py-3 rounded-[60px] whitespace-nowrap font-semibold transition-colors ${
              isActive("/cost-calculator")
                ? "bg-[#1a3f8a] text-white"
                : "bg-[#2353AB] text-white hover:bg-[#1a3f8a]"
            }`}
          >
            Cost Calculator
          </li>
        </ul>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
            <button
              className="text-2xl absolute top-4 right-4 text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="space-y-3 mt-10">

              <li onClick={() => navigate("/")} className={`cursor-pointer p-4 text-[15px] rounded-lg hover:bg-[#2353AB] hover:text-white ${isActive("/") ? "bg-[#2353AB] text-white" : "text-black"}`}>
                Home Page
              </li>

              <li onClick={() => navigate("/How-to-become-pilot")} className={`cursor-pointer p-4 text-[15px] rounded-lg hover:bg-[#2353AB] hover:text-white ${isActive("/How-to-become-pilot") ? "bg-[#2353AB] text-white" : "text-black"}`}>
                How To Become a Pilot
              </li>

              {/* Services mobile */}
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  isServicePage || activeDropdown === "services" ? "bg-[#2353AB] text-white" : "text-black"
                }`}
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              >
                Services <span className="ml-1">▼</span>
                {activeDropdown === "services" && (
                  <ul className="mt-3 bg-gray-50 rounded-xl p-2 space-y-1 text-black">
                    {serviceLinks.map(({ label, path }) => (
                      <li key={path} onClick={(e) => { e.stopPropagation(); navigate(path); }} className={`p-2 rounded-lg cursor-pointer text-sm hover:bg-[#2353AB] hover:text-white ${isActive(path) ? "bg-[#2353AB] text-white" : "text-black"}`}>{label}</li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Career Management mobile */}
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  isCareerPage || activeDropdown === "career" ? "bg-[#2353AB] text-white" : "text-black"
                }`}
                onClick={() => setActiveDropdown(activeDropdown === "career" ? null : "career")}
              >
                Career Management <span className="ml-1">▼</span>
                {activeDropdown === "career" && (
                  <ul className="mt-3 bg-gray-50 rounded-xl p-2 space-y-1 text-black">
                    {careerLinks.map(({ label, path }) => (
                      <li key={path} onClick={(e) => { e.stopPropagation(); navigate(path); }} className={`p-2 rounded-lg cursor-pointer text-sm hover:bg-[#2353AB] hover:text-white ${isActive(path) ? "bg-[#2353AB] text-white" : "text-black"}`}>{label}</li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Type Rating mobile */}
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  isTypeRatingPage || activeDropdown === "typeRating" ? "bg-[#2353AB] text-white" : "text-black"
                }`}
                onClick={() => setActiveDropdown(activeDropdown === "typeRating" ? null : "typeRating")}
              >
                Type Rating <span className="ml-1">▼</span>
                {activeDropdown === "typeRating" && (
                  <ul className="mt-3 bg-gray-50 rounded-xl p-2 space-y-1 text-black">
                    {typeRatingLinks.map(({ label, path }) => (
                      <li key={path} onClick={(e) => { e.stopPropagation(); navigate(path); }} className={`p-2 rounded-lg cursor-pointer text-sm hover:bg-[#2353AB] hover:text-white ${isActive(path) ? "bg-[#2353AB] text-white" : "text-black"}`}>{label}</li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Flight Training mobile */}
              <li
                className={`relative text-[15px] cursor-pointer p-4 rounded-lg ${
                  isFlightTrainingPage || activeDropdown === "flightTraining" ? "bg-[#2353AB] text-white" : "text-black"
                }`}
                onClick={() => setActiveDropdown(activeDropdown === "flightTraining" ? null : "flightTraining")}
              >
                Flight Training <span className="ml-1">▼</span>
                {activeDropdown === "flightTraining" && (
                  <ul className="mt-3 bg-gray-50 rounded-xl p-2 space-y-1 text-black">
                    {flightTrainingLinks.map(({ label, path }) => (
                      <li key={path} onClick={(e) => { e.stopPropagation(); navigate(path); }} className={`p-2 rounded-lg cursor-pointer text-sm hover:bg-[#2353AB] hover:text-white ${isActive(path) ? "bg-[#2353AB] text-white" : "text-black"}`}>{label}</li>
                    ))}
                  </ul>
                )}
              </li>

              <li onClick={() => navigate("/Contact-us")} className={`cursor-pointer p-4 text-[15px] rounded-lg hover:bg-[#2353AB] hover:text-white ${isActive("/Contact-us") ? "bg-[#2353AB] text-white" : "text-black"}`}>
                Contact Us
              </li>

              <li onClick={() => navigate("/cost-calculator")} className={`cursor-pointer p-4 text-[15px] font-semibold rounded-lg text-white hover:bg-[#1a3f8a] ${isActive("/cost-calculator") ? "bg-[#1a3f8a]" : "bg-[#2353AB]"}`}>
                Cost Calculator
              </li>

            </ul>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
