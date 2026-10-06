import BarberData from "@/components/BarberData";
import ReservationForms from "@/components/ReservationForms";


export default function MakeReservarion() {
  return (
    <main className="min-h-screen text-white flex flex-col items-center mt-5 px-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
        Make Your Reservation
      </h1>
      <ReservationForms children={<BarberData/>}/>
    </main>
  );
}
