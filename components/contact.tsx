"use client";

import Image from "next/image";
import { Gift, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";
import { useModals } from "./modals";

const actionBtn = "flex flex-col items-center justify-center gap-1 rounded-xl bg-brand-orange p-3 text-center text-white shadow-sm transition-all hover:bg-brand-orange-hover";

export function Contact() {
  const { open } = useModals();
  const request = () => open("request");
  return (
    <section id="contact" className="mb-14 scroll-mt-4">
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        <div className="flex flex-col justify-between rounded-3xl border border-stone-300 bg-stone-200/70 p-6 sm:p-7 lg:col-span-4">
          <div>
            <h3 className="mb-3 font-heading text-xl font-bold uppercase leading-snug sm:text-2xl">Want to own your own Crust Pizza Co.?</h3>
            <p className="mb-6 text-xs leading-relaxed text-stone-600">
              Join our growing franchise family. We offer turnkey operations, comprehensive training, and industry-leading marketing support.
            </p>
          </div>
          <button onClick={request} className="w-full rounded-full bg-brand-orange py-3 text-xs font-bold uppercase tracking-wider text-white shadow transition-colors hover:bg-brand-orange-hover">
            Submit a request
          </button>
        </div>

        <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-stone-300 shadow-md lg:col-span-4">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
            alt="Crust Pizza storefront"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-stone-100 p-6 sm:p-7 lg:col-span-4">
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold uppercase sm:text-2xl">Submit a request</h3>
            <div className="mb-4 grid grid-cols-3 gap-2">
              <a href="#contact" className={actionBtn}><MapPin size={22} weight="fill" /><span className="text-[9px] font-bold uppercase leading-tight">Locations</span></a>
              <a href="#contact" className={actionBtn}><Gift size={22} weight="fill" /><span className="text-[9px] font-bold uppercase leading-tight">Gift cards</span></a>
              <button onClick={request} className={actionBtn}><PaperPlaneTilt size={22} weight="fill" /><span className="text-[9px] font-bold uppercase leading-tight">Relocate</span></button>
            </div>
          </div>
          <p className="text-center text-[11px] text-stone-500">Have a specific question or location suggestion? Let us know!</p>
        </div>
      </div>
    </section>
  );
}
