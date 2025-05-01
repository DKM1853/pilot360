import bgImage from "../assets/bg-2.jpeg";

const DGCAComputerNumberSection = () => {
  const infoBlocks = [
    {
      title: "Eligibility for DGCA Exams:",
      description:
        "Before you can register for CPL/ATPL theory exams, you must obtain your Computer Number.",
    },
    {
      title: "Registration on DGCA Pariksha Portal:",
      description:
        "The Computer Number is required for logging in and scheduling your DGCA exams on the Pariksha portal.",
    },
    {
      title: "Tracking Exam Records & Results:",
      description:
        "Your Computer Number is linked to your exam history, making it easy for DGCA to track your passed subjects and eligibility for future exams.",
    },
    {
      title: "Flight Training & License Application:",
      description:
        "Once you clear the required DGCA exams, your Computer Number will be used in your CPL application process, ensuring smooth verification of your results.",
    },
  ];

  return (
    <div className="">
      <p className="text-black font-bold text-center text-[24px] md:text-[45px] mt-12">
        How is it Used in Your{" "}
        <span className="text-[#801B2B]">Pilot Journey?</span>
      </p>
      <section
        className="text-white w-[98%] md:w-[90%] mx-auto rounded-[30px] overflow-hidden my-8"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-2">
          {infoBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-[#4A3A34] text-white p-6 md:p-12 shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold">{block.title}</h3>
              <p className="text-gray-200 mt-2">{block.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DGCAComputerNumberSection;
