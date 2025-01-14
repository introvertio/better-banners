"use client";

import { DynamicPreview } from "../previews/DynamicPreview";
export default function Hero2() {
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

        <DynamicPreview />
      </div>
    </section>
  );
}
