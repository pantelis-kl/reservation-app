import {
  Mail,
  CalendarCheck,
  User,
  Phone,
  MessageSquare,
  Trash2,
} from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading() {
  return (
    <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
      <div className="w-full max-w-md mx-auto my-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Reservation Details
            </span>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
            Confirmed
          </span>
        </div>
        <div className="mb-4">
          <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            Guest Name
          </label>
          <div className="flex items-center gap-2 mt-1">
            <User className="w-4 h-4 text-slate-400 shrink-0" />
            <h3 className="w-40 text-lg">
              <Skeleton />
            </h3>
          </div>
        </div>
        <div className="grid gap-3 pt-1 border-t border-slate-100 dark:border-slate-800/60">
          <div>
            <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
              Email Address
            </label>
            <div className="flex items-center gap-2 mt-1">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="w-48 text-sm">
                <Skeleton />
              </div>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
              Phone Number
            </label>
            <div className="flex items-center gap-2 mt-1">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <div className="w-32 text-sm">
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            Special Instructions
          </label>
          <div className="flex items-start gap-2 mt-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p className="w-full text-sm leading-relaxed">
              <Skeleton />
            </p>
          </div>
        </div>
        <div className="relative mt-4 flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-800">
            <Skeleton circle width={64} height={64} className="block p-3" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="w-28 text-base">
              <Skeleton />
            </h3>
            <p className="mt-0.5 w-40 text-xs">
              <Skeleton />
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400"
        >
          <Trash2 className="h-4 w-4" />
          <span>Delete Reservation</span>
        </button>
      </div>
    </SkeletonTheme>
  );
}
