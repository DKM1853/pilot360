export default function CourseOverview({ overviewTitle, overViewContent }) {
  return (
    <div>
      {/* Course Overview Section */}
      <div className="bg-[#1E1E1E] text-white py-12 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-[30px] max-w-7xl mx-auto text-center mt-16">
        {/* Section Header */}
        <div>
          <p className="text-[20px] uppercase bg-[#4A3E3E] text-[#FFBB00] px-4 py-2 mb-4 rounded-full inline-block">
            Course Overview
          </p>

          <h2 className="text-[24px] md:text-[50px] lg:text-[64px] font-bold mt-4 mb-8">
            {overviewTitle}
          </h2>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {overViewContent.map((item, index) => (
            <div
              key={index}
              className="bg-[#4A3E3E] text-white rounded-[15px] shadow-lg"
            >
              <h3 className="text-[18px] md:text-[35px] font-bold mb-2 p-4">
                {item.title}
              </h3>
              <p className="text-[12px] md:text-[24px] text-gray-300 p-4">
                {item.description}
              </p>
              <hr className="my-4 border-t border-[#FFFFFF] opacity-50" />
              <p className="text-xs text-gray-400 mt-4 italic pb-4">
                {item.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
