import barberLogo from '@/public/barber-removebg-preview.png'
import Image from 'next/image'
import Navbar from './Navbar'
export default function Header(){
    return(
        <div className="w-full flex flex-row items-center justify-between px-6 py-3 bg-zinc-950/95 backdrop-blur-3xl backdrop-saturate-150 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] sticky top-0 z-50">
  <Image
    src={barberLogo}
    alt="Barber logo"
    className="w-25 h-25 object-contain"
    priority
  />
  <Navbar />
  <div className="w-16" />
</div>
    )
}