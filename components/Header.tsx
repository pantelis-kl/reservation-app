import barberLogo from "@/public/barber-removebg-preview.png";
import Image from "next/image";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <div
      className="w-full flex items-center justify-between
                px-6 py-3
                bg-zinc-950/95 backdrop-blur-xl
                border-b border-zinc-800/80
                shadow-lg"
    >
      <Image
        src={barberLogo}
        alt="Barber logo"
        className="w-25 h-25 object-contain"
        priority
      />
      <Navbar />
      <div className="w-16" />
    </div>
  );
}
