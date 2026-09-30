
import Link from "next/link";

export default function ReservationCompleted() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-white">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-900/70 p-8 text-center backdrop-blur-2xl shadow-2xl shadow-black/30">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
          <svg
            className="h-10 w-10 text-amber-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          Reservation Confirmed
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Your chair is waiting.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-400">
          Your reservation has been successfully completed. We look forward
          to seeing you at the barbershop.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Back to Home
          </Link>

          <Link
            href="/make-res"
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800"
          >
            Make Another Reservation
          </Link>
        </div>
      </div>
    </main>
  );
}