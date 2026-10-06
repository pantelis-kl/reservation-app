"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type BarberSelectorType = {
  id: string;
  name: string;
  profile_path: string;
  trait: string;
};

export default function EditBarbersSelector({
  barbers,
  barberId,
}: {
  barbers: BarberSelectorType[] | null;
  barberId: string;
}) {
  const [active, setActive] = useState<string>(barberId);
  const [selectedId, setSelectedId] = useState(barberId);

  const setActiveButton = (id: string) => {
    setActive(id);
  };

  return (
    <div className="flex flex-col gap-y-1 w-full">
      <h2 className="self-center text-[18px] font-bold text-white">Barbers</h2>
      <input type="hidden" name="barber_id" value={selectedId}/>
      <div className="flex flex-row gap-x-5 pb-2 overflow-x-auto no-scrollbar">
        {barbers?.map((barber) => {
          const isSelected = active === barber.id;
          return (
            <div key={barber.id}>
              <button
                type="button"
                onClick={() => {
                  setActiveButton(barber.id);
                  setSelectedId(barber.id);
                }}
                className={`group relative cursor-pointer w-35 overflow-hidden rounded-2xl border p-3 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800/80 hover:shadow-xl hover:shadow-amber-500/10 ${
                  isSelected
                    ? "border-amber-500 dark:bg-indigo-950/50 shadow-xl shadow-amber-500/10"
                    : "border-white/10 dark:bg-indigo-950/50"
                }`}
              >
                {isSelected && (
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-zinc-950">
                    <Check className="h-3 w-3 stroke-3" />
                  </div>
                )}
                <div className="flex justify-center">
                  <div
                    className={`overflow-hidden rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-amber-500 shadow-lg shadow-amber-500/20"
                        : "border-zinc-700 group-hover:border-amber-500/70 group-hover:shadow-lg group-hover:shadow-amber-500/20"
                    }`}
                  >
                    <Image
                      alt="Barber profile image"
                      width={80}
                      height={80}
                      src={barber.profile_path}
                      className="h-20 w-20 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3
                  className={`mt-4 text-center text-lg font-semibold truncate transition-colors duration-300 ${
                    isSelected
                      ? "text-amber-400"
                      : "text-white group-hover:text-amber-400"
                  }`}
                >
                  {barber.name}
                </h3>
                {barber.trait && (
                  <p className="mt-1 text-center text-sm text-zinc-400 truncate">
                    {barber.trait}
                  </p>
                )}
                <div
                  className={`mx-auto mt-4 h-px transition-all duration-300 ${
                    isSelected
                      ? "w-16 bg-amber-500"
                      : "w-10 bg-zinc-700 group-hover:w-16 group-hover:bg-amber-500"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
