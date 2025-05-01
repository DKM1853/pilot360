import Navbar from "../Components/Navbar";
import GroundClassesHeroSection from "../Components/GroundClassesHeroSection";
import GroundClassCards from "../Components/GroundClassCards";
import DgcaDuration from "../Components/DgcaDuration";
import CourseOverview from "../Components/CourseOverview";
import Pilot360Provides from "../Components/Pilot360Provides";
import StudentGallery from "../Components/StudentGallery";
import CTASection from "../Components/CTASection";
import Stages from "../Components/Stages";
import groundClassData from "../Data/groundClassData";
import bgImage1 from "../assets/herosection-bg.png";
import Testimonials from "../Components/Testimonial";

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

export default function AirlinePreparatory() {
  const {
    mainTitle,
    description,
    secondTitle,
    secondDescription,
    duration,
    batchStart,
    eligibility,
    overviewTitle,
    overViewContent,
    providesTitle,
    Selection,
    assessmentStages,
  } = groundClassData.Airline;
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
      <GroundClassesHeroSection
        mainTitle={mainTitle}
        description={description}
        secondTitle={secondTitle}
        secondDescription={secondDescription}
      />
      <DgcaDuration
        duration={duration}
        batchStart={batchStart}
        eligibility={eligibility}
      />
      <CourseOverview
        overviewTitle={overviewTitle}
        overViewContent={overViewContent}
      />
      <Stages Selection={Selection} assessmentStages={assessmentStages} />
      <Pilot360Provides providesTitle={providesTitle} />
      <StudentGallery />
      <Testimonials />
      <CTASection />
    </div>
  );
}
