import { Logo } from "./logo";

const links = ["Menu", "Catering", "Careers", "Commissions", "Privacy", "Terms"];

export function Footer() {
  return (
    <footer className="border-t border-stone-300/80 pb-12 pt-8">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Logo size="sm" />
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Want to place an order now?</h4>
            <p className="text-xs text-stone-500">Call your local branch or order online for fast pickup.</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-stone-700">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-brand-orange">{l}</a>
          ))}
        </nav>
      </div>
      <p className="mt-8 text-center text-[11px] text-stone-400">
        &copy; 2026 Crust Pizza Co. All rights reserved. Built with precision and passion.
      </p>
    </footer>
  );
}
