"use client";
import TrainingSection from "../Components/PilotTrainingSection";
import FAQSection from "../Components/FAQ";
import GroundTrainingSection from "../Components/GroundTrainingSection";
import TrustedBrands from "../Components/TrustedBrands";
import Navbar from "../Components/Navbar";
import bgImage from "../assets/herosection-bg.png"; // Ensure this path is correct.
import React, { useState, useRef, useEffect } from "react";
import heroImage from "../assets/hero-pilot.png"; // Ensure this path is correct.
import flyingPlane from "../assets/flying-plane.png"; // Ensure this path is correct.
import Image from "next/image";
import bgimage from "../assets/why-us-bg.png";
import { useRouter, usePathname } from "next/navigation"; // Use next/navigation in Next.js 13+

// Import unique background images for each card
import bg1 from "../assets/image 20.png";
import bg2 from "../assets/image 20.png";
import bg3 from "../assets/image 20.png";
import bg4 from "../assets/image 20.png";

import icon1 from "../assets/computer.svg"; // Background image path
import icon2 from "../assets/flight-simulator.svg"; // Background image path
import icon3 from "../assets/medicals-icon.svg"; // Background image path
import icon4 from "../assets/flight-practice.svg"; // Background image path
import icon5 from "../assets/training.svg"; // Background image path
import icon6 from "../assets/cadet.svg"; // Background image path

import Image1 from "../assets/gallery/1.jpg"; // Ensure the path is correct.
import Image2 from "../assets/gallery/2.jpg"; // Ensure the path is correct.
import Image3 from "../assets/gallery/3.jpg"; // Ensure the path is correct.
import Image4 from "../assets/gallery/4.jpg"; // Ensure the path is correct.
import Image5 from "../assets/gallery/5.jpg"; // Ensure the path is correct.
import Image6 from "../assets/gallery/6.jpg"; // Ensure the path is correct.
import Image7 from "../assets/gallery/7.jpg"; // Ensure the path is correct.
import Image8 from "../assets/gallery/8.jpg"; // Ensure the path is correct.
import Image9 from "../assets/gallery/9.jpg"; // Ensure the path is correct.
import Image10 from "../assets/gallery/10.jpg"; // Ensure the path is correct.
import Image11 from "../assets/gallery/11.jpg"; // Ensure the path is correct.
import Image12 from "../assets/gallery/12.jpg"; // Ensure the path is correct.
import logo from "../assets/logo.png"; // Ensure this path is correct.
import img1 from "../assets/CPL.png";
import img2 from "../assets/ATPL.png";
import img3 from "../assets/RTR.png";
import img4 from "../assets/airline.png";
import FaqbgImage from "../assets/faq-bg.png"; // Ensure correct path
import partnerbgImage from "../assets/bg-2.jpeg";
import usaFlag from "../assets/USA.png";
import europeFlag from "../assets/europe.jpg";
import SAFlag from "../assets/south_african.png";
import canadaFlag from "../assets/canada.svg";
import NZFlag from "../assets/newzealand-flag.svg";
import ausFlag from "../assets/aus.png";
import indFlag from "../assets/india.svg";

// Import logos (replace with actual paths)
import logo1 from "../assets/logo/air india.png";
import logo2 from "../assets/logo/airindiaexpress.png";
import logo3 from "../assets/logo/airjapan.png";
import logo4 from "../assets/logo/airlingus.png";
import logo5 from "../assets/logo/cathay.png";
import logo6 from "../assets/logo/emirates.png";
import logo7 from "../assets/logo/etihad.png";
import logo8 from "../assets/logo/flydubai.png";
import logo9 from "../assets/logo/indigo.png";
import logo10 from "../assets/logo/koreanair.png";
import logo11 from "../assets/logo/norwegian.png";
import logo12 from "../assets/logo/qatar.png";
import logo13 from "../assets/logo/vistara.png";
import logo14 from "../assets/logo/wizz.png";

import pilot from "../assets/4.png";

import Link from "next/link";

// export const metadata = {
//   title: "Pilot 360 - Simplifying Your Path to Becoming a Pilot",
//   description:
//     "Pilot 360 Offers Expert Pilot Training With DGCA-Approved Guidance. Join Pilot 360 for Global Training, Finance, Scholarships, and Complete Career Support.",
//   keywords: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
//   openGraph: {
//     title: "Pilot 360 - Simplifying Your Path to Becoming a Pilot",
//     description:
//       "Pilot 360 Offers Expert Pilot Training With DGCA-Approved Guidance. Join Pilot 360 for Global Training, Finance, Scholarships, and Complete Career Support.",
//     url: "https://pilot360.co/",
//     siteName: "Pilot360",
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function AdsPage() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
  ];
  const CountryCard = ({ countryName, flagImage }) => {
    const router = useRouter();

    return (
      <div className="min-w-[250px] lg:min-w-[30%] h-[235px] bg-[#A5A5A5] bg-opacity-20 border-2 border-[#A5A5A5] text-white rounded-[24px] p-6 flex flex-col justify-between snap-center">
        <div className="flex items-center space-x-4 mt-[6%] ms-2">
          <Image
            src={flagImage}
            alt="Pilot 360"
            className="w-[60px] h-[45px] bg-[#F0F5FF] p-[5px] border rounded-[8px]"
          />
          <h3 className="text-lg font-semibold">{countryName}</h3>
        </div>
        <a href="#contact">
          <button className="flex items-center justify-between bg-[#801B2B] text-white px-4 py-2 rounded-[16px] shadow hover:bg-[#991E33] w-full h-[60px]">
            Register Now
            <div className="bg-white rounded-full p-[6px]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17.3086L17 7.30859"
                  stroke="#801B2B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7.30859H17V17.3086"
                  stroke="#801B2B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>
    );
  };
  const router = useRouter();

  const images = [
    { id: 1, src: Image1 },
    { id: 2, src: Image2 },
    { id: 3, src: Image3 },
    { id: 4, src: Image4 },
    { id: 5, src: Image5 },
    { id: 6, src: Image6 },
    { id: 7, src: Image7 },
    { id: 8, src: Image8 },
    { id: 9, src: Image9 },
    { id: 10, src: Image10 },
    { id: 11, src: Image11 },
    { id: 12, src: Image12 },
  ];
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRefDesktop = useRef(null);
  const scrollRefMobile = useRef(null);

  const IMAGE_WIDTH = 300; // Adjust based on your image size
  const SCROLL_INTERVAL = 3000; // 3 seconds for auto-scrolling

  // Function to scroll to a specific index
  const scrollToImage = (index, ref) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: index * IMAGE_WIDTH,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollImages = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollToImage(nextIndex, scrollRefDesktop);
        scrollToImage(nextIndex, scrollRefMobile);
        return nextIndex;
      });
    };

    const interval = setInterval(scrollImages, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    // degree: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setStatusMessage("");

    // Trim and validate fields
    const { name, number, email } = formData;

    if (!name.trim() || !number.trim() || !email.trim()) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    // Indian phone number regex (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(number)) {
      setStatusMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://auth.thepilotprep.com/reviews/business/cdihbchudv/pilotprep/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        router.push("/thank-you");
      } else {
        setStatusMessage("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const trainingPrograms = [
    { id: 1, title: "DGCA CPL GROUND CLASSES", image: img1 },
    { id: 2, title: "DCCA ATPL GROUND CLASSES", image: img2 },
    { id: 3, title: "RTR(A) CLASSES", image: img3 },
    { id: 4, title: "AIRLINE PREPARATION CLASSES", image: img4 },
  ];

  const faqs = [
    {
      id: 1,
      question: "What are the eligibility requirements to become a pilot?",
      answer:
        "To enroll in pilot training, you typically need to be at least 17 years old, have a high school diploma or equivalent, and pass a medical examination. Proficiency in English is also required.",
    },
    {
      id: 2,
      question:
        "What types of pilot licenses can I obtain through your training programs?",
      answer:
        "Pilot 360 offers comprehensive training for various licenses, including Private Pilot License (PPL), Commercial Pilot License (CPL), Instrument Rating (IR), and Multi-Engine Rating (MER).",
    },
    {
      id: 3,
      question: "How long does it take to complete pilot training?",
      answer:
        "The duration depends on the type of license you pursue and weather conditions. On average, a CPL program can take 8 to 12 months if completed full-time.",
    },
    {
      id: 4,
      question: "Is financial assistance available for pilot training?",
      answer:
        "Yes, we provide information on financing options, scholarships, and payment plans to help make your pilot training more accessible.",
    },
    {
      id: 5,
      question: "What types of aircraft will I train on?",
      answer:
        "We use modern, well-maintained training aircraft, including single-engine and multi-engine planes, equipped with advanced avionics for a comprehensive training experience.",
    },
    {
      id: 6,
      question: "Do you assist with job placements after training?",
      answer:
        "Yes, we offer career counseling and guidance to help students connect with airlines and aviation companies for potential job opportunities.",
    },
  ];

  const countries = [
    { name: "USA", flag: usaFlag },
    { name: "South Africa", flag: SAFlag },
    { name: "Canada", flag: canadaFlag },
    { name: "NZ", flag: NZFlag },
    { name: "Australia", flag: ausFlag },
    { name: "Europe", flag: europeFlag },
    { name: "India", flag: indFlag },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef(null);
  const [dotCount, setDotCount] = useState(7);

  useEffect(() => {
    const updateDotCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setDotCount(5); // Laptop
      else if (width >= 768) setDotCount(6); // Tablet
      else setDotCount(7); // Mobile
    };

    updateDotCount(); // Initial set
    window.addEventListener("resize", updateDotCount);
    return () => window.removeEventListener("resize", updateDotCount);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.firstChild.offsetWidth;
        const slideIndex = Math.round(scrollLeft / cardWidth);
        setActiveSlide(slideIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSlide = (index) => {
    setActiveSlide(index);
    const scrollContainer = scrollContainerRef.current;
    const cardWidth = scrollContainer.firstChild.offsetWidth;
    scrollContainer.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="pt-[10px] lg:pt-[20px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain", // Ensures the image covers the full container
        backgroundPosition: "top", // Centers the background
        backgroundRepeat: "no-repeat",
      }}
    >
      <nav className="relative bg-white shadow-md mx-auto rounded-[50px] border-t border-gray-300 w-[100%] md:w-[95%] mt-4 flex items-center justify-center font-onest">
        <div className="flex items-center justify-between w-full px-4 md:px-10">
          {/* Mobile Menu Toggle Button */}
          <div className="flex justify-center items-center lg:hidden">
            <Image
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
            <a href="#contact">
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
                About us
              </li>
            </a>
            <a href="#services">
              <li
                className={`text-[18px] relative cursor-pointer p-4 rounded-[60px] z-20 ${
                  activeDropdown === 4 ? "bg-[#2353AB] hover:text-white" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              >
                Our Services
              </li>
            </a>
            <a href="#graduates">
              <li
                className={`cursor-pointer text-[18px] p-4 rounded-[60px] ${
                  isActive("/Contact-us") ? "bg-[#2353AB] text-white" : ""
                } p-2 hover:bg-[#2353AB] hover:text-white`}
              >
                Our Graduates
              </li>
            </a>
            {/* Centered Logo */}
            <div className="flex justify-center items-center mx-6">
              <Image
                src={logo}
                alt="Pilot 360 Logo"
                className="w-[100px] h-[100px] object-contain cursor-pointer"
              />
            </div>
            {/* Right Options */}
            <a href="#ground-school">
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
                Ground School
              </li>
            </a>
            <a href="#faq">
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
                FAQ's
              </li>
            </a>
            <a href="#contact">
              <li
                className={`cursor-pointer text-[18px] p-4 rounded-[60px] ${
                  isActive("/How-to-become-pilot")
                    ? "bg-[#2353AB] text-white"
                    : ""
                } p-2 hover:bg-[#2353AB] hover:text-white`}
              >
                Contact Us
              </li>
            </a>
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
                  About us
                </li>
                <a href="#services">
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
                    Our Services
                  </li>
                </a>
                <a href="#graduates">
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
                    Our Graduates
                  </li>
                </a>
                <a href="#ground-school">
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
                    Ground School
                  </li>
                </a>
                <a href="#faq">
                  <li
                    className={`cursor-pointer p-4 text-[15px]  text-black ${
                      isActive("/Contact-us") ? "bg-[#2353AB] text-white" : ""
                    } rounded-lg hover:bg-[#2353AB] hover:text-white`}
                  >
                    FAQ's
                  </li>
                </a>
                <a href="#contact">
                  <li
                    className={`cursor-pointer p-4 text-[15px] text-black ${
                      isActive("/How-to-become-pilot")
                        ? "bg-[#2353AB] text-white"
                        : ""
                    } rounded-lg hover:bg-[#2353AB] hover:text-white`}
                  >
                    Contact Us
                  </li>
                </a>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <section className="mt-4 w-full h-auto">
        <div className="text-center px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center"></div>
          <div className="relative">
            <h1 className="text-xl md:text-[40px] lg:text-[50px] font-bold mt-2 leading-snug text-[#171717]">
              Become a <span className="text-[#801B2B]">Pilot in 1 year </span>
              with
              <br />
              <span className="text-[#801B2B]">
                Gujarat's Leading Flight School!
              </span>
            </h1>

            {/* SVG Icon */}
            <svg
              width="74"
              height="85"
              viewBox="0 0 74 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-[-45%] md:bottom-[-25%] lg:bottom-[-50%] right-0 md:right-[3%] lg:right-[23%] w-8 md:w-12 lg:w-20" // Positions the icon at the bottom right
            >
              <path
                d="M2.88839 36.2314C4.57073 43.8914 15.5954 57.529 12.9824 82.1913M20.0756 23.0889C33.4766 31.2977 61.7987 52.1992 67.879 70.1346M23.8102 3.53325C30.619 2.03784 49.6179 1.61227 71.1422 11.8733"
                stroke="#4D76BC"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Layout for content */}
        <div className="flex flex-col lg:flex-row justify-between px-4 md:px-8 lg:px-4 mt-8 lg:mt-0">
          {/* Left Text Content */}
          <div className="text-center lg:text-left max-w-sm md:max-w-xl lg:relative left-[5%] hidden lg:block lg:mt-0">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.135 17.445H5.1C5.22 10.44 6.6 9.28499 10.905 6.73499C11.4 6.43499 11.565 5.80499 11.265 5.29499C10.98 4.79999 10.335 4.63499 9.84 4.93499C4.77 7.93499 3 9.76499 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
                fill="#344054"
              />
              <path
                d="M28.365 17.445H21.33C21.45 10.44 22.83 9.28499 27.135 6.73499C27.63 6.43499 27.795 5.80499 27.495 5.29499C27.195 4.79999 26.565 4.63499 26.055 4.93499C20.985 7.93499 19.215 9.76499 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
                fill="#344054"
              />
            </svg>
            <p className="text-[#344054] text-2xl leading-relaxed">
              🏅 DGCA Approved with 17+ Years of Experience. 🤝 Complete
              Assistance from Start to Finish.
            </p>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center z-[5] relative left-0 lg:left-[6%]">
            <Image
              className="lg:w-[70%]"
              src={heroImage}
              alt="Pilot 360"
              priority={true}
            />
          </div>
          {/* flying plane Image */}
          <div className="relative -left-[6%] -top-[7%] hidden lg:flex z-[1]">
            <Image
              src={flyingPlane}
              alt="Pilot 360"
              // layout="fill"
              //   objectFit="contain"
              priority={true}
            />
          </div>
          {/* Right Text Content */}
          <div className="text-center md:mt-[50px] lg:mt-[0px] lg:relative lg:right-[3%] hidden lg:flex">
            <div className="flex flex-col items-center">
              {/* 10 Years */}
              <p className="text-gray-800 font-bold text-lg">
                🌍 Global Training Locations with Accomodations.🎓 100% Finance,
                Placement & Scholarship Support
              </p>
            </div>
          </div>
          {/* Description and Stars (Mobile and Tablet Only) */}
          <div className="lg:hidden items-center text-start mt-4 gap-4 bg-white">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.135 17.445H5.1C5.22 10.44 6.6 9.28499 10.905 6.73499C11.4 6.43499 11.565 5.80499 11.265 5.29499C10.98 4.79999 10.335 4.63499 9.84 4.93499C4.77 7.93499 3 9.76499 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
                fill="#344054"
              />
              <path
                d="M28.365 17.445H21.33C21.45 10.44 22.83 9.28499 27.135 6.73499C27.63 6.43499 27.795 5.80499 27.495 5.29499C27.195 4.79999 26.565 4.63499 26.055 4.93499C20.985 7.93499 19.215 9.76499 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z"
                fill="#344054"
              />
            </svg>
            <ul className="ms-2 text-gray-600 leading-relaxed">
              <li className="text-[14px]">
                🏅 DGCA Approved with 17+ Years of Experience.
              </li>
              <li className="text-[14px]">
                🤝 Complete Assistance from Start to Finish.
              </li>
              <li className="text-[14px]">
                🌍 Global Training Locations with Accomodations.
              </li>
              <li className="text-[14px]">
                🎓 100% Finance, Placement & Scholarship Support
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center px-4 md:px-16 lg:px-32 lg:relative lg:mt-[-5%] z-10">
          {/* First Button */}
          <button className="bg-[#EDEDED] text-gray-800 px-4 py-3 rounded-l-full rounded-r-none shadow-md hover:bg-[#991E33] flex items-center">
            Start Your Pilot Journey
          </button>

          {/* Second Button */}
          <Link href="#contact">
            <button className="bg-[#801B2B] text-white px-8 py-3 rounded-r-full rounded-l-none shadow-md hover:bg-gray-300 flex">
              Let's Fly
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15.75l7.5-7.5m0 0H9m6.75 0v6.75"
                />
              </svg>
            </button>
          </Link>
        </div>
      </section>{" "}
      <section
        className="w-full h-auto bg-cover bg-repeat px-4 py-12 rounded-3xl relative z-[20] mt-5"
        style={{
          backgroundImage: `url(${partnerbgImage.src})`,
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between mb-8">
          <h2 className="text-white text-xl md:text-3xl font-bold mb-4 lg:mb-0">
            Our Partnered Pilot Training Schools{" "}
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex lg:space-x-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-4 md:gap-8 md:mx-6"
          >
            {countries.map((country, index) => (
              <CountryCard
                key={index}
                countryName={country.name}
                flagImage={country.flag}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: dotCount }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeSlide === index ? "bg-[#801B2B]" : "bg-gray-400"
              }`}
              onClick={() => handleSlide(index)}
            ></span>
          ))}
        </div>
      </section>{" "}
      {/* <TrainingLocation /> */}
      <div
        className="relative min-h-[135vh] md:min-h-[130vh] lg:min-h-[135vh] mb-[10px] bg-white flex flex-col" // 🔧 Added flex + flex-col
        style={{
          backgroundImage: `url(${bgimage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="text-center py-8">
          <h2 className="text-[25px] md:text-[40px] lg:text-[50px] font-bold text-black">
            Why Pilot 360 Is the Top Choice for
          </h2>
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-[#801B2B]">
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
        {/* 🔧 Moved this inside, added mt-auto to push to bottom */}
        <div className="flex justify-center py-4 mt-auto">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Join Us Now!
          </a>
        </div>
      </div>
      {/* <div className="flex justify-center py-4 bg-[#FFBFBF] mt-[-10px]">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Join Us Now!
        </a>
      </div> */}
      <div
        className="w-full md:w-[98%] bg-[#181818] py-12 px-4 mx-auto rounded-[20px] mt-12"
        id="services"
      >
        {/* Background Image */}
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
        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="bg-[#801B2B] text-white px-8 py-3 rounded-full hover:bg-blue-700"
          >
            Book a Consultation
          </a>
        </div>
      </div>
      <section className="py-16 bg-white px-4 my-8" id="graduates">
        {/* Title Section */}
        <h2 className="text-center font-bold text-[#344054] mb-6">
          <span className="text-[35px]">
            Our Pilot Graduates &{" "}
            <span className="text-[#801B2B]">Where They Fly</span>
          </span>
        </h2>

        <div className="hidden md:grid grid-rows-3 grid-cols-4 gap-4 w-full mt-12">
          {images.map((image) => (
            <div key={image.id} className="w-full">
              <Image
                src={image.src}
                alt={`Pilot image ${image.id}`}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full h-[450px]"
              />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="relative md:hidden">
          <div
            ref={scrollRefMobile}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {images.map((image) => (
              <div key={image.id} className={`flex-shrink-0 w-72`}>
                <Image
                  src={image.src}
                  alt={`Pilot image ${image.id}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-[350px]"
                />
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index); // ✅ Update currentIndex when clicking a dot
                  scrollToImage(index, scrollRefMobile);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#801B2B] scale-125"
                    : "bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-10 mt-10">
        <div className="container mx-auto text-center">
          {/* <h2 className="text-[30px] font-semibold text-[#171717] mb-6 px-2">
            Where Our Graduates Fly,{" "}
            <span className="text-[#801B2B]">Proudly Placed Pilots</span>
          </h2> */}

          {/* Auto-scrolling section */}
          <div className="overflow-hidden relative">
            <div className="flex gap-6 items-center animate-scroll px-6">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={120}
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>{" "}
      <div className="flex justify-center mt-8">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700"
        >
          Take Off Now
        </a>
      </div>
      <div
        className="bg-black text-white py-12 px-4 md:px-10 lg:px-20 mt-12"
        id="ground-school"
      >
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          Explore Our Ground School Training Programs
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="relative overflow-hidden rounded-lg"
            >
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
      <section
        className="w-full py-16 bg-cover bg-center px-4 bg-white"
        style={{ backgroundImage: `url(${FaqbgImage.src})` }}
        id="faq"
      >
        <div className="max-w-7xl mx-auto">
          {/* FAQ Title */}
          <div className="text-left mb-12">
            <p className="text-sm uppercase text-gray-500">FAQ</p>
            <h2 className="text-4xl font-bold text-black">
              Frequently Asked <br />
              Questions
            </h2>
          </div>

          {/* FAQ Grid */}
          <div className="lg:grid gap-y-8 sm:grid-cols-1 md:grid-cols-16">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`relative col-span-5 w-full rounded-[8px] p-6 transition-all ${
                  index % 2 === 0
                    ? "bg-[#2353AB] text-white"
                    : "text-black lg:ms-[5%]"
                } sm:col-span-12`}
                style={{
                  gridColumn: index % 2 === 0 ? "2 / span 5" : "7 / span 5",
                  // marginTop: index !== 0 ? "-20px" : "0", // Slight overlap effect
                }}
              >
                <h3 className="text-[15px] lg:text-[24px] font-bold">
                  {faq.question}
                </h3>
                <p className="text-[10px] lg:text-[18px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="w-full flex flex-col items-center px-4 py-10 md:py-16 bg-white"
        id="contact"
      >
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-[30px] md:text-[40px] lg:text-[60px] font-bold text-[#344054]">
            Let's Start Your Pilot Journey!
          </h2>
          <h3 className="text-[30px] md:text-[40px] lg:text-[60px] font-bold text-[#801B2B]">
            Talk to the Captain Today
          </h3>
        </div>

        <div className="py-12 px-4 md:px-12 lg:px-20">
          <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden">
            {/* Right: Image Section */}
            <div className="hidden md:flex md:w-1/2 items-end p-0 me-4 rounded-lg">
              <Image
                src={pilot} // Replace with your image path
                alt="Doctor Illustration"
                width={700} // Adjust width as needed
                height={700} // Adjust height as needed
                className="w-full h-auto md:h-[400px] object-cover rounded-lg"
              />
            </div>
            {/* Left: Form Section */}
            <div className="flex-1 p-6 md:p-10 bg-gray-100">
              {/* Title */}
              <h2
                className="text-2xl md:text-3xl font-bold text-[#004AAB] mb-4"
                style={{
                  fontFamily: "Nunito",
                }}
              >
                Register Now!
              </h2>

              {/* Form */}
              <form
                style={{
                  fontFamily: "Nunito",
                }}
              >
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                    required
                    style={{
                      fontFamily: "Nunito",
                      color: "black", // Ensure text color is black
                    }}
                  />
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                    required
                    style={{
                      color: "black", // Ensure text color is black
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                    required
                    style={{
                      color: "black", // Ensure text color is black
                    }}
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                    required
                    style={{
                      color: "black", // Ensure text color is black
                    }}
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`mt-6 w-full ${
                    isSubmitting ? "bg-blue-400" : "bg-blue-800"
                  } text-white py-3 rounded-md font-semibold hover:bg-blue-900 transition`}
                  style={{
                    fontFamily: "Nunito",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Let's Fly"}
                </button>
              </form>

              {/* Status Message */}
              {statusMessage && (
                <p className="mt-4 text-center text-lg font-medium text-[#004AAB]">
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Key Information Points */}
        <div className="mt-6 flex flex-row justify-center md:gap-10 text-gray-700 text-sm md:text-base">
          <div className="flex items-center ">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2233 5.53059L17.6333 8.35059C17.8233 8.74059 18.3333 9.11059 18.7633 9.19059L21.3133 9.61059C22.9433 9.88059 23.3233 11.0606 22.1533 12.2406L20.1633 14.2306C19.8333 14.5606 19.6433 15.2106 19.7533 15.6806L20.3233 18.1406C20.7733 20.0806 19.7333 20.8406 18.0233 19.8206L15.6333 18.4006C15.2033 18.1406 14.4833 18.1406 14.0533 18.4006L11.6633 19.8206C9.95332 20.8306 8.91332 20.0806 9.36332 18.1406L9.93332 15.6806C10.0233 15.2006 9.83332 14.5506 9.50332 14.2206L7.51332 12.2306C6.34332 11.0606 6.72332 9.88059 8.35332 9.60059L10.9033 9.18059C11.3333 9.11059 11.8433 8.73059 12.0333 8.34059L13.4433 5.52059C14.2133 4.00059 15.4533 4.00059 16.2233 5.53059Z"
                fill="#292D32"
              />
              <path
                d="M8.83337 6.07031H2.83337C2.42337 6.07031 2.08337 5.73031 2.08337 5.32031C2.08337 4.91031 2.42337 4.57031 2.83337 4.57031H8.83337C9.24337 4.57031 9.58337 4.91031 9.58337 5.32031C9.58337 5.73031 9.24337 6.07031 8.83337 6.07031Z"
                fill="#292D32"
              />
              <path
                d="M5.83337 20.0703H2.83337C2.42337 20.0703 2.08337 19.7303 2.08337 19.3203C2.08337 18.9103 2.42337 18.5703 2.83337 18.5703H5.83337C6.24337 18.5703 6.58337 18.9103 6.58337 19.3203C6.58337 19.7303 6.24337 20.0703 5.83337 20.0703Z"
                fill="#292D32"
              />
              <path
                d="M3.83337 13.0703H2.83337C2.42337 13.0703 2.08337 12.7303 2.08337 12.3203C2.08337 11.9103 2.42337 11.5703 2.83337 11.5703H3.83337C4.24337 11.5703 4.58337 11.9103 4.58337 12.3203C4.58337 12.7303 4.24337 13.0703 3.83337 13.0703Z"
                fill="#292D32"
              />
            </svg>

            <span className="text-xs md:text-lg">4.9/5 Average Ratings</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8099 5.81031V6.55031L14.2699 4.50031C12.9299 3.73031 11.0599 3.73031 9.72994 4.50031L6.18994 6.56031V5.81031C6.18994 3.56031 7.41994 2.32031 9.66994 2.32031H14.3299C16.5799 2.32031 17.8099 3.56031 17.8099 5.81031Z"
                fill="#292D32"
              />
              <path
                d="M17.84 8.29055L17.7 8.22055L16.34 7.44055L13.52 5.81055C12.66 5.31055 11.34 5.31055 10.48 5.81055L7.66 7.43055L6.3 8.23055L6.12 8.32055C4.37 9.50055 4.25 9.72055 4.25 11.6105V16.1305C4.25 18.0205 4.37 18.2405 6.16 19.4505L10.48 21.9405C10.91 22.2005 11.45 22.3105 12 22.3105C12.54 22.3105 13.09 22.1905 13.52 21.9405L17.88 19.4205C19.64 18.2405 19.75 18.0305 19.75 16.1305V11.6105C19.75 9.72055 19.63 9.50055 17.84 8.29055ZM14.79 13.8205L14.18 14.5705C14.08 14.6805 14.01 14.8905 14.02 15.0405L14.08 16.0005C14.12 16.5905 13.7 16.8905 13.15 16.6805L12.26 16.3205C12.12 16.2705 11.89 16.2705 11.75 16.3205L10.86 16.6705C10.31 16.8905 9.89 16.5805 9.93 15.9905L9.99 15.0305C10 14.8805 9.93 14.6705 9.83 14.5605L9.21 13.8205C8.83 13.3705 9 12.8705 9.57 12.7205L10.5 12.4805C10.65 12.4405 10.82 12.3005 10.9 12.1805L11.42 11.3805C11.74 10.8805 12.25 10.8805 12.58 11.3805L13.1 12.1805C13.18 12.3105 13.36 12.4405 13.5 12.4805L14.43 12.7205C15 12.8705 15.17 13.3705 14.79 13.8205Z"
                fill="#292D32"
              />
            </svg>

            <span className="text-xs md:text-lg">17+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2068 2.44016L9.7068 0.380156C9.1368 0.170156 8.2068 0.170156 7.6368 0.380156L2.1368 2.44016C1.0768 2.84016 0.216797 4.08016 0.216797 5.21016V13.3102C0.216797 14.1202 0.746797 15.1902 1.3968 15.6702L6.8968 19.7802C7.8668 20.5102 9.4568 20.5102 10.4268 19.7802L15.9268 15.6702C16.5768 15.1802 17.1068 14.1202 17.1068 13.3102V5.21016C17.1168 4.08016 16.2568 2.84016 15.2068 2.44016ZM12.1468 8.04016L7.8468 12.3402C7.6968 12.4902 7.5068 12.5602 7.3168 12.5602C7.1268 12.5602 6.9368 12.4902 6.7868 12.3402L5.1868 10.7202C4.8968 10.4302 4.8968 9.95016 5.1868 9.66016C5.4768 9.37016 5.9568 9.37016 6.2468 9.66016L7.3268 10.7402L11.0968 6.97016C11.3868 6.68016 11.8668 6.68016 12.1568 6.97016C12.4468 7.26016 12.4468 7.75016 12.1468 8.04016Z"
                fill="#292D32"
              />
            </svg>
            <span className="text-xs md:text-lg">Certified Pilot Academy</span>
          </div>
        </div>
      </section>
    </div>
  );
}
