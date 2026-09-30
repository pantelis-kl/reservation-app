"use client"
import Image from "next/image"
import { useState } from "react";

type Barber = {
  id: string;
  name: string;
  trait: string;
  profile_path: string;
};

export default function BarberSelector({barbers}:{barbers:Barber[]}){

    const [active,setActive]=useState<number | null>(null);
    const [barberId,setBarberId]=useState<string | null>(null)

    const setActiveButton=(index:number)=>{
        setActive(index)
    }

    return(
        <div className="flex flex-col gap-y-1 w-full">
            <input type="hidden" name="barber_id" value={barberId??""} />
                  <h2 className="self-center text-[18px] font-bold text-white">Choose your Barber</h2>
                  <div className="flex flex-row gap-x-10">
                    {barbers?.map((b,index) => (
                      <div key={b.id}>
                        <button
                          type="button"
                         onClick={()=>{
                            setActiveButton(index)
                            setBarberId(b.id);
                         }}
                         className={`group relative cursor-pointer w-44 overflow-hidden rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800/80 hover:shadow-xl hover:shadow-amber-500/10 ${active === index ? "border-amber-500 bg-zinc-800/80 shadow-xl shadow-amber-500/10" : "border-white/10 bg-zinc-900/70"}`}
                        >
                          <div className="flex justify-center">
                            <div className="overflow-hidden rounded-full border-2 border-zinc-700 transition-all duration-300 group-hover:border-amber-500/70 group-hover:shadow-lg group-hover:shadow-amber-500/20">
                              <Image
                                alt="Alex profile image"
                                width={100}
                                height={100}
                                src={b.profile_path}
                                className="h-24 w-24 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </div>
            
                          <h3 className="mt-4 text-center text-lg font-semibold text-white transition-colors duration-300 group-hover:text-amber-400">
                            {b.name}
                          </h3>
            
                          <p className="mt-1 text-center text-sm text-zinc-400">
                            {b.trait}
                          </p>
            
                          <div className="mx-auto mt-4 h-px w-10 bg-zinc-700 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
    )
}