import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingBarbers() {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <h2 className="self-center text-[18px] font-bold text-white">
        Choose your Barber
      </h2>
      <div className="flex flex-row gap-x-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
            <div className="relative flex flex-col items-center justify-center cursor-pointer w-44 overflow-hidden rounded-2xl border p-4 text-left backdrop-blur-xl border-white/10 bg-zinc-900/7">
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-full border-2 border-zinc-700 transition-all duration-300 group-hover:border-amber-500/70 group-hover:shadow-lg group-hover:shadow-amber-500/20">
                  <div className="h-24 w-24 overflow-hidden">
                    <Skeleton circle className="w-full h-full p-3" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 w-25 text-lg">
                    <Skeleton/>
               </h3>
               <p className="mt-1 text-center w-40 text-zinc-400">
                    <Skeleton/>
                </p>
                <div className="mx-auto mt-4 h-px w-10 bg-zinc-700 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-500" />
            </div>
          </SkeletonTheme>
        ))}
      </div>
    </div>
  );
}
