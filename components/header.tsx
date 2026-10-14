"use client";

import { Phone, User, XLogo } from "@phosphor-icons/react";
import { Logo } from "./logo";
import { useModals } from "./modals";

const link = "transition-colors hover:text-brand-orange";
const iconBtn = "rounded-full p-1.5 transition-colors hover:bg-stone-200/60";

export function Header() {
  const { open } = useModals();
  return (
    <header className="mb-6 grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 border-b border-stone-200/60 py-4 text-xs font-bold uppercase tracking-wider sm:text-sm">
      <nav className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <a href="#home" className="rounded-full bg-brand-orange px-4 py-1.5 text-white transition-colors hover:bg-brand-orange-hover">Home</a>
        <a href="#menu" className={link}>Menu</a>
        <a href="#contact" className={`${link} hidden md:inline`}>Catering</a>
        <a href="#menu" className={`${link} hidden lg:inline`}>Order online</a>
      </nav>

      <a href="#home" aria-label="Crust Pizza Co. home" className="group">
        <Logo />
      </a>

      <div className="flex items-center justify-end gap-1 sm:gap-3">
        <a href="#about" className={`${link} hidden lg:inline`}>About</a>
        <a href="#contact" className={`${link} hidden sm:inline`}>Contact</a>
        <button onClick={() => open("account")} className={iconBtn} aria-label="Account">
          <User size={20} weight="bold" />
        </button>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className={`${iconBtn} hidden sm:block`} aria-label="Twitter">
          <XLogo size={20} weight="bold" />
        </a>
        <a href="tel:5550199" className={`${link} flex items-center gap-1.5 px-1`}>
          <Phone size={14} weight="fill" className="text-brand-orange" />
          <span className="hidden sm:inline">Call now</span>
        </a>
      </div>
    </header>
  );
}
