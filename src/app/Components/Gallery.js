"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Image1 from "../assets/gallery/1.jpg"; // Ensure the path is correct.
import Image2 from "../assets/gallery/2.jpg"; // Ensure the path is correct.
import Image3 from "../assets/gallery/3.jpg"; // Ensure the path is correct.
import Image4 from "../assets/gallery/4.jpg"; // Ensure the path is correct.
import Image5 from "../assets/gallery/5.jpg"; // Ensure the path is correct.
import Image6 from "../assets/gallery/6.jpg"; // Ensure the path is correct.
import Image7 from "../assets/gallery/7.jpg"; // Ensure the path is correct.
import Image8 from "../assets/gallery/8.jpg"; // Ensure the path is correct.
import Image9 from "../assets/gallery/9.jpg"; // Ensure the path is correct.
import Image10 from "../assets/gallery/10.jpg"; // Ensure the path is correct.
import Image11 from "../assets/gallery/11.jpg"; // Ensure the path is correct.
import Image12 from "../assets/gallery/12.jpg"; // Ensure the path is correct.

const images = [
  { id: 1, src: Image1 },
  { id: 2, src: Image2 },
  { id: 3, src: Image3 },
  { id: 4, src: Image4 },
  { id: 5, src: Image5 },
  { id: 6, src: Image6 },
  { id: 7, src: Image7 },
  { id: 8, src: Image8 },
  { id: 9, src: Image9 },
  { id: 10, src: Image10 },
  { id: 11, src: Image11 },
  { id: 12, src: Image12 },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRefDesktop = useRef(null);
  const scrollRefMobile = useRef(null);

  const IMAGE_WIDTH = 300; // Adjust based on your image size
  const SCROLL_INTERVAL = 3000; // 3 seconds for auto-scrolling

  // Function to scroll to a specific index
  const scrollToImage = (index, ref) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: index * IMAGE_WIDTH,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollImages = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollToImage(nextIndex, scrollRefDesktop);
        scrollToImage(nextIndex, scrollRefMobile);
        return nextIndex;
      });
    };

    const interval = setInterval(scrollImages, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-white px-4">
      <h2 className="text-center font-bold text-[#344054] mb-6">
        <span className="text-[35px] md:text-[60px]">
          Proud <span className="text-[#801B2B]">Moments</span>
        </span>
      </h2>

      <div className="hidden md:grid grid-rows-3 grid-cols-4 gap-4 w-full">
        {images.map((image) => (
          <div key={image.id} className="w-full">
            <Image
              src={image.src}
              alt={`Pilot image ${image.id}`}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-[450px]"
            />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden">
        <div
          ref={scrollRefMobile}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {images.map((image) => (
            <div key={image.id} className={`flex-shrink-0 w-72`}>
              <Image
                src={image.src}
                alt={`Pilot image ${image.id}`}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-[350px]"
              />
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index); // ✅ Update currentIndex when clicking a dot
                scrollToImage(index, scrollRefMobile);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#801B2B] scale-125"
                  : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
// "use client";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// const GallerySection = () => {
//   const pathname = usePathname(); // Detects route changes
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     // Remove any existing Curator.io script
//     const existingScript = document.querySelector(
//       "script[src='https://cdn.curator.io/published/33622f7b-bbab-4295-aa98-bae94f4dcc41.js']"
//     );
//     if (existingScript) {
//       existingScript.remove();
//     }

//     // Create a new script element
//     const script = document.createElement("script");
//     script.async = true;
//     script.charset = "UTF-8";
//     script.src =
//       "https://cdn.curator.io/published/33622f7b-bbab-4295-aa98-bae94f4dcc41.js";

//     script.onload = () => setScriptLoaded(true); // Mark script as loaded
//     document.body.appendChild(script);

//     return () => {
//       script.remove(); // Cleanup when component unmounts
//     };
//   }, [pathname]); // Runs on every route change

//   return (
//     <section className="py-10 bg-white px-4">
//       <h2 className="text-center font-bold text-[#344054] mb-6">
//         <span className="text-[35px] md:text-[60px]">
//           Proud <span className="text-[#801B2B]">Moments</span>
//         </span>
//       </h2>

//       {!scriptLoaded ? (
//         <div className="flex justify-center items-center h-[200px]">
//           <div className="animate-spin w-8 h-8 border-4 border-[#801B2B] border-t-transparent rounded-full"></div>
//         </div>
//       ) : (
//         <div id="curator-feed-default-feed-layout">
//           <a
//             href="https://curator.io"
//             target="_blank"
//             className="crt-logo crt-tag text-white"
//           >
//             <span className="text-white">Powered by Curator.io</span>
//           </a>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GallerySection;
