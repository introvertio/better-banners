import React from "react";
// import { Button } from "../Button";
import Image from "next/image";
import github from "@/public/github.svg";
export default function Hero() {
  return (
    <section
      style={{
        background: "radial-gradient(circle, #4785ff 0%, #011ea0 100%)",
      }}
      className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start  lg:px-8 px-4"
    >
      <div className="relative flex flex-col items-center justify-center mt-2">
        <h1 className="lg:text-7xl text-4xl font-black text-white font-[michroma] text-balance text-center lg:leading-[5rem] leading-[3.5rem]">
          Create{" "}
          <span className="font-[montserrat] inline-block bg-black/30 px-4 py-1 rounded-lg drop-shadow-3xl transition-all duration-300 hover:bg-black font-black">
            Stunning
          </span>{" "}
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
      <div className="py-8  items-center gap-6 justify-center lg:justify-start">
        {/* preview */}
        <div className="w-full bg-transparent backdrop-blur-3xl rounded-md aspect-[3/1] border border-white/10 shadow-lg overflow-hidden">
          <div>sjdkjsdksjdksjdk</div>
          <div>sjdkjsdksjdksjdk</div>
          <div>sjdkjsdksjdksjdk</div>
        </div>

        {/* Primary CTA Button */}
        {/* <Button
          text="Start Creating"
          href="#bannerGenerate"
          className="bg-black py-3 px-8 ring-white ring-1 rounded-full hover:bg-black/30 hover:text-white transition-all duration-300 text-white font-medium w-full mb-3 font-[michroma] text-sm"
        /> */}

        {/* Feature badges */}
        <div className=" flex gap-4 my-3 justify-center">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 ">
            <Image src={github} alt="github" className="text-white h-5 w-5" />
            <a
              href="https://github.com/introvertio/better-banners/"
              className="text-white text-xs font-medium"
            >
              Open Source
            </a>
          </div>

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
