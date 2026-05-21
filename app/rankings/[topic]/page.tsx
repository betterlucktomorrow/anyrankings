"use client";

import { use, useMemo, useState } from "react";

const tiers = [
  { name: "S-Class", color: "bg-red-400", score: 6 },
  { name: "A-Class", color: "bg-orange-300", score: 5 },
  { name: "B-Class", color: "bg-yellow-300", score: 4 },
  { name: "C-Class", color: "bg-lime-300", score: 3 },
  { name: "D-Class", color: "bg-green-300", score: 2 },
  { name: "Bad", color: "bg-cyan-300", score: 1 },
];

const categoryItems: Record<string, string[]> = {
  movies: [
    "The Dark Knight",
    "Inception",
    "Interstellar",
    "Parasite",
    "Pulp Fiction",
    "The Godfather",
    "Forrest Gump",
    "The Shawshank Redemption",
    "Avengers: Endgame",
  ],

  anime: [
    "Naruto",
    "One Piece",
    "Demon Slayer",
    "Attack on Titan",
    "Jujutsu Kaisen",
    "Death Note",
    "Dragon Ball",
    "Bleach",
    "My Hero Academia",
    "Spy x Family",
  ],
};

export default function RankingPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = use(params);

  const starterItems = categoryItems[topic] || categoryItems.anime;

  const pageTitle =
    topic === "movies"
      ? "Movies Tier Ranking"
      : topic === "anime"
      ? "Anime Tier Ranking"
      : "Tier Ranking";

  const [items, setItems] = useState(starterItems);




  const [tierItems, setTierItems] = useState<Record<string, string[]>>({
    "S-Class": [],
    "A-Class": [],
    "B-Class": [],
    "C-Class": [],
    "D-Class": [],
    Bad: [],
  });

  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDrop = (tierName: string) => {
    if (!draggedItem) return;

    setItems((prev) => prev.filter((item) => item !== draggedItem));

    setTierItems((prev) => {
      const cleaned = Object.fromEntries(
        Object.entries(prev).map(([tier, tierList]) => [
          tier,
          tierList.filter((item) => item !== draggedItem),
        ])
      ) as Record<string, string[]>;

      return {
        ...cleaned,
        [tierName]: [...cleaned[tierName], draggedItem],
      };
    });

    setDraggedItem(null);
  };

  const results = useMemo(() => {
    return Object.entries(tierItems)
      .flatMap(([tierName, tierList]) => {
        const tier = tiers.find((t) => t.name === tierName);

        return tierList.map((item) => ({
          item,
          tier: tierName,
          score: tier?.score ?? 0,
        }));
      })
      .sort((a, b) => b.score - a.score);
  }, [tierItems]);

  return (
    <main className="min-h-screen bg-white px-8 py-8 text-black">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-14 items-end gap-2">
              <div className="h-9 w-3 rounded bg-[#071B5F]" />
              <div className="h-12 w-3 rounded bg-[#E11D2E]" />
              <div className="h-8 w-3 rounded bg-[#02A9E9]" />
            </div>
            <span className="text-3xl font-black">AnyRankings</span>
          </a>

          <a
            href="/"
            className="border border-black px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
          >
            Home
          </a>
        </header>

        <h1 className="mb-8 text-5xl font-black">{pageTitle}</h1>

        <div className="border border-black">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(tier.name)}
              className="flex min-h-28 border-b border-black last:border-b-0"
            >
              <div
                className={`flex w-36 items-center justify-center text-center text-lg font-bold text-black ${tier.color}`}
              >
                {tier.name}
              </div>

              <div className="flex flex-1 flex-wrap gap-3 bg-[white] p-4">
                {tierItems[tier.name].map((item) => (
                  <div
                    key={item}
                    draggable
                    onDragStart={() => setDraggedItem(item)}
                    className="cursor-grab border border-black bg-white px-5 py-4 font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold">Drag Items</h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {items.map((item) => (
            <div
              key={item}
              draggable
              onDragStart={() => setDraggedItem(item)}
              className="cursor-grab border border-black bg-white px-5 py-4 font-semibold transition hover:bg-black hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>

        <section className="mt-16 border-t border-white/20 pt-10">
          <h2 className="text-4xl font-black">Community Ranking Result</h2>

          <p className="mt-3 text-black/60">
            Current result based on submitted tier placements.
          </p>

          <div className="mt-8 space-y-3">
            {results.length === 0 ? (
              <p className="text-black/50">
                Drag items into tiers to generate ranking results.
              </p>
            ) : (
              results.map((result, index) => (
                <div
                  key={result.item}
                  className="flex items-center justify-between border border-black bg-white p-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-3xl font-black">
                      #{index + 1}
                    </span>
                    <span className="text-2xl font-bold">
                      {result.item}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-sm uppercase tracking-widest text-black/40">
                      Tier
                    </p>
                    <p className="text-xl font-bold">{result.tier}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}