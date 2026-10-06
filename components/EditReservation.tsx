import { updateReservation } from "@/actions/actions";
import {Edit3,User,Mail,Phone} from "lucide-react"
import EditBarbers from "./EditBarbers";
import { Suspense } from "react";
import EditButton from "./EditButton";

type ReservationProps={
    id:string;
    first_name:string;
    last_name:string;
    email:string;
    phone:string | null;
    comment:string | null;
    barber_id:string;
}

type BarberProps={
    id:string;
    name:string;
    profile_path:string;
    trait:string;
}

export default function EditReservation({reservation,barber}:{reservation:ReservationProps,barber:BarberProps}){

    return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-all">
      <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
          <Edit3 className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Edit Reservation
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Update guest details below
          </p>
        </div>
      </div>
      <form className="space-y-4"
      action={updateReservation}
      >
        <input type="hidden" name="id" value={reservation.id} />
        <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="first_name"
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
          >
            First Name
          </label>
          <div className="relative flex items-center">
            <User className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              name="first_name"
              id="first_name"
              defaultValue={reservation.first_name}
              placeholder="Enter first name"
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 transition-all duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
            <label htmlFor="last_name"
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
            >
                Last Name
            </label>
            <div className="relative flex items-center">
                <User className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
              type="text"
              name="last_name"
              id="last_name"
              defaultValue={reservation.last_name}
              placeholder="Enter last name"
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 transition-all duration-200"
            />
            </div>
        </div>
        </div>
        <div className="flex flex-col gap-1.5">
            <label
             htmlFor="email"
             className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
             >
                Email
             </label>
             <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none"/>
                <input type="email"
                id="email"
                defaultValue={reservation.email}
                name="email"
                placeholder="Enter email"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 transition-all duration-200"
                />
             </div>
         </div>
         {reservation.phone && (
            <div className="flex flex-col gap-1.5">
            <label
             htmlFor="phone"
             className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide"
             >
                Phone
             </label>
             <div className="relative flex items-center">
                <Phone className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none"/>
                <input type="tel"
                id="phone"
                defaultValue={reservation.phone}
                name="phone"
                placeholder="Enter phone"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-100 dark:focus:bg-slate-900 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 transition-all duration-200"
                />
             </div>
         </div>
         )}
         <Suspense fallback={<p>loading</p>}>
           <EditBarbers barberId={reservation.barber_id}/>
         </Suspense>
        <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="reset"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <EditButton/>
        </div>
      </form>
    </div>
  );
}