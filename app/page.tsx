import Image from "next/image";
import Hero from "./components/sections/Hero";
import BannerGenerator from "./components/sections/BannerGenerator";
import { supremeFont } from "./components/styling/font-classes";
import RichCustomizationIcon from "@/svgs/rcustom.svg";
import ExportIcon from "@/svgs/export.svg";
import StandoutIcon from "@/svgs/standout.svg";

export default function Home() {
  return (
    <main className="h-svh w-svw overflow-y-scroll overflow-x-hidden snap-y snap-mandatory ">
      <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative bg-main-blue">
        <div className="flex flex-col gap-5 items-center justify-center w-full max-w-2xl p-3">
          <h1 className="text-[45px] [line-height:_1.3] md:text-[60px] font-black">
            Create Your Social Banner With{" "}
            <span className="px-3 p-1 bg-white text-black -z-40  rounded-md ring-4 ring-black underline decoration-4 decoration-main-blue underline-offset-4">
              Style
            </span>{" "}
            In Minutes
          </h1>
          <div
            className={`flex flex-row flex-wrap gap-3 items-center justify-center md:justify-between w-full ${supremeFont} font-extrabold text-sm md:text-lg`}
          >
            <div className="group animate-bounce transition-all bg-black hover:bg-white hover:text-black flex flex-row gap-2 items-center justify-center p-3 rounded-md">
              <RichCustomizationIcon className="group-hover:invert" />
              <p>Rich Customization</p>
            </div>
            <div className="group animate-bounce transition-all bg-black hover:bg-white hover:text-black flex flex-row gap-2 items-center justify-center p-3 rounded-md">
              <ExportIcon className="group-hover:invert" />
              <p>One-click Export</p>
            </div>
            <div className="group animate-bounce transition-all bg-black hover:bg-white hover:text-black flex flex-row gap-2 items-center justify-center p-3 rounded-md">
              <StandoutIcon className="group-hover:invert" />
              <p>Stand out</p>
            </div>
          </div>
          <div className="w-full aspect-[820/310] bg-white flex flex-col"></div>
          <br />
          <br />
        </div>
      </section>
      <section id="bannerGenerate">
        <BannerGenerator />
      </section>
    </main>
  );
}
