import Image from "next/image";
import { Clock, ForkKnife, Moped, PizzaIcon, Storefront, Truck } from "@phosphor-icons/react/dist/ssr";

const tiles = [
  { Icon: PizzaIcon, label: "Order online" },
  { Icon: Truck, label: "Catering truck" },
  { Icon: Storefront, label: "In-store pickup" },
  { Icon: Clock, label: "Lunch menu" },
  { Icon: Moped, label: "Fast delivery" },
  { Icon: ForkKnife, label: "Party trays" },
];

const polaroid = "z-10 w-36 border border-stone-200 bg-white p-2.5 pb-6 shadow-md transition-all hover:z-20 hover:scale-105 sm:w-44";

export function BrandInfo() {
  return (
    <section id="about" className="mb-16 scroll-mt-4 border-y border-stone-300/60 py-6">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-4">
          <h2 className="font-heading text-2xl font-bold uppercase leading-none tracking-tight sm:text-3xl lg:text-4xl">
            Home of the Chicago-style thin crust pizza
          </h2>
          <p className="text-xs leading-relaxed text-stone-600 sm:text-sm">
            Our signature thin crust is tavern-cut, crispy on the bottom, loaded edge-to-edge with premium toppings and our secret spice-blend tomato sauce.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#about" className="rounded-full bg-brand-orange px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orange-hover">Learn more</a>
            <a href="#contact" className="rounded-full bg-stone-200 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-800 transition-colors hover:bg-stone-300">See locations</a>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-sm grid-cols-3 gap-3 lg:col-span-4 lg:max-w-none">
          {tiles.map(({ Icon, label }) => (
            <div key={label} className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-xl bg-brand-orange p-2 text-center text-white shadow-sm transition-transform hover:scale-105">
              <Icon size={28} weight="fill" />
              <span className="text-[10px] font-bold uppercase leading-tight sm:text-xs">{label}</span>
            </div>
          ))}
        </div>

        <div className="relative flex min-h-[260px] items-center justify-center py-4 lg:col-span-4">
          <figure className={`${polaroid} tape-corner-left -rotate-6`}>
            <Image src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop" alt="Chef Marco" width={400} height={300} className="mb-2 h-32 w-full object-cover sm:h-36" />
            <figcaption className="text-center text-[10px] font-bold uppercase tracking-wider text-stone-700">Head Chef Marco</figcaption>
          </figure>
          <figure className={`${polaroid} tape-corner-right -ml-8 mt-6 rotate-6`}>
            <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop" alt="Kitchen team" width={400} height={300} className="mb-2 h-32 w-full object-cover sm:h-36" />
            <figcaption className="text-center text-[10px] font-bold uppercase tracking-wider text-stone-700">Our Kitchen Crew</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
