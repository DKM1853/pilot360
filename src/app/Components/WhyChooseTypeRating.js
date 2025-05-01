import bgimage from "../assets/typeCourseBG.png";
export default function WhyChooseTypeRating({
  trainingTitle,
  trainingDescription,
  trainingSteps,
}) {
  return (
    <div
      className="relative py-16 px-6 md:px-20 my-10 font-onest"
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Section Title */}
      <h2 className="text-white text-[24px] md:text-[54px] font-bold text-center mb-12">
        {trainingTitle}
      </h2>
      <p className="text-white text-lg text-center mb-12 max-w-2xl mx-auto">
        {trainingDescription}
      </p>

      {/* Timeline Line (Mobile - Vertical Only) */}
      <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-[65%] w-1 bg-white"></div>

      <div className="relative flex flex-col space-y-12 md:space-y-8 md:grid md:grid-cols-1">
        {trainingSteps.map((step, index) => (
          <div key={index} className="relative flex items-center z-20">
            {/* Desktop Timeline Connector (Vertical & Horizontal) */}
            <div className="hidden xl:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>
            {index % 2 === 0 && (
              <div className="hidden md:block absolute left-1/2 transform -translate-x-full w-[18%] h-[4px] bg-white"></div>
            )}
            {index % 2 !== 0 && (
              <div className="hidden md:block absolute left-1/2 w-[18%] h-[4px] bg-white"></div>
            )}

            {/* Connector Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border border-white"></div>

            {/* Training Step Container */}
            <div
              className={`bg-white border border-gray-200 rounded-xl shadow-md w-full md:w-[480px] ${
                step.side === "left"
                  ? "md:mr-auto md:mr-16"
                  : "md:ml-auto md:ml-16"
              }`}
            >
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-[24px] font-bold text-[#272B34] p-4">
                  {step.title}
                </h3>
                <p className="text-[24px] text-[#272B3447] mt-1 font-semibold p-4">
                  {step.duration}
                </p>
              </div>
              <hr />
              <p className="text-[#6B6B71] mt-2 text-[14px] p-4">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
