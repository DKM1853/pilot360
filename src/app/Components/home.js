import HeroSection from "./HeroSection";
import TrainingSection from "./PilotTrainingSection";
import TrainingLocation from "./TrainingLocation";
import OurService from "./OurService";
import WhyUs from "./why-us";
import Statistics from "./Statistics";
import VideoSection from "./VideoSection";
import TypeRating from "./TypeRating";
import PilotSection from "./HowToBecomePilot";
import GallerySection from "./Gallery";
import FAQSection from "./FAQ";
import Testimonials from "./Testimonial";
import GroundTrainingSection from "./GroundTrainingSection";
import TrustedBrands from "./TrustedBrands";
import CTASection from "./CTASection";
import Footer from "./footer";
import Navbar from "./Navbar";
import bgImage from "../assets/herosection-bg.png"; // Ensure this path is correct.

export const metadata = {
  title: "Pilot 360 - Simplifying Your Path to Becoming a Pilot",
  description: "Pilot 360 Offers Expert Pilot Training With DGCA-Approved Guidance. Join Pilot 360 for Global Training, Finance, Scholarships, and Complete Career Support.",
  keywords: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
  openGraph: {
    title: "Pilot 360 - Simplifying Your Path to Becoming a Pilot",
    description: "Pilot 360 Offers Expert Pilot Training With DGCA-Approved Guidance. Join Pilot 360 for Global Training, Finance, Scholarships, and Complete Career Support.",
    url: "https://pilot360.co/",
    siteName: "Pilot360",
    locale: "en_US",
    type: "website",
  },
};

export default function FirstPage() {
  return (
    <div
      className="pt-[10px] lg:pt-[20px]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain", // Ensures the image covers the full container
        backgroundPosition: "top", // Centers the background
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <HeroSection />
      <TrainingSection />
      <TrainingLocation />
      <WhyUs />
      <OurService />
      <Statistics />
      <VideoSection />
      <TrustedBrands />
      <GroundTrainingSection />
      <PilotSection />
      <TypeRating />
      <GallerySection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
