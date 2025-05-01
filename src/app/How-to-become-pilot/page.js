import BecomePilot from "../Components/becomepilot";
import HowToBecomePilotHero from "../Components/HowToBecomeHeroSection";
import bgImg from "../assets/how-to-become-bg.png";
import Navbar from "../Components/Navbar";

export const metadata = {
  title: "How to Become a Pilot - Step-by-Step Guide by Pilot 360",
  description:
    "Want to become a pilot? Pilot 360 guides you through DGCA requirements, training programs, licensing, and career opportunities in aviation.",
  keywords: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
  openGraph: {
    title: "How to Become a Pilot - Step-by-Step Guide by Pilot 360",
    description:
      "Want to become a pilot? Pilot 360 guides you through DGCA requirements, training programs, licensing, and career opportunities in aviation.",
    url: "http://localhost:3000/How-to-become-pilot",
    siteName: "Pilot360",
    locale: "en_US",
    type: "website",
  },
};

export default function PilotUS() {
  return (
    <div
      className="pt-[10px] lg:pt-[10px] font-onest"
      style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "contain", // Ensures the image covers the full container
        backgroundPosition: "top", // Centers the background
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <HowToBecomePilotHero />
      <BecomePilot />
    </div>
  );
}
