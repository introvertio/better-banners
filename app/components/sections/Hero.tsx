import React from "react";

export default function Hero() {
  return (
    <section className="h-[101svh] flex flex-col gap-1 items-center justify-center snap-start w-full relative bg-main-blue">
      <h1 className="text-7xl font-black text-white">Better</h1>
      <h1 className="text-7xl font-black text-white">Banners.</h1>

      <small className="font-bold absolute bottom-10">
        Scroll and start generating your banner!
      </small>
    </section>
  );
}
