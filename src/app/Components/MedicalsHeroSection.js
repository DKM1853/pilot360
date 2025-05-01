import Image from "next/image";

export default function MedicalHeroSection() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 my-16 md:my-24">
      {/* Title */}
      <h2 className="text-[24px] md:text-[50px] lg:text-[64px] font-bold mb-4 text-gray-900">
        DGCA Pilot Medicals:
        <br />A Crucial Step for Aspiring Pilots
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-7xl">
        DGCA Pilot Medicals are mandatory medical examinations conducted to
        assess a candidate’s physical and mental fitness before they can begin
        flight training. The Directorate General of Civil Aviation (DGCA)
        requires all aspiring pilots to clear Class 2 and Class 1 medical tests
        to ensure they meet the health standards necessary for flying.
      </p>
      <button
        className={`px-6 py-3 text-[24px] text-[#2353AB] font-semibold rounded-lg border border-[#A5A5A5] transition hover:bg-[#2353AB] hover:text-white`}
      >
        Contact Now
      </button>
    </div>
  );
}
