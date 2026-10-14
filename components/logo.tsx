export function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  return size === "lg" ? (
    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-stone-900 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
      <span className="-mb-1 text-[9px] font-bold uppercase tracking-widest text-stone-500">Est. 2012</span>
      <span className="text-center font-heading text-base font-bold leading-none tracking-tight text-stone-900 sm:text-lg">CRUST</span>
      <span className="-mt-0.5 text-[8px] font-bold uppercase tracking-widest text-brand-orange">Pizza Co.</span>
    </div>
  ) : (
    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full border-2 border-stone-900 bg-white p-1">
      <span className="font-heading text-xs font-bold leading-none">CRUST</span>
      <span className="text-[6px] font-bold uppercase text-brand-orange">Pizza Co.</span>
    </div>
  );
}
