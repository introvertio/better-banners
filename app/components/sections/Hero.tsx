import React from "react";
import { cabinetFont, supremeFont } from "../styling/font-classes";
// import GitHub from "@/svgs/github.svg";
import DynamicBannerNSkills from "../hero-section/DynamicBannerNSkills";

export default function Hero() {
  return (
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
<<<<<<< HEAD
        <p
          className={` ${supremeFont} font-bold text-lg md:text-2xl mr-auto text-white`}
        >
          for
        </p>
      </div>
      <DynamicBannerNSkills />
      <br />

      <a
        target="_blank"
        href="https://github.com/introvertio/better-banners/"
        className="text-white text-xs font-bold flex flex-row gap-2 items-center justify-center bg-black rounded-full active:scale-105 transition-all px-4 py-2"
      >
        {/* <GitHub /> */}
        Open Source
      </a>
=======
      </div>
      <div className="py-8  items-center gap-6 justify-center lg:justify-start lg:w-1/2 relative">
        <div className="animate-bounce hover:animate-none duration-700 delay-[750ms] ease-in z-30 absolute  lg:left-5 lg:top-5 transform hover:-translate-y-1 transition-all  hidden lg:block">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10 shadow-lg hover:shadow-purple-500/20">
            <span className="text-white font-medium tracking-wide text-xs">
              Custom Template
            </span>
          </div>
        </div>
        <div className=" animate-bounce hover:animate-none  delay-300 ease-in-out z-30 absolute lg:-right-14 lg:bottom-10 transform hover:-translate-y-1 transition-all duration-[600ms] hidden lg:block">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10 shadow-lg hover:shadow-blue-500/20">
            <span className="text-white font-medium tracking-wide text-xs">
              Rich Customization
            </span>
          </div>
        </div>
        <div className="animate-bounce hover:animate-none z-30 delay-[800ms] ease-out absolute top-10  right-[3%] -translate-x-1/2 lg:bottom-20 transform hover:-translate-y-1 transition-all duration-[900ms] hidden lg:block">
          <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10 shadow-lg hover:shadow-cyan-500/20">
            <span className="text-white font-medium tracking-wide text-xs">
              One-click Export
            </span>
          </div>
        </div>
        {/* preview */}
        <DynamicPreview/>

        {/* Feature badges */}
        <div className=" flex gap-4 my-3 justify-center">
          {/* <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 ">
            <Image src={github} alt="github" className="text-white h-5 w-5" />
            <a
              href="https://github.com/introvertio/better-banners/"
              className="text-white text-xs font-medium"
            >
              Open Source
            </a>
          </div> */}

          {/* <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            🌟
            <span className="text-white text-sm font-medium">
              4.9 Top Rated
            </span>
          </div> */}
        </div>
      </div>
      {/* brand logo */}
      {/* <div className="flex absolute top-5 font-extrabold items-center">
        <h1>
          <span className="rounded-full text-4xl ">β</span>
        </h1>
        <small className=" text-sm">etter Banner</small>
      </div> */}
      {/* <small className="font-bold absolute bottom-10 text-sm">
        Scroll and start generating your banner!
      </small> */}
>>>>>>> bieeBranch
    </section>
  );
}
