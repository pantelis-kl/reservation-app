
import { deleteReservation } from "@/actions/actions";
import { Trash2 } from "lucide-react";

export default function DeleteReservation({id}:{id:string}) {
  return (
    <form
    action={deleteReservation}
    >
    <input type="hidden" name="id" value={id}/>
    <button
      type="submit"
      className="group relative mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
    >
      <Trash2 className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
      <span>Delete Reservation</span>
    </button>
    </form>
  );
}
