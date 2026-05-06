/** @jsxImportSource react */
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/navigation";
import pilot from "../assets/contact-pilot.png";

const ContactUs = () => {
  const router = useRouter();

  useEffect(() => {
    const handleFormSubmitMessage = (event) => {
      const allowedOrigins = [
        "https://api.leadconnectorhq.com",
        "https://link.msgsndr.com",
      ];

      if (!allowedOrigins.includes(event.origin) || !Array.isArray(event.data)) {
        return;
      }

      const inputJSON = event.data[2];
      const hasSubmittedContact =
        typeof inputJSON === "string" &&
        inputJSON.includes("customer_id") &&
        inputJSON.includes("email");

      if (hasSubmittedContact) {
        router.push("/thank-you");
      }
    };

    window.addEventListener("message", handleFormSubmitMessage);

    return () => {
      window.removeEventListener("message", handleFormSubmitMessage);
    };
  }, [router]);

  return (
    <div className="py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Right: Image Section */}
        <div className="hidden md:flex md:w-1/2 items-end p-0 ">
          <Image
            src={pilot} // Replace with your image path
            alt="Doctor Illustration"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Left: Form Section */}
        <div className="flex-1 p-6 md:p-10">
          {/* Title */}
          <h2
            className="text-2xl md:text-3xl font-bold text-[#004AAB] mb-4"
            style={{
              fontFamily: "Nunito",
            }}
          >
            Reach Out to Us
          </h2>
          <p>We're here to answer your questions and clear all your doubts</p>

          {/* Needle Effect */}
          <div className="relative mt-2 mb-4">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC143B]"></div>
            <div className="w-[150px] h-1 bg-[#DC143B] ml-4"></div>
          </div>

          {/* Embedded Form */}
          <div className="w-full h-[454px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/ckzGXcuPbx2tpvYyn6yr"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
              }}
              id="inline-ckzGXcuPbx2tpvYyn6yr"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Reach Out to Us"
              data-height="454"
              data-layout-iframe-id="inline-ckzGXcuPbx2tpvYyn6yr"
              data-form-id="ckzGXcuPbx2tpvYyn6yr"
              title="Reach Out to Us"
            />
          </div>
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
