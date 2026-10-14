import { BrandInfo } from "@/components/brand-info";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { WaysToEnjoy } from "@/components/ways-to-enjoy";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <BrandInfo />
        <WaysToEnjoy />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
