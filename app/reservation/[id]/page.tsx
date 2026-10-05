import DeleteReservation from "@/components/DeleteReservation";
import EditReservation from "@/components/EditReservation";
import { createClient } from "@/utils/supabase/server";
import {
  Mail,
  CalendarCheck,
  User,
  Phone,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

type ReservationDetailProps = {
  params: Promise<{ id: string }>;
};

export default async function ReservationDetails({
  params,
}: ReservationDetailProps) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: reservation } = await supabase
    .from("reservations")
    .select("*")
    .eq("id", id)
    .single();
  const { data: barber } = await supabase
    .from("barbers")
    .select("*")
    .eq("id", reservation.barber_id)
    .single();

  return (
    <>
    <div className="w-full max-w-md mx-auto my-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 dark:border-slate-800 dark:bg-slate-900">
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
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
            {reservation.first_name} {reservation.last_name}
          </h3>
        </div>
      </div>
      <div>
        <div className="grid gap-3 pt-1 border-t border-slate-100 dark:border-slate-800/60">
          <div>
            <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
              Email Address
            </label>
            <div className="flex items-center gap-2 mt-1">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <a
                href={`mailto:${reservation.email}`}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors truncate underline-offset-4 hover:underline"
              >
                {reservation.email}
              </a>
            </div>
          </div>
          {reservation.phone && (
            <div>
              <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                Phone Number
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`tel:${reservation.phone}`}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors truncate"
                >
                  {reservation.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {reservation.comment && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <label className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
            Special Instructions
          </label>
          <div className="flex items-start gap-2 mt-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {reservation.comment}
            </p>
          </div>
        </div>
      )}
      <div className="group relative mt-4 flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 backdrop-blur-sm">
        <div className="relative shrink-0">
          <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-slate-800">
            <Image
              src={barber.profile_path}
              alt={
                barber.name
                  ? `${barber.name}'s profile picture`
                  : "Barber image"
              }
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-white">
            {barber.name}
          </h3>
          <p className="mt-0.5 truncate text-xs font-medium text-slate-400">
            {barber.trait}
          </p>
        </div>
      </div>
      <DeleteReservation id={reservation.id}/>
    </div>
    <EditReservation reservation={reservation} barber={barber}/>
    </>
  );
}
