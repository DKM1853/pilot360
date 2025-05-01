import PsychologyHeroSection from "../Components/PsychologyHeroSection";
import FlightTrainingHelp from "../Components/FlightTrainingHelp";
import ServiceAdvantages from "../Components/ServiceAdvantages";
import pageData from "../Data/ServiceData";
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

export default function CadetPilotTraining() {
  const {
    mainTitle,
    description,
    secondTitle,
    secondSectionContent,
    thirdTitle,
    thirdSectionContent,
    extra,
  } = pageData.Cadet;
  return (
    <div className="font-onest">
      <PsychologyHeroSection mainTitle={mainTitle} description={description} />

      <FlightTrainingHelp
        secondTitle={secondTitle}
        features={secondSectionContent} // ✅ Passing as a prop
      />
      <ServiceAdvantages
        thirdTitle={thirdTitle}
        features={thirdSectionContent}
        extra={extra}
      />
    </div>
  );
}
