import Image from "next/image";
import image from "../assets/airbus-a320.png";
import image1 from "../assets/airbus-a320-2.png";
import image2 from "../assets/airbus-a320-3.png";
import image3 from "../assets/airbus-a320-4.png";

export default function TypeRatingTrainingLocation() {
  const contentPairs = [
    {
      left: "Just 5 minutes from Vilnius International Airport for easy access.",
      right:
        "Five state-of-the-art Full Flight Simulators (FFS): Three A320s, B737 NG, and B737 CL.",
    },
    {
      left: "Modern training facilities, including spacious classrooms and briefing/debriefing rooms.",
      right:
        "Relaxation areas with a dining room, snack, and coffee vending machines.",
    },
    {
      left: "Comfortable accommodation at 4★ LOOP Hotel and ATLAS Co-Living, right next to the training center.",
      right: "Convenient airport pickup service for a hassle-free arrival.",
    },
  ];
  const contentPairs1 = [
    {
      left: "Only 15 minutes from Barcelona-El Prat Airport for easy access.",
      right:
        "State-of-the-art 7-bay simulator center, featuring three brand-new Full Flight Simulators (FFS) - A320ceo, A320ceo/neo, and B737 MAX - along with a cutting-edge A320 FTD Level 2.",
    },
    {
      left: "Modern training environment with spacious classrooms and dedicated briefing/debriefing rooms.",
      right:
        "Comfortable leisure spaces, including a dining area and vending machines for snacks and coffee.",
    },
  ];
  const contentPairs2 = [
    {
      left: "State-of-the-art 3,400 m² training center in Paris designed for excellence.",
      right: "Just 15 minutes from Paris-Orly Airport for easy accessibility.",
    },
    {
      left: "Advanced simulation facilities, including 5 Full Flight Simulators (B747-400, 2x B737 NG, and 2x A320neo), a B737 NG FTD, and additional training devices.",
      right:
        "Spacious and well-equipped classrooms with dedicated briefing and debriefing rooms.",
    },
  ];
  const contentPairs3 = [
    {
      left: "Cutting-edge 3,000 m² training center in Ho Chi Minh City, built for excellence.",
      right:
        "Conveniently located just 45 minutes from Tan Son Nhat International Airport for easy access.",
    },
    {
      left: "Three state-of-the-art Full Flight Simulators (FFS): A320 NEO, A320 CEO, and B737 NG.",
      right:
        "Spacious classrooms and dedicated briefing/debriefing rooms for a seamless training experience.",
    },
    {
      left: "Comfortable accommodation available in villas located next to the training center.",
      right:
        "Access to experienced instructors providing world-class training and guidance.",
    },
  ];
  return (
    <div className="bg-[#1C1C1C] text-white w-[90%] mx-auto rounded-[40px] my-8 pb-16 font-onest">
      {/* Title with Tag Image */}
      <div className="flex flex-col items-center text-center mb-8 pt-8">
        <p className="px-4 py-2 text-[#FFBB00] text-[20px] bg-[#FFFFFF1A] rounded-[38.24px]">
          Training Location
        </p>
        <h2 className="text-[24px] md:text-[54px] lg:text-[64px] font-bold mt-2 mb-4">
          Explore our Training Location
        </h2>
      </div>

      {/* Location Container */}
      <div className="bg-[#4A3E3E] rounded-[20px] text-white mx-auto shadow-lg p-4">
        {/* Location Title */}
        <h3 className="text-[24px] md:text-[32px] font-semibold text-center mb-6">
          LITHUANIA, Vilnius
        </h3>

        {/* Content - Two Columns on Desktop, One Column on Mobile */}
        <div className="space-y-6 max-w-7xl mx-auto">
          {contentPairs.map((pair, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-[12px] p-4 min-h-[80px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] items-center gap-4">
                {/* Left Side Content */}
                <div className="text-center md:text-left text-[20px]">
                  {pair.left}
                </div>

                {/* Vertical Divider (Fix: Full Height) */}
                <div className="hidden md:flex justify-center h-full">
                  <div className="w-[2px] bg-white h-full min-h-[50px]"></div>
                </div>

                {/* Horizontal Divider for Mobile */}
                <div className="flex md:hidden justify-center">
                  <div className="w-full h-[2px] bg-white"></div>
                </div>

                {/* Right Side Content */}
                <div className="text-center md:text-right text-[20px]">
                  {pair.right}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Image */}
        <div className="mt-8">
          <Image
            src={image}
            alt="Training Session"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-[95%] md:w-[85%] mx-auto"
          />
        </div>
      </div>

      <div className="bg-[#4A3E3E] rounded-[20px] text-white mx-auto shadow-lg p-4 mt-8">
        {/* Location Title */}
        <h3 className="text-[24px] md:text-[32px] font-semibold text-center mb-6">
          SPAIN, Barcelona
        </h3>

        {/* Content - Two Columns on Desktop, One Column on Mobile */}
        <div className="space-y-6 max-w-7xl mx-auto">
          {contentPairs1.map((pair, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-[12px] p-4 min-h-[80px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] items-center gap-4">
                {/* Left Side Content */}
                <div className="text-center md:text-left text-[20px]">
                  {pair.left}
                </div>

                {/* Vertical Divider (Fix: Full Height) */}
                <div className="hidden md:flex justify-center h-full">
                  <div className="w-[2px] bg-white h-full min-h-[50px]"></div>
                </div>

                {/* Horizontal Divider for Mobile */}
                <div className="flex md:hidden justify-center">
                  <div className="w-full h-[2px] bg-white"></div>
                </div>

                {/* Right Side Content */}
                <div className="text-center md:text-right text-[20px]">
                  {pair.right}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Image */}
        <div className="mt-8">
          <Image
            src={image1}
            alt="Training Session"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-[95%] md:w-[85%] mx-auto"
          />
        </div>
      </div>
      <div className="bg-[#4A3E3E] rounded-[20px] text-white mx-auto shadow-lg p-4 mt-8">
        {/* Location Title */}
        <h3 className="text-[24px] md:text-[32px] font-semibold text-center mb-6">
          FRANCE, Paris
        </h3>

        {/* Content - Two Columns on Desktop, One Column on Mobile */}
        <div className="space-y-6 max-w-7xl mx-auto">
          {contentPairs2.map((pair, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-[12px] p-4 min-h-[80px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] items-center gap-4">
                {/* Left Side Content */}
                <div className="text-center md:text-left text-[20px]">
                  {pair.left}
                </div>

                {/* Vertical Divider (Fix: Full Height) */}
                <div className="hidden md:flex justify-center h-full">
                  <div className="w-[2px] bg-white h-full min-h-[50px]"></div>
                </div>

                {/* Horizontal Divider for Mobile */}
                <div className="flex md:hidden justify-center">
                  <div className="w-full h-[2px] bg-white"></div>
                </div>

                {/* Right Side Content */}
                <div className="text-center md:text-right text-[20px]">
                  {pair.right}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Image */}
        <div className="mt-8">
          <Image
            src={image2}
            alt="Training Session"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-[95%] md:w-[85%] mx-auto"
          />
        </div>
      </div>

      <div className="bg-[#4A3E3E] rounded-[20px] text-white mx-auto shadow-lg p-4 mt-8">
        {/* Location Title */}
        <h3 className="text-[24px] md:text-[32px] font-semibold text-center mb-6">
          VIETNAM, Ho Chi Minh City
        </h3>

        {/* Content - Two Columns on Desktop, One Column on Mobile */}
        <div className="space-y-6 max-w-7xl mx-auto">
          {contentPairs.map((pair, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-[12px] p-4 min-h-[80px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] items-center gap-4">
                {/* Left Side Content */}
                <div className="text-center md:text-left text-[20px]">
                  {pair.left}
                </div>

                {/* Vertical Divider (Fix: Full Height) */}
                <div className="hidden md:flex justify-center h-full">
                  <div className="w-[2px] bg-white h-full min-h-[50px]"></div>
                </div>

                {/* Horizontal Divider for Mobile */}
                <div className="flex md:hidden justify-center">
                  <div className="w-full h-[2px] bg-white"></div>
                </div>

                {/* Right Side Content */}
                <div className="text-center md:text-right text-[20px]">
                  {pair.right}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Image */}
        <div className="mt-8">
          <Image
            src={image3}
            alt="Training Session"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-[95%] md:w-[85%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
