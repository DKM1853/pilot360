import DGCAComputerNumberSection from "../Components/DGCAComputerNumberSection";
import DGCASectionComputer from "../Components/DGCASectionConputer";
import Navbar from "../Components/Navbar";
import SimulatorHeroSection from "../Components/SimulatorHeroSection";
import groundClassData from "../Data/groundClassData";
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

export default function ComputerNumber() {
  const { mainTitle, description, secondTitle, secondDescription } =
    groundClassData.computerNumber;
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
      <DGCASectionComputer />
      <DGCAComputerNumberSection />
    </div>
  );
}
