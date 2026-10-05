
import { Suspense } from "react";
import BarberData from "./BarberData";
import ReservationContext from "@/AppContext";
import SubmitButton from "./SubmitButton";

export default function ReservationForms() {
    return(
        <div className="p-6 rounded-2xl flex flex-col gap-3 bg-zinc-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="flex flex-row items-center gap-20">
            <div className="flex flex-col w-full gap-y-1">
              <label
                htmlFor="first_name"
                className="w-28 text-sm font-medium text-zinc-300"
              >
                First Name
              </label>

              <input
                type="text"
                id="first_name"
                required
                placeholder="John"
                name="first_name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-lg text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50"
              />
            </div>

            <div className="flex flex-col w-full gap-y-1">
              <label
                htmlFor="last_name"
                className="w-28 text-sm font-medium text-zinc-300"
              >
                Last Name
              </label>

              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                placeholder="Doe"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-lg text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <label
              htmlFor="email"
              className="w-28 text-sm font-medium text-zinc-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-lg text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50"
            />
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-zinc-300 w-full"
            >
              Your Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9+\s()-]{7,15}"
              placeholder="+30 690 1234567"
              className="w-100 rounded-xl border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-lg text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50"
            />
          </div>
          <Suspense fallback={<p>loading...</p>}>
             <BarberData/>
          </Suspense>
          <div className="flex flex-col w-full gap-y-1">
            <label
              htmlFor="comments"
              className="text-sm font-medium w-full text-zinc-300"
            >
              Comments (optional)
            </label>
            <textarea
              className="w-100 h-30 rounded-xl resize-none border border-zinc-700 bg-zinc-900/70 px-1 text-lg text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50"
              id="comments"
              name="comment"
            ></textarea>
          </div>
          <ReservationContext>
              <SubmitButton/>
          </ReservationContext>
        </div>
    )
}