"use client";

import { useState } from "react";

type Candidate = {
  name: string;
  votes: number;
};

export default function VotePage({
  params,
}: {
  params: { candidate: string };
}) {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [newCandidate, setNewCandidate] = useState("");

  const addCandidate = () => {
    if (!newCandidate.trim()) return;

    if (candidates.length >= 10) {
      alert("Maximum 10 candidates allowed.");
      return;
    }

    setCandidates([
      ...candidates,
      {
        name: newCandidate,
        votes: 0,
      },
    ]);

    setNewCandidate("");
  };

  const voteForCandidate = (index: number) => {
    setCandidates(
      candidates.map((candidate, i) =>
        i === index
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
  };

  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);

  return (
    <main className="min-h-screen bg-white px-8 py-20 text-black">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.35em] text-black/50">
          Voting Page
        </p>

        <h1 className="mt-6 text-6xl font-black tracking-tight">
          {params.candidate}
        </h1>

        <p className="mt-8 text-2xl text-black/70">
          Add 5 to 10 candidates, then let people vote.
        </p>

        <div className="mt-16 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Enter candidate, e.g. Tesla, BMW, Porsche..."
            value={newCandidate}
            onChange={(e) => setNewCandidate(e.target.value)}
            className="flex-1 border border-black px-6 py-5 text-xl outline-none"
          />

          <button
            onClick={addCandidate}
            className="border border-black bg-black px-10 py-5 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Add Candidate
          </button>
        </div>

        <p className="mt-4 text-sm text-black/50">
          {candidates.length}/10 candidates added. Minimum recommended: 5.
        </p>

        <div className="mt-16 space-y-4">
          {sortedCandidates.map((candidate, index) => (
            <div
              key={candidate.name}
              className="flex items-center justify-between border border-black p-6"
            >
              <div>
                <p className="text-sm uppercase tracking-widest text-black/40">
                  Rank #{index + 1}
                </p>

                <h2 className="mt-2 text-3xl font-bold">{candidate.name}</h2>

                <p className="mt-2 text-black/60">
                  Votes: {candidate.votes}
                </p>
              </div>

              <button
                onClick={() =>
                  voteForCandidate(
                    candidates.findIndex((c) => c.name === candidate.name)
                  )
                }
                className="border border-black px-6 py-3 font-semibold transition hover:bg-black hover:text-white"
              >
                Vote
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}