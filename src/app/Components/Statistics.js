"use client";
import { useState, useEffect } from "react";

const stats = [
  { value: 500, label: "Successful Students", suffix: "+" },
  { value: 100, label: "Client Satisfaction Rate", suffix: "%" },
  { value: 17, label: "Years of Industry Experience", suffix: "+" },
  { value: 5, label: "Continents Served Globally", suffix: "" },
];

const CounterCard = ({ targetValue, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Counter animation duration in ms
    const increment = targetValue / (duration / 20);

    let timer; // Declare timer outside to avoid scope issues

    if (targetValue > 0) {
      timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          clearInterval(timer);
          setCount(targetValue);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
    }

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <div className="bg-[#801B2B] bg-opacity-20 p-6 text-center rounded-lg shadow-md w-full max-w-[268px] border border-[#D4D4D4]">
      <h3 className="text-4xl font-bold text-[#801B2B]">
        {count}
        {suffix}
      </h3>
      <p className="text-[#801B2B] mt-2">{label}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        {/* <p className="text-[14px] text-[#525252] border border-[#D4D4D4] px-4 py-1 inline-block rounded-md mb-4">
          Statistics
        </p> */}
        <h2 className="text-[30px] font-bold text-[#171717]">
          Numbers That Showcase Our{" "}
          <span className="text-[#801B2B]">Legacy of Success</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {stats.map((stat, index) => (
          <CounterCard
            key={index}
            targetValue={stat.value}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
