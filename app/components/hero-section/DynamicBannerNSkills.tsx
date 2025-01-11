import React from "react";

export default function DynamicBannerNSkills() {
  return (
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
  );
}
