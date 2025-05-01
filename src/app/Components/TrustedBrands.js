"use client";
import Image from "next/image";

// Import logos (replace with actual paths)
import logo1 from "../assets/logo/air india.png";
import logo2 from "../assets/logo/airindiaexpress.png";
import logo3 from "../assets/logo/airjapan.png";
import logo4 from "../assets/logo/airlingus.png";
import logo5 from "../assets/logo/cathay.png";
import logo6 from "../assets/logo/emirates.png";
import logo7 from "../assets/logo/etihad.png";
import logo8 from "../assets/logo/flydubai.png";
import logo9 from "../assets/logo/indigo.png";
import logo10 from "../assets/logo/koreanair.png";
import logo11 from "../assets/logo/norwegian.png";
import logo12 from "../assets/logo/qatar.png";
import logo13 from "../assets/logo/vistara.png";
import logo14 from "../assets/logo/wizz.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
];

export default function TrustedBrands() {
  return (
    <section className="bg-[#F5F5F5] py-10 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-[30px] font-semibold text-[#171717] mb-6 px-2">
          Where Our Graduates Fly,{" "}
          <span className="text-[#801B2B]">Proudly Placed Pilots</span>
        </h2>

        {/* Auto-scrolling section */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 items-center animate-scroll px-6">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={120}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
