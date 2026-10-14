"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ForkKnife, User, X } from "@phosphor-icons/react";

type ModalName = "order" | "request" | "account";
type Ctx = { open: (m: ModalName, item?: string) => void };

const ModalContext = createContext<Ctx>({ open: () => {} });
export const useModals = () => useContext(ModalContext);

const field =
  "w-full bg-stone-100 border border-stone-300 rounded-lg p-2.5 text-xs focus:outline-none focus:border-brand-orange";
const primaryBtn =
  "w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 rounded-full uppercase text-xs tracking-wider transition-colors shadow";

function Modal({
  onClose,
  className,
  children,
}: {
  onClose: () => void;
  className: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-stone-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full rounded-3xl border border-stone-200 bg-white p-6 shadow-2xl sm:p-8 ${className}`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-stone-400 hover:text-stone-800"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalName | null>(null);
  const [item, setItem] = useState("Add to order");
  const close = () => setModal(null);

  const open = (m: ModalName, name?: string) => {
    if (name) setItem(name);
    setModal(m);
  };

  // ponytail: demo handlers use alert like the original; swap for real API calls
  const submit = (msg: string) => (e: React.FormEvent) => {
    e.preventDefault();
    alert(msg);
    close();
  };

  return (
    <ModalContext value={{ open }}>
      {children}

      {modal === "order" && (
        <Modal onClose={close} className="max-w-md">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
              <ForkKnife size={24} />
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase">{item}</h3>
            <p className="text-xs text-stone-500">Customize your selection below</p>
          </div>
          <form onSubmit={submit("Item added to your order cart!")} className="space-y-4">
            <label className="block text-xs font-bold uppercase text-stone-700">
              <span className="mb-1 block">Crust Size</span>
              <select defaultValue="14" className={`${field} font-semibold`}>
                <option value="12">12&quot; Medium Thin Crust</option>
                <option value="14">14&quot; Large Thin Crust (Tavern Cut)</option>
                <option value="16">16&quot; Extra Large Thin Crust</option>
              </select>
            </label>
            <label className="block text-xs font-bold uppercase text-stone-700">
              <span className="mb-1 block">Special Instructions</span>
              <textarea rows={2} placeholder="e.g. Extra crispy, light sauce..." className={field} />
            </label>
            <button type="submit" className={primaryBtn}>
              Confirm &amp; Add To Cart
            </button>
          </form>
        </Modal>
      )}

      {modal === "request" && (
        <Modal onClose={close} className="max-w-md">
          <div className="mb-6 text-center">
            <h3 className="font-heading text-2xl font-bold uppercase">Submit a request</h3>
            <p className="text-xs text-stone-500">Franchising &amp; Community Partnerships</p>
          </div>
          <form
            onSubmit={submit("Thank you! Your request has been received by Crust Pizza Co.")}
            className="space-y-3"
          >
            <input type="text" placeholder="Your Full Name" required className={field} />
            <input type="email" placeholder="Email Address" required className={field} />
            <select className={`${field} font-semibold`}>
              <option>Franchise Opportunity</option>
              <option>Community Event / Sponsorship</option>
              <option>General Inquiry</option>
            </select>
            <textarea
              rows={3}
              required
              placeholder="Tell us about your proposal or preferred city..."
              className={field}
            />
            <button type="submit" className={primaryBtn}>
              Submit Request
            </button>
          </form>
        </Modal>
      )}

      {modal === "account" && (
        <Modal onClose={close} className="max-w-xs text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-800">
            <User size={24} />
          </div>
          <h3 className="mb-1 font-heading text-xl font-bold uppercase">Crust Rewards</h3>
          <p className="mb-4 text-xs text-stone-500">Sign in to earn free pizzas!</p>
          <button
            onClick={() => {
              alert("Google Sign In initialized");
              close();
            }}
            className="mb-2 w-full rounded-full bg-stone-900 py-2.5 text-xs font-bold uppercase text-white transition-colors hover:bg-stone-800"
          >
            Sign In With Google
          </button>
          <button
            onClick={close}
            className="w-full rounded-full bg-stone-200 py-2.5 text-xs font-bold uppercase text-stone-800 transition-colors hover:bg-stone-300"
          >
            Cancel
          </button>
        </Modal>
      )}
    </ModalContext>
  );
}
