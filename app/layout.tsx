import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modals";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. - Made From Scratch",
  description: "Delicious, made-from-scratch Chicago-style thin crust pizzas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${oswald.variable}`}>
      <body className="min-h-screen antialiased selection:bg-brand-orange selection:text-white">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
