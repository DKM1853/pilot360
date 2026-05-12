import ContactUs from "./ContactUs";
import bgImage1 from "../assets/contact-bg.png";
import Navbar from "../Components/Navbar";

export const metadata = {
  title: "Contact Pilot 360 - Get in Touch for Pilot Training Assistance",
  description:
    "Have questions? Contact Pilot 360 for expert guidance on pilot training, DGCA approvals, financing, and career support. We're here to help!",
  keywords: "About UsDoc, Medical Professionals in USA, UsDoc Services",
  openGraph: {
    title: "Contact Pilot 360 - Get in Touch for Pilot Training Assistance",
    description:
      "Have questions? Contact Pilot 360 for expert guidance on pilot training, DGCA approvals, financing, and career support. We're here to help!",
    url: "http://localhost:3000/Contact-us",
    siteName: "pilot 360",
    locale: "en_US",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div
      className="pt-[10px] lg:pt-[20px] font-onest"
      style={{
        backgroundImage: `url(${bgImage1.src})`,
        backgroundSize: "cover", // Ensures the image covers the full container
        backgroundPosition: "center", // Centers the background
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <ContactUs />
      {/* <div className="flex items-center mx-auto justify-center w-[90%] md:w-[80%] mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4859413809954!2d72.56708789999999!3d23.0426396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8555fddcb439%3A0x10d0b3c794916fb0!2sPilot%20360!5e0!3m2!1sen!2sin!4v1741462295907!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
    </div>
  );
}
