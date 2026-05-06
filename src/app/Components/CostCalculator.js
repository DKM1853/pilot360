"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const B = {
  pri: "#2352AB",
  acc: "#801B2B",
  grnL: "#dcfce7",
  redL: "#fee2e2",
  bg: "#f0f4fa",
  card: "#ffffff",
  txt: "#1e293b",
  mut: "#64748b",
  brd: "#e2e8f0",
};

const SKYDUO = {
  name: "SkyDuo Flight Academy (Pilot 360)",
  irEnabled: true,
  examinerPPL: 1200,
  examinerIR: 1200,
  examinerCPL: 1200,
  i20Admission: 0,
  planeCostPerHr: 155,
  flightHours: 190,
  flightSimInstrPerHr: 60,
  flightSimInstrHours: 155,
  groundBriefPerHr: 60,
  groundBriefHours: 105,
  multiEnginePerHr: 330,
  multiEngineHours: 15,
  simPerHr: 35,
  simHours: 50,
  fuelSurchargePerHr: 0,
  fuelSurchargeHours: 0,
  landingFeePerLanding: 0,
  estimatedLandings: 0,
  priceGuaranteed: true,
  adminCharges: 0,
  accomPerMonth: 750,
  accomMonths: 7,
  foodPerMonth: 250,
  foodMonths: 7,
  ex1c: 0,
  ex2c: 0,
  pay1: 20000,
  pay2: 10000,
  pay3: 10000,
  pay4: 10000,
  pay5: 3750,
};

const BLANK = {
  name: "School B",
  irEnabled: true,
  examinerPPL: 0,
  examinerIR: 0,
  examinerCPL: 0,
  i20Admission: 0,
  planeCostPerHr: 0,
  flightHours: 0,
  flightSimInstrPerHr: 0,
  flightSimInstrHours: 0,
  groundBriefPerHr: 0,
  groundBriefHours: 0,
  multiEnginePerHr: 0,
  multiEngineHours: 0,
  simPerHr: 0,
  simHours: 0,
  fuelSurchargePerHr: 0,
  fuelSurchargeHours: 0,
  landingFeePerLanding: 0,
  estimatedLandings: 0,
  priceGuaranteed: false,
  adminCharges: 0,
  accomPerMonth: 0,
  accomMonths: 0,
  foodPerMonth: 0,
  foodMonths: 0,
  ex1c: 0,
  ex2c: 0,
  pay1: 0,
  pay2: 0,
  pay3: 0,
  pay4: 0,
  pay5: 0,
};

function calc(s) {
  const tsa = 230;
  const exams = 170 + (s.irEnabled ? 170 : 0) + 170;
  const checkrides =
    s.examinerPPL + (s.irEnabled ? s.examinerIR || 0 : 0) + s.examinerCPL;
  const govt = 185 + 350 + tsa + exams + checkrides;
  const optional = 2000;
  const flight = s.planeCostPerHr * s.flightHours;
  const flightInstr = s.flightSimInstrPerHr * s.flightSimInstrHours;
  const groundBrief = s.groundBriefPerHr * s.groundBriefHours;
  const multi = s.multiEnginePerHr * s.multiEngineHours;
  const sim = s.simPerHr * s.simHours;
  const fuel = s.fuelSurchargePerHr * (s.fuelSurchargeHours || 0);
  const landing = s.landingFeePerLanding * s.estimatedLandings;
  const school =
    s.i20Admission + flight + flightInstr + groundBrief + multi + sim + fuel + landing;
  const insurance = 630;
  const admin = s.adminCharges || 0;
  const living = s.accomPerMonth * s.accomMonths + s.foodPerMonth * s.foodMonths;
  const extras = 1200 + 3250 + (s.ex1c || 0) + (s.ex2c || 0);
  const total = govt + optional + school + insurance + admin + living + extras;
  const totalHrs = s.flightHours + s.multiEngineHours + s.simHours;

  return {
    tsa,
    exams,
    checkrides,
    govt,
    optional,
    flight,
    flightInstr,
    groundBrief,
    multi,
    sim,
    fuel,
    landing,
    school,
    insurance,
    admin,
    living,
    extras,
    total,
    totalHrs,
  };
}

function formatMoney(n) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function Field({ label, value, onChange, suffix, disabled, highlight, sub }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "6px 0",
        borderBottom: "1px solid " + B.brd,
        opacity: disabled ? 0.45 : 1,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12.5, color: B.txt }}>{label}</div>
        {sub ? <div style={{ fontSize: 10.5, color: B.mut }}>{sub}</div> : null}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          disabled={disabled}
          style={{
            width: 82,
            padding: "5px 8px",
            fontSize: 12.5,
            textAlign: "right",
            border: "1.5px solid " + (highlight ? B.pri : B.brd),
            borderRadius: 6,
            background: highlight ? "#eef3ff" : disabled ? "#f8f8f8" : "#fff",
            color: B.txt,
            outline: "none",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        />
        {suffix ? (
          <span style={{ fontSize: 10.5, color: B.mut, minWidth: 28 }}>{suffix}</span>
        ) : null}
      </div>
    </div>
  );
}

function SectionHeading({ title }) {
  return (
    <div
      style={{
        padding: "8px 12px",
        margin: "12px 0 4px",
        background: "rgba(35,82,171,0.08)",
        borderRadius: 7,
        borderLeft: "4px solid " + B.pri,
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: B.txt,
      }}
    >
      {title}
    </div>
  );
}

function Line({ label, amount, bold }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 0",
        borderBottom: bold ? "none" : "1px dashed " + B.brd,
      }}
    >
      <span style={{ fontSize: bold ? 13 : 12, fontWeight: bold ? 700 : 400, color: B.txt }}>
        {label}
      </span>
      <span
        style={{
          fontSize: bold ? 13 : 12,
          fontWeight: bold ? 700 : 500,
          color: B.txt,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {formatMoney(amount)}
      </span>
    </div>
  );
}

function Subtotal({ val }) {
  return (
    <div
      style={{
        textAlign: "right",
        fontSize: 11.5,
        color: B.pri,
        fontWeight: 600,
        padding: "2px 0",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      = {formatMoney(val)}
    </div>
  );
}

function SchoolColumn({ school, setSchool, index, costs, onRemove }) {
  const update = (key) => (value) => setSchool({ ...school, [key]: value });
  const payTotal =
    school.pay1 + school.pay2 + school.pay3 + school.pay4 + school.pay5;

  return (
    <div
      style={{
        flex: "0 0 auto",
        width: "min(100%, 50%)",
        background: B.card,
        borderRadius: 14,
        border: index === 0 ? "2px solid " + B.pri : "1.5px solid " + B.brd,
        boxShadow:
          index === 0 ? "0 4px 24px rgba(35,82,171,0.12)" : "0 2px 12px rgba(0,0,0,0.04)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {index > 0 ? (
        <button
          onClick={onRemove}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 2,
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.28)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          x
        </button>
      ) : null}

      <div
        style={{
          background:
            index === 0
              ? "linear-gradient(135deg, " + B.pri + ", #1a3f8a)"
              : "linear-gradient(135deg, #475569, #334155)",
          padding: "14px 16px",
        }}
      >
        <input
          value={school.name}
          onChange={(e) => setSchool({ ...school, name: e.target.value })}
          placeholder="School Name"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 7,
            padding: "7px 11px",
            width: "100%",
            boxSizing: "border-box",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            outline: "none",
          }}
        />
        {index === 0 ? (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              marginTop: 6,
              padding: "2px 10px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: 20,
              fontSize: 10,
              color: "#fff",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Our School | Pilot 360
          </div>
        ) : null}
      </div>

      <div style={{ padding: "0 14px 14px" }}>
        <SectionHeading title="Government and Agency Fees" />
        <Field label="Embassy / Visa" value={185} onChange={() => {}} suffix="USD" disabled />
        <Field label="SEVIS Fee" value={350} onChange={() => {}} suffix="USD" disabled />
        <Field label="TSA" value={230} onChange={() => {}} suffix="USD" disabled />
        <Subtotal val={costs.tsa} />
        <Field label="Knowledge Test - PPL" value={170} onChange={() => {}} suffix="USD" disabled />
        <div style={{ padding: "6px 0", borderBottom: "1px solid " + B.brd }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12.5, color: B.txt }}>Knowledge Test - IR</div>
              <div style={{ fontSize: 10.5, color: B.mut }}>Optional</div>
            </div>
            <button
              onClick={() => setSchool({ ...school, irEnabled: !school.irEnabled })}
              style={{
                padding: "3px 12px",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 700,
                background: school.irEnabled ? B.grnL : B.redL,
                color: school.irEnabled ? "#15803d" : "#b91c1c",
              }}
            >
              {school.irEnabled ? "INCLUDED" : "EXCLUDED"}
            </button>
          </div>
        </div>
        <Field label="Knowledge Test - CPL" value={170} onChange={() => {}} suffix="USD" disabled />
        <Subtotal val={costs.exams} />
        <Field label="Examiner - PPL" value={school.examinerPPL} onChange={update("examinerPPL")} suffix="USD" />
        <Field
          label="Examiner - IR"
          value={school.examinerIR}
          onChange={update("examinerIR")}
          suffix="USD"
          disabled={!school.irEnabled}
        />
        <Field label="Examiner - CPL" value={school.examinerCPL} onChange={update("examinerCPL")} suffix="USD" />
        <Subtotal val={costs.checkrides} />
        <Line label="Subtotal: Government and Agency" amount={costs.govt} bold />

        <SectionHeading title="Aviation Supplies" />
        <Field
          label="Aviation Supplies"
          value={2000}
          onChange={() => {}}
          suffix="USD"
          disabled
          sub="Jeppesen CBT, headset, flight bag, kneeboard and related items"
        />
        <Line label="Subtotal: Aviation Supplies" amount={costs.optional} bold />

        <SectionHeading title="Admin Charges" />
        <Field
          label="Admin Charges"
          value={school.adminCharges}
          onChange={update("adminCharges")}
          suffix="USD"
          disabled={index === 0}
          highlight={index > 0}
        />
        <Line label="Subtotal: Admin Charges" amount={costs.admin} bold />

        <SectionHeading title="School Training Fees" />
        <Field label="I-20 and Admission" value={school.i20Admission} onChange={update("i20Admission")} suffix="USD" />
        <Field label="Single Engine Cost per Hour" value={school.planeCostPerHr} onChange={update("planeCostPerHr")} suffix="$/hr" highlight />
        <Field label="Single Engine Hours" value={school.flightHours} onChange={update("flightHours")} suffix="hrs" highlight />
        <Subtotal val={costs.flight} />
        <Field label="Multi-Engine Cost per Hour" value={school.multiEnginePerHr} onChange={update("multiEnginePerHr")} suffix="$/hr" />
        <Field label="Multi-Engine Hours" value={school.multiEngineHours} onChange={update("multiEngineHours")} suffix="hrs" />
        <Subtotal val={costs.multi} />
        <Field label="Simulator Cost per Hour" value={school.simPerHr} onChange={update("simPerHr")} suffix="$/hr" />
        <Field label="Simulator Hours" value={school.simHours} onChange={update("simHours")} suffix="hrs" />
        <Subtotal val={costs.sim} />
        <Field label="Flight and Sim Instruction / Hour" value={school.flightSimInstrPerHr} onChange={update("flightSimInstrPerHr")} suffix="$/hr" />
        <Field label="Flight and Sim Instruction Hours" value={school.flightSimInstrHours} onChange={update("flightSimInstrHours")} suffix="hrs" highlight />
        <Subtotal val={costs.flightInstr} />
        <Field label="Ground Brief / Hour" value={school.groundBriefPerHr} onChange={update("groundBriefPerHr")} suffix="$/hr" />
        <Field label="Ground Brief Hours" value={school.groundBriefHours} onChange={update("groundBriefHours")} suffix="hrs" />
        <Subtotal val={costs.groundBrief} />
        <Line label={"Subtotal: School Training (" + costs.totalHrs + " hrs)"} amount={costs.school} bold />

        <SectionHeading title="Fuel Surcharge and Landing Fees" />
        <Field label="Fuel Surcharge / Hour" value={school.fuelSurchargePerHr} onChange={update("fuelSurchargePerHr")} suffix="$/hr" />
        <Field label="Fuel Surcharge Hours" value={school.fuelSurchargeHours} onChange={update("fuelSurchargeHours")} suffix="hrs" />
        {costs.fuel > 0 ? <Subtotal val={costs.fuel} /> : null}
        <Field label="Landing Fee / Landing" value={school.landingFeePerLanding} onChange={update("landingFeePerLanding")} suffix="$/ea" />
        <Field label="Estimated Landings" value={school.estimatedLandings} onChange={update("estimatedLandings")} suffix="x" />
        {costs.landing > 0 ? <Subtotal val={costs.landing} /> : null}

        <SectionHeading title="Insurance" />
        <Field label="AOPA Renter's Insurance" value={330} onChange={() => {}} suffix="USD" disabled />
        <Field label="Health Insurance" value={300} onChange={() => {}} suffix="USD" disabled />
        <Line label="Subtotal: Insurance" amount={costs.insurance} bold />

        <SectionHeading title="Living Expenses" />
        <Field label="Accommodation / Month" value={school.accomPerMonth} onChange={update("accomPerMonth")} suffix="$/mo" />
        <Field label="Accommodation Duration" value={school.accomMonths} onChange={update("accomMonths")} suffix="months" />
        <Field label="Food / Month" value={school.foodPerMonth} onChange={update("foodPerMonth")} suffix="$/mo" />
        <Field label="Food Duration" value={school.foodMonths} onChange={update("foodMonths")} suffix="months" />
        <Line label="Subtotal: Living Expenses" amount={costs.living} bold />

        <SectionHeading title="Additional Costs" />
        <Field label="Flight Return Ticket" value={1200} onChange={() => {}} suffix="USD" disabled />
        <Field label="Conversion" value={3250} onChange={() => {}} suffix="USD" disabled />
        <Field label="Multi Engine Rating" value={school.ex1c} onChange={update("ex1c")} suffix="USD" />
        <Field label="Flight to US - 2nd Time" value={school.ex2c} onChange={update("ex2c")} suffix="USD" />
        <Line label="Subtotal: Additional Costs" amount={costs.extras} bold />

        <SectionHeading title="Payment Schedule" />
        {["pay1", "pay2", "pay3", "pay4", "pay5"].map((key, i) => (
          <Field key={key} label={"Month " + (i + 1)} value={school[key]} onChange={update(key)} suffix="USD" />
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px 0",
            fontSize: 11,
            fontWeight: 700,
            color: Math.abs(payTotal - Math.round(costs.school)) < 2 ? "#15803d" : B.acc,
          }}
        >
          <span>Schedule Total</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {formatMoney(payTotal)}
          </span>
        </div>

        <div
          style={{
            marginTop: 14,
            background:
              index === 0
                ? "linear-gradient(135deg, " + B.pri + ", #1a3f8a)"
                : "linear-gradient(135deg, #475569, #334155)",
            borderRadius: 11,
            padding: "14px 16px",
            color: "#fff",
          }}
        >
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.7 }}>
            Total Estimated Cost
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", marginTop: 3 }}>
            {formatMoney(costs.total)}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 6, fontSize: 10.5, opacity: 0.65, flexWrap: "wrap" }}>
            <span>{costs.totalHrs + " training hrs"}</span>
            <span>{formatMoney(costs.total / (costs.totalHrs || 1)) + "/hr"}</span>
            <span>{school.priceGuaranteed ? "Guaranteed" : "Not guaranteed"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CostCalculator() {
  const [schools, setSchools] = useState([{ ...SKYDUO }, { ...BLANK }]);
  const [showComparison, setShowComparison] = useState(false);

  const costs = schools.map(calc);
  const totals = costs.map((item) => item.total);
  const cheapest = Math.min(...totals);

  const addSchool = () => {
    if (schools.length >= 4) {
      return;
    }

    setSchools([
      ...schools,
      { ...BLANK, name: "School " + String.fromCharCode(65 + schools.length) },
    ]);
  };

  const removeSchool = (index) => {
    if (index === 0) {
      return;
    }

    setSchools(schools.filter((_, currentIndex) => currentIndex !== index));
  };

  const comparisonRows = [
    { label: "Govt and Agency", key: "govt" },
    { label: "Aviation Supplies", key: "optional" },
    { label: "Admin Charges", key: "admin" },
    { label: "School Training", key: "school" },
    { label: "Fuel Surcharge", key: "fuel" },
    { label: "Landing Fees", key: "landing" },
    { label: "Insurance", key: "insurance" },
    { label: "Living Expenses", key: "living" },
    { label: "Extras", key: "extras" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: B.bg, paddingBottom: 18, marginTop: 10 }}>
      <div
        style={{
          background: "linear-gradient(135deg, " + B.pri + " 0%, #1a3f8a 50%, " + B.acc + " 100%)",
          padding: "28px 18px 22px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src={logo} alt="Pilot 360" width={180} height={70} style={{ width: 180, height: "auto", marginBottom: 8 }} />
        </div> */}
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>
          USA Flight Training Cost Calculator
        </h1>
        <p style={{ fontSize: 13, opacity: 0.82, margin: 0, maxWidth: 560, marginInline: "auto" }}>
          Transparent school-by-school comparison with training, living and extra costs.
        </p>
      </div>

      <div style={{ padding: "12px 14px 0", display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
        {["FAA Part 141", "100hr Solo/PIC", "Price Comparison", "Full Transparency"].map((item) => (
          <div
            key={item}
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: "7px 11px",
              border: "1px solid " + B.brd,
              fontSize: 11,
              fontWeight: 700,
              color: B.pri,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={{ padding: "12px 14px 6px", display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
        <button
          onClick={addSchool}
          disabled={schools.length >= 4}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border: "1.5px solid " + B.pri,
            background: "#fff",
            color: B.pri,
            fontSize: 12.5,
            fontWeight: 600,
            cursor: "pointer",
            opacity: schools.length >= 4 ? 0.4 : 1,
          }}
        >
          + Add School
        </button>
        <button
          onClick={() => setShowComparison(!showComparison)}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border: "none",
            background: B.pri,
            color: "#fff",
            fontSize: 12.5,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {showComparison ? "Hide" : "Show"} Comparison
        </button>
      </div>

      {showComparison && schools.length > 1 ? (
        <div
          style={{
            margin: "6px 14px 0",
            background: "#fff",
            borderRadius: 12,
            border: "1.5px solid " + B.pri,
            overflow: "hidden",
            boxShadow: "0 3px 16px rgba(35,82,171,0.1)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, " + B.pri + ", #1a3f8a)",
              padding: "10px 16px",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Side-by-Side Comparison
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <td style={{ padding: "7px 12px", fontWeight: 700, color: B.mut, borderBottom: "2px solid " + B.brd }}>
                    Category
                  </td>
                  {schools.map((school, index) => (
                    <td
                      key={school.name + index}
                      style={{
                        padding: "7px 12px",
                        fontWeight: 700,
                        textAlign: "right",
                        color: index === 0 ? B.pri : B.txt,
                        borderBottom: "2px solid " + B.brd,
                      }}
                    >
                      {school.name}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, rowIndex) => (
                  <tr key={row.key} style={{ background: rowIndex % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "5px 12px", color: B.txt, borderBottom: "1px solid " + B.brd }}>
                      {row.label}
                    </td>
                    {costs.map((costRow, index) => {
                      const value = costRow[row.key];
                      const minimum = Math.min(...costs.map((item) => item[row.key]));
                      const isMin = schools.length > 1 && value === minimum && value > 0;

                      return (
                        <td
                          key={row.key + index}
                          style={{
                            padding: "5px 12px",
                            textAlign: "right",
                            fontFamily: "'JetBrains Mono', monospace",
                            color: isMin ? "#15803d" : B.txt,
                            fontWeight: isMin ? 700 : 400,
                            borderBottom: "1px solid " + B.brd,
                          }}
                        >
                          {formatMoney(value)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr style={{ background: B.pri + "0d" }}>
                  <td style={{ padding: "8px 12px", fontWeight: 800, fontSize: 12.5, color: B.pri }}>
                    GRAND TOTAL
                  </td>
                  {costs.map((costRow, index) => (
                    <td
                      key={"grand-" + index}
                      style={{
                        padding: "8px 12px",
                        textAlign: "right",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        fontWeight: 800,
                        color: costRow.total === cheapest ? "#15803d" : B.txt,
                      }}
                    >
                      {formatMoney(costRow.total)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      <div style={{ display: "flex", gap: 14, padding: "14px", overflowX: "auto", alignItems: "flex-start" }}>
        {schools.map((school, index) => (
          <SchoolColumn
            key={school.name + index}
            school={school}
            setSchool={(updatedSchool) => {
              const next = schools.slice();
              next[index] = updatedSchool;
              setSchools(next);
            }}
            index={index}
            costs={costs[index]}
            onRemove={() => removeSchool(index)}
          />
        ))}
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "8px 18px 10px", textAlign: "center" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 10,
            padding: "14px 18px",
            border: "1px solid " + B.brd,
            fontSize: 10.5,
            color: B.mut,
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: B.txt }}>Disclaimer:</strong> Examiner prices are approximate and may change.
          Government fees are subject to revision. Living expenses vary by location and lifestyle. Verify pricing
          directly with the school. This calculator is for estimation purposes only.
        </div>
      </div>
    </div>
  );
}
