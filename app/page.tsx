import Image from "next/image";
import Hero from "./components/sections/Hero";
import BannerGenerator from "./components/sections/BannerGenerator";
import {
  bespokeFont,
  cabinetFont,
  chillaxFont,
  supremeFont,
} from "./components/styling/font-classes";
import RichCustomizationIcon from "@/svgs/rcustom.svg";
import ExportIcon from "@/svgs/export.svg";
import StandoutIcon from "@/svgs/standout.svg";

export default function Home() {
  return (
    <main className="h-svh w-svw overflow-y-scroll overflow-x-hidden snap-y snap-mandatory ">
      <section
        className={`h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full ${cabinetFont} relative bg-main-blue `}
      >
        <div
          className="flex flex-col gap-5 items-start
         justify-center p-3"
        >
          <h1 className="text-[70px] [line-height:_.7] md:text-[90px] font-black text-main-blue [text-shadow:_-4px_4px_0px_#ffffff]">
            SOCIAL
          </h1>
          <h1 className="text-[70px] [line-height:_.7] md:text-[90px] font-black text-main-blue [text-shadow:_-4px_4px_0px_#ffffff]">
            BANNERS
          </h1>
          <p
            className={` ${supremeFont} font-bold text-xl md:text-3xl mr-auto`}
          >
            for
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <div className="w-full aspect-[820/310] bg-white flex flex-col items-center justify-center max-w-2xl  text-black font-bold">
            <p className=" text-xl ">Dynamically Generated Banner</p>
            <small className="text-center">
              (Text below will be changing and so will the banner)
            </small>
          </div>
          <h2
            className={`text-[55px] [line-height:_.7] md:text-[80px] font-black `}
          >
            DEVELOPERS
          </h2>
        </div>
      </section>
      <section id="bannerGenerate">
        <BannerGenerator />
      </section>
    </main>
  );
}
