import Image from "next/image";

export default function TrainingSection({
  country,
  description,
  image1,
  alt1,
  image2,
  alt2
}) {
  return (
    <section className="pb-16 px-4 md:px-8">
      <div className="text-center mb-8">
        <h2 className="text-[30px] md:text-[70px] lg:text-[96px] font-bold text-gray-800">
          Commercial <br />
          <span className="text-[#801B2B]">Pilot Training</span> in the{" "}
          {country}
        </h2>
        {/* Wrapper for horizontal centering */}
        <div className="flex justify-center">
          {/* Container with width control */}
          <div className="relative w-full md:w-[80%]">
            {/* SVG Icon positioned at top left */}
            <div className="absolute -top-6 hidden md:block">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.135 17.445H5.1C5.22 10.44 6.6 9.28502 10.905 6.73502C11.4 6.43502 11.565 5.80502 11.265 5.29502C10.98 4.80002 10.335 4.63502 9.84 4.93502C4.77 7.93502 3 9.76502 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z"
                  fill="#344054"
                />
                <path
                  d="M28.3648 17.445H21.3298C21.4498 10.44 22.8298 9.28502 27.1348 6.73502C27.6298 6.43502 27.7948 5.80502 27.4948 5.29502C27.1948 4.80002 26.5648 4.63502 26.0548 4.93502C20.9848 7.93502 19.2148 9.76502 19.2148 18.495V26.58C19.2148 29.145 21.2998 31.215 23.8498 31.215H28.3498C30.9898 31.215 32.9848 29.22 32.9848 26.58V22.08C32.9998 19.44 31.0048 17.445 28.3648 17.445Z"
                  fill="#344054"
                />
              </svg>
            </div>

            {/* Text content */}
            <p className="text-[12px] md:text-[20px] text-gray-600 mt-4">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        <Image
          src={image1}
          alt={alt1}
          className="rounded-2xl shadow-md"
          width={500}
          height={350}
        />
        <Image
          src={image2}
          alt={alt2}
          className="rounded-2xl shadow-md"
          width={500}
          height={350}
        />
      </div>

      {/* <div className="flex flex-row gap-4 justify-center mt-8">
        <button className="bg-[#4A3E3E] text-white py-3 px-2 rounded-xl hover:bg-gray-900 transition text-[13px] md:text-[24px]">
          10+ Flying School
        </button>
        <button className="bg-[#4A3E3E] text-white py-3 px-2 md:px-6 rounded-xl hover:bg-gray-900 transition text-[13px] md:text-[24px]">
          USA Course Location
        </button>
      </div> */}
    </section>
  );
}
