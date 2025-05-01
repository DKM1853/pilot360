import Image from "next/image";

export default function DGCAMedicals() {
  return (
    <div className="bg-[#1C1C1C] text-white py-16 px-4 md:px-10 w-[98%] md:w-[90%] mx-auto rounded-[40px] mb-10">
      {/* Title with Tag Image */}
      <div className="flex flex-col items-center text-center mb-8">
        <p className="border border-[#171717] px-4 py-2 rounded-[38.24px] bg-[#FFFFFF1A] text-[#FFBB00] text-[20px] mb-2">
          Course Overview
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Types of DGCA Medicals
        </h2>
      </div>

      {/* Content Sections */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Section 1 */}
        <div className="bg-[#4A3E3E] rounded-xl p-6 md:p-8 shadow-lg">
          <h3 className="text-[24px] md:text-[38px] font-semibold">
            Class 2 Medicals (Initial Step)
          </h3>

          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li> Required before applying for a DGCA Computer Number.</li>
            <li>
              Conducted by DGCA-approved doctors across India. Includes vision
              tests, hearing tests, ECG, blood tests, and general health
              assessment.
            </li>
            <li>
              Once cleared, reports are sent to DGCA, which then issues a Class
              2 medical assessment.
            </li>
            <li>
              Class 1 Medicals (For CPL & Airline Eligibility) follow after
              Class 2 assessment.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-[#4A3E3E] rounded-xl p-6 md:p-8 shadow-lg">
          <h3 className="text-[24px] md:text-[38px] font-semibold">
            Class 1 Medicals (For CPL & Airline Eligibility){" "}
          </h3>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>
              Conducted at DGCA-approved Aviation Medical Centers (IAMs, AFCME,
              or Apollo Hospitals)
            </li>
            <li>
              Conducted by DGCA-approved doctors across India. Includes vision
              tests, hearing tests, ECG, blood tests, and general health
              assessment.
            </li>
            <li>
              Includes advanced cardiovascular, neurological, and psychological
              evaluations
            </li>
            <li>
              Once cleared, the candidate receives a Class 1 Medical
              Certificate, valid for airline applications and CPL issuance
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-[#4A3E3E] rounded-xl p-6 md:p-8 shadow-lg">
          <h3 className="text-[24px] md:text-[38px] font-semibold">
            How Pilot 360 Assists Aspiring Pilots Before Medicals?
          </h3>
          <ul className="mt-4 space-y-2 list-disc pl-5 mb-4">
            <li>
              Pre-Medical Screening & Consultation – Helps candidates identify
              and address potential health issues before appearing for DGCA
              medicals.
            </li>
            <li>
              Guidance on Fitness Requirements – Provides insights into DGCA
              medical criteria, including vision, BMI, hearing, and overall
              health standards.
            </li>
            <li>
              Specialist Referrals – Connects candidates with DGCA-approved
              doctors for Class 2 medicals and assists in booking Class 1
              medical appointments at authorized centers.
            </li>
            <li>
              Mock Medical Checkups & Tests – Conducts preliminary medical
              assessments to detect common issues like high blood pressure,
              obesity, or vision problems before the official exam.
            </li>
            <li>
              Diet & Lifestyle Coaching – Personalized plans to help candidates
              maintain fitness, ideal BMI, and overall well-being for medical
              clearance.
            </li>
            <li>
              Support for Re-Medicals & Appeals – Assists pilots who need
              re-evaluations or have been declared temporarily unfit due to
              minor medical conditions
            </li>
          </ul>
          <hr />
          <p className="mt-4">
            Clearing DGCA Medicals is a critical milestone for every aspiring
            pilot. Pilot 360 ensures candidates are well-prepared, fit, and
            confident before their medical exams, reducing delays or
            disqualifications.
          </p>
        </div>
      </div>
    </div>
  );
}
