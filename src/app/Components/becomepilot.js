"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const steps = [
  {
    step: 1,
    title: "Class 2 Medicals",
    description:
      "Create an **eGCA ID** and schedule an appointment for your Class 2 Medical examination.",
    timeline: "45-90 days",
    help: "Don't worry—we'll guide you through the process and schedule your appointment for seamless completion.",
    align: "left",
  },
  {
    step: 2,
    title: "Computer Number Application",
    description: "Apply for your **Special Number** via DGCA.",
    timeline: "45-90 days",
    help: "Don't worry—we'll guide you through the process and schedule your appointment for seamless completion.",
    align: "right",
  },
  {
    step: 3,
    title: "Enroll for Ground Classes",
    description:
      "Build a strong foundation for your training by enrolling in our ground classes.",
    help: "Learn from experienced **Airline Captains**. Access the best study material and guidance.",
    align: "left",
  },
  {
    step: 4,
    title: "Class 1 Medicals",
    description:
      "Class 1 Medical by DGCA is mandatory for Commercial Pilot License (CPL) holders. Conducted at DGCA-approved medical centers, it includes comprehensive tests on vision, hearing, cardiovascular health, and overall fitness for professional flying.",
    help: "Pilot 360 guides aspiring pilots through DGCA Class medicals with medical assistance, documentation support, and approved medical center coordination.",
    align: "right",
  },
  {
    step: 5,
    title: "Clear DGCA Exams",
    description:
      "Build a strong foundation for your training by enrolling in our ground classes.",
    subjects: [
      "Navigation",
      "Meteorology",
      "Air Navigation",
      "Technical General",
      "Technical Specific",
    ],
    examFrequency: "Exams are conducted every alternate month.",
    help: "With our expert guidance and study resources, you'll be well-prepared to excel!",
    align: "left",
  },
  {
    step: 6,
    title: "Clear RTR Exams",
    description: "Pass the Radio Telephony",
    parts: ["Part 1: Transmission", "Part 2: Viva"],
    help: "With our expert guidance and study resources, you'll be well-prepared to excel!",
    align: "right",
  },
  {
    step: 7,
    title: "Flight School Selection",
    description:
      "Build a strong foundation for your training by enrolling in our ground classes.",
    chooseDestination: [
      "USA: 8 months (guaranteed)",
      "South Africa: 14 months (guaranteed)",
      "Philippines: 12 months",
      "India: 12 months",
      "New Zealand: 14-18 months",
      "Australia: 16-24 months",
    ],
    help: "With our expert guidance and study resources, you'll be well-prepared to excel!",
    align: "left",
  },
  {
    step: 8,
    title: "Visa Application",
    description:
      "Build a strong foundation for your training by enrolling in our ground classes.",
    whatToDo: "Apply for a visa for your chosen flight school",
    help: "**PSGBGP** will provide end-to-end visa assistance to ensure a smooth process",
    align: "right",
  },
  {
    step: 9,
    title: "Begin Your Flight Training",
    description:
      "Build a strong foundation for your training by enrolling in our ground classes.",
    whatToAchieve:
      "Obtain your **Foreign CPL License** within the timeline specified by your destination.",
    help: "With our expert guidance and study resources, you'll be well-prepared to excel!",
    align: "left",
  },
  {
    step: 10,
    title: "License Conversion",
    description:
      "Build a strong foundation for your training by enrolling in our ground classes.",
    whatToDo: "Convert your **FAA CPL License to DGCA CPL** in India.",
    help: "With our expert guidance and study resources, you'll be well-prepared to excel!",
    align: "right",
  },
  {
    step: 11,
    title: "Airline Preparation",
    description:
      "Build a strong foundation for your training by enrolling in our ground classes.",
    whatWeOffer: [
      "Get ready for your **Airline Selection** process with our comprehensive tools:",
      "- Aptitude and Psychometric Tests",
      "- Group Discussion",
      "- Personal Interview",
    ],
    help: "With our expert guidance and study resources, you'll be well-prepared to excel!",
    align: "left",
  },
  {
    step: 12,
    title: "Congratulations!",
    description:
      "Achieve your dream job as an **Airline Pilot** and take to the skies!",
    help: "Welcome to the aviation industry! Your journey to becoming a professional pilot is complete.",
    align: "right",
  },
];

const shouldShowHelp = (stepNumber) => {
  return ![6, 9, 10, 11, 12].includes(stepNumber);
};

export default function BecomePilot() {
  const pathRef = useRef(null);
  const mobilepathRef = useRef(null);
  const planeRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const path =
      window.innerWidth >= 1024 ? pathRef.current : mobilepathRef.current;
    const plane = planeRef.current;
    let tl;

    if (path && plane) {
      // Reset rotation before starting animation
      gsap.set(plane, { rotation: 0 });

      tl = gsap.timeline({ repeat: -1 });

      const totalSteps = 12; // Change this based on how many steps you want
      const stepDuration = 5; // Duration to move between steps
      const pauseDuration = 2; // Pause at each step (in seconds)

      for (let i = 0; i < totalSteps; i++) {
        tl.to(plane, {
          motionPath: {
            path: path,
            align: path,
            autoRotate: window.innerWidth >= 1024 ? -90 : false,
            alignOrigin: [0.5, 0.5],
            start: i / totalSteps,
            end: (i + 1) / totalSteps,
          },
          duration: stepDuration,
          ease: "linear",
          onUpdate: () => {
            const progress = tl.progress();
            const stepIndex = Math.floor(progress * totalSteps);
            setActiveStep(stepIndex);
          },
        });

        // Add pause after moving to each step
        tl.to({}, { duration: pauseDuration });
      }
    }

    const handleResize = () => {
      const newPath =
        window.innerWidth >= 1024 ? pathRef.current : mobilepathRef.current;
      if (newPath && plane) {
        tl.kill();
        gsap.set(plane, { clearProps: "all", rotation: 0 }); // Reset rotation after resizing

        tl = gsap.timeline({ repeat: -1 });

        for (let i = 0; i < totalSteps; i++) {
          tl.to(plane, {
            motionPath: {
              path: newPath,
              align: newPath,
              autoRotate: window.innerWidth >= 1024 ? -90 : false,
              alignOrigin: [0.5, 0.5],
              start: i / totalSteps,
              end: (i + 1) / totalSteps,
            },
            duration: stepDuration,
            ease: "linear",
            onUpdate: () => {
              const progress = tl.progress();
              const stepIndex = Math.floor(progress * totalSteps);
              setActiveStep(stepIndex);
            },
          });

          // Add pause after moving to each step
          tl.to({}, { duration: pauseDuration });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="container"
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      <svg
        width="176"
        height="509"
        viewBox="0 0 176 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[25%] -right-10 w-40 h-80 rotate-12 lg:hidden"
        aria-hidden="true"
      >
        <path
          d="M37.5722 136.938C25.6722 125.618 16.3722 112.594 9.67219 97.5665C2.97219 82.6393 -1.82781 67.3113 0.672194 50.8813C5.67219 17.8211 37.8722 -2.61619 70.0722 0.289108C103.572 3.39477 131.672 26.0361 151.072 52.2839C169.272 76.9289 179.972 107.184 180.772 137.84C181.772 171.902 169.372 202.558 150.272 230.208C140.072 245.035 128.472 259.061 119.372 274.589C111.372 288.214 105.672 303.141 102.572 318.77C96.6722 349.225 102.072 381.384 116.772 408.533C131.372 435.483 154.472 456.922 180.972 471.949C231.172 500.501 297.072 507.213 347.872 476.457C354.372 472.55 360.472 468.242 366.272 463.333C371.872 458.525 380.172 466.639 374.472 471.548C329.772 510.82 265.972 516.731 210.972 498.197C154.272 479.062 104.172 434.18 91.6722 373.77C85.4722 343.715 88.9723 312.558 101.272 284.507C115.372 252.349 142.072 227.704 157.272 196.046C184.372 139.643 164.372 71.1183 117.472 31.9469C92.2722 10.9085 52.6722 0.18895 25.0722 23.231C11.6722 34.3512 6.47224 50.7812 6.47224 67.9124C6.57224 85.1438 13.7723 101.173 22.3723 115.8C26.7723 123.213 32.1722 130.026 37.9722 136.437C38.2722 136.838 37.8722 137.239 37.5722 136.938Z"
          fill="#801B2B"
        />
      </svg>

      <svg
        width="281"
        height="509"
        viewBox="0 0 281 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[18%] -left-10 w-40 h-80 rotate-12 lg:hidden"
      >
        <path
          d="M-58.4278 371.871C-70.3278 383.191 -79.6278 396.215 -86.3278 411.242C-93.0278 426.17 -97.8278 441.498 -95.3278 457.927C-90.3278 490.988 -58.1278 511.425 -25.9278 508.52C7.57222 505.414 35.6722 482.773 55.0722 456.525C73.2722 431.88 83.9723 401.625 84.7723 370.969C85.7723 336.907 73.3723 306.251 54.2723 278.601C44.0723 263.774 32.4723 249.748 23.3723 234.22C15.3723 220.595 9.67222 205.668 6.57222 190.039C0.67222 159.584 6.07229 127.425 20.7723 100.275C35.3723 73.3263 58.4722 51.8872 84.9722 36.8598C135.172 8.30774 201.072 1.5955 251.872 32.3516C258.372 36.2587 264.472 40.5666 270.272 45.4755C275.872 50.2843 284.172 42.1695 278.472 37.2605C233.772 -2.01107 169.972 -7.92185 114.972 10.6119C58.2722 29.7468 8.1722 74.6287 -4.3278 135.039C-10.5278 165.094 -7.02771 196.25 5.27229 224.302C19.3723 256.46 46.0723 281.105 61.2723 312.763C88.3723 369.166 68.3722 437.691 21.4722 476.862C-3.72776 497.9 -43.3278 508.62 -70.9278 485.578C-84.3278 474.458 -89.5278 458.028 -89.5278 440.896C-89.4278 423.665 -82.2277 407.636 -73.6277 393.009C-69.2277 385.596 -63.8278 378.783 -58.0278 372.371C-57.7278 371.971 -58.1278 371.57 -58.4278 371.871Z"
          fill="#801B2B"
        />
      </svg>

      <svg
        width="281"
        height="509"
        viewBox="0 0 281 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[43%] -right-10 w-40 h-80 rotate-12 lg:hidden"
      >
        <path
          d="M-58.4278 371.871C-70.3278 383.191 -79.6278 396.215 -86.3278 411.242C-93.0278 426.17 -97.8278 441.498 -95.3278 457.927C-90.3278 490.988 -58.1278 511.425 -25.9278 508.52C7.57222 505.414 35.6722 482.773 55.0722 456.525C73.2722 431.88 83.9723 401.625 84.7723 370.969C85.7723 336.907 73.3723 306.251 54.2723 278.601C44.0723 263.774 32.4723 249.748 23.3723 234.22C15.3723 220.595 9.67222 205.668 6.57222 190.039C0.67222 159.584 6.07229 127.425 20.7723 100.275C35.3723 73.3263 58.4722 51.8872 84.9722 36.8598C135.172 8.30774 201.072 1.5955 251.872 32.3516C258.372 36.2587 264.472 40.5666 270.272 45.4755C275.872 50.2843 284.172 42.1695 278.472 37.2605C233.772 -2.01107 169.972 -7.92185 114.972 10.6119C58.2722 29.7468 8.1722 74.6287 -4.3278 135.039C-10.5278 165.094 -7.02771 196.25 5.27229 224.302C19.3723 256.46 46.0723 281.105 61.2723 312.763C88.3723 369.166 68.3722 437.691 21.4722 476.862C-3.72776 497.9 -43.3278 508.62 -70.9278 485.578C-84.3278 474.458 -89.5278 458.028 -89.5278 440.896C-89.4278 423.665 -82.2277 407.636 -73.6277 393.009C-69.2277 385.596 -63.8278 378.783 -58.0278 372.371C-57.7278 371.971 -58.1278 371.57 -58.4278 371.871Z"
          fill="#801B2B"
        />
      </svg>

      {/* Desktop Path SVG */}
      <svg
        width="684"
        height="3773"
        viewBox="0 0 684 3773"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:block"
      >
        <path
          ref={pathRef}
          d="M345.5 0.5V58.9611C345.5 102.709 317.063 141.379 275.303 154.417L75.2192 216.886C-16.0898 245.395 -19.1046 373.519 70.7625 406.29L367.5 514.5V514.5C515.71 570.477 484.022 788.779 326.013 800.307L200 809.5V809.5C136.348 821.9 130.033 910.502 191.284 931.803L578.093 1066.32C646.615 1090.15 688.212 1159.66 676.827 1231.31V1231.31C666.286 1297.64 612.879 1348.85 546.16 1356.6L237.503 1392.42C146.195 1403.02 85.4443 1492.03 108.853 1580.92L110.03 1585.39C126.808 1649.1 184.413 1693.5 250.294 1693.5H271.915C403.304 1693.5 460.032 1860 355.976 1940.22V1940.22C252.672 2019.86 307.722 2185.13 438.148 2186.92L484.149 2187.55C599.042 2189.13 671.647 2311.61 617.885 2413.16L580.386 2483.99C548.056 2545.06 486.846 2585.45 417.984 2591.16L288.53 2601.9C244.634 2605.54 203.009 2622.95 169.595 2651.65L143.775 2673.83C42.544 2760.77 62.7289 2922.8 182.197 2982.25L186.145 2984.21C224.689 3003.4 268.952 3007.69 310.465 2996.28L348.928 2985.7C477.889 2950.24 589.073 3082.34 532.124 3203.36V3203.36C507.967 3254.69 457.934 3288.95 401.338 3292.89L172.067 3308.89C86.0911 3314.89 46.1372 3418.46 105.809 3480.64V3480.64C123.605 3499.19 147.1024 3510.3 173.431 3511.75L452.973 3527.47C580.765 3534.66 678.451 3644.22 671 3772V3772"
          stroke="#801B2B"
          strokeWidth="10"
          strokeDasharray="16 16"
        />
      </svg>

      {/* Mobile Path SVG */}
      <svg
        width="100%"
        height="4786"
        viewBox="0 0 3 4786"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 lg:hidden"
      >
        <path
          ref={mobilepathRef}
          d="M1.5 0.5V205.321V286.642L1.5 491V765.5V958V1119V1197.5V1460V1734V1882V2127.5V2260.5V2559V2827.5V3266.5V3348L1.5 3575L1.5 3691.03V3784.5L1.5 3988L1.5 4184.5L1.5 4365.5V4454.5V4540.5V4785.5"
          stroke="#801B2B"
          strokeWidth="2"
          strokeDasharray="16 16"
        />
      </svg>

      {/* Airplane SVG */}
      <svg
        ref={planeRef}
        width="167"
        height="120"
        viewBox="0 0 167 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0"
        style={{ transform: "rotate(0deg)" }} // Ensures no rotation
      >
        <g filter="url(#filter0_d_159_24105)">
          <path
            d="M99.4039 109.343C100.147 108.571 100.204 107.514 99.5754 106.628C99.1467 106.027 99.0038 105.999 93.4022 105.999H87.6577L88.2293 105.37C91.5731 101.712 94.031 92.2807 94.031 83.2209V80.8488H119.81C134.7 80.8488 146.532 80.7059 147.732 80.563C151.476 80.0772 154.477 78.2481 155.763 75.6759C156.449 74.3327 156.535 71.5604 155.906 70.0743C154.934 67.7594 152.19 65.3301 149.275 64.1869C145.103 62.5579 109.75 59.4141 95.7172 59.4141H92.3162V58.5567C92.3162 58.0995 91.8589 51.4976 91.3159 43.9526C90.7729 36.379 90.3156 29.9486 90.3156 29.6913C90.3156 29.2626 90.8586 29.1769 94.8026 29.0054C104.234 28.6053 106.492 28.0909 108.835 25.7474C110.15 24.4327 110.721 22.8037 110.436 21.2604C110.178 19.8885 108.607 18.1738 106.835 17.3735C105.377 16.7162 105.063 16.6876 97.2319 16.6019L89.1724 16.5161V15.8874C89.1724 15.5444 88.9152 14.7442 88.6294 14.1155C86.143 8.62818 80.1984 8.62818 77.712 14.1155C77.4262 14.7442 77.169 15.5444 77.169 15.8874V16.5161L69.081 16.6019L61.0215 16.6876L59.3068 17.545C58.3636 18.0309 57.249 18.8883 56.7632 19.4884C55.0484 21.6605 55.82 24.7757 58.5923 26.6905C60.8215 28.2338 63.0221 28.6339 71.5102 29.0054L76.1116 29.2055L75.9401 31.2346C75.8543 32.3492 75.3685 39.1512 74.8541 46.3532L73.9109 59.4141H70.5957C60.2785 59.4141 37.8435 61.1289 23.468 62.9866C18.8381 63.5867 17.9521 63.7868 16.123 64.6728C13.6937 65.8159 11.4074 67.9308 10.5786 69.7885C9.80691 71.4175 9.80691 74.2183 10.5786 75.6759C11.8646 78.2481 14.8655 80.0772 18.6094 80.563C19.8098 80.7059 31.6131 80.8488 46.4745 80.8488H72.2247L72.3962 85.0786C72.7677 93.7382 74.654 100.826 77.6263 104.713L78.598 105.999H73.025C67.8235 105.999 67.4234 106.027 66.8803 106.57C66.1087 107.342 66.1373 108.6 66.9661 109.371L67.6234 110H83.1993H98.8038L99.4039 109.343Z"
            fill="#801B2B"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_159_24105"
            x="0"
            y="0"
            width="166.331"
            height="120"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_159_24105"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_159_24105"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-14 py-16">
        <h1 className="mb-16 text-center text-4xl font-bold">
          Steps to become pilot
        </h1>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative -space-y-[60px]">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex ${
                step.align === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full max-w-md rounded-lg p-8 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-red-400 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-red-50${
                  activeStep === index
                    ? "scale-105 border-4 border-red-500 bg-gradient-to-r from-red-100 to-yellow-50 shadow-lg shadow-red-300"
                    : "border border-gray-300 bg-white"
                }`}
              >
                <div className="mb-4 text-xl text-gray-500 text-right">
                  Step {step.step}
                </div>
                <h2 className="mb-4 text-2xl font-bold">{step.title}</h2>
                <p
                  className="mb-4 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: step.description.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
                {step.timeline && (
                  <div className="mb-4">
                    <span className="font-medium">Timeline:</span>{" "}
                    {step.timeline}
                  </div>
                )}
                {step.examFrequency && (
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">Exam Frequency:</h3>
                    <p className="text-gray-600">{step.examFrequency}</p>
                  </div>
                )}
                {step.subjects && (
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">Subjects to Clear:</h3>
                    <ul className="list-inside list-disc text-gray-600">
                      {step.subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {step.parts && (
                  <div className="mb-4">
                    <ul className="list-none text-gray-600">
                      {step.parts.map((part, idx) => (
                        <li key={idx}>{part}</li>
                      ))}
                    </ul>
                    {step.parts && (
                      <div className="mt-4 ">
                        <p className="font-bold text-black">How We Help:</p>
                        <p className="mt-2 text-gray-600">{step.help}</p>
                      </div>
                    )}
                  </div>
                )}
                {step.chooseDestination && (
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">
                      Choose Your Destination:
                    </h3>
                    <ul className="list-inside list-disc text-gray-600">
                      {step.chooseDestination.map((destination, idx) => (
                        <li key={idx}>{destination}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {step.whatToDo && (
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">What You Need to Do:</h3>
                    <p
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: step.whatToDo.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </div>
                )}
                {step.whatToAchieve && (
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">
                      What You&apos;ll Achieve:
                    </h3>
                    <p
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: step.whatToAchieve.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </div>
                )}
                {step.whatWeOffer && (
                  <div className="mb-4">
                    <h3 className="mb-2 font-medium">What We Offer:</h3>
                    <ul className="list-none space-y-1 text-gray-600">
                      {step.whatWeOffer.map((offer, idx) => (
                        <li
                          key={idx}
                          dangerouslySetInnerHTML={{
                            __html: offer.replace(
                              /\*\*(.*?)\*\*/g,
                              "<strong>$1</strong>"
                            ),
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                )}
                {shouldShowHelp(step.step) && (
                  <div className="space-y-2">
                    <h3 className="font-bold">How We Help:</h3>
                    <p
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: step.help.replace(
                          /\*\*(.*?)\*\*/g,
                          "<strong>$1</strong>"
                        ),
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  key={index}
                  className={`rounded-lg p-6 shadow-lg transition duration-300 transform ${
                    activeStep === index
                      ? "scale-105 border-4 border-red-500 bg-gradient-to-r from-red-100 to-yellow-50 shadow-lg shadow-red-300 opacity-[90%]" // Add opacity when active
                      : "border border-gray-300 bg-white"
                  }`}
                >
                  <div className="mb-4 text-lg text-gray-500 text-right">
                    Step {step.step}
                  </div>
                  <h2 className="mb-4 text-xl font-bold">{step.title}</h2>
                  <p
                    className="mb-4 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: step.description.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  {step.timeline && (
                    <div className="mb-4">
                      <span className="fontmedium">Timeline:</span>{" "}
                      {step.timeline}
                    </div>
                  )}
                  {step.examFrequency && (
                    <div className="mb-4">
                      <h3 className="mb-2 font-medium">Exam Frequency:</h3>
                      <p className="text-gray-600">{step.examFrequency}</p>
                    </div>
                  )}
                  {step.subjects && (
                    <div className="mb-4">
                      <h3 className="mb-2 font-medium">Subjects to Clear:</h3>
                      <ul className="list-inside list-disc text-gray-600">
                        {step.subjects.map((subject, idx) => (
                          <li key={idx}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.parts && (
                    <div className="mb-4">
                      <ul className="list-none text-gray-600">
                        {step.parts.map((part, idx) => (
                          <li key={idx}>{part}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.chooseDestination && (
                    <div className="mb-4">
                      <h3 className="mb-2 font-medium">
                        Choose Your Destination:
                      </h3>
                      <ul className="list-inside list-disc text-gray-600">
                        {step.chooseDestination.map((destination, idx) => (
                          <li key={idx}>{destination}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.whatToDo && (
                    <div className="mb-4">
                      <h3 className="mb-2 font-medium">What You Need to Do:</h3>
                      <p
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: step.whatToDo.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    </div>
                  )}
                  {step.whatToAchieve && (
                    <div className="mb-4">
                      <h3 className="mb-2 font-medium">
                        What You&apos;ll Achieve:
                      </h3>
                      <p
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: step.whatToAchieve.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    </div>
                  )}
                  {step.whatWeOffer && (
                    <div className="mb-4">
                      <h3 className="mb-2 font-medium">What We Offer:</h3>
                      <ul className="list-none space-y-1 text-gray-600">
                        {step.whatWeOffer.map((offer, idx) => (
                          <li
                            key={idx}
                            dangerouslySetInnerHTML={{
                              __html: offer.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                  {shouldShowHelp(step.step) && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h3 className="font-bold text-sm">How We Help:</h3>
                      <p
                        className="text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: step.help.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>"
                          ),
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
