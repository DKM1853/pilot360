export default function FlightTrainingHelp({ secondTitle, features }) {
  return (
    <div className="bg-[#1C1C1C] text-white py-16 px-4 md:px-10 w-[90%] mx-auto rounded-[40px] my-8">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {secondTitle}
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-[#7E1B23] rounded-xl p-6 shadow-lg ${
              features.length % 3 === 2 && index === features.length - 1
                ? "sm:col-span-2" // If 5 items, make last one span 2 columns
                : ""
            }`}
          >
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
