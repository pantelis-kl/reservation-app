import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import Image from "next/image";

const BarberData=async()=>{
    await new Promise(resolve=>setTimeout(resolve,2000))
    const supabase=await createClient();
    const {data:barbers,error:readError}=await supabase.from("barbers").select("*");
    if(readError)
        console.error(readError.message);

    return(
        <div>
            {barbers?.map(b=>(
            <Image
            alt="Alex profile image"
            width={30}
            height={25}
            key={b.id}
            src={b.profile_path}
            />
          ))}
        </div>
    )

}

export default function ReservationForms() {
    return(
        <div className="p-6 rounded-2xl flex flex-col gap-1 bg-zinc-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
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
          <span className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="mt-6 rounded-xl w-80 cursor-pointer bg-amber-500 px-8 py-3 text-lg font-semibold text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/30 active:scale-95"
            >
              Submit
            </button>
          </span>
        </div>
    )
}