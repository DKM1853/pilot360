"use client";
import React from "react";
import bgImage from "../assets/faq-bg.png"; // Ensure correct path

const faqs = [
  {
    id: 1,
    question: "What are the eligibility requirements to become a pilot?",
    answer:
      "To enroll in pilot training, you typically need to be at least 17 years old, have a high school diploma or equivalent, and pass a medical examination. Proficiency in English is also required.",
  },
  {
    id: 2,
    question:
      "What types of pilot licenses can I obtain through your training programs?",
    answer:
      "Pilot 360 offers comprehensive training for various licenses, including Private Pilot License (PPL), Commercial Pilot License (CPL), Instrument Rating (IR), and Multi-Engine Rating (MER).",
  },
  {
    id: 3,
    question: "How long does it take to complete pilot training?",
    answer:
      "The duration depends on the type of license you pursue and weather conditions. On average, a CPL program can take 8 to 12 months if completed full-time.",
  },
  {
    id: 4,
    question: "Is financial assistance available for pilot training?",
    answer:
      "Yes, we provide information on financing options, scholarships, and payment plans to help make your pilot training more accessible.",
  },
  {
    id: 5,
    question: "What types of aircraft will I train on?",
    answer:
      "We use modern, well-maintained training aircraft, including single-engine and multi-engine planes, equipped with advanced avionics for a comprehensive training experience.",
  },
  {
    id: 6,
    question: "Do you assist with job placements after training?",
    answer:
      "Yes, we offer career counseling and guidance to help students connect with airlines and aviation companies for potential job opportunities.",
  },
];

const FAQSection = () => {
  return (
    <section
      className="w-full py-16 bg-cover bg-center px-4 bg-white"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* FAQ Title */}
        <div className="text-left mb-12">
          <p className="text-sm uppercase text-gray-500">FAQ</p>
          <h2 className="text-4xl font-bold text-black">
            Frequently Asked <br />
            Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="lg:grid gap-y-8 sm:grid-cols-1 md:grid-cols-16">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`relative col-span-5 w-full rounded-[8px] p-6 transition-all ${
                index % 2 === 0
                  ? "bg-[#2353AB] text-white"
                  : "text-black lg:ms-[5%]"
              } sm:col-span-12`}
              style={{
                gridColumn: index % 2 === 0 ? "2 / span 5" : "7 / span 5",
                // marginTop: index !== 0 ? "-20px" : "0", // Slight overlap effect
              }}
            >
              <h3 className="text-[15px] lg:text-[24px] font-bold">
                {faq.question}
              </h3>
              <p className="text-[10px] lg:text-[18px] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
