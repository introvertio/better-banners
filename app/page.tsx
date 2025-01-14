import Hero from "./components/sections/Hero";

import BannerGenerator from "./components/sections/BannerGenerator";
import Hero2 from "./components/sections/Hero2";

export default function Home() {
  return (
    <main className="h-svh w-svw overflow-y-scroll overflow-x-hidden snap-y snap-mandatory ">
     {true? <Hero />:<Hero2/>}
      <section id="bannerGenerate">
        <BannerGenerator />
      </section>
    </main>
   
  );
}
