import Link from "next/link";
import Navbar from "../Components/Navbar";
import bgImage from "../assets/contact-bg.png";

export const metadata = {
  title: "Thank You - Pilot 360",
  description:
    "Thank you for contacting Pilot 360. Our team will get back to you soon.",
};

export default function ThankYou() {
  return (
    <div
      className="pt-[10px] lg:pt-[20px] font-onest"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-16 md:px-12">
        <div className="w-full max-w-3xl rounded-lg bg-white p-8 text-center shadow-lg md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#DC143B]">
            Message received
          </p>
          <h1 className="mb-4 text-3xl font-bold text-[#004AAB] md:text-5xl">
            Thank you for reaching out
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-700 md:text-lg">
            Our team has received your details and will contact you soon to help
            with your pilot training questions.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-[60px] bg-[#2353AB] px-8 py-3 font-semibold text-white transition hover:bg-[#DC143B]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
