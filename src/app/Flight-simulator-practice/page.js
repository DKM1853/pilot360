import Image from "next/image";
import topbg from "../assets/images/topbg.png";
import svg1 from "../assets/images/1.svg";
import svg2 from "../assets/images/2.svg";
import svg3 from "../assets/images/3.svg";
import svg4 from "../assets/images/4.svg";
import svg5 from "../assets/images/5.svg";
import svg6 from "../assets/images/6.svg";
import svg7 from "../assets/images/7.svg";
import bottombg from "../assets/images/bottom.png";
import Navbar from "../Components/Navbar";
import GroundClassesHeroSection from "../Components/GroundClassesHeroSection";
import groundClassData from "../Data/groundClassData";
import SimulatorHeroSection from "../Components/SimulatorHeroSection";
import bgImage1 from "../assets/herosection-bg.png";

export default function SimulatorBenefits() {
  const { mainTitle, description, secondTitle, secondDescription } =
    groundClassData.flightSimulator;
  return (
    <div
      className="pt-[10px] lg:pt-[20px] font-onest"
      style={{
        backgroundImage: `url(${bgImage1.src})`,
        backgroundSize: "contain", // Ensures the image covers the full container
        backgroundPosition: "top", // Centers the background
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <SimulatorHeroSection
        mainTitle={mainTitle}
        description={description}
        secondTitle={secondTitle}
        secondDescription={secondDescription}
      />
      <section className="relative w-full min-h-screen bg-[#E8EEF7] overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 right-0 z-0">
          <Image
            src={topbg || "/placeholder.svg"}
            alt="Background"
            width={1920}
            height={1080}
            className="w-full object-contain object-top"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8 sm:py-16">
          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B579A] mb-6 sm:mb-8">
              How Can Simulator Training Help Before
              <br />
              Flight School?
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2B579A]">
              Develops Basic Flight Controls Understanding
            </h2>
          </div>

          <div className="relative">
            {/* Section 1 */}
            <div className="relative mb-32 -ml-12 sm:ml-0">
              <div className="absolute -left-4 -top-[20%] z-0">
                <Image
                  //   className="w-[150px] h-[150px] md:w-[100px] md:h-[200px]"
                  src={svg1 || "/placeholder.svg"}
                  alt="1"
                  width={100}
                  height={70}
                />
              </div>
              <div className="bg-white rounded-2xl p-8 ml-16 max-w-xl relative z-10">
                <ul className="divide-y divide-gray-100">
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Learn to handle aircraft controls such as yoke, rudder,
                    throttle, and trim.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Practice takeoff, level flight, and landing techniques.{" "}
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Familiarization with Cockpit Layout & Instrumentation
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="relative mb-32 flex justify-end -mr-12 sm:mr-0">
              <div className="absolute -right-8 -top-[40%] z-0">
                <Image
                  src={svg2 || "/placeholder.svg"}
                  alt="2"
                  width={180}
                  height={180}
                />
              </div>
              <div className="bg-white rounded-2xl p-8 mr-16 max-w-xl relative z-10">
                <ul className="divide-y divide-gray-100">
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Understand key flight instruments such as the altimeter,
                    airspeed indicator, artificial horizon, and navigation
                    systems.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Get comfortable with radio communication and checklist
                    procedures.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Enhances Hand-Eye Coordination & Situational Awareness
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="relative mb-32 -ml-12 sm:ml-0">
              <div className="absolute -left-[8%] top-0 z-0">
                <Image
                  //   className="w-[150px] h-[150px] md:w-[200px] md:h-[150px]"
                  src={svg3 || "/placeholder.svg"}
                  alt="3"
                  width={180}
                  height={180}
                />
              </div>
              <div className="bg-white rounded-2xl p-8 ml-16 max-w-xl relative z-10">
                {/* <h3 className="text-2xl font-bold text-[#2B579A] mb-6">
                  Builds Practical Skills
                </h3> */}
                <ul className="divide-y divide-gray-100">
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Develops quick reflexes and muscle memory for smooth control
                    inputs.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Improves awareness of altitude, airspeed, and flight path
                    management.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Introduction to Flight Maneuvers
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="relative mb-32 flex justify-end -mr-12 sm:mr-0">
              <div className="absolute -right-8 -top-[40%] z-0">
                <Image
                  src={svg4 || "/placeholder.svg"}
                  alt="2"
                  width={180}
                  height={180}
                />
              </div>
              <div className="bg-white rounded-2xl p-8 mr-16 max-w-xl relative z-10">
                <ul className="divide-y divide-gray-100">
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Practice climbs, descents, turns, and stalls before actual
                    flight training.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Understand the principles of aerodynamics and how they
                    affect aircraft performance.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Builds Confidence Before Entering a Real Cockpit{" "}
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="relative mb-32 -ml-12 sm:ml-0">
              <div className="absolute -left-[8%] top-0 z-0">
                <Image
                  src={svg5 || "/placeholder.svg"}
                  alt="3"
                  width={180}
                  height={180}
                  className=""
                />
              </div>
              <div className="bg-white rounded-2xl p-8 ml-16 max-w-xl relative z-10">
                {/* <h3 className="text-2xl font-bold text-[#2B579A] mb-6">
                  Builds Practical Skills
                </h3> */}
                <ul className="divide-y divide-gray-100">
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Reduces nervousness by allowing students to experience
                    flying before stepping into a real aircraft.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Helps develop a mental picture of in-flight scenarios,
                    making real-world training smoother.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Practice for DGCA Exams & Flight School Assessments
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="relative mb-32 flex justify-end -mr-12 sm:mr-0">
              <div className="absolute -right-8 -top-[40%] z-0">
                <Image
                  src={svg6 || "/placeholder.svg"}
                  alt="2"
                  width={180}
                  height={180}
                />
              </div>
              <div className="bg-white rounded-2xl p-8 mr-16 max-w-xl relative z-10">
                <ul className="divide-y divide-gray-100">
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Aspiring pilots preparing for CPL or PPL assessments can use
                    the simulator for practical reinforcement of theoretical
                    knowledge.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Useful for preparing for flight school selection tests where
                    simulator evaluations may be involved.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Cost-Effective Training Before Actual Flight Hours{" "}
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="relative -ml-12 sm:ml-0">
              <div className="absolute -left-[2%] -top-6 z-0">
                <Image
                  src={svg7 || "/placeholder.svg"}
                  alt="3"
                  width={130}
                  height={130}
                  className=""
                />
              </div>
              <div className="bg-white rounded-2xl p-8 ml-16 max-w-xl relative z-10">
                <ul className="divide-y divide-gray-100">
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Simulators help students master basic skills before flying,
                    potentially reducing the number of actual flight hours
                    needed.
                  </li>
                  <li className="py-4 text-[14px] md:text-[24px]">
                    Helps avoid costly mistakes that could happen in real
                    training.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-20">
          {/* Blue Wave Background */}
          <div className="absolute bottom-[60%] left-0 right-0 z-0">
            <Image
              src={bottombg || "/placeholder.svg"}
              alt="Background"
              width={1920}
              height={600}
              className="w-full object-contain"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Black Header */}
            <div className="relative z-20">
              <div className="bg-[#1A1A1A] rounded-[30px] mx-auto w-[94%] md:w-[60%]  md:px-8 py-10 text-center">
                <h2 className="text-white text-xl sm:text-3xl md:text-[38px] lg:text-[42px] xl:text-[46px] 2xl:text-[50px] font-bold leading-tight sm:leading-[1.2] md:leading-[1.3] p-2">
                  Why Choose Pilot 360 for Simulator Training?
                </h2>
              </div>
            </div>

            {/* Red Section */}
            <div className="bg-[#801B2B] text-white w-full pt-20 pb-16 -mt-16">
              <div className="w-[80%] max-w-7xl mx-auto">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] xl:text-[40px] 2xl:text-[40px] font-bold leading-tight sm:leading-snug md:leading-normal">
                      Provides a real-world flying experience.
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-[#DC8996]">
                      Realistic Flight Simulators
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] xl:text-[40px] 2xl:text-[40px] font-bold leading-tight sm:leading-snug md:leading-normal">
                      Learn from certified pilots and trainers.
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-[#DC8996]">
                      Guidance from Experienced Instructors
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] xl:text-[40px] 2xl:text-[40px] font-bold leading-tight sm:leading-snug md:leading-normal">
                      Covers everything from basic controls to complex
                      maneuvers.
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-[#DC8996]">
                      Structured Training Modules
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[36px] xl:text-[40px] 2xl:text-[40px] font-bold leading-tight sm:leading-snug md:leading-normal">
                      Train at your own pace before starting flight school.
                    </h3>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-[#DC8996]">
                      Flexible Scheduling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="-mt-14 relative z-20 mb-[30px]">
              <div className="w-[90%] max-w-7xl mx-auto">
                <div className="bg-[#4A3E3E] rounded-[30px] px-8 py-10 text-center">
                  <h3 className="text-white text-md sm:text-3xl md:text-[38px] lg:text-[42px] xl:text-[36px] 2xl:text-[40px] font-bold ">
                    Ready to take off? Start your simulator training at Pilot
                    360 today!
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] leading-relaxed sm:leading-loose md:leading-loose">
                    Flight simulator practice at Pilot 360 is an essential step
                    for aspiring pilots before commencing real flight training.
                    It enhances confidence, sharpens skills, and bridges the gap
                    between theory and practical flying. By investing time in
                    simulator training, students can hit the ground running when
                    they begin their flight school journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
