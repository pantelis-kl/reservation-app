import { createReservation } from "@/actions/actions";
import ReservationForms from "@/components/ReservationForms";


export default function MakeReservarion() {
  return (
    <main className="min-h-screen text-white flex flex-col items-center mt-5 px-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
        Make Your Reservation
      </h1>

      <form className="mt-10 w-full max-w-3xl" action={createReservation}>
          <ReservationForms/>
      </form>
    </main>
  );
}
