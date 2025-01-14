import Hero from "./components/sections/Hero";
import BannerGenerator from "./components/sections/BannerGenerator";

export default function Home() {
  return (
    <main className="h-svh w-svw overflow-y-scroll overflow-x-hidden snap-y snap-mandatory ">
      <Hero />
      <section id="bannerGenerate">
        <BannerGenerator />
      </section>
    </main>
  );
}
