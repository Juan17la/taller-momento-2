"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { useModals } from "./modals";

export function Hero() {
  const { open } = useModals();
  return (
    <section id="home" className="relative mb-12 overflow-hidden rounded-3xl border border-stone-300/50 shadow-lg">
      <div className="relative flex min-h-[420px] items-end p-4 sm:min-h-[460px] sm:items-start sm:p-10 md:min-h-[520px]">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop"
          alt="Fresh scratch made pizzas"
          fill
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
        <div className="relative max-w-md rounded-2xl border border-stone-800 bg-stone-950/85 p-6 text-white shadow-2xl backdrop-blur-sm sm:p-8">
          <h1 className="mb-3 font-heading text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            For delicious, made-from scratch pizzas
          </h1>
          <p className="mb-6 text-xs font-light leading-relaxed text-stone-300 sm:text-sm">
            Hand-kneaded dough, vine-ripened tomato sauce, and 100% real mozzarella cheese baked fresh daily.
          </p>
          <button
            onClick={() => open("order", "Scratch Pizza Special")}
            className="flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-orange-hover active:scale-95 sm:text-sm"
          >
            Order online <ArrowRight size={14} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
