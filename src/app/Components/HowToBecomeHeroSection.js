import Image from "next/image";
import plane from "../assets/how-to-become-plane.png";

export default function HowToBecomePilotHero() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 font-urbanist">
        How To Become a Pilot?
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
        Your Journey to the skies start here
      </p>

      <Image
        src={plane}
        alt="Airplane"
        // layout="fill"
        //   objectFit="contain"
        priority={true}
        className="w-full max-w-6xl"
      />
    </div>
  );
}
