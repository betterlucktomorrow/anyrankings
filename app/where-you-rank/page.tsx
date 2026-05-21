export default function WhereYouRankPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-20 text-black">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.35em] text-black/50">
          Compare Yourself
        </p>

        <h1 className="mt-6 text-6xl font-black tracking-tight">
          See Where You Rank
        </h1>

        <div className="mt-16">
          <a
            href="/where-you-rank/salary"
            className="block border border-black p-8 text-3xl font-bold transition hover:bg-black hover:text-white"
          >
            What&apos;s your salary?
          </a>
        </div>
      </div>
    </main>
  );
}