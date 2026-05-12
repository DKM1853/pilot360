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
        {/* Left: Image Section */}
        <div className="hidden md:flex md:w-1/2 items-end p-0">
          <Image
            src={pilot} // ✅ Now uses Pilot 360 logo
            alt="Pilot 360 Logo"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Form Section */}
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

      {/* ✅ Addresses Section — Ahmedabad first, Delhi added after */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ahmedabad Address */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3
            className="text-xl font-bold text-[#004AAB] mb-2"
            style={{ fontFamily: "Nunito" }}
          >
            Ahmedabad
          </h3>
          <p className="text-gray-700">
            Shreeya Amalga 405, Above Chroma, off Sindhubhavan Road, Thaltej,
            Ahmedabad – 380059
          </p>
          <p className="text-gray-700 mt-1">📞 7600534858</p>
          <div className="mt-4">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4859413809954!2d72.56708789999999!3d23.0426396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8555fddcb439%3A0x10d0b3c794916fb0!2sPilot%20360!5e0!3m2!1sen!2sin!4v1741462295907!5m2!1sen!2sin"
              width="100%"
                  height="200"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ✅ Delhi Address — added after Ahmedabad as per requirement */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3
            className="text-xl font-bold text-[#004AAB] mb-2"
            style={{ fontFamily: "Nunito" }}
          >
            Delhi
          </h3>
          <p className="text-gray-700">
            D-416, Ramphal Chowk Rd, Block D, Sector 7 Dwarka, Dwarka, New
            Delhi – 110077
          </p>
          <p className="text-gray-700 mt-1">📞 9217663195</p>
          {/* ✅ Delhi Google Map embed from Excel */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5204333787187!2d77.068618575499!3d28.584160075691155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5b96c10adb%3A0xae37e4cc19bf173d!2sPilot%20360%20-%20Delhi!5e0!3m2!1sen!2sin!4v1778070375463!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delhi Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;