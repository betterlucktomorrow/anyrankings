"use client";

import { useState } from "react";

export default function CreatePage() {

  const [rankings, setRankings] = useState<string[]>([]);

  const [newRanking, setNewRanking] = useState("");

  const addRanking = () => {
    if (!newRanking.trim()) return;

    setRankings([...rankings, newRanking]);
    setNewRanking("");
  };

  return (
    <main className="min-h-screen bg-white px-8 py-20 text-black">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm uppercase tracking-[0.35em] text-black/50">
          Create
        </p>

        <h1 className="mt-6 text-6xl font-black tracking-tight">
          Create Your Own Rankings
        </h1>

        <p className="mt-8 max-w-3xl text-2xl leading-10 text-black/70">
          Build community-driven rankings and let people vote in real time.
        </p>

        {/* INPUT */}
        <div className="mt-16 flex flex-col gap-4 md:flex-row">

          <input
            type="text"
            placeholder="Enter a ranking topic..."
            value={newRanking}
            onChange={(e) => setNewRanking(e.target.value)}
            className="flex-1 border border-black px-6 py-5 text-xl outline-none"
          />

          <button
            onClick={addRanking}
            className="border border-black bg-black px-10 py-5 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Create Ranking
          </button>

        </div>

        {/* RANKING CARDS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {rankings.map((ranking, index) => (

            <a
                key={index}
                href={`/rankings/${ranking}`}
                className="border border-black p-8 transition hover:bg-black hover:text-white block"
            >
              
            

              <h2 className="text-3xl font-bold">
                {ranking}
              </h2>

              <p className="mt-4 text-black/60 hover:text-white">
                Community-powered ranking topic.
              </p>

            </a>

          ))}

        </div>

      </div>

    </main>
  );
}