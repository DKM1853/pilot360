import bgImg from "../assets/how-to-become-bg.png";
import Navbar from "../Components/Navbar";
import DGCAMedicals from "../Components/DGCAMedicals";
import PsychologyHeroSection from "../Components/PsychologyHeroSection";
import FlightTrainingHelp from "../Components/FlightTrainingHelp";
import ServiceAdvantages from "../Components/ServiceAdvantages";
import pageData from "../Data/ServiceData";

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

export default function PsychologyAndAptitude() {
  const {
    mainTitle,
    description,
    secondTitle,
    secondSectionContent,
    thirdTitle,
    thirdSectionContent,
    extra,
  } = pageData.Psychology;
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
