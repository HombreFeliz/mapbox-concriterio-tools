import { Header } from "@/components/layout/Header";
import { Banners } from "@/components/layout/Banners";
import { StackSection } from "@/components/layout/StackSection";
import { MapboxMap } from "@/components/map/MapboxMap";

export default function Home() {
  return (
    <>
      <Header />
      <MapboxMap />
      <Banners />
      <StackSection />
    </>
  );
}
