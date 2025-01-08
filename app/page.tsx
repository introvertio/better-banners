import Image from "next/image";
import Hero from "./components/sections/Hero";
import BannerGenerator from "./components/sections/BannerGenerator";

export default function Home() {
  return (
    <main className="h-svh w-svw overflow-scroll snap-y snap-mandatory ">
      <Hero />
      <BannerGenerator />
    </main>
  );
}
