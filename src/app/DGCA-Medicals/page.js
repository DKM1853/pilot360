import bgImg from "../assets/how-to-become-bg.png";
import TypeRatingHeroSection from "../Components/TypeRatingHeroSection";
import Navbar from "../Components/Navbar";
import TypeRatingSection from "../Components/TypeRatingSection";
import TypeRatingWhyUs from "../Components/TypeRatingWhyUs";
import TypeRatingRequirements from "../Components/TypeRatingRequirements";
import WhychooseTypeRating from "../Components/WhyChooseTypeRating";
import TypeRatingDuration from "../Components/TypeRatingDuration";
import TypeRatingTrainingLocation from "../Components/TypeRatingTrainingLocation";
import MedicalHeroSection from "../Components/MedicalsHeroSection";
import DGCAMedicals from "../Components/DGCAMedicals";

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

export default function Medicals() {
  return (
    <div className="font-onest">
      <div
        className="pt-[10px] lg:pt-[20px]"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: "contain", // Ensures the image covers the full container
          // backgroundPosition: "", // Centers the background
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <MedicalHeroSection />
        <DGCAMedicals />
      </div>
    </div>
  );
}
