import bgImage from "../assets/course-bg.png";
import flyingPlane from "../assets/flying-plane.png"; // Ensure this path is correct.

export default function Courses() {
  return (
    <div
      className="flex flex-col items-center py-12"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover", // Ensures the image covers the full container
        backgroundPosition: "center", // Centers the background
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Section Title */}
      <h2 className="text-[24px] md:text-[70px] lg:text-[100px] font-extrabold text-[#02033B]">
        Courses <span className="text-[#801B2B]">Offered</span>
      </h2>

      {/* Card Container */}
      <div className="mt-8 grid gap-8 w-full px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-[264px]"
          >
            {/* SVG Icon */}
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4"
            >
              <path
                d="M16.3318 41.5312L10.7631 31.1813L0.413086 25.6125L4.40684 21.675L12.5631 23.0813L18.3006 17.3438L0.469336 9.75L5.19434 4.9125L26.8506 8.7375L33.8256 1.7625C34.6881 0.9 35.7568 0.46875 37.0318 0.46875C38.3068 0.46875 39.3756 0.9 40.2381 1.7625C41.1006 2.625 41.5318 3.68438 41.5318 4.94063C41.5318 6.19688 41.1006 7.25625 40.2381 8.11875L33.2068 15.15L37.0318 36.75L32.2506 41.5312L24.6006 23.7L18.8631 29.4375L20.3256 37.5375L16.3318 41.5312Z"
                fill="#801B2B"
              />
            </svg>

            {/* Content */}
            <div>
              <h3 className="text-[17px] font-semibold text-gray-800 mb-2">
                {
                  [
                    "Private Pilot License (PPL)",
                    "Instrument Rating (IR)",
                    "Commercial Pilot License (CPL)",
                    "Certified Flight Instructor (CFI)",
                  ][index]
                }
              </h3>
              <p className="text-gray-600 mt-auto">
                {
                  [
                    "Learn fundamental flying skills for personal and recreational use, ensuring safe and confident flight operations. Build a strong foundation for advanced certifications and career growth.",
                    "Fly safely in low-visibility conditions using Instrument Flight Rules (IFR), enhancing navigation and control. Master precision flying techniques for diverse weather conditions and professional advancement.",
                    "Gain the knowledge and flight training needed for a career as a commercial airline pilot. Develop advanced flight skills, meet industry requirements, and open doors to global aviation opportunities.",
                    "Teach and train future pilots while building flight hours and refining your aviation expertise. Enhance leadership skills, mentor aspiring aviators, and accelerate your career in aviation.",
                  ][index]
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
