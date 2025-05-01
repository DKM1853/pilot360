"use client";
import React from "react";
import bgImage from "../assets/bg-2.jpeg"; // Background image path
import { useRouter } from "next/navigation"; // Use next/navigation in Next.js 13+

const TypeRating = () => {
  const aircrafts = [
    {
      id: 1,
      name: "Airbus A320",
      description: "Get type rated on an Airbus A320",
      Icon: () => (
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-4 left-[-3%] lg:-top-3 md:left-[-15%] lg:left-[10%] "
        >
          <path
            d="M29.5 20.4043C29.5 17.4043 26.5 11.4043 29.5 2.4043M22 23.9043C17.6667 19.7376 8.8 9.6043 8 2.4043M19 30.9043C16.3333 30.9043 9.2 29.5043 2 23.9043"
            stroke="#FFFDFC"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Boeing 737",
      description: "Get type rated on Boeing 737",
      Icons: [
        () => (
          <svg
            width="24"
            height="29"
            viewBox="0 0 24 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-6 md:-top-3 lg:-top-2 left-[5%] md:left-[-30%] lg:left-[15%]"
          >
            <path
              d="M19.225 5.92892L16.7558 6.7446L14.4303 4.17257C13.1981 2.75889 11.5717 1.22903 10.8255 0.708925C8.85326 -0.665629 7.72287 1.63803 8.43701 5.3858L9.03832 8.50004L5.29114 9.2177C2.93846 9.63897 1.33697 10.346 1.08784 11.0443C0.615611 12.0628 1.02097 12.5038 5.23684 15.2043L9.82584 18.1649L9.64868 20.578C8.93382 29.6713 12.2547 32.0652 15.0484 24.4207L16.2358 21.1262L17.8447 21.772C22.5812 23.7256 23.263 23.8837 23.7836 23.1367C24.081 22.7099 23.3161 20.5121 22.0827 18.3049C19.5141 13.5817 19.4385 12.8949 21.2977 10.2272C24.0866 6.22577 23.344 4.67773 19.225 5.92892ZM12.8066 7.63853C12.6206 7.90529 12.3281 8.09775 12.2215 8.02345C12.0616 7.912 11.981 7.45949 12.007 7.08127C12.0702 6.64971 12.3256 6.5106 12.5921 6.69635C12.9119 6.91925 13.0297 7.31841 12.8066 7.63853ZM15.7743 12.2435C15.8871 12.877 15.3727 14.1832 14.6662 15.1969L13.3276 17.1176L12.8118 14.2215C12.3766 11.7779 12.5303 11.3302 13.6 11.0452C15.1061 10.5888 15.5164 10.7955 15.7743 12.2435ZM9.21703 13.6978C9.06335 14.1456 8.39769 14.078 7.54485 13.4836C6.26558 12.592 6.23334 12.411 7.30308 12.1261C8.68146 11.7392 9.55043 12.4241 9.21703 13.6978Z"
              fill="#FCFCFD"
            />
          </svg>
        ),
        () => (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-28 md:-bottom-40 right-0"
          >
            <path
              d="M11.9808 2.44596L10.4215 4.527L7.04297 3.74661C5.22377 3.29138 3.01473 2.96622 2.10512 2.96622C-0.298833 2.96622 0.090997 5.50249 2.81981 8.16882L5.09382 10.3799L2.42998 13.1113C0.740714 14.8021 -0.16889 16.2979 0.0260252 17.0132C0.220941 18.1188 0.805686 18.2489 5.80851 18.0538L11.2661 17.8587L12.5006 19.9397C17.1136 27.8086 21.2068 27.8737 19.1277 20.0047L18.2181 16.623L19.9074 16.2329C24.9102 15.1273 25.5599 14.8672 25.5599 13.9567C25.5599 13.4365 23.6757 12.0708 21.4017 10.9652C16.5938 8.55901 16.139 8.03875 16.139 4.78713C16.139 -0.0903111 14.6447 -0.935734 11.9808 2.44596ZM7.69269 7.51849C7.69269 7.84366 7.56275 8.16882 7.4328 8.16882C7.23789 8.16882 6.91303 7.84366 6.71812 7.51849C6.5232 7.1283 6.65314 6.86817 6.978 6.86817C7.36783 6.86817 7.69269 7.1283 7.69269 7.51849ZM12.7605 9.59953C13.2153 10.0548 13.5401 11.4204 13.5401 12.6561V14.9972L11.4611 12.9162C9.70682 11.1603 9.57687 10.7051 10.2916 9.85966C11.2661 8.62405 11.7209 8.55902 12.7605 9.59953ZM8.21247 14.542C8.34241 14.9972 7.75766 15.3224 6.71812 15.3224C5.15879 15.3224 5.02885 15.1923 5.74354 14.3469C6.65314 13.2414 7.75766 13.3064 8.21247 14.542Z"
              fill="#FCFCFD"
            />
          </svg>
        ),
      ],
    },
    {
      id: 3,
      name: "ATR",
      description: "Get type rated on an ATR",
      Icon: () => (
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-4 right-[20%] md:-top-4 md:right-[15%] -top-6 right-[38%]"
        >
          <path
            d="M2 20C2 17 5 11 2 2M9.5 23.5C13.8333 19.3333 22.7 9.2 23.5 2M12.5 30.5C15.1667 30.5 22.3 29.1 29.5 23.5"
            stroke="#FFFDFC"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const router = useRouter();

  const handleLearnMore = (aircraft) => {
    const linkSlug = aircraft.name.replace(/\s+/g, "-");
    router.push(`/${linkSlug}-Type-Rating`);
  };

  return (
    <section
      className="w-full py-16 px-4 mt-6 bg-cover bg-center relative rounded-2xl"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-white">
        Type Rating
      </h2>
      <div className="max-w-[90%] mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {aircrafts.map((aircraft) => (
          <div
            key={aircraft.id}
            className="text-white rounded-[20px] p-8 text-center relative"
          >
            {/* Icon and Title */}
            <div className="relative mb-4">
              {aircraft.Icon && <aircraft.Icon />}
              {aircraft.Icons &&
                aircraft.Icons.map((Icon, index) => <Icon key={index} />)}
              <h3 className="text-[40px] md:text-[23px] lg:text-[48px] font-bold relative z-10">
                {aircraft.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-6">{aircraft.description}</p>

            {/* Button */}
            <button
              onClick={() => handleLearnMore(aircraft)}
              className="inline-flex items-center justify-center gap-2 px-6 md:px-2 lg:px-4 py-3 text-white bg-[#9C1415] rounded-full font-medium hover:bg-[#a31b1c] transition-all"
            >
              Learn More <span className="text-lg">↗</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypeRating;
