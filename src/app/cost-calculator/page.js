import Navbar from "../Components/Navbar";
import CostCalculator from "../Components/CostCalculator";

export const metadata = {
  title: "Cost Calculator - Pilot 360",
  description:
    "Compare USA flight training costs with Pilot 360's detailed cost calculator.",
};

export default function CostCalculatorPage() {
  return (
    <div className="bg-[#f0f4fa] min-h-screen pt-[10px] lg:pt-[20px] font-onest">
      <Navbar />
      <CostCalculator />
    </div>
  );
}
