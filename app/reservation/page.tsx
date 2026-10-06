import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import DeleteReservations from "@/components/DeleteReservations";
import LoadingReservations from "@/components/LoadingReservations";

const ReservationList = async () => {
  const supabase = await createClient();
  const { data: reservations } = await supabase
    .from("reservations")
    .select("*");
  const { data: barbers } = await supabase.from("barbers").select("*").order("created_at", { ascending: true });

  return (
    <div className="flex flex-col w-full gap-5 justify-center items-center">
      {reservations?.map((r) => (
        <Link
        href={`/reservation/${r.id}`}
        key={r.id}
        className="w-full flex items-center justify-center flex-col"
        >
        <div
          className="group flex flex-col w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-zinc-800/80 hover:shadow-xl hover:shadow-amber-500/10"
        >
          <h4 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Customer
          </h4>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400">
            {r.first_name} {r.last_name}
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
              <h3 className="text-zinc-200">{r.email}</h3>
            </div>
            {r.phone && (
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Phone
                </p>
                <h3 className="text-zinc-200">{r.phone}</h3>
              </div>
            )}
            {r.comment &&(
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                    Special Instructions
                  </label>
                  <div className="flex items-start gap-2 mt-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {r.comment}
                    </p>
                  </div>
                </div>
            )}
            {barbers?.map((b) =>
              b.id === r.barber_id ? (
                <div
                  key={b.id}
                  className="mt-5 flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-950/50 p-3"
                >
                  <div className="overflow-hidden rounded-full border border-zinc-700">
                    <Image
                      src={b.profile_path}
                      alt={`${b.name} profile image`}
                      width={50}
                      height={50}
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Barber
                    </p>
                    <h3 className="text-sm font-semibold text-white">
                      {b.name}
                    </h3>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <DeleteReservations id={r.id}/>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default function Reservations() {
  return (
    <div className="w-full mt-10 flex flex-col gap-5">
        <h1 className="self-center text-white font-bold text-[3rem]">All Reservations</h1>
      <Suspense fallback={<LoadingReservations/>}>
        <ReservationList />
      </Suspense>
    </div>
  );
}
