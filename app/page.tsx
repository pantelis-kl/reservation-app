
const services = [
  {
    name: "Classic Haircut",
    description: "Precision cut with styling and finishing.",
    price: "$25",
  },
  {
    name: "Skin Fade",
    description: "Clean fade with detailed blending.",
    price: "$30",
  },
  {
    name: "Beard Trim",
    description: "Shape, trim and hot towel finish.",
    price: "$18",
  },
  {
    name: "Hair & Beard",
    description: "Full haircut and beard styling.",
    price: "$40",
  },
];

const barbers = [
  {
    name: "Marcus Reed",
    role: "Master Barber",
  },
  {
    name: "Daniel Carter",
    role: "Senior Barber",
  },
  {
    name: "Alex Morgan",
    role: "Barber",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative min-h-162.5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/barbershop.jpg')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-amber-400">
            Premium Barber Studio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Sharp cuts.
            <br />
            <span className="text-amber-400">Sharper style.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-zinc-300 text-lg">
            Expert grooming, precision cuts and timeless style. Step into the
            chair and leave looking your best.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/make-res"
              className="rounded-xl bg-amber-500 px-7 py-3
                         font-semibold text-black
                         transition hover:bg-amber-400"
            >
              Book an Appointment
            </a>

            <a
              href="#services"
              className="rounded-xl border border-zinc-600
                         bg-black/30 px-7 py-3
                         font-semibold backdrop-blur
                         transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              What we offer
            </p>

            <h2 className="mt-3 text-4xl font-bold">Our Services</h2>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              From classic cuts to modern fades, every service is performed with
              precision.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-2xl border border-zinc-800
                           bg-zinc-900/60 p-6
                           transition duration-300
                           hover:-translate-y-1
                           hover:border-amber-500/50"
              >
                <div
                  className="mb-8 h-10 w-10 rounded-xl
                                bg-amber-500/10
                                flex items-center justify-center
                                text-amber-400"
                >
                  ✂
                </div>

                <h3 className="text-xl font-semibold">{service.name}</h3>

                <p className="mt-3 min-h-12 text-sm text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-400">
                    {service.price}
                  </span>

                  <span className="text-sm text-zinc-500">30–45 min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-800 bg-zinc-900/40 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Since 2018
            </p>

            <h2 className="mt-3 text-4xl font-bold">More than a haircut.</h2>

            <p className="mt-6 leading-7 text-zinc-400">
              At Black & Blade, we believe a barber shop should be more than a
              place you visit every few weeks. It's a place to relax, talk, and
              leave feeling confident.
            </p>

            <p className="mt-4 leading-7 text-zinc-400">
              Our barbers combine traditional techniques with modern styles to
              create a cut that fits you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-4xl font-bold text-amber-400">8+</p>
              <p className="mt-2 text-sm text-zinc-500">Years of experience</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-4xl font-bold text-amber-400">12K+</p>
              <p className="mt-2 text-sm text-zinc-500">Haircuts completed</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-4xl font-bold text-amber-400">4.9</p>
              <p className="mt-2 text-sm text-zinc-500">Average rating</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-4xl font-bold text-amber-400">3</p>
              <p className="mt-2 text-sm text-zinc-500">Expert barbers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Meet the team
            </p>

            <h2 className="mt-3 text-4xl font-bold">Our Barbers</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {barbers.map((barber) => (
              <div
                key={barber.name}
                className="rounded-2xl border border-zinc-800
                           bg-zinc-900 p-8 text-center
                           transition hover:border-amber-500/50"
              >
                <div
                  className="mx-auto flex h-24 w-24 items-center
                                justify-center rounded-full
                                bg-zinc-800 text-3xl"
                >
                  ✂
                </div>

                <h3 className="mt-5 text-xl font-semibold">{barber.name}</h3>

                <p className="mt-1 text-sm text-amber-400">{barber.role}</p>

                <p className="mt-4 text-sm text-zinc-500">
                  Precision cuts, fades and classic grooming.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-zinc-900/50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Visit us
          </p>

          <h2 className="mt-3 text-4xl font-bold">Opening Hours</h2>

          <div className="mx-auto mt-8 max-w-md space-y-3 text-zinc-400">
            <div className="flex justify-between border-b border-zinc-800 pb-3">
              <span>Monday – Friday</span>
              <span className="text-white">09:00 – 20:00</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-3">
              <span>Saturday</span>
              <span className="text-white">09:00 – 18:00</span>
            </div>

            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="text-red-400">Closed</span>
            </div>
          </div>

          <p className="mt-8 text-zinc-500">42 King Street · Downtown</p>
        </div>
      </section>
      <section className="px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
          Ready for a fresh cut?
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Your chair is waiting.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-zinc-400">
          Choose your barber, select a service and book your appointment in less
          than a minute.
        </p>

        <a
          href="/make-res"
          className="mt-8 inline-block rounded-xl
                     bg-amber-500 px-8 py-4
                     font-semibold text-black
                     transition hover:bg-amber-400"
        >
          Make a Reservation
        </a>
      </section>
    </main>
  );
}
