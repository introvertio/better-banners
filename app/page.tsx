import Image from "next/image";
import Hero from "./components/sections/Hero";
import BannerGenerator from "./components/sections/BannerGenerator";

export default function Home() {
  return (
    <main className="h-svh w-svw overflow-y-scroll overflow-x-hidden snap-y snap-mandatory ">
      <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative bg-main-blue">
        <div className="flex flex-col gap-5 items-center justify-center w-full max-w-2xl p-3">
          <h1 className="text-[50px] [line-height:_1] md:text-[60px] font-black">
            Create Your Social Banner With Style In Minutes
          </h1>
          <div className="flex flex-row items-center justify-between w-full">
            <div className=" animate-bounce transition-all bg-black flex flex-row gap-2 items-center justify-center p-3">
              <p>Rich Customization</p>
            </div>
            <div className=" animate-bounce transition-all bg-black flex flex-row gap-2 items-center justify-center p-3">
              <p>One-click Export</p>
            </div>
            <div className=" animate-bounce transition-all bg-black flex flex-row gap-2 items-center justify-center p-3">
              <p>Stand out</p>
            </div>
          </div>
        </div>
      </section>
      <section id="bannerGenerate">
        <BannerGenerator />
      </section>
    </main>
  );
}
