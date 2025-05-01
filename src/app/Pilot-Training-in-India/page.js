// import pageData from "../Data/pageData";
// import TrainingSection from "../Components/TrainingSection";

// export const metadata = {
//   title: "Get in touch now and start the journey to US",
//   description:
//     "need personalized guidance? Contact us for expert advise on your journey to becoming a doctor in USA ",
//   keywords: "About UsDoc, Medical Professionals in USA, UsDoc Services",
//   openGraph: {
//     title: "Get in touch now and start the journey to US",
//     description:
//       "need personalized guidance? Contact us for expert advise on your journey to becoming a doctor in USA ",
//     url: "https://UsDoc.in/Contact-us",
//     siteName: "UsDoc",
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default function PilotIndia() {
//   const { country, description, images } = pageData.India;

//   return (
//     <div>
//       <TrainingSection
//         country={country}
//         description={description}
//         image1={images[0].src}
//         alt1={images[0].alt}
//         image2={images[1].src}
//         alt2={images[1].alt}
//       />{" "}
//     </div>
//   );
// }

import TrainingSection from "../Components/TrainingSection";
import AviationSection from "../Components/AviationTraining";
import Courses from "../Components/Courses";
import FacilitiesSection from "../Components/FacilitiesSection";
import bgImage from "../assets/course-bg.png";
import StudentGallery from "../Components/StudentGallery";
import AdvantagesSection from "../Components/AdvantagesSection";
import PartnerFlyingSchools from "../Components/PartnerSchool";
import pageData from "../Data/pageData";
import Navbar from "../Components/Navbar";
import bgImage1 from "../assets/herosection-bg.png";

export const metadata = {
  title: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
  description: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
  keywords: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
  openGraph: {
    title: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
    description: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
    url: "https://pilot360.co/",
    siteName: "Pilot360",
    locale: "en_US",
    type: "website",
  },
};

export default function PilotIndia() {
  const {
    country,
    description,
    images,
    AviationTraining,
    WeatherConditions,
    LifeIn,
    Advantages,
    FacilitiesDescription,
  } = pageData.India;

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
      <Navbar />{" "}
      <TrainingSection
        country={country}
        description={description}
        image1={images[0].src}
        alt1={images[0].alt}
        image2={images[1].src}
        alt2={images[1].alt}
      />{" "}
      <AviationSection
        country={country}
        AviationTraining={AviationTraining[0].description}
        AviationTraining1={AviationTraining[1].description}
        WeatherConditions={WeatherConditions}
        LifeIn={LifeIn}
      />
      <StudentGallery />
      <AdvantagesSection country={country} Advantages={Advantages} />
      <PartnerFlyingSchools />
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover", // Ensures the image covers the full container
          backgroundPosition: "center", // Centers the background
          backgroundRepeat: "no-repeat",
        }}
      >
        <Courses />
        <FacilitiesSection
          country={country}
          FacilitiesDescription={FacilitiesDescription}
        />
      </div>
    </div>
  );
}
