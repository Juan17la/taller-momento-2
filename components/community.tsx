import Image from "next/image";
import { HandHeart } from "@phosphor-icons/react/dist/ssr";

const photos = [
  ["photo-1565299624946-b28f40a0ae38", "Pizza slice"],
  ["photo-1510693206972-df098062cb71", "Pasta cooking"],
  ["photo-1552566626-52f8b828add9", "Happy customers"],
  ["photo-1590947132387-155cc02f3212", "Fresh ingredients"],
  ["photo-1571091718767-18b5b1457add", "Dining room"],
  ["photo-1528137871618-79d2761e3fd5", "Takeout box"],
];

export function Community() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex h-full flex-col justify-between rounded-3xl border border-stone-200/80 bg-white/70 p-6 shadow-sm sm:p-8 lg:col-span-5">
          <div>
            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-brand-orange">@yourbrandhandle</span>
            <h2 className="mb-3 font-heading text-2xl font-bold uppercase leading-tight sm:text-3xl">Let&apos;s work together for our community</h2>
            <p className="mb-6 text-xs leading-relaxed text-stone-600 sm:text-sm">
              We proudly sponsor local sports teams, school fundraisers, and neighborhood food drives. Partner with Crust Pizza Co. for your next charity event!
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-100 p-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
              <HandHeart size={32} weight="fill" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-stone-900">Fundraising made easy</h4>
              <p className="text-[11px] text-stone-500">We donate 20% of proceeds back to registered local non-profit organizations.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="mb-4 font-heading text-2xl font-bold uppercase tracking-wide sm:text-3xl">Why choose us</h2>
          <div className="grid grid-cols-3 gap-3">
            {photos.map(([id, alt]) => (
              <div key={id} className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={`https://images.unsplash.com/${id}?q=80&w=400&auto=format&fit=crop`}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
