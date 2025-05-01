import bgImg from "../assets/how-to-become-bg.png";
import TypeRatingHeroSection from "../Components/TypeRatingHeroSection";
import Navbar from "../Components/Navbar";
import TypeRatingSection from "../Components/TypeRatingSection";
import TypeRatingWhyUs from "../Components/TypeRatingWhyUs";
import TypeRatingRequirements from "../Components/TypeRatingRequirements";
import WhychooseTypeRating from "../Components/WhyChooseTypeRating";
import TypeRatingDuration from "../Components/TypeRatingDuration";
import TypeRatingTrainingLocation from "../Components/TypeRatingTrainingLocation";
import pageData from "../Data/TypeRatingData";

export const metadata = {
  title: "Get in touch now and start the journey to US",
  description:
    "need personalized guidance? Contact us for expert advise on your journey to becoming a doctor in USA ",
  keywords: "About UsDoc, Medical Professionals in USA, UsDoc Services",
  openGraph: {
    title: "Get in touch now and start the journey to US",
    description:
      "need personalized guidance? Contact us for expert advise on your journey to becoming a doctor in USA ",
    url: "https://UsDoc.in/Contact-us",
    siteName: "UsDoc",
    locale: "en_US",
    type: "website",
  },
};

export default function ATR() {
  const {
    mainTitle,
    description,
    secondSectionTitle,
    secondSectionDescription,
    secondSectionContent,
    WhyUsContent,
    Requirements,
    trainingTitle,
    trainingDescription,
    trainingSteps,
    hours,
    days,
  } = pageData.ATR;
  return (
    <div className="font-onest">
      <div
        className="pt-[10px] lg:pt-[20px]"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "cover", // Ensures the image covers the full container
          backgroundPosition: "", // Centers the background
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <TypeRatingHeroSection
          mainTitle={mainTitle}
          description={description}
        />
      </div>
      <TypeRatingSection
        secondSectionTitle={secondSectionTitle}
        secondSectionDescription={secondSectionDescription}
        secondSectionContent={secondSectionContent}
      />
      <TypeRatingWhyUs WhyUsContent={WhyUsContent} />
      <TypeRatingRequirements Requirements={Requirements} />
      <WhychooseTypeRating
        trainingTitle={trainingTitle}
        trainingDescription={trainingDescription}
        trainingSteps={trainingSteps}
      />
      <TypeRatingDuration
        trainingTitle={trainingTitle}
        trainingDescription={trainingDescription}
        hours={hours}
        days={days}
      />
      <TypeRatingTrainingLocation />
    </div>
  );
}
