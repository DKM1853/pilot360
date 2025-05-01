import Image from "next/image";

export default function TypeRatingHeroSection({ mainTitle, description }) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 my-16 md:my-24">
      {/* Title */}
      <h2 className="text-[24px] md:text-[50px] lg:text-[64px] font-bold mb-4 text-gray-900 font-urbanist">
        {mainTitle}
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-6xl font-onest">
        {description}
      </p>
      <button
        className={`font-onest px-6 py-3 text-[24px] text-[#2353AB] font-semibold rounded-lg border border-[#A5A5A5] transition hover:bg-[#2353AB] hover:text-white`}
      >
        Contact Now
      </button>
    </div>
  );
}
