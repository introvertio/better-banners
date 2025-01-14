"use client";
// import { Button } from "../Button";
import Image from "next/image";
import github from "@/public/github.svg";
export default function Hero() {
  return (
    <section
      style={{
        background: "radial-gradient(circle, #4785ff 0%, #011ea0 100%)",
      }}
      className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start  lg:px-8 px-4 "
    >
      <div className="relative flex flex-col items-center justify-center mt-[6rem]">
        <h1 className="lg:text-7xl text-4xl font-black text-white font-[michroma] text-balance text-center lg:leading-[5rem] leading-[3.5rem]">
          Create{" "}
          <div className="font-[montserrat] inline-block bg-black/30 px-4 py-1 rounded-lg drop-shadow-3xl transition-all duration-300 hover:bg-black/70 font-black">
            Stunning
          </div>{" "}
          Social Banners
        </h1>
        <h1 className="text-sm font-semibold text-white py-3 text-center lg:text-start">
          Design eye-catching social media banners in minutes with our intuitive
          generator
        </h1>
        <div className="absolute left-4 top-10 lg:left-20 lg:top-20 transform hover:-translate-y-1 transition-all duration-300 hidden lg:block">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10 shadow-lg hover:shadow-purple-500/20">
            <span className="text-white font-medium tracking-wide text-xs">
              Custom Template
            </span>
          </div>
        </div>
        <div className="absolute right-4 top-10 lg:right-20 lg:top-20 transform hover:-translate-y-1 transition-all duration-300 hidden lg:block">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10 shadow-lg hover:shadow-blue-500/20">
            <span className="text-white font-medium tracking-wide text-xs">
              Rich Customization
            </span>
          </div>
        </div>
        <div className="absolute top-0   right-[5%] -translate-x-1/2 lg:bottom-20 transform hover:-translate-y-1 transition-all duration-300 hidden lg:block">
          <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-xl rounded-xl px-4 py-2 border border-white/10 shadow-lg hover:shadow-cyan-500/20">
            <span className="text-white font-medium tracking-wide text-xs">
              One-click Export
            </span>
          </div>
        </div>
      </div>
      <div className="py-8  items-center gap-6 justify-center lg:justify-start w-1/2">
        {/* preview */}
        <div className="w-full sm:max-w-full md:max-w-screen-md lg:max-w-screen-lg backdrop-blur-sm bg-white/10 dark:bg-black/20 relative flex items-center justify-center rounded-xl aspect-[3/1] overflow-hidden border border-white/20 p-8 shadow-xl flex-col font-[montserrat] text-white">
          {/* Radial gradient overlay with softer transition */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_40%,rgba(1,30,160,10))]">
            {/* Dot pattern with reduced opacity */}
            <div className="absolute inset-0 bg-dot-black"></div>
            <div className="absolute inset-0 bg-grid-small-main-blue/40"></div>
          </div>

          <p className="lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 py-4">
            Web Developer
          </p>
          <p className="text-white/90 relative z-20 text-xs mb-5">
            I like to create things on the web
          </p>

          <div className="  flex items-center gap-2  backdrop-blur-md px-4 py-1 rounded-full bg-black/20">
            <Image src={github} alt="github" className="text-white h-5 w-5" />
            <a
              href="https://github.com/introvertio/better-banners/"
              className="text-white text-xs font-medium"
            >
              Open Source
            </a>
          </div>
        </div>

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
    </section>
  );
}
