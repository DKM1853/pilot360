/** @jsxImportSource react */
"use client";

import Image from "next/image";
import { useState } from "react";
import pilot from "../assets/contact-pilot.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    // degree: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch(
        "https://auth.thepilotprep.com/reviews/business/cdihbchudv/pilotprep/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatusMessage(
          "Form submitted successfully. Admin has been notified."
        );
      } else {
        setStatusMessage("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Form */}
          <form
            style={{
              fontFamily: "Nunito",
            }}
          >
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                required
                style={{
                  fontFamily: "Nunito",
                  color: "black", // Ensure text color is black
                }}
              />
              <input
                type="text"
                name="number"
                placeholder="Phone"
                value={formData.number}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                required
                style={{
                  color: "black", // Ensure text color is black
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                required
                style={{
                  color: "black", // Ensure text color is black
                }}
              />
              {/* <select
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white text-black"
                required
                style={{
                  color: "black", // Ensure text color is black
                }}
              >
                <option value="" disabled>
                  Select your qualification
                </option>
                <option value="MBBS">MBBS</option>
                <option value="MD">MD</option>
                <option value="MS">MS</option>
                <option value="BDS">BDS</option>
                <option value="MDS">MDS</option>
              </select> */}

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-black"
                required
                style={{
                  color: "black", // Ensure text color is black
                }}
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`mt-6 w-full ${
                isSubmitting ? "bg-blue-400" : "bg-blue-800"
              } text-white py-3 rounded-md font-semibold hover:bg-blue-900 transition`}
              style={{
                fontFamily: "Nunito",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <p className="mt-4 text-center text-lg font-medium text-[#004AAB]">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
