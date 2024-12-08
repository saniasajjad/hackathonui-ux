import CarSection from "@/components/sections/CarSection";
import Hero from "@/components/sections/hero";
import PickSection from "@/components/sections/pick-an-drop-picker";
import { carsCollection } from "@/data/cars";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PickSection />
      <CarSection
        isHomePage
         title="Most Selling"
         cars={carsCollection.slice(0, 4)}
      />
      <CarSection
         title="Recomendation Car"
         showMoreButton
         cars={carsCollection.slice(4, 12)}
      />
    </main>
  );
}
