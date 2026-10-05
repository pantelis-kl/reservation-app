"use client"
import { useReservationContext } from "@/AppContext"

export default function SubmitButton(){
    const reservationContext = useReservationContext();
    const setSubmitted = reservationContext?.setSubmitted;

    return(
        <span className="w-full flex items-center justify-center">
            <button
              type="submit"
              onClick={() => setSubmitted?.(true)}
              className="mt-6 rounded-xl w-80 cursor-pointer bg-amber-500 px-8 py-3 text-lg font-semibold text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/30 active:scale-95"
            >
              Submit
            </button>
          </span>
    )
}