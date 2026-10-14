"use client";

import Image from "next/image";
import { useModals } from "./modals";

const items = [
  { name: "Chicken Parm", price: 14, img: "photo-1574071318508-1cdbab80d002", desc: "Crispy chicken, rich marinara sauce, melted mozzarella & fresh basil." },
  { name: "Chicken Alfredo", price: 15, img: "photo-1555396273-367ea4eb4db5", desc: "Creamy garlic alfredo sauce, grilled chicken breast & toasted parmesan." },
  { name: "Spaghetti & Meatballs", price: 13, img: "photo-1621996346565-e3d5d6281288", desc: "Traditional Italian pasta, handmade meatballs in rich Sunday gravy." },
  { name: "Baked Mac & Cheese", price: 12, img: "photo-1543339308-43e59d6b73a6", desc: "Four-cheese blend, topped with buttered panko breadcrumbs and baked golden." },
];

export function MenuSection() {
  const { open } = useModals();
  return (
    <section id="menu" className="mb-14 scroll-mt-4">
      <h2 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl">Our menu</h2>
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <article key={i.name} className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-stone-100/80 p-3 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="relative mb-3 h-44 overflow-hidden rounded-xl">
                <Image
                  src={`https://images.unsplash.com/${i.img}?q=80&w=600&auto=format&fit=crop`}
                  alt={i.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 rounded-full bg-brand-orange px-2 py-1 text-xs font-bold text-white shadow">${i.price}</span>
              </div>
              <h3 className="mb-1 font-heading text-lg font-bold uppercase">{i.name}</h3>
              <p className="line-clamp-2 text-xs text-stone-600">{i.desc}</p>
            </div>
            <button
              onClick={() => open("order", i.name)}
              aria-label={`Add ${i.name} to order`}
              className="mt-4 flex h-10 w-10 items-center justify-center self-end rounded-full bg-brand-orange text-xs font-bold text-white transition-transform hover:bg-brand-orange-hover hover:scale-110 active:scale-95"
            >
              Do
            </button>
          </article>
        ))}
      </div>
      <div className="text-center">
        <a href="#menu" className="inline-block rounded-full bg-brand-orange px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition-all hover:bg-brand-orange-hover hover:shadow-md sm:text-sm">
          View our complete menu
        </a>
      </div>
    </section>
  );
}
