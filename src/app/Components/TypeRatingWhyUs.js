import Image from "next/image";
import bgimage from "../assets/bg-image-whyus.png";
import bgMobile from "../assets/bg-image-whyus-1.png";

export default function TypeRatingWhyUs({ WhyUsContent }) {
  return (
    <section
      className="py-16 type-rating-section font-onest"
      // style={{
      //   backgroundImage: `url(${bgMobile.src})`,
      //   backgroundPosition: "center",
      //   // backgroundSize: "cover",
      // }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[24px] md:text-[54px] font-bold text-black">
            WHY <span className="text-[#801B2B]">Pilot 360 ?</span>
          </h2>
          <p className="text-[#000000]-600 mt-3 max-w-7xl mx-auto text-[12px] md:text-[22px]">
            At Pilot 360, we integrate cutting-edge technology, expert-led
            training, and global accessibility to provide top-tier aviation
            education. Our programs adhere to the highest industry standards,
            ensuring pilots are fully prepared for success in the dynamic and
            ever-evolving aviation sector.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {WhyUsContent.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-[12px] shadow-md text-left flex flex-col w-full md:w-[360px] h-[470px] group transition duration-300"
            >
              {/* Title */}
              <div className="w-full border-b border-gray-300 pb-3 group-hover:bg-[#801B2B] group-hover:rounded-t-[12px]">
                <h3 className="text-[24px] md:text-[32px] font-bold text-[#272B34] text-center p-4 content-center h-[120px] group-hover:text-white">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#6B6B71] mt-3 flex-grow p-4 text-[20px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
