"use client";

import Image from "next/image";
import { Baby, Crown, Trophy } from "@phosphor-icons/react";
import { useModals } from "./modals";

const cards = [
  {
    Icon: Trophy,
    title: "Award-winning pizza & service",
    text: "Voted Chicago's Best Thin Crust 3 years in a row. Experience our quick delivery and unparalleled customer care.",
    cta: "Learn more",
    item: "Award Winning Crust",
  },
  {
    Icon: Baby,
    title: "Kids eat free Tuesdays!",
    text: "Treat the whole family! Get one free kid’s personal pizza with every adult large pizza purchase every Tuesday.",
    cta: "View our complete menu",
    item: "Kids Tuesday Deal",
  },
];

export function WaysToEnjoy() {
  const { open } = useModals();
  return (
    <section className="mb-10">
      <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl">
        Ways to enjoy
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="group relative min-h-[260px] overflow-hidden rounded-3xl border border-stone-300/40 bg-stone-900 shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1000&auto=format&fit=crop"
            alt="Pizza"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="stamp-circle flex h-36 w-36 flex-col items-center justify-center bg-white/90 p-2 text-center shadow-2xl backdrop-blur-md sm:h-44 sm:w-44">
              <Crown
                size={22}
                weight="fill"
                className="mb-1 text-brand-orange"
              />
              <span className="font-heading text-xl font-bold leading-none text-stone-900 sm:text-2xl">
                CRUST
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-brand-orange">
                Pizza Co.
              </span>
              <span className="mt-1 text-[8px] font-semibold tracking-tighter text-stone-500">
                ALWAYS FRESH
              </span>
            </div>
          </div>
        </div>

        {cards.map(({ Icon, title, text, cta, item }) => (
          <div
            key={title}
            className="flex flex-1 flex-col justify-between rounded-3xl border border-stone-800 bg-stone-900 p-6 text-white shadow-md sm:p-7"
          >
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange">
                <Icon size={22} weight="fill" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold uppercase tracking-wide sm:text-2xl">
                {title}
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-stone-400 sm:text-sm">
                {text}
              </p>
            </div>
            <div>
              <button
                onClick={() => open("order", item)}
                className="rounded-full bg-brand-orange px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-orange-hover"
              >
                {cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
