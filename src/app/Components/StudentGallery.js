import Image from "next/image";
import img1 from "../assets/ATPL.png";
import euroImage2 from "../assets/images/europe-image-2.jpg";
import canadaImage1 from "../assets/images/canada-image-1.jpg";
import image1 from "../assets/images/us-image-1.jpg";
import image2 from "../assets/images/us-image-2.jpg";
import canadaImage2 from "../assets/images/canada-image-2.jpg";
import euroImage1 from "../assets/images/europe-image-1.jpg";

export default function StudentGallery() {
  const images = [
    image1,
    canadaImage1,
    euroImage2,
    image2,
    canadaImage2,
    euroImage1,
  ]; // Replace with actual image imports

  return (
    <div className="bg-[#801B2B] rounded-[60px] mt-8">
      <h2 className="text-[30px] md:text-[60px] font-bold text-center text-white pt-4 mb-4">
        Gallery of our students
      </h2>
      <div className="bg-[#F0F8FD] rounded-[60px] pt-12 pb-8 px-4 md:p-16 mx-auto mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={img}
                alt={`Student Image ${index + 1}`}
                className="w-full h-[350px] object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect, useState } from "react";

// export default function StudentGallery() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Load Curator.io script dynamically
//     const script = document.createElement("script");
//     script.async = true;
//     script.charset = "UTF-8";
//     script.src =
//       "https://cdn.curator.io/published/33622f7b-bbab-4295-aa98-bae94f4dcc41.js";
//     document.body.appendChild(script);

//     script.onload = () => setIsLoading(false);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="bg-[#801B2B] rounded-[60px] mt-8">
//       <h2 className="text-[30px] md:text-[60px] font-bold text-center text-white pt-4 mb-4">
//         Gallery of Our Students
//       </h2>
//       <div className="bg-[#F0F8FD] rounded-[60px] pt-12 pb-8 px-4 md:p-16 mx-auto mb-4">
//         {isLoading ? (
//           <p className="text-center text-[#801B2B] font-semibold">Loading...</p>
//         ) : (
//           <div id="curator-feed-default-feed-layout">
//             <a
//               href="https://curator.io"
//               target="_blank"
//               className="crt-logo crt-tag text-white"
//             >
//               <span className="text-white">Powered by Curator.io</span>
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
