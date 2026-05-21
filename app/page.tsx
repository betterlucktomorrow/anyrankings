export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-7">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-16 items-end gap-2">
              <div className="h-10 w-4 rounded bg-[#071B5F]" />
              <div className="h-14 w-4 rounded bg-[#E11D2E]" />
              <div className="h-9 w-4 rounded bg-[#02A9E9]" />
            </div>

            <div className="text-3xl font-bold tracking-tight">
              AnyRankings
            </div>
          </div>

          <nav className="hidden items-center gap-12 text-xl md:flex">
            <a href="#about">About</a>
            <a href="#how">How it works</a>
            <a href="#launch">Launch</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-10 text-xl uppercase tracking-[0.35em]">
            Coming Soon
          </p>

          <h1 className="max-w-2xl text-7xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Vote.
            <br />
            Rank.
            <br />
            Discover.
          </h1>

          <p className="mt-10 max-w-2xl text-2xl leading-10 text-black/70">
            Community-driven rankings powered by real votes across
            entertainment, products, food, places, tech, and more.
          </p>

          <div className="mt-12 flex gap-6">
            <a
              href="#rankings"
              className="border border-black bg-black px-10 py-5 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Explore Rankings
            </a>

            <a
              href="/create"
              className="border border-black px-10 py-5 text-lg font-semibold transition hover:bg-black hover:text-white"
            >
              Create Your Own Rankings
            </a>

            <a
              href="/where-you-rank"
              className="mt-6 inline-flex border border-black px-10 py-5 text-lg font-semibold transition hover:bg-black hover:text-white"
            >
              See Where You Rank
            </a>
          </div>
        </div>

        <div className="border border-black p-12">
          <div className="mb-10 flex justify-between text-xl uppercase tracking-widest">
            <span>Vote</span>
            <span>Rank</span>
            <span>Discover</span>
          </div>

          <div className="relative mx-auto mb-12 flex h-64 max-w-lg items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full border border-black/10" />
            <div className="absolute h-44 w-44 rounded-full border border-black/20" />
            <div className="absolute h-24 w-24 rounded-full border border-black" />

            <div className="absolute left-6 text-xl font-medium">VOTES</div>
            <div className="absolute right-0 text-xl font-medium leading-6">
              LIVE
              <br />
              RANKINGS
            </div>

            <div className="absolute w-full border-t border-dashed border-black" />

            <div className="z-10 text-4xl font-black">#</div>
          </div>

          <div className="space-y-8">
            {[
              ["01", "Movies", "text-black"],
              ["02", "Food", "text-black"],
              ["03", "Places", "text-black"],
              ["04", "Products", "text-black/40"],
            ].map(([rank, label, color]) => (
              <div
                key={rank}
                className="flex items-center justify-between border-b border-black pb-6"
              >
                <span className={`text-4xl font-black ${color}`}>{rank}</span>
                <span className={`text-2xl ${color}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rankings" className="border-t border-black/10 bg-white px-8 py-20 text-black">
  <div className="mx-auto max-w-7xl">

    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-black/50">
      Explore
    </p>

    <h2 className="text-5xl font-black tracking-tight">
      Featured Categories
    </h2>

    <p className="mt-6 max-w-3xl text-xl leading-8 text-black/70">
      Browse popular ranking categories and see what the community is voting for.
    </p>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {[
        { name: "Movies", emoji: "🎬" },
        { name: "Anime", emoji: "🌸" },
        { name: "Fast Food", emoji: "🍔" },
        { name: "Video Games", emoji: "🎮" },
        { name: "MLB", emoji: "⚾" },
        { name: "Kpop", emoji: "🎤" },
      ].map((category) => (

        <a
          key={category.name}
          href={`/rankings/${category.name}`}
          className="group overflow-hidden rounded border border-black/20 bg-white transition hover:-translate-y-1 hover:border-black"
        >

          <div className="flex h-40 items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 text-6xl">
            {category.emoji}
          </div>

          <div className="border-t border-black/10 bg-white px-5 py-4">

            <h3 className="text-center text-2xl font-bold text-black">
              {category.name}
            </h3>

          </div>

        </a>

      ))}

    </div>

  </div>
</section>





    </main>
  );
}