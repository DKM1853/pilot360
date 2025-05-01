"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import planeImg from "../assets/advantage-plane.png";
import cloudImg from "../assets/cloud.png";
import bgImage from "../assets/advantages-bg.png";

export default function AdvantagesSection({ country, Advantages }) {
  const sectionRef = useRef(null);
  const planeRef = useRef(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    const plane = planeRef.current;

    if (!section || !plane) return;

    const sectionRect = section.getBoundingClientRect();
    const planeHeight = plane.getBoundingClientRect().height;

    if (
      sectionRect.top < window.innerHeight - planeHeight / 2 &&
      sectionRect.bottom > planeHeight / 2
    ) {
      plane.classList.add("animate-flyPlane");
    } else {
      plane.classList.remove("animate-flyPlane");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-12 bg-black relative overflow-hidden">
      <div ref={sectionRef} className="relative ">
        <h2 className="text-black text-[24px] md:text[45px] lg:text-[60px] font-bold text-center bg-white mb-4 pt-[5%] lg:mt-[-6px]">
          Advantages of flying in{" "}
          <span className="text-red-500">{country}</span>
        </h2>

        <div className="flex flex-col justify-center w-full mx-auto -mt-4">
          <div className="z-20">
            <Image
              src={cloudImg}
              alt="Cloud"
              className="object-cover mt-[-2px]"
            />
          </div>

          <div
            ref={planeRef}
            className="plane relative flex justify-center mx-auto mt-[-35%] z-10 w-[80%] lg:w-[800px]"
          >
            <Image src={planeImg} alt="Plane" className="h-auto" />
          </div>

          <div
            className="relative mb-[90%] lg:mb-[75%] xl:mb-[40%] mt-[10%] p-4 md:p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage.src})` }}
          >
            {" "}
            <div className="absolute top-[-100px] bottom-[-100px] w-[3px] bg-red-500 left-1/2 transform -translate-x-1/2">
              <div className="absolute top-[-15px] left-[-10px] w-6 h-6 bg-red-500 rounded-full"></div>
              {/* Bottom Round */}
              <div className="absolute bottom-[-15px] left-[-10px] w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-6 md:gap-12 relative z-20">
              {Advantages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white text-center py-4 px-4 md:px-8 w-11/12 md:w-96 lg:w-[800px] shadow-md rounded-[14px] relative z-30 text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes flyPlane {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(1450px);
            }
          }

          @media (max-width: 767px) {
            @keyframes flyPlane {
              0% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(870px);
              }
            }
          }

          @media (min-width: 768px) and (max-width: 1023px) {
            @keyframes flyPlane {
              0% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(1250px);
              }
            }
          }

          @media (min-width: 1024px) and (max-width: 1439px) {
            @keyframes flyPlane {
              0% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(1450px);
              }
            }
          }

          .animate-flyPlane {
            animation: flyPlane 10s cubic-bezier(0.25, 1, 0.5, 1) forwards;
            will-change: transform;
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 1.5rem;
            }

            .plane {
              width: 100%;
              margin-top: -20%;
            }

            .bg-white {
              padding: 8px;
            }

            .w-96 {
              width: 90%;
            }
          }

          @media (max-width: 1024px) {
            .plane {
              width: 100%;
              margin-top: 0%;
            }

            .bg-white {
              padding: 10px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
