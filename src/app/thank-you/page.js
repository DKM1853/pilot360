"use client";
import { useRouter } from "next/navigation"; // Use next/navigation in Next.js 13+

export default function ThankYou() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/`);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center max-w-2xl">
        <p className="text-5xl font-semibold mb-4 text-[#801B2B]">Thank You</p>
        <p className="text-base text-gray-700">
          We've received your request and will be in touch soon to guide you{" "}
          <br />
          through our pilot training programs and answer any questions.
          <br />
          In the meantime, feel free to explore more about our school and
          training options.
        </p>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-[#2353AB] text-white px-6 py-2 rounded-full transition text-[20px]"
          >
            Visit Our website
          </button>
        </div>
      </div>
    </div>
  );
}
