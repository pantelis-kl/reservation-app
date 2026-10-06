import { MessageSquare, Trash2 } from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingReservations() {
  return (
    <div className="flex flex-col w-full gap-5 justify-center items-center">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-xl shadow-lg shadow-black/20"
          >
            <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Customer
            </h4>
            <h3 className="mt-2 w-50 text-xl">
              <Skeleton />
            </h3>
            <div className="mt-5 h-px w-full bg-white/5" />
            <h4 className="mt-4 text-sm font-medium text-zinc-500">
              Reservation
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Email
                </p>
                <h3 className="w-50 text-sm">
                  <Skeleton />
                </h3>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Phone
                </p>
                <h3 className="w-30 text-sm">
                  <Skeleton />
                </h3>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  Special Instructions
                </label>
                <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
                <div className="flex items-start gap-2 mt-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="text-sm w-30">
                    <Skeleton />
                  </p>
                </div>
                </SkeletonTheme>
              </div>
              <div className="mt-5 flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-950/50 p-3">
                <div className="overflow-hidden rounded-full border border-zinc-700">
                    <Skeleton circle width={48} height={48} className="block p-3" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Barber
                  </p>
                  <h3 className="text-sm w-20">
                    <Skeleton />
                  </h3>
                </div>
              </div>
            </div>
            <button className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400">
              <Trash2 className="h-4 w-4" />
              <span>Delete Reservation</span>
            </button>
          </div>
        ))}
      </SkeletonTheme>
    </div>
  );
}
