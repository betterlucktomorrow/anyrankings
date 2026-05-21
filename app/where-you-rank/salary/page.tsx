"use client";

import { useState } from "react";

const salaryOptions = [
  {
    label: "$50,000 - $100,000",
    result: "You are roughly in the lower-to-middle income range among high earners.",
    percentile: "Around bottom 50% of this group",
  },
  {
    label: "$100,001 - $250,000",
    result: "You are above many earners and moving into a strong income range.",
    percentile: "Around top 40%",
  },
  {
    label: "$250,001 - $500,000",
    result: "You are in a high-income range.",
    percentile: "Around top 15%",
  },
  {
    label: "Over $500,000",
    result: "You are in a very high-income range.",
    percentile: "Around top 5%",
  },
];

export default function SalaryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white px-8 py-20 text-black">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm font-semibold underline">
          ← Back Home
        </a>

        <p className="mt-12 text-sm uppercase tracking-[0.35em] text-black/50">
          Salary Ranking
        </p>

        <h1 className="mt-6 text-6xl font-black tracking-tight">
          What&apos;s your salary?
        </h1>

        <div className="mt-12 grid gap-4">
          {salaryOptions.map((option, index) => (
            <button
              key={option.label}
              onClick={() => setSelected(index)}
              className="border border-black p-6 text-left text-2xl font-bold transition hover:bg-black hover:text-white"
            >
              {index + 1}. {option.label}
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="mt-16 border border-black p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-black/50">
              Your Result
            </p>

            <h2 className="mt-4 text-5xl font-black">
              {salaryOptions[selected].percentile}
            </h2>

            <p className="mt-6 text-2xl leading-10 text-black/70">
              {salaryOptions[selected].result}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}